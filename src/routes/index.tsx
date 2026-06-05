import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Globe, Smartphone, Code2, Sparkles, Star, CheckCircle2, MessageSquare, CalendarDays } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";
import { ResponsiveImage } from "../components/responsive-image";

import heroBg from "@/assets/images/hero/hero-bg.jpg";
import workWeb from "@/assets/images/portfolio/work-web.jpg";
import workMobile from "@/assets/images/portfolio/work-mobile.jpg";
import workSoftware from "@/assets/images/portfolio/work-software.jpg";
import refugee2024 from "@/assets/images/portfolio/refugee-2024.jpg";
import posterGrowBusiness from "@/assets/images/portfolio/poster-grow-business.jpg";
import posterCreative from "@/assets/images/portfolio/poster-creative.jpg";
import mothersDay from "@/assets/images/portfolio/mothers-day.jpg";

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
  { img: refugee2024, title: "World Refugee Day Campaign", tag: "Graphic Design" },
  { img: posterGrowBusiness, title: "Ri Designs Brand Promo", tag: "Graphic Design" },
  { img: posterCreative, title: "Creative Designer Poster", tag: "Graphic Design" },
  { img: mothersDay, title: "Mother's Day Greeting", tag: "Graphic Design" },
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
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Hi! I can help you choose a service, understand pricing, or book a consultation." },
  ]);
  const [isChatting, setIsChatting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Graphic Design Consultation",
    date: "",
    time: "",
  });

  const availableServices = useMemo(
    () => [
      "Graphic Design Consultation",
      "Website Development Consultation",
      "Mobile App Consultation",
      "Software Development Consultation",
    ],
    [],
  );

  const submitChat = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userMessage = chatInput.trim();
    if (!userMessage) return;

    setChatMessages((current) => [...current, { from: "user", text: userMessage }]);
    setChatInput("");
    setIsChatting(true);

    setTimeout(() => {
      const normalized = userMessage.toLowerCase();
      let response = "I’m here to help — ask me anything about our services, booking, pricing, or project support.";

      const siteKnowledge: Record<string, string> = {
        about: "Ri Designs is a Malawi-based creative studio and software house led by Moses Mahoro. We create bold brands, fast websites, mobile apps, custom software, and consultancy support for businesses, churches, schools, and NGOs.",
        contact: "The Contact page lets you send your project brief, request a quote, or ask for a consultation. It includes email, phone/WhatsApp, and contact details for quick replies.",
        portfolio: "The Portfolio page shows recent work in graphic design, web development, mobile apps, and software. It helps you understand our style and the types of projects we deliver.",
        services: "The Services page lists Graphic Design, Web Development, Mobile Applications, Software Engineering, and Consultancy. Each service can be combined into a custom package to fit your needs.",
        chatbot: "This chat assistant knows the full site and can guide customers through services, booking, payments, and how to work with Ri Designs.",
        payment: "We accept Centenary Bank, Airtel Money, and TNM Mpamba. For consultation bookings, Centenary Bank is the main method: Account name Moses Mahoro, Account number 5083801445029, Branch Blantyre.",
        booking: "The booking form lets you reserve a consultation, choose your service type, date, and time, then receive payment instructions. It is the easiest way to start working with us.",
        reviews: "Customer reviews on the About page show how previous clients felt about our work. They help you understand quality, reliability, and satisfaction.",
        process: "The site describes our process as brief, quote, build, and launch. We focus on strong communication, clear milestones, and support after delivery.",
      };

      const serviceDetails: Record<string, string> = {
        graphic: "Graphic design at Ri Designs includes logo creation, posters, flyers, business cards, branding packages, and jersey designs. We create visual identities that work in print and online.",
        logo: "A logo from us is tailored to your brand personality and works across social media, print, signage, and websites. You receive source files for future use.",
        website: "A website package includes UX/UI design, responsive development, deployment, and support. We build websites for companies, schools, churches, NGOs, and e-commerce with clean layouts and fast performance.",
        web: "Web development covers personal sites, company websites, online stores, and information systems. We build sites that are easy to navigate, update, and scale.",
        mobile: "Mobile app development includes Android and cross-platform apps. We help you build business apps, educational tools, and user-friendly mobile experiences for your customers.",
        app: "App development includes planning, design, development, testing, and launch. We can build fintech tools, booking systems, management apps, and other custom mobile solutions.",
        software: "Custom software solutions include POS systems, inventory management, school systems, hospital systems, and other business tools. We build software to automate workflows and improve operations.",
        consultancy: "Consultancy helps you define project requirements, choose the right technology, and plan the best workflow. We also provide UI/UX advice, system analysis, and technical guidance.",
        branding: "Branding includes color palettes, typography, logos, visual identity, and brand guidelines. We design consistent brands that make your business memorable across every channel.",
      };

      const patterns = {
        greeting: /\b(hi|hello|hey|good morning|good afternoon|good evening)\b/,
        site: /\b(site|website|how it works|function|feature|page|navigation|home|about|services|contact|portfolio|review|reviews|payment methods|payment options|booking form|chatbot|assistant)\b/,
        pricing: /\b(price|cost|quote|budget|fee|rate|estimate|pricing)\b/,
        booking: /\b(book|appointment|schedule|slot|availability|consultation|meeting|reserve|booked)\b/,
        payment: /\b(payment|pay|bank|centenary|transfer|mpampa|airtel|account|invoice|method)\b/,
        process: /\b(process|timeline|steps|how|deliver|launch|support|workflow|phase|order)\b/,
        portfolio: /\b(portfolio|work|project|example|case|client|testimonial|sample)\b/,
        team: /\b(team|about|who|ri designs|moses|mahoro|company|studio)\b/,
      };

      const serviceKeyword = Object.keys(serviceDetails).find((word) => normalized.includes(word));
      const siteKeyword = Object.keys(siteKnowledge).find((word) => normalized.includes(word));
      if (serviceKeyword) {
        response = serviceDetails[serviceKeyword];
      } else if (siteKeyword) {
        response = siteKnowledge[siteKeyword];
      } else if (patterns.site.test(normalized)) {
        response = "Ri Designs has several key features: About page with customer reviews, Services page listing all solutions, Portfolio showing our work, Contact page for inquiries, an AI Chatbot assistant (me!), and an Online Booking form. What would you like to know more about?";
      } else if (patterns.greeting.test(normalized)) {
        response = "Hello! I'm the Ri Designs assistant. I know the whole site and can guide you through services, booking, payments, and working with us.";
      } else if (patterns.pricing.test(normalized)) {
        response = "Pricing depends on the scope of your project. Simple branding jobs have fixed fees, while websites, apps, and custom software are quoted after a short discovery call to understand your exact needs.";
      } else if (patterns.booking.test(normalized)) {
        response = "You can book a consultation using the form on this page. Select your service type, date and time, and I’ll give you the booking and Centenary Bank payment details.";
      } else if (patterns.payment.test(normalized)) {
        response = "We accept Centenary Bank payments. Use Account name Moses Mahoro, Account number 5083801445029, Branch Blantyre. After payment, send confirmation to our WhatsApp or email so we can begin your project.";
      } else if (patterns.process.test(normalized)) {
        response = "Our process starts with a consultation, followed by a quote. Then we move into design or development, and finally launch with support. I can explain each step for your chosen service.";
      } else if (patterns.portfolio.test(normalized)) {
        response = "We’ve delivered branding, websites, mobile apps, and custom software. Check the portfolio section for examples, or ask me what type of work fits your business best.";
      } else if (patterns.team.test(normalized)) {
        response = "Ri Designs is a Malawi-based creative studio led by Moses Mahoro. We combine strong visuals and reliable systems for clients, churches, schools, and NGOs.";
      } else {
        response = "I can explain any Ri Designs service and help you choose the best option. Ask me about graphic design, websites, apps, software systems, or how to book and pay for a consultation.";
      }

      setChatMessages((current) => [...current, { from: "bot", text: response }]);
      setIsChatting(false);
    }, 700);
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone, service, date, time } = booking;

    if (!name || !email || !phone || !date || !time) {
      setBookingStatus("Please complete all fields before booking.");
      return;
    }

    setBookingStatus(
      `Booking received for ${service} on ${date} at ${time}. Please complete payment through Centenary Bank: Account name Moses Mahoro, Account number 5083801445029, Branch Blantyre. Send payment confirmation to WhatsApp or email.`,
    );
  };

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

      {/* AI Chatbot Assistant */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">AI Chatbot Assistant</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Chat with AI for service guidance</h2>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Ask about preferred services, pricing, project workflows, and payment options. The chatbot simulates an intelligent assistant to guide visitors instantly.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-3xl border border-border bg-background p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Live chat</p>
                  <h3 className="mt-2 text-xl font-bold">Talk to the assistant</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">24/7</span>
              </div>
              <div className="mt-6 space-y-4 rounded-3xl border border-border bg-card p-4">
                {chatMessages.map((message, index) => (
                  <div key={index} className={message.from === "user" ? "text-right" : "text-left"}>
                    <div
                      className={
                        `inline-block rounded-3xl px-4 py-3 text-sm ${
                          message.from === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-foreground"
                        }`
                      }
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form className="mt-6 flex gap-3" onSubmit={submitChat}>
                <input
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  placeholder="Ask about logo, website, app or payment..."
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={isChatting}
                  className="inline-flex items-center rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] disabled:opacity-60"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <CalendarDays size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Online Appointment Booking</p>
                  <h3 className="mt-2 text-xl font-bold">Book services and pay online</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pick a consultation, choose a slot and complete payment through Centenary Bank. This form creates your booking request instantly.
              </p>
              <form className="mt-6 space-y-4" onSubmit={submitBooking}>
                <div>
                  <label htmlFor="booking-name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Full name
                  </label>
                  <input
                    id="booking-name"
                    value={booking.name}
                    onChange={(event) => setBooking((current) => ({ ...current, name: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="booking-email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={booking.email}
                    onChange={(event) => setBooking((current) => ({ ...current, email: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </label>
                  <input
                    id="booking-phone"
                    value={booking.phone}
                    onChange={(event) => setBooking((current) => ({ ...current, phone: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    placeholder="+265 88X XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="booking-service" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Service type
                  </label>
                  <select
                    id="booking-service"
                    value={booking.service}
                    onChange={(event) => setBooking((current) => ({ ...current, service: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  >
                    {availableServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="booking-date" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={booking.date}
                      onChange={(event) => setBooking((current) => ({ ...current, date: event.target.value }))}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-time" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Time
                    </label>
                    <input
                      id="booking-time"
                      type="time"
                      value={booking.time}
                      onChange={(event) => setBooking((current) => ({ ...current, time: event.target.value }))}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                </div>
                {bookingStatus ? (
                  <div className="rounded-3xl border border-border bg-card p-4 text-sm text-foreground">
                    {bookingStatus}
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  Book consultation
                </button>
              </form>
            </div>
          </div>
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
