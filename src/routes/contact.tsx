import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PaymentMethods } from "../components/payment-methods";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ri Designs" },
      { name: "description", content: "Request a quote or start a project with Ri Designs. We respond within 24 hours." },
      { property: "og:title", content: "Contact — Ri Designs" },
      { property: "og:description", content: "Request a quote or start a project." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
      <h1 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">Let's build something</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Share a bit about your project and we'll get back within 24 hours with next
        steps and a quote.
      </p>
      <div className="mt-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2 space-y-6">
          {[
            { icon: Mail, label: "Email", value: "mosesmahoro744@gmail.com" },
            { icon: Phone, label: "Phone / WhatsApp", value: "+265 882 068 557" },
            { icon: MapPin, label: "Based in", value: "Blantyre, Malawi" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Icon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1 font-semibold">
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="underline-offset-2 hover:underline">{value}</a>
                  ) : label.includes("Phone") ? (
                    <a href={`tel:${value.replace(/\s+/g, "")}`} className="underline-offset-2 hover:underline">{value}</a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form
          action="https://formsubmit.co/mosesmahoro744@gmail.com"
          method="POST"
          onSubmit={(e) => {
            setIsLoading(true);
            setError(null);
          }}
          className="md:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h2 className="mt-4 text-2xl font-bold">Message sent</h2>
              <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <input type="hidden" name="_subject" value="New message from Ri Designs contact form" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/contact?message=sent`} />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Phone" name="phone" />
                <Field label="Service" name="service" placeholder="e.g. Logo, Website" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project details</label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Tell us about your goals, deadline and budget..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Send message <Send size={14} />
              </button>
            </>
          )}
        </form>
      </div>

      {/* Payment Methods Section */}
      <div className="mt-20 border-t border-border pt-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Payment</p>
        <h2 className="mt-2 mb-10 text-4xl font-black tracking-tight md:text-5xl">Pay with Airtel or TNM</h2>
        <PaymentMethods
          onSubmit={(data) => {
            console.log("Payment initiated:", data);
          }}
        />
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}