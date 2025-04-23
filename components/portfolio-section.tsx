"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Search, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "digital-marketing", name: "Digital Marketing" },
  { id: "software", name: "Software Development" },
  { id: "ai", name: "AI Solutions" },
];

// Updated Portfolio Items
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce SEO Campaign",
    category: ["digital-marketing"],
    imageUrl: "/images/portfolio/seo-campaign.jpg", // Placeholder image
    description:
      "Comprehensive SEO strategy for an online retailer resulting in a 150% increase in organic traffic and 80% growth in organic revenue.",
    details: {
      client: "Online Retail Brand",
      challenge:
        "Increase organic visibility and sales in a competitive market.",
      solution:
        "Implemented on-page optimization, technical SEO fixes, content marketing, and link building.",
      results: [
        "150% increase in organic traffic within 6 months.",
        "80% growth in organic revenue.",
        "Top 3 rankings for key commercial keywords.",
      ],
      technologies: [
        "SEO Tools (SEMrush, Ahrefs)",
        "Google Analytics",
        "Content Strategy",
      ],
    },
    liveUrl: "#", // Replace with actual URL if available
    icon: Search,
  },
  {
    id: 2,
    title: "Social Media Growth Strategy",
    category: ["digital-marketing"],
    imageUrl: "/images/portfolio/social-media.jpg", // Placeholder image
    description:
      "Managed social media presence for a B2B SaaS company, leading to a 300% increase in engagement and 50% growth in qualified leads.",
    details: {
      client: "SaaS Company",
      challenge: "Low brand awareness and lead generation from social media.",
      solution:
        "Developed platform-specific content strategy, ran targeted ad campaigns, and engaged actively with the community.",
      results: [
        "300% increase in overall engagement.",
        "50% growth in marketing qualified leads (MQLs) from social channels.",
        "Established thought leadership in the industry.",
      ],
      technologies: [
        "Meta Business Suite",
        "LinkedIn Ads",
        "Hootsuite",
        "Canva",
      ],
    },
    liveUrl: "#",
    icon: Users,
  },
  {
    id: 3,
    title: "AI-Powered Customer Service Chatbot",
    category: ["software", "ai"],
    imageUrl: "/images/portfolio/ai-chatbot.jpg", // Placeholder image
    description:
      "Developed an intelligent chatbot that reduced customer support tickets by 40% and improved response times.",
    details: {
      client: "Tech Support Company",
      challenge:
        "High volume of repetitive customer queries overwhelming support staff.",
      solution:
        "Built an NLP-based chatbot integrated with the knowledge base to answer common questions and escalate complex issues.",
      results: [
        "40% reduction in support ticket volume.",
        "Improved average response time by 70%.",
        "Increased customer satisfaction scores.",
      ],
      technologies: ["Python", "Rasa/Dialogflow", "React", "Node.js"],
    },
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Performance Marketing for Lead Gen",
    category: ["digital-marketing"],
    imageUrl: "/images/portfolio/performance-marketing.jpg", // Placeholder image
    description:
      "Executed Google Ads and Meta Ads campaigns for a service-based business, achieving a 30% reduction in cost-per-lead (CPL).",
    details: {
      client: "Local Service Provider",
      challenge: "High CPL and low quality leads from paid channels.",
      solution:
        "Refined audience targeting, optimized ad creatives and landing pages, and implemented conversion tracking.",
      results: [
        "30% reduction in CPL.",
        "45% increase in lead quality score.",
        "Improved overall campaign ROI by 25%.",
      ],
      technologies: ["Google Ads", "Meta Ads", "Google Analytics", "Unbounce"],
    },
    liveUrl: "#",
    icon: BarChart,
  },
  {
    id: 5,
    title: "Cross-Platform Mobile App (React Native)",
    category: ["software"],
    imageUrl: "/images/portfolio/mobile-app.jpg", // Placeholder image
    description:
      "Built a feature-rich mobile app for iOS and Android using React Native, achieving high user ratings.",
    details: {
      client: "Startup Company",
      challenge:
        "Need for a cost-effective mobile presence on both iOS and Android.",
      solution:
        "Developed a cross-platform application using React Native, focusing on native-like performance and UI/UX.",
      results: [
        "Successful launch on App Store and Google Play.",
        "Average user rating of 4.7 stars.",
        "Reduced development time and cost compared to native development.",
      ],
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    },
    liveUrl: "#",
  },
  // Add more projects as needed, balancing digital marketing and software
];

type PortfolioItem = (typeof portfolioItems)[0];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeCategory));

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
            See how we've helped businesses like yours achieve remarkable
            results through strategic digital marketing and innovative software
            solutions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "transition-all",
                activeCategory === category.id &&
                  "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.imageUrl || "/images/placeholder.jpg"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-semibold">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        {item.icon && (
                          <item.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.category.map((cat) => (
                          <Badge
                            key={cat}
                            variant="secondary"
                            className="text-xs"
                          >
                            {categories.find((c) => c.id === cat)?.name || cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4 text-sm">
                    {item.details.client && (
                      <p>
                        <strong>Client:</strong> {item.details.client}
                      </p>
                    )}
                    <p>
                      <strong>Challenge:</strong> {item.details.challenge}
                    </p>
                    <p>
                      <strong>Solution:</strong> {item.details.solution}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-1">Results:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {item.details.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    {item.details.technologies && (
                      <div>
                        <h4 className="font-semibold mb-1">
                          Technologies/Tools:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.details.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {item.liveUrl && item.liveUrl !== "#" && (
                    <div className="mt-6">
                      <Button asChild variant="outline">
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Live Project <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
