import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureStrip from "@/components/home/FeatureStrip";
import SignatureGrills from "@/components/home/SignatureGrills";
import MenuPreview from "@/components/home/MenuPreview";
import AtmosphereStrip from "@/components/home/AtmosphereStrip";
import CTAStrip from "@/components/home/CTAStrip";

// Import images
import heroImage from "@/assets/hero-grill.jpg";
import tomahawkImage from "@/assets/tomahawk.jpg";
import shortRibsImage from "@/assets/short-ribs.jpg";
import chickenImage from "@/assets/grilled-chicken.jpg";
import atmosphere1 from "@/assets/atmosphere-1.jpg";
import atmosphere2 from "@/assets/atmosphere-2.jpg";
import atmosphere3 from "@/assets/atmosphere-3.jpg";
import atmosphere4 from "@/assets/atmosphere-4.jpg";

const signatureGrills = [
  {
    image: tomahawkImage,
    name: "Tomahawk Ribeye",
    description: "32oz bone-in, mesquite-fired, 28-day aged perfection",
  },
  {
    image: shortRibsImage,
    name: "Smoked Short Ribs",
    description: "12-hour smoke, coffee rub, caramelized bark",
  },
  {
    image: chickenImage,
    name: "Grilled Half Chicken",
    description: "Spatchcocked, lemon herb, charred over open flame",
  },
];

const atmosphereImages = [atmosphere1, atmosphere2, atmosphere3, atmosphere4];

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <HeroSection heroImage={heroImage} />
        <FeatureStrip />
        <SignatureGrills items={signatureGrills} />
        <MenuPreview />
        <AtmosphereStrip images={atmosphereImages} />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
