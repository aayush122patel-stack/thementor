import React from 'react';
import { Button } from './Button';
import { Phone } from 'lucide-react';

interface HeroProps {
  onEnquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquire }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#007BFF]/5 skew-x-12 transform origin-top-left -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Centered layout since form is removed */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue font-semibold text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            Admissions Open for 2026-27
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Unlock Your Potential with <br />
            <span className="relative inline-block group cursor-default">
              <span className="text-brand-red transition-colors duration-300 group-hover:text-brand-blue">The</span>
              <span className="text-brand-blue transition-colors duration-300 group-hover:text-brand-red"> Mentor</span>
              <span className="text-brand-red transition-colors duration-300 group-hover:text-brand-blue"> Academy</span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-red/30 -z-10 transition-colors duration-300 group-hover:text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert coaching for Boards, JEE, NEET, and Competitive Exams. We don't just teach; we mentor you to success with our "Quest for the Best" philosophy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-lg px-8 py-4"
              onClick={() => window.location.href = 'tel:+919022365274'}
            >
              Call Us <Phone size={20} className="ml-2" />
            </Button>
            <Button 
              className="w-full sm:w-auto text-lg px-8 py-4 bg-[#25D366] text-white hover:bg-[#128C7E] border-none shadow-lg shadow-green-200"
              onClick={() => window.open('https://wa.me/919022365274', '_blank')}
            >
              Whatsapp Enquiry
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500">
            {['Experienced Faculty', 'Personalized Attention', 'Proven Results'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};