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
      <section id="hero" className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl mx-auto leading-tight text-balance">
            SKILLED SOFTWARE ENGINEER CRAFTING INNOVATIVE SOLUTIONS WITH PRECISION AND PASSION, BALANCING LOGIC AND CREATIVITY WITH THE DISCIPLINE OF A KICKBOXING FIGHTER
        </h1>
      </section>

      <section className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-light tracking-wide">Featured Work</h2>
        </div>
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
         <div className="text-center mt-8">
            <Button asChild>
                <Link href="/works">View All Works</Link>
            </Button>
        </div>
      </section>
    </main>
  );
}
