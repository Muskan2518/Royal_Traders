"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Row = {
  timestamp: string;
  name: string;
  phone: string;
  location: string;
  category: string;
  message: string;
  contactPref: string;
};

type Bucket = "metal" | "furniture" | "ac" | "generator" | "office" | "restaurant" | "other";
type Period = "week" | "month" | "all";

const BUCKET_LABEL: Record<Bucket, string> = {
  metal: "Scrap Metal",
  furniture: "Old Furniture",
  ac: "AC",
  generator: "Generator",
  office: "Office Furniture",
  restaurant: "Restaurant & Hotel",
  other: "Other"
};

const BUCKET_CHIP: Record<Bucket, string> = {
  metal: "bg-brand-50 text-brand-700",
  furniture: "bg-accent-50 text-accent-700",
  ac: "bg-sky-50 text-sky-700",
  generator: "bg-rose-50 text-rose-700",
  office: "bg-emerald-50 text-emerald-700",
  restaurant: "bg-amber-50 text-amber-700",
  other: "bg-slate-100 text-slate-600"
};

function bucketize(category: string): Bucket {
  const c = (category || "").toLowerCase();
  if (c.includes("restaurant") || c.includes("hotel") || c.includes("cafe") || c.includes("bakery")) return "restaurant";
  if (c.includes("office")) return "office";
  if (c.includes("ac") || c.includes("air condition")) return "ac";
  if (c.includes("generator")) return "generator";
  if (c.includes("furniture")) return "furniture";
  if (c.includes("scrap") || c.includes("metal")) return "metal";
  return "other";
}

function formatDate(ts: string) {
  const d = new Date(ts);
  if (isNaN(d.getTime())) return { date: ts, time: "" };
  const date = d.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
  const time = d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });
  return { date, time };
}

function digitsOnly(s: string) {
  return s.replace(/[^\d]/g, "");
}

function isWithin(ts: string, period: Period): boolean {
  if (period === "all") return true;
  const d = new Date(ts);
  if (isNaN(d.getTime())) return false;
  const now = Date.now();
  const ms = period === "week" ? 7 * 86400_000 : 30 * 86400_000;
  return now - d.getTime() <= ms;
}

const PAGE_SIZE = 4;

