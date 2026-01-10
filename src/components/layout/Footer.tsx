import { Link } from "react-router-dom";
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Birthdays", path: "/packages" },
    { name: "Corporate Events", path: "/packages" },
    { name: "Baby Showers", path: "/packages" },
    { name: "Bridal Showers", path: "/packages" },
    { name: "Private Celebrations", path: "/packages" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ],
  support: [
    { name: "FAQ", path: "/faq" },
    { name: "Cancellation Policy", path: "/cancellation" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center shadow-gold">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Remy Events</span>
            </Link>
            <p className="text-primary-foreground/70 mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base">
              Creating unforgettable moments across Nairobi. From intimate gatherings to grand celebrations, we handle every detail so you can enjoy the moment.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 text-accent text-sm sm:text-base">Services</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 text-accent text-sm sm:text-base">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-5 text-accent text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Westlands, Nairobi<br />Kenya
                </span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+254700000000" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:hello@remyevents.co.ke" className="text-primary-foreground/70 hover:text-accent transition-colors break-all">
                  hello@remyevents.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="text-primary-foreground/50 text-xs sm:text-sm">
                © 2024 Remy Events. All rights reserved.
              </p>
              <p className="text-primary-foreground/40 text-xs mt-1">
                Developed by <span className="text-accent font-medium">Saitoti Njapit</span>
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              {footerLinks.support.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-primary-foreground/50 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
