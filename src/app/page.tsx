import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const photos = [
    { src: '/2.png', height: 800, alt: 'Abstract building facade', hint: 'abstract architecture' },
    { src: '/3.png', height: 800, alt: 'A minimalist interior scene', hint: 'minimalist interior' },
    { src: '/4.png', height: 800, alt: 'Portrait of a person looking away', hint: 'person portrait' },
    ];

  return (
    <main className="flex-grow">
      <section id="hero" className="container mx-auto px-6 py-14 mt-5 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl mx-auto leading-tight text-balance">
            SOFTWARE ENGINEER BLENDING INNOVATION, PRECISION, CREATIVITY, AND KICKBOXING DISCIPLINE
        </h1>
      </section>

      <section className="container mx-auto px-6 py-0 lg:py-2">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden  shadow-md ring-1 ring-black/10 bg-muted">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover "
                data-ai-hint={photo.hint}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
