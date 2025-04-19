import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ExpertiseSection from '@/components/expertise-section'
import WorkSection from '@/components/work-section'
import TestimonialsSection from '@/components/testimonials-section'
import TeamSection from '@/components/team-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <WorkSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}