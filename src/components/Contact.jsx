import React from 'react';
import { contactData } from '../mock/data';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

const iconComponents = {
  MessageCircle: MessageCircle,
  Instagram: Instagram,
  Facebook: Facebook,
  Linkedin: Linkedin
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {contactData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-red-400">
              Informações de Contato
            </h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Telefone</h4>
                  <p className="text-gray-300">{contactData.info.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">{contactData.info.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Endereço</h4>
                  <p className="text-gray-300">{contactData.info.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Horário</h4>
                  <p className="text-gray-300">{contactData.info.hours}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {contactData.socials.map((social, index) => {
                  const IconComponent = iconComponents[social.icon];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-white">
              Envie uma Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;