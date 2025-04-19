"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI Projects" },
  { id: "cloud", label: "Cloud Solutions" },
  { id: "marketing", label: "Digital Marketing" },
];

const projects = [
  {
    id: 1,
    title: "IntelliChat AI Assistant",
    description:
      "An advanced conversational AI platform with natural language processing capabilities for customer support automation.",
    category: ["ai", "web"],
    image:
      "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "TensorFlow", "AWS"],
    link: "#",
  },
  {
    id: 2,
    title: "FinTrack Mobile App",
    description:
      "A comprehensive financial tracking application with expense management, budgeting, and investment portfolio tracking.",
    category: ["mobile"],
    image:
      "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    link: "#",
  },
  {
    id: 3,
    title: "CloudOps Dashboard",
    description:
      "A robust cloud infrastructure monitoring and management dashboard for DevOps teams with real-time analytics.",
    category: ["cloud", "web"],
    image:
      "https://images.pexels.com/photos/8106763/pexels-photo-8106763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Kubernetes", "Docker", "Azure"],
    link: "#",
  },
  {
    id: 4,
    title: "HealthConnect Platform",
    description:
      "An integrated healthcare platform connecting patients with providers through secure video consultations and record sharing.",
    category: ["web", "mobile"],
    image:
      "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "React Native", "GraphQL", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "SmartRetail Analytics",
    description:
      "AI-powered retail analytics system for inventory management, customer behavior analysis, and sales forecasting.",
    category: ["ai", "cloud"],
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    link: "#",
  },
  {
    id: 6,
    title: "EcoTrack IoT Platform",
    description:
      "Environmental monitoring platform using IoT sensors to track air quality, water levels, and climate conditions.",
    category: ["cloud", "web"],
    image:
      "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Node.js", "MQTT", "AWS IoT", "React"],
    link: "#",
  },
  {
    id: 7,
    title: "E-commerce SEO & Growth Strategy",
    description:
      "Implemented a comprehensive SEO and content marketing strategy for an online retailer, resulting in a 150% increase in organic traffic and a 60% rise in conversions within 6 months.",
    category: ["marketing", "web"],
    image:
      "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["SEO", "Content Marketing", "Google Analytics", "SEM"],
    link: "#",
  },
  {
    id: 8,
    title: "Mobile App ASO Campaign",
    description:
      "Executed an ASO campaign for a lifestyle app, improving keyword rankings, increasing app store visibility, and boosting downloads by 80%.",
    category: ["marketing", "mobile"],
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "ASO",
      "Keyword Research",
      "App Store Analytics",
      "Conversion Rate Optimization",
    ],
    link: "#",
  },
];

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Explore our diverse portfolio of successful projects across multiple
            industries and technologies.
          </motion.p>
        </div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`text-xs font-medium ${
                              project.category.includes("marketing")
                                ? "bg-yellow-500/30"
                                : "bg-white/20"
                            } backdrop-blur-sm rounded-full px-2 py-1`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn"
                      asChild
                    >
                      <a
                        href={project.link}
                        className="flex items-center gap-1"
                      >
                        View Case Study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50"
          >
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
