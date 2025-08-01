'use client'
import React from 'react'
import BaseSection from './BaseSection'
import { Button } from '@/components/ui/button'
import { scrollToId } from '@/lib/utils'

export default function HeroSection() {
  return (
    <BaseSection className='bg-gradient-primary' id="hero" >

    <div className='container my-auto mx-auto px-6 text-center flex flex-col h-screen items-center justify-center'>
      <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>Desenvolvedor
      
      <span className='block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' >Mobile</span>
      </h1>
      <p className='text-lg'>
      Criando experiências móveis incríveis com a tecnologia
      </p>
     <div className='flex gap-2 mt-1' >
    <Button onClick={() => scrollToId('projects')} size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-300" >
      Ver Projetos
    </Button>
    <Button onClick={() => scrollToId('contact')} size="lg" className='border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300' >
      Entrar em contato
    </Button>
     </div>


    </div>


    </BaseSection>
  )
}
