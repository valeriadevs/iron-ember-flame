import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smoke border-t border-bone/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-bone tracking-wide">
                Iron<span className="text-ember">Ember</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cooked low. Served proud.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-bone/60 hover:text-ember transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-bone/60 hover:text-ember transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-bone">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/menu" className="text-muted-foreground hover:text-ember transition-colors text-sm">
                Menu
              </Link>
              <Link to="/the-grill" className="text-muted-foreground hover:text-ember transition-colors text-sm">
                The Grill
              </Link>
              <Link to="/our-meats" className="text-muted-foreground hover:text-ember transition-colors text-sm">
                Our Meats
              </Link>
              <Link to="/find-us" className="text-muted-foreground hover:text-ember transition-colors text-sm">
                Find Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-bone">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-ember mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  742 Smoke House Lane<br />
                  Austin, TX 78701
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-ember flex-shrink-0" />
                <span className="text-muted-foreground">(512) 555-GRILL</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-bone">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-ember mt-0.5 flex-shrink-0" />
                <div>
                  <p>Tue - Thu: 5PM - 10PM</p>
                  <p>Fri - Sat: 5PM - 11PM</p>
                  <p>Sun: 4PM - 9PM</p>
                  <p className="text-bone/40 mt-1">Closed Mondays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bone/10 mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iron Ember. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
