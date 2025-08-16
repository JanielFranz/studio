'use client';

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const photos = [
    { src: '/2.png', height: 800, alt: 'janiel smiling', hint: 'janiel smiling' },
    { src: '/3.png', height: 800, alt: 'franz fighting', hint: 'franz fighting' },
  ];

  return (
    <main className="relative">
      <div className="flex flex-col items-center w-full min-h-[calc(100dvh-170px)] px-6 pt-[clamp(3rem,10vh,6rem)] pb-12 gap-12 xl:justify-center transition-[padding]">
        <section id="hero" className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-balance">
            {t('home.hero.title')}
          </h1>
        </section>

        <section className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 sm:gap-12 xl:gap-16 max-w-4xl">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative w-56 sm:w-60 md:w-64 xl:w-72 aspect-square overflow-hidden shadow-md ring-1 ring-black/10 bg-muted transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 240px, (max-width: 1024px) 256px, 288px"
                  className="object-cover"
                  data-ai-hint={photo.hint}
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
