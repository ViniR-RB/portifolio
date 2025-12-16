import { Settings } from 'lucide-react';

export function CodeCard() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center perspective-1000">
      <div className="relative w-full max-w-md bg-[#1e293b]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700 ease-out p-6">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">portfolio.tsx</div>
        </div>

        {/* Code Body */}
        <div className="font-mono text-sm space-y-2">
          <CodeLine lineNumber={1}>
            <span className="text-purple-400">const</span>
            <span className="text-blue-400 ml-2">Developer</span>
            <span className="text-white ml-2">=</span>
            <span className="text-yellow-300 ml-2">{'{'}</span>
          </CodeLine>

          <CodeLine lineNumber={2}>
            <span className="text-blue-300 ml-4">name:</span>
            <span className="text-green-400 ml-2">&quot;Vinicius Roosevelt&quot;</span>,
          </CodeLine>

          <CodeLine lineNumber={3}>
            <span className="text-blue-300 ml-4">role:</span>
            <span className="text-green-400 ml-2">&quot;Full Stack Pleno&quot;</span>,
          </CodeLine>

          <CodeLine lineNumber={4}>
            <span className="text-blue-300 ml-4">stack:</span>
            <span className="text-yellow-300 ml-2">[</span>
          </CodeLine>

          <CodeLine lineNumber={5}>
            <span className="text-green-400 ml-8">&quot;Next.js&quot;</span>,
          </CodeLine>

          <CodeLine lineNumber={6}>
            <span className="text-green-400 ml-8">&quot;NestJS&quot;</span>,
          </CodeLine>

          <CodeLine lineNumber={7}>
            <span className="text-green-400 ml-8">&quot;Flutter&quot;</span>
          </CodeLine>

          <CodeLine lineNumber={8}>
            <span className="text-yellow-300 ml-4">]</span>,
          </CodeLine>

          <CodeLine lineNumber={9}>
            <span className="text-blue-300 ml-4">status:</span>
            <span className="text-green-400 ml-2">&quot;Coding...&quot;</span>
          </CodeLine>

          <CodeLine lineNumber={10}>
            <span className="text-yellow-300">{'}'}</span>;
          </CodeLine>
        </div>

        <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-tl-xl shadow-lg">
          <Settings className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </div>
  );
}

function CodeLine({ lineNumber, children }: { lineNumber: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="text-gray-500 w-6 select-none">{lineNumber}</span>
      {children}
    </div>
  );
}
