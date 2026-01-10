import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star, Crown, Gem, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Perfect for intimate gatherings",
    price: "KSh 35,000",
    priceNote: "starting from",
    features: [
      "Up to 30 guests",
      "Basic décor setup",
      "2-hour event coverage",
      "Venue coordination",
      "Basic sound system",
      "Setup & cleanup",
    ],
    popular: false,
    icon: Award,
    accentColor: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50/50 via-card to-teal-50/30",
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Our most popular choice",
    price: "KSh 75,000",
    priceNote: "starting from",
    features: [
      "Up to 80 guests",
      "Premium décor & theme",
      "4-hour event coverage",
      "Professional photography",
      "Catering coordination",
      "Entertainment setup",
      "Dedicated event manager",
      "Full cleanup service",
    ],
    popular: true,
    icon: Crown,
    accentColor: "from-accent to-amber-600",
    bgGradient: "from-accent/10 via-card to-amber-50/30",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "The ultimate celebration",
    price: "KSh 150,000",
    priceNote: "starting from",
    features: [
      "Up to 200 guests",
      "Luxury custom décor",
      "Full-day coverage",
      "Photo & videography",
      "Premium catering",
      "Live entertainment",
      "VIP coordination team",
      "Security & valet",
      "Complete event management",
    ],
    popular: false,
    icon: Gem,
    accentColor: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50/50 via-card to-purple-50/30",
  },
];

export const PackagesPreview = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Packages Designed <span className="gold-text">For You</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            From intimate gatherings to grand celebrations, choose the package that fits your vision
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div
                className={`relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular 
                    ? "shadow-gold hover:shadow-elevated" 
                    : "shadow-card hover:shadow-elevated"
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient}`} />
                
                {/* Decorative top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${pkg.accentColor}`} />
                
                {/* Content */}
                <div className="relative p-5 sm:p-6 lg:p-8 border border-border/50 rounded-2xl sm:rounded-3xl h-full flex flex-col">
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-1.5 shadow-gold whitespace-nowrap">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      Most Popular
                    </div>
                  )}

                  {/* Package Icon & Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shadow-lg shrink-0`}>
                      <pkg.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground">
                        {pkg.name}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5 sm:mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                      {pkg.priceNote}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 sm:gap-3">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-foreground/80 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to={`/packages?package=${pkg.id}`} className="mt-auto">
                    <Button
                      variant={pkg.popular ? "gold" : "outline"}
                      size="lg"
                      className="w-full group/btn text-sm sm:text-base"
                    >
                      Customize Package
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm sm:text-base"
          >
            View All Packages & Options
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
