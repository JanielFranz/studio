'use client';

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  const socialLinks = [
    { href: "https://www.instagram.com/janielfranzz?igsh=ZjYzY2ZhcTJ1eHlr", label: "Instagram" },
    { href: "https://www.linkedin.com/in/janiel-franz-escalante-baygorrea-a00ab6290/", label: "Linkedin" },
    { href: "https://www.youtube.com/@janielarico", label: "Youtube" },
    { href: "https://www.tiktok.com/@janielfranz?_t=ZS-8ysOkKtkNVf&_r=1", label: "TikTok" },
  ];

  return (
    <main className="flex-grow">
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-5xl mx-auto leading-tight text-balance uppercase">
            {t('contact.hero.title')}
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg font-bold">{t('contact.phone')}: +51 938172134</p>
            <p className="text-lg font-bold">{t('contact.email')}: contact@janielfranz.me</p>
            <p className="text-lg font-bold">{t('contact.location')}</p>
          </div>
          <div>
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">{t('contact.socials.label')}</h2>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-lg font-bold hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
