import Link from 'next/link';
import { ArrowLeft, Search,  } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-[#0c141d] dark:text-[#e6edf4]">
     

      <main className="relative flex grow flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-grid opacity-40" 
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, 5%, white, 95%, transparent)'
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-[#1E90FF]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <div className="relative">
            <h1 className="text-[120px] font-black leading-none tracking-tighter sm:text-[180px] select-none text-transparent bg-clip-text bg-linear-to-br from-[#0A2540] via-primary to-[#1E90FF]">
              404
            </h1>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-[#0A2540]/5 px-4 py-1 backdrop-blur-sm dark:bg-white/10">
              <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400">Error: Route_Not_Found</span>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-4xl dark:text-white">
              Oops! Página não encontrada.
            </h2>
            <p className="mx-auto max-w-lg text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              Parece que você se perdeu no código ou viajou para uma rota inexistente. Verifique a URL ou volte para a segurança da home.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="/"
              className="group relative flex h-12 min-w-40 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-[#005bb5] hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao Início</span>
            </Link>
            <Link 
              href="#projetos"
              className="flex h-12 min-w-40 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-sm font-bold text-[#0A2540] transition-colors hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:border-gray-600 dark:hover:bg-white/5"
            >
              <Search className="w-5 h-5" />
              <span>Procurar Projetos</span>
            </Link>
          </div>

          <div className="mt-16 w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-[#161b22]">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="px-4 py-4 text-left font-mono text-xs sm:text-sm">
              <div className="flex">
                <span className="mr-4 select-none text-gray-300 dark:text-gray-700">1</span>
                <span className="text-purple-600 dark:text-purple-400">const</span>
                <span className="ml-2 text-[#0A2540] dark:text-blue-200">pageStatus</span>
                <span className="ml-2 text-gray-500">=</span>
                <span className="ml-2 text-orange-500 dark:text-orange-300">404</span>;
              </div>
              <div className="flex">
                <span className="mr-4 select-none text-gray-300 dark:text-gray-700">2</span>
                <span className="text-purple-600 dark:text-purple-400">if</span>
                <span className="text-gray-500">(</span>
                <span className="text-[#0A2540] dark:text-blue-200">!found</span>
                <span className="text-gray-500">)</span>
                <span className="text-gray-500"> {'{'}</span>
              </div>
              <div className="flex">
                <span className="mr-4 select-none text-gray-300 dark:text-gray-700">3</span>
                <span className="ml-4 text-[#0A2540] dark:text-blue-200">redirect</span>
                <span className="text-gray-500">(</span>
                <span className="text-green-600 dark:text-green-400">&apos;/home&apos;</span>
                <span className="text-gray-500">)</span>;
              </div>
              <div className="flex">
                <span className="mr-4 select-none text-gray-300 dark:text-gray-700">4</span>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}
