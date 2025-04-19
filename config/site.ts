import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs"; // Added Instagram, Linkedin, Facebook
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const baseSiteConfig = {
  name: "LumoScale",
  description:
    "LumoScale: Expert Full-Stack Development, DevOps, AI Integration, Digital Marketing (SEO, ASO), and Mobile App Solutions.", // Updated description
  url: "https://lumoscale.com", // Replace with your actual domain
  ogImage: "https://lumoscale.com/og.jpg", // Replace with your actual OG image path
  metadataBase: new URL("https://lumoscale.com"), // Replace with your actual domain
  keywords: ["full-stack development", "devops", "ai integration", "mobile app development", "react native", "next.js", "cloud architecture", "chatbot development", "digital marketing", "seo", "aso", "search engine optimization", "app store optimization", "ppc", "content marketing"], // Added keywords
  /*
  authors: [
    {
      name: "LumoScale Team",
      url: "https://lumoscale.com", // Replace with your team/about page if applicable
      // twitter: '@yourtwitterhandle', // Optional: Add Twitter handle
    }
  ],
  */
  creator: '@lumoscale', // Replace with your Twitter handle or identifier
  themeColor: '#ffffff', // Adjust theme color if needed
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  headerLinks: [
    { name: 'repo', href: "https://github.com/KapilKumar7/LumoScale", icon: BsGithub },
    // { name: 'buyMeACoffee', href: "https://www.buymeacoffee.com/LumoScale", icon: SiBuymeacoffee }, // Uncomment or replace if needed
    // { name: 'juejin', href: "https://juejin.cn/user/2604400876507166", icon: SiJuejin }, // Uncomment or replace if needed
    // { name: 'weChat', href: "https://wechat.com", icon: BsWechat }, // Uncomment or replace if needed
  ],
  footerLinks: [
    { name: 'email', href: "mailto:Lumoscale@gmail.com", icon: MdEmail }, // Updated email
    { name: 'twitter', href: "https://x.com/Lumo_Scale12?t=7JVM8M5zTpjhsOaHDEEuZg&s=09", icon: BsTwitterX }, // Updated Twitter link
    { name: 'github', href: "https://github.com/KapilKumar7/", icon: BsGithub },
    { name: 'instagram', href: "https://www.instagram.com/lumoscale?igsh=aXVrazZ1ajgzMXV1", icon: BsInstagram }, // Added Instagram
    { name: 'linkedin', href: "https://www.linkedin.com/company/lumoscale/", icon: BsLinkedin }, // Added LinkedIn
    { name: 'facebook', href: "https://www.facebook.com/share/1FgGchxAnb/", icon: BsFacebook }, // Added Facebook
    // { name: 'buyMeACoffee', href: "https://www.buymeacoffee.com/LumoScale", icon: SiBuymeacoffee }, // Uncomment or replace if needed
    // { name: 'juejin', href: "https://juejin.cn/user/2604400876507166", icon: SiJuejin }, // Uncomment or replace if needed
    // { name: 'weChat', href: "https://wechat.com", icon: BsWechat }, // Uncomment or replace if needed
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'Weijunext' }, // Example product link
    // { url: 'https://smartexcel.cc/', name: 'SmartExcel' }, // Example product link
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' }, // Example product link
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' }, // Example product link
    // { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' }, // Example product link
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' }, // Example product link
  ],
  contact: {
    address: "Gachibowli, Hyderabad, India",
    email: "Lumoscale@gmail.com", // Updated email
    phone: "+91 8919053970", // Updated phone/WhatsApp
    whatsapp: "+91 8919053970", // Updated WhatsApp
  }
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US", // Adjust locale if needed
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description, // Ensure description is updated here too
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`], // Ensure OG image path is correct
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description, // Ensure description is updated here too
    images: [`${baseSiteConfig.url}/og.jpg`], // Ensure Twitter image path is correct
    creator: baseSiteConfig.creator,
  },
}
