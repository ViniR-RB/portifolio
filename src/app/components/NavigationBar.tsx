"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  FolderIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    label: "Inicio",
    href: "#home",
    icon: HomeIcon,
    primary: true,
  },
  {
    label: "Sobre",
    href: "#about",
    icon: UserIcon,
    primary: false,
  },
  {
    label: "Projetos",
    href: "#projects",
    icon: FolderIcon,
    primary: false,
  },
  {
    label: "Contato",
    href: "#contact",
    icon: MailIcon,
    primary: false,
  },
] as const;

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border" : "bg-transparent"
      )}
     
    >
      <div className="flex items-center justify-between w-full h-16 mx-auto container px-4 ">
        <div className="font-bold text-xl">
        <span className={cn(
          "text-primary",
          !isScrolled && "text-white"
        )}>DEV </span>VINI
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu de Navegação</SheetTitle>
              <SheetDescription>
                Menu para navegacao das secoes do site
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4 pl-4 font-bold">
              {sections.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>



        <nav className="hidden lg:flex space-x-8">
            {sections.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          
      </div>
    </header>
  );
}



function NavItem({item}: {item: typeof sections[number]}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "transition-colors hover:text-primary",
        item.primary ? "text-primary hover:text-primary/80" : "text-foreground/80 hover:text-foreground/60"
      )}
    >
      <item.icon className="size-4 text-muted-foreground lg:hidden " />
      {item.label}
    </Link>
  )
}