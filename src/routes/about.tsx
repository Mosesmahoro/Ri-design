import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Rocket, Shield } from "lucide-react";
import { useState, type FormEvent } from "react";

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
  const [reviews, setReviews] = useState([
    {
      name: "Mary Banda",
      role: "Founder, Vital Church",
      comment: "Ri Designs built our website quickly and gave us a polished brand identity. The support after launch was excellent.",
    },
    {
      name: "James Phiri",
      role: "School Director",
      comment: "The team understood our needs and delivered a beautiful design with a clear, easy-to-manage CMS.",
    },
  ]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const role = formData.get("role")?.toString().trim() ?? "";
    const comment = formData.get("comment")?.toString().trim() ?? "";

    if (!name || !role || !comment) {
      setFeedbackMessage("Please fill in every field before submitting.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setReviews(current => [{ name, role, comment }, ...current]);
      setFeedbackMessage("Thanks for your review! It has been added below.");
      setIsSubmitting(false);
      event.currentTarget.reset();
      window.scrollTo({ top: event.currentTarget.offsetTop - 60, behavior: "smooth" });
    }, 250);
  };

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
      <section className="mt-14 rounded-2xl border border-border bg-card p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Client reviews</p>
            <h2 className="mt-2 text-2xl font-bold">What customers say</h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Hear from businesses, churches, and NGOs that trusted us to deliver bold
            branding and reliable digital experiences.
          </p>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
              <div key={`${review.name}-${review.role}`} className="rounded-3xl border border-border bg-background p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
                <div className="mt-5">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-background p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Leave feedback</p>
                <h3 className="mt-2 text-xl font-bold">Add your review</h3>
              </div>
              {isSubmitting && <span className="text-xs font-medium text-primary">Submitting…</span>}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Share your experience to help future customers know what to expect from Ri Designs.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleReviewSubmit}>
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="role" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Role or business
                </label>
                <input
                  id="role"
                  name="role"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="e.g. Founder, School Director"
                />
              </div>
              <div>
                <label htmlFor="comment" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Tell us about your experience working with Ri Designs"
                />
              </div>
              {feedbackMessage ? (
                <p className="rounded-2xl border border-border px-4 py-3 text-sm text-foreground">
                  {feedbackMessage}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Submit review
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}