import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import grillImage from "@/assets/atmosphere-2.jpg";
import embersImage from "@/assets/atmosphere-4.jpg";
import heroImage from "@/assets/hero-grill.jpg";

const TheGrill = () => {
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
            className="text-center mb-20"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-bone mb-4">
              The Grill
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Where craft meets flame. Our approach to fire and smoke.
            </p>
          </motion.div>

          {/* Charcoal Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-6">
                Charcoal vs. Wood
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We use a blend of natural lump charcoal and select hardwoods—oak, mesquite, 
                and applewood—each chosen for the specific flavor profile it imparts. 
                Charcoal provides the intense, consistent heat we need for perfect sears, 
                while wood chunks add layers of smoky complexity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No gas. No shortcuts. Just fire, time, and the skill of our grill masters 
                who've spent years learning to read the flames.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src={embersImage}
                alt="Glowing charcoal embers"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
            </motion.div>
          </section>

          {/* Smoking Timeline */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={grillImage}
                alt="Meat smoking on grill"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-6">
                The Smoking Timeline
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-ember pl-6">
                  <h4 className="font-serif text-xl font-semibold text-bone mb-1">
                    4-6 Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Chicken, turkey, and lighter proteins. Low heat, high smoke.
                  </p>
                </div>
                <div className="border-l-2 border-ember pl-6">
                  <h4 className="font-serif text-xl font-semibold text-bone mb-1">
                    8-10 Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Pork shoulder, ribs. The collagen breaks down, fat renders beautifully.
                  </p>
                </div>
                <div className="border-l-2 border-ember pl-6">
                  <h4 className="font-serif text-xl font-semibold text-bone mb-1">
                    12-14 Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Brisket, short ribs. Patience becomes flavor. No rushing perfection.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Sauce Philosophy */}
          <section className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-8">
                Sauce Philosophy
              </h2>
              <blockquote className="font-serif text-2xl md:text-3xl text-bone/80 italic mb-8 leading-relaxed">
                "A great sauce doesn't mask the meat—it elevates it. We craft each 
                sauce to complement, never compete."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                Our house sauces are made fresh daily: tangy Carolina mustard, 
                sweet and spicy Kansas City, bold Texas mop, and our signature 
                Ember sauce—a secret blend that's been perfected over years. 
                Each designed to honor the meat, not hide it.
              </p>
            </motion.div>
          </section>

          {/* Full Width Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImage}
              alt="Steak on the grill"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TheGrill;
