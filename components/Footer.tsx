import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { brand, company } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div
        className="bg-mint"
        style={{ clipPath: "polygon(0 14%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-16 pt-28 md:grid-cols-2 lg:px-8">
          <div>
            <Image
              src={asset("/kinopay-logo.png")}
              alt=""
              width={927}
              height={282}
              className="mb-8 h-16 w-auto"
            />
            <h2 className="font-display text-lg text-ink">Contact Us!</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/80">
              {company.addressLine1}
              <br />
              {company.addressLine2}
            </p>
            <div className="mt-8 grid max-w-xl gap-6 text-sm sm:grid-cols-3">
              <div>
                <p>General Inquiries:</p>
                <a href={`mailto:${company.emails.general}`} className="underline-offset-2 hover:underline">
                  {company.emails.general}
                </a>
              </div>
              <div>
                <p>Sales:</p>
                <a href={`mailto:${company.emails.sales}`} className="underline-offset-2 hover:underline">
                  {company.emails.sales}
                </a>
              </div>
              <div>
                <p>Customer Care:</p>
                <a href={`mailto:${company.emails.care}`} className="underline-offset-2 hover:underline">
                  {company.emails.care}
                </a>
              </div>
            </div>
          </div>

          <div className="md:justify-self-end md:pt-24">
            <h2 className="font-display text-lg text-ink">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/terms-conditions" className="underline underline-offset-4">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <a
              href="#top"
              className="mt-10 inline-flex h-9 items-center rounded-sm bg-ink px-4 text-sm text-white transition-colors hover:bg-gold hover:text-ink"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
      <div className="bg-ink py-3 text-center text-[12px] text-white">
        {brand.name} ® {brand.year}. All rights reserved.
      </div>
    </footer>
  );
}
