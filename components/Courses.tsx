import React from 'react';
import { Zap, Stethoscope, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

interface CoursesProps {
  onEnquire: (course: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onEnquire }) => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Academic Programs" 
          subtitle="Tailored learning paths designed to build strong foundations and achieve competitive excellence."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* JEE */}
          <div className="bg-blue-50/50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-blue"></div>
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IIT JEE</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive coaching for IIT JEE Mains & Advanced with focus on conceptual clarity and problem-solving.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                Mains & Advanced Prep
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                Expert Faculty
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                Regular Test Series
              </li>
            </ul>
            <Button 
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] border-none shadow-md" 
              onClick={() => window.open('https://wa.me/919022365274', '_blank')}
            >
              Enquire Now
            </Button>
          </div>

          {/* NEET */}
          <div className="bg-red-50/50 rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red"></div>
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">NEET</h3>
            <p className="text-gray-600 mb-6">
              Dedicated medical entrance preparation with in-depth Biology, Physics, and Chemistry modules.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                NCERT Based Learning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                Doubt Solving Sessions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                Mock Tests & Analysis
              </li>
            </ul>
            <Button 
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] border-none shadow-md" 
              onClick={() => window.open('https://wa.me/919022365274', '_blank')}
            >
              Enquire Now
            </Button>
          </div>

          {/* MHTCET & Boards */}
          <div className="bg-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-dark"></div>
            <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MHTCET & Boards</h3>
            <p className="text-gray-600 mb-6">
              Balanced approach to excel in State Board exams and MHTCET entrance simultaneously.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                Board Exam Mastery
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                CET Focused Strategy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
                Personalized Mentorship
              </li>
            </ul>
            <Button 
              className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] border-none shadow-md" 
              onClick={() => window.open('https://wa.me/919022365274', '_blank')}
            >
              Enquire Now
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
