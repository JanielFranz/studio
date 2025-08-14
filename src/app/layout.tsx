import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import NoiseBackground from '@/components/NoiseBackground';

export const metadata: Metadata = {
  title: 'Franzfolio',
  description: 'Award-Winning Photographer Capturing Modern Stories with Minimalist Precision',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Franzfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-dvh">
        {/* Fondo de ruido */}
        <NoiseBackground density={0.00022} speed={0.2} />

        <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-sidebar-foreground transition-colors">
              Janiel Franz
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-sm uppercase tracking-widest hover:text-sidebar-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex-grow relative z-10">
          {children}
        </main>

        <footer className="w-full bg-secondary/50 mt-auto relative z-10">
          <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Janiel Franz. All rights reserved.</p>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
