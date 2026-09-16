import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asset } from "@/lib/asset";
import { getService, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <article className="bg-canvas">
      <section className="border-b border-black/5">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Our Service</p>
            <h1 className="mt-3 font-display text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[46px]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-7 text-heading">{service.body}</p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 font-display text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-ink"
            >
              Get Started
            </Link>
          </div>
          <Image
            src={asset(service.image)}
            alt=""
            width={680}
            height={860}
            className="h-auto w-full rounded-3xl object-cover"
            priority
          />
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto max-w-[800px] px-5 py-16 lg:px-8">
          <h2 className="font-display text-[28px] font-semibold text-ink">What this covers</h2>
          <ul className="mt-8 space-y-4 text-[15px] leading-7 text-heading">
            {service.points.map((point) => (
              <li key={point} className="border-b border-black/10 pb-4">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
