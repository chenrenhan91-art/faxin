import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24 text-center">
      <h1 className="font-display text-[40px] text-heading">Page not found</h1>
      <p className="mt-4 text-heading">That page is not on Kinopay. Head back to the home page to keep going.</p>
      <a
        href="/"
        className="mt-8 inline-flex h-10 w-[118px] items-center justify-center rounded-[5px] bg-ink font-display text-[16px] font-bold text-white"
      >
        Home
      </a>
    </div>
  );
}
