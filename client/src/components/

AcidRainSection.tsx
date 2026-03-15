import { Card } from "@/components/ui/card";
import { AlertCircle, Droplets, Wind, Trees } from "lucide-react";

export default function AcidRainSection() {
  return (
    <section className="space-y-8">
      <div className="relative w-full rounded-lg overflow-hidden h-96">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/acid-rain-forest-JL8PFDGdneJ4anAsh8iKzZ.webp"
          alt="Chuva Ácida em Floresta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <h2 className="heading-section text-white">Chuva Ácida</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-elevated p-6 space-y-4 border-l-4 border-accent">
            <h3 className="heading-subsection flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-accent" />
              O que é Chuva Ácida?
            </h3>
            <p className="text-body">
              A chuva ácida é um fenômeno ambiental onde a precipitação (chuva, neve ou neblina) contém ácidos que danificam o meio ambiente. Ela ocorre quando gases poluentes na atmosfera, principalmente dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOₓ), reagem com a água, formando ácidos fortes como ácido sulfúrico e ácido nítrico.
            </p>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection flex items-center gap-2">
              <Wind className="w-6 h-6 text-primary" />
              Como se Forma
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Emissão de Gases", desc: "Indústrias, veículos e usinas de energia liberam SO₂ e NOₓ na atmosfera" },
                { step: 2, title: "Reação Química", desc: "Esses gases reagem com vapor de água, oxigênio e outras substâncias na atmosfera" },
                { step: 3, title: "Formação de Ácidos", desc: "Ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃) são formados" },
                { step: 4, title: "Precipitação", desc: "A chuva ácida cai e danifica solos, plantas, edifícios e corpos de água" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection">Principais Gases Envolvidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { gas: "Dióxido de Enxofre (SO₂)", source: "Queima de combustíveis fósseis em indústrias e usinas", color: "bg-blue-100 text-blue-900" },
                { gas: "Óxidos de Nitrogênio (NOₓ)", source: "Emissões de veículos e processos industriais", color: "bg-orange-100 text-orange-900" },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${item.color}`}>
                  <p className="font-semibold">{item.gas}</p>
                  <p className="text-sm mt-2">{item.source}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection">Impactos no Meio Ambiente</h3>
            <div className="space-y-3">
              {[
                "Acidificação de solos e lagos",
                "Morte de florestas e vegetação",
                "Morte de peixes e vida aquática",
                "Corrosão de edifícios e monumentos históricos",
                "Contaminação de água potável",
                "Impactos na saúde humana (respiratória)",
              ].map((impact, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="text-foreground">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="heading-subsection text-lg">Informações Importantes</h3>
          <Card className="p-4 border-l-4 border-blue-500">
            <p className="font-semibold text-sm">pH da Chuva</p>
            <p className="text-xs text-muted-foreground mt-2">
              Chuva normal: pH 5.6 | Chuva ácida: pH &lt; 5.6
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-green-500">
            <p className="font-semibold text-sm">Escala de Acidez</p>
            <p className="text-xs text-muted-foreground mt-2">
              Quanto menor o pH, mais ácida é a chuva. Alguns casos chegam a pH 4.0 ou menos.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-orange-500">
            <p className="font-semibold text-sm">Distribuição Global</p>
            <p className="text-xs text-muted-foreground mt-2">
              Afeta principalmente regiões industrializadas e áreas próximas a fontes de poluição.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
