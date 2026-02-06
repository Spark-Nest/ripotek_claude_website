'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      { name: 'Python Bootcamp', href: '/training#python-bootcamp' },
      { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Careers', href: '/careers' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
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
                  className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 font-medium transition-colors flex items-center gap-1 whitespace-nowrap text-sm xl:text-base py-2`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.dropdown && (
                  <div className="absolute top-full left-0 -mt-px w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="pt-3">
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
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Let's Talk Button - Far Right */}
          <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-3 xl:px-4 py-1.5 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-xs xl:text-sm shrink-0">
            Let&apos;s Talk
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
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-teal-600 py-1.5 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a href="/contact" className="block w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition text-center mt-2">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
