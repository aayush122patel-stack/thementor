import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { AdmissionPopup } from './components/AdmissionPopup';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfirmationPage } from './components/ConfirmationPage';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();

  useEffect(() => {
    // Show popup after 2 seconds if not already submitted
    if (!isSubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const openPopup = (course?: string) => {
    setSelectedCourse(course);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {isSubmitted ? (
        <ConfirmationPage onBack={() => setIsSubmitted(false)} />
      ) : (
        <>
          <Header onEnquire={() => openPopup()} />
          <main className="flex-grow">
            <Hero onEnquire={() => openPopup()} />
            <About />
            <Courses onEnquire={(course) => openPopup(course)} />
            <Gallery />
            <Testimonials />
          </main>
          <ContactSection />
          
          <AdmissionPopup 
            isOpen={showPopup} 
            onClose={() => {
              setShowPopup(false);
              setSelectedCourse(undefined);
            }} 
            onSuccess={() => setIsSubmitted(true)}
            defaultCourse={selectedCourse}
          />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
};

export default App;