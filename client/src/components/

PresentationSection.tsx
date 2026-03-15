import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface PresentationSectionProps {
  onVideoClick?: () => void;
}

export default function PresentationSection({ onVideoClick }: PresentationSectionProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/hero-earth-climate-K42btgTm5eNedk7tNy8CM3.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors cursor-pointer group" onClick={onVideoClick}>
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="heading-section">Chuva Ácida e Aquecimento Global - Introdução</h2>
          <p className="text-muted-foreground">
            Uma visão geral dos dois maiores desafios ambientais da atualidade
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection">O que você vai aprender</h3>
            <ul className="space-y-3">
              {[
                "Como a chuva ácida se forma e seus impactos no meio ambiente",
                "Os mecanismos do aquecimento global e efeito estufa",
                "As diferenças e similaridades entre esses dois fenômenos",
                "Soluções práticas para combater esses problemas",
                "Como você pode contribuir para a mudança",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{idx + 1}</span>
                  </div>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="heading-subsection text-lg">Próximos Tópicos</h3>
          <div className="space-y-3">
            {[
              { title: "Chuva Ácida", desc: "Formação e impactos" },
              { title: "Aquecimento Global", desc: "Efeito estufa e consequências" },
              { title: "Comparação", desc: "Diferenças e similaridades" },
              { title: "Soluções", desc: "Como agir agora" },
            ].map((topic, idx) => (
              <Card key={idx} className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{topic.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
