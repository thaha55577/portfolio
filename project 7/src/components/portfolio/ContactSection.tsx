import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolio-data';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'NEURAL LINK',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'QUANTUM CHANNEL',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`
    },
    {
      icon: MapPin,
      label: 'PHYSICAL COORDINATES',
      value: personalInfo.location,
      href: null
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      default: return Mail;
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glitch-text">
            ESTABLISH CONNECTION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Initialize neural handshake protocol for collaborative quantum entanglement
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                  COMMUNICATION CHANNELS
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 text-sm font-mono">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4 font-mono">SOCIAL NETWORKS</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = getIcon(social.icon);
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                          aria-label={social.name}
                        >
                          <IconComponent size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                TRANSMISSION PROTOCOL
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cyan-400 text-sm font-mono mb-2">
                      IDENTITY_NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-colors"
                      placeholder="Enter your designation"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-cyan-400 text-sm font-mono mb-2">
                      NEURAL_ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-colors"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-cyan-400 text-sm font-mono mb-2">
                    TRANSMISSION_SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-colors"
                    placeholder="Define communication purpose"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyan-400 text-sm font-mono mb-2">
                    DATA_PAYLOAD
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white transition-colors resize-none"
                    placeholder="Encode your message here..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      TRANSMISSION SUCCESSFUL - Neural link established
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cyber-button primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>INITIATE TRANSMISSION</span>
                    </>
                  )}
                  <div className="cyber-button-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Watermark Footer */}
        <div className="mt-20 pt-8 border-t border-cyan-500/20">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-mono">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;