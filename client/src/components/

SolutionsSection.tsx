import { Card } from "@/components/ui/card";
import { Lightbulb, Leaf, Wind, Zap, Users, Target } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      category: "Energias Renováveis",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      items: [
        "Energia solar fotovoltaica e térmica",
        "Energia eólica em terra e mar",
        "Energia hidrelétrica sustentável",
        "Energia geotérmica",
        "Biomassa responsável",
      ],
    },
    {
      category: "Reflorestamento",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      items: [
        "Plantar bilhões de árvores",
        "Restaurar florestas nativas",
        "Proteger florestas existentes",
        "Criar corredores ecológicos",
        "Agricultura agroflorestal",
      ],
    },
    {
      category: "Eficiência Energética",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Edifícios com isolamento térmico",
        "Iluminação LED eficiente",
        "Eletrodomésticos de baixo consumo",
        "Sistemas de aquecimento inteligentes",
        "Transportes públicos eficientes",
      ],
    },
    {
      category: "Transporte Sustentável",
      icon: Wind,
      color: "from-purple-500 to-pink-500",
      items: [
        "Veículos elétricos",
        "Transporte público de qualidade",
        "Ciclovias e caminhos para pedestres",
        "Combustíveis alternativos (hidrogênio)",
        "Redução de viagens aéreas",
      ],
    },
    {
      category: "Mudanças na Alimentação",
      icon: Users,
      color: "from-red-500 to-rose-500",
      items: [
        "Reduzir consumo de carne vermelha",
        "Apoiar agricultura local",
        "Reduzir desperdício de alimentos",
        "Compostagem de resíduos",
        "Agricultura orgânica",
      ],
    },
    {
      category: "Políticas e Regulação",
      icon: Target,
      color: "from-indigo-500 to-blue-500",
      items: [
        "Limites de emissão de CO₂",
        "Impostos sobre carbono",
        "Subsídios para energias limpas",
        "Proteção de áreas naturais",
        "Educação ambiental",
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="card-elevated p-8 space-y-4 bg-gradient-to-r from-accent/5 to-primary/5">
        <h2 className="heading-section">Soluções para Combater Esses Problemas</h2>
        <p className="text-body">
          Existem muitas soluções disponíveis para reduzir a poluição, as emissões de CO₂ e proteger nosso planeta. Algumas requerem ação governamental, outras dependem de escolhas individuais. Juntas, elas podem fazer a diferença.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, idx) => {
          const Icon = solution.icon;
          return (
            <div key={idx} className="card-elevated p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="heading-subsection text-lg">{solution.category}</h3>

              <ul className="space-y-2">
                {solution.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-2 items-start text-sm text-foreground/80">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="card-elevated p-8 space-y-6">
        <h3 className="heading-subsection">O Que Você Pode Fazer Agora</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { action: "Reduzir consumo de energia", desc: "Desligue aparelhos, use luz natural, tome banhos mais curtos" },
            { action: "Usar transporte sustentável", desc: "Caminhe, use bicicleta ou transporte público quando possível" },
            { action: "Consumir menos plástico", desc: "Use sacolas reutilizáveis, garrafas de água, evite descartáveis" },
            { action: "Plantar árvores", desc: "Participe de projetos de reflorestamento na sua comunidade" },
            { action: "Reduzir desperdício de alimentos", desc: "Planeje refeições, compre apenas o necessário, compostagem" },
            { action: "Educar e inspirar", desc: "Compartilhe conhecimento, inspire amigos e família a agir" },
            { action: "Apoiar empresas sustentáveis", desc: "Escolha produtos de empresas comprometidas com o meio ambiente" },
            { action: "Participar politicamente", desc: "Vote em políticos que priorizam ações climáticas" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-secondary/50 rounded-lg space-y-2 hover:bg-secondary transition-colors">
              <p className="font-semibold text-foreground">{item.action}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated p-8 space-y-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
        <h3 className="heading-subsection">Impacto de Nossas Ações</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Nível Individual", impact: "Reduzir pegada de carbono pessoal", example: "Uma pessoa que muda para energia solar economiza 4 toneladas de CO₂/ano" },
            { title: "Nível Comunitário", impact: "Influenciar vizinhos e amigos", example: "Uma comunidade com 100 casas solares economiza 400 toneladas/ano" },
            { title: "Nível Global", impact: "Pressionar por políticas ambientais", example: "Se 1 bilhão de pessoas agissem, seria 4 bilhões de toneladas/ano" },
          ].map((level, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-bold text-foreground text-lg">{level.title}</h4>
              <p className="text-sm font-semibold text-green-700">{level.impact}</p>
              <p className="text-sm text-foreground/70">{level.example}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white space-y-4">
        <h3 className="heading-subsection text-white">Cada Ação Conta</h3>
        <p className="text-lg">
          O futuro do nosso planeta depende das decisões que tomamos hoje. Não é necessário ser perfeito, mas sim fazer o melhor que você pode. Comece pequeno, inspire outros e juntos podemos criar um mundo mais sustentável.
        </p>
        <p className="text-base opacity-90">
          "O futuro pertence àqueles que acreditam na beleza de seus sonhos." - Eleanor Roosevelt
        </p>
      </div>
    </section>
  );
}
