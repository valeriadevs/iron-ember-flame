import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "grill", name: "From the Grill" },
  { id: "smoked", name: "Smoked Specials" },
  { id: "sides", name: "Sides & Sauces" },
  { id: "drinks", name: "Drinks" },
];

const menuItems: Record<string, Array<{ name: string; description: string; price: string }>> = {
  starters: [
    { name: "Burnt Ends Bites", description: "Caramelized pork belly, house BBQ glaze", price: "$14" },
    { name: "Smoked Wings", description: "Dry-rubbed, 4-hour smoke, ember sauce", price: "$16" },
    { name: "Bone Marrow", description: "Split bones, charred sourdough, herb salt", price: "$18" },
    { name: "Brisket Nachos", description: "House chips, smoked brisket, jalapeño queso", price: "$17" },
    { name: "Smoked Salmon Tartare", description: "Oak-smoked, capers, crème fraîche", price: "$19" },
  ],
  grill: [
    { name: "Tomahawk Ribeye", description: "32oz bone-in, mesquite-fired, 28-day aged", price: "$89" },
    { name: "Grilled Half Chicken", description: "Spatchcocked, lemon herb, open flame", price: "$32" },
    { name: "Prime Brisket Plate", description: "14-hour smoke, house rub, pickled onions", price: "$38" },
    { name: "Cowboy Ribeye", description: "22oz bone-in, coffee rub, compound butter", price: "$68" },
    { name: "Filet Mignon", description: "8oz center cut, black pepper crust, bordelaise", price: "$54" },
    { name: "Grilled Lamb Chops", description: "New Zealand rack, rosemary, mint chimichurri", price: "$48" },
  ],
  smoked: [
    { name: "Beef Short Ribs", description: "12-hour smoke, coffee rub, caramelized bark", price: "$42" },
    { name: "Pulled Pork Shoulder", description: "Low and slow, Carolina mustard sauce", price: "$24" },
    { name: "Smoked Turkey Breast", description: "Applewood, herb butter, cranberry relish", price: "$26" },
    { name: "Pork Belly Burnt Ends", description: "Candied, house BBQ, sesame seeds", price: "$22" },
    { name: "Smoked Sausage Links", description: "House-made, jalapeño cheddar or classic", price: "$18" },
  ],
  sides: [
    { name: "Charred Corn", description: "Ember-roasted, chili lime butter", price: "$8" },
    { name: "Smoked Mac & Cheese", description: "Three cheese, panko crust, bacon bits", price: "$10" },
    { name: "Ember Beans", description: "Slow-cooked, burnt ends, molasses", price: "$8" },
    { name: "Collard Greens", description: "Smoked ham hock, apple cider vinegar", price: "$9" },
    { name: "House Slaw", description: "Tangy, creamy, hint of jalapeño", price: "$6" },
    { name: "Loaded Baked Potato", description: "Sour cream, chives, bacon, cheddar", price: "$10" },
    { name: "Ember Sauce Flight", description: "Four house sauces: Texas, Carolina, Memphis, KC", price: "$8" },
  ],
  drinks: [
    { name: "Smoked Old Fashioned", description: "Bourbon, cherry smoke, orange", price: "$16" },
    { name: "Iron Ember Mule", description: "Vodka, house ginger, charred lime", price: "$14" },
    { name: "Craft Beer Selection", description: "Rotating taps, local & regional", price: "$8" },
    { name: "House Red Wine", description: "Bold Cabernet, by the glass", price: "$12" },
    { name: "Sweet Tea", description: "House-brewed, touch of honey", price: "$4" },
  ],
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

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
              The Menu
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Fire-kissed, slow-smoked, crafted with patience. Every dish tells a story.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative rounded-sm ${
                  activeCategory === category.id
                    ? "text-ember bg-ember/10"
                    : "text-bone/60 hover:text-bone hover:bg-bone/5"
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-ember"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start justify-between gap-6 py-6 border-b border-bone/10 group"
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-bone mb-2 group-hover:text-ember transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-brass font-semibold text-xl whitespace-nowrap">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-16 max-w-xl mx-auto"
          >
            * Consuming raw or undercooked meats may increase your risk of foodborne illness.
            Please inform your server of any allergies.
          </motion.p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
