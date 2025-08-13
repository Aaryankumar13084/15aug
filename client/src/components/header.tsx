import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Flag, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron to-flag-green rounded-full flex items-center justify-center">
              <Flag className="text-white h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-blue font-hindi">भारत माता</h1>
              <p className="text-xs text-gray-600">Patriotic India</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-saffron font-medium"
                  data-testid="button-menu-dropdown"
                >
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem 
                  onClick={() => window.location.href = "/music"}
                  data-testid="menu-music"
                >
                  🎵 Music
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => window.location.href = "/history"}
                  data-testid="menu-history"
                >
                  📚 History
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection("quiz")}
                  data-testid="menu-quiz"
                >
                  ❓ Quiz
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden text-gray-700 hover:text-saffron"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <div className="space-y-2">
              <Link 
                href="/music"
                className="block w-full text-left py-2 text-gray-700 hover:text-saffron transition-colors"
                data-testid="mobile-nav-music"
                onClick={() => setMobileMenuOpen(false)}
              >
                🎵 Music
              </Link>
              <Link 
                href="/history"
                className="block w-full text-left py-2 text-gray-700 hover:text-saffron transition-colors"
                data-testid="mobile-nav-history"
                onClick={() => setMobileMenuOpen(false)}
              >
                📚 History
              </Link>
              <button 
                onClick={() => scrollToSection("quiz")}
                className="block w-full text-left py-2 text-gray-700 hover:text-saffron transition-colors"
              >
                ❓ Quiz
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
