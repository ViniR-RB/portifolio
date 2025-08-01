import React from "react";
import BaseSection from "./BaseSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Smartphone, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hello Cryptograph",
    description:
      "Aplicativo de criptografia para gravar qualquer dado que voce quiser, usando a criptografia assimetrica",
    tech: ["Flutter", "Sqflite","Flutter Modular",  "Stripe"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Hello Multlan",
    description:
      "Aplicativo full stack de mapeamento de caixas de terminacao optica, aplicacao usado para o meu Trabalho de Conclusao de Curso",
    tech: ["Flutter", "Next", "Nest JS", "API", "DDD", "Clean Code"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Social Media App",
    description:
      "Rede social focada em compartilhamento de fotos com recursos de edição e filtros em tempo real.",
    tech: ["Swift", "UIKit", "Core Data", "CloudKit"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Task Manager",
    description:
      "Gerenciador de tarefas colaborativo com sincronização em tempo real e notificações push.",
    tech: ["Kotlin", "Room", "Retrofit", "FCM"],
    image: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <BaseSection id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Alguns dos aplicativos que desenvolvi recentemente
          </p>

          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-glow-primary transition-all duration-300 border-primary/20 flex flex-col h-full"
                  >
                    <CardHeader>
                      <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 mt-auto">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-glow-accent transition-all duration-300 border-accent/20 flex flex-col h-full"
                  >
                    <CardHeader>
                      <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Ver
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
