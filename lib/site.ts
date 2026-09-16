export const brand = {
  name: "Kinopay",
  legalName: "Kinopay Limited",
  tagline: "Payroll Simplified",
  year: 2026,
};

export const company = {
  addressLine1: "7/F Premier Centre, 20 Cheung Shun Street",
  addressLine2: "Cheung Sha Wan, Kowloon, Hong Kong",
  emails: {
    general: "hello@kinopay.com",
    sales: "bd@kinopay.com",
    care: "admin@kinopay.com",
  },
};

export const services = [
  {
    slug: "payroll-outsourcing",
    title: "Payroll Outsourcing",
    navLabel: "Payroll Outsourcing",
    image: "/illustrations/offer-outsourcing.jpg",
    summary:
      "Let us handle salary calculations, contributions, and the related filings, so you can stay focused on running the business.",
    body: "Kinopay takes on the monthly payroll cycle from data intake through statutory contributions and exception handling. You send us the changes. We calculate, review, and prepare everything your finance team needs to approve with confidence.",
    points: [
      "Gross-to-net calculations, overtime, leave, and one-off payments",
      "Mandatory contributions prepared to local filing calendars",
      "Exception reviews before each pay run, with a named operator on point",
    ],
  },
  {
    slug: "salary-disbursement",
    title: "Salary Disbursement",
    navLabel: "Salary Disbursement",
    image: "/illustrations/offer-disbursement.jpg",
    summary:
      "Pay your team quickly and securely through direct bank transfers or Kinopay payroll cards, so people can access wages without delay.",
    body: "Once a pay run is approved, Kinopay moves funds through bank transfer or payroll cards. Finance keeps a single disbursement file. Employees get a reliable payday, including teammates who do not hold a local salary account.",
    points: [
      "Bulk bank transfers with clear payment references",
      "Payroll cards for teams that need faster, card-based access to wages",
      "Status tracking so HR and finance can see what has landed",
    ],
  },
  {
    slug: "employee-self-service",
    title: "Employee Self-Service Access",
    navLabel: "Employee Self-Service",
    image: "/illustrations/offer-ess.jpg",
    summary:
      "Give employees online access to payslips, payment history, and account details at any time, cutting HR tickets and raising transparency.",
    body: "The Kinopay employee portal puts payslips and payment history in one login. People find what they need without emailing HR. Your team spends less time on routine requests and more time on exceptions that actually need a person.",
    points: [
      "Payslips and year-to-date history available on demand",
      "Self-serve updates for bank details, with an approval trail",
      "Fewer repetitive inbox requests for HR",
    ],
  },
  {
    slug: "scalable-solutions",
    title: "Scalable Solutions",
    navLabel: "Scalable Solutions",
    image: "/illustrations/offer-scale.jpg",
    summary:
      "The same operating model stretches from a small startup to a large enterprise, without giving up speed, accuracy, or service quality.",
    body: "Kinopay is built to grow with headcount, entities, and pay calendars. Start with a single company file. Add locations, cost centers, and pay groups when you need them. The service model stays the same, so you are not ripping out payroll every time the business steps up.",
    points: [
      "One process across entities, with local rules applied per file",
      "Volume that scales without a drop in turnaround",
      "Named support as complexity increases, not a generic ticket queue",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
