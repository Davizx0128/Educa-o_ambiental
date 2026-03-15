import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Planeta Terra em Perigo",
    description: "Visualização do planeta mostrando os impactos do aquecimento global e poluição atmosférica",
    category: "Aquecimento Global",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/hero-earth-climate-K42btgTm5eNedk7tNy8CM3.webp",
  },
  {
    id: 2,
    title: "Floresta Afetada por Chuva Ácida",
    description: "Árvores mortas e danificadas pela chuva ácida em uma floresta poluída",
    category: "Chuva Ácida",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/acid-rain-forest-JL8PFDGdneJ4anAsh8iKzZ.webp",
  },
  {
    id: 3,
    title: "Derretimento de Geleiras",
    description: "Geleiras derretendo rapidamente devido ao aquecimento global, causando aumento do nível do mar",
    category: "Aquecimento Global",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/melting-glaciers-d4huQsx7PjLDrxGNHnKmuM.webp",
  },
  {
    id: 4,
    title: "Energias Renováveis",
    description: "Painéis solares e turbinas eólicas como solução para energia limpa e sustentável",
    category: "Soluções",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431905685/AoaMZutRf9GYL6Hdfkis7i/renewable-energy-KSXqZNnMiqaqWbLpxkC8WX.webp",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Chuva Ácida", "Aquecimento Global", "Soluções"];
  const filteredImages =
    filter === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="space-y-8">
      <div className="card-elevated p-8 space-y-4 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h2 className="heading-section">Galeria de Imagens</h2>
        <p className="text-body">
          Explore uma coleção de imagens que ilustram os impactos da chuva ácida, aquecimento global e as soluções disponíveis.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === category
                ? "bg-primary text-white shadow-md"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="card-elevated overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden h-64 bg-secondary">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  {image.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-card rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative w-full h-96 bg-black overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="heading-subsection">{selectedImage.title}</h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-body">{selectedImage.description}</p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => {
                    const currentIndex = filteredImages.indexOf(selectedImage);
                    if (currentIndex > 0) {
                      setSelectedImage(filteredImages[currentIndex - 1]);
                    }
                  }}
                  disabled={filteredImages.indexOf(selectedImage) === 0}
                  className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="flex-1 px-4 py-2 rounded-lg button-secondary"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const currentIndex = filteredImages.indexOf(selectedImage);
                    if (currentIndex < filteredImages.length - 1) {
                      setSelectedImage(filteredImages[currentIndex + 1]);
                    }
                  }}
                  disabled={
                    filteredImages.indexOf(selectedImage) === filteredImages.length - 1
                  }
                  className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Próxima →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Card className="p-6 bg-secondary/30 space-y-3">
        <h3 className="font-semibold text-foreground">Sobre as Imagens</h3>
        <p className="text-sm text-foreground/80">
          As imagens desta galeria foram selecionadas para ilustrar os conceitos-chave sobre chuva ácida e aquecimento global. Clique em qualquer imagem para visualizá-la em tamanho maior e obter mais informações.
        </p>
      </Card>
    </section>
  );
}