export default function AdminDashboardPage() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  const [bucket, setBucket] = useState<Bucket | "all">("all");
  const [period, setPeriod] = useState<Period>("week");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/api/admin/requests", { cache: "no-store" });
        const data = await r.json();
        if (!r.ok) throw new Error(data.message || "Failed to load");
        if (!cancelled) setRows(data.rows || []);
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const weekly = useMemo(() => rows.filter((r) => isWithin(r.timestamp, "week")), [rows]);
  const monthly = useMemo(() => rows.filter((r) => isWithin(r.timestamp, "month")), [rows]);

  const inPeriod = useMemo(() => rows.filter((r) => isWithin(r.timestamp, period)), [rows, period]);

  const bucketCounts = useMemo(() => {
    const counts: Record<Bucket, number> = { metal: 0, furniture: 0, ac: 0, generator: 0, office: 0, restaurant: 0, other: 0 };
    for (const r of inPeriod) counts[bucketize(r.category)]++;
    return counts;
  }, [inPeriod]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const qDigits = digitsOnly(q);
    return inPeriod
      .filter((r) => bucket === "all" || bucketize(r.category) === bucket)
      .filter((r) => {
        if (!q) return true;
        const hay = `${r.name} ${r.location}`.toLowerCase();
        if (hay.includes(q)) return true;
        if (qDigits && digitsOnly(r.phone).includes(qDigits)) return true;
        if (qDigits && r.location.includes(qDigits)) return true;
        return false;
      })
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [inPeriod, bucket, search]);

  useEffect(() => setPage(1), [bucket, period, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function exportCsv() {
    const header = ["Date & Time", "Name", "Phone", "Pickup Address", "Category", "Scrap Type", "Message", "Contact Pref"];
    const lines = [header.join(",")];
    for (const r of filtered) {
      const b = bucketize(r.category);
      const cells = [
        r.timestamp,
        r.name,
        r.phone,
        r.location,
        r.category,
        BUCKET_LABEL[b],
        r.message,
        r.contactPref
      ].map((v) => {
        const s = String(v ?? "").replace(/"/g, '""');
        return /[",\n]/.test(s) ? `"${s}"` : s;
      });
      lines.push(cells.join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `royal-traders-requests-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const periodLabel = period === "week" ? "This Week" : period === "month" ? "This Month" : "All Time";
  const periodNoun = period === "week" ? "weekly" : period === "month" ? "monthly" : "all-time";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-brand-50/40 to-brand-50/30 text-ink-900 overflow-hidden">
      <DotsPattern className="absolute top-24 left-2 hidden md:block" />
      <DotsPattern className="absolute bottom-24 right-6 hidden md:block opacity-40" />
      <WaveDecoration className="absolute -bottom-2 -left-2 w-44 h-44 text-brand-100 opacity-60 pointer-events-none" />

      <header className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b border-brand-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-brand-100">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-brand-600/30">RT</div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold text-ink-900">Royal Traders</div>
              <div className="text-[10px] text-ink-500 -mt-0.5">Admin Console</div>
            </div>
          </div>
          <div className="flex-1 max-w-md relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone, or pincode..."
              className="w-full rounded-full border border-brand-100 bg-brand-50/50 pl-10 pr-4 py-2 text-sm focus:border-brand-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-accent-50 text-accent-700 ring-1 ring-accent-200 px-2.5 py-1 text-xs font-semibold">
              <SparkleIcon className="h-3 w-3" />
              Admin
            </span>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-3 py-1.5 shadow-sm transition"
            >
              <SignOutIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50/80 px-3 py-1.5 text-xs font-medium text-brand-800 ring-1 ring-brand-100">
              <SparkleIcon className="h-3.5 w-3.5 text-brand-600" />
              <span>Live customer pipeline</span>
              <PinIcon className="h-3.5 w-3.5 text-accent-500" />
            </div>
            <h1 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              <span className="text-ink-900">Customer Requests </span>
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 bg-clip-text text-transparent">Organizer</span>
            </h1>
            <p className="text-sm text-ink-600 mt-2 max-w-xl">Review and allocate incoming scrap collection requests across Hyderabad.</p>
          </div>
          <div className="flex gap-3">
            <StatCard label="WEEKLY VOLUME" value={weekly.length} tone="brand" />
            <StatCard label="MONTHLY TOTAL" value={monthly.length} tone="accent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <CategoryTile label="Scrap" count={bucketCounts.metal} icon={<WrenchIcon />} tone="from-brand-700 via-brand-800 to-brand-950" active={bucket === "metal"} onClick={() => setBucket(bucket === "metal" ? "all" : "metal")} />
          <CategoryTile label="Furniture" count={bucketCounts.furniture} icon={<SofaIcon />} tone="from-accent-600 via-accent-700 to-accent-900" active={bucket === "furniture"} onClick={() => setBucket(bucket === "furniture" ? "all" : "furniture")} />
          <CategoryTile label="AC Units" count={bucketCounts.ac} icon={<SnowIcon />} tone="from-brand-600 via-brand-700 to-brand-900" active={bucket === "ac"} onClick={() => setBucket(bucket === "ac" ? "all" : "ac")} />
          <CategoryTile label="Generator" count={bucketCounts.generator} icon={<BoltIcon />} tone="from-accent-500 via-accent-600 to-accent-800" active={bucket === "generator"} onClick={() => setBucket(bucket === "generator" ? "all" : "generator")} />
          <CategoryTile label="Office" count={bucketCounts.office} icon={<BriefcaseIcon />} tone="from-brand-800 via-brand-900 to-brand-950" active={bucket === "office"} onClick={() => setBucket(bucket === "office" ? "all" : "office")} />
          <CategoryTile label="Restaurant" count={bucketCounts.restaurant} icon={<PlateIcon />} tone="from-amber-500 via-amber-600 to-amber-800" active={bucket === "restaurant"} onClick={() => setBucket(bucket === "restaurant" ? "all" : "restaurant")} />
        </div>

        <div className="bg-white rounded-2xl border border-brand-100 shadow-md shadow-brand-900/5 overflow-hidden">
          <div className="p-4 flex flex-wrap items-center gap-3 border-b border-brand-100 bg-gradient-to-r from-white via-brand-50/40 to-white">
            <div className="flex flex-wrap items-center gap-2">
              <FilterPill active={bucket === "all"} onClick={() => setBucket("all")}>All Requests</FilterPill>
              <FilterPill active={bucket === "metal"} onClick={() => setBucket("metal")}>Scrap Metal</FilterPill>
              <FilterPill active={bucket === "furniture"} onClick={() => setBucket("furniture")}>Old Furniture</FilterPill>
              <FilterPill active={bucket === "ac"} onClick={() => setBucket("ac")}>AC</FilterPill>
              <FilterPill active={bucket === "generator"} onClick={() => setBucket("generator")}>Generator</FilterPill>
              <FilterPill active={bucket === "office"} onClick={() => setBucket("office")}>Office</FilterPill>
              <FilterPill active={bucket === "restaurant"} onClick={() => setBucket("restaurant")}>Restaurant</FilterPill>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as Period)}
                className="appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium pr-8 cursor-pointer"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="all">All Time</option>
              </select>
              <button
                onClick={exportCsv}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-3 py-2"
              >
                <DownloadIcon className="h-4 w-4" /> Download to Excel
              </button>
            </div>
          </div>

          {loading ? (
            <div className="p-10 text-center text-slate-400 text-sm">Loading requests…</div>
          ) : err ? (
            <div className="p-10 text-center text-red-600 text-sm">{err}</div>
          ) : pageRows.length === 0 ? (
            <div className="p-10 text-center text-slate-400 text-sm">No requests match the current filters.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs font-semibold text-brand-700 uppercase tracking-wider bg-brand-50/60">
                    <th className="px-4 py-3 w-32">Date &amp; Time</th>
                    <th className="px-4 py-3">Customer Details</th>
                    <th className="px-4 py-3">Pickup Address</th>
                    <th className="px-4 py-3">Scrap Type</th>
                    <th className="px-4 py-3">Message/Notes</th>
                    <th className="px-4 py-3 text-center">Pref.</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pageRows.map((r, i) => {
                    const b = bucketize(r.category);
                    const { date, time } = formatDate(r.timestamp);
                    const phoneDigits = digitsOnly(r.phone);
                    return (
                      <tr key={`${r.timestamp}-${i}`} className="hover:bg-slate-50/60">
                        <td className="px-4 py-4 align-top">
                          <div className="text-slate-700">{date}</div>
                          <div className="text-xs text-slate-400">{time}</div>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <div className="font-semibold text-slate-900">{r.name}</div>
                          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                            <span>+91 {r.phone.replace(/^\+?91\s?/, "")}</span>
                            <a href={`https://wa.me/${phoneDigits.startsWith("91") ? phoneDigits : "91" + phoneDigits}`} target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-emerald-700" title="WhatsApp">
                              <WhatsAppIcon className="h-4 w-4" />
                            </a>
                            <a href={`tel:+91${phoneDigits.replace(/^91/, "")}`} className="text-slate-500 hover:text-slate-700" title="Call">
                              <PhoneIcon className="h-4 w-4" />
                            </a>
                          </div>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <AddressCell location={r.location} />
                        </td>
                        <td className="px-4 py-4 align-top">
                          <span className={`inline-block rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${BUCKET_CHIP[b]}`}>
                            {BUCKET_LABEL[b]}
                          </span>
                        </td>
                        <td className="px-4 py-4 align-top max-w-[14rem]">
                          <span className="text-slate-700 line-clamp-2" title={r.message}>{r.message}</span>
                        </td>
                        <td className="px-4 py-4 align-top text-center text-slate-400">
                          <PrefIcon pref={r.contactPref} />
                        </td>
                        <td className="px-4 py-4 align-top text-center text-slate-400">
                          <button className="h-7 w-7 rounded-md hover:bg-slate-100 inline-flex items-center justify-center" title="More">
                            <DotsIcon className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="p-4 flex flex-wrap items-center gap-3 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Showing {pageRows.length} of {filtered.length} {periodNoun} request{filtered.length === 1 ? "" : "s"}
              {bucket !== "all" ? ` · ${BUCKET_LABEL[bucket]}` : ""}
            </p>
            <div className="ml-auto flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-xs text-slate-500 px-1">{page} / {totalPages}</span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg bg-brand-700 hover:bg-brand-800 text-white px-3 py-1.5 text-sm font-medium disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 pb-6">{periodLabel} · {filtered.length} request{filtered.length === 1 ? "" : "s"} after filters</p>
      </main>
    </div>
  );
}

function StatCard({ label, value, tone = "brand" }: { label: string; value: number; tone?: "brand" | "accent" }) {
  const stripe = tone === "accent"
    ? "from-accent-400 to-accent-600"
    : "from-brand-500 to-brand-700";
  const valueText = tone === "accent" ? "text-accent-700" : "text-brand-700";
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-brand-100 shadow-md shadow-brand-900/5 px-5 py-3 min-w-[160px]">
      <span className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${stripe}`} />
      <p className="text-[10px] font-bold tracking-widest text-ink-400">{label}</p>
      <p className={`text-3xl font-extrabold leading-tight ${valueText}`}>{value}</p>
    </div>
  );
}

function CategoryTile({ label, count, icon, tone, active, onClick }: { label: string; count: number; icon: React.ReactNode; tone: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left overflow-hidden rounded-2xl bg-gradient-to-br ${tone} p-4 shadow-lg shadow-ink-900/10 transition hover:-translate-y-1 hover:shadow-xl ${active ? "ring-2 ring-accent-400 ring-offset-2 ring-offset-white" : ""}`}
    >
      <span className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{label}</p>
          <p className="text-3xl font-extrabold text-white mt-1 drop-shadow">{count}</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur text-white ring-1 ring-white/20">
          {icon}
        </span>
      </div>
      {active && (
        <span className="absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-wider text-accent-300">● Active</span>
      )}
    </button>
  );
}

function FilterPill({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${active ? "bg-brand-700 text-white" : "bg-white text-slate-600 hover:bg-brand-50 border border-slate-200"}`}
    >
      {children}
    </button>
  );
}

function AddressCell({ location }: { location: string }) {
  const pin = location.match(/\b\d{6}\b/)?.[0];
  const main = pin ? location.replace(pin, "").replace(/[,\s-]+$/, "") : location;
  return (
    <div>
      <div className="text-slate-700">{main || "—"}</div>
      {pin && <div className="text-xs text-slate-400 mt-0.5">Pincode: {pin}</div>}
    </div>
  );
}

function PrefIcon({ pref }: { pref: string }) {
  const p = (pref || "").toLowerCase();
  if (p === "whatsapp") return <WhatsAppIcon className="h-4 w-4 mx-auto text-emerald-600" />;
  if (p === "email") return <MailIcon className="h-4 w-4 mx-auto" />;
  if (p === "call") return <PhoneIcon className="h-4 w-4 mx-auto" />;
  return <ChatIcon className="h-4 w-4 mx-auto" />;
}

/* ---------- icons (inline SVGs, no extra deps) ---------- */

function SearchIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>); }
function SignOutIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>); }
function DownloadIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>); }
function PhoneIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z"/></svg>); }
function WhatsAppIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>); }
function MailIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>); }
function ChatIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>); }
function DotsIcon({ className = "" }) { return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>); }
function WrenchIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M14.7 6.3a4 4 0 0 1 0 5.7L4 22.6 1.4 20l10.6-10.6a4 4 0 0 1 2.7-1.1z"/><path d="m18 2 4 4-3 3-4-4z"/></svg>); }
function SofaIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M20 12V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/><path d="M2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M6 18v2M18 18v2"/></svg>); }
function SnowIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/></svg>); }
function BoltIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg>); }
function BriefcaseIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>); }
function PlateIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M3 12h2M19 12h2"/></svg>); }
function SparkleIcon({ className = "" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"/></svg>); }
function PinIcon({ className = "" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>); }
function DotsPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-6 gap-2 pointer-events-none ${className}`} aria-hidden>
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-400/60" />
      ))}
    </div>
  );
}
function WaveDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M-10 120 Q40 80, 90 120 T 200 120" />
      <path d="M-10 150 Q40 110, 90 150 T 200 150" />
      <path d="M-10 180 Q40 140, 90 180 T 200 180" />
    </svg>
  );
}
