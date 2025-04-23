"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  BrainCircuit,
  Bot,
  Megaphone,
  Search,
  Users,
  BarChart,
  Mail,
  Palette,
  PenTool,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const softwareServices = [
  {
    id: "fullstack",
    title: "Fullstack Web Apps",
    icon: Code,
    description:
      "Scalable and robust web applications using modern frameworks like Next.js and Node.js.",
    features: [
      "Frontend Development (React, Next.js)",
      "Backend Development (Node.js, Express)",
      "Database Design & Management",
      "API Development & Integration",
      "Cloud Deployment",
    ],
    color: "blue",
  },
  {
    id: "mobile",
    title: "React Native Apps",
    icon: Smartphone,
    description:
      "Cross-platform mobile applications for iOS and Android with native performance.",
    features: [
      "iOS & Android Development",
      "UI/UX Design for Mobile",
      "Push Notifications",
      "Offline Functionality",
      "App Store Submission",
    ],
    color: "green",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Server,
    description:
      "Streamline development and operations with CI/CD, containerization, and cloud infrastructure.",
    features: [
      "CI/CD Pipeline Automation",
      "Container Management (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform)",
      "Cloud Architecture (AWS, Azure, GCP)",
      "Monitoring & Observability",
    ],
    color: "purple",
  },
  {
    id: "ai",
    title: "AI Applications",
    icon: BrainCircuit,
    description:
      "Integrate artificial intelligence to automate processes and gain insights.",
    features: [
      "Machine Learning Model Integration",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI-Powered Automation",
      "Data Analysis & Prediction",
    ],
    color: "orange",
  },
  {
    id: "chatbot",
    title: "Chatbot Integrations",
    icon: Bot,
    description:
      "Develop intelligent chatbots for customer support, lead generation, and automation.",
    features: [
      "Custom Chatbot Development",
      "Platform Integration (Website, Messenger)",
      "NLP Training",
      "Workflow Automation",
      "Analytics & Reporting",
    ],
    color: "pink",
  },
  {
    id: "consulting",
    title: "Strategy & Consulting",
    icon: Briefcase,
    description:
      "Expert guidance on technology strategy, architecture, and digital transformation.",
    features: [
      "Technology Roadmapping",
      "Solution Architecture",
      "Feasibility Studies",
      "Process Optimization",
      "Digital Transformation Strategy",
    ],
    color: "yellow",
  },
];

const marketingServices = [
  {
    id: "social-media",
    title: "Social Media Management",
    icon: Users,
    description:
      "Build and engage your community across relevant social media platforms.",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Analytics & Reporting",
      "Platform Strategy",
    ],
    color: "green",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    icon: BarChart,
    description:
      "Drive measurable results through targeted paid advertising campaigns.",
    features: [
      "PPC Campaign Management (Google Ads, Meta Ads)",
      "Conversion Rate Optimization (CRO)",
      "Landing Page Design & Testing",
      "Analytics & Performance Tracking",
      "Budget Optimization",
    ],
    color: "purple",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing & PR",
    icon: Megaphone,
    description:
      "Leverage influencers and media relations to enhance brand reach and credibility.",
    features: [
      "Influencer Identification & Outreach",
      "Campaign Management",
      "Public Relations Strategy",
      "Media Outreach",
      "Performance Measurement",
    ],
    color: "orange",
  },
  {
    id: "creative-services",
    title: "Creative Services",
    icon: Palette,
    description:
      "Compelling visual and written content that resonates with your audience.",
    features: [
      "Graphic Design",
      "Video Production",
      "Brand Identity Design",
      "UI/UX Design",
      "Photography",
    ],
    color: "pink",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    icon: PenTool,
    description:
      "Create valuable content to attract, engage, and retain your target audience.",
    features: [
      "Content Strategy Development",
      "Blog Post & Article Writing",
      "SEO Content Optimization",
      "Content Distribution",
      "Performance Analysis",
    ],
    color: "yellow",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    icon: Mail,
    description:
      "Nurture leads and build customer loyalty through effective email campaigns.",
    features: [
      "Campaign Strategy & Design",
      "List Management & Segmentation",
      "Automation Workflows",
      "A/B Testing",
      "Performance Reporting",
    ],
    color: "teal", // Added a new color for variety
  },
  {
    id: "seo-aso",
    title: "SEO & ASO",
    icon: Search,
    description:
      "Improve organic visibility on search engines and app stores to drive traffic.",
    features: [
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Technical SEO Audits",
      "Local SEO",
      "App Store Optimization (ASO)",
    ],
    color: "blue",
  },
];

