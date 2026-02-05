import { motion } from "framer-motion";
import { Clock, Flame, ChefHat } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "12-Hour Slow Smoking",
    description: "Low and slow for maximum flavor",
  },
  {
    icon: ChefHat,
    title: "House-Made Rubs & Sauces",
    description: "Secret recipes, crafted in-house",
  },
  {
    icon: Flame,
    title: "Open-Flame Charcoal Grills",
    description: "Real fire, real smoke, real taste",
  },
];

const FeatureStrip = () => {
  return (
    <section className="py-16 bg-smoke border-y border-bone/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-center gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ember/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-ember" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-bone mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
