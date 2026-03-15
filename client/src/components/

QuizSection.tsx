import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "O que causa principalmente a chuva ácida?",
    options: [
      "Emissão de dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOₓ)",
      "Aumento de CO₂ na atmosfera",
      "Desmatamento em larga escala",
      "Poluição dos oceanos",
    ],
    correct: 0,
    explanation: "A chuva ácida é causada principalmente pela emissão de SO₂ e NOₓ de indústrias, usinas e veículos, que reagem com água na atmosfera formando ácidos.",
  },
  {
    id: 2,
    question: "Qual gás contribui mais para o aquecimento global?",
    options: [
      "Dióxido de enxofre (SO₂)",
      "Dióxido de carbono (CO₂)",
      "Óxido nitroso (N₂O)",
      "Metano (CH₄)",
    ],
    correct: 1,
    explanation: "Embora o metano seja mais potente por molécula, o CO₂ é o principal responsável pelo aquecimento global devido à sua alta concentração na atmosfera.",
  },
  {
    id: 3,
    question: "O que é o efeito estufa?",
    options: [
      "Um tipo de poluição causada por fábricas",
      "O processo onde gases aprisionam calor na atmosfera",
      "A chuva ácida que danifica plantas",
      "O derretimento das calotas polares",
    ],
    correct: 1,
    explanation: "O efeito estufa é o processo natural (amplificado por atividades humanas) onde gases como CO₂ aprisionam o calor do sol na atmosfera, aquecendo o planeta.",
  },
  {
    id: 4,
    question: "Qual é a principal fonte de emissão de CO₂?",
    options: [
      "Desmatamento apenas",
      "Agricultura apenas",
      "Queima de combustíveis fósseis (carvão, petróleo, gás)",
      "Vulcões e processos naturais",
    ],
    correct: 2,
    explanation: "A queima de combustíveis fósseis é responsável por aproximadamente 75% das emissões de CO₂ relacionadas a atividades humanas.",
  },
  {
    id: 5,
    question: "Como reduzir o aquecimento global?",
    options: [
      "Apenas plantando árvores",
      "Transição para energias renováveis, eficiência energética e reflorestamento",
      "Mudando apenas o consumo pessoal",
      "Não há solução possível",
    ],
    correct: 1,
    explanation: "Reduzir o aquecimento global requer ações em múltiplos níveis: transição energética, eficiência, reflorestamento, mudanças de consumo e políticas públicas.",
  },
  {
    id: 6,
    question: "Qual é o pH da chuva ácida?",
    options: ["Acima de 7", "Exatamente 7", "Abaixo de 5.6", "Entre 5.6 e 7"],
    correct: 2,
    explanation: "A chuva normal tem pH de 5.6 (ligeiramente ácida). A chuva ácida tem pH abaixo de 5.6, podendo chegar a 4.0 ou menos.",
  },
  {
    id: 7,
    question: "Qual é o aumento de temperatura desde a Revolução Industrial?",
    options: ["Aproximadamente 0.3°C", "Aproximadamente 1.1°C", "Aproximadamente 3°C", "Aproximadamente 5°C"],
    correct: 1,
    explanation: "A temperatura média da Terra aumentou aproximadamente 1.1°C desde 1880, com a maioria do aquecimento ocorrendo nas últimas décadas.",
  },
  {
    id: 8,
    question: "O que pode ser feito individualmente para combater esses problemas?",
    options: [
      "Nada, apenas governos podem agir",
      "Reduzir consumo de energia, usar transporte sustentável, reduzir desperdício",
      "Apenas votar em políticos ambientalistas",
      "Mudar-se para um país diferente",
    ],
    correct: 1,
    explanation: "Ações individuais como reduzir consumo de energia, usar transporte sustentável e reduzir desperdício têm impacto real e inspiram outros a agir.",
  },
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  const handleAnswerClick = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
      setShowResult(true);

      if (index === question.correct) {
        setScore(score + 1);
      }

      const newAnswers = [...answers];
      newAnswers[currentQuestion] = index;
      setAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
    setAnswers(new Array(quizQuestions.length).fill(null));
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <section className="space-y-8">
      <div className="card-elevated p-8 space-y-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <h2 className="heading-section">Quiz Interativo</h2>
        <p className="text-body">
          Teste seus conhecimentos sobre chuva ácida e aquecimento global. Responda todas as perguntas e veja como você se saiu!
        </p>
      </div>

      {!quizComplete ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-foreground">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </span>
              <span className="text-sm font-semibold text-primary">
                Pontuação: {score}/{quizQuestions.length}
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="p-8 space-y-6">
            <h3 className="heading-subsection text-xl">{question.question}</h3>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrectOption = idx === question.correct;
                let bgColor = "bg-secondary/50 hover:bg-secondary";

                if (showResult) {
                  if (isCorrectOption) {
                    bgColor = "bg-green-100 border-2 border-green-500";
                  } else if (isSelected && !isCorrect) {
                    bgColor = "bg-red-100 border-2 border-red-500";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(idx)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-200 flex items-center justify-between ${bgColor} ${
                      showResult ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <span>{option}</span>
                    {showResult && isCorrectOption && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div
                className={`p-4 rounded-lg border-l-4 ${
                  isCorrect
                    ? "bg-green-50 border-green-500 text-green-900"
                    : "bg-red-50 border-red-500 text-red-900"
                }`}
              >
                <p className="font-semibold mb-2">{isCorrect ? "✓ Correto!" : "✗ Incorreto"}</p>
                <p className="text-sm">{question.explanation}</p>
              </div>
            )}

            {showResult && (
              <Button
                onClick={handleNext}
                className="w-full button-primary text-lg py-6"
              >
                {currentQuestion === quizQuestions.length - 1 ? "Ver Resultado Final" : "Próxima Pergunta"}
              </Button>
            )}
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <Card className="p-8 space-y-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center space-y-4">
              <h3 className="heading-section">Parabéns! Quiz Concluído</h3>

              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-white">{percentage}%</p>
                    <p className="text-white text-sm mt-2">{score}/{quizQuestions.length} corretas</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {percentage === 100 && (
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">Perfeito! 🎉</p>
                    <p className="text-body">Você é um especialista em educação ambiental!</p>
                  </div>
                )}
                {percentage >= 80 && percentage < 100 && (
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">Excelente! 👏</p>
                    <p className="text-body">Você tem um ótimo conhecimento sobre esses temas!</p>
                  </div>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">Bom Trabalho! 👍</p>
                    <p className="text-body">Você entende bem os conceitos principais.</p>
                  </div>
                )}
                {percentage < 60 && (
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">Continue Aprendendo! 📚</p>
                    <p className="text-body">Revise as seções anteriores e tente novamente.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground">Resumo de Respostas:</h4>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {answers.map((answer, idx) => {
                  const isCorrect = answer === quizQuestions[idx].correct;
                  return (
                    <div
                      key={idx}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                        isCorrect ? "bg-green-500" : "bg-red-500"
                      }`}
                      title={`Pergunta ${idx + 1}: ${isCorrect ? "Correta" : "Incorreta"}`}
                    >
                      {idx + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button onClick={handleRestart} className="flex-1 button-secondary text-lg py-6">
                <RotateCcw className="w-5 h-5 mr-2" />
                Tentar Novamente
              </Button>
              <Button className="flex-1 button-primary text-lg py-6">
                Compartilhar Resultado
              </Button>
            </div>
          </Card>

          {percentage < 100 && (
            <Card className="p-6 space-y-4">
              <h4 className="font-semibold text-foreground">Dicas para Melhorar:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Revise as seções que teve dúvida</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Leia as explicações das respostas com atenção</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Assista aos vídeos educativos novamente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pesquise mais sobre os tópicos que teve dificuldade</span>
                </li>
              </ul>
            </Card>
          )}
        </div>
      )}
    </section>
  );
}
