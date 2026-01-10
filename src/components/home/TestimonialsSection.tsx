import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwangi",
    role: "Birthday Party",
    content: "Remy Events turned my 30th birthday into a night I'll never forget. From the décor to the entertainment, every detail was perfect. I didn't have to lift a finger!",
    rating: 5,
  },
  {
    id: 2,
    name: "James Ochieng",
    role: "Corporate Event",
    content: "We needed a reliable partner for our company's annual dinner. The professionalism and attention to detail exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    role: "Baby Shower",
    content: "The team understood exactly what I wanted. The decorations were stunning, the food was amazing, and the cleanup was seamless. It was absolutely stress-free.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the people who've celebrated with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/40 mb-6" />

                {/* Content */}
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-foreground/60 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
