import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import MusicSection from "@/components/music-section";
import Footer from "@/components/footer";

export default function Music() {
  return (
    <div className="min-h-screen patriotic-bg desh-bhakti-shadow">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-saffron/10 via-white to-flag-green/10 shadow-md sticky top-0 z-50 border-b-2 border-saffron/30">
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
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "Noto Color Emoji, Apple Color Emoji, Segoe UI Emoji, sans-serif",
                  }}
                >
                  🇮🇳
                </span>
                <span> भारतीय संगीत</span>
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "Noto Color Emoji, Apple Color Emoji, Segoe UI Emoji, sans-serif",
                  }}
                >
                  🇮🇳
                </span>
              </h1>
              <p className="text-saffron font-semibold mt-1">🎵 देशभक्ति गीत संग्रह - Patriotic Songs Collection 🎵</p>
            </div>
          </div>
        </div>
      </div>

      {/* Music Content */}
      <div className="py-8">
        <MusicSection />
      </div>
    </div>
  );
}
