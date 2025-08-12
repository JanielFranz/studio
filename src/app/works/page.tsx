import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  const mainProject = {
    title: "Vasilisa",
    src: "https://placehold.co/1200x800.png",
    alt: "Portrait of a man with rose petals",
    hint: "man portrait",
    details: "Weinbergstrasse 05, 8006 Zurich, Switzerland",
    year: "2024",
  };

  const otherProjects = [
    { src: 'https://placehold.co/600x400.png', alt: 'Woman looking over shoulder', hint: 'woman portrait', title: 'Serene Gaze' },
    { src: 'https://placehold.co/600x800.png', alt: 'Person covered with a sheet', hint: 'abstract portrait', title: 'Hidden Form' },
    { src: 'https://placehold.co/600x400.png', alt: 'Two faces close together', hint: 'couple portrait', title: 'Intimacy' },
    { src: 'https://placehold.co/600x400.png', alt: 'Man in profile', hint: 'man profile', title: 'Side Profile' },
    { src: 'https://placehold.co/600x400.png', alt: 'Illustrated woman with flower', hint: 'illustration portrait', title: 'Flower Girl' },
    { src: 'https://placehold.co/600x400.png', alt: 'Illustrated woman', hint: 'illustration portrait', title: 'Contemplation' },
  ];

  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="mb-4">
            <Image
              src={mainProject.src}
              alt={mainProject.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-md"
              data-ai-hint={mainProject.hint}
              priority
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-lg font-bold">{mainProject.title}</h2>
              <p className="text-sm text-muted-foreground">{mainProject.details}</p>
              <p className="text-sm text-muted-foreground">Year: {mainProject.year}</p>
            </div>
            <Link href="#" className="text-sm font-medium hover:underline">View Project</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index}>
                <div className="group relative overflow-hidden rounded-md shadow-sm mb-4">
                    <Image
                        src={project.src}
                        alt={project.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={project.hint}
                    />
                </div>
                <h3 className="font-bold">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
