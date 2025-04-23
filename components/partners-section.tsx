"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component
import { Building } from "lucide-react"; // Example icon

// Replace with actual partner logos or data
const partners = [
  { name: "Partner A", logo: "/images/partners/logo-a.png" }, // Placeholder path
  { name: "Partner B", logo: "/images/partners/logo-b.png" }, // Placeholder path
  { name: "Partner C", logo: "/images/partners/logo-c.png" }, // Placeholder path
  { name: "Partner D", logo: "/images/partners/logo-d.png" }, // Placeholder path
  { name: "Partner E", logo: "/images/partners/logo-e.png" }, // Placeholder path
  { name: "Partner F", logo: "/images/partners/logo-f.png" }, // Placeholder path
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-semibold text-muted-foreground mb-10"
        >
          Trusted by Innovative Companies
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-10 w-32 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              {/* Use Image component if you have logos */}
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                layout="fill"
                objectFit="contain"
                title={partner.name} // Tooltip for accessibility
              />
              {/* Fallback if no logo image */}
              {/* <div className="flex items-center justify-center h-full w-full">
                <Building className="h-8 w-8 text-muted-foreground" />
                <span className="sr-only">{partner.name}</span>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
