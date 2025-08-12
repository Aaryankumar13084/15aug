import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const historyEvents = [
  {
    year: "1947",
    title: "Independence Day",
    description: "The historic moment when India gained freedom from British rule, marking the beginning of a new era of self-governance and democracy.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    year: "1930",
    title: "Salt March",
    description: "Gandhi's iconic 240-mile march to Dandi to protest the British salt monopoly, becoming a pivotal moment in the independence movement.",
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

export default function HistorySection() {
  return (
    <section id="history" className="py-16 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 font-hindi">इतिहास - History</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Journey through the glorious chapters of Indian independence and freedom struggle
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {historyEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.year}
                      </span>
                      <h4 className="ml-4 text-xl font-semibold text-navy-blue">{event.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button variant="ghost" className="text-saffron hover:text-orange-600 p-0 h-auto">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
