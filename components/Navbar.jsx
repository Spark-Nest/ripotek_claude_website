'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight, ArrowRight, Mail } from 'lucide-react';

const navigation = [
  {
    name: 'Business Solutions',
    href: '/services',
    description: 'Transform your business with cutting-edge data and AI solutions tailored to your industry.',
    featured: {
      title: 'Explore All Services',
      description: 'Discover how we can help you unlock the power of your data.',
      href: '/services',
      cta: 'View Services'
    },
    sections: [
      {
        title: 'Industries',
        items: [
          { name: 'Energy & Utilities', description: 'Real-time operations and predictive maintenance', href: '/services#industries' },
          { name: 'Financial Services', description: 'Risk analytics and fraud detection', href: '/services#industries' },
          { name: 'Healthcare', description: 'Patient outcomes and operational efficiency', href: '/services#industries' },
          { name: 'Public Sector', description: 'Citizen services and compliance', href: '/services#industries' },
          { name: 'Manufacturing', description: 'Supply chain and IoT analytics', href: '/services#industries' }
        ]
      },
      {
        title: 'Services',
        items: [
          { name: 'Strategy & Governance', description: 'Data architecture and compliance frameworks', href: '/services#strategy-&-governance' },
          { name: 'Data Platform Build', description: 'Azure, Databricks, and Microsoft Fabric', href: '/services#data-platform-build' },
          { name: 'Analytics & BI', description: 'Power BI and self-service analytics', href: '/services#analytics-&-bi' },
          { name: 'MLOps & AI', description: 'Machine learning and GenAI solutions', href: '/services#mlops-&-ai' },
          { name: 'Managed Services', description: 'Ongoing support and optimization', href: '/services#managed-services' },
          { name: 'Website Development', description: 'Professional web solutions for modern businesses', href: '/website-development' }
        ]
      }
    ],
    quickLinks: [
      { name: 'View Case Studies', href: '/case-studies' },
      { name: 'Capabilities Deck', href: '/resources/capabilities-deck' }
    ]
  },
  {
    name: 'Ripotek Academy',
    href: '/training',
    description: 'Learn from industry experts and build job-ready skills in data engineering, analytics, and AI.',
    featured: {
      title: 'All Training Programs',
      description: 'Explore our comprehensive curriculum designed for career success.',
      href: '/training#our-programs',
      cta: 'Browse Programs'
    },
    sections: [
      {
        title: 'Certification Programs',
        items: [
          { name: 'Power BI Analyst', description: '12 weeks • $700 • PL-300 prep', href: '/training#power-bi-analyst' },
          { name: 'Azure Data Engineer', description: '24 weeks • $1,500 • DP-203 prep', href: '/training#azure-data-engineer' },
          { name: 'Databricks Engineer', description: '24 weeks • $1,500 • Spark & Delta Lake', href: '/training#databricks-engineer' },
          { name: 'AI Engineer', description: '24 weeks • $1,800 • AI-102 prep', href: '/training#ai-engineer' }
        ]
      },
      {
        title: 'Specialized Courses',
        items: [
          { name: 'Business Intelligence Analyst', description: '12 weeks • $700 • End-to-end BI', href: '/training#business-intelligence-analyst' },
          { name: 'Prompt Engineering', description: '12 weeks • $700 • GenAI mastery', href: '/training#prompt-engineering' },
          { name: 'Python Bootcamp', description: '12 weeks • $700 • Data manipulation', href: '/training#python-for-data' },
          { name: 'ADF Masterclass', description: '12 weeks • $1,000 • Pipeline mastery', href: '/training#azure-data-factory-masterclass' }
        ]
      }
    ],
    quickLinks: [
      { name: 'Compare Programs', href: '/training#our-programs' },
      { name: 'Enterprise Training', href: '/services#enterprise-training' }
    ]
  },
  {
    name: 'Events & Resources',
    href: '/resources',
    description: 'Stay informed with insights, white papers, and expert content on data and AI.',
    featured: {
      title: 'Capabilities Deck',
      description: 'View Our Capabilities Deck',
      href: '/resources/capabilities-deck',
      cta: 'View Deck'
    },
    sections: [
      {
        title: 'Content',
        items: [
          { name: 'Blog & Insights', description: 'Latest trends and best practices', href: '/blog' },
          { name: 'White Papers', description: 'In-depth research and guides', href: '/resources#whitepapers' },
          { name: 'Demo Videos', description: 'See our solutions in action', href: '/resources#videos' },
          { name: 'Case Studies', description: 'Real client success stories', href: '/case-studies' }
        ]
      },
      {
        title: 'Tools',
        items: [
          { name: 'Capabilities Deck', description: 'Download our service overview', href: '/resources/capabilities-deck' },
          { name: 'Syllabi', description: 'View all program syllabi', href: '/training#our-programs' },
          { name: 'YouTube Channel', description: 'Tutorials and webinars', href: 'https://youtube.com/@ripotekacademy' },
          { name: 'GitHub', description: 'Open source resources', href: 'https://github.com/ripotek-technologies' }
        ]
      }
    ],
    quickLinks: [
      { name: 'Subscribe for Updates', href: '/resources#subscribe' },
      { name: 'Upcoming Events', href: '/resources#events' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    description: 'Transparent pricing for consulting services and training programs.',
    featured: {
      title: 'Get a Custom Quote',
      description: 'Contact us for tailored solutions that fit your budget.',
      href: '/contact',
      cta: 'Contact Us'
    },
    sections: [
      {
        title: 'Consulting',
        items: [
          { name: 'Discovery', description: '2-4 weeks • $15K-$30K', href: '/pricing#discovery' },
          { name: 'Implementation', description: '3-6 months • $100K-$300K', href: '/pricing#implementation' },
          { name: 'Managed Services', description: 'Ongoing • $8K-$25K/month', href: '/pricing#managed' },
          { name: 'Enterprise', description: 'Custom pricing', href: '/contact' }
        ]
      },
      {
        title: 'Training',
        items: [
          { name: 'Individual Courses', description: '$700-$1,800 per program', href: '/training' },
          { name: 'Corporate Training', description: 'Team discounts available', href: '/services#enterprise-training' },
          { name: 'Payment Plans', description: 'Split your investment', href: '/pricing#payment' },
          { name: 'Scholarships', description: 'Financial aid options', href: '/pricing#scholarships' }
        ]
      }
    ],
    quickLinks: [
      { name: 'Website Pricing', href: '/website-pricing' },
      { name: 'Book a Discovery Call', href: '/contact' }
    ]
  },
  {
    name: 'About Us',
    href: '/about',
    description: 'Learn about our mission, meet the team, and explore career opportunities.',
    featured: {
      title: 'Join Our Team',
      description: 'We are always looking for talented data professionals.',
      href: '/careers',
      cta: 'View Careers'
    },
    sections: [
      {
        title: 'Company',
        items: [
          { name: 'About Ripotek', description: 'Our story and mission', href: '/about' },
          { name: 'Meet the Team', description: 'The people behind Ripotek', href: '/about#team' },
          { name: 'Careers at Ripotek', description: 'Join our growing team', href: '/careers' },
          { name: 'Partners', description: 'Microsoft, Databricks & more', href: '/#partners' }
        ]
      },
      {
        title: 'Connect',
        items: [
          { name: 'Get in Touch', description: 'Contact us for inquiries', href: '/contact' },
          { name: 'Subscribe for Updates', description: 'Newsletter and updates', href: '/resources#subscribe' },
          { name: 'LinkedIn', description: 'Follow us for insights', href: 'https://linkedin.com/company/ripotek' },
          { name: 'Support', description: 'Help center and FAQs', href: '/resources#support' }
        ]
      }
    ],
    quickLinks: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Client Testimonials', href: '/case-studies#testimonials' }
    ]
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition shrink-0">
            <Image 
              src="/favicon.svg" 
              alt="Ripotek logo" 
              width={40} 
              height={40} 
              className="w-9 h-9 md:w-10 md:h-10 rounded-lg shadow-lg" 
            />
            <div>
              <div className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">
                Ripotek
              </div>
              <div className="text-[10px] text-gray-500 tracking-wide">Design. Engineer. Deliver.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100/80 flex items-center gap-1 ${
                    activeDropdown === item.name ? 'text-teal-600 bg-gray-100/80' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Mega Menu Dropdown */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[900px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        </div>

                        <div className="flex gap-8">
                          {/* Sections */}
                          <div className="flex-1 grid grid-cols-2 gap-8">
                            {item.sections.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                  {section.title}
                                </h4>
                                <ul className="space-y-3">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="group block"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                                          {subItem.name}
                                        </div>
                                        <div className="text-xs text-gray-500 group-hover:text-gray-600">
                                          {subItem.description}
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Featured Card */}
                          <div className="w-56 shrink-0">
                            <Link 
                              href={item.featured.href}
                              className="block group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-5 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                  <h4 className="font-bold text-lg mb-2">{item.featured.title}</h4>
                                  <p className="text-sm text-white/90 mb-4">{item.featured.description}</p>
                                  <div className="flex items-center gap-2 text-sm font-medium">
                                    {item.featured.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </div>
                              </div>
                            </Link>

                            {/* Quick Links */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                Quick Links
                              </h4>
                              <ul className="space-y-2">
                                {item.quickLinks.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      href={link.href}
                                      className="text-sm text-gray-600 hover:text-teal-600 flex items-center gap-1 transition-colors"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <ChevronRight className="w-3 h-3" />
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2.5 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-200 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggleMobileDropdown(item.name)}
                  className="flex items-center justify-between w-full text-gray-900 font-semibold py-3"
                >
                  <span>{item.name}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      mobileDropdown === item.name ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {mobileDropdown === item.name && (
                  <div className="pb-4 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-gray-600 px-2">{item.description}</p>
                    
                    {/* Sections */}
                    {item.sections.map((section) => (
                      <div key={section.title} className="px-2">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="block py-2"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="text-sm font-medium text-gray-800">{subItem.name}</div>
                                <div className="text-xs text-gray-500">{subItem.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Featured Card */}
                    <Link 
                      href={item.featured.href}
                      className="block mx-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-4 text-white">
                        <h4 className="font-bold mb-1">{item.featured.title}</h4>
                        <p className="text-sm text-white/90">{item.featured.description}</p>
                      </div>
                    </Link>

                    {/* Quick Links */}
                    <div className="px-2 pt-2">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Quick Links
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.quickLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg font-semibold mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="w-5 h-5" />
                  Let's Talk
                </Link>
              </div>
            </div>
          )}
        </nav>
      );
}
