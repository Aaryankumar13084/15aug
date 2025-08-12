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
        className="absolute left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-full shadow-lg"
        style={{ bottom: '0px' }}
      />
      
      {/* Pole */}
      <div 
        className="pole-base absolute left-1/2 transform -translate-x-1/2 w-4" 
        style={{ 
          height: '400px', 
          bottom: '4px',
          background: 'linear-gradient(to right, #8B4513 0%, #CD853F 20%, #DEB887 50%, #CD853F 80%, #8B4513 100%)',
          boxShadow: '2px 0 6px rgba(0,0,0,0.4), inset 1px 0 2px rgba(255,255,255,0.3)'
        }}
      />
      
      {/* Flag Container - This moves up */}
      <div 
        className={`absolute left-1/2 w-44 h-32 ${animationStarted ? 'flag-raise' : ''}`}
        style={{ 
          transform: 'translateX(3px)', 
          bottom: animationStarted ? '0px' : '-120px',
          top: animationStarted ? '25px' : 'auto'
        }}
      >
        {/* Flag */}
        <div className="flag-element w-full h-full relative">
          {/* Flag fabric with realistic proportions */}
          <div className="w-40 h-28 shadow-2xl rounded-r-md overflow-hidden relative border border-gray-300">
            {/* Saffron stripe */}
            <div className="h-1/3 relative" style={{ background: 'linear-gradient(45deg, #FF9933, #FF7722, #FF9933)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-orange-900/10"></div>
            </div>
            
            {/* White stripe with Ashoka Chakra */}
            <div className="h-1/3 bg-white flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 via-transparent to-gray-100/20"></div>
              
              {/* Ashoka Chakra - Authentic and detailed */}
              <div className="w-8 h-8 relative">
                {/* Outer circle */}
                <div className="w-8 h-8 border-2 border-navy-blue rounded-full relative bg-white">
                  {/* Inner circle */}
                  <div className="absolute inset-1 border border-navy-blue rounded-full"></div>
                  
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-navy-blue rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-white"></div>
                  
                  {/* 24 Spokes of Ashoka Chakra */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-navy-blue"
                      style={{
                        width: '1px',
                        height: '12px',
                        left: '50%',
                        top: '50%',
                        transformOrigin: '0.5px 6px',
                        transform: `translate(-0.5px, -6px) rotate(${i * 15}deg)`,
                        borderRadius: '0.5px'
                      }}
                    />
                  ))}
                  
                  {/* Additional spoke details for authenticity */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={`inner-${i}`}
                      className="absolute bg-navy-blue"
                      style={{
                        width: '0.5px',
                        height: '8px',
                        left: '50%',
                        top: '50%',
                        transformOrigin: '0.25px 4px',
                        transform: `translate(-0.25px, -4px) rotate(${i * 15 + 7.5}deg)`,
                        opacity: 0.6
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Green stripe */}
            <div className="h-1/3 relative" style={{ background: 'linear-gradient(45deg, #138808, #0F6B0F, #138808)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-green-900/20"></div>
            </div>
            
            {/* Flag edge effects */}
            <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 shadow-sm"></div>
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300"></div>
            
            {/* Fabric texture overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.05) 1px,
                rgba(0,0,0,0.05) 2px
              ), repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.05) 1px,
                rgba(0,0,0,0.05) 2px
              )`
            }}></div>
          </div>
          
          {/* Flag attachment to pole */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-r from-gray-300 to-gray-200 shadow-inner border-r border-gray-400">
            {/* Pole attachment eyelets */}
            <div className="absolute top-3 left-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full transform -translate-x-1/2 shadow-inner border border-gray-600"></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner border border-gray-600"></div>
            <div className="absolute bottom-3 left-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full transform -translate-x-1/2 shadow-inner border border-gray-600"></div>
          </div>
        </div>
      </div>
      
      {/* Pole top finial */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ top: '20px' }}
      >
        {/* Golden spear tip */}
        <div className="w-3 h-6 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-t-full shadow-md border border-yellow-700"></div>
        {/* Finial base */}
        <div className="w-4 h-2 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-sm border border-yellow-800 transform -translate-x-0.5"></div>
      </div>
    </div>
  );
}
