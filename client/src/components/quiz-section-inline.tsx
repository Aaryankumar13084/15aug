import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const quizQuestions = [
  {
    q: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
    opts: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 अगस्त"],
    ans: 0,
  },
  {
    q: "भारत को आज़ादी किस वर्ष मिली थी?",
    opts: ["1945", "1946", "1947", "1950"],
    ans: 2,
  },
  {
    q: "भारत के पहले प्रधानमंत्री कौन थे?",
    opts: ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू"],
    ans: 3,
  },
  {
    q: "भारत की स्वतंत्रता की घोषणा किसने की थी?",
    opts: ["ब्रिटिश संसद", "कांग्रेस", "नेहरू", "माउंटबेटन"],
    ans: 0,
  },
  {
    q: "स्वतंत्रता की पहली घड़ी में किसने 'Tryst with Destiny' भाषण दिया?",
    opts: ["गांधी जी", "नेहरू", "पटेल", "राजेंद्र प्रसाद"],
    ans: 1,
  },
  {
    q: "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
    opts: ["1940", "1941", "1942", "1943"],
    ans: 2,
  },
  {
    q: "राष्ट्रीय गान 'जन गण मन' के रचयिता कौन हैं?",
    opts: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
    ans: 1,
  },
  {
    q: "भारतीय राष्ट्रीय ध्वज में कितने रंग हैं?",
    opts: ["2", "3", "4", "5"],
    ans: 1,
  },
  {
    q: "चंद्रशेखर आज़ाद का वास्तविक नाम क्या था?",
    opts: ["चंद्रशेखर तिवारी", "चंद्रशेखर सिंह", "चंद्रशेखर यादव", "चंद्रशेखर गुप्ता"],
    ans: 0,
  },
  {
    q: "भारत की स्वतंत्रता के समय वायसराय कौन था?",
    opts: ["लॉर्ड माउंटबेटन", "लॉर्ड वेवेल", "लॉर्ड लिनलिथगो", "लॉर्ड इरविन"],
    ans: 0,
  },
  {
    q: "दांडी मार्च किस साल हुआ था?",
    opts: ["1928", "1929", "1930", "1931"],
    ans: 2,
  },
  {
    q: "स्वतंत्रता संग्राम में 'गदर पार्टी' की स्थापना कहां हुई थी?",
    opts: ["भारत", "अमेरिका", "इंग्लैंड", "कनाडा"],
    ans: 1,
  },
  {
    q: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?",
    opts: ["1885", "1886", "1887", "1888"],
    ans: 0,
  },
  {
    q: "नेताजी सुभाष चंद्र बोस द्वारा गठित सेना का नाम क्या था?",
    opts: ["हिंद फौज", "आज़ाद हिंद फौज", "भारतीय राष्ट्रीय सेना", "स्वतंत्रता सेना"],
    ans: 1,
  },
  {
    q: "भारत के राष्ट्रीय पिता किसे कहा जाता है?",
    opts: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "भगत सिंह"],
    ans: 1,
  },
  {
    q: "'सरफरोशी की तमन्ना' के रचयिता कौन हैं?",
    opts: ["अशफाकउल्लाह खान", "रामप्रसाद बिस्मिल", "भगत सिंह", "चंद्रशेखर आज़ाद"],
    ans: 1,
  },
  {
    q: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ?",
    opts: ["1918", "1919", "1920", "1921"],
    ans: 1,
  },
  {
    q: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    opts: ["सरोजिनी नायडू", "इंदिरा गांधी", "विजया लक्ष्मी पंडित", "अरुणा आसफ अली"],
    ans: 1,
  },
  {
    q: "स्वतंत्रता दिवस पर प्रधानमंत्री कहां से देश को संबोधित करते हैं?",
    opts: ["इंडिया गेट", "लाल किला", "राष्ट्रपति भवन", "संसद भवन"],
    ans: 1,
  },
  {
    q: "भारत के राष्ट्रीय चिह्न में कितने सिंह हैं?",
    opts: ["2", "3", "4", "5"],
    ans: 2,
  }
];

