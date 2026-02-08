'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Calendar, FileText, GraduationCap, Briefcase, Send, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../../components/DiscoveryCallModal';
import Navbar from '../../components/Navbar';
import Script from 'next/script';

export default function ContactPage() {
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Calgary, Alberta',
      subvalue: 'Serving clients across Canada'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ripotek.com',
      link: 'mailto:info@ripotek.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 587 259-0033',
      link: 'tel:+15872590033'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/ripotek', color: 'hover:text-teal-600' },
    { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583595044786', color: 'hover:text-teal-600' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ripotekdata', color: 'hover:text-teal-600' },
    { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://twitter.com/Ripotek', color: 'hover:text-teal-600' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@ripotekacademy', color: 'hover:text-teal-600' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/ripotek-technologies', color: 'hover:text-teal-600' }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Discovery Call',
      description: 'Schedule a 30-minute consultation with our experts',
      action: () => setDiscoveryCallModalOpen(true),
      color: 'from-teal-600 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Request Proposal',
      description: 'Get a customized proposal for your project',
      href: '#send-message',
      color: 'from-blue-600 to-indigo-500'
    },
    {
      icon: GraduationCap,
      title: 'Enroll in Course',
      description: 'Join our next training cohort',
      href: '/training#our-programs',
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Join Talent Network',
      description: 'Connect with opportunities in data & AI',
      href: '/careers',
      color: 'from-orange-600 to-red-500'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Communication/Connection Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background - Connection/Communication themed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-handshake-between-two-business-people-4623-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-business-meeting-4629-large.mp4" type="video/mp4" />
          </video>

          {/* Animated connection pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}></div>

          {/* Floating gradient orbs - Warm connection colors */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 left-10 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-cyan-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <div className="absolute top-10 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

            {/* Floating communication icons */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-cyan-400/30 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
              <Mail className="w-6 h-6 text-cyan-400/40" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-teal-400/40 rounded-lg animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <Phone className="w-6 h-6 text-teal-400/50" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-14 h-14 border border-blue-400/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
              <Send className="w-7 h-7 text-blue-400/30" />
            </div>
            <div className="hidden md:flex absolute top-1/5 right-1/3 w-10 h-10 border-2 border-purple-400/30 rounded-lg animate-float items-center justify-center" style={{ animationDelay: '2s' }}>
              <MessageCircle className="w-5 h-5 text-purple-400/40" />
            </div>
          </div>

          {/* Subtle scanline effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            <span className="block">Get In </span>
            <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Let's discuss how we can help transform your data strategy or launch your data career. Our team is ready to connect.
          </p>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(5deg); }
            50% { transform: translateY(-8px) rotate(-5deg); }
            75% { transform: translateY(-18px) rotate(3deg); }
          }

          @keyframes gridFlow {
            0% { transform: translateY(0); }
            100% { transform: translateY(60px); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
            animation-fill-mode: both;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Quick Action Buttons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-gray-900">Quick </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Actions</span>
            </h2>
            <p className="text-center text-gray-600 mb-8">Choose the option that best fits your needs</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, idx) => {
                const Element = action.action ? 'button' : 'a';
                const props = action.action
                  ? { onClick: action.action }
                  : { href: action.href };

                return (
                  <Element
                    key={idx}
                    {...props}
                    className="bg-white rounded-2xl p-6 shadow-lg hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition-all group"
                  >
                    <div className={`w-14 h-14 bg-linear-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </Element>
                );
              })}
            </div>
          </div>

          {/* Calendly and Contact Form Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {/* Schedule a Discovery Call - Calendly */}
            <div id="book-call" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col w-full mx-auto">
                <div className="bg-linear-to-r from-teal-600 to-cyan-500 px-4 sm:px-8 py-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Schedule a Discovery Call</h2>
                  <p className="text-gray-100">Book a free 30-minute consultation</p>
                </div>
                <div className="p-4 sm:p-8 flex-1 flex items-center justify-center min-w-0">
                  <div className="bg-white rounded-xl overflow-hidden w-full max-w-full min-w-0" style={{ height: '650px' }}>
                    <iframe
                      src="https://calendly.com/paroyal007/30min"
                      width="100%"
                      height="650"
                      frameBorder="0"
                      title="Schedule a meeting with Ripotek"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Send Us a Message - Contact Form */}
            <div id="send-message" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col w-full mx-auto">
                <div className="bg-linear-to-r from-blue-900 to-teal-900 px-4 sm:px-8 py-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-gray-300">We'll get back to you within 24 hours</p>
                </div>

                {/* HubSpot Form */}
                <div className="p-4 sm:p-8 flex-1 overflow-y-auto min-w-0">
                  <div className="hs-form-frame" data-region="na3" data-form-id="6bb21db8-41fe-4ac2-be59-b54b4e761e11" data-portal-id="342603298"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-linear-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-xl hover-lift card-shine">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <info.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.label}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-teal-600 hover:text-teal-700 font-semibold text-lg block mb-1">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-semibold text-lg mb-1">{info.value}</p>
                  )}
                  {info.subvalue && <p className="text-gray-600 text-sm">{info.subvalue}</p>}
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-center text-gray-900 font-bold text-xl mb-2">Connect With Us</h3>
              <p className="text-center text-gray-600 mb-6">Connect with us on social media for updates, tips, and opportunities</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-md mx-auto">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gray-100 hover:bg-teal-100 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all text-gray-600 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Calgary, Alberta</h3>
              <p className="text-gray-600">Proudly serving clients across Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <div className="min-w-0">
                  <span className="font-semibold text-base md:text-lg tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
                  <span className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 block text-left">Design. Engineer. Deliver.</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-sm">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gray-300" /> Calgary, Alberta, Canada</div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-300" /> info@ripotek.com</div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-300" /> +1 587-259-0033</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/services#data-platform-build" className="text-gray-300 hover:text-teal-400 transition">Data Engineering</a></li>
                <li><a href="/services#analytics-&-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Data Services</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Training</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/training#power-bi-analyst" className="text-gray-300 hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training#azure-data-engineer" className="text-gray-300 hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training#databricks-engineer" className="text-gray-300 hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="/training#ai-engineer" className="text-gray-300 hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-sm">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Client Impact</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-300 text-sm">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-teal-400 transition">Refund Policy</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 pt-6 border-t border-gray-800">
              <a href="https://linkedin.com/company/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583595044786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotekacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://github.com/ripotek-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Discovery Call Modal */}
      <DiscoveryCallModal
        isOpen={discoveryCallModalOpen}
        onClose={() => setDiscoveryCallModalOpen(false)}
        portalId="342603298"
        formId="c4816a09-06d8-485e-baf9-8f7dfd14604e"
        region="na3"
      />

      {/* HubSpot Form Script */}
      <Script
        src="https://js-na3.hsforms.net/forms/embed/342603298.js"
        strategy="lazyOnload"
      />
    </div>
  );
}










