"use client";

import React from "react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917350695999?text=Hi%20Mehraj,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2 30l6.78-2.1c2.1 1.25 4.54 1.98 7.22 1.98 7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.3 0-4.43-.63-6.26-1.74l-.45-.27-4.24 1.31 1.33-4.13-.3-.47C4.85 20.3 4.2 18.2 4.2 16c0-6.52 5.28-11.8 11.8-11.8 6.52 0 11.8 5.28 11.8 11.8 0 6.52-5.28 11.8-11.8 11.8zm6.47-8.84c-.35-.18-2.09-1.03-2.42-1.15-.32-.12-.56-.18-.8.18-.24.35-.92 1.15-1.12 1.39-.2.24-.4.27-.75.09-.35-.18-1.48-.55-2.83-1.75-1.05-.93-1.76-2.09-1.96-2.44-.2-.35-.02-.54.16-.71.16-.16.35-.4.53-.6.18-.2.24-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.93-1.1-2.65-.29-.7-.59-.6-.8-.61h-.69c-.24 0-.62.09-.95.44-.32.35-1.24 1.21-1.24 2.96s1.27 3.44 1.45 3.68c.18.24 2.5 3.82 6.06 5.35.85.37 1.51.58 2.02.75.85.27 1.63.23 2.24.14.68-.1 2.09-.85 2.39-1.68.29-.82.29-1.53.2-1.68-.08-.14-.32-.23-.67-.41z" />
      </svg>
      {/* Tooltip on hover */}
      <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-black text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        Chat with Mehraj
      </span>
    </a>
  );
}
