import { ArrowRight } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { TechStack } from './TechStack';

export function HeroContent() {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 animate-fade-in-up">
      <StatusBadge />

      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
          Desenvolvedor <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">
            Full Stack
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl font-normal leading-relaxed">
          Especialista em construir aplicações web e mobile escaláveis. Transformo complexidade em eficiência com{' '}
          <span className="text-white font-semibold">Next.js</span>,{' '}
          <span className="text-white font-semibold">NestJS</span> e{' '}
          <span className="text-white font-semibold">Flutter</span>.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
        <button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-2 group">
          Ver Projetos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold text-base transition-all flex items-center justify-center gap-2">
          Entrar em contato
        </button>
      </div>

      <TechStack />
    </div>
  );
}
