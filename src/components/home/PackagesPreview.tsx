import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Star, Crown, Gem, Award, Sparkles as SparklesIcon } from "lucide-react";
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
    cardBg: "bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60",
    borderColor: "border-emerald-200/50",
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
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-accent/20",
    borderColor: "border-accent/40",
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
    cardBg: "bg-gradient-to-br from-violet-50/80 via-white to-purple-50/60",
    borderColor: "border-violet-200/50",
  },
];

export const PackagesPreview = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Packages Designed <span className="gold-text bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">For You</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, choose the package that fits your vision
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${pkg.popular ? "lg:-mt-4 lg:mb-4 lg:scale-105 z-10" : ""}`}
            >
              {/* Popular Package Glow */}
              {pkg.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-amber-500 to-accent rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              )}
              
              <div
                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  pkg.popular 
                    ? "shadow-2xl shadow-accent/20 hover:shadow-3xl hover:shadow-accent/30" 
                    : "shadow-xl hover:shadow-2xl"
                } hover:-translate-y-1`}
              >
                {/* Background */}
                <div className={`absolute inset-0 ${pkg.cardBg} ${pkg.popular ? "opacity-100" : "opacity-95"}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                
                {/* Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pkg.accentColor} ${pkg.popular ? "h-3" : ""}`} />
                
                {/* Content */}
                <div className={`relative p-8 border-2 ${pkg.borderColor} ${pkg.popular ? "border-accent/60" : ""} rounded-3xl h-full flex flex-col bg-white/40 backdrop-blur-sm`}>
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-gradient-to-r from-accent via-amber-500 to-accent text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-accent/30 z-20"
                    >
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shadow-lg ${pkg.popular ? "shadow-accent/40" : ""} group-hover:scale-110 transition-transform`}>
                        <pkg.icon className="w-7 h-7 text-white" />
                      </div>
                      {pkg.popular && (
                        <SparklesIcon className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b-2 border-border/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl lg:text-4xl font-extrabold text-foreground">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium mt-1">
                      {pkg.priceNote}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground/90 text-sm font-medium leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to={`/packages?package=${pkg.id}`} className="mt-auto">
                    <Button
                      variant={pkg.popular ? "gold" : "default"}
                      size="lg"
                      className={`w-full group/btn text-base font-semibold h-12 ${pkg.popular ? "shadow-lg shadow-accent/20" : ""}`}
                    >
                      {pkg.popular ? "Get Started" : "View Details"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
          className="text-center"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all text-lg group"
          >
            View All Packages & Options
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
