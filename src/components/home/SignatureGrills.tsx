import { motion } from "framer-motion";

interface GrillItem {
  image: string;
  name: string;
  description: string;
}

interface SignatureGrillsProps {
  items: GrillItem[];
}

const SignatureGrills = ({ items }: SignatureGrillsProps) => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bone mb-4">
            Signature Grills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every cut tells a story. Hours over open flame, finished with fire-kissed perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 border-b-4 border-transparent group-hover:border-ember transition-colors duration-300">
                <h3 className="font-serif text-2xl font-bold text-bone mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-bone/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureGrills;
