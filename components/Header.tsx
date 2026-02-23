import React, { useState } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onEnquire: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onEnquire }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center">
              {/* Trying the lh3.googleusercontent.com format which is often more reliable for embedding */}
              <img 
                src="https://lh3.googleusercontent.com/d/1nFxCe5MNDEwPChOf1l9OyQ_uxd4GIu4k" 
                alt="The Mentor Academy Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image fails to load (e.g. permissions issue)
                  console.error("Logo failed to load. Please check Google Drive permissions.");
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-brand-blue', 'w-12', 'h-12', 'rounded-full', 'text-white');
                  // We inject a fallback icon if the image fails
                  const fallbackIcon = document.createElement('div');
                  fallbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10v6"/><path d="M22 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"/><path d="M7 10h10"/><path d="M5 20h14"/><path d="m9 10 3-6 3 6"/></svg>';
                  e.currentTarget.parentElement?.appendChild(fallbackIcon.firstChild!);
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight leading-none">
                <span className="text-brand-red transition-colors duration-300 group-hover:text-brand-blue">The</span>
                <span className="text-brand-blue transition-colors duration-300 group-hover:text-brand-red"> Mentor</span>
                <span className="text-brand-red transition-colors duration-300 group-hover:text-brand-blue"> Academy</span>
              </span>
              <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase mt-0.5">
                IIT JEE . NEET . MHTCET Division
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 font-medium hover:text-brand-blue transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onEnquire}
              className="px-5 py-2.5 bg-brand-red text-white font-semibold rounded-md shadow-lg shadow-red-200 hover:bg-red-600 hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-brand-blue p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 hover:text-brand-blue hover:pl-2 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="w-full text-center py-3 bg-brand-red text-white font-bold rounded-lg shadow-md"
            onClick={() => {
              setIsMenuOpen(false);
              onEnquire();
            }}
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
};