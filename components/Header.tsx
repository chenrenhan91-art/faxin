"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Service", hasMenu: true },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/5 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="UuuPayUuu home">
          <Logo markSize={36} priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.hasMenu ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[15px] text-heading transition-colors hover:text-accent"
                  onMouseEnter={() => setSvcOpen(true)}
                  onMouseLeave={() => setSvcOpen(false)}
                  onFocus={() => setSvcOpen(true)}
                  aria-expanded={svcOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <CaretDown size={12} weight="bold" />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-3 ${svcOpen ? "block" : "hidden"}`}
                  onMouseEnter={() => setSvcOpen(true)}
                  onMouseLeave={() => setSvcOpen(false)}
                >
                  <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white py-2 shadow-[0_16px_40px_rgba(28,18,12,0.12)]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-sm text-heading hover:bg-paper hover:text-accent"
                      >
                        {service.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-heading"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="relative z-40 flex shrink-0 items-center gap-3">
          <Link
            href="/#contact"
            className="hidden h-10 items-center justify-center rounded-full bg-accent px-5 text-[11px] font-semibold tracking-[0.14em] text-white transition-colors duration-300 hover:bg-ink sm:inline-flex"
          >
            LET&apos;S TALK
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/5 bg-canvas px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="py-1 text-ink">
              Home
            </Link>
            <Link href="/#about" onClick={() => setOpen(false)} className="py-1 text-ink">
              About Us
            </Link>
            <p className="pt-1 text-xs uppercase tracking-[0.14em] text-muted">Our Service</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setOpen(false)}
                className="py-1 pl-2 text-heading"
              >
                {service.navLabel}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="py-1 text-ink">
              Contact
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-accent text-[11px] font-semibold tracking-[0.14em] text-white"
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
