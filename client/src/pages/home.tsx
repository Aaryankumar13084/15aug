import Header from "@/components/header";
import FlagAnimation from "@/components/flag-animation";
import flagVideoUrl from "../assets/indian-flag-animation.gif";

export default function Home() {

  return (
    <div className="bg-warm-gray font-sans">
      <Header />
      
      {/* Hero Section with Flag Animation */}
      <section id="home" className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 font-hindi">
              जय हिन्द!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Celebrating the spirit of our great nation
            </p>
            
            {/* Animated Indian Flag Video */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative w-full max-w-2xl mx-auto">
                <img 
                  src={flagVideoUrl}
                  alt="Indian Flag Animation"
                  className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-2xl"
                  style={{
                    animation: 'none',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                  data-testid="flag-animation-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none rounded-lg"></div>
              </div>
            </div>
            
            <p className="text-gray-600 italic">
              "Where the world has not been broken up into fragments by narrow domestic walls..."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
