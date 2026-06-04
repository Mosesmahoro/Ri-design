import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/images/logo/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white p-1">
              <img src={logo} alt="Ri Designs logo" className="h-full w-full object-contain" />
            </span>
            <span className="text-lg font-bold">
              Ri <span className="text-primary">Designs</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Digital creative & software solutions — graphic design, web, mobile and
            custom systems built in Malawi for the world.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} /><span>mosesmahoro744@gmail.com</span></li>
            <li className="flex items-center gap-2"><Phone size={14} /><span>+265 882 068 557</span></li>
            <li>Pay via Airtel Money & TNM Mpamba</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ri Designs. Crafted with care in Malawi.
      </div>
    </footer>
  );
}