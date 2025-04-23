"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Zap,
  BarChart,
  Users,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Real Growth, Not Just Numbers",
    description:
      "We focus on tangible results like leads, sales, and sustainable growth.",
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly & Scalable",
    description:
      "Perfect for startups and growing businesses looking to scale without breaking the bank.",
  },
  {
    icon: Zap,
    title: "Always Adapting to New Trends",
    description:
      "The digital world changes fast; we stay updated so your brand stays ahead.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Creativity",
    description:
      "Every decision is backed by data, aimed at increasing engagement and sales.",
  },
  {
    icon: Users,
    title: "Hands-On Support",
    description:
      "We work like your in-house team — always aligned, always available.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Partner with LumoScale?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Discover the advantages of choosing us as your strategic growth
            partner.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <reason.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
