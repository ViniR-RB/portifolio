import { ChevronDown } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { CodeCard } from './CodeCard';
import Background from "@/public/bg.webp"
export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden parallax-bg"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(19, 91, 236, 0.85), rgba(16, 22, 34, 0.95)), url(${Background.src})`
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <HeroContent />
        <CodeCard />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a className="text-white/50 hover:text-white transition-colors" href="#footer">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
