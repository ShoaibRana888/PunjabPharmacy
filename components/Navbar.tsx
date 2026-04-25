"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <span className="font-extrabold text-gray-900 dark:text-white text-lg tracking-wide">PUNJAB PHARMACY</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-white font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="tel:03220707888"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Call Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-gray-600 dark:text-gray-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-white font-medium py-1 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:03220707888"
            className="bg-green-600 text-white text-center py-2 rounded-lg font-semibold">
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
