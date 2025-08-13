import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/footer";

export default function History() {
  const freedomFighters = [
    {
      id: 1,
      name: "महात्मा गांधी (Mahatma Gandhi)",
      years: "1869-1948",
      description: "राष्ट्रपिता महात्मा गांधी ने अहिंसा और सत्याग्रह के माध्यम से भारत की स्वतंत्रता के लिए संघर्ष किया। उन्होंने दांडी मार्च, असहयोग आंदोलन और भारत छोड़ो आंदोलन का नेतृत्व किया।",
      englishDesc: "Father of the Nation, led India's independence movement through non-violence and civil disobedience. Famous for Salt March, Non-cooperation Movement, and Quit India Movement."
    },
    {
      id: 2,
      name: "भगत सिंह (Bhagat Singh)",
      years: "1907-1931",
      description: "क्रांतिकारी भगत सिंह ने मात्र 23 वर्ष की आयु में देश के लिए अपना जीवन बलिदान कर दिया। उन्होंने राजगुरु और सुखदेव के साथ मिलकर अंग्रेजी शासन के खिलाफ संघर्ष किया।",
      englishDesc: "Revolutionary who sacrificed his life at age 23 for India's freedom. Along with Rajguru and Sukhdev, he fought against British rule with courage and determination."
    },
    {
      id: 3,
      name: "चंद्रशेखर आज़ाद (Chandrashekhar Azad)",
      years: "1906-1931",
      description: "आज़ाद ने प्रण लिया था कि वे जीवित अंग्रेजों के हाथ नहीं आएंगे। हिंदुस्तान रिपब्लिकन एसोसिएशन के नेता के रूप में उन्होंने कई क्रांतिकारी गतिविधियों का नेतृत्व किया।",
      englishDesc: "Leader of Hindustan Republican Association who vowed never to be captured alive by the British. Known for his fearless revolutionary activities and ultimate sacrifice."
    },
    {
      id: 4,
      name: "सुभाष चंद्र बोस (Subhas Chandra Bose)",
      years: "1897-1945",
      description: "नेताजी सुभाष चंद्र बोस ने आज़ाद हिंद फौज का गठन करके सशस्त्र संघर्ष के माध्यम से स्वतंत्रता प्राप्त करने का प्रयास किया। उनका नारा 'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूंगा' अमर है।",
      englishDesc: "Netaji formed the Indian National Army (Azad Hind Fauj) and sought freedom through armed struggle. His slogan 'Give me blood, I will give you freedom' is immortal."
    },
    {
      id: 5,
      name: "सरदार वल्लभभाई पटेल (Sardar Vallabhbhai Patel)",
      years: "1875-1950",
      description: "भारत के लौह पुरुष सरदार पटेल ने 562 रियासतों को भारत में मिलाकर एकीकृत भारत का निर्माण किया। वे स्वतंत्रता संग्राम के महत्वपूर्ण नेता थे।",
      englishDesc: "Iron Man of India who unified 562 princely states into the Indian Union. A key leader in the independence movement and architect of modern India."
    },
    {
      id: 6,
      name: "रानी लक्ष्मीबाई (Rani Lakshmibai)",
      years: "1828-1858",
      description: "झांसी की रानी लक्ष्मीबाई ने 1857 के विद्रोह में अंग्रेजों के खिलाफ वीरतापूर्वक लड़ाई लड़ी। उन्होंने 'मैं अपनी झांसी नहीं दूंगी' का नारा दिया।",
      englishDesc: "Queen of Jhansi who fought valiantly against the British in the 1857 revolt. Famous for her declaration 'I will never give up my Jhansi.'"
    },
    {
      id: 7,
      name: "मंगल पांडे (Mangal Pandey)",
      years: "1827-1857",
      description: "मंगल पांडे ने 1857 के स्वतंत्रता संग्राम की शुरुआत की। एक सिपाही के रूप में उन्होंने अंग्रेजी शासन के खिलाफ विद्रोह का बिगुल फूंका।",
      englishDesc: "Sepoy who sparked the 1857 Indian Rebellion. As a soldier, he was among the first to revolt against British rule, inspiring others to join the freedom struggle."
    },
    {
      id: 8,
      name: "अशफाकउल्लाह खान (Ashfaqullah Khan)",
      years: "1900-1927",
      description: "राम प्रसाद बिस्मिल के मित्र अशफाकउल्लाह खान ने काकोरी कांड में भाग लिया। हिंदू-मुस्लिम एकता के प्रतीक थे और देश के लिए शहीद हुए।",
      englishDesc: "Close friend of Ram Prasad Bismil who participated in the Kakori conspiracy. Symbol of Hindu-Muslim unity and sacrificed his life for the nation."
    },
    {
      id: 9,
      name: "खुदीराम बोस (Khudiram Bose)",
      years: "1889-1908",
      description: "मात्र 18 वर्ष की आयु में शहीद हुए खुदीराम बोस भारत के सबसे युवा क्रांतिकारियों में से एक थे। उन्होंने निडरता से अंग्रेजी शासन का विरोध किया।",
      englishDesc: "One of India's youngest revolutionaries who was martyred at just 18 years of age. Fearlessly opposed British rule and inspired many young Indians."
    },
    {
      id: 10,
      name: "तात्या टोपे (Tatya Tope)",
      years: "1814-1859",
      description: "1857 के विद्रोह के महान योद्धा तात्या टोपे ने नाना साहब और रानी लक्ष्मीबाई के साथ मिलकर अंग्रेजों के खिलाफ संघर्ष किया। वे कुशल सैन्य रणनीतिकार थे।",
      englishDesc: "Great warrior of 1857 rebellion who fought alongside Nana Saheb and Rani Lakshmibai against the British. Known for his brilliant military strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron/10 via-white to-flag-green/10">
      {/* Header with Back Button */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-navy-blue hover:text-saffron transition-colors"
              data-testid="back-to-home"
            >
              <ChevronLeft size={24} />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-3xl font-bold text-navy-blue font-hindi flex items-center justify-center gap-2">
                <span className="text-2xl" style={{fontFamily: 'Noto Color Emoji, Apple Color Emoji, Segoe UI Emoji, sans-serif'}}>🇮🇳</span>
                <span>📚 भारतीय इतिहास 📚</span>
                <span className="text-2xl" style={{fontFamily: 'Noto Color Emoji, Apple Color Emoji, Segoe UI Emoji, sans-serif'}}>🇮🇳</span>
              </h1>
              <p className="text-gray-600 mt-1">Great Indian Freedom Fighters</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Content */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-navy-blue mb-4 font-hindi">
                महान भारतीय स्वतंत्रता सेनानी
              </h2>
              <p className="text-gray-700 text-lg">
                These brave souls sacrificed their lives for our freedom and independence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {freedomFighters.map((fighter) => (
                <div 
                  key={fighter.id}
                  className="bg-gradient-to-br from-orange-50 via-white to-green-50 rounded-lg p-6 shadow-lg border-2 border-flag-green/20 hover:shadow-xl transition-shadow"
                  data-testid={`fighter-card-${fighter.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {fighter.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-blue mb-2 font-hindi">
                        {fighter.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 font-semibold">
                        {fighter.years}
                      </p>
                      <div className="space-y-3">
                        <p className="text-gray-800 leading-relaxed font-hindi text-sm">
                          {fighter.description}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm italic">
                          {fighter.englishDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-saffron/20 via-white to-flag-green/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 font-hindi">
                🙏 उनका बलिदान हमेशा याद रहेगा 🙏
              </h3>
              <p className="text-gray-700 text-lg">
                "स्वतंत्रता हमारा जन्मसिद्ध अधिकार है" - बाल गंगाधर तिलक
              </p>
              <p className="text-gray-600 mt-2">
                "Freedom is our birthright" - Bal Gangadhar Tilak
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}