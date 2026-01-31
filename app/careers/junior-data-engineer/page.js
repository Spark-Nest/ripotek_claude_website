'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Briefcase, MapPin, DollarSign, Clock, Users, CheckCircle, Target, Award, Heart, TrendingUp, Mail, Calendar, Rocket, Phone, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import ApplicationModal from '../../../components/ApplicationModal';

export default function JuniorDataEngineerPage() {
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
    { icon: Briefcase, label: 'Employment Type', value: 'Full-Time' },
    { icon: Users, label: 'Reporting To', value: 'Senior Data Engineer or Architect' }
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
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-sm xl:text-base shrink-0">
              Let's Talk
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 ml-auto"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
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
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Junior Data Engineer</h1>
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
              As a Junior Data Engineer, you&apos;ll support client projects by building data pipelines, writing SQL queries, and assisting with data platform implementations. This is an entry-level role ideal for recent graduates of our training programs or candidates with 0-2 years of experience. You&apos;ll receive hands-on mentorship and grow your skills on real enterprise projects.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Engineering (60%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Build and maintain ELT pipelines using Azure Data Factory, Databricks, or Fabric</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Write SQL queries for data transformations and validation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Develop Python or Scala scripts for data processing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Implement data quality checks and error handling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Assist with data modeling (dimension and fact tables)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Document data flows, pipelines, and transformations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Perform unit testing on data pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Monitor pipeline executions and troubleshoot failures</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Support (20%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in client meetings and standups</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Gather requirements from business users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Create technical documentation (runbooks, data dictionaries)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Provide status updates on assigned tasks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Support user acceptance testing (UAT) activities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learning & Development (20%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Shadow senior engineers on architecture and design discussions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Complete assigned training modules and certifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in code reviews and learn best practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Attend weekly learning sessions and knowledge shares</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Work toward Microsoft certifications (DP-203, DP-900, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Ask questions and seek feedback on your work</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Bachelor&apos;s degree in Computer Science, Information Systems, or related field<br />OR<br />Completion of Ripotek&apos;s Azure Data Engineer or Databricks Engineer training program<br />OR<br />Equivalent self-taught experience with demonstrable projects</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>0-2 years of professional experience in data engineering, analytics, or BI</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Internship or co-op experience in data/tech is a plus</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Personal projects or GitHub portfolio demonstrating data skills</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">SQL:</p>
                    <p className="text-gray-700">Proficiency in writing SELECT, JOIN, GROUP BY, window functions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Python:</p>
                    <p className="text-gray-700">Basic scripting (pandas, requests, file I/O)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Azure Basics:</p>
                    <p className="text-gray-700">Familiarity with Azure portal, resource groups, storage accounts</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Concepts:</p>
                    <p className="text-gray-700">Understanding of ETL/ELT, data warehousing, data lakes</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Version Control:</p>
                    <p className="text-gray-700">Basic Git (clone, commit, push, pull)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Tools:</p>
                    <p className="text-gray-700">Comfortable with VS Code, Azure Data Studio, or similar IDEs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nice to Have</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Exposure to Azure Data Factory, Databricks, or Synapse</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Power BI for data visualization</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Spark or Scala basics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Understanding of CI/CD concepts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Experience with Agile methodologies (Scrum, Kanban)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Eagerness to learn and grow</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Strong attention to detail</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Ability to follow instructions and ask clarifying questions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Good time management and ability to meet deadlines</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Team player and collaborative mindset</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Receptive to feedback and coaching</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Good written and verbal communication</span>
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
                <span>Microsoft Certified: Azure Data Fundamentals (DP-900)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Microsoft Certified: Azure Data Engineer Associate (DP-203) or actively pursuing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Completion of Ripotek training program with strong performance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Internship at a tech company or consulting firm</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Contributions to open-source projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Personal blog or portfolio showcasing data projects</span>
              </li>
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compensation & Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Competitive entry-level salary: $65K-$80K</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Annual performance bonus (5-10% of salary)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>RRSP matching (3% of salary)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Health, dental, and vision benefits</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Professional development budget ($2,500/year)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Certification exam fees covered (DP-900, DP-203, etc.)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work Environment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Hybrid: 2 days/week in Calgary office for collaboration and mentorship</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Flexible hours (core hours 10am-3pm MT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>MacBook Pro or Surface Laptop</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Home office setup allowance ($1,000)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Modern downtown office</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Structured onboarding and mentorship program (first 90 days)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Pair programming with senior engineers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Bi-weekly 1-on-1s with your manager</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Clear career path: Junior → Intermediate → Senior Data Engineer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Exposure to multiple clients and industries</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Encouraged to pursue Microsoft certifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Annual performance reviews with skill development plans</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Supportive, learning-focused environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>No expectation to know everything - asking questions is encouraged!</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Diverse team with varied backgrounds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Work on meaningful projects for real clients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Collaborative, low-pressure culture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Celebrates learning and growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Success Looks Like */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">What Success Looks Like (First Year)</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-gray-900">Months 1-3:</div>
                <p className="text-gray-700">Complete onboarding, shadow senior engineers, work on small pipeline tasks</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-gray-900">Months 4-6:</div>
                <p className="text-gray-700">Independently build simple pipelines, participate in code reviews, earn DP-900 cert</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-gray-900">Months 7-9:</div>
                <p className="text-gray-700">Lead small modules on projects, mentor newer juniors, start DP-203 prep</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 font-semibold text-gray-900">Months 10-12:</div>
                <p className="text-gray-700">Contribute to architecture discussions, earn DP-203 cert, take on more complex tasks</p>
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Screen (30 min)</h4>
                  <p className="text-gray-700">HR and hiring manager</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Technical Assessment (take-home, 2-3 hours)</h4>
                  <p className="text-gray-700">Build a simple data pipeline</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Technical Interview (60 min)</h4>
                  <p className="text-gray-700">SQL queries, Python coding, Azure basics</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Behavioral Interview (30 min)</h4>
                  <p className="text-gray-700">Learning agility, teamwork, problem-solving</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold text-gray-900">Team Meet (30 min)</h4>
                  <p className="text-gray-700">Casual conversation with your potential teammates</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">Timeline:</span>
                <span>2 weeks from application to offer</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Data Engineering Career</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team and learn from experienced engineers on real enterprise projects.
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

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle="Junior Data Engineer"
        portalId="342603298"
        formId="73226891-65ae-4581-97e8-70f52f76a3be"
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
    </div>
  );
}








