'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, CheckCircle, Users, Award, TrendingUp, Database, Brain, BarChart3, Code, Zap, Clock, DollarSign, Calendar, Download, GraduationCap, Lightbulb, Target, Sparkles, Building2, Briefcase } from 'lucide-react';

export default function RipotekHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);

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
        { name: 'Strategy & Governance', href: '/services#strategy' },
        { name: 'Data Platform Build', href: '/services#platform' },
        { name: 'Analytics & BI', href: '/services#analytics' },
        { name: 'MLOps & AI', href: '/services#ai' },
        { name: 'Managed Services', href: '/services#managed' }
      ]
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'All Programs', href: '/training' },
        { name: 'Power BI Analyst', href: '/training#powerbi' },
        { name: 'Azure Data Engineer', href: '/training#azure' },
        { name: 'Databricks Engineer', href: '/training#databricks' },
        { name: 'AI Engineer', href: '/training#ai' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const stats = [
    { value: '85%', label: 'Graduate Placement', sublabel: 'Within 90 Days' },
    { value: '50+', label: 'Enterprise Clients', sublabel: 'Across Canada' },
    { value: '2,000+', label: 'Professionals Trained', sublabel: 'Since 2023' },
    { value: '$12M+', label: 'Client Value', sublabel: 'Measurable ROI' }
  ];

  const partners = [
    { name: 'Microsoft Azure', logo: '☁️' },
    { name: 'Databricks', logo: '🧱' },
    { name: 'Microsoft Fabric', logo: '🎯' },
    { name: 'Power BI', logo: '📊' },
    { name: 'Snowflake', logo: '❄️' }
  ];

  const servicesOverview = [
    { icon: Database, title: 'Data Engineering', description: 'Modern lakehouse architectures on Azure, Databricks & Fabric', link: '/services' },
    { icon: BarChart3, title: 'Analytics & BI', description: 'Enterprise Power BI dashboards and semantic modeling', link: '/services' },
    { icon: Brain, title: 'AI & MLOps', description: 'GenAI integration and production-grade machine learning', link: '/services' },
    { icon: GraduationCap, title: 'Professional Training', description: 'Live instructor-led programs with 85% placement rate', link: '/training' }
  ];

  const whyRipotek = [
    { icon: Target, title: 'Industry Expertise', description: 'Deep experience in Energy, Finance, and Public Sector' },
    { icon: Users, title: 'Knowledge Transfer', description: 'We train your teams to own the solutions we build' },
    { icon: Award, title: 'Proven Results', description: '$12M+ in measurable client value since 2023' },
    { icon: Sparkles, title: 'Modern Stack', description: 'Azure, Databricks, Fabric, Power BI, and cutting-edge AI' }
  ];

  const featuredTraining = [
    { title: 'Azure Data Engineer', duration: '24 Weeks', price: '$3,999', level: 'Intermediate-Advanced', icon: Database },
    { title: 'Power BI Analyst', duration: '12 Weeks', price: '$1,599', level: 'Beginner-Intermediate', icon: BarChart3 },
    { title: 'AI Engineer', duration: '24 Weeks', price: '$3,999', level: 'Advanced', icon: Brain }
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
                <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-xs text-gray-600 italic">Design. Engineer. Deliver.</div>
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
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                Let's Talk
              </button>
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
              <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
                Let's Talk
              </button>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Calgary's Premier Data & AI Consultancy
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Data Into
                <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  Strategic Advantage
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enterprise consulting, training, and managed services in Azure, Databricks, Fabric, and AI. We architect solutions that scale, train teams that excel, and deliver outcomes that matter.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg font-semibold hover-lift">
                  <Calendar className="w-5 h-5" /> Book Discovery Call
                </a>
                <a href="/services" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 flex items-center gap-2 text-lg font-semibold hover-lift">
                  Explore Services <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center hover-lift cursor-pointer">
                    <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Why Industry Leaders Choose Us</h3>
              <div className="space-y-4">
                {[
                  'Governed self-service BI at enterprise scale',
                  'Azure & Databricks modernization expertise',
                  'GenAI integration & production MLOps',
                  '85% training-to-hire placement rate',
                  'Real-world projects, not theory'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-semibold">TRUSTED TECHNOLOGY PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 hover-lift cursor-pointer">
                <span className="text-4xl">{p.logo}</span>
                <span className="font-semibold text-lg">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ripotek Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Why </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Ripotek?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just consultants—we're your partners in data transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRipotek.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">What We </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions from strategy to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {servicesOverview.map((service, idx) => (
              <a
                key={idx}
                href={service.link}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition-all group"
              >
                <service.icon className="w-12 h-12 text-teal-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-teal-600 font-semibold inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a href="/services" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg text-lg font-semibold hover-lift">
              View All Services <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Training Highlight */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Launch Your </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Data Career</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading training with hands-on projects and 85% job placement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredTraining.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
                <program.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    CAD {program.price}
                  </span>
                </div>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full mb-6">
                  {program.level}
                </div>
                <a href="/training" className="block w-full text-center bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold">
                  Learn More
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover-lift card-shine">
            <GraduationCap className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training-to-Hire Program</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              85% of our graduates secure positions within 90 days. Partner companies across Energy, Financial Services, and Public Sectors actively recruit our talent.
            </p>
            <a href="/training" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
              Explore All Programs <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Proven </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600">Real transformations that drive measurable business impact</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover-lift card-shine border-l-4 border-teal-500">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop" alt="Energy case study" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-6xl">🛢️</div>
              </div>

              <div className="md:col-span-2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Major Canadian Energy Producer</h3>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Energy</span>
                </div>

                <p className="text-gray-700 mb-6">
                  Transformed legacy data warehouse into modern Azure Synapse + Databricks lakehouse, reducing reporting from 72 hours to 15 minutes and saving $2.4M annually.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">72 hours to 15 minutes reporting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">$2.4M annual savings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">40% infrastructure cost reduction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">28% less downtime</span>
                  </div>
                </div>

                <a href="/case-studies" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/case-studies" className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-semibold">
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you unlock the full potential of your data and AI investments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Calendar className="w-5 h-5" /> Book Discovery Call
            </a>
            <a href="/services" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Download className="w-5 h-5" /> Download Capabilities Deck
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
                <span className="font-bold text-xl">Ripotek</span>
              </div>
              <p className="text-gray-400 text-sm">Design. Engineer. Deliver.</p>
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
