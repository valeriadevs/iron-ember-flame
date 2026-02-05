import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EmberButton } from "@/components/ui/ember-button";

const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "grill", name: "From the Grill" },
  { id: "smoked", name: "Smoked Specials" },
  { id: "sides", name: "Sides & Sauces" },
];

const menuItems: Record<string, Array<{ name: string; description: string; price?: string }>> = {
  starters: [
    { name: "Burnt Ends Bites", description: "Caramelized pork belly, house BBQ glaze", price: "$14" },
    { name: "Smoked Wings", description: "Dry-rubbed, 4-hour smoke, ember sauce", price: "$16" },
    { name: "Bone Marrow", description: "Split bones, charred sourdough, herb salt", price: "$18" },
  ],
  grill: [
    { name: "Tomahawk Ribeye", description: "32oz bone-in, mesquite-fired, 28-day aged", price: "$89" },
    { name: "Grilled Half Chicken", description: "Spatchcocked, lemon herb, open flame", price: "$32" },
    { name: "Prime Brisket Plate", description: "14-hour smoke, house rub, pickled onions", price: "$38" },
  ],
  smoked: [
    { name: "Beef Short Ribs", description: "12-hour smoke, coffee rub, caramelized bark", price: "$42" },
    { name: "Pulled Pork Shoulder", description: "Low and slow, Carolina mustard sauce", price: "$24" },
    { name: "Smoked Turkey Breast", description: "Applewood, herb butter, cranberry relish", price: "$26" },
  ],
  sides: [
    { name: "Charred Corn", description: "Ember-roasted, chili lime butter", price: "$8" },
    { name: "Smoked Mac & Cheese", description: "Three cheese, panko crust, bacon bits", price: "$10" },
    { name: "Ember Beans", description: "Slow-cooked, burnt ends, molasses", price: "$8" },
  ],
};

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  return (
    <section className="py-24 bg-smoke">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bone mb-4">
            The Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the smoker to the grill, every dish crafted with fire and patience.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative ${
                activeCategory === category.id
                  ? "text-ember"
                  : "text-bone/60 hover:text-bone"
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-ember"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start justify-between gap-4 py-4 border-b border-bone/10"
                >
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-bone mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.price && (
                    <span className="text-brass font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <EmberButton variant="outline">
              Explore the full menu <ArrowRight size={18} />
            </EmberButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
