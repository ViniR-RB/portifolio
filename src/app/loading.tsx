import { Smartphone, Code, Layers } from 'lucide-react'

function MobileDevSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-primary">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Smartphone className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Carregando...</h2>
        <p className="text-white/80">Preparando experiência mobile</p>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <Code className="w-6 h-6 text-primary/40 absolute top-1/4 left-1/4 animate-bounce" />
        <Layers className="w-6 h-6 text-primary/40 absolute bottom-1/4 left-1/3 animate-bounce" />
      </div>
    </div>
  )
}



export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <MobileDevSpinner />
    </div>
  )
} 