import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Sparkles, Crown, Gem, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Perfect for intimate gatherings",
    price: "KSh 35,000",
    priceNote: "starting from",
    description: "Everything you need for a beautiful, stress-free celebration with your closest friends and family.",
    features: [
      "Up to 30 guests",
      "Basic décor setup",
      "2-hour event coverage",
      "Venue coordination",
      "Basic sound system",
      "Setup & cleanup included",
      "Event timeline planning",
      "Day-of coordination",
    ],
    ideal: ["Small birthdays", "Intimate dinners", "Anniversary celebrations"],
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
    description: "The perfect balance of elegance and value. Our most requested package for memorable celebrations.",
    features: [
      "Up to 80 guests",
      "Premium décor & custom theme",
      "4-hour event coverage",
      "Professional photography",
      "Catering coordination",
      "Entertainment setup",
      "Dedicated event manager",
      "Full cleanup service",
      "Guest management",
      "Custom invitations",
    ],
    ideal: ["Corporate events", "Milestone birthdays", "Baby showers", "Engagement parties"],
    popular: true,
    icon: Crown,
    accentColor: "from-accent to-amber-600",
    bgGradient: "from-accent/10 via-card to-amber-50/30",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "The ultimate celebration experience",
    price: "KSh 150,000",
    priceNote: "starting from",
    description: "No expense spared. A full luxury experience where every detail is meticulously crafted to perfection.",
    features: [
      "Up to 200 guests",
      "Luxury custom décor",
      "Full-day coverage",
      "Photo & videography team",
      "Premium catering service",
      "Live entertainment",
      "VIP coordination team",
      "Security & valet parking",
      "Complete event management",
      "Luxury gift bags",
      "After-party coordination",
      "Thank-you card service",
    ],
    ideal: ["Grand weddings", "Corporate galas", "Product launches", "High-profile celebrations"],
    popular: false,
    icon: Gem,
    accentColor: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50/50 via-card to-purple-50/30",
  },
];

const addons = [
  { name: "Extra hour coverage", price: "KSh 8,000", icon: "⏰" },
  { name: "Drone photography", price: "KSh 15,000", icon: "🚁" },
  { name: "Live band", price: "KSh 35,000", icon: "🎸" },
  { name: "Photo booth", price: "KSh 12,000", icon: "📸" },
  { name: "Fireworks display", price: "KSh 25,000", icon: "🎆" },
  { name: "Luxury car service", price: "KSh 20,000", icon: "🚗" },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-foreground text-xs sm:text-sm font-medium">Transparent Pricing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Choose Your <span className="gold-text">Perfect Package</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
                Every package is fully customizable. Start with a base and add or remove services to match your vision and budget.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative group ${pkg.popular ? "md:col-span-2 xl:col-span-1" : ""}`}
                >
                  <div
                    className={`relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular 
                        ? "shadow-gold hover:shadow-elevated" 
                        : "shadow-card hover:shadow-elevated"
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-100`} />
                    
                    {/* Glass overlay */}
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                    
                    {/* Decorative top gradient bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pkg.accentColor}`} />
                    
                    {/* Content */}
                    <div className="relative p-5 sm:p-6 lg:p-8 border border-border/50 rounded-2xl sm:rounded-3xl h-full flex flex-col">
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-gold whitespace-nowrap">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                          Most Popular
                        </div>
                      )}

                      {/* Package Icon & Header */}
                      <div className="flex items-start gap-4 mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shadow-lg shrink-0`}>
                          <pkg.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {pkg.name}
                          </h3>
                          <p className="text-accent font-medium text-xs sm:text-sm">
                            {pkg.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border/50">
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                            {pkg.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                          {pkg.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 sm:mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shrink-0 mt-0.5`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-foreground/80 text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Ideal For */}
                      <div className="mb-6 sm:mb-8 pt-4 sm:pt-6 border-t border-border/50">
                        <p className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">Ideal for:</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {pkg.ideal.map((item) => (
                            <span key={item} className="px-2.5 sm:px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-[10px] sm:text-xs font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link to={`/customize?package=${pkg.id}`} className="mt-auto">
                        <Button
                          variant={pkg.popular ? "gold" : "outline"}
                          size="lg"
                          className="w-full group/btn text-sm sm:text-base"
                        >
                          Customize This Package
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/30 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Popular <span className="gold-text">Add-Ons</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Enhance your event with premium extras. All prices are transparent and can be added during customization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-300"
                >
                  <span className="text-xl sm:text-2xl">{addon.icon}</span>
                  <div className="flex-grow min-w-0">
                    <span className="text-foreground font-medium text-sm sm:text-base block truncate">{addon.name}</span>
                  </div>
                  <span className="text-accent font-semibold text-sm sm:text-base whitespace-nowrap">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
                Not Sure Which Package <span className="text-accent">Fits Best?</span>
              </h2>
              <p className="text-primary-foreground/70 text-sm sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
                Talk to our event specialists. We'll help you choose and customize the perfect package for your celebration.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Book Free Consultation
                  </Button>
                </Link>
                <a href="tel:+254700000000" className="w-full sm:w-auto">
                  <Button variant="outline-light" size="lg" className="w-full sm:w-auto">
                    Call Us Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
