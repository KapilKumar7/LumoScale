"use client";

import Link from "next/link"; // Keep Link for WhatsApp if needed elsewhere, or remove if unused
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const whatsappMessage = "Hello! I'm interested in your services.";

// Clean the WhatsApp number for the link (remove non-digits)
const cleanWhatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
// Clean the phone number for the tel: link (remove spaces, dashes, etc., keep + if present)
const cleanPhoneNumber = siteConfig.contact.phone.replace(/[^\d+]/g, "");

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-2">
      {/* ... WhatsApp Button (using Link) ... */}
      <Button
        asChild
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Link
          href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="h-6 w-6" />
        </Link>
      </Button>

      {/* Phone Button using standard <a> tag */}
      <Button
        asChild
        size="icon"
        className="rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        aria-label="Call us"
      >
        {/* Use standard <a> tag for tel: link */}
        <a href={`tel:${cleanPhoneNumber}`}>
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
