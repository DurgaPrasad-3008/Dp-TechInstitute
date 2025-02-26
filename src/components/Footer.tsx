import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-2">
          <img src="/images/dp-logo11.jpg" alt="DpTech Logo" className="h-15 w-14" />

            <span className="text-xl font-bold">DpTech Trainings</span>
            <p className="text-gray-400 max-w-md mt-3">
              Empowering students with the skills and knowledge needed to succeed in the IT industry.
              Join us on your journey to becoming a successful IT professional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Courses</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: dptechdeveloper77@gmail.com</li>
              <li>WhatsApp: +91 7731878344</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} DpTech Trainings. All rights reserved.</p>
          <p className="text-gray-500 mt-1">Created by Puttala Durga Prasad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;