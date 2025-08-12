import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  const photos = [
    { src: 'https://placehold.co/600x800.png', height: 800, alt: 'Abstract building facade', hint: 'abstract architecture' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'A minimalist interior scene', hint: 'minimalist interior' },
    { src: 'https://placehold.co/600x600.png', height: 600, alt: 'Portrait of a person looking away', hint: 'person portrait' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'City street at dusk', hint: 'city street' },
    { src: 'https://placehold.co/600x800.png', height: 800, alt: 'Close-up of a plant with soft light', hint: 'plant detail' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'Landscape with a single tree', hint: 'minimalist landscape' },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-accent transition-colors">
            Janiel Franz
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

      <main className="flex-grow pt-20">
        <section id="hero" className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl mx-auto leading-tight text-balance">
            Award-Winning Photographer Capturing Modern Stories with Minimalist Precision
          </h1>
        </section>

        <section id="works" className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-md shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={photo.height}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={photo.hint}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl font-light mb-4 tracking-wide">About Me</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-balance">
                Janiel Franz is a visionary photographer whose work is a testament to the power of minimalism. With a keen eye for composition and light, Janiel transforms ordinary scenes into extraordinary visual narratives. Each photograph is a carefully crafted story, told with precision and a deep appreciation for modern aesthetics.
            </p>
        </section>

        <section id="contact" className="container mx-auto px-6 py-24 mb-12">
            <div className="bg-card/80 rounded-lg p-12 text-center shadow-sm">
                <h2 className="text-3xl font-light mb-4 tracking-wide">Get In Touch</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed text-balance">
                    Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                </p>
                <Button asChild size="lg">
                    <a href="mailto:contact@janielfranz.com">contact@janielfranz.com</a>
                </Button>
            </div>
        </section>

      </main>

      <footer className="w-full bg-secondary/50 mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} Janiel Franz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
