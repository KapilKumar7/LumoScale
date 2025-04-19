"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Github, 
  Linkedin, 
  Twitter,
  Check
} from 'lucide-react'

const team = [
  {
    id: 1,
    name: 'David Chen',
    position: 'Founder & CEO',
    bio: 'Former tech lead at Google with 15+ years of experience in software architecture and team leadership.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Sophia Williams',
    position: 'CTO',
    bio: 'Expert in cloud architecture and DevOps with previous experience at AWS and Microsoft.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Lead AI Engineer',
    bio: 'AI specialist with a PhD in Machine Learning and publications in top conferences like ICML and NeurIPS.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Leila Patel',
    position: 'UX/UI Design Lead',
    bio: 'Award-winning designer with experience creating intuitive interfaces for Fortune 500 companies.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
]

const openings = [
  {
    title: 'Senior React Developer',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'DevOps Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time'
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract'
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
          >
            Our Team
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet the Experts Behind LumoScale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Our team of talented professionals brings together diverse expertise and a shared passion for innovative solutions.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative h-80">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2 justify-center">
                      <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors hover:bg-blue-600">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors hover:bg-blue-400">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={member.social.github} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors hover:bg-gray-800">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 bg-secondary/50 rounded-2xl p-8 md:p-12"
        >
          <div className="md:flex items-center justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
              <p className="text-muted-foreground">
                We're always looking for talented individuals to join our growing team.
              </p>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <a href="#contact">View All Positions</a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm">Competitive salary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm">Flexible work hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm">Professional growth</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Apply Now</a>
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}