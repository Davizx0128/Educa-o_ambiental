import { Heart, Globe, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Educação Ambiental</h3>
            <p className="text-sm text-muted-foreground">
              Uma plataforma educativa interativa dedicada a ensinar sobre chuva ácida, aquecimento global e soluções sustentáveis para o nosso planeta.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>Tema: Educação Ambiental</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Seções</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#presentation" className="text-muted-foreground hover:text-primary transition-colors">Apresentação</a></li>
              <li><a href="#acid-rain" className="text-muted-foreground hover:text-primary transition-colors">Chuva Ácida</a></li>
              <li><a href="#global-warming" className="text-muted-foreground hover:text-primary transition-colors">Aquecimento Global</a></li>
              <li><a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">Soluções</a></li>
              <li><a href="#quiz" className="text-muted-foreground hover:text-primary transition-colors">Quiz</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Este Site</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Referências Científicas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-foreground">Faça a Diferença</p>
            <p className="text-sm text-foreground/80">
              Compartilhe este site com amigos e família. Juntos, podemos criar consciência sobre os desafios ambientais e inspirar ações positivas.
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span>Criado com paixão pela educação ambiental</span>
            </div>
            <p>
              © 2024 Educação Ambiental. Todos os direitos reservados. | Design moderno e educativo | Conteúdo baseado em pesquisa científica.
            </p>
            <div className="pt-2 border-t border-border space-y-3">
              <p>
                Informações baseadas em dados da ONU, IPCC (Painel Intergovernamental sobre Mudanças Climáticas) e agências ambientais internacionais.
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Desenvolvido por Cauã Toledo</span>
              </div>
              <a
                href="https://www.instagram.com/davizx082?igsh=Zmd3ZnJmMW1wcXQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@davizx082</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
