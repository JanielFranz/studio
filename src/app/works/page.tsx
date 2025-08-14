import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  const mainProject = {
    title: "Triphasik Platform",
    src: "https://placehold.co/800x800.png",
    alt: "Triphasik image",
    hint: "triphasik platform",
    details: "Web App",
    year: "2025",
  };

  const otherProjects = [
    { src: 'https://placehold.co/400x400.png', alt: 'Woman looking over shoulder', hint: 'woman portrait', title: 'SKC' },
      ];

  return (
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-4 mt-6">
          <div className="mb-12">
            <div className="mb-4">
              <Image
                  src={mainProject.src}
                  alt={mainProject.alt}
                  width={800}
                  height={800}
                  className="w-fit h-auto object-cover rounded-md"
                  data-ai-hint={mainProject.hint}
                  priority
              />
            </div>
            <div className="block">
              <div className="min-[448px]:w-[400px] text-end">
                <h2 className="text-lg font-bold">{mainProject.title}</h2>
                <p className="text-sm text-muted-foreground">{mainProject.details}</p>
                <p className="text-sm text-muted-foreground">Year: {mainProject.year}</p>
              </div>
            {/*TODO:
            {/*<Link href="#" className="text-sm font-medium hover:underline">View Project</Link>*/}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index}>
                <div className="group relative overflow-hidden rounded-md shadow-sm mb-4">
                    <Image
                        src={project.src}
                        alt={project.alt}
                        width={400}
                        height={400}
                        className="w-fit h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
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
