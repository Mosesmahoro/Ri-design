import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Globe, Smartphone, Code2, Sparkles, Star, CheckCircle2, MessageSquare } from "lucide-react";
import { ResponsiveImage } from "../components/responsive-image";

// Image paths - update these based on your image folder structure
const heroBg = "/src/assets/images/hero/hero-bg.jpg";
const workWeb = "/src/assets/images/portfolio/work-web.jpg";
const workMobile = "/src/assets/images/portfolio/work-mobile.jpg";
const workSoftware = "/src/assets/images/portfolio/work-software.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ri Designs — Creative Studio & Software Solutions in Malawi" },
      { name: "description", content: "Bold graphic design, fast websites, mobile apps and custom software. Request services, get a quote and pay with Airtel Money or TNM Mpamba." },
      { property: "og:title", content: "Ri Designs — Creative Studio & Software Solutions" },
      { property: "og:description", content: "Bold graphic design, fast websites, mobile apps and custom software." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Logos, posters, flyers, business cards, branding & jersey designs." },
  { icon: Globe, title: "Web Development", desc: "Personal, company, e-commerce, school, church & NGO websites." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Android & cross-platform business and educational applications." },
  { icon: Code2, title: "Software Engineering", desc: "POS, inventory, school, hospital and custom management systems." },
];

const works = [
  { img: "/src/assets/images/portfolio/refugee-2024.jpg", title: "World Refugee Day Campaign", tag: "Graphic Design" },
  { img: "/src/assets/images/portfolio/poster-grow-business.jpg", title: "Ri Designs Brand Promo", tag: "Graphic Design" },
  { img: "/src/assets/images/portfolio/poster-creative.jpg", title: "Creative Designer Poster", tag: "Graphic Design" },
  { img: "/src/assets/images/portfolio/mothers-day.jpg", title: "Mother's Day Greeting", tag: "Graphic Design" },
  { img: workWeb, title: "E-Commerce Platform", tag: "Web Development" },
  { img: workMobile, title: "Fintech App", tag: "Mobile App" },
  { img: workSoftware, title: "School Management System", tag: "Software" },
];

const testimonials = [
  { name: "Chimwemwe B.", role: "Boutique Owner", quote: "My new logo and website doubled my orders in two months. Ri Designs gets it." },
  { name: "Pastor Daniel", role: "Church Admin", quote: "Professional, fast and patient. The church site is exactly what we dreamed of." },
  { name: "Tadala M.", role: "Startup Founder", quote: "From the pitch deck to the actual app — one team, world-class quality." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <ResponsiveImage
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles size={14} className="text-primary" /> Creative studio · Software house
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Design that{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              moves people
            </span>
            . Software that runs the business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We craft bold brands, fast websites, mobile apps and custom systems for
            ambitious clients across Malawi and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Request a quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              View our work
            </Link>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border/50 pt-8">
            {[
              ["120+", "Projects shipped"],
              ["60+", "Happy clients"],
              ["5★", "Average rating"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <dt className="text-3xl font-black text-foreground md:text-4xl">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Four studios, one team</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            All services →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Recent work</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Selected projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold text-primary hover:underline">
              Full portfolio →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => (
              <figure key={w.title} className="group overflow-hidden rounded-2xl border border-border bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="text-xs text-muted-foreground">{w.tag}</p>
                  </div>
                  <ArrowRight size={16} className="text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">How we work</p>
        <h2 className="mt-2 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
          A simple, transparent process
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Brief", "Tell us your goal, audience and budget."],
            ["02", "Quote", "We send a clear quotation within 24 hours."],
            ["03", "Build", "Track progress live as we design & develop."],
            ["04", "Launch", "Pay easily via Airtel Money or TNM Mpamba and download."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-sm font-black text-primary">{n}</span>
              <h3 className="mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kind words</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Clients who trust us</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-border bg-background p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <footer className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From a single logo to a full software platform — let's build something
              worth talking about.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {["Free initial consultation", "Mobile money payments", "Source files delivered"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" /> {x}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Start your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/265882068557"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-25px_rgba(16,185,129,0.9)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-28px_rgba(16,185,129,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageSquare size={18} className="text-white" />
        Message RI designs
      </a>
    </>
  );
}
