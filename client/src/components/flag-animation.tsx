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
        {/* Beautiful 3D Waving Flag */}
        <div className="flag-element w-full h-full relative">
          <div className="flag-3d-main w-48 h-32 relative shadow-2xl rounded-r-lg overflow-hidden">
            {/* Saffron stripe */}
            <div className="h-1/3 relative" style={{ 
              background: 'linear-gradient(90deg, #FF9933 0%, #FF7722 50%, #FF9933 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent"></div>
            </div>
            
            {/* White stripe with Ashoka Chakra */}
            <div className="h-1/3 bg-white relative flex items-center justify-center" style={{
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05), inset 0 -2px 4px rgba(0,0,0,0.05)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50"></div>
              
              {/* Perfect Ashoka Chakra */}
              <div className="w-8 h-8 relative z-10">
                <div className="w-8 h-8 border-2 border-navy-blue rounded-full relative bg-white shadow-sm">
                  {/* Inner circle */}
                  <div className="absolute inset-1 border border-navy-blue rounded-full"></div>
                  
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-navy-blue rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-white shadow-sm"></div>
                  
                  {/* 24 Main Spokes */}
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
                </div>
              </div>
            </div>
            
            {/* Green stripe */}
            <div className="h-1/3 relative" style={{ 
              background: 'linear-gradient(90deg, #138808 0%, #0F6B0F 50%, #138808 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 to-transparent"></div>
            </div>
            
            {/* Flag edge effects for 3D appearance */}
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-500 via-gray-400 to-gray-500 shadow-sm"></div>
            
            {/* 3D depth shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none"></div>
          </div>
          
          {/* Flag attachment to golden pole */}
          <div className="absolute left-0 top-0 w-4 h-32 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 shadow-inner border-r border-yellow-400 z-20 rounded-l-sm">
            {/* Decorative attachment rings */}
            <div className="absolute top-4 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 shadow-inner border border-yellow-700"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner border border-yellow-700"></div>
            <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-yellow-600 rounded-full transform -translate-x-1/2 shadow-inner border border-yellow-700"></div>
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
