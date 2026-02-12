'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ChevronDown, MapPin, Mail, Phone, BarChart3, Database, Zap, TrendingUp, Brain, Lightbulb, Code, Target, ArrowRight, Download, DollarSign, Calendar, CheckCircle, Clock, Users, Award, GraduationCap, Play, Star, Briefcase, BookOpen, Monitor, Building2, Repeat, Factory } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Navbar from '../../components/Navbar';

const EnrollmentModal = dynamic(() => import('../../components/EnrollmentModal'), {
  ssr: false,
});
const StripeCheckoutButton = dynamic(() => import('../../components/StripeCheckoutButton'), {
  ssr: false,
});

export default function TrainingPage() {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [expandedSection, setExpandedSection] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleEnrollClick = (program) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const trainingPrograms = [
    {
      title: 'Power BI Analyst',
      duration: '12 Weeks',
      investment: '$700',
      level: 'Beginner-Intermediate',
      icon: BarChart3,
      description: 'Master data visualization, DAX, and enterprise reporting with Power BI.',
      outcomes: ['Build interactive dashboards', 'Write complex DAX formulas', 'Design semantic models', 'Deploy to Power BI Service', 'Prepare for PL-300 exam'],
      image: '📈',
      color: 'from-blue-500 to-cyan-500',
      colorAccent: 'blue',
      schedule: 'Mon/Wed/Sat 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/power-bi-analyst'
    },
    {
      title: 'Azure Data Engineer',
      duration: '24 Weeks',
      investment: '$1,500',
      level: 'Intermediate-Advanced',
      icon: Database,
      description: 'Become proficient in Azure Data Factory, Synapse Analytics, and data lakehouse architectures.',
      outcomes: ['Design ELT pipelines', 'Build data lakehouses', 'Optimize query performance', 'Implement CI/CD', 'Prepare for DP-203 exam'],
      image: '☁️',
      color: 'from-purple-500 to-blue-500',
      colorAccent: 'purple',
      schedule: 'Tue/Thu/Sun 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/azure-data-engineer'
    },
    {
      title: 'Databricks Engineer',
      duration: '24 Weeks',
      investment: '$1,500',
      level: 'Intermediate-Advanced',
      icon: Zap,
      description: 'Learn Spark, Delta Lake, and advanced orchestration on Databricks platform.',
      outcomes: ['Master PySpark', 'Build Delta pipelines', 'Optimize Spark jobs', 'Implement medallion architecture', 'Databricks certification prep'],
      image: '⚡',
      color: 'from-orange-500 to-red-500',
      colorAccent: 'orange',
      schedule: 'Mon/Wed/Sat 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/databricks-engineer'
    },
    {
      title: 'Business Intelligence Analyst',
      duration: '12 Weeks',
      investment: '$700',
      level: 'Beginner-Intermediate',
      icon: TrendingUp,
      description: 'End-to-end BI skills from requirements gathering to dashboard delivery.',
      outcomes: ['Gather requirements', 'Model dimensional data', 'Create KPI frameworks', 'Present insights', 'Business analysis fundamentals'],
      image: '📊',
      color: 'from-green-500 to-teal-500',
      colorAccent: 'green',
      schedule: 'Tue/Thu 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/business-intelligence-analyst'
    },
    {
      title: 'AI Engineer',
      duration: '24 Weeks',
      investment: '$1,800',
      level: 'Advanced',
      icon: Brain,
      description: 'Build production-ready AI solutions with Azure OpenAI and MLOps.',
      outcomes: ['Deploy GenAI apps', 'Build RAG systems', 'Implement MLOps', 'Fine-tune models', 'Prepare for AI-102 exam'],
      image: '🧠',
      color: 'from-pink-500 to-purple-500',
      colorAccent: 'pink',
      schedule: 'Wed/Fri/Sun 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/ai-engineer'
    },
    {
      title: 'Prompt Engineering',
      duration: '12 Weeks',
      investment: '$700',
      level: 'Beginner-Intermediate',
      icon: Lightbulb,
      description: 'Master prompt design for large language models and generative AI.',
      outcomes: ['Design effective prompts', 'Chain reasoning tasks', 'Evaluate outputs', 'Build AI workflows', 'Understand model limitations'],
      image: '💡',
      color: 'from-yellow-500 to-orange-500',
      colorAccent: 'yellow',
      schedule: 'Mon/Wed 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/prompt-engineering'
    },
    {
      title: 'Python Bootcamp',
      duration: '12 Weeks',
      investment: '$700',
      level: 'Beginner',
      icon: Code,
      description: 'Learn Python fundamentals, pandas, and data manipulation for analytics.',
      outcomes: ['Write clean Python code', 'Manipulate data with pandas', 'Create visualizations', 'Automate workflows', 'Connect to APIs'],
      image: '🐍',
      color: 'from-green-600 to-emerald-600',
      colorAccent: 'emerald',
      schedule: 'Sat/Sun 10am-1pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/python-for-data'
    },
    {
      title: 'Azure Data Factory Masterclass',
      duration: '12 Weeks',
      investment: '$1,000',
      level: 'Intermediate',
      icon: Database,
      description: 'Deep dive into ADF for building enterprise-grade data integration pipelines.',
      outcomes: ['Design complex pipelines', 'Implement error handling', 'Optimize performance', 'Deploy with DevOps', 'Monitor production issues'],
      image: '🏭',
      color: 'from-indigo-500 to-blue-600',
      colorAccent: 'indigo',
      schedule: 'Tue/Thu 6-9pm MT',
      nextStart: 'April 12, 2026',
      syllabusFile: '/syllabi/azure-data-factory-masterclass'
    }
  ];

  const whyRipotekTraining = [
    { icon: Users, title: 'Renowned Instructors', description: 'Learn from seasoned professionals with years of real-world industry experience', stat: '10+', statLabel: 'Avg. Years Experience' },
    { icon: Target, title: 'Hands-On Projects', description: 'Work on real-world scenarios and build a portfolio that showcases your skills', stat: '20+', statLabel: 'Portfolio Projects' },
    { icon: Award, title: 'One-on-One Coaching', description: 'Personalized mentorship to ensure you master every concept', stat: '1:8', statLabel: 'Mentor Ratio' },
    { icon: GraduationCap, title: 'Job Placement Support', description: 'Career coaching, resume workshops, and connections to our hiring network', stat: '85%', statLabel: 'Placement Rate' }
  ];

  const formats = [
    { title: 'Live Online', description: 'Join from anywhere with live instructor-led sessions via Zoom/Teams', icon: Monitor, accent: 'teal' },
    { title: 'In-Person Calgary', description: 'Hands-on learning at our downtown Calgary location with peer collaboration', icon: Building2, accent: 'blue' },
    { title: 'Hybrid', description: 'Combine online flexibility with in-person workshops for the best of both worlds', icon: Repeat, accent: 'purple' },
    { title: 'Corporate On-Site', description: 'Custom training delivered at your office for teams of 5+ participants', icon: Factory, accent: 'orange' }
  ];

  const filteredPrograms = selectedLevel === 'all'
    ? trainingPrograms
    : trainingPrograms.filter(p => p.level.toLowerCase().includes(selectedLevel));

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Immersive full-height with video background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/training-banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-20 px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fadeInUp">
            <GraduationCap className="w-4 h-4 text-teal-300" />
            <span className="text-sm font-semibold text-white/90">Training-to-Hire Model&nbsp;&nbsp;|&nbsp;&nbsp;85% Placement Rate</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Launch Your Data Career
            <br />
            <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">@ Ripotek Academy</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Career-accelerating training with real projects, 1:1 mentorship, and an{' '}
            <span className="text-teal-300 font-semibold">85% placement rate</span> — powered by our Training-to-Hire model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <a href="#our-programs" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-0.5">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
              <Calendar className="w-5 h-5" />
              Book Info Session
            </a>
          </div>

        </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out both;
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY RIPOTEK TRAINING — Elevated feature cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div
          id="why-section"
          data-animate
          className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Ripotek Training?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyRipotekTraining.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{item.stat}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{item.statLabel}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRAINING PROGRAMS — Modern filterable card grid
      ═══════════════════════════════════════════════════════════════ */}
      <section id="our-programs" className="py-16 md:py-20 px-4 bg-gray-50 scroll-mt-24">
        <div
          id="programs-section"
          data-animate
          className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible('programs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Industry-aligned programs designed to get you job-ready with real-world skills and certifications
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedLevel === level
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/25'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPrograms.map((program, idx) => (
              <div
                key={idx}
                id={program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 relative scroll-mt-24 flex flex-col"
              >
                {/* NOT AVAILABLE Banner for Azure Data Factory Masterclass */}
                {program.title === 'Azure Data Factory Masterclass' && (
                  <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
                    <div className="w-[140%] py-2 bg-red-500/90 text-white font-bold text-sm tracking-[0.3em] uppercase text-center transform -rotate-45 shadow-lg">
                      Coming Soon
                    </div>
                  </div>
                )}

                {/* Card Header with gradient */}
                <div className={`relative h-3 bg-linear-to-r ${program.color}`}></div>

                <div className="p-7 flex-1 flex flex-col">
                  {/* Icon + Level Badge Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-100">
                      {program.level}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{program.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-5 text-sm">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <Clock className="w-4 h-4 text-teal-500" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <DollarSign className="w-4 h-4 text-teal-500" />
                      CAD {program.investment}
                    </span>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-5 bg-gray-50 rounded-xl p-4 flex-1">
                    <p className="font-semibold text-gray-800 text-sm mb-3">You will learn to:</p>
                    <div className="space-y-2">
                      {program.outcomes.slice(0, 3).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule & Next Start */}
                  <div className="pt-4 border-t border-gray-100 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Play className="w-3.5 h-3.5 text-teal-500" />
                      <span className="text-gray-500">Next Start:{' '}</span>
                      <span className="font-semibold text-teal-600">{program.nextStart}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 mt-auto">
                    <a
                      href={program.syllabusFile}
                      className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-100 transition-all font-semibold text-sm"
                    >
                      <Download className="w-4 h-4" />
                      View Syllabus
                    </a>
                    <button
                      onClick={() => handleEnrollClick(program)}
                      className={`w-full bg-linear-to-r ${program.color} text-white py-3 rounded-xl hover:opacity-90 transition-all font-semibold text-sm shadow-md hover:shadow-lg`}
                    >
                      Enroll Now
                    </button>
                    <StripeCheckoutButton
                      programName={program.title}
                      price={program.investment}
                      duration={program.duration}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FLEXIBLE LEARNING FORMATS — Modern icon cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div
          id="formats-section"
          data-animate
          className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible('formats-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Learn Your Way</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Flexible Learning{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Formats</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {formats.map((format, idx) => {
              const accentColors = {
                teal: 'from-teal-500 to-cyan-500',
                blue: 'from-blue-500 to-indigo-500',
                purple: 'from-purple-500 to-pink-500',
                orange: 'from-orange-500 to-red-500'
              };
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
                >
                  {/* Subtle gradient bg on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${accentColors[format.accent]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto bg-linear-to-br ${accentColors[format.accent]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <format.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{format.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRAINING-TO-HIRE — Dark immersive section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-[5%] w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div
          id="hire-section"
          data-animate
          className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${isVisible('hire-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-sm font-semibold text-teal-400 tracking-widest uppercase mb-3">From Student to Professional</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Training-to-Hire{' '}
                <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Program</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                85% of our graduates secure positions within 90 days through our placement assistance program. Partner companies across Energy, Financial Services, and Public Sectors actively recruit our talent.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-0.5">
                  <Calendar className="w-5 h-5" /> Book Info Session
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                  Join Talent Network <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right — Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '85%', label: 'Placement Rate', sublabel: 'Within 90 days', icon: TrendingUp },
                { value: '90', label: 'Days Average', sublabel: 'Time to hire', icon: Clock },
                { value: '50+', label: 'Hiring Partners', sublabel: 'Across industries', icon: Briefcase },
                { value: '500+', label: 'Graduates', sublabel: 'And counting', icon: GraduationCap }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 text-teal-400 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <p className="text-gray-300 font-medium text-sm">{stat.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STUDENT ONBOARDING CHECKLIST — Modern accordion
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div
          id="onboarding-section"
          data-animate
          className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible('onboarding-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Onboarding{' '}
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Checklist</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know to prepare for your first day and succeed in your program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Pre-Program Setup */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => setExpandedSection(expandedSection === 'pre-program' ? null : 'pre-program')}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Pre-Program Setup</h3>
                    <p className="text-sm text-gray-500 hidden sm:block">1 week before your start date</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedSection === 'pre-program' ? 'bg-teal-100 rotate-180' : 'bg-gray-100'}`}>
                  <ChevronDown className={`w-5 h-5 ${expandedSection === 'pre-program' ? 'text-teal-600' : 'text-gray-400'}`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'pre-program' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8 border-t border-gray-100">
                  <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        Administrative Setup
                      </h4>
                      <ul className="space-y-2.5">
                        {['Complete enrollment paperwork and training agreement', 'Submit payment or set up financing', 'Join Student Slack workspace (check email for invite)', 'Add program dates to your calendar'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-teal-500 mt-1 shrink-0">&#x2022;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        Technical Setup
                      </h4>
                      <ul className="space-y-2.5">
                        {['Windows 10/11 or macOS, 8GB RAM minimum, stable internet', 'Install required software (program-specific - check your syllabus)', 'Create GitHub account and Microsoft account', 'Update LinkedIn profile'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-teal-500 mt-1 shrink-0">&#x2022;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        Learning Platform Access
                      </h4>
                      <ul className="space-y-2.5">
                        {['Log into learning portal and verify course access', 'Download course syllabus and review weekly outline', 'Test video conferencing setup (Zoom/Teams)', 'Complete pre-assessment if assigned'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-teal-500 mt-1 shrink-0">&#x2022;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Day */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => setExpandedSection(expandedSection === 'first-day' ? null : 'first-day')}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">First Day of Class</h3>
                    <p className="text-sm text-gray-500 hidden sm:block">Make a great start</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedSection === 'first-day' ? 'bg-blue-100 rotate-180' : 'bg-gray-100'}`}>
                  <ChevronDown className={`w-5 h-5 ${expandedSection === 'first-day' ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'first-day' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8 border-t border-gray-100">
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {[
                      'Log in 15 minutes early to test audio/video',
                      'Have notebook ready for notes (digital or physical)',
                      'Introduce yourself: name, background, career goals',
                      'Review program structure and attendance policy (80% required)',
                      'Learn about support resources (office hours, TA support)',
                      'Schedule 1-on-1 with instructor for Week 2-3'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Week 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => setExpandedSection(expandedSection === 'week-1' ? null : 'week-1')}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Week 1 Action Items</h3>
                    <p className="text-sm text-gray-500 hidden sm:block">Build momentum in your first week</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedSection === 'week-1' ? 'bg-purple-100 rotate-180' : 'bg-gray-100'}`}>
                  <ChevronDown className={`w-5 h-5 ${expandedSection === 'week-1' ? 'text-purple-600' : 'text-gray-400'}`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'week-1' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8 border-t border-gray-100">
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        Academic
                      </h4>
                      <ul className="space-y-3">
                        {[
                          'Complete Week 1 labs (due Sunday 11:59 PM MT)',
                          'Join or form a study group (3-4 students)',
                          'Review recorded sessions for concepts you need to revisit',
                          'Ask your first question in Slack or office hours'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-purple-500" />
                        Career Prep
                      </h4>
                      <ul className="space-y-3">
                        {[
                          'Submit resume for career services review',
                          'Update LinkedIn: Add "Currently enrolled in [Program] at Ripotek"',
                          'Complete career goals form',
                          'Join alumni network on LinkedIn'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alumni Tips */}
            <div
              id="tips-section"
              data-animate
              className={`mt-12 transition-all duration-700 ${isVisible('tips-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-8">
                <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Student Voices</span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Quick Tips from{' '}
                  <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Alumni</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { quote: "Don\u2019t fall behind on labs \u2014 it\u2019s SO hard to catch up. Do them the same week as the lesson.", author: 'Sarah', program: 'Azure DE Graduate', color: 'teal' },
                  { quote: "Join a study group immediately. My group kept me accountable and we all got jobs together.", author: 'Priya', program: 'AI Engineer Graduate', color: 'blue' },
                  { quote: "Use ChatGPT/Copilot to explain errors, but type the code yourself. Copy-paste won\u2019t help you learn.", author: 'Marcus', program: 'Power BI Graduate', color: 'purple' }
                ].map((tip, idx) => {
                  const borderColors = { teal: 'border-teal-500', blue: 'border-blue-500', purple: 'border-purple-500' };
                  const bgColors = { teal: 'bg-teal-50', blue: 'bg-blue-50', purple: 'bg-purple-50' };
                  const textColors = { teal: 'text-teal-600', blue: 'text-blue-600', purple: 'text-purple-600' };
                  return (
                    <div key={idx} className={`bg-white rounded-2xl p-6 border-l-4 ${borderColors[tip.color]} shadow-sm hover:shadow-md transition-shadow`}>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{tip.quote}&rdquo;</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${bgColors[tip.color]} flex items-center justify-center`}>
                          <span className={`font-bold text-sm ${textColors[tip.color]}`}>{tip.author[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{tip.author}</p>
                          <p className="text-gray-500 text-xs">{tip.program}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Resources */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                Support Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Contact</h4>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-teal-500" />
                      <span><span className="font-semibold text-gray-700">Technical Issues:</span> support@ripotek.com</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-teal-500" />
                      <span><span className="font-semibold text-gray-700">Career Services:</span> careers@ripotek.com</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-teal-500" />
                      <span><span className="font-semibold text-gray-700">Instructor Questions:</span> Use Slack or office hours</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Learning Resources</h4>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span>Office Hours: Tue/Thu 5-6 PM MT</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Play className="w-4 h-4 text-teal-500" />
                      <span>Recorded Sessions: Available within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      <span>1-on-1 Mentorship: Book via Calendly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          READY TO GET STARTED — Full-bleed CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <GraduationCap className="w-14 h-14 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get{' '}
            <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            You&apos;re not alone — your cohort, instructors, and TAs are here to help every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#book-call" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-0.5">
              Contact Support
            </a>
            <a href="/resources" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
              View Resources <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
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
                <li><a href="/services#analytics-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Data Services</a></li>
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
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Client Impact</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-300 text-sm">&copy; 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
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

      {/* Enrollment Modal */}
      {selectedProgram && (
        <EnrollmentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          programName={selectedProgram.title}
          duration={selectedProgram.duration}
          price={selectedProgram.investment}
          nextStart={selectedProgram.nextStart}
          portalId="342603298"
          formId="7406ec42-22b5-4449-81f1-3a508db656d7"
          region="na3"
        />
      )}
    </div>
  );
}
