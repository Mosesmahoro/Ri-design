import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import workWeb from "@/assets/images/portfolio/work-web.jpg";
import workMobile from "@/assets/images/portfolio/work-mobile.jpg";
import workSoftware from "@/assets/images/portfolio/work-software.jpg";
import workLogo from "@/assets/images/portfolio/work-logo.jpg";
import workPoster from "@/assets/images/portfolio/work-poster.jpg";
import workJersey from "@/assets/images/portfolio/work-jersey.jpg";
import refugee2024 from "@/assets/images/portfolio/refugee-2024.jpg";
import mothersDay from "@/assets/images/portfolio/mothers-day.jpg";
import posterCreative from "@/assets/images/portfolio/poster-creative.jpg";
import posterGrowBusiness from "@/assets/images/portfolio/poster-grow-business.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ri Designs" },
      { name: "description", content: "Explore selected graphic design, web, mobile and software projects from Ri Designs." },
      { property: "og:title", content: "Portfolio — Ri Designs" },
      { property: "og:description", content: "Selected design and software projects." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const items = [
  { img: refugee2024, title: "World Refugee Day 2024 Campaign", tag: "Graphic" },
  { img: posterGrowBusiness, title: "Ri Designs — Grow Your Business", tag: "Graphic" },
  { img: posterCreative, title: "Creative Graphic Designer Promo", tag: "Graphic" },
  { img: mothersDay, title: "Happy Mother's Day Card", tag: "Graphic" },
  { img: workLogo, title: "Brand & Logo Design", tag: "Graphic" },
  { img: workPoster, title: "Poster Design Showcase", tag: "Graphic" },
  { img: workJersey, title: "Jersey Branding Concept", tag: "Graphic" },
  { img: workWeb, title: "Malaika E-Commerce", tag: "Web" },
  { img: workMobile, title: "PayWave Wallet App", tag: "Mobile" },
  { img: workSoftware, title: "BrightSchool SMS", tag: "Software" },
];

const filters = ["All", "Graphic", "Web", "Mobile", "Software"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [portfolioItems, setPortfolioItems] = useState(items);
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState<(typeof filters)[number]>("Graphic");
  const [newImage, setNewImage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updatedImage, setUpdatedImage] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedTag, setUpdatedTag] = useState<(typeof filters)[number]>("Graphic");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const visible = filter === "All" ? portfolioItems : portfolioItems.filter((i) => i.tag === filter);
  const selectedItem = portfolioItems[selectedIndex] ?? portfolioItems[0];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if ((normalizedEmail === "mosesmahoro744" || normalizedEmail === "mosesmahoro744@gmail.com") && password === "moses744") {
      setIsLoggedIn(true);
      setLoginError("");
      setLoginMessage("Access granted. You may now manage the portfolio items.");
      setEmail("");
      setPassword("");
      return;
    }

    setLoginError("Invalid credentials. Use the provided email and password.");
    setLoginMessage("");
  };

  const addPortfolioItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTitle || !newImage) return;
    setPortfolioItems((current) => [
      { img: newImage, title: newTitle, tag: newTag },
      ...current,
    ]);
    setNewTitle("");
    setNewImage("");
    setNewTag("Graphic");
  };

  const updateSelectedItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedItem) return;
    setPortfolioItems((current) =>
      current.map((item, index) =>
        index === selectedIndex
          ? {
              img: updatedImage || item.img,
              title: updatedTitle || item.title,
              tag: updatedTag,
            }
          : item,
      ),
    );
    setUpdatedImage("");
    setUpdatedTitle("");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</p>
      <h1 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">Work we're proud of</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        A curated mix of brands, products and platforms we've shipped.
      </p>
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((w) => (
          <figure key={w.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={w.img} alt={w.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <figcaption className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{w.tag}</span>
              <h3 className="mt-1 font-semibold">{w.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Manage portfolio</p>
            <h2 className="mt-2 text-3xl font-black">Add service and update images</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Add a new portfolio item or update the image and details for an existing item.
            </p>
          </div>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-3 space-y-4 rounded-3xl border border-border bg-background p-6">
              <p className="text-sm font-semibold">Login to access portfolio management</p>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mosesmahoro744@gmail.com"
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Login
              </button>
              {loginError ? <p className="text-sm text-destructive">{loginError}</p> : null}
              {loginMessage ? <p className="text-sm text-success">{loginMessage}</p> : null}
            </div>
          </form>
        ) : (
          <div className="mt-10 rounded-3xl border border-border bg-background p-6">
            <p className="text-sm font-semibold text-foreground">Logged in as <span className="font-semibold">mosesmahoro744</span></p>
            <p className="mt-2 text-sm text-muted-foreground">You may now access and update the portfolio management tools below.</p>
          </div>
        )}

        {isLoggedIn ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <form onSubmit={addPortfolioItem} className="space-y-4 rounded-3xl border border-border bg-background p-6">
              <p className="text-sm font-semibold">Add a new portfolio item</p>
              <div>
                <label htmlFor="newTitle" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Title</label>
                <input
                  id="newTitle"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Project title or service"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="newTag" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service type</label>
                <select
                  id="newTag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value as (typeof filters)[number])}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  {filters.filter((f) => f !== "All").map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="newImage" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Image URL</label>
                <input
                  id="newImage"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Add service
              </button>
            </form>

            <form onSubmit={updateSelectedItem} className="space-y-4 rounded-3xl border border-border bg-background p-6">
              <p className="text-sm font-semibold">Update an existing item</p>
              <div>
                <label htmlFor="selectedItem" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select item</label>
                <select
                  id="selectedItem"
                  value={selectedIndex}
                  onChange={(e) => {
                    const index = Number(e.target.value);
                    setSelectedIndex(index);
                    const selected = portfolioItems[index];
                    setUpdatedTitle(selected?.title ?? "");
                    setUpdatedTag(selected?.tag ?? "Graphic");
                    setUpdatedImage("");
                  }}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  {portfolioItems.map((item, index) => (
                    <option key={`${item.title}-${index}`} value={index}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="updatedTitle" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">New title</label>
                <input
                  id="updatedTitle"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  placeholder={selectedItem?.title}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="updatedTag" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">New service type</label>
                <select
                  id="updatedTag"
                  value={updatedTag}
                  onChange={(e) => setUpdatedTag(e.target.value as (typeof filters)[number])}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  {filters.filter((f) => f !== "All").map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="updatedImage" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">New image URL</label>
                <input
                  id="updatedImage"
                  value={updatedImage}
                  onChange={(e) => setUpdatedImage(e.target.value)}
                  placeholder="Leave empty to keep current image"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Update item
              </button>
            </form>
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">Enter your email and password to unlock the portfolio management section.</p>
        )}
      </section>
    </div>
  );
}