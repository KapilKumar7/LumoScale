import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header"; // Import the Header component
import Footer from "@/components/footer"; // Assuming Footer is also needed
import FloatingActionButtons from "@/components/floating-action-buttons"; // Import the new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumoscale | Digital Marketing & Software Solutions",
  description:
    "Innovative agency specializing in Digital Marketing, DevOps, React Native, Full-stack, AI Apps, and Chatbot Integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header /> {/* Add the Header component */}
          {children}
          <Footer /> {/* Add the Footer component if it's not already there */}
          <FloatingActionButtons /> {/* Add the floating action buttons */}
        </ThemeProvider>
      </body>
    </html>
  );
}
