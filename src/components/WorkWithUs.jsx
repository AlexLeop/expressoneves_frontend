import React, { useState } from 'react';
import { Button } from './ui/button';
import { workWithUsData } from '../mock/data';
import JobApplicationModal from './JobApplicationModal';

const WorkWithUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="careers" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {workWithUsData.title}
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            {workWithUsData.subtitle}
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {workWithUsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Benefits */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 border border-red-500/20">
            <h3 className="text-3xl font-bold mb-8 text-red-400">
              Benefícios
            </h3>
            <div className="space-y-4">
              {workWithUsData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-3xl p-8 border border-green-500/20">
            <h3 className="text-3xl font-bold mb-8 text-green-400">
              Requisitos
            </h3>
            <div className="space-y-4">
              {workWithUsData.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Candidate-se Agora
          </Button>
        </div>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default WorkWithUs;