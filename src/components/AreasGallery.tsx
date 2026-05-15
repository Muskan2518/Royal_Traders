"use client";

import { useState, useMemo } from "react";
import { serviceAreas } from "@/data/serviceAreas";
import LocationLottie from "@/components/LocationLottie";

// Map areas to zones based on actual Hyderabad geography
const areaToZoneMap: Record<string, string> = {
  // CENTRAL/OLD CITY
  "Abids": "Central",
  "Charminar": "Central",
  "Khairatabad": "Central",
  "Balapur X Road": "Central",
  "Dhoolpet": "Central",
  "Secretariat": "Central",
  "Yakutpura": "Central",
  "Chaderghat": "Central",
  "Padmarao Nagar": "Central",
  "Kachiguda": "Central",

  // NORTH (Secunderabad, Hyderabad north side)
  "Secunderabad": "North",
  "Bowenpally": "North",
  "Begum Bazar": "North",
  "Kompally": "North",
  "Trimulgherry": "North",
  "Ameerpet": "North",
  "Sanath Nagar": "North",
  "Lingampally": "North",
  "Ashok Nagar": "North",
  "West Marredpally": "North",
  "Mehdipatnam": "North",
  "Himayat Nagar": "North",
  "Kukatpally": "North",
  "KPHB Colony": "North",
  "Yapral": "North",
  "Manikonda": "North",
  "Somajiguda": "North",
  "Kavadiguda": "North",
  "Sri Nagar Colony": "North",

  // EAST (IT corridor and eastern areas)
  "Shamirpet": "East",
  "Karmanghat": "East",
  "Ecil": "East",
  "Hill Fort": "East",
  "Bahadurpura": "East",
  "Shah Ali Banda": "East",
  "Thc": "East",
  "Suchitra Cross Road": "East",
  "Nagole": "East",
  "R C Imarat": "East",
  "Meerpet": "East",
  "Medipalli": "East",
  "Boduppal": "East",
  "Bandlaguda": "East",
  "Sainikpuri": "East",

  // SOUTH (Southern areas)
  "Chanda Nagar": "South",
  "HCL": "South",
  "Falaknuma": "South",
  "Chintal": "South",
  "Jeedimetla": "South",
  "Neredmet": "South",
  "Vijay Nagar Colony": "South",
  "Kanchan Bagh": "South",
  "Santosh Nagar": "South",
  "Dilsukh Nagar": "South",
  "Koti": "South",
  "Nizampet": "South",

  // WEST (Hitech City, Gachibowli, IT corridor)
  "Gachibowli": "West",
  "Kothapet": "West",
  "Bala Nagar": "West",
  "Sanjeeva Reddy Nagar": "West",
  "Uppal": "West",
  "Moula Ali": "West",
  "Raj Bhawan": "West",
  "Sobhana Colony": "West",
  "Gandi Maisamma": "West",
  "Yousufguda": "West",
  "Malkajgiri": "West",
  "Attapur": "West",
  "Miyapur": "West",
  "Rama Krishnapuram (RR)": "West",
  "Jai Jawan Colony (Rangareddy)": "West",
  "Chitrapuri Colony (Rangareddy)": "West",
  "Vengal Rao Nagar (Rangareddy)": "West",
  "Gopanpally": "West",
  "Rajiv Gandhi Circle": "West",
  "IBC Hyderabad": "West",
  "Prashasan Nagar (Rangareddy)": "West",
  "ISB Campus": "West",
  "Badangpet": "West",
  "Motinagar (RR)": "West",
  "Autonagar (RR)": "West",
  "Vikarabad": "West",
  "Medchal": "West",
  "Beeramguda": "West",
  "Patancheru": "West",
  "Ibrahimpatnam": "West",
};

const getZoneForArea = (areaName: string): string => {
  return areaToZoneMap[areaName] || "Central";
};

const zoneColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "Central": { bg: "from-accent-50 to-accent-100", text: "text-accent-700", border: "border-accent-200", dot: "bg-accent-500" },
  "North": { bg: "from-accent-50 to-accent-100", text: "text-accent-700", border: "border-accent-200", dot: "bg-accent-500" },
  "South": { bg: "from-accent-50 to-accent-100", text: "text-accent-700", border: "border-accent-200", dot: "bg-accent-500" },
  "East": { bg: "from-brand-50 to-brand-100", text: "text-brand-700", border: "border-brand-200", dot: "bg-brand-500" },
  "West": { bg: "from-brand-50 to-brand-100", text: "text-brand-700", border: "border-brand-200", dot: "bg-brand-500" },
};

