import Image from "next/image";
import Link from "next/link";
import { ClockCountdown, Lightning, SquaresFour } from "@phosphor-icons/react/ssr";
import { ContactForm } from "@/components/ContactForm";
import { asset } from "@/lib/asset";
import { services } from "@/lib/site";

const features = [
  { icon: "/illustrations/icon-automation.svg", label: "Time-Saving Automation" },
  { icon: "/illustrations/icon-privacy.svg", label: "Data Privacy First" },
  { icon: "/illustrations/icon-payment.svg", label: "Flexible Payment" },
];

const quotes = [
  {
    text: "Kinopay took our monthly payroll from a scramble to a routine. Automation plus a careful review has given us hours back every cycle.",
    role: "HR Manager, Retail Chain",
    plant: "/illustrations/plant-1.svg",
  },
  {
    text: "The payroll card option changed how we pay the team. It is fast, secure, and simple to run, with the flexibility we had been missing.",
    role: "Ops Director, Logistics",
    plant: "/illustrations/plant-2.svg",
  },
  {
    text: "From the first onboarding call through day-to-day support, the Kinopay team has been responsive and professional. It feels like a real partnership.",
    role: "CEO, Tech Startup",
    plant: "/illustrations/plant-3.svg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Experts />
      <Testimonials />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-28 pt-16 md:grid-cols-2 lg:px-8 lg:pb-36 lg:pt-20">
        <div>
          <h1 className="font-display text-[42px] leading-[1.12] text-heading md:text-[50px]">
            Payroll.
            <br />
            Simplified. Global.
          </h1>
          <p className="mt-6 max-w-md text-[18px] leading-7 text-heading">
            Kinopay delivers a fast, secure, and flexible way to manage payroll.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex h-10 w-[118px] items-center justify-center rounded-[5px] bg-ink font-display text-[16px] font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-ink active:scale-[0.98]"
          >
            Get Started
          </Link>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {features.map((item) => (
              <li key={item.label} className="flex max-w-[140px] items-center gap-2">
                <img src={asset(item.icon)} alt="" width={36} height={36} />
                <span className="text-[13px] leading-4 text-heading">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[680px]">
          <Image
            src={asset("/illustrations/hero.png")}
            alt="Team collaborating around a payroll workspace"
            width={554}
            height={505}
            className="relative z-10 h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[160%] -translate-x-1/2 rounded-[50%] bg-mint" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-mint">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 md:grid-cols-2 md:py-24 lg:px-8">
        <h2 className="font-display text-[34px] leading-[1.25] text-heading md:text-[38px]">
          With Kinopay, Payroll Becomes Effortless
        </h2>
        <p className="max-w-xl text-[15px] leading-7 text-heading">
          Headquartered in Hong Kong, we work at the crossroads of Asia&apos;s financial hub and some of the
          world&apos;s most active markets. Coverage extends across North America and the Pacific, so clients
          get genuinely global reach. Industry experience and current payment technology help us meet
          international standards and set a higher bar for speed and reliability.
        </p>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="text-center font-display text-[34px] text-heading md:text-[38px]">What We Offer</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-7 text-muted">
          We combine payroll expertise with payment technology so salary management stays simple, secure,
          and calm. Kinopay takes the operational load, giving you more time to grow the business.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
              <div className="overflow-hidden rounded-[6px]">
                <Image
                  src={asset(service.image)}
                  alt=""
                  width={452}
                  height={596}
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 font-display text-[22px] leading-7 text-heading">{service.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-muted">{service.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experts() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-8 pt-6 md:grid-cols-2 lg:px-8">
        <Image
          src={asset("/illustrations/experts.png")}
          alt="People collaborating inside a shared payroll workspace"
          width={670}
          height={715}
          className="h-auto w-full object-contain object-left"
        />
        <div>
          <h2 className="font-display text-[34px] leading-[1.2] text-ink md:text-[38px]">
            Built for Businesses, by Payroll Experts
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-heading">
            We specialise in making payroll simple, fast, and reliable for companies of every size. From
            accurate calculations to secure payments, a dedicated team works behind the scenes so each
            step stays on track. The mix of expertise and technology helps you work smarter, save time,
            and give people the payroll experience they expect.
          </p>
          <ul className="mt-10 flex flex-wrap gap-8">
            <li className="flex items-center gap-3">
              <SquaresFour size={28} weight="fill" className="text-heading" />
              <span className="text-[13px] leading-4 text-heading">
                Industry
                <br />
                Expertise
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Lightning size={28} weight="fill" className="text-heading" />
              <span className="text-[13px] leading-4 text-heading">
                Innovative
                <br />
                Technology
              </span>
            </li>
            <li className="flex items-center gap-3">
              <ClockCountdown size={28} weight="fill" className="text-heading" />
              <span className="text-[13px] leading-4 text-heading">
                Customer
                <br />
                Focus
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
        <h2 className="font-display text-[34px] text-heading md:text-[38px]">What Our Clients Say</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((quote) => (
            <article
              key={quote.role}
              className="relative min-h-[340px] rounded-[18px] border border-[#cfcfcf] px-8 pb-10 pt-8"
            >
              <div className="mb-6 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
              </div>
              <p className="text-[14px] leading-6 text-muted">&ldquo;{quote.text}&rdquo;</p>
              <p className="relative z-10 mt-10 text-right text-[13px] leading-5 text-heading">
                {quote.role}
              </p>
              <img
                src={asset(quote.plant)}
                alt=""
                className="pointer-events-none absolute -bottom-6 -left-4 h-36 w-auto"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-paper">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 py-20 md:grid-cols-2 lg:px-8 lg:py-24">
        <div className="pt-6">
          <h2 className="font-display text-[34px] leading-[1.2] text-ink md:text-[38px]">
            Explore Our
            <br />
            Payroll Solutions
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-heading">
            Whether you want to tidy up the payroll you already run or stand up a new system, we will
            shape a setup that fits. Get in touch and we will show you how Kinopay can simplify pay for
            your team.
          </p>
          <img src={asset("/illustrations/infinity.svg")} alt="" className="mt-10 h-8 w-auto" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
