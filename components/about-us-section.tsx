"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Handshake } from "lucide-react";

const aboutPoints = [
  {
    icon: Handshake,
    title: "Strategic Growth Partner",
    description:
      "We're not just another agency — we're your strategic growth partner, providing 360° support from digital marketing and branding to deep business strategy.",
  },
  {
    icon: Target,
    title: "Focus on Real Results",
    description:
      "What sets us apart? We focus on real results—leads, sales, and growth. Our team studies your industry, builds custom strategies, and works closely with you.",
  },
  {
    icon: TrendingUp,
    title: "Empowering Businesses",
    description:
      "Our mission is simple — to empower businesses by using smart digital marketing to expand their reach, connect with the right audience, and boost their bottom line.",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description:
      "With LumoScale, you don’t just get a service — you get a dedicated partner committed to your success, working like an extension of your team.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Your dedicated partner in achieving sustainable business growth
            through strategic digital marketing and innovative solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                <point.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
