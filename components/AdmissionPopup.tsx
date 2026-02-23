import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

// Google Apps Script Web App URL already set — no edits needed
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzwyXwa6P8H4s7SVXFo70b6P-ovIqnv3Cy4B2OHmTAnbib-Vz8oPE5qXnSkuNWWF4Ic/exec";

interface AdmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  defaultCourse?: string;
}

export const AdmissionPopup: React.FC<AdmissionPopupProps> = ({ isOpen, onClose, onSuccess, defaultCourse }) => {
  const [formData, setFormData] = useState({
    studentName: '',           // Must match Apps Script key
    className: 'Class VIII',   // Must match Apps Script key
    board: 'CBSE',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({ ...prev, className: defaultCourse }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Submitted Successfully!");
        onSuccess();
        onClose();
        setFormData({ studentName: '', className: 'Class VIII', board: 'CBSE', mobile: '' });
      } else {
        alert("Submission Failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative overflow-hidden animate-fade-in-up scale-100 transform transition-transform">
        {/* Header */}
        <div className="bg-brand-blue p-8 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={28} />
          </button>
          <h3 className="text-3xl font-extrabold mb-2">Admissions Open</h3>
          <p className="text-yellow-300 text-lg font-bold tracking-wide">
            Take the First Step Towards Success
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
              <input 
                type="text" 
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, ''); }}
                pattern="[a-zA-Z\s]+"
                title="Only alphabets and spaces are allowed"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Enter full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Class / Course</label>
                <select 
                  name="className"
                  value={formData.className}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                >
                  <option>Class VIII</option>
                  <option>Class IX</option>
                  <option>Class X</option>
                  <option>Class XI</option>
                  <option>Class XII</option>
                  <option>Competitive Exams</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Board</label>
                <select 
                  name="board"
                  value={formData.board}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                >
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>IGCSE</option>
                  <option>State Board</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                inputMode="numeric"
                title="Please enter a valid 10-digit mobile number"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Enter 10-digit number"
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }}
              />
            </div>

            <Button 
              type="submit" 
              variant="accent" 
              fullWidth 
              className="mt-4 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Enquire Now'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

