import { Flag, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-navy-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron to-flag-green rounded-full flex items-center justify-center">
                <Flag className="text-white h-4 w-4" />
              </div>
              <h4 className="text-xl font-bold font-hindi">भारत माता</h4>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Celebrating the spirit of India through music, history, and culture. Jai Hind!
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("music")}
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Music
              </button>
              <button 
                onClick={() => scrollToSection("history")}
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                History
              </button>
              <button 
                onClick={() => scrollToSection("quiz")}
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                Quiz
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-blue-200 hover:text-white transition-colors text-sm"
              >
                About
              </button>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                📸 Instagram
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                📺 YouTube
              </a>
            </div>
            <p className="text-blue-200 text-sm flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              info@bharatmata.in
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Bharat Mata. Made with ❤️ for India. | वंदे मातरम्
          </p>
        </div>
      </div>
    </footer>
  );
}
