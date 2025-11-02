'use client';
/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, CheckCircle, Users, Award, TrendingUp, Database, Brain, BarChart3, Code, Zap, Clock, DollarSign, MapPin, Mail, Phone, Linkedin, Facebook, Instagram, MessageCircle, Download, Calendar, GraduationCap, Lightbulb, Target, Eye, Heart, Shield } from 'lucide-react';
export default function RipotekWebsite() {
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Success Stories', href: '#cases' },
    { name: 'Resources', href: '#resources' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
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

  const coreValues = [
    { icon: Target, title: 'Excellence', description: 'We deliver enterprise-grade solutions that exceed expectations and drive measurable business outcomes.' },
    { icon: Users, title: 'Partnership', description: 'Your success is our success. We work as an extension of your team, not just a vendor.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, bringing cutting-edge technologies and proven best practices.' },
    { icon: Heart, title: 'Empowerment', description: 'Knowledge transfer is built into everything we do. We equip your teams for long-term success.' }
  ];

  const services = [
    { icon: Shield, title: 'Strategy & Governance', description: 'Data architecture reviews, governance frameworks, and compliance roadmaps.', features: ['Architecture Assessment', 'Governance Design', 'Compliance Frameworks', 'Security Reviews'] },
    { icon: Database, title: 'Data Platform Build', description: 'Modern lakehouse implementations on Azure, Databricks, and Microsoft Fabric.', features: ['Azure Data Lake', 'Databricks Lakehouse', 'Fabric OneLake', 'ELT Pipelines'] },
    { icon: BarChart3, title: 'Analytics & BI', description: 'Enterprise Power BI dashboards and embedded analytics that drive decisions.', features: ['Power BI Dashboards', 'KPI Frameworks', 'Embedded Analytics', 'Semantic Models'] },
    { icon: Brain, title: 'MLOps & AI', description: 'Generative AI POCs, feature stores, and production-grade MLOps infrastructure.', features: ['GenAI Integration', 'Model Deployment', 'Feature Engineering', 'AI Governance'] },
    { icon: Zap, title: 'Managed Services', description: 'Ongoing platform administration, monitoring, and performance optimization.', features: ['24/7 Monitoring', 'Cost Optimization', 'Performance Tuning', 'Admin Support'] },
    { icon: GraduationCap, title: 'Enterprise Training', description: 'Live instructor-led training programs to upskill your teams.', features: ['Custom Curriculum', 'Hands-on Labs', 'Corporate Bootcamps', 'Certification Prep'] }
  ];

  const trainingPrograms = [
    { title: 'Power BI Analyst', duration: '12 Weeks', price: '$1,599', level: 'Beginner-Intermediate', icon: BarChart3, description: 'Master data visualization, DAX, and enterprise reporting with Power BI.' },
    { title: 'Azure Data Engineer', duration: '24 Weeks', price: '$3,999', level: 'Intermediate-Advanced', icon: Database, description: 'Become proficient in Azure Data Factory, Synapse Analytics, and data lakehouse architectures.' },
    { title: 'Databricks Engineer', duration: '24 Weeks', price: '$3,999', level: 'Intermediate-Advanced', icon: Zap, description: 'Learn Spark, Delta Lake, and advanced orchestration on Databricks platform.' },
    { title: 'BI Analyst', duration: '12 Weeks', price: '$1,799', level: 'Beginner-Intermediate', icon: TrendingUp, description: 'End-to-end BI skills from requirements gathering to dashboard delivery.' },
    { title: 'AI Engineer', duration: '24 Weeks', price: '$3,999', level: 'Advanced', icon: Brain, description: 'Build production-ready AI solutions with Azure OpenAI and MLOps.' },
    { title: 'Prompt Engineering', duration: '12 Weeks', price: '$1,599', level: 'Beginner-Intermediate', icon: Lightbulb, description: 'Master prompt design for large language models and generative AI.' }
  ];

  const caseStudies = [
    {
      title: 'Major Canadian Energy Producer',
      industry: 'Energy',
      icon: '🛢️',
      challenge: 'Legacy data warehouse with 15+ disconnected systems causing 72-hour reporting delays.',
      solution: 'Migrated to Azure Synapse with Databricks lakehouse and real-time Power BI dashboards.',
      outcomes: ['72 hours to 15 minutes reporting', '$2.4M annual savings', '40% infrastructure cost reduction', '28% less downtime'],
      tech: ['Azure Synapse', 'Databricks', 'Power BI', 'IoT Hub', 'Delta Lake']
    },
    {
      title: 'Top-5 Canadian Bank',
      industry: 'Financial Services',
      icon: '🏦',
      challenge: 'Fragmented risk reporting across 12 units with 3-week manual consolidation.',
      solution: 'Built unified Fabric lakehouse with automated ELT and executive dashboards.',
      outcomes: ['3 weeks to 2 days reporting', 'Eliminated 500+ Excel processes', '99.97% data accuracy', 'Real-time risk monitoring'],
      tech: ['Microsoft Fabric', 'Power BI Premium', 'Azure Data Factory', 'OneLake']
    },
    {
      title: 'Provincial Government Agency',
      industry: 'Public Sector',
      icon: '🏛️',
      challenge: 'Siloed citizen data across 8 departments hindering policy decisions.',
      solution: 'Designed governed data mesh with centralized Power BI portal for 500+ staff.',
      outcomes: ['Unified 23M citizen records', '65% faster policy analysis', '500+ staff analytics access', '34% better service delivery'],
      tech: ['Azure Purview', 'Power BI', 'Data Lake Gen2', 'Azure SQL', 'Functions']
    }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'Lead Data Architect', icon: '👩‍💼', bio: '15+ years designing enterprise data platforms for Fortune 500 clients.', creds: ['Azure Solutions Architect', 'Databricks Certified', 'TOGAF 9.2'] },
    { name: 'Marcus Johnson', role: 'Principal BI Consultant', icon: '👨‍💼', bio: 'Former Microsoft Power BI product team. Built BI for 40+ organizations.', creds: ['Power BI Specialist', 'MCSE Data Management', '12 years experience'] },
    { name: 'Priya Sharma', role: 'AI/ML Lead', icon: '👩‍🔬', bio: 'PhD in Machine Learning. Led MLOps transformations for major banks.', creds: ['PhD Machine Learning', 'Azure AI Engineer', 'AWS ML Specialty'] },
    { name: 'David Thompson', role: 'Senior Databricks Instructor', icon: '👨‍🏫', bio: '10 years in big data. Trained 2,000+ students in Spark and Delta Lake.', creds: ['Databricks Certified', 'Apache Spark Committer', 'Scala Expert'] },
    { name: 'Elena Rodriguez', role: 'Cloud Solutions Architect', icon: '👩‍💻', bio: 'Specialist in Azure and Fabric. Led 30+ zero-downtime migrations.', creds: ['Azure Solutions Architect', 'Microsoft Fabric Expert', '8 years experience'] }
  ];

  const testimonials = [
    { quote: "Ripotek transformed our data chaos into a governed analytics platform. Insights now come in minutes instead of weeks.", author: "Director of Analytics", company: "Major Canadian Energy Corp" },
    { quote: "The Azure Data Engineer program exceeded expectations. Within 90 days I landed a role at a top bank.", author: "Jessica M.", company: "Program Graduate" },
    { quote: "Their Databricks expertise is unmatched. They built our lakehouse and trained our team to own it.", author: "VP Technology", company: "Provincial Government" }
  ];

  const careers = [
    { title: 'Senior Data Architect', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB (Hybrid)' },
    { title: 'Power BI Instructor', dept: 'Training', type: 'Contract', location: 'Remote' },
    { title: 'Azure Solutions Consultant', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB' },
    { title: 'Student Success Coordinator', dept: 'Training', type: 'Full-Time', location: 'Calgary, AB' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
  src="/logo-light.svg" 
  alt="Ripotek Technology Logo" 
  className="h-12 w-auto"
/>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek Technology</div>
                <div className="text-xs text-gray-600 italic">Design. Engineer. Deliver.</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map(item => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">{item.name}</a>
              ))}
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Book Discovery Call</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map(item => (
                <a key={item.name} href={item.href} className="block text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
              ))}
              <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">Book Discovery Call</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6">🚀 Calgary's Premier Data & AI Consultancy</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Data Into <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Strategic Advantage</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">Enterprise consulting, training, and managed services in Azure, Databricks, Fabric, and AI. We architect solutions that scale, train teams that excel, and deliver outcomes that matter.</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl flex items-center gap-2 text-lg font-semibold">
                  <Calendar className="w-5 h-5" /> Book Discovery Call
                </button>
                <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 flex items-center gap-2 text-lg font-semibold">
                  <Download className="w-5 h-5" /> Download Capabilities
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Industry Leaders Choose Us</h3>
              <div className="space-y-4">
                {['Governed self-service BI at enterprise scale', 'Azure & Databricks modernization expertise', 'GenAI integration & production MLOps', '85% training-to-hire placement rate', 'Real-world projects, not theory'].map((item, i) => (
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

      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-semibold">TRUSTED TECHNOLOGY PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-4xl">{p.logo}</span>
                <span className="font-semibold text-lg">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Ripotek Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Founded in March 2023 and headquartered in Calgary, Alberta, we're a specialized consultancy focused on helping organizations unlock the full potential of their data and AI investments.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Eye className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">To be Canada's most trusted partner in data and AI transformation, recognized for delivering enterprise-grade solutions that empower organizations to compete on analytics and innovation while building self-sufficient teams through world-class training.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">We architect modern data platforms, accelerate AI adoption, and train technical professionals who drive business outcomes. Through deep expertise in Azure, Databricks, Fabric, and Power BI, we deliver governed, scalable solutions paired with knowledge transfer that sticks.</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((v, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4>
                  <p className="text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="text-6xl mb-4 text-center">{m.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1 text-center">{m.name}</h4>
                  <p className="text-teal-600 font-semibold mb-4 text-center">{m.role}</p>
                  <p className="text-gray-700 text-sm mb-4">{m.bio}</p>
                  <div className="space-y-2">
                    {m.creds.map((c, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-teal-600" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end consulting and managed services across the modern data and AI stack</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border-2 border-transparent hover:border-teal-500">
                <s.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-700 mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg text-lg font-semibold inline-flex items-center gap-2">
              Request Proposal <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="training" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Live instructor-led courses with hands-on projects, mentorship, and 85% job placement rate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trainingPrograms.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
                <p.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{p.duration}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />CAD {p.price}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full mb-4">{p.level}</div>
                <p className="text-gray-700 mb-6">{p.description}</p>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold">Enroll Now</button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <GraduationCap className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training-to-Hire Program</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">85% of our graduates secure positions within 90 days through our placement assistance program. Partner companies across Energy, Financial Services, and Public Sectors actively recruit our talent.</p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold inline-flex items-center gap-2">
              Join Our Talent Network <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real transformations. Measurable impact. Lasting partnerships.</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-l-4 border-teal-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{cs.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{cs.title}</h3>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">{cs.industry}</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-700">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-700">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Outcomes</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {cs.outcomes.map((o, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.tech.map((t, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-xl">★</span>)}
                </div>
                <p className="text-lg text-gray-700 italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-gray-600 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h2>
          <p className="text-xl text-gray-600 mb-12">Whitepapers, webinar replays, templates, and demo videos</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Download className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Whitepapers</h3>
              <p className="text-gray-600 mb-4">Industry insights and best practices</p>
              <button className="text-teal-600 font-semibold hover:text-teal-700">Browse Library →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Videos</h3>
              <p className="text-gray-600 mb-4">See our solutions in action</p>
              <button className="text-teal-600 font-semibold hover:text-teal-700">Watch Demos →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Templates</h3>
              <p className="text-gray-600 mb-4">Starter kits and frameworks</p>
              <button className="text-teal-600 font-semibold hover:text-teal-700">Download Templates →</button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-teal-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Blog & Newsletter</h3>
            <p className="text-xl text-gray-200 mb-6">Stay updated with the latest in data engineering and AI</p>
            <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur rounded-lg text-2xl font-bold">Coming Q2 2025</div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600">Build the future of data and AI with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work at Ripotek?</h3>
              <div className="space-y-4">
                {['Work on cutting-edge data and AI projects', 'Flexible hybrid work model', 'Competitive salary and benefits', 'Professional development budget', 'Collaborative team culture', 'Make real impact for clients'].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <p className="text-gray-200 leading-relaxed mb-6">At Ripotek, we believe in empowering our team members to grow, innovate, and make meaningful contributions. We foster an inclusive environment where diverse perspectives drive better solutions.</p>
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

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {careers.map((job, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-teal-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">{job.dept}</span>
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">{job.type}</span>
                      </div>
                    </div>
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>
                  <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-4">Don't see the right role? We're always looking for talented individuals.</p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your data strategy? Let's talk.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-200">Calgary, Alberta, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-200">info@ripotek.ca</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-200">+1 (403) 555-DATO</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white px-4 py-3 rounded-lg hover:shadow-md transition text-left text-sm font-semibold text-gray-700">
                    📅 Book Discovery Call
                  </button>
                  <button className="bg-white px-4 py-3 rounded-lg hover:shadow-md transition text-left text-sm font-semibold text-gray-700">
                    📄 Request Proposal
                  </button>
                  <button className="bg-white px-4 py-3 rounded-lg hover:shadow-md transition text-left text-sm font-semibold text-gray-700">
                    🎓 Enroll in Course
                  </button>
                  <button className="bg-white px-4 py-3 rounded-lg hover:shadow-md transition text-left text-sm font-semibold text-gray-700">
                    💼 Join Talent Network
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Consulting Services</option>
                    <option>Training Programs</option>
                    <option>Careers</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                </div>

                <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition font-semibold text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#services" className="hover:text-teal-400 transition">Data Architecture</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">MLOps & AI</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Managed Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#training" className="hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="#training" className="hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="#training" className="hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="#training" className="hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-teal-400 transition">About Us</a></li>
                <li><a href="#cases" className="hover:text-teal-400 transition">Success Stories</a></li>
                <li><a href="#careers" className="hover:text-teal-400 transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2023-2025 Ripotek Technology Inc. All rights reserved.</p>
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