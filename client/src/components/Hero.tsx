import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onStartClick: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/hero-earth-climate-K42btgTm5eNedk7tNy8CM3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium">Apresentação Educativa Interativa</span>
          </div>

          <h1 className="heading-display text-white drop-shadow-lg">
            Chuva Ácida e Aquecimento Global
          </h1>

          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            Entenda os Impactos no Planeta e Aprenda Como Agir
          </p>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto drop-shadow-md">
            Uma jornada educativa interativa explorando dois dos maiores desafios ambientais do nosso tempo. Descubra como esses fenômenos afetam nosso planeta e o que podemos fazer para reverter essa situação.
          </p>

          <div className="pt-6">
            <Button
              onClick={onStartClick}
              className="button-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Apresentação
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
