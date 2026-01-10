import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, CreditCard, Users, Sparkles, MapPin, Trash2 } from "lucide-react";

const trustFeatures = [
  {
    icon: CreditCard,
    title: "One Payment, Everything Handled",
    description: "No hidden fees, no surprise costs. One transparent payment covers your entire event.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Verified Vendors",
    description: "Every vendor in our network is vetted for quality, reliability, and professionalism.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Sparkles,
    title: "Customizable Packages",
    description: "Tailor every detail to your vision. Mix and match services that fit your needs.",
    color: "from-accent to-amber-600",
  },
  {
    icon: CheckCircle2,
    title: "Professional Setup",
    description: "Our team arrives early to ensure everything is perfect before your guests arrive.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Trash2,
    title: "Hassle-Free Cleanup",
    description: "Enjoy your event to the last moment. We handle all the cleanup afterward.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: MapPin,
    title: "Nairobi-Wide Coverage",
    description: "From Westlands to Karen, Kilimani to Runda — we serve all of Nairobi.",
    color: "from-orange-500 to-red-600",
  },
];

export const TrustSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose <span className="gold-text">Remy Events?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            We've thought of everything so you don't have to. Here's our promise to you.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
            <span className="text-foreground font-medium text-sm sm:text-base">
              "Relax — we've got this handled."
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
