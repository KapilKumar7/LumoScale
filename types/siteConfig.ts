import { IconType } from 'react-icons';

export interface NavItem {
  name: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  metadataBase: URL;
  keywords: string[];
  authors: {
    name: string;
    url: string;
  }[];
  creator: string;
  themeColor: string;
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
  };
  headerLinks: {
    name: string;
    href: string;
    icon: IconType;
  }[];
  footerLinks: {
    name: string;
    href: string;
    icon: IconType;
  }[];
  footerProducts: {
    url: string;
    name: string;
  }[];
  contact: {
    address: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
  mainNav?: NavItem[];
  links?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}
