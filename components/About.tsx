import React from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Image Side - aesthetically cropped and styled */}
          <div className="w-full max-w-6xl relative group">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-brand-blue/10 transform translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video">
               <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqo94oKWkfbaTxUMa4go50oNzYniwgM12nSzzquHRz4MOWTL7YrMyrz595gRvlPe4Np-7-cTfKbguNvPpNOsqpC25BL3jiEVLBRk4I1bmbAMbGe4Cm9q01fjbo_I1CAm9-enJQ=s1360-w1360-h1020-rw" 
                alt="Experience Learning"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full max-w-5xl">
            <SectionHeading 
              title="Experience Learning Like Never Before" 
              subtitle="At The Mentor Academy, we provide an environment that fosters growth, curiosity, and excellence."
              centered={true}
            />
            
            <div className="text-gray-600 mb-10 leading-relaxed text-center space-y-4">
              <p>
                Our modern classrooms and student-centric approach ensure that every learner gets the best possible environment to thrive. We believe in interactive learning where questions are encouraged, and concepts are mastered through rigorous practice and expert guidance.
              </p>
              <p>
                We focus on building a strong conceptual foundation, which is the key to cracking competitive exams like JEE, NEET, and MHTCET. Our mentorship program goes beyond traditional teaching, providing students with the psychological and academic support they need to excel in their chosen fields.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Modern Infrastructure & Comfortable Classrooms",
                "Dedicated Doubt Solving Sessions",
                "Small Batch Sizes for Personal Attention",
                "Regular Assessment & Performance Tracking"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-brand-blue/10 p-1.5 rounded-full text-brand-blue shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};