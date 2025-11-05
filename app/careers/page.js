'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, CheckCircle, Users, Award, Heart, MapPin, Briefcase, Calendar, Send } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'What we do', href: '/services' },
        { name: 'Strategy & Governance', href: '/services#strategy-&-governance' },
        { name: 'Data Platform Build', href: '/services#data-platform-build' },
        { name: 'Analytics & BI', href: '/services#analytics-&-bi' },
        { name: 'MLOps & AI', href: '/services#mlops-&-ai' },
        { name: 'Managed Services', href: '/services#managed-services' },
        { name: 'Enterprise Training', href: '/services#enterprise-training' }
      ]
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'Ripotek Academy', href: '/training' },
        { name: 'All Programs', href: '/training#our-programs' },
        { name: 'Power BI Analyst', href: '/training#power-bi-analyst' },
        { name: 'Azure Data Engineer', href: '/training#azure-data-engineer' },
        { name: 'Databricks Engineer', href: '/training#databricks-engineer' },
        { name: 'AI Engineer', href: '/training#ai-engineer' },
        { name: 'BI Analyst', href: '/training#business-intelligence-analyst' },
        { name: 'Prompt Engineering', href: '/training#prompt-engineering' },
        { name: 'Python for Data', href: '/training#python-for-data' },
        { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' }
  ];

  const careers = [
    { title: 'Senior Data Architect', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', salary: '$130K - $165K + bonus', slug: 'senior-data-architect' },
    { title: 'Power BI Instructor', dept: 'Training', type: 'Contract', location: 'Remote', salary: '$80-$120/hour', slug: 'power-bi-instructor' },
    { title: 'Azure Solutions Consultant', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB', salary: '$95K - $130K + bonus', slug: 'azure-solutions-consultant' },
    { title: 'Student Success Coordinator', dept: 'Training', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', salary: '$55K - $70K', slug: 'student-success-coordinator' },
    { title: 'Junior Data Engineer', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', salary: '$65K - $80K', slug: 'junior-data-engineer' }
  ];

  const benefits = [
    'Work on cutting-edge data and AI projects',
    'Flexible hybrid work model',
    'Competitive salary and benefits',
    'Professional development budget',
    'Collaborative team culture',
    'Make real impact for clients'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo as Home Link */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-sm md:text-base text-gray-700 font-semibold italic">Design. Engineer. Deliver.</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                Let's Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/contact" className="block w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build the future of data and AI with us. Work on cutting-edge projects that transform how organizations leverage their data.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#positions" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg font-semibold hover-lift">
                <Briefcase className="w-5 h-5" /> View Open Positions
              </a>
              <a href="#culture" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 flex items-center gap-2 text-lg font-semibold hover-lift">
                Learn About Our Culture <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at Ripotek Section */}
      <section id="culture" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Why Work at </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Ripotek?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about data, innovation, and making a real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h3>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl p-8 shadow-lg text-white hover-lift card-shine">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                At Ripotek, we believe in empowering our team members to grow, innovate, and make meaningful contributions. We foster an inclusive environment where diverse perspectives drive better solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-teal-400" />
                  <span>Mentorship programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-teal-400" />
                  <span>Community engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-teal-400" />
                  <span>Recognition & rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Open </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {careers.map((job, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-teal-500 hover-lift card-shine">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">{job.dept}</span>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">{job.type}</span>
                    </div>
                    <p className="text-gray-900 font-semibold text-lg">{job.salary}</p>
                  </div>
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </p>
                <a href={`/careers/${job.slug}`} className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg hover-lift card-shine">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see the right role?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about data and AI. Send us your resume and let's explore how you can contribute to our mission.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold hover-lift">
              <Send className="w-5 h-5" />
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a team that's transforming how organizations leverage data and AI. Apply today and help us build the future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#positions" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Briefcase className="w-5 h-5" /> View All Positions
            </a>
            <a href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Calendar className="w-5 h-5" /> Schedule a Chat
            </a>
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
                <span className="font-extrabold text-2xl md:text-3xl tracking-tight">Ripotek</span>
              </div>
              <p className="text-gray-300 text-base md:text-lg font-semibold">Design. Engineer. Deliver.</p>
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

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-400 text-sm">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="#" className="hover:text-teal-400 transition">Refund Policy</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 pt-6 border-t border-gray-800">
              <a href="https://www.linkedin.com/company/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://github.com/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
