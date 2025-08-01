import React from 'react';
import { servicesData } from '../mock/data';
import { Zap, Users, Smartphone, Headphones } from 'lucide-react';

const iconComponents = {
  Zap: Zap,
  Users: Users,
  Smartphone: Smartphone,
  Headphones: Headphones
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar seu negócio de delivery
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-red-50 hover:to-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-200 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;