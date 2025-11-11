'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, Award, Users, Target, Eye, Heart, Lightbulb, Shield, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function AboutPage() {
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
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' }
  ];

  const coreValues = [
    { icon: Target, title: 'Excellence', description: 'We deliver enterprise-grade solutions that exceed expectations and drive measurable business outcomes.' },
    { icon: Users, title: 'Partnership', description: 'Your success is our success. We work as an extension of your team, not just a vendor.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, bringing cutting-edge technologies and proven best practices.' },
    { icon: Heart, title: 'Empowerment', description: 'Knowledge transfer is built into everything we do. We equip your teams for long-term success.' }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'Lead Data Architect', bio: '15+ years designing enterprise data platforms for Fortune 500 clients.', creds: ['Azure Solutions Architect', 'Databricks Certified', 'TOGAF 9.2'], image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Marcus Johnson', role: 'Principal BI Consultant', bio: 'Former Microsoft Power BI product team. Built BI for 40+ organizations.', creds: ['Power BI Specialist', 'MCSE Data Management', '12 years experience'], image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
    { name: 'Priya Sharma', role: 'AI/ML Lead', bio: 'PhD in Machine Learning. Led MLOps transformations for major banks.', creds: ['PhD Machine Learning', 'Azure AI Engineer', 'AWS ML Specialty'], image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop' },
    { name: 'David Thompson', role: 'Senior Databricks Instructor', bio: '10 years in big data. Trained 2,000+ students in Spark and Delta Lake.', creds: ['Databricks Certified', 'Apache Spark Committer', 'Scala Expert'], image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
    { name: 'Elena Rodriguez', role: 'Cloud Solutions Architect', bio: 'Specialist in Azure and Fabric. Led 30+ zero-downtime migrations.', creds: ['Azure Solutions Architect', 'Microsoft Fabric Expert', '8 years experience'], image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' }
  ];

  const industries = [
    { name: 'Energy & Utilities', icon: '⚡', description: 'Real-time operations, predictive maintenance, regulatory compliance' },
    { name: 'Financial Services', icon: '💰', description: 'Risk analytics, fraud detection, regulatory reporting' },
    { name: 'Public Sector', icon: '🏛️', description: 'Citizen services, policy analytics, cross-agency data sharing' },
    { name: 'Healthcare', icon: '🏥', description: 'Patient outcomes, operational efficiency, research analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <Image src="/favicon.svg" alt="Ripotek logo" width={48} height={48} className="w-12 h-12 rounded-lg shadow-lg" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center leading-none">Ripotek</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2">
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
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let's Talk</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300">
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
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

      {/* Hero Section - Company/Team Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background - Team/Collaboration themed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-an-office-4933-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-45482-large.mp4" type="video/mp4" />
          </video>

          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}></div>

          {/* Floating gradient orbs - Company colors */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 left-10 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-blue-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <div className="absolute top-10 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

            {/* Floating icons representing company values */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
              <Users className="w-6 h-6 text-blue-400/40" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-teal-400/40 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <Target className="w-6 h-6 text-teal-400/50" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-14 h-14 border border-cyan-400/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
              <Heart className="w-7 h-7 text-cyan-400/30" />
            </div>
            <div className="hidden md:flex absolute top-1/5 right-1/3 w-10 h-10 border-2 border-purple-400/30 rounded-full animate-float items-center justify-center" style={{ animationDelay: '2s' }}>
              <Award className="w-5 h-5 text-purple-400/40" />
            </div>
          </div>

          {/* Subtle scanline effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            <span className="block">About </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Ripotek Technologies</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Founded in March 2023 in Calgary, Alberta, we're built on a vision to empower organizations through data-driven transformation and world-class training.
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

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              Ripotek Technologies Inc. emerged from a passion for solving complex data challenges and a commitment to bridging the skills gap in the rapidly evolving fields of data engineering, business intelligence, and artificial intelligence.
            </p>
            <p className="mb-6">
              With decades of combined experience across Energy, Financial Services, and Public Sector industries, our founding team recognized the need for a consulting firm that could not only deliver technical excellence but also transfer knowledge effectively.
            </p>
            <p>
              Today, we serve enterprise clients across North America, providing end-to-end consulting services from strategy to implementation, while simultaneously running comprehensive training programs that prepare the next generation of data professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
              <Eye className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-teal-600">Vision</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading data consulting and training organization in Western Canada, recognized for transforming how enterprises leverage data and for developing world-class data professionals who shape the industry's future.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-teal-600">Mission</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower organizations and individuals with cutting-edge data solutions and training that drive measurable business value. We are committed to delivering excellence through innovation, expertise, and a client-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-gray-900">Our Core </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="text-center hover-lift card-shine bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Industries We </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Serve</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine text-center">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-gray-900">Meet Our </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Industry veterans with deep expertise across data engineering, analytics, and AI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover-lift card-shine border border-gray-100">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h4>
                <p className="text-teal-600 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.creds.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking for consulting expertise or want to launch your data career, we'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold hover-lift">
              Get In Touch
            </a>
            <a href="/careers" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold hover-lift">
              View Careers
            </a>
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
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
                  <span className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 block text-left">Design. Engineer. Deliver.</span>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-base">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gray-300" /> Calgary, Alberta, Canada</div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-300" /> info@ripotek.com</div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-300" /> +1 306-999-3552</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/services#data-platform-build" className="text-gray-300 hover:text-teal-400 transition">Data Engineering</a></li>
                <li><a href="/services#analytics-&-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Services</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Training</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/training#power-bi-analyst" className="text-gray-300 hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training#azure-data-engineer" className="text-gray-300 hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training#databricks-engineer" className="text-gray-300 hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="/training#ai-engineer" className="text-gray-300 hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-300 text-base">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-base text-gray-300">
                <a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-teal-400 transition">Refund Policy</a>
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
