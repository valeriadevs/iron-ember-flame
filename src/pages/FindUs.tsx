import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook, Navigation } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { EmberButton } from "@/components/ui/ember-button";
import atmosphereImage from "@/assets/atmosphere-1.jpg";

const FindUs = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
              Find Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Come hungry. Leave happy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              {/* Address */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-ember" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-bone mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    742 Smoke House Lane<br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-ember" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-bone mb-2">
                    Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Tuesday - Thursday: 5PM - 10PM</p>
                    <p>Friday - Saturday: 5PM - 11PM</p>
                    <p>Sunday: 4PM - 9PM</p>
                    <p className="text-bone/40 mt-2">Closed Mondays</p>
                  </div>
                </div>
              </div>

              {/* Best Time */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-ember" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-bone mb-2">
                    Best Time to Visit
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Weeknights (Tue-Thu) between 5-6PM are typically less crowded. 
                    Friday and Saturday evenings get busy—arrive early or expect a wait. 
                    Sunday is perfect for a relaxed family dinner.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-ember" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-bone mb-2">
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    (512) 555-GRILL
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmberButton variant="default" size="lg">
                    <MapPin size={18} /> Get Directions
                  </EmberButton>
                </a>
                <a href="tel:+15125554755">
                  <EmberButton variant="outline" size="lg">
                    <Phone size={18} /> Call Us
                  </EmberButton>
                </a>
              </div>

              {/* Social */}
              <div className="pt-4">
                <h3 className="font-serif text-xl font-semibold text-bone mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center text-bone/60 hover:bg-ember/10 hover:text-ember transition-colors"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-bone/5 flex items-center justify-center text-bone/60 hover:bg-ember/10 hover:text-ember transition-colors"
                  >
                    <Facebook size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Image / Map Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <img
                src={atmosphereImage}
                alt="Iron Ember restaurant interior"
                className="w-full h-80 lg:h-[400px] object-cover rounded-lg"
              />
              
              {/* Simple Map Placeholder */}
              <div className="w-full h-80 bg-smoke rounded-lg flex items-center justify-center border border-bone/10">
                <div className="text-center">
                  <MapPin size={48} className="text-ember mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">742 Smoke House Lane</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EmberButton variant="outline" size="sm">
                      Open in Maps
                    </EmberButton>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindUs;
