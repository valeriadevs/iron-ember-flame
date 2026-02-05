import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";
import { EmberButton } from "@/components/ui/ember-button";

const CTAStrip = () => {
  return (
    <section className="py-24 bg-smoke border-y border-bone/10">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bone mb-6">
            Come Hungry.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-ember" />
              <span>742 Smoke House Lane, Austin, TX</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-bone/30" />
            <div>Tue-Thu 5-10PM • Fri-Sat 5-11PM • Sun 4-9PM</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-us">
              <EmberButton variant="default" size="lg">
                <MapPin size={18} /> Get Directions
              </EmberButton>
            </Link>
            <a href="tel:+15125554755">
              <EmberButton variant="outline" size="lg">
                <Phone size={18} /> Call Restaurant
              </EmberButton>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <EmberButton variant="ghost" size="lg">
                <Instagram size={18} /> Instagram
              </EmberButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;
