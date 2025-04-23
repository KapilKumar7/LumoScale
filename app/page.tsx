import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ExpertiseSection from "@/components/expertise-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import PartnersSection from "@/components/partners-section";
import AboutUsSection from "@/components/about-us-section"; // Added import
import WhyChooseUsSection from "@/components/why-choose-us-section"; // Added import

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection /> {/* Added About Us section */}
      <ServicesSection />
      <WhyChooseUsSection /> {/* Added Why Choose Us section */}
      {/* <ExpertiseSection /> */} {/* Commented out Expertise section */}
      {/* Consider adding a scrolling number section here if desired */}
      <PortfolioSection />
      <TestimonialsSection />
      <PartnersSection /> {/* Renamed from Active Partners for consistency */}
      <TeamSection />
      {/* Removed standalone marketing/SEO sections */}
      <ContactSection />
    </main>
  );
}
