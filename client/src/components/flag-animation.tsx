import { useEffect, useRef, useState } from "react";

export default function FlagAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start animation after a brief delay
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      
      // Add flag wave animation after flag reaches the top
      setTimeout(() => {
        const flag = container.querySelector('.flag-element');
        if (flag) {
          flag.classList.add('flag-wave');
        }
      }, 3000); // After raise animation completes
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="mb-8 relative mx-auto max-w-md" style={{ height: '450px' }}>
      {/* Pole Base */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full"
        style={{ bottom: '0px' }}
      />
      
      {/* Pole */}
      <div 
        className="pole-base absolute left-1/2 transform -translate-x-1/2 w-3" 
        style={{ height: '400px', bottom: '6px' }}
      />
      
      {/* Flag Container - This moves up */}
      <div 
        className={`absolute left-1/2 w-40 h-24 ${animationStarted ? 'flag-raise' : ''}`}
        style={{ 
          transform: 'translateX(2px)', 
          bottom: animationStarted ? '0px' : '-100px',
          top: animationStarted ? '30px' : 'auto'
        }}
      >
        {/* Flag */}
        <div className="flag-element w-full h-full relative">
          {/* Flag fabric with realistic proportions */}
          <div className="w-36 h-24 shadow-xl rounded-r-sm overflow-hidden relative">
            {/* Saffron stripe */}
            <div className="h-1/3 bg-gradient-to-r from-saffron to-orange-500 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* White stripe with Ashoka Chakra */}
            <div className="h-1/3 bg-gradient-to-r from-white to-gray-50 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/20 to-transparent"></div>
              
              {/* Ashoka Chakra - More detailed */}
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 border-2 border-navy-blue rounded-full relative bg-white">
                  {/* Inner circle */}
                  <div className="absolute inset-2 border border-navy-blue rounded-full"></div>
                  
                  {/* 24 Spokes of Ashoka Chakra */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-3 bg-navy-blue"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: '0 0',
                        transform: `translate(-0.5px, -1.5rem) rotate(${i * 15}deg)`
                      }}
                    />
                  ))}
                  
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-navy-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            
            {/* Green stripe */}
            <div className="h-1/3 bg-gradient-to-r from-flag-green to-green-700 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* Flag edge effect */}
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
          </div>
          
          {/* Flag attachment to pole */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gray-200 shadow-inner">
            {/* Pole attachment rings */}
            <div className="absolute top-2 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Pole top finial */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full"
        style={{ top: '26px' }}
      />
    </div>
  );
}
