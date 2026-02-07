'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: 'Business Solutions',
    href: '/services',
    description: 'Transform your business with cutting-edge data and AI solutions tailored to your industry.',
    leftLinks: [
      { name: 'Industries', href: '/services#industries' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    cards: [
      {
        name: 'Data Engineering',
        description: 'Build scalable data platforms with Azure, Databricks & Microsoft Fabric.',
        href: '/services#data-platform-build',
        bg: 'bg-amber-400',
        text: 'text-gray-900'
      },
      {
        name: 'Analytics & BI',
        description: 'Power BI dashboards and self-service analytics at enterprise scale.',
        href: '/services#analytics-&-bi',
        bg: 'bg-teal-600',
        text: 'text-white'
      },
      {
        name: 'MLOps & AI',
        description: 'Deploy machine learning models and GenAI solutions at scale.',
        href: '/services#mlops-&-ai',
        bg: 'bg-sky-500',
        text: 'text-white'
      },
      {
        name: 'Website Development',
        description: 'Professional web solutions for modern businesses.',
        href: '/website-development',
        bg: 'bg-rose-400',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'Strategy & Governance', href: '/services#strategy-&-governance' },
      { name: 'Managed Services', href: '/services#managed-services' },
      { name: 'Capabilities Deck', href: '/resources/capabilities-deck' }
    ]
  },
  {
    name: 'Ripotek Academy',
    href: '/training',
    description: 'Learn from industry experts and build job-ready skills in data engineering, analytics, and AI.',
    leftLinks: [
      { name: 'All Programs', href: '/training#our-programs' },
      { name: 'Enterprise Training', href: '/services#enterprise-training' }
    ],
    cards: [
      {
        name: 'Power BI Analyst',
        description: '12 weeks \u2022 $700 \u2022 PL-300 certification prep.',
        href: '/training#power-bi-analyst',
        bg: 'bg-violet-500',
        text: 'text-white'
      },
      {
        name: 'Azure Data Engineer',
        description: '24 weeks \u2022 $1,500 \u2022 DP-203 certification prep.',
        href: '/training#azure-data-engineer',
        bg: 'bg-cyan-500',
        text: 'text-white'
      },
      {
        name: 'AI Engineer',
        description: '24 weeks \u2022 $1,800 \u2022 AI-102 certification prep.',
        href: '/training#ai-engineer',
        bg: 'bg-amber-500',
        text: 'text-gray-900'
      },
      {
        name: 'Databricks Engineer',
        description: '24 weeks \u2022 $1,500 \u2022 Spark & Delta Lake.',
        href: '/training#databricks-engineer',
        bg: 'bg-rose-500',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'BI Analyst', href: '/training#business-intelligence-analyst' },
      { name: 'Prompt Engineering', href: '/training#prompt-engineering' },
      { name: 'Python Bootcamp', href: '/training#python-bootcamp' },
      { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
    ]
  },
  {
    name: 'Events & Resources',
    href: '/resources',
    description: 'Stay informed with insights, white papers, and expert content on data and AI.',
    leftLinks: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/resources#whitepapers' },
      { name: 'Demo Videos', href: '/resources#videos' }
    ],
    cards: [
      {
        name: 'Capabilities Deck',
        description: 'View our Capabilities Deck.',
        href: '/resources/capabilities-deck',
        bg: 'bg-teal-500',
        text: 'text-white'
      },
      {
        name: 'YouTube Channel',
        description: 'Tutorials, webinars, and expert walkthroughs.',
        href: 'https://youtube.com/@ripotekacademy',
        bg: 'bg-red-500',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'Syllabi', href: '/training#our-programs' },
      { name: 'GitHub', href: 'https://github.com/ripotek-technologies' },
      { name: 'Subscribe for Updates', href: '/resources#subscribe' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    description: 'Transparent pricing for consulting services and training programs.',
    leftLinks: [
      { name: 'Training Pricing', href: '/pricing#training-pricing' },
      { name: 'Website Pricing', href: '/website-pricing' }
    ],
    cards: [
      {
        name: 'Discovery',
        description: '2\u20134 weeks \u2022 $15K\u2013$30K \u2022 Assessment & roadmap.',
        href: '/pricing#discovery',
        bg: 'bg-sky-500',
        text: 'text-white'
      },
      {
        name: 'Implementation',
        description: '3\u20136 months \u2022 $100K\u2013$300K \u2022 Full platform build.',
        href: '/pricing#implementation',
        bg: 'bg-amber-400',
        text: 'text-gray-900'
      },
      {
        name: 'Managed Services',
        description: 'Ongoing \u2022 $8K\u2013$25K/month \u2022 Support & optimization.',
        href: '/pricing#managed',
        bg: 'bg-teal-600',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'Enterprise Custom', href: '/contact' },
      { name: 'Payment Plans', href: '/pricing#payment' },
      { name: 'Book a Discovery Call', href: '/contact' }
    ]
  },
  {
    name: 'About Us',
    href: '/about',
    description: 'Learn about our mission, meet the team, and explore career opportunities at Ripotek.',
    leftLinks: [
      { name: 'About Ripotek', href: '/about' },
      { name: 'Meet the Team', href: '/about#team' },
      { name: 'Partners', href: '/#partners' }
    ],
    cards: [
      {
        name: 'Careers at Ripotek',
        description: 'Join our growing team of data and AI professionals.',
        href: '/careers',
        bg: 'bg-violet-500',
        text: 'text-white'
      },
      {
        name: 'Get in Touch',
        description: 'Contact us for inquiries, partnerships, or support.',
        href: '/contact',
        bg: 'bg-teal-500',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/ripotek' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Subscribe for Updates', href: '/resources#subscribe' }
    ]
  }
];

const secondaryLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDetail, setMobileDetail] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [sheetReady, setSheetReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay for the slide-up animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSheetReady(true));
      });
    } else {
      document.body.style.overflow = '';
      setSheetReady(false);
      setMobileDetail(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => {
    setSheetReady(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  }, []);

  const activeItem = activeDropdown
    ? navigation.find((n) => n.name === activeDropdown)
    : null;

  const mobileDetailItem = mobileDetail
    ? navigation.find((n) => n.name === mobileDetail)
    : null;

  return (
    <>
      {/* Desktop: background overlay when mega-menu is open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/10 z-40 hidden lg:block"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1a2332]/95 backdrop-blur-lg shadow-lg shadow-black/10'
            : 'bg-[#1a2332]/90 backdrop-blur-sm'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Main nav bar */}
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="flex items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
              <Image
                src="/favicon.svg"
                alt="Ripotek logo"
                width={40}
                height={40}
                className="w-9 h-9 rounded-xl"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                Ripotek
              </span>
            </Link>

            {/* Desktop: Primary Navigation */}
            <div className="hidden lg:flex items-center gap-0 ml-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 xl:px-3.5 py-1.5 text-[13px] font-medium transition-colors flex items-center gap-0.5 ${
                      activeDropdown === item.name
                        ? 'text-teal-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3 h-3 opacity-40 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 opacity-70' : ''}`} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop: Secondary Navigation */}
            <div className="hidden lg:flex items-center gap-5 ml-auto">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile: Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden ml-auto p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

      </nav>

      {/* Desktop: Mega Menu Panel - Floating outside nav */}
      {activeItem && (
        <div
          className="fixed top-[52px] left-0 right-0 z-51 hidden lg:block px-6 xl:px-10"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 xl:p-10">
            <div className="flex gap-10">

              {/* Left column: Title, description, text links */}
              <div className="w-60 shrink-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activeItem.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{activeItem.description}</p>
                <div className="space-y-3">
                  {activeItem.leftLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[14px] font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Center: Colored cards grid */}
              <div className="flex-1">
                <div className={`grid gap-3 ${
                  activeItem.cards.length <= 2 ? 'grid-cols-2' :
                  activeItem.cards.length === 3 ? 'grid-cols-3' :
                  'grid-cols-2'
                }`}>
                  {activeItem.cards.map((card) => (
                    <Link
                      key={card.name}
                      href={card.href}
                      className={`group relative ${card.bg} ${card.text} rounded-2xl p-5 min-h-[130px] flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.02]`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div>
                        <h4 className="text-base font-bold mb-1">{card.name}</h4>
                        <p className={`text-[13px] leading-relaxed ${card.text === 'text-white' ? 'opacity-90' : 'opacity-70'}`}>
                          {card.description}
                        </p>
                      </div>
                      <div className="flex justify-end mt-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                          card.text === 'text-white'
                            ? 'bg-white/20'
                            : 'bg-black/10'
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right column: MORE links */}
              <div className="w-40 shrink-0">
                <h4 className="text-[11px] font-bold text-teal-600 uppercase tracking-widest mb-4 bg-teal-50 px-3 py-1.5 rounded-full inline-block">More</h4>
                <div className="space-y-3">
                  {activeItem.moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[14px] text-gray-700 hover:text-teal-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: Bottom Sheet Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              sheetReady ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobile}
          />

          {/* Bottom Sheet */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out ${
              sheetReady ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '85vh' }}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Sheet Content - Stacked Views (no transforms for reliable mobile scroll) */}
            <div className="relative" style={{ height: 'calc(85vh - 24px)' }}>
              {/* Main View */}
              <div
                className={`absolute inset-0 flex flex-col transition-opacity duration-200 ${
                  mobileDetail ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                {/* Sticky close button */}
                <div className="flex justify-end py-2 px-6 shrink-0 bg-white">
                  <button
                    onClick={closeMobile}
                    className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-7 h-7 text-gray-800" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
                {/* Primary nav items */}
                <div className="space-y-1 mb-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setMobileDetail(item.name)}
                      className="flex items-center justify-between w-full py-3.5 group"
                    >
                      <span className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {item.name}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-4" />

                {/* Secondary links */}
                <div className="space-y-1 mb-6">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-2.5 text-base text-gray-500 hover:text-gray-900 transition-colors"
                      onClick={closeMobile}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                </div>
              </div>

              {/* Detail View */}
              <div
                className={`absolute inset-0 flex flex-col transition-opacity duration-200 ${
                  mobileDetail ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Sticky header: Back + Close */}
                <div className="flex items-center justify-between py-2 px-6 shrink-0 bg-white">
                  <button
                    onClick={() => setMobileDetail(null)}
                    className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Go back"
                  >
                    <ArrowLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={closeMobile}
                    className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-7 h-7 text-gray-800" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
                {mobileDetailItem && (
                  <>
                    {/* Title & description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-2">
                      {mobileDetailItem.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {mobileDetailItem.description}
                    </p>

                    {/* Text links */}
                    <div className="space-y-2 mb-5">
                      {mobileDetailItem.leftLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block text-base font-semibold text-gray-900 hover:text-teal-600 transition-colors py-1"
                          onClick={closeMobile}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    {/* Colored cards */}
                    <div className="space-y-3 mb-5">
                      {mobileDetailItem.cards.map((card) => (
                        <Link
                          key={card.name}
                          href={card.href}
                          className={`block ${card.bg} ${card.text} rounded-2xl p-5 relative overflow-hidden`}
                          onClick={closeMobile}
                        >
                          <h4 className="text-lg font-bold mb-1">{card.name}</h4>
                          <p className={`text-sm leading-relaxed ${card.text === 'text-white' ? 'opacity-90' : 'opacity-70'}`}>
                            {card.description}
                          </p>
                          <div className="flex justify-end mt-2">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                              card.text === 'text-white' ? 'bg-white/20' : 'bg-black/10'
                            }`}>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* More links */}
                    {mobileDetailItem.moreLinks.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">More</h4>
                        <div className="space-y-2">
                          {mobileDetailItem.moreLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block text-base text-gray-700 hover:text-teal-600 transition-colors py-1"
                              onClick={closeMobile}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
