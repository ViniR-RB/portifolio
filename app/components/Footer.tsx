import { Code, Briefcase, AtSign } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="bg-background-light dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800" 
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-[#0d121b] dark:text-white mb-2">DevPortfolio</h3>
          <p className="text-[#4c669a] dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Dev Vini. Construindo o futuro, linha por linha.
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            className="text-[#4c669a] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
            href="#"
            aria-label="GitHub"
          >
            <Code className="w-6 h-6" />
          </a>
          <a 
            className="text-[#4c669a] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
            href="#"
            aria-label="LinkedIn"
          >
            <Briefcase className="w-6 h-6" />
          </a>
          <a 
            className="text-[#4c669a] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
            href="#"
            aria-label="Email"
          >
            <AtSign className="w-6 h-6" />
          </a>
        </div>

        <div className="flex gap-6 text-sm">
          <a 
            className="text-[#4c669a] dark:text-gray-400 hover:text-[#0d121b] dark:hover:text-white transition-colors" 
            href="#"
          >
            Termos
          </a>
          <a 
            className="text-[#4c669a] dark:text-gray-400 hover:text-[#0d121b] dark:hover:text-white transition-colors" 
            href="#"
          >
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
