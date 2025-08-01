import React from "react";
import BaseSection from "./BaseSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Rocket, Smartphone } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Flutter",
    "Swift",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "REST APIs",
    "Next",
    "Nest JS",
    "DDD",
    "Clean Code",
    "API",
    "Stripe",
    "Sqflite",
    "GraphQL",
    "Git",
    "Figma",
    "Typescript",
    "Tailwind",
    "App Store",
  ];

  return (
    <BaseSection className="bg-gradient-secondary">
      <div className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Sobre <span className="text-primary">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Transformando ideias em aplicativos
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um desenvolvedor mobile apaixonado por criar aplicações que
                fazem a diferença na vida das pessoas. Com mais de 5 anos de
                experiência, especializo-me em desenvolver apps nativos e
                híbridos com foco na experiência do usuário.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sempre em busca das melhores práticas e tecnologias mais
                recentes do mercado, entrego soluções robustas, performáticas e
                escaláveis.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">App Nativos</h4>
                </div>
                <p className="text-muted-foreground">
                  Desenvolvimento para iOS e Android com performance otimizada
                </p>
              </Card>
              <Card className="p-6 border-accent/20 hover:border-accent/100 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">Cross-Platform</h4>
                </div>
                <p className="text-muted-foreground">
                  React Native e Flutter para máxima eficiência no desenvolvimento
                </p>
              </Card>
              
              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Deploy & CI/CD</h4>
                </div>
                <p className="text-muted-foreground">
                  Automação completa do processo de deploy para as lojas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
