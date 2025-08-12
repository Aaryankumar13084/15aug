import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const quizQuestions = [
  {
    question: "When did India gain independence from British rule?",
    options: [
      "August 15, 1947",
      "January 26, 1950",
      "October 2, 1869",
      "September 5, 1946"
    ],
    correct: 0
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Subhas Chandra Bose",
      "Dr. APJ Abdul Kalam"
    ],
    correct: 1
  },
  {
    question: "What are the colors of the Indian flag?",
    options: [
      "Red, White, Blue",
      "Green, White, Orange",
      "Saffron, White, Green",
      "Yellow, White, Red"
    ],
    correct: 2
  }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <section id="quiz" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-saffron via-white to-flag-green p-8 rounded-xl shadow-lg">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">Quiz Complete!</h3>
                <p className="text-xl mb-4">Your Score: {score} out of {quizQuestions.length}</p>
                <p className="text-gray-600 mb-6">
                  {score === quizQuestions.length ? "Perfect! You're a true patriot!" :
                   score >= quizQuestions.length / 2 ? "Great job! Keep learning about India." :
                   "Good effort! There's always more to learn about our great nation."}
                </p>
                <Button onClick={resetQuiz} className="bg-saffron hover:bg-orange-600 text-white">
                  Take Quiz Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 font-hindi">प्रश्नोत्तरी - Quiz</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test your knowledge about Indian history, culture, and national symbols
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-saffron via-white to-flag-green p-8 rounded-xl shadow-lg">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-saffron">Score: {score}</span>
              </div>
              
              <h4 className="text-xl font-semibold text-navy-blue mb-6">
                {quizQuestions[currentQuestion].question}
              </h4>
              
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? "border-saffron bg-orange-50"
                        : "border-gray-200 hover:border-saffron hover:bg-orange-50"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}) {option}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="bg-saffron hover:bg-orange-600 text-white"
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-saffron h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
