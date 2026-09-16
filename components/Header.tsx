"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { asset } from "@/lib/asset";
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
    <header className="sticky top-0 z-30 border-b border-black/0 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Kinopay home">
          <Image
            src={asset("/kinopay-logo.png")}
            alt="Kinopay"
            width={927}
            height={282}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.hasMenu ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[15px] text-ink/80 transition-colors hover:text-ink"
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
                  <div className="border border-black/10 bg-white py-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-heading hover:bg-paper"
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
                className={`text-[15px] transition-colors hover:text-ink ${
                  pathname === link.href ? "text-muted" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#contact"
            className="hidden h-10 w-[112px] items-center justify-center border-2 border-talk text-[10px] font-bold tracking-[0.16em] text-[#59514d] transition-colors duration-300 hover:bg-talk hover:text-white sm:inline-flex"
          >
            LET&apos;S TALK
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-[2px] w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ink ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-5 py-4 lg:hidden">
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
              className="mt-2 inline-flex h-10 items-center justify-center border-2 border-talk text-[10px] font-bold tracking-[0.16em] text-[#59514d]"
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
