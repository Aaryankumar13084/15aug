import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const musicItems = [
  {
    title: "Classical Patriotic Songs",
    description: "Traditional melodies celebrating our nation",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-saffron to-orange-400",
    textColor: "text-orange-100"
  },
  {
    title: "Folk Traditions",
    description: "Regional songs from across India",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-flag-green to-green-600",
    textColor: "text-green-100"
  },
  {
    title: "Modern Patriotic",
    description: "Contemporary interpretations of national pride",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    bgColor: "from-navy-blue to-blue-800",
    textColor: "text-blue-100"
  }
];

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
              />
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                <p className={`${item.textColor} text-sm mb-4`}>{item.description}</p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-gray-700 hover:bg-gray-50"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Listen
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
