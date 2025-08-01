import React from 'react';
import { aboutData } from '../mock/data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
              {aboutData.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {aboutData.description}
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-6 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={aboutData.image} 
                alt="Sobre a Expresso Neves"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">10+</div>
                      <div className="text-sm text-gray-600">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Motoboys ativos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;