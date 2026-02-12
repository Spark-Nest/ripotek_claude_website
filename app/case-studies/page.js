'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { MapPin, Mail, Phone, Award, Calendar, CheckCircle, Star, ArrowRight, TrendingUp, Clock, Shield, BarChart3, Zap, Users, Quote, ChevronRight, Sparkles, Target, Building2 } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Navbar from '../../components/Navbar';

const DiscoveryCallModal = dynamic(() => import('../../components/DiscoveryCallModal'), { ssr: false });

export default function CaseStudiesPage() {
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeStudy, setActiveStudy] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  const testimonials = [
    {
      quote: 'Ripotek did not just deliver technology — they transformed how we think about data across our entire organization.',
      author: 'Sarah Chen',
      role: 'VP Data & Analytics',
      company: 'Major Energy Corporation',
      color: 'teal'
    },
    {
      quote: 'The training programs produced job-ready professionals who hit the ground running. Best recruitment pipeline we have ever had.',
      author: 'Michael Roberts',
      role: 'Head of Data Engineering',
      company: 'Financial Services Firm',
      color: 'blue'
    },
    {
      quote: 'From strategy to implementation, the team demonstrated exceptional expertise in Azure, Databricks, and modern data architecture.',
      author: 'Jennifer Martinez',
      role: 'CTO',
      company: 'Healthcare Technology Provider',
      color: 'purple'
    }
  ];

  const stats = [
    { value: '$12M+', label: 'Client Value Delivered', icon: TrendingUp },
    { value: '50+', label: 'Enterprise Clients', icon: Building2 },
    { value: '15+', label: 'Industries Served', icon: Target },
    { value: '100%', label: 'Client Satisfaction', icon: Star }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Major Canadian Energy Producer',
      industry: 'Energy',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      challenge: 'Legacy data warehouse with 72-hour reporting delays, high infrastructure costs, and inability to support real-time decision-making for field operations.',
      solution: 'Transformed to modern Azure Synapse + Databricks lakehouse architecture with automated ETL pipelines, real-time analytics, and Power BI semantic layer.',
      results: [
        { metric: '72hrs to 15min', description: 'Reporting time reduction' },
        { metric: '$2.4M/year', description: 'Cost savings achieved' },
        { metric: '40%', description: 'Infrastructure cost reduction' },
        { metric: '28%', description: 'Less system downtime' }
      ],
      technologies: ['Azure Synapse', 'Databricks', 'Power BI', 'Azure Data Factory'],
      testimonial: {
        quote: 'Ripotek transformed our entire data infrastructure. What used to take days now happens in minutes.',
        author: 'VP of Data & Analytics',
        company: 'Fortune 500 Energy Company'
      },
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 2,
      title: 'Provincial Government Agency',
      industry: 'Public Sector',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop',
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
        quote: 'The team delivered a solution that not only met our technical requirements but also addressed our unique governance needs.',
        author: 'Chief Data Officer',
        company: 'Provincial Government Agency'
      },
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      title: 'National Financial Services Firm',
      industry: 'Financial Services',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
      challenge: 'Regulatory reporting taking 3 weeks per cycle, data quality issues, inability to identify fraud patterns, and scalability concerns with legacy systems.',
      solution: 'Built real-time risk analytics platform on Databricks with MLOps for fraud detection, automated regulatory reporting, and data quality framework.',
      results: [
        { metric: '3wks to 2 days', description: 'Regulatory reporting cycle' },
        { metric: '92%', description: 'Fraud detection accuracy' },
        { metric: '$8.5M', description: 'Fraud losses prevented annually' },
        { metric: '99.9%', description: 'Data quality score achieved' }
      ],
      technologies: ['Databricks', 'MLflow', 'Azure Synapse', 'Power BI'],
      testimonial: {
        quote: 'The fraud detection ML models alone have paid for the entire project multiple times over.',
        author: 'Head of Risk Management',
        company: 'National Financial Institution'
      },
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
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
        quote: 'We now have a complete view of patient care across all our locations while maintaining the highest privacy standards.',
        author: 'Chief Medical Information Officer',
        company: 'Regional Healthcare Network'
      },
      color: 'from-rose-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Manufacturing & Logistics Company',
      industry: 'Manufacturing',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      challenge: 'Supply chain visibility gaps, inventory optimization issues, equipment downtime costing millions, and inability to predict maintenance needs.',
      solution: 'Implemented IoT-enabled data platform with predictive maintenance ML models, supply chain analytics, and real-time operational dashboards.',
      results: [
        { metric: '45%', description: 'Reduction in unplanned downtime' },
        { metric: '$3.2M', description: 'Annual maintenance savings' },
        { metric: '30%', description: 'Inventory cost reduction' },
        { metric: '2-week', description: 'Supply chain visibility window' }
      ],
      technologies: ['Azure IoT Hub', 'Databricks', 'Power BI', 'Azure ML'],
      testimonial: {
        quote: 'Predictive maintenance has been a game-changer. We are fixing problems before they happen.',
        author: 'Director of Operations',
        company: 'Manufacturing Leader'
      },
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Retail & E-Commerce Platform',
      industry: 'Retail',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
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
        quote: 'The personalization engine powered by AI has transformed how we engage customers.',
        author: 'Chief Marketing Officer',
        company: 'National Retail Chain'
      },
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            preload="metadata"
          >
            <source src="/casestudies-banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-20 px-4 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6 animate-fadeInUp">
              <Award className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-200 font-medium">Proven Results Across Industries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.1] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Client{' '}
              <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Impact</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Real transformations that drive measurable business impact. See how we help organizations unlock the full potential of their data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => setDiscoveryCallModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-0.5">
                <Calendar className="w-5 h-5" /> Book Discovery Call
              </button>
              <a href="#stories" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Explore Stories <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-4 text-center group hover:bg-white/10 transition-all">
                <stat.icon className="w-5 h-5 text-teal-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <div className="text-xl md:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out both;
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SUCCESS STORIES — Alternating layout cards
      ═══════════════════════════════════════════════════════════════ */}
      <section id="stories" className="pt-10 md:pt-12 pb-12 md:pb-16 px-4 bg-gray-50 scroll-mt-24">
        <div
          id="stories-section"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore how we have helped organizations across industries transform their data capabilities
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                id={`study-${study.id}`}
                data-animate
                className={`transition-all duration-700 ${isVisible(`study-${study.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image Side */}
                  <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="aspect-4/3 relative">
                        <Image
                          src={study.image}
                          alt={`${study.title} case study`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>

                      {/* Floating result badges on image */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {study.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <div className="text-sm font-bold text-gray-900">{result.metric}</div>
                            <div className="text-xs text-gray-500">{result.description}</div>
                          </div>
                        ))}
                      </div>

                      {/* Industry badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`inline-flex items-center gap-2 bg-linear-to-r ${study.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                          <study.icon className="w-4 h-4" />
                          {study.industry}
                        </div>
                      </div>
                    </div>

                    {/* Decorative offset */}
                    <div className={`absolute -bottom-4 ${idx % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full bg-linear-to-br ${study.color} opacity-10 rounded-2xl -z-10`}></div>
                  </div>

                  {/* Content Side */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>

                    {/* Challenge */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span className="font-bold text-gray-900 text-sm">{result.metric}</span>
                          </div>
                          <span className="text-gray-500 text-xs">{result.description}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <Quote className="w-6 h-6 text-teal-400 mb-2" />
                        <p className="text-gray-700 italic text-sm leading-relaxed mb-3">&ldquo;{study.testimonial.quote}&rdquo;</p>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                            <span className="text-teal-600 font-bold text-xs">{study.testimonial.author[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">{study.testimonial.author}</p>
                            <p className="text-gray-500 text-xs">{study.testimonial.company}</p>
                          </div>
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

      {/* ═══════════════════════════════════════════════════════════════
          CLIENT TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div
          id="testimonials-section"
          data-animate
          className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible('testimonials-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Trusted Partners</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Client{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => {
              const borderColors = { teal: 'border-teal-500', blue: 'border-blue-500', purple: 'border-purple-500' };
              const bgColors = { teal: 'bg-teal-50', blue: 'bg-blue-50', purple: 'bg-purple-50' };
              const textColors = { teal: 'text-teal-600', blue: 'text-blue-600', purple: 'text-purple-600' };
              return (
                <div key={idx} className={`bg-white rounded-2xl p-8 border-l-4 ${borderColors[testimonial.color]} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className={`w-11 h-11 rounded-full ${bgColors[testimonial.color]} flex items-center justify-center`}>
                      <span className={`font-bold text-sm ${textColors[testimonial.color]}`}>{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.author}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-teal-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Award className="w-14 h-14 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your{' '}
            <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Success Story?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help you achieve similar transformative results with your data and AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setDiscoveryCallModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-0.5">
              <Calendar className="w-5 h-5" /> Book Discovery Call
            </button>
            <a href="/resources/capabilities-deck" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
              View Capabilities Deck <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
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
                <li><a href="/services#analytics-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
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
              <p className="text-gray-300 text-sm">&copy; 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-teal-400 transition">Refund Policy</a>
              </div>
            </div>

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
