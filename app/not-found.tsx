import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24 text-center">
      <h1 className="font-display text-[40px] font-semibold text-ink">Page not found</h1>
      <p className="mt-4 text-heading">That page is not on UuuPayUuu. Head back to the home page to keep going.</p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 font-display text-[15px] font-semibold text-white hover:bg-ink"
      >
        Home
      </a>
    </div>
  );
}
