import { createContext, useContext, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Palette, Globe, Smartphone, Code2, Lightbulb, MessageSquare, CalendarDays } from "lucide-react";

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

export type PortfolioItem = {
  img: string;
  title: string;
  tag: string;
  serviceId?: string;
};

export type ServiceCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const initialPortfolioItems: PortfolioItem[] = [
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

const initialServices: ServiceCard[] = [
  {
    id: "service-graphic",
    icon: Palette,
    title: "Graphic Design",
    desc: "Logos, posters, flyers, business cards, branding & jersey designs.",
  },
  {
    id: "service-web",
    icon: Globe,
    title: "Web Development",
    desc: "Personal, company, e-commerce, school, church & NGO websites.",
  },
  {
    id: "service-mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Android & cross-platform business and educational applications.",
  },
  {
    id: "service-software",
    icon: Code2,
    title: "Software Engineering",
    desc: "POS, inventory, school, hospital and custom management systems.",
  },
  {
    id: "service-consultancy",
    icon: Lightbulb,
    title: "Consultancy",
    desc: "System analysis, UI/UX design, documentation and technical support.",
  },
  {
    id: "service-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot Assistant",
    desc: "24/7 automated customer support and intelligent service guidance.",
  },
  {
    id: "service-booking",
    icon: CalendarDays,
    title: "Online Appointment Booking",
    desc: "View slots, book consultations, and receive payment guidance.",
  },
];

interface SiteDataContextValue {
  portfolioItems: PortfolioItem[];
  services: ServiceCard[];
  addPortfolioItem: (item: PortfolioItem) => void;
  updatePortfolioItem: (index: number, item: PortfolioItem) => void;
}

const SiteDataContext = createContext<SiteDataContextValue | undefined>(undefined);

function createServiceCard(item: PortfolioItem, serviceId: string): ServiceCard {
  return {
    id: serviceId,
    icon: Sparkles,
    title: item.title,
    desc: `Recent project in ${item.tag}.`,
  };
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [serviceCards, setServiceCards] = useState<ServiceCard[]>(initialServices);

  const addPortfolioItem = (item: PortfolioItem) => {
    const serviceId = `portfolio-service-${Date.now()}`;
    const portfolioItem = { ...item, serviceId };
    setPortfolioItems((current) => [portfolioItem, ...current]);
    setServiceCards((current) => [...current, createServiceCard(portfolioItem, serviceId)]);
  };

  const updatePortfolioItem = (index: number, item: PortfolioItem) => {
    setPortfolioItems((current) => {
      const oldItem = current[index];
      const serviceId = oldItem?.serviceId ?? `portfolio-service-${Date.now()}`;
      const updatedItem = { ...oldItem, ...item, serviceId };

      setServiceCards((currentServices) => {
        const hasExisting = currentServices.some((card) => card.id === serviceId);
        const updatedCard = createServiceCard(updatedItem, serviceId);

        if (hasExisting) {
          return currentServices.map((card) => (card.id === serviceId ? updatedCard : card));
        }

        return [...currentServices, updatedCard];
      });

      return current.map((entry, entryIndex) => (entryIndex === index ? updatedItem : entry));
    });
  };

  return (
    <SiteDataContext.Provider value={{ portfolioItems, services: serviceCards, addPortfolioItem, updatePortfolioItem }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
}
