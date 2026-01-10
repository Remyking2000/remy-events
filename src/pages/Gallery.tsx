import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "birthdays",
    title: "Golden Birthday Celebration",
    description: "A luxurious 40th birthday party with gold and white theme",
  },
  {
    id: 2,
    category: "corporate",
    title: "Tech Company Launch",
    description: "Product launch event with modern décor",
  },
  {
    id: 3,
    category: "baby-showers",
    title: "Pastel Dreams Baby Shower",
    description: "Elegant baby shower with soft pastel tones",
  },
  {
    id: 4,
    category: "bridal-showers",
    title: "Garden Bridal Celebration",
    description: "Romantic outdoor bridal shower",
  },
  {
    id: 5,
    category: "birthdays",
    title: "Kids Superhero Party",
    description: "Fun and colorful children's birthday party",
  },
  {
    id: 6,
    category: "corporate",
    title: "Annual Awards Gala",
    description: "Black-tie corporate celebration",
  },
];

const categories = [
  { id: "all", name: "All Events" },
  { id: "birthdays", name: "Birthdays" },
  { id: "corporate", name: "Corporate" },
  { id: "baby-showers", name: "Baby Showers" },
  { id: "bridal-showers", name: "Bridal Showers" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="gold-text">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                A glimpse into the magical moments we've helped create across Nairobi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-accent text-accent-foreground shadow-gold"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-accent/20 to-primary/10"
                  onClick={() => setSelectedImage(image.id)}
                >
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/40" />
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {image.description}
                    </p>
                  </div>

                  {/* Decorative elements to simulate event photos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-accent/30 text-6xl font-bold">
                      {image.id}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No events found in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="max-w-4xl w-full aspect-video rounded-2xl bg-gradient-to-br from-accent/30 to-primary/50 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl font-semibold mb-2">
                  {galleryImages.find((i) => i.id === selectedImage)?.title}
                </p>
                <p className="text-white/70">
                  {galleryImages.find((i) => i.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