const allServices = [...softwareServices, ...marketingServices];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(softwareServices[0]);
  const [activeTab, setActiveTab] = useState<"software" | "marketing">(
    "marketing"
  ); // Default to marketing

  const handleSelectService = (serviceId: string) => {
    const service = allServices.find((s) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      // Determine if the selected service is software or marketing
      if (softwareServices.some((s) => s.id === serviceId)) {
        setActiveTab("software");
      } else {
        setActiveTab("marketing");
      }
    }
  };

  const getGradientClass = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-600/20 to-blue-400/5";
      case "green":
        return "from-green-600/20 to-green-400/5";
      case "purple":
        return "from-purple-600/20 to-purple-400/5";
      case "orange":
        return "from-orange-600/20 to-orange-400/5";
      case "pink":
        return "from-pink-600/20 to-pink-400/5";
      case "yellow":
        return "from-yellow-600/20 to-yellow-400/5";
      case "teal":
        return "from-teal-600/20 to-teal-400/5";
      default:
        return "from-gray-600/20 to-gray-400/5";
    }
  };

  const getTextColorClass = (color: string, isHover = false) => {
    const base = "transition-colors duration-200";
    const hoverPrefix = isHover ? "hover:" : "";
    switch (color) {
      case "blue":
        return `${base} ${hoverPrefix}text-blue-600 dark:${hoverPrefix}text-blue-400`;
      case "green":
        return `${base} ${hoverPrefix}text-green-600 dark:${hoverPrefix}text-green-400`;
      case "purple":
        return `${base} ${hoverPrefix}text-purple-600 dark:${hoverPrefix}text-purple-400`;
      case "orange":
        return `${base} ${hoverPrefix}text-orange-600 dark:${hoverPrefix}text-orange-400`;
      case "pink":
        return `${base} ${hoverPrefix}text-pink-600 dark:${hoverPrefix}text-pink-400`;
      case "yellow":
        return `${base} ${hoverPrefix}text-yellow-600 dark:${hoverPrefix}text-yellow-400`;
      case "teal":
        return `${base} ${hoverPrefix}text-teal-600 dark:${hoverPrefix}text-teal-400`;
      default:
        return `${base} ${hoverPrefix}text-gray-600 dark:${hoverPrefix}text-gray-400`;
    }
  };

  const servicesToDisplay =
    activeTab === "software" ? softwareServices : marketingServices;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
          selectedService.color
        )} opacity-30 transition-all duration-500`}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-sm font-medium ${getTextColorClass(
              selectedService.color
            )} uppercase tracking-wide mb-2 transition-colors duration-500`}
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Solutions Tailored for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Explore our comprehensive range of digital marketing and software
            development services designed to elevate your business.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg flex space-x-1">
            <button
              onClick={() => {
                setActiveTab("marketing");
                handleSelectService(marketingServices[0].id); // Select first marketing service
              }}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "marketing"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => {
                setActiveTab("software");
                handleSelectService(softwareServices[0].id); // Select first software service
              }}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "software"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Software Development
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Service List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-2"
          >
            {servicesToDisplay.map((service) => (
              <button
                key={service.id}
                onClick={() => handleSelectService(service.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4",
                  selectedService.id === service.id
                    ? `bg-card shadow-md border border-border ${getTextColorClass(
                        service.color
                      )}`
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                    selectedService.id === service.id
                      ? `bg-${service.color}-100 dark:bg-${service.color}-900/30`
                      : "bg-muted"
                  )}
                >
                  <service.icon
                    className={cn(
                      "h-5 w-5 transition-colors duration-300",
                      selectedService.id === service.id
                        ? getTextColorClass(service.color)
                        : "text-muted-foreground"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "font-medium transition-colors duration-300",
                    selectedService.id === service.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            key={selectedService.id} // Add key to force re-render on change
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${selectedService.color}-100 dark:bg-${selectedService.color}-900/30 transition-colors duration-500`}
              >
                <selectedService.icon
                  className={`h-6 w-6 ${getTextColorClass(
                    selectedService.color
                  )} transition-colors duration-500`}
                />
              </div>
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              {selectedService.description}
            </p>
            <h4 className="font-semibold mb-4">Key Features:</h4>
            <ul className="space-y-3">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-1 w-4 h-4 rounded-full flex-shrink-0 ${getTextColorClass(
                      selectedService.color
                    )} bg-opacity-20 flex items-center justify-center transition-colors duration-500`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-current transition-colors duration-500`}
                    />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
