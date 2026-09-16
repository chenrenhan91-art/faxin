import type { Metadata } from "next";
import { brand, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="bg-canvas">
      <div className="mx-auto max-w-[800px] px-5 py-16 lg:px-8 lg:py-20">
        <h1 className="font-display text-[40px] text-heading">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 16 September 2026</p>
        <div className="mt-10 space-y-8 text-[15px] leading-7 text-heading">
          <section>
            <h2 className="font-display text-xl text-ink">1. Introduction</h2>
            <p className="mt-3">
              {brand.legalName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the personal
              information you share with us. This policy explains how we collect, use, store, and
              protect that information when you visit this website, use our services, or contact us.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">2. Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Personal information: name, email, phone number, company name, and other details you
                send through forms or correspondence.
              </li>
              <li>
                Technical information: browser type, IP address, device data, and usage data collected
                through cookies or similar tools.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">3. How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide and improve payroll and payment services</li>
              <li>Respond to inquiries and requests</li>
              <li>Process transactions and send service updates</li>
              <li>Meet legal and regulatory duties</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">4. Sharing</h2>
            <p className="mt-3">
              We do not sell or rent personal information. We may share it with service providers who
              work on our behalf (hosting, analytics, payment processing), with regulators when the
              law requires it, and with business partners only when you have agreed.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">5. Cookies</h2>
            <p className="mt-3">
              Cookies help us understand how the site is used and keep it working as expected. You can
              refuse cookies in your browser. Some features may not work as well if you do.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">6. Security</h2>
            <p className="mt-3">
              We use reasonable technical and organisational measures to protect information from
              unauthorised access, disclosure, alteration, or destruction.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">7. Your rights</h2>
            <p className="mt-3">
              Depending on where you live, you may have the right to access, correct, or delete
              personal information, to object to or restrict processing, and to withdraw consent. To
              make a request, email {company.emails.general}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">8. Third-party sites</h2>
            <p className="mt-3">
              This website may link to other sites. Their privacy practices are their own. Please read
              those policies before sharing personal information with them.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">9. Changes</h2>
            <p className="mt-3">
              We may update this policy from time to time. The updated version will appear on this
              page with a revised date.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <p className="mt-3">
              {company.addressLine1}
              <br />
              {company.addressLine2}
              <br />
              {company.emails.general}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
