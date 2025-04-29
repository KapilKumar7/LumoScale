"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  TrendingUp,
  Megaphone,
  Users,
  BarChart,
  Smartphone,
} from "lucide-react";

// Updated SEO & ASO Services using existing icons
const seoAsoServices = [
  {
    title: "On-Page & Off-Page SEO",
    icon: <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    description: "Optimize site structure and build authority.",
  },
  {
    title: "Local & Technical SEO",
    icon: <Search className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    description: "Improve local visibility and site health.",
  },
  {
    title: "SEO Audit",
    icon: <BarChart className="h-6 w-6 text-gray-600 dark:text-gray-400" />,
    description:
      "Comprehensive analysis to identify optimization opportunities.",
  },
  {
    title: "App Store Optimization (ASO)",
    icon: <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />,
    description: "Enhance app visibility and downloads in app stores.",
  },
];

// Updated and expanded Other Marketing Services using existing icons
const otherMarketingServices = [
  {
    title: "Social Media Management",
    icon: <Users className="h-6 w-6 text-red-600 dark:text-red-400" />,
    description: "Content creation, growth strategies, and paid advertising.",
  },
  {
    title: "Performance Marketing",
    icon: (
      <Megaphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
    ),
    description: "Search, Display, Social Ads, Remarketing campaigns.",
  },
  {
    title: "Influencer Marketing & PR",
    icon: <Users className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
    description: "Strategic collaborations and campaign execution.",
  },
  {
    title: "Creative Services",
    icon: (
      <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
    ),
    description: "Social creatives, video, graphics, brand identity, copy.",
  },
  {
    title: "Content Marketing",
    icon: (
      <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
    ),
    description: "Create valuable content to attract and retain customers.",
  },
  {
    title: "Email Marketing",
    icon: <Megaphone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
    description: "Targeted email campaigns for engagement and conversion.",
  },
  {
    title: "Analytics & Reporting",
    icon: <BarChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    description: "Track performance and optimize strategies.",
  },
];

export default function TeamSection() {
  return (
    <section id="marketing-services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
          >
            Growth & Marketing Services
          </motion.p> */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Amplify Your Reach & Visibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Leverage our expertise in SEO, ASO, and comprehensive digital
            marketing strategies to grow your business effectively.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-left bg-card border border-border rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-3 text-center text-primary">
              WHO WE ARE
            </h4>
            <p className="text-muted-foreground mb-4">
              At LumoScale, we’re not just another digital marketing
              agency—we’re your strategic growth partner. Whether you’re a
              startup, a growing brand, or an established business, we provide
              360° support—from digital marketing and branding to deep business
              strategy.
            </p>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">
                What sets us apart?
              </span>{" "}
              We focus on real results—leads, sales, and growth. Our team
              studies your industry, builds custom strategies, and works closely
              with you every step of the way.
            </p>
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">
                Our mission is simple:
              </span>{" "}
              To empower businesses by using smart digital marketing to expand
              their reach, connect with the right audience, and boost their
              bottom line.
            </p>
            <p className="text-muted-foreground">
              With LumoScale, you don’t just get a service—you get a dedicated
              partner committed to your success.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">
              Digital Marketing Strategies
            </h3>
            <p className="text-muted-foreground">
              Comprehensive solutions to elevate your brand online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {otherMarketingServices.map((service, index) => (
              <motion.div
                key={`marketing-${index}`}
                className="bg-secondary/50 border border-border rounded-xl p-6 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-secondary/50 rounded-2xl p-8 md:p-12"
        > */}
        {/* <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">
              SEO & App Store Optimization
            </h3>
            <p className="text-muted-foreground">
              Boost your organic presence on the web and in app stores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoAsoServices.map((service, index) => (
              <motion.div
                key={`seo-${index}`}
                className="bg-card border border-border rounded-xl p-6 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        {/* </motion.div> */}

        <div className="text-center mt-16">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            <a href="#contact">Get a Marketing Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
