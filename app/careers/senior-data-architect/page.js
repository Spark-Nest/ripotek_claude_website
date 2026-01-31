'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Briefcase, MapPin, DollarSign, Clock, Users, CheckCircle, Target, Award, Heart, TrendingUp, Mail, Calendar, Plane, Phone, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import ApplicationModal from '../../../components/ApplicationModal';

export default function SeniorDataArchitectPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const jobHighlights = [
    { icon: MapPin, label: 'Location', value: 'Calgary, AB (Hybrid - 2 days/week)' },
    { icon: Briefcase, label: 'Employment Type', value: 'Full-Time' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
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
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-3 xl:px-4 py-1.5 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-xs xl:text-sm shrink-0">
              Let's Talk
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 ml-auto"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900 stroke-[2.5]" /> : <Menu className="w-6 h-6 text-gray-900 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/contact" className="block w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Senior Data Architect</h1>
          <p className="text-xl text-gray-300 mb-8">Consulting Department</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobHighlights.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 text-teal-300 mb-2">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/careers#positions"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Role Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Role Overview</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a Senior Data Architect, you&apos;ll lead the design and implementation of modern data platforms for enterprise clients across Energy, Financial Services, and Public Sector. You&apos;ll work directly with C-level stakeholders to translate business requirements into scalable, governed data architectures on Azure, Databricks, and Microsoft Fabric.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Delivery (60%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Lead data architecture assessments and gap analysis for enterprise clients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Design target-state architectures (lakehouse, data mesh, modern data warehouse)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Create detailed technical roadmaps with phased implementation plans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Architect end-to-end solutions: ingestion, storage, processing, consumption layers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Develop governance frameworks: data cataloging, lineage, quality, security</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Lead discovery workshops and present architectural recommendations to executives</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentor junior consultants and provide technical oversight on projects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Ensure solutions align with industry best practices and compliance requirements (GDPR, PIPEDA, SOC 2)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Sales & Business Development (20%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Support sales team with technical discovery and proposal development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Develop client-facing architecture diagrams and solution designs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Provide effort estimates and technical scoping for proposals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Present capabilities and case studies to prospective clients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in industry conferences and networking events</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Thought Leadership (10%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Contribute to Ripotek&apos;s knowledge base and best practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentor team members on architecture patterns and methodologies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Stay current with emerging technologies and platform updates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Write whitepapers and blog posts on data architecture topics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Present at internal lunch-and-learns and training sessions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Projects (10%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Contribute to Ripotek&apos;s internal IP development (accelerators, frameworks, templates)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in hiring and interviewing candidates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Support development of training curriculum content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in strategic planning and service offerings refinement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Qualifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Required Qualifications</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>8+ years in data architecture, engineering, or related roles</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>5+ years designing and implementing enterprise data platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>3+ years with Azure data services (Data Lake, Synapse, Data Factory, Databricks)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Proven track record delivering 5+ large-scale data platform implementations</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Experience across multiple industries (Energy, Finance, or Public Sector preferred)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Cloud Platforms:</p>
                    <p className="text-gray-700">Azure (primary), AWS or GCP (secondary)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Platforms:</p>
                    <p className="text-gray-700">Azure Synapse, Databricks, Microsoft Fabric, Snowflake</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Modeling:</p>
                    <p className="text-gray-700">Dimensional modeling, Data Vault 2.0, one big table patterns</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Architecture Frameworks:</p>
                    <p className="text-gray-700">TOGAF, Zachman, or similar</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Governance Tools:</p>
                    <p className="text-gray-700">Azure Purview, Collibra, or similar</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Programming:</p>
                    <p className="text-gray-700">SQL (advanced), Python or Scala (intermediate)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">DevOps:</p>
                    <p className="text-gray-700">Git, Azure DevOps, CI/CD pipelines</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">BI Tools:</p>
                    <p className="text-gray-700">Power BI, Tableau, or Looker</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Exceptional communication skills - can explain complex technical concepts to non-technical stakeholders</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Strong facilitation skills for workshops and discovery sessions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Proven ability to influence and gain stakeholder buy-in</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Experience managing client relationships and expectations</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Comfortable presenting to C-level executives</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Self-motivated with ability to work independently</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Strong problem-solving and critical thinking skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preferred Qualifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Preferred Qualifications</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Microsoft Certified: Azure Solutions Architect Expert</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Databricks Certified Data Engineer or Architect</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>TOGAF 9.2 certification</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Experience with data mesh or modern data architecture patterns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Knowledge of AI/ML platform design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Prior consulting experience (Big 4, boutique firm, or independent)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Industry-specific domain knowledge (Oil & Gas, Banking, Government)</span>
              </li>
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work Environment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Hybrid model: 2 days/week in Calgary office, 3 days remote</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Flexible hours (core hours 10am-3pm MT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Modern downtown Calgary office with standing desks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Latest MacBook Pro or Surface Laptop</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Home office setup allowance ($2,000)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Work on cutting-edge Azure, Databricks, and AI projects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Exposure to diverse industries and use cases</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentorship from seasoned architects (15-20+ years experience)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Opportunity to contribute to training curriculum</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Clear path to Principal Architect and leadership roles</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Conference attendance and speaking opportunities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culture & Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Small team environment - your impact is visible and valued</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Direct client interaction - you own the relationship</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Collaborative, low-ego culture focused on client success</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Contribute to training the next generation of data professionals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Opportunity to work on projects that drive real business transformation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interview Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Interview Process</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Screen (30 min)</h4>
                  <p className="text-gray-700">HR and hiring manager</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Technical Interview (90 min)</h4>
                  <p className="text-gray-700">Whiteboard architecture design exercise</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Case Study Presentation (60 min)</h4>
                  <p className="text-gray-700">Present solution to mock client scenario</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Culture Fit (45 min)</h4>
                  <p className="text-gray-700">Meet with leadership and peers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold text-gray-900">Reference Checks</h4>
                  <p className="text-gray-700">3 professional references</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">Timeline:</span>
                <span>2-3 weeks from application to offer</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-br from-blue-900 via-blue-800 to-teal-900 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;d love to hear from you. Apply now and let&apos;s build something amazing together.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold text-lg"
            >
              <Mail className="w-6 h-6" />
              Apply for This Position
            </button>
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

      {/* Application Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle="Senior Data Architect"
        portalId="342603298"
        formId="73226891-65ae-4581-97e8-70f52f76a3be"
        region="na3"
      />
    </div>
  );
}








