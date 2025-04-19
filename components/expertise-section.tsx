"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Code, 
  Database, 
  Server, 
  Layers,
  CloudCog,
  Bot
} from 'lucide-react'

const technologies = [
  {
    category: "frontend",
    title: "Frontend",
    description: "Creating beautiful, responsive, and high-performance user interfaces that captivate and engage.",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "UI/UX Design", level: 82 }
    ]
  },
  {
    category: "backend",
    title: "Backend",
    description: "Building robust server-side applications with scalable architectures and efficient APIs.",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 88 },
      { name: "GraphQL", level: 85 },
      { name: "RESTful APIs", level: 94 },
      { name: "PostgreSQL", level: 90 }
    ]
  },
  {
    category: "devops",
    title: "DevOps",
    description: "Streamlining development and operations with automation, containerization, and cloud services.",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Docker", level: 93 },
      { name: "Kubernetes", level: 89 },
      { name: "CI/CD", level: 91 },
      { name: "AWS", level: 87 },
      { name: "Azure", level: 86 }
    ]
  },
  {
    category: "fullstack",
    title: "Full Stack",
    description: "End-to-end development expertise from database to UI, creating seamless integrated experiences.",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "MERN Stack", level: 92 },
      { name: "JAMstack", level: 88 },
      { name: "Serverless", level: 86 },
      { name: "System Design", level: 90 },
      { name: "Performance Optimization", level: 85 }
    ]
  },
  {
    category: "cloud",
    title: "Cloud",
    description: "Leveraging cloud platforms to build scalable, secure, and cost-effective solutions.",
    icon: <CloudCog className="h-5 w-5" />,
    skills: [
      { name: "AWS Services", level: 90 },
      { name: "Azure Services", level: 87 },
      { name: "Cloud Architecture", level: 89 },
      { name: "Serverless Computing", level: 88 },
      { name: "Multi-Cloud Strategy", level: 84 }
    ]
  },
  {
    category: "ai",
    title: "AI & ML",
    description: "Implementing intelligent systems that learn and adapt, bringing smart automation to applications.",
    icon: <Bot className="h-5 w-5" />,
    skills: [
      { name: "TensorFlow", level: 83 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "ML Integration", level: 87 },
      { name: "AI Chatbots", level: 89 }
    ]
  }
]

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
            Technical Skills & Proficiency
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Our team excels across the full technology stack, with specialized expertise in modern frameworks, cloud infrastructure, and cutting-edge AI technologies.
          </motion.p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
              {technologies.map((tech) => (
                <TabsTrigger key={tech.category} value={tech.category} className="flex items-center gap-2">
                  {tech.icon}
                  <span className="hidden md:inline">{tech.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {technologies.map((tech) => (
            <TabsContent key={tech.category} value={tech.category} className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-md"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      {tech.icon && React.cloneElement(tech.icon, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tech.title} Technology</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {tech.skills.slice(0, 3).map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-6">
                      {tech.skills.slice(3).map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">5+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-muted-foreground">
              Half a decade delivering exceptional software solutions across industries.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">50+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Completed Projects</h3>
            <p className="text-muted-foreground">
              Successfully delivered diverse projects for startups and established companies.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-green-600 dark:text-green-400">98%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
            <p className="text-muted-foreground">
              Our commitment to excellence reflected in our client satisfaction rate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}