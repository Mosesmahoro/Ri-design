import { createFileRoute, Link } from "@tanstack/react-router";
import { Palette, Globe, Smartphone, Code2, Lightbulb, ArrowRight, MessageSquare, CalendarDays, MessageCircle } from "lucide-react";
import { useSiteData } from "../lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ri Designs" },
      { name: "description", content: "Graphic design, web development, mobile apps, custom software and consultancy services by Ri Designs." },
      { property: "og:title", content: "Services — Ri Designs" },
      { property: "og:description", content: "Graphic design, web, mobile, software and consultancy." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Palette,
    title: "Graphic Design",
    items: ["Logo Design", "Posters", "Flyers", "Business Cards", "Banners", "Social Media Graphics", "Branding Packages", "Jersey Designs"],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["Personal Websites", "Company Websites", "E-Commerce", "School Systems", "Church Websites", "NGO Websites"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    items: ["Android Apps", "Cross-platform Apps", "Business Apps", "Educational Apps"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    items: ["Management Systems", "Point of Sale", "Inventory Systems", "School Systems", "Hospital Systems", "Custom Solutions"],
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    items: ["System Analysis", "Database Design", "UI/UX Design", "Software Documentation", "Technical Support"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Assistant",
    items: [
      "24/7 automated customer support",
      "Answer FAQs and recommend services",
      "Guide users through project requests",
      "Provide pricing and payment guidance",
      "Collect contact leads for follow-up",
    ],
  },
  {
    icon: CalendarDays,
    title: "Online Appointment Booking",
    items: [
      "View available time slots",
      "Book consultations online",
      "Choose a consultation type",
      "Receive confirmations and reminders",
      "Cancel or reschedule with ease",
    ],
  },
];

function ServicesPage() {
  const { services } = useSiteData();
  const portfolioServices = services.filter((service) => service.id.startsWith("portfolio-service-"));

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
      <h1 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">
        Everything you need to <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">launch & grow</span>
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Pick a single service or combine them into a complete package. Every project
        includes a clear quote, milestones and source files.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Icon size={22} />
            </div>
            <h2 className="mt-5 text-xl font-bold">{title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8">
          <div>
            <h3 className="text-2xl font-bold">Need something custom?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Send us your brief — we'll respond with a quote in 24 hours.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
            Request a quote <ArrowRight size={16} />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8">
          <div>
            <h3 className="text-2xl font-bold">Check pricing & add-ons</h3>
            <p className="mt-2 text-sm text-muted-foreground">Message us on WhatsApp for detailed pricing, package options, and additional services.</p>
          </div>
          <a href="https://wa.me/265882068557" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors">
            Message on WhatsApp <MessageCircle size={16} />
          </a>
        </div>
      </div>
      {portfolioServices.length > 0 ? (
        <section className="mt-16">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Added portfolio services</p>
              <h2 className="mt-2 text-3xl font-black">Recently added portfolio work</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioServices.map((service) => (
              <article key={service.id} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}