'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search, Calendar, Clock, User, ArrowRight, Filter, MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import SubscriptionModal from '../../components/SubscriptionModal';

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
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

  const categories = ['All', 'Azure', 'Career', 'Best Practices', 'Business Intelligence'];

  const blogPosts = [
    {
      slug: 'navigating-ai-revolution',
      title: 'Navigating the AI Revolution: A Strategic Guide for Business Leaders',
      excerpt: 'Artificial Intelligence is no longer a futuristic concept—it\'s reshaping industries today. Learn how forward-thinking organizations are leveraging AI to gain competitive advantage.',
      category: 'Best Practices',
      author: 'Sarah Chen',
      date: 'October 28, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop'
    },
    {
      slug: 'upskilling-imperative',
      title: 'The Upskilling Imperative: Why Data Skills Are Non-Negotiable in 2025',
      excerpt: 'The data revolution is creating unprecedented opportunities—and widening skill gaps. Discover why upskilling in data engineering and analytics is critical for career growth.',
      category: 'Career',
      author: 'Marcus Johnson',
      date: 'October 22, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop'
    },
    {
      slug: 'process-automation-small-businesses',
      title: 'Why Process Automation Is No Longer Optional for Small Businesses',
      excerpt: 'Small businesses face mounting pressure to do more with less. Process automation powered by AI and low-code platforms is leveling the playing field against larger competitors.',
      category: 'Best Practices',
      author: 'David Thompson',
      date: 'October 15, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop'
    },
    {
      slug: 'azure-data-engineering-best-practices',
      title: '10 Azure Data Engineering Best Practices Every Team Should Know',
      excerpt: 'Building scalable, secure, and cost-efficient data platforms on Azure requires following proven patterns. Here are the essential best practices our team applies on every project.',
      category: 'Azure',
      author: 'Sarah Chen',
      date: 'October 8, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop'
    },
    {
      slug: 'transition-data-career-without-cs-degree',
      title: 'How to Transition Into a Data Career Without a CS Degree',
      excerpt: 'You don\'t need a computer science degree to break into data engineering or analytics. What you need is the right roadmap, skills, and mindset. Here\'s your blueprint.',
      category: 'Career',
      author: 'Marcus Johnson',
      date: 'October 1, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop'
    },
    {
      slug: 'power-bi-vs-tableau-2025',
      title: 'Power BI vs Tableau in 2025: Which BI Tool Should You Choose?',
      excerpt: 'The Power BI vs Tableau debate continues to dominate BI discussions. We break down the strengths, weaknesses, and ideal use cases for each platform based on real-world deployments.',
      category: 'Business Intelligence',
      author: 'David Thompson',
      date: 'September 24, 2024',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <div className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">Ripotek</div>
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

      {/* Hero Section - Content/Insights Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900"></div>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" poster="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-writer-typing-on-laptop-4621-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)', backgroundSize: '60px 60px', animation: 'gridFlow 20s linear infinite'}}></div>
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">
            <span>Blog & </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Expert perspectives on data engineering, AI, business intelligence, and career development in the modern data landscape.
          </p>
        </div>
        <style jsx>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fadeInUp{animation:fadeInUp 1s ease-out;animation-fill-mode:both}@keyframes gridFlow{0%{transform:translateY(0)}100%{transform:translateY(60px)}}`}</style>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-shine">
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 hover:scale-110" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-teal-600 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Get the latest insights on data engineering, AI, and career development delivered to your inbox</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        portalId="342603298"
        formId="5770c0fe-6cc1-4891-b9b3-f1a45444371f"
        region="na3"
      />

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
    </div>
  );
}
