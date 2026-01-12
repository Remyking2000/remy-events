import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Cake, Heart, Baby, Flower2, Building2, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "birthdays",
    title: "Birthdays",
    description: "Children, Teens & Adults",
    icon: Cake,
    gradient: "from-pink-500 to-rose-600",
    bgGlow: "bg-pink-500/20",
  },
  {
    id: "engagements",
    title: "Engagements & Dates",
    description: "Romantic celebrations",
    icon: Heart,
    gradient: "from-rose-500 to-red-600",
    bgGlow: "bg-rose-500/20",
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    description: "Welcome the little one",
    icon: Baby,
    gradient: "from-sky-500 to-blue-600",
    bgGlow: "bg-sky-500/20",
  },
  {
    id: "bridal-showers",
    title: "Bridal Showers",
    description: "Pre-wedding celebrations",
    icon: Flower2,
    gradient: "from-purple-500 to-violet-600",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Meetings, launches & team building",
    icon: Building2,
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    id: "private",
    title: "Private Celebrations",
    description: "Exclusive gatherings",
    icon: PartyPopper,
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
  },
];

export const CategoriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What Are You <span className="gold-text">Celebrating?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Choose your event type and we'll craft the perfect experience for you
          </p>
        </motion.div>

        {/* Categories Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Desktop only */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hidden lg:flex"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hidden lg:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory lg:mx-0 lg:px-0"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="snap-center shrink-0"
              >
                <Link to={`/packages?category=${category.id}`}>
                  <div className="group relative w-64 sm:w-72 md:w-80 h-44 sm:h-52 rounded-2xl sm:rounded-3xl bg-card border border-border/50 p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated overflow-hidden">
                    {/* Background glow effect */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${category.bgGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon with gradient background */}
                    <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className={`absolute bottom-5 sm:bottom-6 right-5 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 shadow-lg`}>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {categories.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-border" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
