import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import NoiseBackground from '@/components/NoiseBackground';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/i18n/LanguageProvider';

export const metadata: Metadata = {
  title: 'Janiel Franz - Software Engineer',
  description: 'Portfolio of Janiel Franz, a Software Engineer and Kickboxing fighter',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  const navLinks = [
    { href: '/about', i18nKey: 'nav.about' },
    { href: '/works', i18nKey: 'nav.works' },
    { href: '/contact', i18nKey: 'nav.contact' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Janiel Franz</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fuente global Anton */}
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        {/* Fuente navbar Bebas Neue */}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-dvh">
        <LanguageProvider>
          {/* Fondo de ruido */}
          <NoiseBackground density={0.00022} speed={0.2} />

          <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <Navbar navLinks={navLinks} />
          </header>

          <main className="flex-grow relative z-10 flex flex-col">{/* main vuelve a crecer para empujar footer al fondo */}
            {children}
          </main>

          <footer className="w-full bg-secondary/50 mt-auto relative z-10">{/* mt-auto para anclar al fondo */}
            <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center font-display">
              <p className="text-sm text-muted-foreground mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Janiel Franz. All rights reserved.</p>
            </div>
          </footer>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
