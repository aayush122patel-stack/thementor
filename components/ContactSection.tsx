import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from './Button';

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Ready to start your journey? Visit us at our center or reach out via phone/email. We are happy to guide you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-gray-400 leading-relaxed">
                      The Mentor Academy<br />
                      Office 1, 2, 5, 6 and 7, Poonam Estate Cluster, 2<br />
                      Srishti Rd, Sector 1, Srishti Complex<br />
                      Mira Road East, Mira Bhayandar, Maharashtra 401107
                    </p>
                    <a href="https://maps.app.goo.gl/u7BauhcafDrspMut6" target="_blank" rel="noreferrer" className="text-brand-red text-sm font-semibold hover:underline mt-2 inline-block">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-lg text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-gray-400">090223 65274</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-lg text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-400">info@mentoracademyhub.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed & Social */}
          <div className="space-y-8">
            <div className="h-[400px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
               <iframe 
                 title="The Mentor Academy Location"
                 src="https://maps.google.com/maps?q=The+Mentor+Academy+Mira+Road&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/thementoracademyhub/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/p/The-Mentor-Academy-61555399512481/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Mentor Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};