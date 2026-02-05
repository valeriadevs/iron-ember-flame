import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import tomahawkImage from "@/assets/tomahawk.jpg";
import shortRibsImage from "@/assets/short-ribs.jpg";
import chickenImage from "@/assets/grilled-chicken.jpg";

const OurMeats = () => {
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
              Our Meats
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Premium cuts, sourced responsibly, prepared with reverence.
            </p>
          </motion.div>

          {/* Beef Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-ember text-sm font-medium tracking-widest uppercase mb-4 block">
                Premium Beef
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-6">
                USDA Prime & Choice
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We partner with ranches that share our commitment to quality. Our beef 
                is dry-aged for a minimum of 28 days, developing the deep, nutty flavor 
                and tender texture that defines a truly exceptional steak.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the massive Tomahawk ribeye to the buttery filet, each cut is 
                hand-selected by our butcher and treated with the respect it deserves—
                simple seasoning, intense heat, and perfect timing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={tomahawkImage}
                alt="Tomahawk ribeye steak"
                className="w-full h-80 lg:h-[500px] object-cover rounded-lg"
              />
            </motion.div>
          </section>

          {/* Pork & Ribs Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={shortRibsImage}
                alt="Smoked beef short ribs"
                className="w-full h-80 lg:h-[500px] object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-ember text-sm font-medium tracking-widest uppercase mb-4 block">
                Low & Slow
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-6">
                Smoked Perfection
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our smoker runs around the clock. Brisket goes on at midnight, 
                short ribs at dawn. By service time, they've transformed—tough 
                connective tissue rendered into silky gelatin, fat melted into 
                the meat, bark crackling with caramelized rub.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pork shoulder, St. Louis ribs, beef short ribs—each requires its 
                own timeline, its own temperature, its own attention. We don't 
                rush. We wait.
              </p>
            </motion.div>
          </section>

          {/* Chicken Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-ember text-sm font-medium tracking-widest uppercase mb-4 block">
                Poultry
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mb-6">
                Fire-Roasted Chicken
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We spatchcock our chickens for even cooking and maximum surface 
                area—more crispy skin, more char, more flavor. A simple brine, 
                our house herb blend, and hours over smoldering hardwood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: skin that shatters, meat that falls from the bone, 
                and a smokiness that makes you forget chicken was ever boring.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={chickenImage}
                alt="Grilled whole chicken"
                className="w-full h-80 lg:h-[500px] object-cover rounded-lg"
              />
            </motion.div>
          </section>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16 border-t border-b border-bone/10"
          >
            <blockquote className="font-serif text-2xl md:text-3xl text-bone/80 italic max-w-3xl mx-auto leading-relaxed">
              "The animal gave its life. The least we can do is cook it right."
            </blockquote>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurMeats;
