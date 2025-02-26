import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1627399270231-7d36245355a9")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:Dptechdeveloper77@gmail.com"
            className="flex flex-col items-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <Mail className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-center">dptechdeveloper77@gmail.com</p>
          </a>

          <a
            href="https://wa.me/7731878344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <MessageCircle className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300">+91 7731878344</p>
          </a>

          <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <Phone className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300">+91 7731878344</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;