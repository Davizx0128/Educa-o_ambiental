import { Card } from "@/components/ui/card";
import { Flame, Cloud, Thermometer, Waves } from "lucide-react";

export default function GlobalWarmingSection() {
  return (
    <section className="space-y-8">
      <div className="relative w-full rounded-lg overflow-hidden h-96">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/melting-glaciers-d4huQsx7PjLDrxGNHnKmuM.webp"
          alt="Derretimento de Geleiras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <h2 className="heading-section text-white">Aquecimento Global</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-elevated p-6 space-y-4 border-l-4 border-accent">
            <h3 className="heading-subsection flex items-center gap-2">
              <Flame className="w-6 h-6 text-accent" />
              O que é Aquecimento Global?
            </h3>
            <p className="text-body">
              O aquecimento global é o aumento gradual da temperatura média da Terra causado principalmente pela emissão de gases de efeito estufa. Desde a Revolução Industrial, a temperatura média do planeta aumentou aproximadamente 1.1°C, com a maioria do aquecimento ocorrendo nas últimas décadas.
            </p>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection flex items-center gap-2">
              <Cloud className="w-6 h-6 text-primary" />
              Efeito Estufa
            </h3>
            <p className="text-body">
              O efeito estufa é um processo natural onde certos gases na atmosfera (como CO₂, metano e óxido nitroso) aprisionam o calor do sol, mantendo o planeta aquecido. Sem ele, a Terra seria muito fria para a vida. Porém, o aumento desses gases amplifica o efeito, causando aquecimento excessivo.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
              <p className="font-semibold text-foreground">Como funciona:</p>
              <ol className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  <span>Luz solar entra na atmosfera</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  <span>Parte é refletida, parte aquece a Terra</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  <span>Calor sobe em forma de radiação infravermelha</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">4.</span>
                  <span>Gases de efeito estufa aprisionam esse calor</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">5.</span>
                  <span>Resultado: aquecimento da atmosfera</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection">Principais Causas</h3>
            <div className="space-y-3">
              {[
                { cause: "Queima de Combustíveis Fósseis", desc: "Carvão, petróleo e gás natural liberam CO₂", percent: 75 },
                { cause: "Desmatamento", desc: "Reduz a capacidade de absorção de CO₂", percent: 15 },
                { cause: "Agricultura Industrial", desc: "Emissão de metano por gado e arroz", percent: 7 },
                { cause: "Processos Industriais", desc: "Emissão de gases diversos", percent: 3 },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{item.cause}</p>
                    <span className="text-xs font-bold text-primary">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-accent to-orange-500 h-2 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated p-6 space-y-4">
            <h3 className="heading-subsection">Consequências para o Planeta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Waves, title: "Aumento do Nível do Mar", desc: "Derretimento de geleiras e expansão térmica" },
                { icon: Thermometer, title: "Eventos Climáticos Extremos", desc: "Furacões, secas e enchentes mais intensas" },
                { icon: Cloud, title: "Mudanças nos Padrões de Chuva", desc: "Alteração de ecossistemas e agricultura" },
                { icon: Flame, title: "Extinção de Espécies", desc: "Perda de biodiversidade acelerada" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 bg-secondary/50 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-accent" />
                      <p className="font-semibold text-sm">{item.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="heading-subsection text-lg">Fatos Importantes</h3>
          <Card className="p-4 border-l-4 border-red-500 bg-red-50">
            <p className="font-semibold text-sm text-red-900">Aumento de Temperatura</p>
            <p className="text-xs text-red-800 mt-2">
              +1.1°C desde 1880 | Maioria desde 1975
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-blue-500">
            <p className="font-semibold text-sm">Gases de Efeito Estufa</p>
            <p className="text-xs text-muted-foreground mt-2">
              CO₂, CH₄ (metano), N₂O (óxido nitroso)
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-orange-500">
            <p className="font-semibold text-sm">Meta Global</p>
            <p className="text-xs text-muted-foreground mt-2">
              Limitar aquecimento a 1.5°C acima dos níveis pré-industriais
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
