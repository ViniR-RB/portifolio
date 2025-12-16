'use client';

import { Terminal, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-white">
            <Terminal className="w-5 h-5" />
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">Dev Vini</h2>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-gray-200 hover:text-white text-sm font-medium transition-colors" href="#sobre">
            Sobre
          </a>
          <a className="text-gray-200 hover:text-white text-sm font-medium transition-colors" href="#projetos">
            Projetos
          </a>
          <a className="text-gray-200 hover:text-white text-sm font-medium transition-colors" href="#stack">
            Stack
          </a>
          <a className="text-gray-200 hover:text-white text-sm font-medium transition-colors" href="#blog">
            Blog
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/25 active:scale-95">
            Entrar em contato
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
