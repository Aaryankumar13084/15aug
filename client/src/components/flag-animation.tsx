import { useEffect, useRef } from "react";

export default function FlagAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based flag animation
    const container = containerRef.current;
    if (!container) return;

    // Add animation classes after component mounts
    const pole = container.querySelector('.flag-pole');
    const flag = container.querySelector('.flag-element');
    
    if (pole && flag) {
      setTimeout(() => {
        pole.classList.add('pole-animation');
        flag.classList.add('flag-wave');
      }, 500);
    }
  }, []);

  return (
    <div ref={containerRef} className="mb-8 relative mx-auto max-w-md" style={{ height: '400px' }}>
      {/* Pole */}
      <div 
        className="flag-pole absolute left-1/2 transform -translate-x-1/2 w-2 bg-gray-600" 
        style={{ height: '350px', bottom: '0' }}
      />
      
      {/* Flag */}
      <div 
        className="flag-element absolute" 
        style={{ left: '50%', top: '20px', transform: 'translateX(0%)' }}
      >
        <div className="w-32 h-20 shadow-lg">
          <div className="h-1/3 bg-saffron"></div>
          <div className="h-1/3 bg-white flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-navy-blue rounded-full relative">
              <div className="absolute inset-1 border border-navy-blue rounded-full"></div>
              {/* Chakra spokes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-navy-blue"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-navy-blue"></div>
              </div>
            </div>
          </div>
          <div className="h-1/3 bg-flag-green"></div>
        </div>
      </div>
    </div>
  );
}
