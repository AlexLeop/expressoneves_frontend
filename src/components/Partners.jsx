import React from 'react';
import { partnersData } from '../mock/data';

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabalhamos com as maiores empresas do setor de delivery
          </p>
        </div>

        {/* Partners Rows */}
        <div className="space-y-12">
          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="flex animate-slide-left space-x-16">
              {/* Double the array for seamless loop */}
              {[...partnersData[0], ...partnersData[0]].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="group flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  style={{
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.backgroundColor = partner.color + '20';
                    e.currentTarget.style.borderColor = partner.color;
                    e.currentTarget.style.borderWidth = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.borderWidth = '0px';
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: partner.color }}>
                      {partner.name.charAt(0)}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-gray-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="flex animate-slide-right space-x-16">
              {/* Double the array for seamless loop */}
              {[...partnersData[1], ...partnersData[1]].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="group flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  style={{
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.backgroundColor = partner.color + '20';
                    e.currentTarget.style.borderColor = partner.color;
                    e.currentTarget.style.borderWidth = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.borderWidth = '0px';
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: partner.color }}>
                      {partner.name.charAt(0)}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-gray-700">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;