export default function AreasGallery() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAreas = useMemo(() => {
    if (!searchTerm.trim()) return serviceAreas;
    const query = searchTerm.toLowerCase();
    return serviceAreas.filter(
      (area) =>
        area.pincode.includes(query) ||
        area.name.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  const groupedAreas = useMemo(() => {
    const grouped: Record<string, typeof serviceAreas> = {
      Central: [],
      North: [],
      South: [],
      East: [],
      West: [],
    };

    filteredAreas.forEach((area) => {
      const zone = getZoneForArea(area.name);
      if (grouped[zone]) grouped[zone].push(area);
    });

    return grouped;
  }, [filteredAreas]);

  const zoneEmojis: Record<string, string> = {
    "Central": "🏙️",
    "North": "⬆️",
    "South": "⬇️",
    "East": "➡️",
    "West": "⬅️"
  };

  const zoneStats = useMemo(() => {
    return {
      "Central": filteredAreas.filter(a => getZoneForArea(a.name) === "Central").length,
      "North": filteredAreas.filter(a => getZoneForArea(a.name) === "North").length,
      "South": filteredAreas.filter(a => getZoneForArea(a.name) === "South").length,
      "East": filteredAreas.filter(a => getZoneForArea(a.name) === "East").length,
      "West": filteredAreas.filter(a => getZoneForArea(a.name) === "West").length,
    };
  }, [filteredAreas]);

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-50 to-brand-50" />
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
          <div className="absolute -top-32 right-1/4 h-[50rem] w-[50rem] rounded-full bg-brand-300/30 blur-3xl opacity-100" />
          <div className="absolute -bottom-32 left-1/3 h-[45rem] w-[45rem] rounded-full bg-accent-200/25 blur-3xl opacity-80" />
          <div className="absolute top-1/3 right-0 h-[40rem] w-[40rem] rounded-full bg-brand-200/20 blur-3xl opacity-60" />
        </div>

        <div className="container py-12 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              {/* Header Badges */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-3 py-1 text-xs font-semibold border border-brand-200">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Coverage Map
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 text-accent-800 px-3 py-1 text-xs font-semibold border border-accent-200">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                  Active in All Zones
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mt-4 max-w-4xl leading-tight">
                Service Areas Across <span className="gradient-text">Hyderabad</span>
              </h1>
              <p className="text-base md:text-lg text-ink-700 mt-3 max-w-2xl">
                Trusted by thousands. 85+ pincodes covered with free pickup, fair pricing, and instant payment.
              </p>
            </div>
            <LocationLottie className="w-40 h-40 md:w-56 md:h-56 justify-self-center md:justify-self-end" />
          </div>

          {/* Zone Cards - Enhanced */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {(["Central", "North", "South", "East", "West"] as const).map((zone, idx) => {
              const colors = zoneColors[zone] || zoneColors["Central"];
              const count = zoneStats[zone];

              return (
                <div
                  key={zone}
                  className={`group relative overflow-hidden rounded-xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
                >
                  {/* Decorative corner accent */}
                  <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full ${colors.dot} opacity-10 group-hover:opacity-20 transition-opacity`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                      {zoneEmojis[zone]}
                    </div>
                    <h3 className="text-lg font-bold text-ink-900 mb-0.5">{zone}</h3>
                    <p className={`text-xs font-medium ${colors.text} mb-3`}>Zone</p>
                    <div className="pt-2.5 border-t border-current border-opacity-20">
                      <div className="text-xl font-bold text-ink-900">{count}</div>
                      <div className="text-xs text-ink-600 mt-0.5">{count === 1 ? "Area" : "Areas"}</div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity -z-10`} />
                </div>
              );
            })}
          </div>

          {/* Stats Row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-ink-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-700">85+</div>
              <div className="text-xs text-ink-600 mt-1">Pincodes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-700">5</div>
              <div className="text-xs text-ink-600 mt-1">Zones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-700">Free</div>
              <div className="text-xs text-ink-600 mt-1">Pickup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-700">Instant</div>
              <div className="text-xs text-ink-600 mt-1">Payment</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section -mt-6 relative z-10">
        <div className="container">
          <div className="mb-10">
            <div className="relative">
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by pincode or area name... (e.g., 500001 or Hitech City)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-brand-200 bg-white text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition shadow-sm hover:shadow-md"
              />
            </div>
            {searchTerm && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-50 px-4 py-2 border border-brand-100">
                <svg className="h-4 w-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-brand-800">
                  Found <span className="font-bold text-brand-900">{filteredAreas.length}</span> {filteredAreas.length === 1 ? "area" : "areas"}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-10">
            {Object.entries(groupedAreas).map(([zone, areas]) => {
              if (areas.length === 0) return null;
              const colors = zoneColors[zone] || zoneColors["Central"];
              const zoneIcons: Record<string, string> = {
                "Central": "🏙️",
                "North": "⬆️",
                "South": "⬇️",
                "East": "➡️",
                "West": "⬅️"
              };

              return (
                <div key={zone}>
                  <div className={`mb-6 flex items-center gap-3 pb-4 border-b-2 ${colors.border}`}>
                    <div className={`text-3xl`}>{zoneIcons[zone]}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-ink-900">{zone} Zone</h3>
                      <p className={`text-sm ${colors.text} font-medium`}>{areas.length} service areas</p>
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {areas.map((area) => (
                      <div
                        key={area.pincode}
                        className={`group flex flex-col gap-2.5 rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} px-5 py-4 transition hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between">
                          <LocationLottie src="/lottie/location-pin.json" hoverPlay className="h-7 w-7 shrink-0 -my-1" />
                          <span className={`font-mono text-xs font-extrabold tracking-wider ${colors.text}`}>{area.pincode}</span>
                        </div>
                        <span className="text-sm font-semibold text-ink-900 group-hover:text-ink-700 transition">{area.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredAreas.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">No areas found</h3>
              <p className="text-ink-600 mb-6">We couldn't find any areas matching <span className="font-semibold">"{searchTerm}"</span></p>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-700 to-brand-900 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
