'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  navLinks: Array<{ href: string; label: string }>;
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold tracking-wider uppercase hover:text-sidebar-foreground transition-colors">
        Janiel Franz
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="text-sm uppercase tracking-widest hover:text-sidebar-foreground transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <div className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-t border-border md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-sidebar-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
