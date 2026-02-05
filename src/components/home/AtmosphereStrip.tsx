import { motion } from "framer-motion";

interface AtmosphereStripProps {
  images: string[];
}

const AtmosphereStrip = ({ images }: AtmosphereStripProps) => {
  return (
    <section id="atmosphere" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bone">
            Built Around Fire
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg ${
                  isLarge ? "md:col-span-1 md:row-span-2" : ""
                }`}
              >
                <div className={`h-full ${isLarge ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                  <img
                    src={image}
                    alt="Restaurant atmosphere"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-charcoal/20 hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereStrip;
