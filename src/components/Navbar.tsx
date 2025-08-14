'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  navLinks: Array<{ href: string; i18nKey: string }>;
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggle, locale } = useLanguage();
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(o => !o);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-sidebar-foreground transition-colors relative">
          Janiel Franz
          {/* Punto activo si está en home */}
          {isActive('/') && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-foreground" />
          )}
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm uppercase tracking-widest transition-colors ${active ? 'text-foreground' : 'text-muted-foreground hover:text-sidebar-foreground'}`}
            >
              {t(link.i18nKey)}
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-foreground transition-all duration-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              />
            </Link>
          );
        })}
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
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-1">
          {navLinks.map(link => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-widest transition-colors py-2 pl-3 border-l ${active ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-sidebar-foreground hover:border-sidebar-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.i18nKey)}
              </Link>
            );
          })}
          <button
            onClick={() => { toggle(); setIsMenuOpen(false); }}
            className="self-start mt-2 text-xs font-medium uppercase tracking-widest border px-3 py-1 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={t('action.toggle-language-full')}
          >
            {t('action.toggle-language-full')}
          </button>
          <p className="text-[10px] text-muted-foreground tracking-wide">{locale === 'en' ? 'Interface in English' : 'Interfaz en Español'}</p>
        </div>
      </div>
    </nav>
  );
}
