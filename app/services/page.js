'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, CheckCircle, Shield, Database, BarChart3, Brain, Zap, GraduationCap, ArrowRight, Calendar, Download, MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import DiscoveryCallModal from '../../components/DiscoveryCallModal';

export default function ServicesPage() {
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

  const services = [
    {
      icon: Shield,
      title: 'Strategy & Governance',
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
      image: '🛡️'
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
      image: '🏗️'
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
      image: '📊'
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
      image: '🤖'
    },
    {
      icon: Zap,
      title: 'Managed Services',
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
      image: '⚡'
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
        'Microsoft certification prep (DP-203, PL-300, etc.)',
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
      image: '🎓'
    }
  ];

  const industries = [
    { name: 'Energy & Utilities', icon: '⚡', clients: '15+ clients', example: 'Real-time operations dashboards, predictive maintenance' },
    { name: 'Financial Services', icon: '💰', clients: '20+ clients', example: 'Risk analytics, fraud detection, regulatory reporting' },
    { name: 'Public Sector', icon: '🏛️', clients: '10+ clients', example: 'Citizen services analytics, cross-agency data sharing' },
    { name: 'Healthcare', icon: '🏥', clients: '5+ clients', example: 'Patient outcomes analysis, operational efficiency' }
  ];

  const deliveryModel = [
    { title: 'Discovery (2-4 weeks)', description: 'Current state assessment, requirements gathering, solution design', investment: '$15K-$30K' },
    { title: 'Implementation (3-6 months)', description: 'Platform build, pipeline development, dashboard creation, knowledge transfer', investment: '$100K-$300K' },
    { title: 'Managed Services (Ongoing)', description: 'Administration, monitoring, optimization, support', investment: '$8K-$25K/month' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
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
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-sm xl:text-base shrink-0">Let's Talk</a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 ml-auto">
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

      {/* Hero Section - Tech/Solutions Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background - Technology/Data themed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-network-with-futuristic-numbers-4814-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-background-with-binary-code-47458-large.mp4" type="video/mp4" />
          </video>

          {/* Animated circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridFlow 25s linear infinite'
          }}></div>

          {/* Floating gradient orbs - Tech colors */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-10 right-10 md:right-20 w-64 md:w-80 h-64 md:h-80 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-teal-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

            {/* Floating tech icons */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-purple-400/30 rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
              <Database className="w-6 h-6 text-purple-400/40 -rotate-45" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-blue-400/40 rounded-lg animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <BarChart3 className="w-6 h-6 text-blue-400/50" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-14 h-14 border border-teal-400/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
              <Brain className="w-7 h-7 text-teal-400/30" />
            </div>
            <div className="hidden md:flex absolute top-1/5 right-1/3 w-10 h-10 border-2 border-cyan-400/30 rounded-lg animate-float items-center justify-center" style={{ animationDelay: '2s' }}>
              <Zap className="w-5 h-5 text-cyan-400/40" />
            </div>
          </div>

          {/* Data stream effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.05) 2px, rgba(6, 182, 212, 0.05) 4px)'
          }}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 md:whitespace-nowrap animate-fadeInUp">
            <span>Our </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:whitespace-nowrap animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            End-to-end consulting and managed services across the modern data and AI stack
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
            100% { transform: translateY(50px); }
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

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={idx} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-7xl mb-6">{service.image}</div>
                    <service.icon className="w-12 h-12 text-teal-600 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-xl text-teal-600 font-semibold mb-4">{service.tagline}</p>
                    <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-6">What's Included</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-teal-600 font-semibold text-sm mb-3">{industry.clients}</p>
                <p className="text-gray-600 text-sm">{industry.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Delivery Model</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryModel.map((phase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-t-4 border-teal-600">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-600 font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-700 mb-4">{phase.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Investment</p>
                  <p className="text-2xl font-bold text-teal-600">{phase.investment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-2">
              <strong>Note:</strong> All engagements are customized to your specific needs.
            </p>
            <p className="text-gray-600">Contact us for a detailed proposal and ROI analysis.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your data challenges and design a solution that delivers real business value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setDiscoveryCallModalOpen(true)} className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Calendar className="w-5 h-5" /> Book Discovery Call
            </button>
            <a href="/case-studies" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              View Case Studies <ArrowRight className="w-5 h-5" />
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
              <a href="https://x.com/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
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

