'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Download, Database, Code, FileText, Video, BookOpen, Mail, Calendar, CheckCircle, Zap } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function ResourcesPage() {
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
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' }
  ];

  const demoVideos = [
    { title: 'Azure Synapse Analytics Demo', duration: '12 mins', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop', topic: 'Data Engineering' },
    { title: 'Power BI Embedded Analytics', duration: '8 mins', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop', topic: 'Analytics & BI' },
    { title: 'Databricks Lakehouse Architecture', duration: '15 mins', thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=450&fit=crop', topic: 'Data Platform' },
    { title: 'Azure OpenAI Integration', duration: '10 mins', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop', topic: 'AI & MLOps' }
  ];

  const whitepapers = [
    { title: 'Modern Data Lakehouse Architecture', description: 'A comprehensive guide to building scalable lakehouse solutions on Azure and Databricks', pages: '24 pages', category: 'Architecture' },
    { title: 'Power BI Governance Framework', description: 'Enterprise patterns for governed self-service analytics at scale', pages: '18 pages', category: 'Governance' },
    { title: 'MLOps Best Practices', description: 'Production-grade machine learning operations on Azure ML and Databricks', pages: '32 pages', category: 'AI & ML' },
    { title: 'Data Mesh Implementation Guide', description: 'Strategies for implementing domain-oriented data architecture', pages: '28 pages', category: 'Strategy' }
  ];

  const templates = [
    { title: 'Azure Data Factory Starter Kit', description: 'Pre-built ADF pipelines for common ETL patterns', format: 'ARM Templates' },
    { title: 'Power BI Semantic Model Template', description: 'Enterprise-ready data model with best practices', format: 'PBIX File' },
    { title: 'Databricks Project Structure', description: 'Standardized notebook organization and CI/CD setup', format: 'GitHub Repo' },
    { title: 'Data Quality Framework', description: 'Reusable data validation and monitoring scripts', format: 'Python Package' }
  ];

  const resourceTypes = [
    {
      icon: FileText,
      title: 'Whitepapers',
      description: 'In-depth industry insights, architecture patterns, and best practices from our consulting experience',
      count: '12+ Documents',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Demo Videos',
      description: 'Watch our solutions in action with real-world demonstrations and technical walkthroughs',
      count: '15+ Videos',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Code,
      title: 'Templates',
      description: 'Accelerate your projects with starter kits, frameworks, and reusable code samples',
      count: '8+ Templates',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-xs text-gray-600 italic">Design. Engineer. Deliver.</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let's Talk</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            Knowledge Hub
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Resource </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Library</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of whitepapers, demo videos, templates, and industry insights to accelerate your data and AI journey.
          </p>
        </div>
      </section>

      {/* Resource Type Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Explore Our </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access expert insights and practical tools to power your data transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceTypes.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-semibold">{type.count}</span>
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Demo Videos */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Featured </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Demo Videos</span>
            </h2>
            <p className="text-xl text-gray-600">See our solutions in action with technical demonstrations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoVideos.map((video, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift card-shine group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Industry </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Whitepapers</span>
            </h2>
            <p className="text-xl text-gray-600">Deep-dive insights and architectural guidance from our experts</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {whitepapers.map((paper, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine border-l-4 border-teal-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">{paper.pages}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    <button className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition group-hover:gap-3">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-semibold transition">
              View All Whitepapers <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Templates & Starter Kits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Templates & </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Starter Kits</span>
            </h2>
            <p className="text-xl text-gray-600">Accelerate your projects with production-ready code and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((template, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                    <Code className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold">
                        {template.format}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="flex items-center gap-4">
                      <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition font-semibold text-sm">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 font-semibold text-sm transition">
                        View Docs <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
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

      {/* Download Capabilities Deck */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <Download className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Download Our Capabilities Deck</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive overview of our services, case studies, and technology expertise in one convenient PDF.
          </p>
          <a
            href="/ripotek-capabilities-deck.pdf"
            download
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold hover-lift"
          >
            <Download className="w-5 h-5" /> Download Capabilities Deck
          </a>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 to-blue-900 rounded-3xl p-12 shadow-2xl text-center hover-lift">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Subscribe for Updates</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Be the first to know when we publish new whitepapers, demo videos, and templates. Plus get early access to our blog and newsletter.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold shadow-lg hover-lift whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-teal-200 text-sm mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-teal-200 text-sm">Whitepapers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-teal-200 text-sm">Demo Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-teal-200 text-sm">Templates</div>
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
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Need Something Specific?</span>
            </h2>
            <p className="text-lg text-gray-600">Explore more ways to learn and connect with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/training" className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine group text-center">
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
