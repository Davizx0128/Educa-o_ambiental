import { Card } from "@/components/ui/card";

export default function ComparisonSection() {
  return (
    <section className="space-y-8">
      <div className="card-elevated p-8 space-y-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <h2 className="heading-section">Comparação: Chuva Ácida vs Aquecimento Global</h2>
        <p className="text-body">
          Embora relacionados, esses dois problemas ambientais têm características, causas e consequências distintas.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="border border-border p-4 text-left font-bold">Aspecto</th>
              <th className="border border-border p-4 text-left font-bold">Chuva Ácida</th>
              <th className="border border-border p-4 text-left font-bold">Aquecimento Global</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: "Definição", acidRain: "Precipitação com pH abaixo de 5.6", globalWarming: "Aumento da temperatura média da Terra" },
              { aspect: "Gases Principais", acidRain: "SO₂ e NOₓ", globalWarming: "CO₂, CH₄, N₂O" },
              { aspect: "Fontes", acidRain: "Indústrias, veículos, usinas", globalWarming: "Combustíveis fósseis, desmatamento, agricultura" },
              { aspect: "Escala", acidRain: "Regional (próximo à fonte)", globalWarming: "Global (afeta todo o planeta)" },
              { aspect: "Impactos Principais", acidRain: "Danos a florestas, lagos e edifícios", globalWarming: "Mudanças climáticas, derretimento de gelo" },
              { aspect: "Período de Ação", acidRain: "Horas a dias", globalWarming: "Décadas a séculos" },
              { aspect: "Reversibilidade", acidRain: "Relativamente rápida (anos)", globalWarming: "Muito lenta (séculos)" },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                <td className="border border-border p-4 font-semibold text-foreground">{row.aspect}</td>
                <td className="border border-border p-4 text-foreground">{row.acidRain}</td>
                <td className="border border-border p-4 text-foreground">{row.globalWarming}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-elevated p-6 space-y-4">
        <h3 className="heading-subsection">Similaridades</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Ambos causados por atividades humanas",
            "Ambos relacionados à queima de combustíveis fósseis",
            "Ambos têm impactos negativos no meio ambiente",
            "Ambos requerem ação governamental e individual",
            "Ambos podem ser reduzidos com energias limpas",
            "Ambos afetam a saúde humana",
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated p-6 space-y-4">
        <h3 className="heading-subsection">Diferenças Principais</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-blue-600">Chuva Ácida</h4>
            {[
              "Problema regional/local",
              "Efeitos visíveis rapidamente",
              "Afeta principalmente florestas e lagos",
              "Pode ser reduzida em anos",
              "Menos complexa de resolver",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2 text-sm">
                <span className="text-blue-600">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-orange-600">Aquecimento Global</h4>
            {[
              "Problema global",
              "Efeitos aparecem lentamente",
              "Afeta todo o sistema climático",
              "Levará séculos para reverter",
              "Mais complexa de resolver",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2 text-sm">
                <span className="text-orange-600">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-elevated p-6 space-y-4 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
        <h3 className="heading-subsection">Como Estão Conectados?</h3>
        <p className="text-body">
          Embora sejam problemas distintos, a chuva ácida e o aquecimento global compartilham raízes comuns. Ambos são resultado da queima de combustíveis fósseis e da poluição atmosférica. Reduzir um ajuda a reduzir o outro. A transição para energias renováveis, por exemplo, beneficia ambos os problemas simultaneamente.
        </p>
        <div className="bg-white rounded-lg p-4 space-y-2 mt-4">
          <p className="font-semibold text-foreground">Ações que ajudam ambos:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Usar energias renováveis (solar, eólica)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Melhorar eficiência energética</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Reduzir emissões de veículos</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Reflorestamento e proteção de florestas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
