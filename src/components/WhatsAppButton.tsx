import { telLink, whatsappLink } from "@/lib/constants";

export default function WhatsAppButton({ message }: { message?: string }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink(message || "Hi, I want to sell my scrap / used items.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white hover:scale-110 hover:bg-[#1ebe5a] transition"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.86 11.86 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.003-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.518 5.26l.181.288-.999 3.648 3.787-.999.002.1zM17.367 14.42c-.073-.122-.27-.196-.566-.345-.296-.148-1.752-.864-2.024-.964-.272-.099-.47-.148-.668.149-.198.297-.768.964-.94 1.162-.173.198-.347.223-.643.074-.297-.149-1.252-.462-2.385-1.471-.881-.786-1.476-1.756-1.65-2.054-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.207-.241-.579-.486-.5-.668-.51l-.57-.01c-.198 0-.52.075-.793.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.073.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.752-.717 2-1.41.247-.694.247-1.288.173-1.412z" />
        </svg>
      </a>

      <a
        href={telLink()}
        aria-label="Call us"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#0f1c36] text-white shadow-lg ring-4 ring-white hover:scale-110 hover:bg-[#070f22] transition animate-pulse-ring"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
