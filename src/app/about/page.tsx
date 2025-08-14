'use client';

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-5xl mx-auto leading-tight text-balance uppercase">
          {t('about.hero.title')}
        </h1>
      </section>
      <section className="container mx-auto px-6 py-0">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <Image
              src="/picture1.png"
              alt="janiel in suit"
              width={800}
              height={800}
              className="w-full h-99 object-cover rounded-md"
              data-ai-hint="janiel in suit"
            />
          </div>
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground">{t('about.section.label')}</h2>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              {t('about.paragraph.1')}
            </p>
            <p className="text-foreground/80 leading-relaxed text-balance text-lg">
              {t('about.paragraph.2')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
