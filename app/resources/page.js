'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, ArrowRight, BookOpen, CheckCircle, Download, FileText, Video } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import SubscriptionModal from '../../components/SubscriptionModal';

export default function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        { name: 'Enterprise Training', href: '/services#enterprise-training' },
        { name: 'Website Development', href: '/website-development' }
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

  const demoVideos = [
    { title: 'Azure Synapse Analytics Demo', duration: '12 mins', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop', topic: 'Data Engineering' },
    { title: 'Power BI Embedded Analytics', duration: '8 mins', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop', topic: 'Analytics & BI' },
    { title: 'Databricks Lakehouse Architecture', duration: '15 mins', thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=450&fit=crop', topic: 'Data Platform' },
    { title: 'Azure OpenAI Integration', duration: '10 mins', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop', topic: 'AI & MLOps' }
  ];

  const whitepapers = [
    {
      title: 'The Practical Guide to AI Implementation for Mid-Market Companies',
      description: 'A step-by-step framework for organizations ready to move beyond AI exploration into actual implementation—based on real-world deployments across Canadian businesses.',
      pages: '30 pages',
      category: 'AI & ML',
      pdfUrl: '/whitepapers/practical-guide-ai-implementation.pdf'
    },
    {
      title: 'Building a Digitally-Ready Workforce',
      description: 'A Strategic Framework for Canadian Employers. A comprehensive guide to workforce digital transformation—covering assessment, strategy, funding, and sustainable learning cultures.',
      pages: '21 pages',
      category: 'Workforce Transformation',
      pdfUrl: '/whitepapers/building-digitally-ready-workforce.pdf'
    }
  ];


  const resourceTypes = [
    {
      icon: FileText,
      title: 'Whitepapers',
      description: 'In-depth industry insights, architecture patterns, and best practices from our consulting experience',
      count: '2 Documents',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Demo Videos',
      description: 'Watch our solutions in action with real-world demonstrations and technical walkthroughs',
      count: '4 Videos',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo - Far Left */}
            <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition shrink-0">
              <Image src="/favicon.svg" alt="Ripotek logo" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9 rounded-lg shadow-lg" />
              <div>
                <div className="text-base md:text-lg font-semibold tracking-tight bg-linear-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">Ripotek</div>
              </div>
            </a>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors flex items-center gap-1 py-2 text-sm xl:text-base whitespace-nowrap"
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
            </div>

            {/* Let's Talk Button - Far Right */}
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-3 xl:px-4 py-1.5 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-xs xl:text-sm shrink-0">Let's Talk</a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 ml-auto">
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900 stroke-[2.5]" /> : <Menu className="w-6 h-6 text-gray-900 stroke-[2.5]" />}
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
              <a href="/contact" className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition block text-center">Let's Talk</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Knowledge/Learning Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background - Learning/Knowledge themed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          >
            <source src="/resource-banner.mp4" type="video/mp4" />
          </video>

          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}></div>

          {/* Floating gradient orbs - Knowledge colors */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

            {/* Floating resource icons */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-teal-400/30 rounded-lg animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
              <BookOpen className="w-6 h-6 text-teal-400/40" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-blue-400/40 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <FileText className="w-6 h-6 text-blue-400/50" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-14 h-14 border border-purple-400/20 rounded-lg animate-float flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
              <Video className="w-7 h-7 text-purple-400/30" />
            </div>
            <div className="hidden md:flex absolute top-1/5 right-1/3 w-10 h-10 border-2 border-cyan-400/30 rounded-full animate-float items-center justify-center" style={{ animationDelay: '2s' }}>
              <Download className="w-5 h-5 text-cyan-400/40" />
            </div>
          </div>

          {/* Subtle scanline effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-30">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm border border-teal-400/30 animate-fadeIn">
            <BookOpen className="w-4 h-4" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            <span className="block">Resource </span>
            <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Library</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Explore our collection of whitepapers, demo videos, templates, and industry insights to accelerate your data and AI journey.
          </p>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

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

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
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

      {/* Resource Type Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Explore Our </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access expert insights and practical tools to power your data transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resourceTypes.map((type, idx) => (
              <a
                key={idx}
                href={type.title === 'Whitepapers' ? '#whitepapers' : '#demo-videos'}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition-all group block"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${type.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed min-h-[72px]">{type.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-semibold">{type.count}</span>
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Demo Videos */}
      <section id="demo-videos" className="py-20 px-4 bg-linear-to-br from-blue-50 to-teal-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Featured </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Demo Videos</span>
            </h2>
            <p className="text-xl text-gray-600">See our solutions in action with technical demonstrations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoVideos.map((video, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift card-shine group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-110 transition duration-500" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <Video className="w-8 h-8 text-teal-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full mb-3">
                    {video.topic}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <button className="text-teal-600 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Watch Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg text-lg font-semibold hover-lift">
              <Video className="w-5 h-5" />
              View All Videos
            </button>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section id="whitepapers" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Industry </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Whitepapers</span>
            </h2>
            <p className="text-xl text-gray-600">Deep-dive insights and architectural guidance from our experts</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {whitepapers.map((paper, idx) => (
              <div key={idx} className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-l-4 border-teal-500 group flex flex-col h-full">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">{paper.pages}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{paper.description}</p>
                    <div className="mt-auto">
                      <a
                        href={paper.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition font-semibold text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Blog & Insights */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            Latest Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Blog & Industry Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore expert articles, tutorials, and industry trends in data engineering, analytics, and AI. Stay ahead with insights from our team.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold hover-lift"
          >
            <BookOpen className="w-5 h-5" />
            Read Our Blog
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Capabilities Deck CTA */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm border border-teal-400/30">
            <FileText className="w-4 h-4" />
            Interactive Presentation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Explore Our Capabilities Deck</h2>
          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our services, training programs, technology expertise, and success stories in an immersive, interactive presentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources/capabilities-deck"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold hover-lift"
            >
              <ArrowRight className="w-5 h-5" /> View Capabilities Deck
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-teal-600 to-blue-900 rounded-3xl p-12 shadow-2xl text-center hover-lift">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe for Updates</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Be the first to know when we publish new whitepapers and demo videos. Plus get early access to our blog and newsletter.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg hover-lift"
            >
              Subscribe
            </button>
            <p className="text-teal-200 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/20 max-w-xs mx-auto">
              <div>
                <div className="text-3xl font-bold text-white mb-1">2</div>
                <div className="text-teal-200 text-sm">Whitepapers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">4</div>
                <div className="text-teal-200 text-sm">Demo Videos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Need Something Specific?</span>
            </h2>
            <p className="text-lg text-gray-600">Explore more ways to learn and connect with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/training#our-programs" className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine group text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Programs</h3>
              <p className="text-gray-600 mb-4">Hands-on courses with 85% placement rate</p>
              <span className="text-teal-600 font-semibold inline-flex items-center gap-2">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a href="/case-studies" className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine group text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 mb-4">Real transformations with measurable ROI</p>
              <span className="text-teal-600 font-semibold inline-flex items-center gap-2">
                View Success Stories <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a href="/contact" className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine group text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Mail className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">Let's discuss your data challenges</p>
              <span className="text-teal-600 font-semibold inline-flex items-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </span>
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
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Services</a></li>
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
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Case Studies</a></li>
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

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        portalId="342603298"
        formId="5770c0fe-6cc1-4891-b9b3-f1a45444371f"
        region="na3"
      />
    </div>
  );
}
