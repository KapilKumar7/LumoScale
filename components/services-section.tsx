"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { 
  Server, 
  Smartphone, 
  Code2, 
  Bot, 
  MessageSquare,
  ChevronRight,
  LayoutGrid,
  Layers,
  Database,
  Cloud
} from 'lucide-react'

const services = [
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Server className="h-6 w-6" />,
    description: 'Streamline your development and operations with our enterprise-grade CI/CD pipelines, container orchestration, and cloud infrastructure management.',
    features: ['CI/CD Pipeline Automation', 'Container Management', 'Infrastructure as Code', 'Cloud Deployment', 'Monitoring & Observability'],
    color: 'blue',
    bgGradient: 'from-blue-600/20 to-blue-400/5'
  },
  {
    id: 'mobile',
    title: 'React Native',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Build stunning, high-performance mobile apps for iOS and Android from a single codebase with our React Native expertise.',
    features: ['Cross-Platform Development', 'Native Performance', 'Custom UI/UX Design', 'API Integration', 'App Store Deployment'],
    color: 'green',
    bgGradient: 'from-green-600/20 to-green-400/5'
  },
  {
    id: 'fullstack',
    title: 'Fullstack Apps',
    icon: <Code2 className="h-6 w-6" />,
    description: 'End-to-end web application development with modern frameworks, scalable architecture, and seamless integration capabilities.',
    features: ['Frontend Excellence', 'Backend Architecture', 'Database Design', 'Authentication Systems', 'RESTful & GraphQL APIs'],
    color: 'purple',
    bgGradient: 'from-purple-600/20 to-purple-400/5'
  },
  {
    id: 'ai',
    title: 'AI Applications',
    icon: <Bot className="h-6 w-6" />,
    description: 'Harness the power of artificial intelligence with custom solutions for automation, data analysis, and intelligent decision-making.',
    features: ['Machine Learning Integration', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Model Deployment'],
    color: 'orange',
    bgGradient: 'from-orange-600/20 to-orange-400/5'
  },
  {
    id: 'chatbot',
    title: 'Chatbot Integration',
    icon: <MessageSquare className="h-6 w-6" />,
    description: 'Enhance customer engagement with intelligent conversational interfaces that integrate seamlessly with your existing platforms.',
    features: ['Custom Chatbot Development', 'NLP Training', 'Multi-Platform Integration', 'Analytics Dashboard', 'Continuous Improvement'],
    color: 'pink',
    bgGradient: 'from-pink-600/20 to-pink-400/5'
  }
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])
  
  const getColorClass = (color: string, isActive: boolean) => {
    const baseClasses = 'transition-colors duration-200'
    if (isActive) {
      switch (color) {
        case 'blue': return `${baseClasses} text-blue-600 dark:text-blue-400`
        case 'green': return `${baseClasses} text-green-600 dark:text-green-400`
        case 'purple': return `${baseClasses} text-purple-600 dark:text-purple-400`
        case 'orange': return `${baseClasses} text-orange-600 dark:text-orange-400`
        case 'pink': return `${baseClasses} text-pink-600 dark:text-pink-400`
        default: return `${baseClasses} text-blue-600 dark:text-blue-400`
      }
    }
    return `${baseClasses} text-muted-foreground`
  }
  
  const getBgGradient = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`
  }
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
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
            Expert Solutions for Modern Challenges
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            We deliver cutting-edge technology solutions tailored to your specific needs, helping businesses transform their digital presence.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-md p-1 overflow-hidden">
              <nav className="flex flex-col divide-y divide-border">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "flex items-center gap-3 p-4 text-left transition-all",
                      activeService.id === service.id 
                        ? "bg-blue-50 dark:bg-blue-900/20" 
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      getColorClass(service.color, true),
                      activeService.id === service.id 
                        ? getBgGradient(service.bgGradient)
                        : "bg-secondary"
                    )}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-medium",
                        getColorClass(service.color, activeService.id === service.id)
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    {activeService.id === service.id && (
                      <ChevronRight className="ml-auto h-5 w-5 text-blue-600 dark:text-blue-400" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div 
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "rounded-xl overflow-hidden h-full",
                getBgGradient(activeService.bgGradient)
              )}
            >
              <div className="bg-background/80 backdrop-blur-sm h-full p-8 md:p-10">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className={cn(
                      "text-2xl font-bold mb-4",
                      getColorClass(activeService.color, true)
                    )}>
                      {activeService.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {activeService.description}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {activeService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={cn(
                          "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                          getBgGradient(activeService.bgGradient)
                        )}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild className={cn(
                      "bg-gradient-to-r text-white",
                      activeService.color === 'blue' && "from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600",
                      activeService.color === 'green' && "from-green-600 to-green-500 hover:from-green-700 hover:to-green-600",
                      activeService.color === 'purple' && "from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600",
                      activeService.color === 'orange' && "from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600",
                      activeService.color === 'pink' && "from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600",
                    )}>
                      <a href="#contact">Get Started with {activeService.title}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <LayoutGrid className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-muted-foreground">
              Build systems that grow with your business, from startup to enterprise scale.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
            <p className="text-muted-foreground">
              Tailor-made solutions aligned perfectly with your unique business requirements.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Management</h3>
            <p className="text-muted-foreground">
              Efficient storage, processing, and analysis of your most valuable asset: your data.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-muted-foreground">
              Harness the full power of cloud computing for flexibility, reliability, and performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}