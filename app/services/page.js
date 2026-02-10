'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Shield, Database, BarChart3, Brain, Zap, GraduationCap, ArrowRight, Calendar, MapPin, Mail, Phone, Globe, Sparkles } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../../components/DiscoveryCallModal';
import Navbar from '../../components/Navbar';

export default function ServicesPage() {
  const [discoveryCallModalOpen, setDiscoveryCallModalOpen] = useState(false);

  const services = [
    {
      icon: Shield,
      title: 'Data Strategy & Governance',
      tagline: 'Build the foundation for data-driven success',
      description: 'Data architecture reviews, governance frameworks, and compliance roadmaps tailored to your industry.',
      features: [
        'Current state assessment and gap analysis',
        'Target architecture design and roadmaps',
        'Governance framework design (policies, standards, procedures)',
        'Data catalog and metadata management strategy',
        'Security and access control frameworks',
        'Compliance roadmaps (GDPR, PIPEDA, SOC 2, HIPAA)',
        'Data quality assessment and improvement plans',
        'Executive workshops and stakeholder alignment'
      ],
      outcomes: [
        'Clear data strategy aligned to business goals',
        'Governed, secure, and compliant data ecosystems',
        'Stakeholder buy-in and organizational readiness',
        'ROI-justified technology investments'
      ],
      image: '/data_strategy.jpg'
    },
    {
      icon: Database,
      title: 'Data Platform Build',
      tagline: 'Modern, scalable data infrastructure',
      description: 'Modern lakehouse implementations on Azure, Databricks, and Microsoft Fabric with scalable ELT pipelines.',
      features: [
        'Azure Data Lake Gen2 design and implementation',
        'Databricks lakehouse architecture (Unity Catalog, Delta Lake)',
        'Microsoft Fabric OneLake migration and setup',
        'ELT pipeline development (Azure Data Factory, Databricks)',
        'Medallion architecture (Bronze/Silver/Gold layers)',
        'Incremental load patterns and CDC implementation',
        'Data quality frameworks and monitoring',
        'DevOps and CI/CD for data pipelines'
      ],
      outcomes: [
        'Scalable, cost-efficient data platforms',
        'Reduced data latency (hours to minutes)',
        '40-60% lower infrastructure costs vs. legacy systems',
        'Self-service data access with governance'
      ],
      image: '/data_platform.jpg'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      tagline: 'Turn data into actionable insights',
      description: 'Enterprise Power BI dashboards, semantic models, and embedded analytics that drive decision-making.',
      features: [
        'Enterprise Power BI dashboard development',
        'Semantic model design (star schema, snowflake)',
        'Complex DAX formula development',
        'KPI framework definition and tracking',
        'Embedded analytics (Power BI Embedded, APIs)',
        'Row-level security and dynamic access control',
        'Performance optimization (aggregations, incremental refresh)',
        'Mobile-responsive report design'
      ],
      outcomes: [
        'Real-time visibility into business performance',
        'Democratized analytics (500+ users enabled)',
        'Faster decision-making (weeks to hours)',
        '90%+ user adoption rates'
      ],
      image: '/analytics_bi.jpg'
    },
    {
      icon: Brain,
      title: 'MLOps & AI',
      tagline: 'Production-ready AI solutions',
      description: 'Generative AI POCs, feature stores, model serving, and production-grade MLOps infrastructure.',
      features: [
        'Generative AI proof-of-concepts (Azure OpenAI, LangChain)',
        'RAG (Retrieval-Augmented Generation) systems',
        'Feature store design (Databricks Feature Store)',
        'Model training pipelines (Azure ML, Databricks)',
        'Model serving and deployment (real-time, batch)',
        'MLOps CI/CD pipelines',
        'Model monitoring and drift detection',
        'Responsible AI frameworks and governance'
      ],
      outcomes: [
        'Production-ready AI applications',
        'Reduced model deployment time (months to weeks)',
        'Automated model retraining and monitoring',
        'Governed, explainable AI systems'
      ],
      image: '/mlops_ai.jpg'
    },
    {
      icon: Zap,
      title: 'Managed Data Services',
      tagline: 'Ongoing platform excellence',
      description: 'Ongoing platform administration, monitoring, performance optimization, and cost control.',
      features: [
        '24/7 platform monitoring and alerting',
        'Performance tuning and optimization',
        'Cost optimization and FinOps',
        'User access management',
        'Capacity planning and scaling',
        'Incident response and resolution',
        'Patch management and upgrades',
        'Monthly health reports and KPI tracking'
      ],
      outcomes: [
        '99.9% platform uptime SLA',
        '30-50% cost reduction through optimization',
        '< 4 hour incident response time',
        'Proactive issue prevention'
      ],
      image: '/managed_data_services.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Enterprise Training',
      tagline: 'Upskill your teams',
      description: 'Live instructor-led training programs designed to upskill your teams on modern data platforms.',
      features: [
        'Custom curriculum design for your tech stack',
        'Hands-on lab environments',
        'Corporate bootcamps (1-3 weeks intensive)',
        'Train-the-trainer programs',
        'On-site or virtual delivery',
        'Post-training support (30 days)',
        'Team assessments and skill gap analysis'
      ],
      outcomes: [
        'Self-sufficient internal teams',
        'Reduced reliance on external consultants',
        'Faster project delivery',
        'Improved employee retention'
      ],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
    },
    {
      icon: Globe,
      title: 'Digital Platforms',
      tagline: 'Professional websites built for growth',
      description: 'Modern, fast, and conversion-optimized websites using React and Tailwind CSS. From concept to launch in weeks.',
      features: [
        'Custom website design & development',
        'Mobile-responsive, SEO-optimized builds',
        'E-commerce & booking system integration',
        'CRM & marketing tool integrations',
        'Content management setup',
        'Performance optimization',
        'Analytics & conversion tracking',
        'Ongoing maintenance & support'
      ],
      outcomes: [
        'Professional online presence in 2-8 weeks',
        'Mobile-first, fast-loading websites',
        'Data-driven insights from day one',
        'Scalable, maintainable codebase'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      link: '/website-development'
    }
  ];

  const industries = [
    { name: 'Energy & Utilities', icon: Zap, clients: '15+ clients', example: 'Real-time operations dashboards, predictive maintenance', image: '/energy_utilities.jpg' },
    { name: 'Financial Services', icon: BarChart3, clients: '20+ clients', example: 'Risk analytics, fraud detection, regulatory reporting', image: '/financial_services.jpg' },
    { name: 'Public Sector', icon: Shield, clients: '10+ clients', example: 'Citizen services analytics, cross-agency data sharing', image: '/public_sector.jpg' },
    { name: 'Healthcare', icon: CheckCircle, clients: '5+ clients', example: 'Patient outcomes analysis, operational efficiency', image: '/healthcare.jpg' }
  ];

  const deliveryModel = [
    { title: 'Advisory & Discovery', timeline: '2-4 weeks', description: 'Current state assessment, requirements gathering, solution design', investment: '$15K-$30K', image: '/advisory_discovery.jpg' },
    { title: 'Solution Delivery', timeline: '3-6 months', description: 'Platform build, pipeline development, dashboard creation, knowledge transfer', investment: '$100K-$300K', image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop' },
    { title: 'Managed Services', timeline: 'Ongoing', description: 'Administration, monitoring, optimization, support', investment: '$8K-$25K/month', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Immersive */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/our_services.jpg"
            alt="Ripotek services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-800/80 to-teal-900/85"></div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-20 px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-200 font-medium">End-to-end data & AI consulting</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Our <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              End-to-end consulting and managed services across the modern data and AI stack
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => setDiscoveryCallModalOpen(true)} className="group bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-500/25 flex items-center gap-3 text-lg font-semibold">
                <Calendar className="w-5 h-5" /> Book Advisory Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3 text-lg font-semibold">
                Explore Services
              </a>
            </div>
          </div>

          {/* Service quick-links */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Shield, label: 'Strategy', href: '#data-strategy-&-governance' },
              { icon: Database, label: 'Platforms', href: '#data-platform-build' },
              { icon: BarChart3, label: 'Analytics', href: '#analytics-&-bi' },
              { icon: Brain, label: 'AI & ML', href: '#mlops-&-ai' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3 hover:bg-white/10 hover:border-teal-400/30 transition-all cursor-pointer group"
              >
                <item.icon className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium text-sm">{item.label}</span>
              </a>
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

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver solutions that transform how you use data
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, idx) => (
              <div key={idx} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Image side */}
                  <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2">
                          {service.outcomes.map((outcome, i) => (
                            <span key={i} className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Decorative offset */}
                    <div className={`absolute -z-10 -bottom-4 ${idx % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full rounded-3xl bg-teal-100/60`}></div>
                  </div>

                  {/* Content side */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-teal-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-teal-600 font-semibold">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">What's Included</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.link && (
                      <a href={service.link} className="inline-flex items-center gap-2 mt-6 text-teal-600 font-semibold hover:text-teal-700 transition group">
                        Learn more about this service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=60"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/95"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-400 tracking-widest uppercase mb-3">Industry Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Industries We <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deep domain expertise across the sectors that matter most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <industry.icon className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{industry.name}</h3>
                  <p className="text-teal-400 font-semibold text-sm mb-3">{industry.clients}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Our <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Delivery Model</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to delivering measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryModel.map((phase, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Image background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{phase.timeline}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white border border-gray-100 border-t-0 rounded-b-2xl flex flex-col h-[280px]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{phase.description}</p>
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Investment</p>
                    <p className="text-2xl font-bold text-teal-600">{phase.investment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 mb-2">
              <strong>Note:</strong> All engagements are customized to your specific needs.
            </p>
            <p className="text-gray-600">Contact us for a detailed proposal and ROI analysis.</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Bleed Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
            alt="Modern office workspace"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-800/80 to-teal-900/85"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your data challenges and design a solution that delivers real business value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setDiscoveryCallModalOpen(true)} className="group bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-500/25 text-lg font-semibold inline-flex items-center gap-3">
              <Calendar className="w-5 h-5" /> Book Advisory Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/case-studies" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-lg font-semibold inline-flex items-center gap-3">
              View Client Impact <ArrowRight className="w-5 h-5" />
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
    </div>
  );
}
