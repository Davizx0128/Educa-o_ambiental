import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import PresentationSection from "@/components/PresentationSection";
import AcidRainSection from "@/components/AcidRainSection";
import GlobalWarmingSection from "@/components/GlobalWarmingSection";
import ComparisonSection from "@/components/ComparisonSection";
import SolutionsSection from "@/components/SolutionsSection";
import QuizSection from "@/components/QuizSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [showHero, setShowHero] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStartPresentation = () => {
    setShowHero(false);
    setActiveSection("presentation");
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "presentation":
        return <PresentationSection />;
      case "acid-rain":
        return <AcidRainSection />;
      case "global-warming":
        return <GlobalWarmingSection />;
      case "comparison":
        return <ComparisonSection />;
      case "solutions":
        return <SolutionsSection />;
      case "quiz":
        return <QuizSection />;
      case "gallery":
        return <GallerySection />;
      default:
        return <PresentationSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {showHero && <Hero onStartClick={handleStartPresentation} />}

      {!showHero && (
        <div className="flex">
          <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
          <main className="flex-1 lg:ml-64 min-h-screen">
            <div ref={contentRef} className="container mx-auto px-4 py-12 max-w-4xl">
              <div className="animate-slide-in-up">{renderSection()}</div>
            </div>
          </main>
        </div>
      )}

      {!showHero && <Footer />}

      {!showHero && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border overflow-x-auto">
          <div className="flex gap-2 p-4 overflow-x-auto">
            {[
              { id: "presentation", label: "Apresentação" },
              { id: "acid-rain", label: "Chuva Ácida" },
              { id: "global-warming", label: "Aquecimento" },
              { id: "comparison", label: "Comparação" },
              { id: "solutions", label: "Soluções" },
              { id: "quiz", label: "Quiz" },
              { id: "gallery", label: "Galeria" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
