import type { Metadata } from "next";
import { brand, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <article className="bg-canvas">
      <div className="mx-auto max-w-[800px] px-5 py-16 lg:px-8 lg:py-20">
        <h1 className="font-display text-[40px] text-heading">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 16 September 2026</p>
        <div className="mt-10 space-y-8 text-[15px] leading-7 text-heading">
          <section>
            <h2 className="font-display text-xl text-ink">1. Introduction</h2>
            <p className="mt-3">
              Welcome to {brand.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By using this website you agree to these
              Terms &amp; Conditions. If you do not agree, please do not use the site.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">2. Use of the website</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>You must be at least 18, or have guardian consent, to use this website.</li>
              <li>
                Use the site only for lawful purposes, and in a way that does not interfere with other
                people&apos;s use of it.
              </li>
              <li>
                Do not upload malware, send spam, or take any action that could damage or disable the
                site.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">3. Intellectual property</h2>
            <p className="mt-3">
              Content, trademarks, logos, and designs on this website are owned or licensed by{" "}
              {brand.legalName} and protected by applicable intellectual property law. You may not copy,
              distribute, or create derivative works from any part of the site without prior written
              consent.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">4. Information accuracy</h2>
            <p className="mt-3">
              We work to keep information current, but we do not guarantee that it is complete or
              error-free. Content is for general information only and is not professional, legal, or
              tax advice.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">5. Third-party links</h2>
            <p className="mt-3">
              The site may link to other websites for convenience. We are not responsible for their
              content, privacy practices, or terms. You visit those sites at your own risk.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">6. Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent allowed by law, {brand.name} is not liable for direct or indirect
              losses arising from your use of, or inability to use, this website. We do not promise
              uninterrupted access and may pause or change any part of the site without notice.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">7. Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify {brand.legalName} and its affiliates against claims, damages, and
              costs arising from your use of the website or a breach of these terms.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">8. Changes</h2>
            <p className="mt-3">
              We may update these Terms &amp; Conditions from time to time. The version posted on this
              page is the current version.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">9. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of Hong Kong. You agree to the exclusive
              jurisdiction of the courts of Hong Kong.
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
