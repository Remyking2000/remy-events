import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FileText, Users, Palette, Settings, CreditCard, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Share Your Vision",
    description: "Tell us about your event — the type, date, guest count, and location. We'll guide you through choosing the perfect package.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Choose Your Theme",
    description: "Select from our curated themes or describe your custom vision. We'll bring your aesthetic to life with stunning décor.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Customize Services",
    description: "Mix and match services — catering, photography, entertainment, and more. See real-time pricing as you build your perfect event.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Review your personalized quote, make a secure payment via M-Pesa or card, and relax knowing everything is confirmed.",
  },
  {
    number: "05",
    icon: Users,
    title: "Meet Your Manager",
    description: "Get assigned a dedicated event manager who coordinates every vendor, timeline, and detail on your behalf.",
  },
  {
    number: "06",
    icon: PartyPopper,
    title: "Enjoy Your Event",
    description: "Show up, celebrate, and create memories. We handle setup, coordination, and cleanup — you just enjoy the moment.",
  },
];

const HowItWorks = () => {
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
                How <span className="gold-text">Remy Events</span> Works
              </h1>
              <p className="text-muted-foreground text-lg">
                From your first message to the final cleanup, here's how we make event planning effortless.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex gap-8 mb-16 last:mb-0"
                >
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[39px] top-24 w-0.5 h-full bg-gradient-to-b from-accent to-border" />
                  )}

                  {/* Step Number */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 border-2 border-accent flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <span className="text-accent font-bold text-sm mb-2 block">
                      STEP {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reassurance Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Still Have <span className="gold-text">Questions?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We're here to help. Schedule a free consultation and let's discuss how we can make your event perfect.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/packages">
                  <Button variant="gold" size="lg">
                    View Packages
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
