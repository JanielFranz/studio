'use client';

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const photos = [
    { src: '/2.png', height: 800, alt: 'janiel smiling', hint: 'janiel smilingv' },
    { src: '/3.png', height: 800, alt: 'franz fighting', hint: 'franz fighting' },

    ];

  return (
    <main className="flex-grow">
      <section id="hero" className="container mx-auto px-6 py-14 mt-5 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-5xl mx-auto leading-tight text-balance">
          {t('home.hero.title')}
        </h1>
      </section>

      <section className="container mx-auto px-6 py-0 lg:py-2">
        <div className="mx-auto max-w-6xl flex flex-wrap justify-center gap-10 sm:gap-12">{/* centrado con flex */}
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index} className="group relative w-60 sm:w-64 md:w-72 aspect-square overflow-hidden shadow-md ring-1 ring-black/10 bg-muted">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 256px, 288px"
                className="object-cover"
                data-ai-hint={photo.hint}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
