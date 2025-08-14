'use client';

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function WorksPage() {
  const { t } = useLanguage();
  const mainProject = {
    title: "Triphasik Platform",
    src: "/triphasik.png",
    alt: "Triphasik image",
    hint: "triphasik platform",
    details: t('works.main.details'),
    tech: 'NestJs, VueJs',
  };

  const otherProjects = [
    { src: '/sarria.png', alt: 'SKC project', hint: 'SKC project', title: 'SKC' },
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
              <h2 className="text-lg font-bold font-display">{mainProject.title}</h2>
              <p className="text-sm text-muted-foreground font-display">{mainProject.details}</p>
              <p className="text-sm text-muted-foreground font-display">{t('works.main.tech')}: {mainProject.tech}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index}>
              <div className="group relative overflow-hidden rounded-md mb-4 ">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={400}
                  height={400}
                  className="w-fit h-full object-cover"
                  data-ai-hint={project.hint}
                />
              </div>
              <h3 className="font-bold font-display">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
