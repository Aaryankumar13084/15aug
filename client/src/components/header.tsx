import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Flag, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const navigateHome = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron to-flag-green rounded-full flex items-center justify-center">
              <Flag className="text-white h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-blue font-hindi">
                भारत माता
              </h1>
              <p className="text-xs text-gray-600">Patriotic India</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={navigateHome}
              className="text-gray-700 hover:text-saffron transition-colors font-medium px-3 py-2 rounded-md hover:bg-saffron/10"
              data-testid="nav-home"
            >
              Home
            </button>
            <Link
              href="/about"
              className="text-gray-700 hover:text-saffron transition-colors font-medium px-3 py-2 rounded-md hover:bg-saffron/10"
              data-testid="nav-about"
            >
              About
            </Link>
            <Link
              href="/music"
              className="text-gray-700 hover:text-saffron transition-colors font-medium px-3 py-2 rounded-md hover:bg-saffron/10"
              data-testid="nav-music"
            >
              Music
            </Link>
            <Link
              href="/history"
              className="text-gray-700 hover:text-saffron transition-colors font-medium px-3 py-2 rounded-md hover:bg-saffron/10"
              data-testid="nav-history"
            >
              History
            </Link>
            <Link
              href="/quiz"
              className="text-gray-700 hover:text-saffron transition-colors font-medium px-3 py-2 rounded-md hover:bg-saffron/10"
              data-testid="nav-quiz"
            >
              Quiz
            </Link>
          </div>
          
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <button
              onClick={navigateHome}
              className="text-gray-700 hover:text-saffron transition-colors font-medium text-sm px-2 py-1 rounded hover:bg-saffron/10"
              data-testid="nav-home-tablet"
            >
              Home
            </button>
            <Link
              href="/about"
              className="text-gray-700 hover:text-saffron transition-colors font-medium text-sm px-2 py-1 rounded hover:bg-saffron/10"
              data-testid="nav-about-tablet"
            >
              About
            </Link>
            <Link
              href="/music"
              className="text-gray-700 hover:text-saffron transition-colors font-medium text-sm px-2 py-1 rounded hover:bg-saffron/10"
              data-testid="nav-music-tablet"
            >
              Music
            </Link>
            <Link
              href="/history"
              className="text-gray-700 hover:text-saffron transition-colors font-medium text-sm px-2 py-1 rounded hover:bg-saffron/10"
              data-testid="nav-history-tablet"
            >
              History
            </Link>
            <Link
              href="/quiz"
              className="text-gray-700 hover:text-saffron transition-colors font-medium text-sm px-2 py-1 rounded hover:bg-saffron/10"
              data-testid="nav-quiz-tablet"
            >
              Quiz
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-700 hover:text-saffron p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 bg-white rounded-lg shadow-lg">
            <div className="space-y-1 px-2 pb-3">
              <button
                onClick={navigateHome}
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-saffron hover:bg-saffron/10 transition-colors rounded-md font-medium"
                data-testid="mobile-nav-home"
              >
                🏠 Home
              </button>
              <Link
                href="/about"
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-saffron hover:bg-saffron/10 transition-colors rounded-md font-medium"
                data-testid="mobile-nav-about"
                onClick={() => setMobileMenuOpen(false)}
              >
                ℹ️ About
              </Link>
              <Link
                href="/music"
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-saffron hover:bg-saffron/10 transition-colors rounded-md font-medium"
                data-testid="mobile-nav-music"
                onClick={() => setMobileMenuOpen(false)}
              >
                🎵 Music
              </Link>
              <Link
                href="/history"
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-saffron hover:bg-saffron/10 transition-colors rounded-md font-medium"
                data-testid="mobile-nav-history"
                onClick={() => setMobileMenuOpen(false)}
              >
                📚 History
              </Link>
              <Link
                href="/quiz"
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-saffron hover:bg-saffron/10 transition-colors rounded-md font-medium"
                data-testid="mobile-nav-quiz"
                onClick={() => setMobileMenuOpen(false)}
              >
                ❓ Quiz
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}