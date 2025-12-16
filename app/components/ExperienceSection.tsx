import {
  Briefcase,
  GraduationCap,
  Calendar,
  Download,
  Smartphone,
  Laptop,
} from "lucide-react";

interface ExperienceItemProps {
  icon: "work" | "mobile" | "code" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  tags: Array<{ label: string; variant: "primary" | "secondary" }>;
  isActive?: boolean;
  companyUrl?: string;
}

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }> | string
> = {
  work: Briefcase,
  mobile: Smartphone,
  code: Laptop,
  education: GraduationCap,
};

export function ExperienceItem({
  icon,
  title,
  company,
  period,
  description,
  tags,
  isActive = false,
  companyUrl,
}: ExperienceItemProps) {
  const IconComponent = iconMap[icon] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group relative grid grid-cols-[40px_1fr] gap-x-6">
      {/* Icon/Dot */}
      <div className="relative flex flex-col items-center pt-1">
        <div
          className={`size-10 rounded-full border-[3px] border-white dark:border-background-dark z-10 flex items-center justify-center ${
            isActive
              ? "bg-primary text-white shadow-[0_0_0_1px_rgba(19,91,236,0.2)]"
              : "bg-white dark:bg-slate-700 text-slate-400 dark:text-slate-300 shadow-sm"
          }`}
        >
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
          <div className="flex items-start gap-3">
         
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                {title}
              </h3>
              {companyUrl ? (
                <a
                  className="text-sm font-medium text-primary hover:underline"
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ {company}
                </a>
              ) : (
                <span className="text-sm font-medium text-slate-500">
                  @ {company}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-md self-start">
            <Calendar className="w-3.5 h-3.5" />
            {period}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                tag.variant === "primary"
                  ? "bg-primary/10 text-primary"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ExperienceData {
  icon: "work" | "mobile" | "code" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  tags: Array<{ label: string; variant: "primary" | "secondary" }>;
  isActive?: boolean;
  companyUrl?: string;
}

interface ExperienceSectionProps {
  title?: string;
  subtitle?: string;
  experiences?: ExperienceData[];
  showDownloadButton?: boolean;
}

const defaultExperiences: ExperienceData[] = [
  {
    icon: "work",
    title: "Coordenador de Sistemas",
    company: "Setur - PI",
    period: "Abril 2023 - Presente",
    description:
      "Experiência na Secretaria de Turismo: criação de pequenas ferramentas que agilizam a rotina interna dos funcionários e geram planilhas automáticas, desenvolvimento de um novo sistema de geração de processos utilizando Next com TypeScript para o front-end e Nest.js para a API, adoção de Domain Driven Design em conjunto com o time para lidar com a complexidade do sistema, melhorando o entendimento das regras de negócio e a testabilidade, implementação de testes unitários no domínio e uso de TypeORM para modelos alinhados ao DDD, atuação como Product Owner na definição de prioridades para acelerar o uso do sistema pelos usuários e criação de toda a estrutura de banco de dados com PostgreSQL, garantindo a normalização dos dados.",
    tags: [
      { label: "NestJS", variant: "primary" },
      { label: "Next.js", variant: "primary" },
      { label: "TypeScript", variant: "secondary" },
      { label: "Docker", variant: "secondary" },
      { label: "PostgreSQL", variant: "secondary" },
    ],
    isActive: true,
    companyUrl: "https://turismo.pi.gov.br/",
  },
  {
    icon: "code",
    title: "Desenvolvedor de Software Júnior",
    company: "Armazém Paraíba",
    period: "Agosto 2024 - Abril 2025",
    companyUrl: "https://www.armazemparaiba.com.br/institucional/quem-somos",
    description:
      "Experiência na empresa Armazém Paraíba: desenvolvimento de funcionalidades para manutenção e gerenciamento do e-commerce, incluindo otimização do sistema legado com redução de 6 para 1 chamada de API via webhook e implementação de tratamento de erros e re-tentativas no checkout, diminuindo em cerca de 60% o abandono de carrinhos com Django REST e o framework Oracle OCC (JavaScript e Knockout.js); criação, no sistema interno, de rotinas para vendedores com geração de relatórios de vendas em PDF por loja, usando Next.js com JavaScript integrado a Django e Python, impulsionando a participação em campanhas e o faturamento; e, na aplicação mobile em Flutter, desenvolvimento de uma webview com push notification capaz de capturar informações de login e permitir campanhas personalizadas para cada usuário do e-commerce.",
    tags: [
      { label: "Next", variant: "primary" },
      { label: "Django", variant: "primary" },
      { label: "Flutter", variant: "secondary" },
      { label: "TypeScript", variant: "secondary" },
      { label: "Docker", variant: "secondary" },
      { label: "PostgreSQL", variant: "secondary" },
    ],
  },
  {
    icon: "education",
    title: "Analista de Sistema",
    company: "Instituto Federal do Piauí",
    period: "2021 - 2025",
    companyUrl: "https://www.ifpi.edu.br/",
    description:
      "Matemática Computacional, Pensamento Computacional, Machine Learning, Engenharia de Software,IHC (Interação Humano-Computador)",
    tags: [],
  },
];

export function ExperienceSection({
  title = "Minha Jornada",
  subtitle = "4+ anos construindo soluções escaláveis de ponta a ponta.",
  experiences = defaultExperiences,
  showDownloadButton = true,
}: ExperienceSectionProps) {
  return (
    <section
      className="flex justify-center py-10 px-4 md:px-8"
      id="experiencia"
    >
      <div className="w-full max-w-215 flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between border-b border-border-light dark:border-border-dark pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
              {subtitle}
            </p>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
              Em busca de novas oportunidades!
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4.75 top-4 bottom-0 w-0.5 bg-linear-to-b from-primary via-[#cfd7e7] dark:via-[#4a5568] to-background-light dark:to-background-dark" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>

        {showDownloadButton && (
          <div className="flex justify-center pt-8 border-t border-border-light dark:border-border-dark mt-4">
            <a 
              href="https://drive.google.com/uc?export=download&id=1_yWx3Fs6KBjU5sZoKyD21Bp1ctt2vdkd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-50 cursor-pointer items-center justify-center gap-2 rounded-xl h-12 px-6 bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all shadow-sm font-bold tracking-tight"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Currículo (PDF)</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
