"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component
import { Building } from "lucide-react"; // Example icon

// Replace with actual partner logos or data
const partners = [
  {
    name: "GREEN CYCLE",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gc-gRUPCEYInUNItIijicx9DdlLP2S5UK.jpeg",
  },
  {
    name: "Namoona Group",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nm-ZbXKSN0nDwZGRC9rNt0e8tlbUUCVBK.jpeg",
  },
  {
    name: "InternForage",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/if-DwDvrleAP55Rc4Vl79nap9szZwvuMk.png",
  },
  {
    name: "Lucido Interiors",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/li.jpg-GXbIeeIAwmAI7Jo5BbzvptsvLqWylv.jpeg",
  },
  {
    name: "Pragyashala",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ps.jpg-CgEhnrBFhG8nZM5jC43tpn8Db1Jxmh.jpeg",
  },
  // Add more partners if needed
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

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {" "}
          {/* Increased gap */}
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Adjusted classes: removed grayscale/opacity, added flex column, centered items
              className="flex flex-col items-center gap-y-2 transition-all duration-300"
            >
              {/* Adjusted container for image */}
              <div className="relative h-12 w-36">
                {" "}
                {/* Increased height/width slightly */}
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  layout="fill"
                  objectFit="contain"
                  title={partner.name} // Tooltip for accessibility
                />
              </div>
              {/* Added span for partner name */}
              <span className="text-sm text-muted-foreground font-medium">
                {partner.name}
              </span>
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
