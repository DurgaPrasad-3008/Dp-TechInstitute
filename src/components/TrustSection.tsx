import React from 'react';
import { Shield, Award, Users, Zap, BookOpen, TrendingUp, Briefcase, Code } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: '100% Online Learning',
      description: 'Learn from anywhere, anytime with our flexible online platform designed for working professionals and students.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Massive Student Discounts',
      description: 'Up to 70% off on course fees! Special pricing for students to make quality IT education accessible to everyone.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: 'Real-Time Mentorship',
      description: 'Get instant guidance and support from industry experts. We are with you at every step of your learning journey.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Live Industry Updates',
      description: 'Stay ahead with real-time insights on current IT trends, technologies, and market demands from working professionals.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-400" />,
      title: 'Practical Project Experience',
      description: 'Work on real-world projects that mirror actual industry scenarios. Build a portfolio that impresses employers.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-400" />,
      title: 'Career Growth Focused',
      description: 'From resume building to salary negotiation - we prepare you for every aspect of your IT career journey.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-teal-400" />,
      title: 'Interview & Office Readiness',
      description: 'Mock interviews, workplace etiquette, and professional communication skills to make you office-ready from day one.'
    },
    {
      icon: <Code className="h-8 w-8 text-orange-400" />,
      title: 'Current IT Environment Training',
      description: 'Learn about modern development practices, agile methodologies, and collaborative tools used in today\'s IT companies.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-85 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why 10,000+ Students Trust DpTech Trainings
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We don't just teach coding - we transform lives. Our comprehensive approach ensures you're not just 
            job-ready, but <span className="text-blue-400 font-semibold">career-ready</span> for the dynamic IT industry.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-green-400 font-bold text-lg">✓ 100% Online</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-yellow-400 font-bold text-lg">🎯 Industry Focused</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-blue-400 font-bold text-lg">💰 Student Discounts</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-purple-400 font-bold text-lg">🚀 Career Support</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-white border-opacity-20 hover:border-opacity-40"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎓 Ready to Transform Your Career?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join thousands of successful students who trusted DpTech Trainings for their IT career transformation.
              <br />
              <span className="font-semibold text-yellow-300">Limited Time: Up to 70% Student Discount Available!</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">✨ Personal Mentorship</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">🏆 Industry Projects</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">💼 Interview Preparation</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">🌟 Career Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;