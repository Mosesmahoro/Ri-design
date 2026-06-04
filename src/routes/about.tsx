import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Rocket, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ri Designs" },
      { name: "description", content: "Ri Designs is a Malawi-based creative studio and software house building bold brands and reliable systems." },
      { property: "og:title", content: "About — Ri Designs" },
      { property: "og:description", content: "A Malawi-based creative studio and software house." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
      <h1 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">
        Built in Malawi.{" "}
        <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">Designed for the world.</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        Ri Designs is a creative and software studio working with founders, churches,
        schools, NGOs and growing businesses. We blend strong visual identity with
        solid engineering so our clients can ship faster and look better doing it.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { icon: Heart, title: "Client-first", desc: "Honest pricing, clear timelines, no surprises." },
          { icon: Rocket, title: "Built to ship", desc: "We obsess over the launch, not just the mockup." },
          { icon: Shield, title: "Reliable", desc: "Source files, training and after-launch support included." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6">
            <Icon className="text-primary" size={22} />
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold">Our promise</h2>
        <p className="mt-3 text-muted-foreground">
          Every project ships with the source files, a short training session and 30
          days of free support. We accept Airtel Money and TNM Mpamba so working with
          us is as easy as paying for airtime.
        </p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
          Work with us
        </Link>
      </div>
    </div>
  );
}