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
          flag.classList.add('flag-wave-3d');
        }
      }, 3000); // After raise animation completes
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="mb-8 relative mx-auto max-w-lg" style={{ height: '500px' }}>
      {/* Golden Pole Base - Multi-tier */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ bottom: '0px' }}
      >
        {/* Base tier 1 */}
        <div className="w-12 h-3 bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-300 rounded-full shadow-xl border border-yellow-700"></div>
        {/* Base tier 2 */}
        <div className="w-10 h-2 bg-gradient-to-t from-yellow-500 via-yellow-400 to-yellow-300 rounded-full shadow-lg border border-yellow-600 mx-auto"></div>
        {/* Base tier 3 */}
        <div className="w-8 h-2 bg-gradient-to-t from-yellow-400 via-yellow-300 to-yellow-200 rounded-full shadow-md border border-yellow-500 mx-auto"></div>
      </div>
      
      {/* Golden Pole */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-3" 
        style={{ 
          height: '450px', 
          bottom: '7px',
          background: 'linear-gradient(to right, #B8860B 0%, #DAA520 20%, #FFD700 50%, #DAA520 80%, #B8860B 100%)',
          boxShadow: '3px 0 8px rgba(0,0,0,0.3), inset 2px 0 4px rgba(255,255,255,0.4), inset -1px 0 2px rgba(184,134,11,0.6)',
          borderRadius: '2px'
        }}
      />
      
      {/* Flag Container - This moves up */}
      <div 
        className={`absolute left-1/2 w-52 h-36 ${animationStarted ? 'flag-raise' : ''}`}
        style={{ 
          transform: 'translateX(4px)', 
          bottom: animationStarted ? '0px' : '-150px',
          top: animationStarted ? '30px' : 'auto'
        }}
      >
        {/* 3D Flag with curved segments */}
        <div className="flag-element w-full h-full relative perspective-1000">
          <div className="flag-3d-container w-48 h-32 relative">
            {/* Flag divided into segments for 3D wave effect */}
            {Array.from({ length: 8 }).map((_, segmentIndex) => (
              <div
                key={segmentIndex}
                className="flag-segment absolute"
                style={{
                  left: `${segmentIndex * 6}px`,
                  width: '8px',
                  height: '128px',
                  transformOrigin: 'left center',
                  transform: `rotateY(${Math.sin((segmentIndex * 0.5) + Date.now() * 0.001) * 15}deg)`,
                  animation: `waveSegment${segmentIndex} 2s ease-in-out infinite`,
                  animationDelay: `${segmentIndex * 0.1}s`
                }}
              >
                {/* Saffron stripe segment */}
                <div 
                  className="h-1/3"
                  style={{ 
                    background: `linear-gradient(45deg, 
                      hsl(${20 + segmentIndex * 2}, 100%, ${65 - segmentIndex}%), 
                      hsl(${18 + segmentIndex * 2}, 95%, ${60 - segmentIndex}%))`,
                    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)'
                  }}
                />
                
                {/* White stripe segment with Ashoka Chakra */}
                <div className="h-1/3 bg-white relative flex items-center justify-center">
                  {segmentIndex === 3 && (
                    <div className="w-6 h-6 relative">
                      {/* Ashoka Chakra */}
                      <div className="w-6 h-6 border-2 border-navy-blue rounded-full relative bg-white">
                        <div className="absolute inset-1 border border-navy-blue rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-navy-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute bg-navy-blue"
                            style={{
                              width: '0.5px',
                              height: '10px',
                              left: '50%',
                              top: '50%',
                              transformOrigin: '0.25px 5px',
                              transform: `translate(-0.25px, -5px) rotate(${i * 15}deg)`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(to right, 
                        rgba(245,245,245,${0.8 + segmentIndex * 0.02}), 
                        rgba(255,255,255,1))`,
                      boxShadow: 'inset 0 0 4px rgba(0,0,0,0.05)'
                    }}
                  />
                </div>
                
                {/* Green stripe segment */}
                <div 
                  className="h-1/3"
                  style={{ 
                    background: `linear-gradient(45deg, 
                      hsl(${120 - segmentIndex * 2}, 85%, ${30 - segmentIndex}%), 
                      hsl(${118 - segmentIndex * 2}, 90%, ${25 - segmentIndex}%))`,
                    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)'
                  }}
                />
                
                {/* Segment shadow for depth */}
                <div 
                  className="absolute right-0 top-0 w-0.5 h-full bg-black opacity-10"
                  style={{ transform: 'translateX(0.5px)' }}
                />
              </div>
            ))}
            
            {/* Flag attachment mechanism */}
            <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-yellow-300 to-yellow-200 shadow-inner border-r border-yellow-400 z-10">
              {/* Attachment rings */}
              <div className="absolute top-4 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 shadow-inner border border-yellow-700"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner border border-yellow-700"></div>
              <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 shadow-inner border border-yellow-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Golden Pole Top Finial */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ top: '25px' }}
      >
        {/* Ornate spear tip */}
        <div className="w-4 h-8 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 rounded-t-full shadow-lg border border-yellow-700 relative">
          <div className="absolute top-1 left-1/2 w-2 h-4 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-t-full transform -translate-x-1/2"></div>
        </div>
        {/* Decorative collar */}
        <div className="w-5 h-3 bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-full shadow-md border border-yellow-800 transform -translate-x-0.5"></div>
        {/* Secondary collar */}
        <div className="w-4 h-2 bg-gradient-to-b from-yellow-500 to-yellow-800 rounded-full shadow-sm border border-yellow-900 transform -translate-x-0"></div>
      </div>
    </div>
  );
}
