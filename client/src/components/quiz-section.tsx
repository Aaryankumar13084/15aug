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
    q: "15 अगस्त को भारत के किस स्थान पर झंडा फहराया जाता है?",
    opts: ["राजघाट", "इंडिया गेट", "लाल किला", "राष्ट्रपति भवन"],
    ans: 2,
  },
  {
    q: "महात्मा गांधी का पूरा नाम क्या था?",
    opts: ["मोहनलाल गांधी", "मोहनदास करमचंद गांधी", "महेंद्र गांधी", "महेन्द्रनाथ गांधी"],
    ans: 1,
  },
  {
    q: "भारत का राष्ट्रीय ध्वज किसने डिज़ाइन किया था?",
    opts: ["रविंद्रनाथ टैगोर", "सरोजिनी नायडू", "पिंगली वेंकैय्या", "सुभाष बोस"],
    ans: 2,
  },
  {
    q: "15 अगस्त 1947 को भारत के वायसराय कौन थे?",
    opts: ["लॉर्ड डलहौजी", "लॉर्ड कर्जन", "लॉर्ड माउंटबेटन", "लॉर्ड वेलेजली"],
    ans: 2,
  },
  {
    q: "भारतीय संविधान कब लागू हुआ?",
    opts: ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1949", "14 नवंबर 1948"],
    ans: 1,
  },
  {
    q: "भारत के पहले राष्ट्रपति कौन थे?",
    opts: ["नेहरू", "राजेंद्र प्रसाद", "जाकिर हुसैन", "सर्वपल्ली राधाकृष्णन"],
    ans: 1,
  },
  {
    q: "'जन गण मन' किसने लिखा?",
    opts: ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "बंकिम चंद्र", "नेहरू"],
    ans: 1,
  },
  {
    q: "'वन्दे मातरम्' किसने लिखा?",
    opts: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "नेहरू", "सुभाष बोस"],
    ans: 1,
  },
  {
    q: "भारत का राष्ट्रीय गान कब अपनाया गया?",
    opts: ["1947", "1948", "1950", "1952"],
    ans: 2,
  },
  {
    q: "भारत की स्वतंत्रता में 'लाल, बाल, पाल' किसे कहते हैं?",
    opts: ["तीन ब्रिटिश गवर्नर", "तीन कवि", "तीन स्वतंत्रता सेनानी", "तीन लेखक"],
    ans: 2,
  },
  {
    q: "भारत विभाजन के समय पाकिस्तान के पहले गवर्नर जनरल कौन बने?",
    opts: ["जिन्ना", "लियाकत अली", "नेहरू", "सरदार पटेल"],
    ans: 0,
  },
  {
    q: "भारत के पहले उप-प्रधानमंत्री कौन थे?",
    opts: ["पटेल", "गांधी", "राजगोपालाचारी", "नेहरू"],
    ans: 0,
  },
  {
    q: "भारत छोड़ो आंदोलन का नारा क्या था?",
    opts: ["भारत जाओ", "ब्रिटिश हटाओ", "भारत छोड़ो", "इंकलाब ज़िंदाबाद"],
    ans: 2,
  },
  {
    q: "15 अगस्त को किस देश ने भी भारत के साथ स्वतंत्रता प्राप्त की?",
    opts: ["बांग्लादेश", "पाकिस्तान", "नेपाल", "भूटान"],
    ans: 1,
  }
];

export default function QuizSection() {
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
      <section id="quiz" className="py-16 bg-gradient-to-br from-orange-500/10 via-white to-green-500/10 relative">
        {/* Background Ashoka Chakra */}
        <div 
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1200px-Ashoka_Chakra.svg.png')",
            backgroundSize: '200px'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 font-hindi">
                🇮🇳 15 अगस्त क्विज़
              </h1>
              <div className="inline-block bg-gradient-to-r from-orange-500 to-green-600 text-white text-lg px-4 py-1 rounded-full mb-6">
                Max {quizQuestions.length} Points
              </div>
              <div className="text-gray-800 leading-relaxed mb-6 space-y-2">
                <p className="font-hindi">⚡इस क्विज़ में <strong>स्वतंत्रता दिवस</strong> से जुड़े <strong>{quizQuestions.length} प्रश्न</strong> होंगे।</p>
                <p className="font-hindi">⚡हर प्रश्न के लिए मिलेगा <strong>15 सेकंड</strong> और हर सही उत्तर पर मिलेगा <span className="text-green-700 font-bold">+1 पॉइंट</span>।</p>
                <p className="font-hindi">⚡गलत उत्तर पर कोई पॉइंट नहीं मिलेगा।</p>
                <p className="font-hindi">⚡अंत में आपका स्कोर दिखाई देगा! 🎉</p>
              </div>
              <Button
                onClick={startQuiz}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition"
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
    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-orange-500/10 via-white to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-4xl font-extrabold mb-4 text-orange-700 font-hindi">🎉 Quiz Complete!</h2>
              <p className="text-3xl text-gray-800 mb-6 font-hindi">आपका स्कोर {score} / {quizQuestions.length}</p>
              <p className="text-gray-600 mb-6 font-hindi">
                {score === quizQuestions.length ? "Perfect! आप एक सच्चे देशभक्त हैं!" :
                 score >= quizQuestions.length / 2 ? "बहुत बढ़िया! भारत के बारे में और जानते रहें।" :
                 "अच्छी कोशिश! हमारे महान राष्ट्र के बारे में हमेशा कुछ न कुछ सीखने को मिलता है।"}
              </p>
              <Button 
                onClick={resetQuiz}
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-xl shadow-lg active:scale-95 transition"
              >
                Restart Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Quiz Screen
  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-orange-500/10 via-white to-green-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-orange-100 via-white to-green-100 rounded-3xl shadow-2xl p-8 border-4 border-orange-500">
            {/* Indian Theme Header */}
            <div className="text-center text-xl font-bold text-blue-800 mb-6 font-hindi">
              🇮🇳 जय हिन्द! – स्वतंत्रता दिवस क्विज़
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-semibold text-orange-700">
                Question {currentQuestion + 1}/{quizQuestions.length}
              </div>
              <div className="text-lg font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full">
                ⏰ {timer}s
              </div>
            </div>

            <div className="text-2xl font-bold text-gray-800 mb-6 min-h-[4.5rem] font-hindi">
              {quizQuestions[currentQuestion].q}
            </div>

            <div className="grid grid-cols-1 gap-5 mb-6">
              {quizQuestions[currentQuestion].opts.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswerSelected}
                  className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition ${
                    showCorrectAnswer
                      ? index === quizQuestions[currentQuestion].ans
                        ? "bg-green-500 text-white"
                        : selectedAnswer === index && index !== quizQuestions[currentQuestion].ans
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-700"
                      : selectedAnswer === index
                      ? "bg-orange-100 border-2 border-orange-500"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                  } ${isAnswerSelected ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!isAnswerSelected}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next"}
            </Button>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
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
