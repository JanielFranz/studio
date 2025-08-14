'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

interface NavbarProps {
  navLinks: Array<{ href: string; i18nKey: string }>;
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggle, locale } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(o => !o);

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-sidebar-foreground transition-colors">
          Janiel Franz
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="text-sm uppercase tracking-widest hover:text-sidebar-foreground transition-colors">
            {t(link.i18nKey)}
          </Link>
        ))}
        <button
          onClick={toggle}
          className="text-xs font-medium uppercase tracking-widest border px-3 py-1 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label={t('action.toggle-language-full')}
        >
          {t('action.toggle-language')}
        </button>
      </div>

      {/* Mobile right side (hamburger + lang) */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={toggle}
          className="text-[10px] font-semibold uppercase tracking-widest border px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label={t('action.toggle-language-full')}
        >
          {t('action.toggle-language')}
        </button>
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-[5px] focus:outline-none group"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : 'group-hover:scale-x-75'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'group-hover:scale-x-50'}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-t border-border md:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-sidebar-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(link.i18nKey)}
            </Link>
          ))}
                 </div>
      </div>
    </nav>
  );
}
