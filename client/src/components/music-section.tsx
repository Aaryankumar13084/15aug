import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";

const musicItems = [
  {
    title: "जन गण मन - Jana Gana Mana",
    description: "National Anthem of India with HD audio and lyrics",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-saffron to-orange-400",
    textColor: "text-orange-100",
    audioSrc: "/api/audio/jana-gana-mana.mp3",
    isNationalAnthem: true
  },
  {
    title: "देश भक्ति गीत - Patriotic Song 1",
    description: "Inspiring patriotic melody celebrating our motherland (1:05)",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-flag-green to-green-600",
    textColor: "text-green-100",
    audioSrc: "/api/audio/patriotic-song-1.mp3"
  },
  {
    title: "राष्ट्रीय गान - Patriotic Song 2",
    description: "Extended patriotic composition for the nation (7:10)",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-navy-blue to-blue-800",
    textColor: "text-blue-100",
    audioSrc: "/api/audio/patriotic-song-2.mp3"
  },
  {
    title: "स्वतंत्रता गीत - Freedom Song",
    description: "Melodious tribute to India's independence (6:02)",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-purple-600 to-indigo-700",
    textColor: "text-purple-100",
    audioSrc: "/api/audio/patriotic-song-3.mp3"
  },
  {
    title: "भारत माता - Bharat Mata",
    description: "Beautiful homage to Mother India (3:57)",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-red-600 to-pink-700",
    textColor: "text-red-100",
    audioSrc: "/api/audio/patriotic-song-4.mp3"
  }
];

function AudioPlayer({ audioSrc, title }: { audioSrc: string; title: string }) {
  const { isPlaying, isLoading, progress, duration, togglePlay } = useAudioPlayer(audioSrc);

  return (
    <div className="space-y-3">
      <Button 
        onClick={togglePlay}
        variant="secondary" 
        className="bg-white text-gray-700 hover:bg-gray-50 w-full"
        disabled={isLoading}
        data-testid={`button-play-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : isPlaying ? (
          <Pause className="mr-2 h-4 w-4" />
        ) : (
          <Play className="mr-2 h-4 w-4" />
        )}
        {isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play'}
      </Button>
      
      {(isPlaying || progress > 0) && (
        <div className="bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-white h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      {duration !== "0:00" && (
        <div className="text-white text-sm text-center opacity-80">
          Duration: {duration}
        </div>
      )}
    </div>
  );
}

export default function MusicSection() {
  return (
    <section id="music" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 font-hindi">संगीत - Music</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the rich musical heritage of India through patriotic songs and classical compositions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicItems.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
                data-testid={`img-music-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg mb-2" data-testid={`text-music-title-${index}`}>
                  {item.title}
                </h4>
                <p className={`${item.textColor} text-sm mb-4`} data-testid={`text-music-description-${index}`}>
                  {item.description}
                </p>
                
                {item.audioSrc ? (
                  <AudioPlayer audioSrc={item.audioSrc} title={item.title} />
                ) : (
                  <Button 
                    variant="secondary" 
                    className="bg-white text-gray-700 hover:bg-gray-50"
                    data-testid={`button-listen-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
