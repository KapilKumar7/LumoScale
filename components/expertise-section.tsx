"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Smartphone,
  BrainCircuit,
  Search,
  Megaphone,
  BarChart,
  Users,
  Palette,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const techSkills = [
  {
    category: "frontend",
    title: "Frontend",
    description:
      "Creating beautiful, responsive, and high-performance user interfaces.",
    icon: Code,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "UI/UX Design Principles", level: 82 },
      { name: "Web Performance Optimization", level: 85 },
    ],
  },
  {
    category: "backend",
    title: "Backend & Cloud",
    description:
      "Building robust server-side applications and scalable cloud infrastructure.",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python (Django/Flask)", level: 80 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "Database Management (SQL/NoSQL)", level: 88 },
    ],
  },
  {
    category: "mobile-ai",
    title: "Mobile & AI",
    description:
      "Developing cross-platform mobile apps and integrating AI solutions.",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "AI/ML Integration", level: 75 },
      { name: "Chatbot Development", level: 80 },
      { name: "Mobile Performance", level: 82 },
    ],
  },
];

const marketingSkills = [
  {
    category: "seo-sem",
    title: "SEO & SEM",
    description:
      "Driving organic and paid traffic through search engine optimization and marketing.",
    icon: Search,
    skills: [
      { name: "On-Page & Off-Page SEO", level: 92 },
      { name: "Technical SEO", level: 88 },
      { name: "Google Ads / PPC", level: 90 },
      { name: "Keyword Research & Strategy", level: 85 },
    ],
  },
  {
    category: "social-content",
    title: "Social & Content",
    description:
      "Engaging audiences through strategic social media and content marketing.",
    icon: Megaphone,
    skills: [
      { name: "Social Media Strategy", level: 90 },
      { name: "Content Creation & Marketing", level: 87 },
      { name: "Community Management", level: 85 },
      { name: "Influencer Marketing", level: 80 },
    ],
  },
  {
    category: "analytics-cro",
    title: "Analytics & CRO",
    description:
      "Utilizing data to optimize campaigns and improve conversion rates.",
    icon: BarChart,
    skills: [
      { name: "Google Analytics / Tag Manager", level: 93 },
      { name: "Conversion Rate Optimization (CRO)", level: 88 },
      { name: "A/B Testing", level: 85 },
      { name: "Data Analysis & Reporting", level: 90 },
    ],
  },
];

const allSkills = [...techSkills, ...marketingSkills];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & Proficiency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            A blend of technical mastery and digital marketing acumen to drive
            your success across all fronts.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <category.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
