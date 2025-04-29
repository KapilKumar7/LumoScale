"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon, MenuIcon, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-1 bg-background rounded-lg transform rotate-45 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">LS</span>
            </div>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">LumoScale</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#expertise" className="text-foreground/80 hover:text-foreground transition-colors">
            Expertise
          </Link>
          <Link href="#work" className="text-foreground/80 hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Link href="#team" className="text-foreground/80 hover:text-foreground transition-colors">
            Team
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-background/95 backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link href="#services" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#expertise" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>
            Expertise
          </Link>
          <Link href="#work" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>
            Work
          </Link>
          <Link href="#testimonials" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link href="#team" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>
            Team
          </Link>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href="#contact" onClick={toggleMenu}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}