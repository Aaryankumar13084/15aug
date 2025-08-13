import Header from "@/components/header";
import FlagAnimation from "@/components/flag-animation";
import flagVideoUrl from "../assets/indian-flag-animation.gif";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";

export default function Home() {
  const { isPlaying, isLoading, progress, duration, togglePlay } = useAudioPlayer("/api/audio/jana-gana-mana.mp3");

  return (
    <div className="bg-warm-gray font-sans patriotic-bg">
      <Header />
      
      {/* Hero Section with Flag Animation */}
      <section id="home" className="gradient-bg py-16 desh-bhakti-shadow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4 font-hindi">
              🇮🇳 जय हिन्द! 🇮🇳
            </h2>
            <p className="text-xl md:text-2xl text-saffron font-semibold mb-4">
              भारत माता की जय - Celebrating the spirit of our great nation
            </p>
            <p className="text-lg text-gray-700 mb-8 italic">
              "वन्दे मातरम् - वतन की मिट्टी से प्यार"
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

            {/* National Anthem Button */}
            <div className="mb-8">
              <Button 
                onClick={togglePlay}
                disabled={isLoading}
                className="anthem-button text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gradient-to-r hover:from-saffron hover:to-flag-green"
                data-testid="button-national-anthem"
              >
                {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                राष्ट्रगान सुनें (Play National Anthem)
              </Button>
              
              {isPlaying && (
                <div className="mt-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 max-w-sm mx-auto">
                    <p className="text-navy-blue font-medium mb-2">जन गण मन - Jana Gana Mana</p>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={togglePlay}
                        className="text-navy-blue hover:text-saffron p-1"
                        data-testid="button-anthem-control"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <div className="flex-1 bg-white bg-opacity-30 rounded-full h-2">
                        <div 
                          className="bg-saffron h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-navy-blue">{duration}</span>
                    </div>
                  </div>
                </div>
              )}
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
