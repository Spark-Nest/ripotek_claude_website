'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Database, Zap, TrendingUp, Brain, Lightbulb, Code, Clock, DollarSign, CheckCircle, GraduationCap, ArrowRight, Calendar, Users, Award, Target, Download, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function TrainingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [expandedSection, setExpandedSection] = useState(null);

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

  const trainingPrograms = [
    {
      title: 'Power BI Analyst',
      duration: '12 Weeks',
      investment: '$1,599',
      level: 'Beginner-Intermediate',
      icon: BarChart3,
      description: 'Master data visualization, DAX, and enterprise reporting with Power BI.',
      outcomes: ['Build interactive dashboards', 'Write complex DAX formulas', 'Design semantic models', 'Deploy to Power BI Service', 'Prepare for PL-300 exam'],
      image: '📈',
      color: 'from-blue-500 to-cyan-500',
      schedule: 'Mon/Wed/Sat 6-9pm MT',
      nextStart: 'January 15, 2025',
      syllabusFile: '/syllabi/power-bi-analyst'
    },
    {
      title: 'Azure Data Engineer',
      duration: '24 Weeks',
      investment: '$3,999',
      level: 'Intermediate-Advanced',
      icon: Database,
      description: 'Become proficient in Azure Data Factory, Synapse Analytics, and data lakehouse architectures.',
      outcomes: ['Design ELT pipelines', 'Build data lakehouses', 'Optimize query performance', 'Implement CI/CD', 'Prepare for DP-203 exam'],
      image: '☁️',
      color: 'from-purple-500 to-blue-500',
      schedule: 'Tue/Thu/Sun 6-9pm MT',
      nextStart: 'February 1, 2025',
      syllabusFile: '/syllabi/azure-data-engineer'
    },
    {
      title: 'Databricks Engineer',
      duration: '24 Weeks',
      investment: '$3,999',
      level: 'Intermediate-Advanced',
      icon: Zap,
      description: 'Learn Spark, Delta Lake, and advanced orchestration on Databricks platform.',
      outcomes: ['Master PySpark', 'Build Delta pipelines', 'Optimize Spark jobs', 'Implement medallion architecture', 'Databricks certification prep'],
      image: '⚡',
      color: 'from-orange-500 to-red-500',
      schedule: 'Mon/Wed/Sat 6-9pm MT',
      nextStart: 'January 22, 2025',
      syllabusFile: '/syllabi/databricks-engineer'
    },
    {
      title: 'Business Intelligence Analyst',
      duration: '12 Weeks',
      investment: '$1,799',
      level: 'Beginner-Intermediate',
      icon: TrendingUp,
      description: 'End-to-end BI skills from requirements gathering to dashboard delivery.',
      outcomes: ['Gather requirements', 'Model dimensional data', 'Create KPI frameworks', 'Present insights', 'Business analysis fundamentals'],
      image: '📊',
      color: 'from-green-500 to-teal-500',
      schedule: 'Tue/Thu 6-9pm MT',
      nextStart: 'February 10, 2025',
      syllabusFile: '/syllabi/business-intelligence-analyst'
    },
    {
      title: 'AI Engineer',
      duration: '24 Weeks',
      investment: '$3,999',
      level: 'Advanced',
      icon: Brain,
      description: 'Build production-ready AI solutions with Azure OpenAI and MLOps.',
      outcomes: ['Deploy GenAI apps', 'Build RAG systems', 'Implement MLOps', 'Fine-tune models', 'Prepare for AI-102 exam'],
      image: '🤖',
      color: 'from-pink-500 to-purple-500',
      schedule: 'Wed/Fri/Sun 6-9pm MT',
      nextStart: 'March 1, 2025',
      syllabusFile: '/syllabi/ai-engineer'
    },
    {
      title: 'Prompt Engineering',
      duration: '12 Weeks',
      investment: '$1,599',
      level: 'Beginner-Intermediate',
      icon: Lightbulb,
      description: 'Master prompt design for large language models and generative AI.',
      outcomes: ['Design effective prompts', 'Chain reasoning tasks', 'Evaluate outputs', 'Build AI workflows', 'Understand model limitations'],
      image: '💡',
      color: 'from-yellow-500 to-orange-500',
      schedule: 'Mon/Wed 6-9pm MT',
      nextStart: 'January 29, 2025',
      syllabusFile: '/syllabi/prompt-engineering'
    },
    {
      title: 'Python for Data',
      duration: '12 Weeks',
      investment: '$1,599',
      level: 'Beginner',
      icon: Code,
      description: 'Learn Python fundamentals, pandas, and data manipulation for analytics.',
      outcomes: ['Write clean Python code', 'Manipulate data with pandas', 'Create visualizations', 'Automate workflows', 'Connect to APIs'],
      image: '🐍',
      color: 'from-green-600 to-emerald-600',
      schedule: 'Sat/Sun 10am-1pm MT',
      nextStart: 'February 5, 2025',
      syllabusFile: '/syllabi/python-for-data'
    },
    {
      title: 'Azure Data Factory Masterclass',
      duration: '12 Weeks',
      investment: '$1,799',
      level: 'Intermediate',
      icon: Database,
      description: 'Deep dive into ADF for building enterprise-grade data integration pipelines.',
      outcomes: ['Design complex pipelines', 'Implement error handling', 'Optimize performance', 'Deploy with DevOps', 'Monitor production issues'],
      image: '🏭',
      color: 'from-indigo-500 to-blue-600',
      schedule: 'Tue/Thu 6-9pm MT',
      nextStart: 'February 18, 2025',
      syllabusFile: '/syllabi/azure-data-factory-masterclass'
    }
  ];

  const whyRipotekTraining = [
    { icon: Users, title: 'Renowned Instructors', description: 'Learn from seasoned professionals with years of real-world industry experience' },
    { icon: Target, title: 'Hands-On Projects', description: 'Work on real-world scenarios and build a portfolio that showcases your skills' },
    { icon: Award, title: 'One-on-One Coaching', description: 'Personalized mentorship to ensure you master every concept' },
    { icon: GraduationCap, title: 'Job Placement Support', description: 'Career coaching, resume workshops, and connections to our hiring network' }
  ];

  const formats = [
    { title: 'Live Online', description: 'Join from anywhere with live instructor-led sessions', icon: '💻' },
    { title: 'In-Person Calgary', description: 'Hands-on learning at our downtown Calgary location', icon: '🏢' },
    { title: 'Hybrid', description: 'Combine online flexibility with in-person workshops', icon: '🔄' },
    { title: 'Corporate On-Site', description: 'Custom training delivered at your office (5+ participants)', icon: '🏭' }
  ];

  const filteredPrograms = selectedLevel === 'all'
    ? trainingPrograms
    : trainingPrograms.filter(p => p.level.toLowerCase().includes(selectedLevel));

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
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-sm md:text-base text-gray-700 font-semibold italic">Design. Engineer. Deliver.</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out py-2">
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
                  )}
                </div>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let's Talk</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-6">
            Training-to-Hire Model | 85% Placement Rate
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block">Launch your data Career</span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">@ Ripotek Academy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Career-accelerating training with real projects, 1:1 mentorship, and an <span className="text-teal-300 font-semibold">85% placement rate</span> — powered by our Training-to-Hire model.
          </p>
        </div>
      </section>

      {/* Why Ripotek Training */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Why </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Ripotek Training?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRipotekTraining.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="our-programs" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Programs</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedLevel === level
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPrograms.map((program, idx) => (
              <div
                key={idx}
                id={program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine overflow-hidden relative scroll-mt-24"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-bl-full`}></div>
                <div className="text-5xl mb-4">{program.image}</div>
                <program.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    CAD {program.investment}
                  </span>
                </div>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full mb-4">
                  {program.level}
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="mb-6">
                  <p className="font-semibold text-gray-900 mb-3">You will learn to:</p>
                  {program.outcomes.slice(0, 3).map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 mb-6">
                  <p className="text-sm text-gray-600 mb-1">Schedule: {program.schedule}</p>
                  <p className="text-sm text-gray-600">Next Start: <span className="font-semibold text-teal-600">{program.nextStart}</span></p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold hover-lift">
                    Enroll Now
                  </button>
                  <a
                    href={program.syllabusFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white border-2 border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition font-semibold hover-lift flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    View Syllabus
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Flexible Learning </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Formats</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formats.map((format, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift card-shine text-center">
                <div className="text-6xl mb-4">{format.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training-to-Hire */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Training-to-Hire Program</h2>
          <p className="text-xl text-gray-300 mb-8">
            85% of our graduates secure positions within 90 days through our placement assistance program. Partner companies across Energy, Financial Services, and Public Sectors actively recruit our talent.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">85%</div>
              <p className="text-gray-300">Placement Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">90</div>
              <p className="text-gray-300">Days Average</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
              <p className="text-gray-300">Hiring Partners</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              <Calendar className="w-5 h-5" /> Book Info Session
            </a>
            <a href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold inline-flex items-center gap-2 hover-lift">
              Join Talent Network <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Student Onboarding Checklist */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Student Onboarding </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Checklist</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know to prepare for your first day and succeed in your program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Pre-Program Setup */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'pre-program' ? null : 'pre-program')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pre-Program Setup (1 Week Before)</h3>
                </div>
                {expandedSection === 'pre-program' ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
              </button>
              {expandedSection === 'pre-program' && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                        Administrative Setup
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Complete enrollment paperwork and training agreement</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Submit payment or set up financing</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Join Student Slack workspace (check email for invite)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Add program dates to your calendar</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                        Technical Setup
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>System Requirements: Windows 10/11 or macOS, 8GB RAM minimum, stable internet</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Install required software (program-specific - check your syllabus)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Create GitHub account and Microsoft account</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Update LinkedIn profile</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                        Learning Platform Access
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Log into learning portal and verify course access</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Download course syllabus and review weekly outline</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Test video conferencing setup (Zoom/Teams)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Complete pre-assessment if assigned</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* First Day */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'first-day' ? null : 'first-day')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">First Day of Class</h3>
                </div>
                {expandedSection === 'first-day' ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
              </button>
              {expandedSection === 'first-day' && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Log in 15 minutes early to test audio/video</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Have notebook ready for notes (digital or physical)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Introduce yourself: name, background, career goals</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Review program structure and attendance policy (80% required)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Learn about support resources (office hours, TA support)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule 1-on-1 with instructor for Week 2-3</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Week 1 */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'week-1' ? null : 'week-1')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Week 1 Action Items</h3>
                </div>
                {expandedSection === 'week-1' ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
              </button>
              {expandedSection === 'week-1' && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Academic</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Complete Week 1 labs (due Sunday 11:59 PM MT)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Join or form a study group (3-4 students)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Review recorded sessions for concepts you need to revisit</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Ask your first question in Slack or office hours</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Career Prep</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Submit resume for career services review</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Update LinkedIn: Add &quot;Currently enrolled in [Program] at Ripotek&quot;</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Complete career goals form</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Join alumni network on LinkedIn</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Success Tips */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-teal-600" />
                Quick Tips from Alumni
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-teal-600">
                  <p className="text-gray-700 italic">&quot;Don&apos;t fall behind on labs - it&apos;s SO hard to catch up. Do them the same week as the lesson.&quot;</p>
                  <p className="text-sm text-gray-600 mt-2">- Sarah, Azure DE Graduate</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-gray-700 italic">&quot;Join a study group immediately. My group kept me accountable and we all got jobs together.&quot;</p>
                  <p className="text-sm text-gray-600 mt-2">- Priya, AI Engineer Graduate</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                  <p className="text-gray-700 italic">&quot;Use ChatGPT/Copilot to explain errors, but type the code yourself. Copy-paste won&apos;t help you learn.&quot;</p>
                  <p className="text-sm text-gray-600 mt-2">- Marcus, Power BI Graduate</p>
                </div>
              </div>
            </div>

            {/* Support Resources */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-teal-600" />
                Support Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-700"><span className="font-semibold">Technical Issues:</span> support@ripotek.com</li>
                    <li className="text-gray-700"><span className="font-semibold">Career Services:</span> careers@ripotek.com</li>
                    <li className="text-gray-700"><span className="font-semibold">Instructor Questions:</span> Use Slack or office hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Learning Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-700">Office Hours: Tue/Thu 5-6 PM MT</li>
                    <li className="text-gray-700">Recorded Sessions: Available within 24 hours</li>
                    <li className="text-gray-700">1-on-1 Mentorship: Book via Calendly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-900 to-teal-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 text-blue-100">You&apos;re not alone - your cohort, instructors, and TAs are here to help!</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                  Contact Support
                </a>
                <a href="/resources" className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition font-semibold border-2 border-white/20">
                  View Resources
                </a>
              </div>
            </div>
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
                <span className="font-extrabold text-2xl md:text-3xl tracking-tight">Ripotek</span>
              </div>
              <p className="text-gray-300 text-base md:text-lg font-semibold">Design. Engineer. Deliver.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-teal-400 transition">Data Architecture</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">MLOps & AI</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/training" className="hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">Azure Data Engineer</a></li>
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