export default function QuizSectionInline() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isQuizStarted && !showResults && !isAnswerSelected && timer > 0) {
      const timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timer === 0 && !isAnswerSelected) {
      // Time's up - show correct answer
      setShowCorrectAnswer(true);
      setIsAnswerSelected(true);
    }
  }, [timer, isQuizStarted, showResults, isAnswerSelected]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setTimer(15);
    setIsAnswerSelected(false);
    setShowCorrectAnswer(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswerSelected) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswerSelected(true);
    setShowCorrectAnswer(true);
    
    if (answerIndex === quizQuestions[currentQuestion].ans) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSelected(false);
      setShowCorrectAnswer(false);
      setTimer(15);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setIsQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setTimer(15);
    setIsAnswerSelected(false);
    setShowCorrectAnswer(false);
  };

  // Welcome/Intro Screen
  if (!isQuizStarted) {
    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-saffron/10 via-white to-flag-green/10 relative">
        {/* Background Ashoka Chakra */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1200px-Ashoka_Chakra.svg.png')",
            backgroundSize: '300px'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 font-hindi">प्रश्नोत्तरी - Quiz</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Test your knowledge about Indian Independence Day and freedom fighters</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-saffron/20">
              <h1 className="text-4xl md:text-5xl font-extrabold text-saffron mb-6 font-hindi">
                🇮🇳 15 अगस्त क्विज़
              </h1>
              <div className="inline-block bg-gradient-to-r from-saffron to-flag-green text-white text-lg px-6 py-2 rounded-full mb-8 shadow-lg">
                Max {quizQuestions.length} Points
              </div>
              <div className="text-gray-800 leading-relaxed mb-8 space-y-3 text-left max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-lg p-4 border-l-4 border-saffron">
                  <p className="font-hindi text-lg">⚡ इस क्विज़ में <strong>स्वतंत्रता दिवस</strong> से जुड़े <strong>{quizQuestions.length} प्रश्न</strong> होंगे।</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border-l-4 border-flag-green">
                  <p className="font-hindi text-lg">⚡ हर प्रश्न के लिए मिलेगा <strong>15 सेकंड</strong> और हर सही उत्तर पर मिलेगा <span className="text-green-700 font-bold">+1 पॉइंट</span>।</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="font-hindi text-lg">⚡ गलत उत्तर पर कोई पॉइंट नहीं मिलेगा।</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="font-hindi text-lg">⚡ अंत में आपका स्कोर दिखाई देगा! 🎉</p>
                </div>
              </div>
              <Button
                onClick={startQuiz}
                className="mt-6 bg-flag-green hover:bg-green-700 text-white text-xl font-semibold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                🚀 Start Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Results Screen
  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const isExcellent = score === quizQuestions.length;
    const isGood = score >= quizQuestions.length / 2;
    
    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-saffron/10 via-white to-flag-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-saffron/20">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-saffron font-hindi">🎉 Quiz Complete!</h2>
                <div className="bg-gradient-to-r from-saffron/10 to-flag-green/10 rounded-2xl p-6 mb-6">
                  <p className="text-4xl md:text-5xl font-bold text-navy-blue mb-2">{score} / {quizQuestions.length}</p>
                  <p className="text-2xl text-gray-700 font-hindi">आपका स्कोर</p>
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-4 w-full max-w-md mx-auto">
                      <div 
                        className={`h-4 rounded-full transition-all duration-1000 ${
                          isExcellent ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          isGood ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-red-500 to-red-600'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-lg font-semibold text-gray-600 mt-2">{percentage}%</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-2xl p-6 mb-8 ${
                isExcellent ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' :
                isGood ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' :
                'bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200'
              }`}>
                <div className="text-4xl mb-3">
                  {isExcellent ? '🏆' : isGood ? '👏' : '💪'}
                </div>
                <p className="text-xl font-bold text-gray-800 mb-2 font-hindi">
                  {isExcellent ? "परफेक्ट स्कोर!" :
                   isGood ? "बहुत बढ़िया!" :
                   "अच्छी कोशिश!"}
                </p>
                <p className="text-gray-600 font-hindi text-lg">
                  {isExcellent ? "आप एक सच्चे देशभक्त हैं! भारत के इतिहास की जानकारी शानदार है।" :
                   isGood ? "भारत के बारे में आपकी जानकारी अच्छी है। और भी सीखते रहें।" :
                   "हमारे महान राष्ट्र के बारे में हमेशा कुछ न कुछ सीखने को मिलता है।"}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetQuiz}
                  className="bg-flag-green hover:bg-green-700 text-white py-3 px-8 rounded-full text-xl shadow-lg active:scale-95 transition-all duration-200"
                >
                  🔄 Restart Quiz
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="border-saffron text-saffron hover:bg-saffron hover:text-white py-3 px-8 rounded-full text-xl shadow-lg active:scale-95 transition-all duration-200"
                >
                  🏠 Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Quiz Screen
  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-saffron/10 via-white to-flag-green/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-saffron/20">
            {/* Indian Theme Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-2 font-hindi">
                🇮🇳 स्वतंत्रता दिवस क्विज़
              </h3>
              <p className="text-gray-600">जय हिन्द!</p>
            </div>

            {/* Progress and Timer Section */}
            <div className="bg-gradient-to-r from-saffron/10 to-flag-green/10 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-navy-blue">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </div>
                <div className={`text-lg font-bold px-4 py-2 rounded-full ${
                  timer <= 5 ? 'bg-red-100 text-red-600 animate-pulse' : 
                  timer <= 10 ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-green-100 text-green-600'
                }`}>
                  ⏰ {timer}s
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-saffron to-flag-green h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-600">
                Progress: {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% complete
              </div>
            </div>

            {/* Question Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-l-4 border-navy-blue">
              <div className="text-xl md:text-2xl font-bold text-navy-blue mb-4 min-h-[3rem] font-hindi leading-relaxed">
                {quizQuestions[currentQuestion].q}
              </div>
            </div>

            {/* Options Section */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              {quizQuestions[currentQuestion].opts.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswerSelected}
                  className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-200 border-2 ${
                    showCorrectAnswer
                      ? index === quizQuestions[currentQuestion].ans
                        ? "bg-green-500 text-white border-green-600 shadow-lg"
                        : selectedAnswer === index && index !== quizQuestions[currentQuestion].ans
                        ? "bg-red-500 text-white border-red-600 shadow-lg"
                        : "bg-gray-50 text-gray-500 border-gray-200"
                      : selectedAnswer === index
                      ? "bg-saffron/20 border-saffron text-navy-blue shadow-md"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-saffron/10 hover:border-saffron/50 hover:shadow-md"
                  } ${isAnswerSelected ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <span className="font-bold text-navy-blue mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {/* Action Button */}
            <Button
              onClick={handleNext}
              disabled={!isAnswerSelected}
              className="w-full bg-flag-green hover:bg-green-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform active:scale-98"
            >
              {currentQuestion === quizQuestions.length - 1 ? "🏁 Finish Quiz" : "Next Question →"}
            </Button>

            {/* Score Display */}
            <div className="mt-6 text-center">
              <div className="inline-block bg-gradient-to-r from-saffron/20 to-flag-green/20 rounded-full px-6 py-2">
                <span className="text-lg font-semibold text-navy-blue">Score: {score} / {currentQuestion + (isAnswerSelected ? 1 : 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}