'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, Linkedin, Facebook, Instagram, MessageCircle, Calendar, FileText, GraduationCap, Briefcase, Send } from 'lucide-react';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('consulting');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

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
      value: 'info@ripotek.ca',
      link: 'mailto:info@ripotek.ca'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (403) 555-DATO',
      link: 'tel:+14035553286'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:text-green-500' }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Discovery Call',
      description: 'Schedule a 30-minute consultation with our experts',
      href: '#',
      color: 'from-teal-600 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Request Proposal',
      description: 'Get a customized proposal for your project',
      href: '#',
      color: 'from-blue-600 to-indigo-500'
    },
    {
      icon: GraduationCap,
      title: 'Enroll in Course',
      description: 'Join our next training cohort',
      href: '/training',
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

  const inquiryTabs = [
    { id: 'consulting', label: 'Consulting Services', icon: Briefcase },
    { id: 'training', label: 'Training Programs', icon: GraduationCap },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'general', label: 'General Inquiry', icon: MessageCircle }
  ];

  const inquiryTypes = {
    consulting: [
      'Data Strategy & Governance',
      'Data Platform Build',
      'Analytics & BI',
      'MLOps & AI',
      'Managed Services',
      'Other'
    ],
    training: [
      'Power BI Analyst Program',
      'Azure Data Engineer Program',
      'Databricks Engineer Program',
      'AI Engineer Program',
      'Custom Corporate Training',
      'Other'
    ],
    careers: [
      'Data Engineer Position',
      'BI Consultant Position',
      'AI/ML Engineer Position',
      'Instructor Position',
      'General Application',
      'Other'
    ],
    general: [
      'Partnership Inquiry',
      'Media & Press',
      'Speaking Engagement',
      'General Question',
      'Other'
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, category: activeTab });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-xs text-gray-600 italic">Design. Engineer. Deliver.</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let's Talk</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="block">Get In </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Let's discuss how we can help transform your data strategy or launch your data career. Our team is ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Information Card */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-xl mb-16 hover-lift card-shine">
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
              <p className="text-center text-gray-700 font-semibold mb-4">Connect With Us</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover-lift transition-colors text-gray-600 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-gray-900">Quick </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Actions</span>
            </h2>
            <p className="text-center text-gray-600 mb-8">Choose the option that best fits your needs</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, idx) => (
                <a
                  key={idx}
                  href={action.href}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition-all group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form with Tabs */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-teal-900 px-8 py-6">
              <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-300">We'll get back to you within 24 hours</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex overflow-x-auto">
                {inquiryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setFormData(prev => ({ ...prev, inquiryType: '' }));
                    }}
                    className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-teal-600 text-teal-600 bg-white'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white"
                >
                  <option value="">Select an option...</option>
                  {inquiryTypes[activeTab].map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your project, goals, or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-teal-700 hover:to-cyan-600 transition shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center gap-2 hover-lift"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Calgary, Alberta</h3>
              <p className="text-gray-600">Proudly serving clients across Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="font-bold text-xl">Ripotek</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Design. Engineer. Deliver.</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-gray-400 hover:text-teal-400 transition"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-teal-400 transition">Data Architecture</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">MLOps & AI</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">Managed Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/training" className="hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="hover:text-teal-400 transition">Case Studies</a></li>
                <li><a href="/careers" className="hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
