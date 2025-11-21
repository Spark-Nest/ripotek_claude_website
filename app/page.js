'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, CheckCircle, Users, Award, TrendingUp, Database, Brain, BarChart3, Code, Zap, Clock, DollarSign, Calendar, Download, GraduationCap, Lightbulb, Target, Sparkles, Building2, Briefcase, Play, ChevronRight, Star, Rocket, MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../components/DiscoveryCallModal';

export default function RipotekHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Trigger stats animation when section comes into view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        { name: 'Python Bootcamp', href: '/training#python-bootcamp' },
        { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' }
  ];

  const stats = [
    { value: 85, suffix: '%', label: 'Graduate Placement', sublabel: 'Within 90 Days', icon: GraduationCap },
    { value: 50, suffix: '+', label: 'Enterprise Clients', sublabel: 'Across Canada', icon: Building2 },
    { value: 2000, suffix: '+', label: 'Professionals Trained', sublabel: 'Since 2023', icon: Users },
    { value: 12, prefix: '$', suffix: 'M+', label: 'Client Value', sublabel: 'Measurable ROI', icon: TrendingUp }
  ];

  const partners = [
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
      url: 'https://azure.microsoft.com'
    },
    {
      name: 'Databricks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
      url: 'https://www.databricks.com'
    },
    {
      name: 'Microsoft Fabric',
      logo: '/partners/microsoft-fabric.png',
      url: 'https://www.microsoft.com/en-us/microsoft-fabric'
    },
    {
      name: 'Power BI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
      url: 'https://powerbi.microsoft.com'
    },
    {
      name: 'Snowflake',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/2560px-Snowflake_Logo.svg.png',
      url: 'https://www.snowflake.com'
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      url: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud Platform',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      url: 'https://cloud.google.com'
    }
  ];

  const servicesOverview = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build scalable data platforms with Azure, Databricks & Fabric. Modern lakehouse architectures that power your analytics.',
      link: '/services',
      color: 'from-blue-500 to-cyan-500',
      features: ['Data Lakehouse', 'ETL Pipelines', 'Real-time Processing']
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Transform data into insights with enterprise Power BI solutions. Self-service analytics at scale.',
      link: '/services',
      color: 'from-purple-500 to-pink-500',
      features: ['Power BI Dashboards', 'Semantic Models', 'Data Governance']
    },
    {
      icon: Brain,
      title: 'AI & MLOps',
      description: 'Deploy production-grade AI solutions. From GenAI integration to MLOps automation.',
      link: '/services',
      color: 'from-teal-500 to-green-500',
      features: ['GenAI Integration', 'ML Pipelines', 'Model Monitoring']
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      description: 'Accelerate your career with industry-leading programs. 85% job placement rate.',
      link: '/training',
      color: 'from-orange-500 to-red-500',
      features: ['Live Instruction', 'Hands-on Projects', 'Career Support']
    }
  ];

  const whyRipotek = [
    {
      icon: Target,
      title: 'Industry Expertise',
      description: 'Deep experience across Energy, Finance, Healthcare, and Public Sector',
      stat: '10+ Years'
    },
    {
      icon: Users,
      title: 'Knowledge Transfer',
      description: 'We train your teams to own and evolve the solutions we build',
      stat: '2000+ Trained'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Measurable business impact with every engagement',
      stat: '$12M+ ROI'
    },
    {
      icon: Sparkles,
      title: 'Modern Stack',
      description: 'Azure, Databricks, Fabric, Power BI, and cutting-edge AI',
      stat: '5 Partners'
    }
  ];

  const testimonials = [
    {
      quote: "Ripotek transformed our data infrastructure in 6 months. The team's expertise in Azure and Databricks is unmatched.",
      author: "Sarah Mitchell",
      role: "VP of Analytics",
      company: "Major Energy Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      quote: "Their training program gave me the skills to land my dream job. The hands-on approach and career support were invaluable.",
      author: "James Chen",
      role: "Data Engineer",
      company: "Financial Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "Working with Ripotek has been transformative. They don't just deliver solutions - they build capability.",
      author: "Maria Garcia",
      role: "Director of IT",
      company: "Healthcare Provider",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo - Far Left */}
            <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition shrink-0">
              <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg" />
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">Ripotek</div>
              </div>
            </a>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 font-medium transition-colors flex items-center gap-1 whitespace-nowrap text-sm xl:text-base py-2`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 -mt-px w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="pt-3">
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
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Let's Talk Button - Far Right */}
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-sm xl:text-base shrink-0">
              Let's Talk
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
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
              <a href="/contact" className="block w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Video Introduction Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-20">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        </div>

        {/* Video Container - Full Width Letterbox Style */}
        <div className="w-full mb-8 animate-fadeIn relative z-10" style={{ animationDelay: '0.1s' }}>
          <div className="relative overflow-hidden shadow-2xl bg-black group">
            {/* Video Element - Fixed 1920x540 aspect ratio (3.56:1) */}
            <div className="relative w-full" style={{ aspectRatio: '3.56', maxHeight: '540px' }}>
              <video
                autoPlay
                muted
                playsInline
                loop
                onPlay={() => setVideoPlaying(true)}
                onEnded={() => setVideoEnded(true)}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
                preload="auto"
              >
                {/* Using reliable stock video - replace with your own video when ready */}
                <source src="/videos/ripotek-intro-montage.mp4" type="video/mp4" />
              </video>

              {/* Subtle gradient overlay for branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Video branding overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 pointer-events-none">
                <div className="flex items-center gap-1.5 md:gap-2 bg-black/20 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 opacity-60">
                  <Image src="/favicon.svg" alt="Ripotek" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 rounded opacity-80" />
                  <span className="text-white font-semibold text-[10px] md:text-xs opacity-80">Ripotek Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Main Headline & CTA */}
          <div className="text-center max-w-5xl mx-auto space-y-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Engineer Intelligence.
              <span className="block mt-3 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                Deliver Impact.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Empowering enterprises with cutting-edge solutions in{' '}
              <span className="font-semibold text-teal-300">Azure</span>,{' '}
              <span className="font-semibold text-cyan-300">Databricks</span>,{' '}
              <span className="font-semibold text-blue-300">Fabric</span>, and{' '}
              <span className="font-semibold text-teal-300">AI</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => setDiscoveryCallModalOpen(true)}
                className="group relative bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Book Discovery Call</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <a
                href="/services"
                className="group bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:border-teal-400/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-teal-400/30 hover:bg-white/15 hover:border-teal-400/50 transition-all shadow-lg hover:shadow-teal-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">50+</div>
                <div className="text-sm text-gray-200 font-medium">Enterprise Clients</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-cyan-400/30 hover:bg-white/15 hover:border-cyan-400/50 transition-all shadow-lg hover:shadow-cyan-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">85%</div>
                <div className="text-sm text-gray-200 font-medium">Job Placement Rate</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-blue-400/30 hover:bg-white/15 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">$12M+</div>
                <div className="text-sm text-gray-200 font-medium">Client ROI Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Smooth Transition Wave */}
      <div className="relative h-24 bg-gradient-to-b from-slate-900 to-white">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Animated Stats Section */}
      <section id="stats-section" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-6 py-3 rounded-full shadow-md">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Delivering <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Measurable Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real outcomes that drive business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-500/20 text-center transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.prefix}{statsVisible ? stat.value : 0}{stat.suffix}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-6 py-3 rounded-full shadow-lg">
                What We Do
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="text-gray-900">Comprehensive </span>
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Data Solutions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From strategy to implementation, we deliver end-to-end data and AI solutions that drive real business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {servicesOverview.map((service, idx) => (
              <a
                key={idx}
                href={service.link}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-teal-500/20 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a href="/services" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg font-semibold transform hover:scale-105 duration-300">
              <span>Explore All Services</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Ripotek Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-6 py-3 rounded-full shadow-lg">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Built Different
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just consultants—we're your partners in transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRipotek.map((item, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-500/20 text-center transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-3">{item.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-4 py-2 rounded-full">
                Powered By Industry Leaders
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-900">Trusted </span>
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Technology Partners
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building world-class solutions with cutting-edge platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
            {partners.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center transition-all duration-300 hover:-translate-y-2"
                title={p.name}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 shadow-md group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-teal-500/20">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-gray-700 font-semibold text-lg">${p.name}</span>`;
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-teal-300 uppercase bg-teal-500/20 px-6 py-3 rounded-full shadow-lg border border-teal-400/30">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              Don't Just Take Our Word
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hear from the organizations and professionals we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-teal-300 text-sm">{testimonial.role}</div>
                    <div className="text-white/60 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mt-2 pb-1">
              Data Strategy?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help you unlock the full potential of your data and AI investments
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button onClick={() => setDiscoveryCallModalOpen(true)} className="group bg-teal-600 text-white px-10 py-5 rounded-xl hover:bg-teal-700 transition-all shadow-2xl hover:shadow-teal-500/50 flex items-center gap-3 text-lg font-semibold transform hover:scale-105 duration-300">
              <Calendar className="w-6 h-6" />
              <span>Book Free Discovery Call</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/ripotek-capabilities-deck.pdf" download className="group bg-white/10 text-white px-10 py-5 rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 flex items-center gap-3 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 duration-300">
              <Download className="w-6 h-6" />
              <span>Download Capabilities Deck</span>
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
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-300" /> +1 587-259-0033</div>
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
              <a href="https://linkedin.com/company/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
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
    </div>
  );
}
