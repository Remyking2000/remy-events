import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Sparkles, Crown, Gem, Award, Users, Sparkles as SparklesIcon } from "lucide-react";
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
    cardBg: "bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60",
    borderColor: "border-emerald-200/50",
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
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-accent/20",
    borderColor: "border-accent/40",
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
    cardBg: "bg-gradient-to-br from-violet-50/80 via-white to-purple-50/60",
    borderColor: "border-violet-200/50",
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
        <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-foreground text-sm font-medium">Transparent Pricing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Choose Your <span className="gold-text bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Perfect Package</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl px-4 sm:px-0 leading-relaxed">
                Every package is fully customizable. Start with a base and add or remove services to match your vision and budget.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-12 sm:py-20 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative group ${pkg.popular ? "lg:-mt-4 lg:mb-4 lg:scale-105 z-10" : ""}`}
                >
                  {/* Popular Package Glow Effect */}
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
                    {/* Premium Background with Pattern */}
                    <div className={`absolute inset-0 ${pkg.cardBg} ${pkg.popular ? "opacity-100" : "opacity-95"}`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                    
                    {/* Decorative Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pkg.accentColor} ${pkg.popular ? "h-3" : ""}`} />
                    
                    {/* Content */}
                    <div className={`relative p-8 lg:p-10 border-2 ${pkg.borderColor} ${pkg.popular ? "border-accent/60" : ""} rounded-3xl h-full flex flex-col bg-white/40 backdrop-blur-sm`}>
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-gradient-to-r from-accent via-amber-500 to-accent text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-accent/30 z-20"
                        >
                          <Star className="w-4 h-4 fill-current" />
                          <span>Most Popular</span>
                          <Star className="w-4 h-4 fill-current" />
                        </motion.div>
                      )}

                      {/* Package Header */}
                      <div className="mb-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shadow-lg ${pkg.popular ? "shadow-accent/40" : ""} group-hover:scale-110 transition-transform duration-300`}>
                            <pkg.icon className="w-8 h-8 text-white" />
                          </div>
                          {pkg.popular && (
                            <div className="flex items-center gap-1 text-accent">
                              <SparklesIcon className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-accent font-semibold text-base mb-6">
                          {pkg.tagline}
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="mb-8 pb-8 border-b-2 border-border/30">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl lg:text-5xl font-extrabold text-foreground">
                            {pkg.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm font-medium">
                          {pkg.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8 flex-grow">
                        <div className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.05 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform`}>
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-foreground text-sm font-medium leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="mb-8 pt-6 border-t-2 border-border/30">
                        <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Ideal for:</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.ideal.map((item) => (
                            <span key={item} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${pkg.popular ? "bg-accent/10 text-accent border border-accent/20" : "bg-secondary/80 text-secondary-foreground"}`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link to={`/customize?package=${pkg.id}`} className="mt-auto">
                        <Button
                          variant={pkg.popular ? "gold" : "default"}
                          size="lg"
                          className={`w-full group/btn text-base font-semibold h-14 ${pkg.popular ? "shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30" : ""}`}
                        >
                          {pkg.popular ? "Get Started" : "Customize Package"}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
        <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/20 via-secondary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Popular <span className="gold-text bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Add-Ons</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enhance your event with premium extras. All prices are transparent and can be added during customization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-card border-2 border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{addon.icon}</span>
                  <div className="flex-grow min-w-0">
                    <span className="text-foreground font-semibold text-base block">{addon.name}</span>
                  </div>
                  <span className="text-accent font-bold text-lg whitespace-nowrap">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Not Sure Which Package <span className="text-accent">Fits Best?</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg sm:text-xl mb-10 leading-relaxed">
                Talk to our event specialists. We'll help you choose and customize the perfect package for your celebration.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-lg">
                    Book Free Consultation
                  </Button>
                </Link>
                <a href="tel:+254700000000" className="w-full sm:w-auto">
                  <Button variant="outline-light" size="lg" className="w-full sm:w-auto text-lg h-14 px-8">
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
