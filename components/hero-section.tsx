"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Server, Braces, MoveRight } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Animation for floating elements
  const floatingAnimation = {
    y: ['-0.5rem', '0.5rem'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut'
    }
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5 dark:from-transparent dark:via-blue-900/10 dark:to-purple-900/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"
          animate={{ x: ['-5%', '5%'], y: ['-5%', '5%'] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute top-2/3 -right-20 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"
          animate={{ x: ['5%', '-5%'], y: ['5%', '-5%'] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium py-1 px-3 rounded-full">
                Innovate • Build • Scale
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Ideas</span> into Digital Reality
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              We craft exceptional digital experiences with cutting-edge technology. From DevOps to AI applications, we bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-3">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="text-lg font-semibold tracking-tight">TechCorp</div>
                <div className="text-lg font-semibold tracking-tight">InnovateLabs</div>
                <div className="text-lg font-semibold tracking-tight">FutureSystems</div>
                <div className="text-lg font-semibold tracking-tight">NexGen</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-1 shadow-xl"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-inner">
              <div className="bg-gray-900 flex items-center px-4 py-2 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-gray-400 text-xs ml-2">code-interface.jsx</div>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-xs sm:text-sm text-blue-500 dark:text-blue-400">
                  <code>
                    {`import { LumoScale } from '@lumoscale/core';

// Initialize the app solution
const solution = new LumoScale({
  type: 'enterprise',
  features: [
    'ai-integration',
    'cloud-native',
    'react-native',
    'devops-automation'
  ]
});

// Deploy system architecture
solution.architect().then(blueprint => {
  return solution.develop(blueprint);
}).then(product => {
  console.log('Digital transformation complete!');
  solution.launch(product);
});`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
          
          {/* Floating tech icons */}
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
              transition: { ...floatingAnimation.transition, delay: 0.5 }
            }}
          >
            <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 -right-8 w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center shadow-lg"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
          >
            <Braces className="w-8 h-8 text-green-600 dark:text-green-400" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll down</p>
        <MoveRight className="h-5 w-5 text-muted-foreground rotate-90" />
      </motion.div>
    </div>
  )
}