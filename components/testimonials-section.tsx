"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Client A", // Replace with actual name
    title: "CEO, [Company A Name]", // Replace with actual title & company
    quote:
      "LumoScale's digital marketing strategy significantly boosted our online presence and lead generation. Their team is knowledgeable, responsive, and truly cares about results.",
    avatar: "/images/avatars/avatar-1.png", // Replace with actual avatar path or use fallback
  },
  {
    name: "Client B", // Replace with actual name
    title: "Marketing Manager, [Company B Name]", // Replace with actual title & company
    quote:
      "The software solution developed by LumoScale streamlined our operations and improved efficiency dramatically. Their technical expertise is top-notch.",
    avatar: "/images/avatars/avatar-2.png", // Replace with actual avatar path or use fallback
  },
  {
    name: "Client C", // Replace with actual name
    title: "Founder, [Company C Name]", // Replace with actual title & company
    quote:
      "Working with LumoScale felt like having an extension of our own team. Their combined marketing and tech skills provided a holistic approach to our growth challenges.",
    avatar: "/images/avatars/avatar-3.png", // Replace with actual avatar path or use fallback
  },
  {
    name: "Client D", // Replace with actual name
    title: "Director, [Company D Name]", // Replace with actual title & company
    quote:
      "Their SEO and content marketing efforts put us on the map. We saw a remarkable increase in organic traffic and brand visibility.",
    avatar: "/images/avatars/avatar-4.png", // Replace with actual avatar path or use fallback
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-secondary/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/0 to-background/0" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Hear directly from businesses we've helped transform and grow.
          </motion.p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
