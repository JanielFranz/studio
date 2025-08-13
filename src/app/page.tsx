import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const photos = [
    { src: 'https://placehold.co/600x800.png', height: 800, alt: 'Abstract building facade', hint: 'abstract architecture' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'A minimalist interior scene', hint: 'minimalist interior' },
    { src: 'https://placehold.co/600x600.png', height: 600, alt: 'Portrait of a person looking away', hint: 'person portrait' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'City street at dusk', hint: 'city street' },
    { src: 'https://placehold.co/600x800.png', height: 800, alt: 'Close-up of a plant with soft light', hint: 'plant detail' },
    { src: 'https://placehold.co/600x400.png', height: 400, alt: 'Landscape with a single tree', hint: 'minimalist landscape' },
  ];

  return (
    <main className="flex-grow">
      <section id="hero" className="container mx-auto px-6 py-14 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl mx-auto leading-tight text-balance">
            SOFTWARE ENGINEER BLENDING INNOVATION, PRECISION, CREATIVITY, AND KICKBOXING DISCIPLINE
        </h1>
      </section>

      <section className="container mx-auto px-6 py-0 lg:py-2">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-md ring-1 ring-black/10 bg-muted">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={photo.hint}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
