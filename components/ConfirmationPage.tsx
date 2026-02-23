import React from 'react';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ConfirmationPageProps {
  onBack: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <div className="max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-ping opacity-20"></div>
            <CheckCircle className="w-24 h-24 text-green-500 relative z-10" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Enquiry Submitted!</h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Thank you for choosing <span className="text-brand-blue font-bold">The Mentor Academy</span>. 
          Our academic counselor will contact you within 24 hours to discuss your educational journey.
        </p>
        
        <div className="space-y-4">
          <Button onClick={onBack} variant="primary" fullWidth className="py-4 text-lg">
            <Home className="mr-2" size={20} />
            Back to Home
          </Button>
          
          <p className="text-sm text-gray-400">
            Need immediate assistance? <br />
            Call us at <a href="tel:+919022365274" className="text-brand-blue font-semibold hover:underline">090223 65274</a>
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-red"></div>
    </div>
  );
};
