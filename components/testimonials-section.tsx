"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Uma Mounika",
    position: "CEO at Pragyashala",
    quote:
      "Lumoscale transformed our online presence completely. Our engagement rates have increased by 300% since working with them. Their SEO strategies helped us reach the top of search results.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Vamsi K",
    position: "Marketing Head at Lucido Interiors",
    quote:
      "The team at Lumoscale is exceptional. They helped us develop a comprehensive digital marketing strategy that doubled our conversion rates within just 3 months.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Nancy",
    position: "Marketing Executive of livTech",
    quote:
      "Outstanding service and results! Our social media following grew by 500% and our website traffic increased dramatically thanks to their targeted campaigns.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Ramsai V",
    position: "CMO at Techvalve Solutions",
    quote:
      "Lumoscale's expertise in PPC and social media advertising helped us achieve a 250% ROI on our marketing spend. Their data-driven approach sets them apart.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const partners = [
  { name: "GREEN CYCLE", logo: "/images/partners/green-cycle.png" },
  { name: "Namoona Group", logo: "/images/partners/namoona.png" },
  { name: "InternForage", logo: "/images/partners/internforage.png" },
  { name: "Lucido Interiors", logo: "/images/partners/lucido.png" },
  { name: "Pragyashala", logo: "/images/partners/pragyashala.png" },
  { name: "livTech", logo: "/images/partners/livtech.png" },
  { name: "Techvalve Solutions", logo: "/images/partners/techvalve.png" },
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-secondary/50 relative overflow-hidden"
    >
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
            Our success is measured by our clients' satisfaction. Here's what
            they have to say about working with us.
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="border-border bg-card h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted-foreground/20" />
                      <p className="italic text-muted-foreground">
                        {testimonial.quote}
                      </p>
                    </div>
                  </CardContent>
                  <div className="flex items-center gap-4 p-6 pt-0 border-t border-border mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`block h-2 w-2 rounded-full ${
                  activeIndex === index
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Active Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <span className="text-muted-foreground font-medium">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
