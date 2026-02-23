import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Pulsing effect container */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <a 
        href="https://wa.me/919022365274" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 48 48" 
          width="40" 
          height="40" 
          fill="currentColor"
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 4C12.95 4 4 12.95 4 24c0 3.52.92 6.84 2.52 9.77L4 44l10.45-2.5C17.26 43.12 20.54 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36.5c-3.13 0-6.11-.8-8.73-2.31l-.63-.37-6.49 1.55 1.57-6.27-.38-.63A16.42 16.42 0 0 1 7.5 24c0-9.1 7.4-16.5 16.5-16.5S40.5 14.9 40.5 24 33.1 40.5 24 40.5zm9.1-12.3c-.5-.25-2.95-1.46-3.4-1.63-.46-.17-.8-.25-1.12.25-.33.5-1.29 1.62-1.58 1.95-.29.33-.58.37-1.08.12-2.16-1.08-3.56-1.92-5-4.4-.18-.31 0-.48.24-.73.22-.22.5-.58.75-.87.25-.3.33-.5.5-.83.17-.33.08-.63-.04-.87-.12-.25-1.12-2.71-1.54-3.7-.41-.98-.83-.83-1.12-.85-.28-.01-.6-.01-.92-.01-.32 0-.83.12-1.27.6-.43.48-1.67 1.63-1.67 3.97 0 2.34 1.7 4.6 1.95 4.93.25.33 3.35 5.12 8.12 7.18 2.87 1.24 3.98 1.35 5.43 1.14 1.6-.23 2.95-1.21 3.37-2.37.42-1.16.42-2.16.29-2.37-.12-.21-.46-.34-.96-.59z"/>
        </svg>
      </a>
      
      {/* Label outside the button for cleaner look or tooltip style */}
      <div className="absolute right-full mr-3 bg-white px-3 py-1 rounded-lg shadow-md text-gray-800 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  );
};