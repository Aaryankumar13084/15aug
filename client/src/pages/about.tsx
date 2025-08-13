import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="bg-warm-gray font-sans min-h-screen">
      <Header />
      
      {/* About Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 font-hindi">
            हमारे बारे में
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            About the Developers
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-flag-green py-3 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => {
                const element = document.getElementById("lavish");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-saffron transition-colors font-semibold text-lg"
              data-testid="nav-lavish"
            >
              Lavish
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("himanshu");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-saffron transition-colors font-semibold text-lg"
              data-testid="nav-himanshu"
            >
              Himanshu
            </button>
          </div>
        </div>
      </div>

      {/* Lavish Section */}
      <section id="lavish" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-orange-100 via-white to-green-100 rounded-lg p-8 shadow-lg border-2 border-flag-green relative">
              <div className="absolute top-4 right-6 text-6xl opacity-5 pointer-events-none">
                ☸
              </div>
              
              <h2 className="text-3xl font-bold text-center text-navy-blue mb-8 font-hindi">
                🇮🇳 🇮🇳 Lavish 🇮🇳 🇮🇳
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                <p>
                  Namaste! Mera naam <strong>Lavish</strong> hai aur main is samay <strong>S. A. M Inter College, Saharanpur</strong> mein <strong>11vi kaksha mein vigyan varg ka chhatra hoon</strong>. Main <strong>Uttar Pradesh ke Saharanpur zila</strong> se hoon.
                </p>

                <p>
                  Mujhe technology, khaaskar <strong>coding aur web development</strong> mein gahri ruchi hai. Main ek <strong>frontend developer</strong> banne ki disha mein kaam kar raha hoon aur lagataar nai cheezein seekhkar apne <strong>skills</strong> ko behtar bana raha hoon. Mujhe <strong>website design karna</strong> aur <strong>user-friendly interface banana</strong> bahut pasand hai.
                </p>

                <p>
                  <strong>Coding karna</strong> na sirf mera shauk hai, balki main ise apne <strong>career ke roop mein</strong> bhi aage badhana chahta hoon. Main hamesha kuch naya seekhne aur takneek ki duniya mein khud ko aage badhane ke liye tayar rehta hoon.
                </p>

                <div className="text-center mt-8 font-semibold italic text-navy-blue">
                  Dhanyavaad!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Himanshu Section */}
      <section id="himanshu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-orange-100 via-white to-green-100 rounded-lg p-8 shadow-lg border-2 border-flag-green relative">
              <div className="absolute top-4 right-6 text-6xl opacity-5 pointer-events-none">
                ☸
              </div>
              
              <h2 className="text-3xl font-bold text-center text-navy-blue mb-8 font-hindi">
                🇮🇳 🇮🇳 Himanshu 🇮🇳 🇮🇳
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                <p>
                  Namaste! Mera naam <strong>Himanshu</strong> hai aur main is samay <strong>S. A. M Inter College, Saharanpur</strong> mein <strong>11vi kaksha mein vigyan varg ka chhatra hoon</strong>. Main <strong>Uttar Pradesh ke Saharanpur zila</strong> se hoon.
                </p>

                <p>
                  Mujhe technology, khaaskar <strong>coding aur web development</strong> mein gahri ruchi hai. Main ek <strong>full stack developer</strong> banne ki disha mein kaam kar raha hoon aur lagataar nai cheezein seekhkar apne <strong>skills</strong> ko behtar bana raha hoon. Mujhe <strong>website design karna</strong> aur <strong>user-friendly interface banana</strong> bahut pasand hai.
                </p>

                <p>
                  <strong>Coding karna</strong> na sirf mera shauk hai, balki main ise apne <strong>career ke roop mein</strong> bhi aage badhana chahta hoon. Main hamesha kuch naya seekhne aur takneek ki duniya mein khud ko aage badhane ke liye tayar rehta hoon.
                </p>

                <div className="text-center mt-8 font-semibold italic text-navy-blue">
                  Dhanyavaad!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}