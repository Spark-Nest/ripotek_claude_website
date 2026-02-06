'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, Award, Calendar, CheckCircle, Download, Star, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../../components/DiscoveryCallModal';

export default function CaseStudiesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);

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


  const testimonials = [
    {
      quote: 'Ripotek did not just deliver technology—they transformed how we think about data across our entire organization.',
      author: 'Sarah Chen',
      role: 'VP Data & Analytics',
      company: 'Major Energy Corporation'
    },
    {
      quote: 'The training programs produced job-ready professionals who hit the ground running. Best recruitment pipeline we have ever had.',
      author: 'Michael Roberts',
      role: 'Head of Data Engineering',
      company: 'Financial Services Firm'
    },
    {
      quote: 'From strategy to implementation, the team demonstrated exceptional expertise in Azure, Databricks, and modern data architecture.',
      author: 'Jennifer Martinez',
      role: 'CTO',
      company: 'Healthcare Technology Provider'
    }
  ];

  const stats = [
    { value: '$12M+', label: 'Client Value Delivered', sublabel: 'Measurable ROI' },
    { value: '50+', label: 'Enterprise Clients', sublabel: 'Across Canada' },
    { value: '15+', label: 'Industries Served', sublabel: 'Deep Expertise' },
    { value: '100%', label: 'Client Satisfaction', sublabel: 'Reference Available' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Major Canadian Energy Producer',
      industry: 'Energy',
      emoji: '⚡',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
      challenge: 'Legacy data warehouse with 72-hour reporting delays, high infrastructure costs, and inability to support real-time decision-making for field operations.',
      solution: 'Transformed to modern Azure Synapse + Databricks lakehouse architecture with automated ETL pipelines, real-time analytics, and Power BI semantic layer.',
      results: [
        { metric: '72 hours to 15 minutes', description: 'Reporting time reduction' },
        { metric: '$2.4M annual', description: 'Cost savings achieved' },
        { metric: '40%', description: 'Infrastructure cost reduction' },
        { metric: '28%', description: 'Less system downtime' }
      ],
      technologies: ['Azure Synapse', 'Databricks', 'Power BI', 'Azure Data Factory'],
      testimonial: {
        quote: 'Ripotek transformed our entire data infrastructure. What used to take days now happens in minutes, and our teams are making better decisions faster.',
        author: 'VP of Data & Analytics',
        company: 'Fortune 500 Energy Company'
      }
    },
    {
      id: 2,
      title: 'Provincial Government Agency',
      industry: 'Public Sector',
      emoji: '🏛️',
      image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop',
      challenge: 'Siloed data across 15+ departments, manual reporting consuming 200+ staff hours weekly, compliance concerns, and lack of data governance.',
      solution: 'Implemented Microsoft Fabric-based enterprise data platform with governed self-service BI, automated compliance reporting, and centralized data catalog.',
      results: [
        { metric: '200+ hours', description: 'Saved weekly in reporting' },
        { metric: '15 departments', description: 'Unified on single platform' },
        { metric: '100%', description: 'Compliance reporting automated' },
        { metric: '6 months', description: 'From start to full deployment' }
      ],
      technologies: ['Microsoft Fabric', 'Power BI', 'Azure Purview', 'Power Apps'],
      testimonial: {
        quote: 'The team delivered a solution that not only met our technical requirements but also addressed our unique governance and compliance needs.',
        author: 'Chief Data Officer',
        company: 'Provincial Government Agency'
      }
    },
    {
      id: 3,
      title: 'National Financial Services Firm',
      industry: 'Financial Services',
      emoji: '💳',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop',
      challenge: 'Regulatory reporting taking 3 weeks per cycle, data quality issues, inability to identify fraud patterns, and scalability concerns with legacy systems.',
      solution: 'Built real-time risk analytics platform on Databricks with MLOps for fraud detection, automated regulatory reporting, and data quality framework.',
      results: [
        { metric: '3 weeks to 2 days', description: 'Regulatory reporting cycle' },
        { metric: '92%', description: 'Fraud detection accuracy' },
        { metric: '$8.5M', description: 'Fraud losses prevented annually' },
        { metric: '99.9%', description: 'Data quality score achieved' }
      ],
      technologies: ['Databricks', 'MLflow', 'Azure Synapse', 'Power BI'],
      testimonial: {
        quote: 'The fraud detection ML models alone have paid for the entire project multiple times over. This is genuinely transformative.',
        author: 'Head of Risk Management',
        company: 'National Financial Institution'
      }
    },
    {
      id: 4,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      emoji: '🏥',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
      challenge: 'Patient data fragmented across 8 clinic locations, no unified view of patient care, operational inefficiencies, and HIPAA compliance complexity.',
      solution: 'Designed HIPAA-compliant Azure data platform with real-time patient analytics, operational dashboards, and predictive models for resource planning.',
      results: [
        { metric: '8 locations', description: 'Unified patient records' },
        { metric: '35%', description: 'Improvement in patient flow' },
        { metric: '25%', description: 'Reduction in wait times' },
        { metric: '100%', description: 'HIPAA compliance maintained' }
      ],
      technologies: ['Azure SQL', 'Power BI', 'Azure ML', 'Azure Security'],
      testimonial: {
        quote: 'We now have a complete view of patient care across all our locations while maintaining the highest security and privacy standards.',
        author: 'Chief Medical Information Officer',
        company: 'Regional Healthcare Network'
      }
    },
    {
      id: 5,
      title: 'Manufacturing & Logistics Company',
      industry: 'Manufacturing',
      emoji: '🏭',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
      challenge: 'Supply chain visibility gaps, inventory optimization issues, equipment downtime costing millions, and inability to predict maintenance needs.',
      solution: 'Implemented IoT-enabled data platform with predictive maintenance ML models, supply chain analytics, and real-time operational dashboards.',
      results: [
        { metric: '45%', description: 'Reduction in unplanned downtime' },
        { metric: '$3.2M', description: 'Annual maintenance savings' },
        { metric: '30%', description: 'Inventory carrying cost reduction' },
        { metric: '2-week', description: 'Supply chain visibility window' }
      ],
      technologies: ['Azure IoT Hub', 'Databricks', 'Power BI', 'Azure ML'],
      testimonial: {
        quote: 'Predictive maintenance has been a game-changer. We are fixing problems before they happen, not after production stops.',
        author: 'Director of Operations',
        company: 'Manufacturing Leader'
      }
    },
    {
      id: 6,
      title: 'Retail & E-Commerce Platform',
      industry: 'Retail',
      emoji: '🛒',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
      challenge: 'Customer churn increasing, personalization limited, marketing ROI unclear, and real-time inventory sync issues across 200+ stores.',
      solution: 'Built customer 360 platform with GenAI-powered personalization, marketing attribution models, and real-time inventory synchronization.',
      results: [
        { metric: '28%', description: 'Reduction in customer churn' },
        { metric: '3.5x', description: 'Marketing ROI improvement' },
        { metric: '200+ stores', description: 'Real-time inventory sync' },
        { metric: '42%', description: 'Increase in conversion rate' }
      ],
      technologies: ['Azure OpenAI', 'Databricks', 'Power BI', 'Azure Synapse'],
      testimonial: {
        quote: 'The personalization engine powered by AI has transformed how we engage customers. Revenue per customer is up significantly.',
        author: 'Chief Marketing Officer',
        company: 'National Retail Chain'
      }
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
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-3 xl:px-4 py-1.5 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-xs xl:text-sm shrink-0">
              Let's Talk
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900 stroke-[2.5]" /> : <Menu className="w-6 h-6 text-gray-900 stroke-[2.5]" />}
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
              <a href="/contact" className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition block text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            preload="metadata"
          >
            <source src="/casestudies-banner.mp4" type="video/mp4" />
          </video>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'gridFlow 20s linear infinite'
            }}></div>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Floating themed icons */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-teal-400/30 rounded-full animate-float hidden md:flex items-center justify-center">
            <Award className="w-6 h-6 text-teal-400/40" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-blue-400/30 rounded-lg animate-float hidden md:flex items-center justify-center" style={{animationDelay: '1s'}}>
            <Star className="w-8 h-8 text-blue-400/40" />
          </div>
          <div className="absolute top-1/2 right-1/3 w-10 h-10 border-2 border-cyan-400/30 rounded-full animate-float hidden md:flex items-center justify-center" style={{animationDelay: '2s'}}>
            <CheckCircle className="w-5 h-5 text-cyan-400/40" />
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 opacity-10" style={{
            background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px, transparent 4px)',
            pointerEvents: 'none'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm animate-fadeIn">
              <Award className="w-4 h-4" />
              Proven Results Across Industries
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Real transformations that drive measurable business impact. From strategy to implementation, see how we help organizations unlock the full potential of their data and AI investments.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 hover-lift border border-white/20 animate-fadeInUp" style={{animationDelay: `${0.3 + i * 0.1}s`}}>
                <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes gridFlow {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(50px);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Success </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how we have helped organizations across industries transform their data capabilities
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift card-shine border-l-4 border-teal-500">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.title} case study`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-6xl">{study.emoji}</div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-semibold">
                        {study.industry}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">Results</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-teal-600">{result.metric}</span>
                              <span className="text-gray-700"> {result.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-teal-500">
                        <div className="flex gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                        <div className="text-sm">
                          <span className="font-bold text-gray-900">{study.testimonial.author}</span>
                          <span className="text-gray-600"> - {study.testimonial.company}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Client </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600">What our partners say about working with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-teal-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar transformative results with your data and AI initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setDiscoveryCallModalOpen(true)} className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Calendar className="w-5 h-5" /> Book Discovery Call
            </button>
            <a href="/resources/capabilities-deck"
              className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <ArrowRight className="w-5 h-5" /> View Capabilities Deck
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









