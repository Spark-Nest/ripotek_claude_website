'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: 'Our Expertise',
    href: '/services',
    description: 'Transform your business with cutting-edge data and AI solutions tailored to your industry.',
    leftLinks: [
      { name: 'Who We Serve', href: '/services#industries' },
      { name: 'Client Impact', href: '/case-studies' }
    ],
    cards: [
      {
        name: 'Data Engineering',
        tagline: 'Scalable cloud data platforms',
        description: 'Build scalable data platforms with Azure, Databricks & Microsoft Fabric.',
        href: '/services#data-platform-build',
        bg: 'bg-amber-400',
        text: 'text-gray-900'
      },
      {
        name: 'Analytics & BI',
        tagline: 'Insights that drive decisions',
        description: 'Power BI dashboards and self-service analytics at enterprise scale.',
        href: '/services#analytics-&-bi',
        bg: 'bg-teal-600',
        text: 'text-white'
      },
      {
        name: 'MLOps & AI',
        tagline: 'Production-ready AI solutions',
        description: 'Deploy machine learning models and GenAI solutions at scale.',
        href: '/services#mlops-&-ai',
        bg: 'bg-sky-500',
        text: 'text-white'
      },
      {
        name: 'Digital Platforms',
        tagline: 'Modern web experiences',
        description: 'Professional web solutions for modern businesses.',
        href: '/website-development',
        bg: 'bg-rose-400',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'Data Strategy & Governance', href: '/services#strategy-&-governance' },
      { name: 'Managed Data Services', href: '/services#managed-services' },
      { name: 'Capabilities Deck', href: '/resources/capabilities-deck' }
    ]
  },
  {
    name: 'Ripotek Academy',
    href: '/training',
    description: 'Learn from industry experts and build job-ready skills in data engineering, analytics, and AI.',
    leftLinks: [
      { name: 'Explore Ripotek Academy', href: '/training' },
      { name: 'All Programs', href: '/training#our-programs' },
      { name: 'Enterprise Training', href: '/services#enterprise-training' }
    ],
    cards: [
      {
        name: 'Power BI Analyst',
        tagline: 'Business-ready analytics & reporting',
        description: '12 weeks • $700 • PL-300 certification prep.',
        href: '/training#power-bi-analyst',
        bg: 'bg-violet-500',
        text: 'text-white'
      },
      {
        name: 'Azure Data Engineer',
        tagline: 'Enterprise-scale data platforms on Azure',
        description: '24 weeks • $1,500 • DP-203 certification prep.',
        href: '/training#azure-data-engineer',
        bg: 'bg-cyan-500',
        text: 'text-white'
      },
      {
        name: 'AI Engineer',
        tagline: 'Build & deploy intelligent systems',
        description: '24 weeks • $1,800 • AI-102 certification prep.',
        href: '/training#ai-engineer',
        bg: 'bg-amber-500',
        text: 'text-gray-900'
      },
      {
        name: 'Databricks Engineer',
        tagline: 'Lakehouse architecture mastery',
        description: '24 weeks • $1,500 • Spark & Delta Lake.',
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
    name: 'Insights & Knowledge',
    href: '/resources',
    description: 'Stay informed with insights, white papers, and expert content on data and AI.',
    leftLinks: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'White Papers', href: '/resources#whitepapers' },
      { name: 'Demo Videos', href: '/resources#demo-videos' }
    ],
    cards: [
      {
        name: 'Capabilities Deck',
        tagline: 'Explore our service offerings',
        description: 'View our Capabilities Deck.',
        href: '/resources/capabilities-deck',
        bg: 'bg-teal-500',
        text: 'text-white'
      },
      {
        name: 'YouTube Channel',
        tagline: 'Tutorials & expert walkthroughs',
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
        tagline: 'Join our growing team',
        description: 'Join our growing team of data and AI professionals.',
        href: '/careers',
        bg: 'bg-violet-500',
        text: 'text-white'
      },
      {
        name: 'Get in Touch',
        tagline: 'Start a conversation',
        description: 'Contact us for inquiries, partnerships, or support.',
        href: '/contact',
        bg: 'bg-teal-500',
        text: 'text-white'
      }
    ],
    moreLinks: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/ripotek' },
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
        name: 'Advisory & Discovery',
        tagline: 'Strategy & assessment',
        description: '2–4 weeks • $15K–$30K • Assessment & roadmap.',
        href: '/pricing#discovery',
        bg: 'bg-sky-500',
        text: 'text-white'
      },
      {
        name: 'Solution Delivery',
        tagline: 'End-to-end implementation',
        description: '3–6 months • $100K–$300K • Full platform build.',
        href: '/pricing#implementation',
        bg: 'bg-amber-400',
        text: 'text-gray-900'
      },
      {
        name: 'Managed Data Services',
        tagline: 'Ongoing support & optimization',
        description: 'Ongoing • $8K–$25K/month • Support & optimization.',
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
  const [dragY, setDragY] = useState(0);
  const dragStartY = useRef(null);
  const sheetRef = useRef(null);

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
      setDragY(0);
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => {
    setSheetReady(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  }, []);

  // Drag-to-dismiss handlers
  const handleDragStart = useCallback((e) => {
    dragStartY.current = e.touches[0].clientY;
  }, []);

  const handleDragMove = useCallback((e) => {
    if (dragStartY.current === null) return;
    const delta = e.touches[0].clientY - dragStartY.current;
    if (delta > 0) {
      setDragY(delta);
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    if (dragY > 100) {
      closeMobile();
    }
    setDragY(0);
    dragStartY.current = null;
  }, [dragY, closeMobile]);

  const activeItem = activeDropdown
    ? navigation.find((n) => n.name === activeDropdown)
    : null;

  const mobileDetailItem = mobileDetail
    ? navigation.find((n) => n.name === mobileDetail)
    : null;

  const extProps = (href) => href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};

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
            : 'bg-white/80 backdrop-blur-md shadow-sm'
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
              <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-white' : 'text-gray-900'}`}>
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
                        ? 'text-teal-500'
                        : scrolled
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                    } ${item.name === 'Pricing' ? 'opacity-60 hover:opacity-100' : ''}`}
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
                  className={`text-[13px] transition-colors ${scrolled ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile: Menu Button — Modern dot grid */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden ml-auto p-2.5 rounded-xl transition-colors ${scrolled ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
              aria-label="Open menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-[5px]">
                <span className={`block h-[2.5px] w-6 rounded-full transition-colors duration-500 ${scrolled ? 'bg-white' : 'bg-gray-800'}`} />
                <span className={`block h-[2.5px] w-4 rounded-full transition-colors duration-500 ${scrolled ? 'bg-white' : 'bg-gray-800'}`} />
                <span className={`block h-[2.5px] w-5 rounded-full transition-colors duration-500 ${scrolled ? 'bg-white' : 'bg-gray-800'}`} />
              </div>
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
                      {...extProps(link.href)}
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
                      {...extProps(card.href)}
                      className={`group relative ${card.bg} ${card.text} rounded-2xl p-5 min-h-[130px] flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.02]`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div>
                        <h4 className="text-base font-bold mb-1">{card.name}</h4>
                        {card.tagline && (
                          <p className={`text-[11px] uppercase tracking-wider font-semibold mb-1 ${card.text === 'text-white' ? 'text-white/70' : 'text-gray-700/70'}`}>
                            {card.tagline}
                          </p>
                        )}
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
                      {...extProps(link.href)}
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
            ref={sheetRef}
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out ${
              sheetReady ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '85vh', transform: sheetReady && dragY > 0 ? `translateY(${dragY}px)` : undefined }}
          >
            {/* Drag Handle — touch to drag down to dismiss */}
            <div
              className="flex justify-center pt-3 pb-1 shrink-0 cursor-grab active:cursor-grabbing"
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Sheet Content - Stacked Views (no transforms for reliable mobile scroll) */}
            <div className="relative" style={{ height: 'calc(85vh - 28px)' }}>
              {/* Main View */}
              <div
                className={`absolute inset-0 flex flex-col transition-opacity duration-200 ${
                  mobileDetail ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                {/* Sticky floating close button */}
                <div className="flex justify-end py-2 px-5 shrink-0 bg-white">
                  <button
                    onClick={closeMobile}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-md transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
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
                {/* Sticky header: Floating circle buttons */}
                <div className="flex items-center justify-between py-2 px-5 shrink-0 bg-white">
                  <button
                    onClick={() => setMobileDetail(null)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-md transition-colors"
                    aria-label="Go back"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={closeMobile}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-md transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
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
                          {...extProps(link.href)}
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
                          {...extProps(card.href)}
                          className={`block ${card.bg} ${card.text} rounded-2xl p-5 relative overflow-hidden`}
                          onClick={closeMobile}
                        >
                          <h4 className="text-lg font-bold mb-1">{card.name}</h4>
                          {card.tagline && (
                            <p className={`text-[11px] uppercase tracking-wider font-semibold mb-1 ${card.text === 'text-white' ? 'text-white/70' : 'text-gray-700/70'}`}>
                              {card.tagline}
                            </p>
                          )}
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
                        <h4 className="text-[11px] font-bold text-teal-600 uppercase tracking-widest mb-3 bg-teal-50 px-3 py-1.5 rounded-full inline-block">More</h4>
                        <div className="space-y-2">
                          {mobileDetailItem.moreLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              {...extProps(link.href)}
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
