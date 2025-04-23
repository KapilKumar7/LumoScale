"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Server,
  Code,
  Braces,
  MoveRight,
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation for floating elements
  const floatingAnimation = {
    y: ["-0.5rem", "0.5rem"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5 dark:from-transparent dark:via-blue-900/10 dark:to-purple-900/10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"
          animate={{ x: ["-5%", "5%"], y: ["-5%", "5%"] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"
          animate={{ x: ["5%", "-5%"], y: ["5%", "-5%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="h-4 w-4" />
            Your Strategic Growth Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-foreground dark:to-foreground/70"
          >
            Drive Growth with Digital Marketing & Innovative Software
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground mb-10"
          >
            We combine data-driven digital marketing strategies with expert
            software development to scale your business and achieve real
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating tech icons */}
      {/*
      <motion.div
        className="absolute -top-6 -right-6 w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shadow-lg"
        animate={floatingAnimation}
      >
        <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center shadow-lg"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 0.5 },
        }}
      >
        <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-12 -right-8 w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center shadow-lg"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
      >
        <Braces className="w-8 h-8 text-green-600 dark:text-green-400" />
      </motion.div>
      */}

      {/* Scroll indicator */}
      {/*
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll down</p>
        <MoveRight className="h-5 w-5 text-muted-foreground rotate-90" />
      </motion.div>
      */}
    </section>
  );
}
