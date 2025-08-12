import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Franzfolio',
  description: 'Award-Winning Photographer Capturing Modern Stories with Minimalist Precision',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "LinkedIn" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-dvh">
        <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-accent transition-colors">
              Markus Bernhardt
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        
        <div className="flex-grow">
          {children}
        </div>

        <footer className="w-full bg-secondary/50 mt-auto">
          <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Markus Bernhardt. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
