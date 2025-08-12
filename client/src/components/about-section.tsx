export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-8 font-hindi">हमारे बारे में - About Us</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                This platform is dedicated to celebrating the rich heritage, culture, and history of India. Through music, historical content, and interactive quizzes, we aim to foster patriotism and national pride among Indians worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to educate and inspire people about India's glorious past, vibrant present, and promising future while preserving our cultural values and traditions for generations to come.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-saffron">50+</div>
                  <div className="text-sm text-gray-600">Patriotic Songs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-flag-green">100+</div>
                  <div className="text-sm text-gray-600">Historical Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy-blue">200+</div>
                  <div className="text-sm text-gray-600">Quiz Questions</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="Indian cultural monuments and symbols" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
