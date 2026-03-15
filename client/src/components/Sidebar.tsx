import { Button } from "@/components/ui/button";
import { Cloud, Droplets, TrendingUp, BarChart3, Lightbulb, HelpCircle, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "presentation", label: "Apresentação", icon: Cloud },
  { id: "acid-rain", label: "Chuva Ácida", icon: Droplets },
  { id: "global-warming", label: "Aquecimento Global", icon: TrendingUp },
  { id: "comparison", label: "Comparação", icon: BarChart3 },
  { id: "solutions", label: "Soluções", icon: Lightbulb },
  { id: "quiz", label: "Quiz Interativo", icon: HelpCircle },
  { id: "gallery", label: "Galeria", icon: Images },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-card border-r border-border fixed left-0 top-0 h-screen overflow-y-auto pt-6 pb-6">
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold text-primary">Educação Ambiental</h2>
        <p className="text-xs text-muted-foreground mt-1">Navegação</p>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <Button
              key={section.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-left transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary"
              )}
              onClick={() => onSectionChange(section.id)}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{section.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
              )}
            </Button>
          );
        })}
      </nav>

      <div className="px-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Aprenda sobre os desafios ambientais do nosso planeta
        </p>
      </div>
    </aside>
  );
}
