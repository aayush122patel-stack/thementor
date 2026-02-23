import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Star, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Vighnesh Khapre",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWLtDOTVhkxpZp3uh85ubLmcOqHN-iTHYoLn9kbEe4gsV_4LYwo=w45-h45-p-rp-mo-br100",
      link: "https://share.google/ZH5Qf0MDGSmxu1YyT",
      text: "Almost an year has passed, while I am here, the teachers are truly supportive and think the best for our future . They are friendly while also being strict with us. It's fun to learn here. I consider it my best decision to join Mentor Academy. Best classes in Mira road 😊"
    },
    {
      name: "Suresh Sahu",
      avatar: null,
      link: "https://share.google/eBiyf8bQED1kDfQG1",
      text: "Mentor Academy is fantastic for students in grades 8-12. The knowledgeable instructors focus on conceptual understanding, making learning engaging and effective. Small class sizes ensure personalized attention, and the curriculum aligns well with school syllabuses. Excellent resources and modern teaching tools support exam preparation. "
    },
    {
      name: "Sanjana Shaniz",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVai4MmlWtcnbZrlIcvpzWlbPLnX99uuVYrrEcWdJRX2qDdVysx=w45-h45-p-rp-mo-br100",
      link: "https://share.google/xYB0e3QM8qyJmlt7J",
      text: " One of the best coaching i have ever seen the teachers are extremely polite and helpful they help me a lot to improve my self i have learn a lot and I will always be greatful to all the teachers"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Reviews" 
          subtitle="See what our students and parents say about us on Google."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <a 
              key={idx} 
              href={r.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group relative block"
            >
              <div className="flex items-center gap-4 mb-6">
                {r.avatar ? (
                  <img 
                    src={r.avatar} 
                    alt={r.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-lg border-2 border-brand-blue/20">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-gray-900">{r.name}</h4>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{r.text}"
              </p>
              <div className="flex items-center justify-end">
                <ExternalLink size={16} className="text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
