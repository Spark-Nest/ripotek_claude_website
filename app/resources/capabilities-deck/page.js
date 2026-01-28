'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2, Globe, Mail, Phone, Building2, GraduationCap, TrendingUp, CheckCircle, Calendar, MapPin, Target, Server, LayoutGrid, Clock, DollarSign, UserX, Lightbulb, Layers, Rocket, Compass, BarChart3, Brain, LifeBuoy, UsersRound, Factory, PieChart, UserCog, Check, User, Cloud, Briefcase, Award, Presentation, Boxes, Network, Diamond, ClipboardList, PackageOpen, Coins, Database, Workflow, CheckCheck, GitBranch, LineChart, Gauge, Shield, Trophy, Bot, Zap, Headset, Bell, ClipboardCheck, CalendarCheck, BookOpen, Tag, CloudUpload, Snowflake, Monitor, Search, PenTool, FileText, RefreshCw, Landmark, HeartPulse, AlertTriangle, XCircle, FileSpreadsheet, Radio, Timer, Banknote, Settings, CalendarX2, Percent, Eye, EyeOff, UserCheck, HandHeart, Table2, FileCode, Cog, Laptop, Handshake, Star, SlidersHorizontal, FileCheck2, Heart, FilePen, ZoomIn, ArrowRight, Linkedin, Facebook, Instagram, MessageCircle, Code, Shuffle } from 'lucide-react';

export default function CapabilitiesDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  const totalSlides = 29; // Will increase as more slides are added

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      // Scale slides down on small viewports to prevent overflow/misalignment
      const computedScale = Math.min(1, Math.max(0.7, width / 1280));
      setScale(computedScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-900 flex flex-col ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}>
      {/* Header - Hidden in fullscreen */}
      {!isFullscreen && (
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-4">
            <a href="/resources" className="text-gray-400 hover:text-white transition text-sm">
              ← Back to Resources
            </a>
            <span className="text-gray-600">|</span>
            <h1 className="text-white font-semibold">Capabilities Deck</h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/ripotek-capabilities-deck.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      )}

      {/* Slide Container */}
      <div className={`flex-1 flex items-center justify-center ${isFullscreen ? '' : 'mb-4'}`}>
        <div
          className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${
            isFullscreen
              ? 'w-screen h-screen rounded-none'
                : 'w-full max-w-6xl aspect-[4/5] sm:aspect-[3/4] md:aspect-video min-h-[520px] sm:min-h-[560px]'
          }`}
        >
          <div className="h-full w-full flex items-start justify-center overflow-hidden">
            <div
                className="h-full w-full max-w-[1280px]"
              style={{
                  transform: `scale(${isFullscreen ? 1 : scale})`,
                transformOrigin: 'top center',
                margin: '0 auto'
              }}
            >
              {/* Slide Content */}
              {currentSlide === 0 && <Slide1 />}
              {currentSlide === 1 && <Slide2 />}
              {currentSlide === 2 && <Slide3 />}
              {currentSlide === 3 && <Slide4 />}
              {currentSlide === 4 && <Slide5 />}
              {currentSlide === 5 && <Slide6 />}
              {currentSlide === 6 && <Slide7 />}
              {currentSlide === 7 && <Slide8 />}
              {currentSlide === 8 && <Slide9 />}
              {currentSlide === 9 && <Slide10 />}
              {currentSlide === 10 && <Slide11 />}
              {currentSlide === 11 && <Slide12 />}
              {currentSlide === 12 && <Slide13 />}
              {currentSlide === 13 && <Slide14 />}
              {currentSlide === 14 && <Slide15 />}
              {currentSlide === 15 && <Slide16 />}
              {currentSlide === 16 && <Slide17 />}
              {currentSlide === 17 && <Slide18 />}
              {currentSlide === 18 && <Slide19 />}
              {currentSlide === 19 && <Slide20 />}
              {currentSlide === 20 && <Slide21 />}
              {currentSlide === 21 && <Slide22 />}
              {currentSlide === 22 && <Slide23 />}
              {currentSlide === 23 && <Slide24 />}
              {currentSlide === 24 && <Slide25 />}
              {currentSlide === 25 && <Slide26 />}
              {currentSlide === 26 && <Slide27 />}
              {currentSlide === 27 && <Slide28 />}
              {currentSlide === 28 && <Slide29 />}
            </div>
          </div>

          {/* Slide Navigation Overlay */}
          <div className="absolute inset-0 flex">
            <button
              onClick={prevSlide}
              className="w-1/5 h-full opacity-0 hover:opacity-100 transition-opacity flex items-center justify-start pl-4"
              aria-label="Previous slide"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </button>
            <div className="flex-1" /> {/* Click-through area */}
            <button
              onClick={nextSlide}
              className="w-1/5 h-full opacity-0 hover:opacity-100 transition-opacity flex items-center justify-end pr-4"
              aria-label="Next slide"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition">
                <ChevronRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Controls Bar - Hidden in fullscreen */}
      {!isFullscreen && (
        <div className="flex items-center justify-center gap-6 py-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-lg">
            <span className="text-white font-medium">{currentSlide + 1}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">{totalSlides}</span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-gray-700 mx-2" />

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
            title="Toggle fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      )}

      {/* Fullscreen Controls */}
      {isFullscreen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-black/80 backdrop-blur rounded-full opacity-0 hover:opacity-100 transition-opacity z-50">
          <button onClick={prevSlide} className="p-2 text-white/70 hover:text-white transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-white font-medium">{currentSlide + 1} / {totalSlides}</span>
          <button onClick={nextSlide} className="p-2 text-white/70 hover:text-white transition">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="w-px h-4 bg-white/30" />
          <button onClick={toggleFullscreen} className="p-2 text-white/70 hover:text-white transition">
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Keyboard hints */}
      {!isFullscreen && (
        <div className="text-center text-gray-500 text-sm">
          Use <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400 mx-1">←</kbd> <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400 mx-1">→</kbd> arrow keys to navigate
        </div>
      )}
    </div>
  );
}

// ============================================
// SLIDE 1: Cover Slide
// ============================================
function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Gradient Effects */}
      <div
        className="absolute -top-48 -right-24 w-[800px] h-[800px] rounded-full opacity-40 blur-[120px]"
        style={{ backgroundColor: '#1e3a8a' }}
      />
      <div
        className="absolute -bottom-64 -left-36 w-[900px] h-[900px] rounded-full opacity-20 blur-[140px]"
        style={{ backgroundColor: '#0891b2' }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header / Logo */}
      <div className="absolute top-0 left-0 w-full px-12 py-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center font-extrabold text-2xl shadow-lg"
            style={{
              backgroundColor: '#06b6d4',
              color: '#0f172a',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
            }}
          >
            R
          </div>
          <span className="font-bold text-2xl text-white tracking-tight">Ripotek</span>
        </div>
        <div className="text-white/50 text-sm tracking-widest">
          CAPABILITIES DECK 2026
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-24">
        {/* Pre-title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5" style={{ backgroundColor: '#06b6d4' }} />
          <span
            className="text-lg font-semibold tracking-[3px] uppercase"
            style={{ color: '#06b6d4' }}
          >
            Ripotek Technologies Inc.
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-7xl font-extrabold leading-tight mb-8 text-white"
          style={{ textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
        >
          Transform Data Into<br/>
          <span style={{ color: '#22d3ee' }}>Strategic Advantage</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-3xl font-light tracking-wide pl-5"
          style={{
            color: '#e2e8f0',
            borderLeft: '4px solid #3b82f6'
          }}
        >
          Design. Engineer. Deliver.
        </p>
      </div>

      {/* Decorative Tech Dots */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-50">
        {[false, true, false, false, true, false, false, true].map((active, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: active ? '#06b6d4' : 'rgba(255,255,255,0.3)',
              boxShadow: active ? '0 0 8px #06b6d4' : 'none'
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 border-t flex justify-between items-center px-12 z-20"
        style={{
          borderColor: 'rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="flex gap-10 text-base font-medium" style={{ color: '#cbd5e1' }}>
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4" style={{ color: '#22d3ee' }} />
            <span>www.ripotek.com</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4" style={{ color: '#22d3ee' }} />
            <span>info@ripotek.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-10" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <span className="text-sm font-medium" style={{ color: '#64748b' }}>CONFIDENTIAL</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 2: Who We Are
// ============================================
function Slide2() {
  const stats = [
    { icon: Building2, number: '50+', label: 'Enterprise Clients' },
    { icon: GraduationCap, number: '2,000+', label: 'Professionals Trained' },
    { icon: TrendingUp, number: '$12M+', label: 'Client Value Delivered' },
    { icon: CheckCircle, number: '85%', label: 'Training Placement Rate' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Company Overview
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>Who We Are</h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex px-16 py-8 gap-12">
        {/* Left Column */}
        <div className="flex-[0.55] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold leading-tight mb-5" style={{ color: '#1e3a8a' }}>
            Calgary's Premier Data & AI Consultancy
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#475569' }}>
            Ripotek Technologies empowers enterprises to transform their data into strategic assets. We specialize in modernizing data infrastructure, implementing advanced analytics, and building production-ready AI solutions that drive real business value.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>Founded</span>
              <div className="flex items-center gap-2 text-base font-medium" style={{ color: '#0f172a' }}>
                <Calendar className="w-4 h-4" style={{ color: '#0891b2' }} />
                <span>March 2023</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>Headquarters</span>
              <div className="flex items-center gap-2 text-base font-medium" style={{ color: '#0f172a' }}>
                <MapPin className="w-4 h-4" style={{ color: '#0891b2' }} />
                <span>Calgary, Alberta</span>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-1.5">
              <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>Core Focus</span>
              <div className="flex items-center gap-2 text-base font-medium" style={{ color: '#0f172a' }}>
                <Target className="w-4 h-4" style={{ color: '#0891b2' }} />
                <span>Enterprise Data Engineering, Analytics & AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div
          className="flex-[0.45] rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd' }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
            style={{ backgroundColor: '#e0f2fe' }}
          />

          {/* Stats List */}
          <div className="relative z-10 flex flex-col gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#0e7490' }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: '#22d3ee' }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-none mb-1" style={{ color: '#0f172a' }}>
                    {stat.number}
                  </span>
                  <span className="text-sm font-medium" style={{ color: '#64748b' }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>2</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 3: Our Impact
// ============================================
function Slide3() {
  const metrics = [
    { icon: Building2, value: '50+', label: 'Enterprise Clients', subtext: 'Across Canada', color: '#06b6d4', bgColor: '#ecfeff' },
    { icon: GraduationCap, value: '2,000+', label: 'Professionals Trained', subtext: 'Since 2023', color: '#3b82f6', bgColor: '#eff6ff' },
    { icon: TrendingUp, value: '$12M+', label: 'Client Value', subtext: 'Measurable ROI Delivered', color: '#0f172a', bgColor: '#f1f5f9' },
    { icon: CheckCircle, value: '85%', label: 'Job Placement Rate', subtext: 'Within 90 Days', color: '#14b8a6', bgColor: '#f0fdfa' }
  ];

  const topBorderColors = ['#06b6d4', '#3b82f6', '#0f172a', '#14b8a6'];

  return (
    <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
      {/* Background Blobs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-60"
        style={{ backgroundColor: '#f0f9ff' }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full opacity-60"
        style={{ backgroundColor: '#eff6ff' }}
      />

      {/* Header */}
      <div className="h-28 px-16 flex items-center justify-between z-10">
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Our Impact
          </span>
          <h1 className="text-4xl font-bold" style={{ color: '#0f172a' }}>
            Real outcomes that drive business transformation
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-16 pb-8 z-10">
        {/* Intro Text */}
        <p className="text-center text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: '#475569' }}>
          We measure our success not just by the technology we implement, but by the tangible value we deliver to our partners and the community.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg relative overflow-hidden"
              style={{ border: '1px solid #f1f5f9' }}
            >
              {/* Top Border Accent */}
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ backgroundColor: topBorderColors[idx] }}
              />

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: metric.bgColor }}
              >
                <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
              </div>

              {/* Value */}
              <span className="text-5xl font-extrabold mb-3 leading-none" style={{ color: '#0f172a' }}>
                {metric.value}
              </span>

              {/* Label */}
              <span className="text-base font-semibold uppercase tracking-wide mb-2" style={{ color: '#64748b' }}>
                {metric.label}
              </span>

              {/* Subtext */}
              <span className="text-sm" style={{ color: '#94a3b8' }}>
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-14 px-16 flex items-center justify-between text-sm border-t z-10"
        style={{ color: '#94a3b8', borderColor: '#f1f5f9' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>3</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 4: The Challenge
// ============================================
function Slide4() {
  const painPoints = [
    { icon: Server, title: 'Legacy Systems Lag', desc: "Existing infrastructure can't keep up with modern business speed and volume.", bgColor: '#fef2f2', color: '#ef4444' },
    { icon: LayoutGrid, title: 'Siloed Data', desc: 'Critical information trapped in departmental silos prevents holistic views.', bgColor: '#fff7ed', color: '#f97316' },
    { icon: Clock, title: 'Stale Decision Making', desc: 'Decisions are made on data that is hours or days old, not real-time.', bgColor: '#fffbeb', color: '#f59e0b' },
    { icon: DollarSign, title: 'Spend Without ROI', desc: 'Millions spent on tools and licenses without clear business value returns.', bgColor: '#f0fdf4', color: '#16a34a' },
    { icon: UserX, title: 'Skills Gap', desc: 'Internal teams lack specialized skills for cloud, AI, and modern data engineering.', bgColor: '#eff6ff', color: '#3b82f6' }
  ];

  const hiddenItems = [
    { label: 'Data Silos', bottom: '25%', left: '35%' },
    { label: 'Manual Excel Work', bottom: '15%', left: '55%' },
    { label: 'Poor Data Quality', bottom: '45%', left: '40%' },
    { label: 'Legacy Tech Debt', bottom: '35%', left: '60%' },
    { label: 'Security Risks', bottom: '10%', left: '45%' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            The Challenge
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Organizations Are Drowning in Data
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex px-16 py-3 gap-6">
        {/* Left: Iceberg Diagram */}
        <div
          className="flex-1 relative rounded-xl overflow-hidden"
          style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd' }}
        >
          {/* Water Background */}
          <div
            className="absolute left-0 w-full"
            style={{ top: '35%', height: '65%', backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
          />

          {/* Water Surface Line */}
          <div
            className="absolute left-0 w-full h-0.5"
            style={{ top: '35%', backgroundColor: '#0ea5e9', boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)' }}
          />

          {/* Iceberg Top (Triangle) */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '15%',
              width: 0,
              height: 0,
              borderLeft: '70px solid transparent',
              borderRight: '70px solid transparent',
              borderBottom: '100px solid white',
              filter: 'drop-shadow(0 -5px 15px rgba(255,255,255,0.8))'
            }}
          />

          {/* Caption on top */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '20%', width: '120px' }}>
            <p className="text-xs font-semibold" style={{ color: '#1e293b' }}>DASHBOARDS & REPORTS</p>
          </div>

          {/* Iceberg Bottom */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '35%',
              width: '220px',
              height: '260px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              clipPath: 'polygon(20% 0, 80% 0, 100% 40%, 80% 100%, 20% 90%, 0% 50%)',
              backdropFilter: 'blur(5px)'
            }}
          />

          {/* Labels */}
          <div
            className="absolute px-4 py-2 rounded-full text-xs font-bold shadow-md"
            style={{ top: '18%', right: '10%', backgroundColor: 'white', color: '#0f172a', border: '1px solid #e2e8f0' }}
          >
            VISIBLE (10%)
          </div>
          <div
            className="absolute px-4 py-2 rounded-full text-xs font-bold shadow-md"
            style={{ bottom: '18%', right: '10%', backgroundColor: '#1e3a8a', color: 'white' }}
          >
            HIDDEN (90%)
          </div>

          {/* Hidden items */}
          {hiddenItems.map((item, idx) => (
            <div
              key={idx}
              className="absolute text-xs font-semibold px-2 py-1 rounded"
              style={{
                bottom: item.bottom,
                left: item.left,
                color: '#1e3a8a',
                backgroundColor: 'rgba(255,255,255,0.7)'
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Right: Pain Points */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-3 leading-tight" style={{ color: '#1e3a8a' }}>
            Common Enterprise Data Pain Points
          </h2>

          <div className="flex flex-col gap-2">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border transition-all hover:translate-x-1"
                style={{ borderColor: '#f1f5f9' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: point.bgColor }}
                >
                  <point.icon className="w-4 h-4" style={{ color: point.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-0.5" style={{ color: '#334155' }}>{point.title}</h3>
                  <p className="text-xs leading-snug" style={{ color: '#64748b' }}>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div
            className="mt-3 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <p className="text-sm font-semibold text-white">
              Sound familiar? You're not alone. Most enterprises face these same hurdles.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#f1f5f9' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>4</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 5: Our Solution
// ============================================
function Slide5() {
  const methodologySteps = [
    { icon: Compass, title: 'Strategy & Governance', desc: 'Roadmaps, policies & compliance frameworks', color: '#3b82f6', bgColor: '#eff6ff' },
    { icon: Layers, title: 'Platform Build', desc: 'Cloud data platforms & modern architecture', color: '#14b8a6', bgColor: '#f0fdfa' },
    { icon: BarChart3, title: 'Analytics & BI', desc: 'Dashboards, reports & self-service analytics', color: '#f97316', bgColor: '#fff7ed' },
    { icon: Brain, title: 'AI & MLOps', desc: 'ML models, GenAI & production pipelines', color: '#8b5cf6', bgColor: '#f5f3ff' },
    { icon: LifeBuoy, title: 'Managed Services', desc: '24/7 support & continuous optimization', color: '#06b6d4', bgColor: '#ecfeff' },
    { icon: UsersRound, title: 'Team Training', desc: 'Upskilling programs & certification paths', color: '#22c55e', bgColor: '#f0fdf4' }
  ];

  const beforeItems = [
    { icon: LayoutGrid, label: 'Siloed Data' },
    { icon: Clock, label: 'Manual Processes' },
    { icon: UserX, label: 'Delayed Insights' }
  ];

  const afterItems = [
    { icon: Layers, label: 'Unified Truth' },
    { icon: Rocket, label: 'Real-time Action' },
    { icon: TrendingUp, label: 'Strategic Growth' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Our Solution
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            End-to-End Data Transformation
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex px-12 py-8 gap-6 items-center">
        {/* Left Panel - Before State */}
        <div
          className="w-48 h-full rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}
        >
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: '#991b1b' }}>
            The Challenge
          </h3>
          <div className="flex flex-col gap-4">
            {beforeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                <item.icon className="w-5 h-5" style={{ color: '#dc2626' }} />
                <span className="text-sm font-medium" style={{ color: '#7f1d1d' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <div className="w-8 h-0.5" style={{ backgroundColor: '#94a3b8' }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '10px solid #94a3b8'
            }}
          />
        </div>

        {/* Center - Methodology */}
        <div className="flex-1 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#1e3a8a' }}>
            The Ripotek Methodology
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl p-4 flex flex-col items-center text-center transition-all hover:scale-105"
                style={{ backgroundColor: step.bgColor, border: `1px solid ${step.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-bold mb-1" style={{ color: '#0f172a' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <div className="w-8 h-0.5" style={{ backgroundColor: '#94a3b8' }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '10px solid #94a3b8'
            }}
          />
        </div>

        {/* Right Panel - After State */}
        <div
          className="w-48 h-full rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
        >
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: '#166534' }}>
            The Outcome
          </h3>
          <div className="flex flex-col gap-4">
            {afterItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                <item.icon className="w-5 h-5" style={{ color: '#16a34a' }} />
                <span className="text-sm font-medium" style={{ color: '#14532d' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-14 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#f1f5f9' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>5</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 6: Why Ripotek
// ============================================
function Slide6() {
  const cards = [
    {
      icon: Factory,
      title: 'Industry Expertise',
      items: ['15+ Energy clients', '20+ Finance clients', '10+ Public Sector', 'Regulatory compliance'],
      highlight: 'We speak your language',
      accentColor: '#3b82f6',
      bgColor: '#eff6ff',
      highlightBg: '#eff6ff',
      highlightText: '#1e40af'
    },
    {
      icon: PieChart,
      title: 'Proven Results',
      items: ['85% on-time delivery', '6-month avg ROI', 'Zero data breaches', 'Scalable architecture'],
      highlight: 'Measurable outcomes',
      accentColor: '#14b8a6',
      bgColor: '#f0fdfa',
      highlightBg: '#f0fdfa',
      highlightText: '#115e59'
    },
    {
      icon: UserCog,
      title: 'Knowledge Transfer',
      items: ['Training built-in', 'Team owns solution', 'No vendor lock-in', 'Continuous upskilling'],
      highlight: 'Sustained success',
      accentColor: '#f59e0b',
      bgColor: '#fffbeb',
      highlightBg: '#fffbeb',
      highlightText: '#92400e'
    },
    {
      icon: Layers,
      title: 'Full Stack Expertise',
      items: ['Azure | Databricks', 'Fabric | Power BI', 'Python | Spark | SQL', 'GenAI | MLOps'],
      highlight: 'Modern Tech Stack',
      accentColor: '#0f172a',
      bgColor: '#f1f5f9',
      highlightBg: '#f1f5f9',
      highlightText: '#1e293b'
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Why Choose Us
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            We're Different. Here's How.
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-8" style={{ backgroundColor: '#f8fafc' }}>
        {/* Headline */}
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold" style={{ color: '#334155' }}>
            Not just consultants—we're your <span className="font-bold" style={{ color: '#0891b2' }}>partners in transformation</span>.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-4 gap-6 flex-1">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex flex-col border relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: '#e2e8f0' }}
            >
              {/* Top Accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: card.accentColor }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: card.bgColor }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.accentColor }} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-4 pb-4 border-b"
                style={{ color: '#1e293b', borderColor: '#f1f5f9' }}
              >
                {card.title}
              </h3>

              {/* Features List */}
              <ul className="flex-1 flex flex-col gap-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#64748b' }}>
                    <Check className="w-3 h-3 mt-1 shrink-0" style={{ color: card.accentColor }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Highlight */}
              <div
                className="mt-5 py-3 rounded-lg text-center text-sm font-semibold"
                style={{ backgroundColor: card.highlightBg, color: card.highlightText }}
              >
                {card.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-14 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>6</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 7: Our Team
// ============================================
function Slide7() {
  const teamMembers = [
    {
      icon: User,
      name: 'Sarah Chen',
      role: 'Lead Data Architect',
      desc: '15+ years designing enterprise data warehouses and lakehouses for Fortune 500s.',
      bgColor: '#eff6ff',
      iconColor: '#3b82f6'
    },
    {
      icon: User,
      name: 'Marcus Johnson',
      role: 'Principal BI',
      desc: 'Ex-Microsoft specialist in Power BI optimization and enterprise semantic models.',
      bgColor: '#f0fdfa',
      iconColor: '#14b8a6'
    },
    {
      icon: GraduationCap,
      name: 'Priya Sharma, PhD',
      role: 'AI/ML Lead',
      desc: 'Expert in generative AI, MLOps, and predictive modeling for finance & energy.',
      bgColor: '#fdf4ff',
      iconColor: '#c026d3'
    },
    {
      icon: Presentation,
      name: 'David Thompson',
      role: 'Sr. Databricks Instr.',
      desc: 'Certified Databricks Champion with a track record of training 500+ engineers.',
      bgColor: '#fff7ed',
      iconColor: '#f97316'
    },
    {
      icon: Cloud,
      name: 'Elena Rodriguez',
      role: 'Cloud Architect',
      desc: 'Specializes in secure Azure infrastructure and zero-trust cloud environments.',
      bgColor: '#ecfeff',
      iconColor: '#0891b2'
    }
  ];

  const stats = [
    { icon: Briefcase, value: '50+ Years', label: 'Combined Experience' },
    { icon: Award, value: '40+', label: 'Professional Certifications' },
    { icon: Building2, value: 'Top Tier', label: 'Fortune 500 Project Experience' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Our Team
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            World-Class Expertise
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-6 gap-6" style={{ backgroundColor: '#f8fafc' }}>
        {/* Team Grid */}
        <div className="grid grid-cols-5 gap-5 flex-1">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center border transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              style={{ borderColor: '#e2e8f0' }}
            >
              {/* Hover accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-0 transition-opacity"
                style={{ backgroundColor: '#06b6d4' }}
              />

              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 border-white shadow-md"
                style={{ backgroundColor: member.bgColor }}
              >
                <member.icon className="w-8 h-8" style={{ color: member.iconColor }} />
              </div>

              {/* Name */}
              <h3 className="text-base font-bold mb-1" style={{ color: '#1e293b' }}>
                {member.name}
              </h3>

              {/* Role */}
              <div
                className="text-xs font-semibold uppercase tracking-wide mb-3 h-8 flex items-center justify-center"
                style={{ color: '#06b6d4' }}
              >
                {member.role}
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className="h-24 bg-white rounded-2xl flex items-center justify-around px-10 border"
          style={{ borderColor: '#e2e8f0' }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <stat.icon className="w-5 h-5" style={{ color: '#0284c7' }} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold" style={{ color: '#0f172a' }}>
                  {stat.value}
                </span>
                <span className="text-xs font-medium" style={{ color: '#64748b' }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-14 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>7</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 8: Services Overview (Section Divider)
// ============================================
function Slide8() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Glow Effects */}
      <div
        className="absolute -top-36 -right-24 w-[600px] h-[600px] rounded-full opacity-60"
        style={{ backgroundColor: '#1e3a8a', filter: 'blur(80px)' }}
      />
      <div
        className="absolute -bottom-48 -left-24 w-[800px] h-[800px] rounded-full opacity-25"
        style={{ backgroundColor: '#0891b2', filter: 'blur(100px)' }}
      />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Background Icons */}
      <Boxes
        className="absolute opacity-[0.03] -rotate-[15deg]"
        style={{ top: '15%', left: '10%', width: '180px', height: '180px', color: 'white' }}
      />
      <Network
        className="absolute opacity-[0.03] rotate-[15deg]"
        style={{ bottom: '10%', right: '8%', width: '220px', height: '220px', color: 'white' }}
      />

      {/* Main Content */}
      <div className="text-center max-w-4xl px-10 z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <span
          className="text-base font-bold uppercase tracking-[4px] mb-6 px-4 py-2 rounded-full"
          style={{
            color: '#22d3ee',
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.2)'
          }}
        >
          Comprehensive Solutions
        </span>

        {/* Title */}
        <h1
          className="text-7xl font-extrabold text-white mb-8 leading-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)', letterSpacing: '-1px' }}
        >
          Services Overview
        </h1>

        {/* Subtitle */}
        <p className="text-2xl font-light leading-relaxed mb-12" style={{ color: '#e2e8f0' }}>
          From strategy to implementation, we deliver end-to-end data and AI solutions that drive real business value.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 opacity-80">
          <div className="w-20 h-0.5" style={{ backgroundColor: '#06b6d4' }} />
          <Diamond className="w-5 h-5" style={{ color: '#06b6d4' }} />
          <div className="w-20 h-0.5" style={{ backgroundColor: '#06b6d4' }} />
        </div>
      </div>

      {/* Slide Number */}
      <div
        className="absolute bottom-8 right-10 text-sm font-medium"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        8
      </div>
    </div>
  );
}

// ============================================
// SLIDE 9: Strategy & Governance
// ============================================
function Slide9() {
  const whatWeDo = [
    { title: 'Current State Assessment', desc: 'Comprehensive audit of existing data infrastructure, processes, and maturity levels.' },
    { title: 'Target Architecture Design', desc: 'Designing scalable, future-proof cloud data platforms tailored to business goals.' },
    { title: 'Governance Framework', desc: 'Establishing policies for data quality, access control, and master data management.' },
    { title: 'Compliance & Security', desc: 'Developing roadmaps for regulatory compliance (GDPR, HIPAA) and security strategy.' }
  ];

  const deliverables = [
    'Detailed Architecture Blueprints',
    'Data Governance Playbooks',
    'Prioritized Implementation Roadmap',
    'Cloud Cost & ROI Analysis',
    'Security & Risk Assessment Report'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Strategy & Governance
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 flex-1">
          {/* Left: What We Do */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-3 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <ClipboardList className="w-5 h-5" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>What We Do</h2>
            </div>

            <div className="flex flex-col gap-3">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Deliverables */}
          <div
            className="bg-white rounded-xl p-5 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-3 pb-3 border-b-2 mb-3" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <PackageOpen className="w-5 h-5" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>Key Deliverables</h2>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-3 h-3" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-6">
          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Typical Timeline</div>
              <div className="text-xl font-bold text-white">2 - 4 Weeks</div>
            </div>
            <Clock className="w-8 h-8" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-xl font-bold text-white">$15K - $30K</div>
            </div>
            <Coins className="w-8 h-8" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>9</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 10: Data Platform Build
// ============================================
function Slide10() {
  const whatWeDo = [
    { icon: Cloud, title: 'Platform Implementation', desc: 'End-to-end deployment of Azure, Databricks, and Microsoft Fabric environments.' },
    { icon: Database, title: 'Lakehouse Architecture', desc: 'Building Medallion architectures (Bronze/Silver/Gold) for organized data flow.' },
    { icon: Workflow, title: 'ELT Pipeline Development', desc: 'Scalable data ingestion and transformation pipelines using Spark and SQL.' },
    { icon: CheckCheck, title: 'Data Quality Frameworks', desc: 'Automated testing and validation to ensure high-fidelity data assets.' },
    { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Infrastructure as Code (IaC) and automated deployment pipelines.' }
  ];

  const outcomes = [
    'Modern Data Lakehouse',
    'Automated Data Pipelines',
    'Data Quality Dashboards',
    'CI/CD Deployment Setup',
    'Comprehensive Documentation'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Data Platform Build
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-3 gap-2" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 flex-1">
          {/* Left: What We Do */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-2 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <Layers className="w-4 h-4" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>What We Do</h2>
            </div>

            <div className="flex flex-col gap-2">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <item.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-snug" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Outcomes */}
          <div
            className="bg-white rounded-xl p-4 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-2 pb-2 border-b-2 mb-2" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <PackageOpen className="w-4 h-4" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>Key Outcomes</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-3 h-3" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Typical Timeline</div>
              <div className="text-lg font-bold text-white">3 - 6 Months</div>
            </div>
            <Calendar className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-lg font-bold text-white">$100K - $300K</div>
            </div>
            <Coins className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>10</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 11: Analytics & BI
// ============================================
function Slide11() {
  const whatWeDo = [
    { icon: PieChart, title: 'Power BI Dashboard Development', desc: 'Creating interactive, visually stunning reports that transform raw data into actionable insights.' },
    { icon: Database, title: 'Semantic Model Design', desc: 'Building robust, scalable data models that serve as a single source of truth for the enterprise.' },
    { icon: Gauge, title: 'DAX Optimization & Tuning', desc: 'Optimizing complex calculations and tuning performance for lightning-fast report rendering.' },
    { icon: Layers, title: 'Embedded Analytics', desc: 'Seamlessly integrating Power BI reports directly into your custom applications and portals.' },
    { icon: Shield, title: 'Row-Level Security (RLS)', desc: 'Implementing granular data access controls to ensure users only see appropriate data.' }
  ];

  const outcomes = [
    'Real-time Visibility',
    'Self-service Analytics',
    '90%+ User Adoption Rate',
    'Faster Decision Making'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Analytics & BI
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-3 gap-2" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 flex-1">
          {/* Left: What We Do */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-2 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <LineChart className="w-4 h-4" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>What We Do</h2>
            </div>

            <div className="flex flex-col gap-2">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <item.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-snug" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Outcomes */}
          <div
            className="bg-white rounded-xl p-4 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-2 pb-2 border-b-2 mb-2" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <Trophy className="w-4 h-4" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>Key Outcomes</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-3 h-3" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Typical Timeline</div>
              <div className="text-lg font-bold text-white">2 - 4 Months</div>
            </div>
            <Clock className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-lg font-bold text-white">$50K - $150K</div>
            </div>
            <Coins className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>11</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 12: MLOps & AI Solutions
// ============================================
function Slide12() {
  const whatWeDo = [
    { title: 'GenAI POCs & RAG Systems', desc: 'Rapid prototyping of Generative AI using Azure OpenAI and Retrieval-Augmented Generation.' },
    { title: 'MLOps Pipelines', desc: 'End-to-end automated pipelines for model training, testing, and production deployment.' },
    { title: 'Feature Stores & Model Mgmt', desc: 'Centralized feature engineering and robust model versioning and registry.' },
    { title: 'AI Governance', desc: 'Ensuring ethical AI, explainability, compliance, and responsible data usage.' }
  ];

  const useCases = [
    'Document Q&A Assistants',
    'Predictive Maintenance',
    'Fraud Detection Systems',
    'Customer Churn Prediction',
    'Demand Forecasting'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            MLOps & AI Solutions
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 flex-1">
          {/* Left: What We Do */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-2 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <Bot className="w-5 h-5" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>What We Do</h2>
            </div>

            <div className="flex flex-col gap-3">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Use Cases */}
          <div
            className="bg-white rounded-xl p-5 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-3 pb-2 border-b-2 mb-3" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <Brain className="w-5 h-5" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>Use Cases</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {useCases.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#fef3c7' }}
                  >
                    <Zap className="w-2.5 h-2.5" style={{ color: '#f59e0b' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-5">
          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Typical Timeline</div>
              <div className="text-xl font-bold text-white">2 - 6 Months</div>
            </div>
            <Clock className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-xl font-bold text-white">$75K - $250K</div>
            </div>
            <Coins className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>12</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 13: Managed Services
// ============================================
function Slide13() {
  const whatWeOffer = [
    { icon: Bell, title: '24/7 Monitoring & Alerting', desc: 'Proactive oversight of critical systems with automated alerting to prevent downtime.' },
    { icon: LineChart, title: 'Performance & Cost Optimization (FinOps)', desc: 'Continuous tuning for speed and efficiency, ensuring maximum value from cloud spend.' },
    { icon: UserCog, title: 'User Support & Incident Response', desc: 'Rapid resolution of technical issues and dedicated support for your team\'s needs.' },
    { icon: Server, title: 'Capacity Planning', desc: 'Strategic resource forecasting to ensure infrastructure scales with business growth.' }
  ];

  const deliverables = [
    '99.9% System Uptime Guarantee',
    '< 4 Hour Response Time',
    'Monthly System Health Reports',
    'Proactive Security Patching'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Managed Services
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 flex-1">
          {/* Left: What We Offer */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-2 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <Headset className="w-5 h-5" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>What We Offer</h2>
            </div>

            <div className="flex flex-col gap-3">
              {whatWeOffer.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <item.icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SLA & Deliverables */}
          <div
            className="bg-white rounded-xl p-5 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-3 pb-2 border-b-2 mb-3" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <ClipboardCheck className="w-5 h-5" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>SLA & Deliverables</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-5">
          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Engagement Model</div>
              <div className="text-xl font-bold text-white">Monthly / Ongoing</div>
            </div>
            <CalendarCheck className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-xl font-bold text-white">$8K - $25K / month</div>
            </div>
            <Coins className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>13</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 14: Enterprise Training
// ============================================
function Slide14() {
  const trainingServices = [
    { title: 'Corporate Bootcamps', desc: 'Intensive 1-3 week upskilling programs tailored to enterprise requirements.' },
    { title: 'Custom Curriculum Design', desc: 'Learning paths designed specifically for your technology stack and team roles.' },
    { title: 'Certification Prep & Support', desc: 'Focused training for official Azure and Databricks certifications with high pass rates.' },
    { title: 'Flexible Delivery Model', desc: 'On-site or virtual delivery with 30-day post-training support and project guidance.' }
  ];

  const programs = [
    'Power BI for Analysts',
    'Azure Data Engineering',
    'Databricks for Engineers',
    'AI/ML Fundamentals',
    'Azure Data Factory & Synapse'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Enterprise Training
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-4 gap-3" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 flex-1">
          {/* Left: Training Services */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-3 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <Presentation className="w-5 h-5" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>Training Services</h2>
            </div>

            <div className="flex flex-col gap-3">
              {trainingServices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Popular Programs */}
          <div
            className="bg-white rounded-xl p-5 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-3 pb-3 border-b-2 mb-3" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <BookOpen className="w-5 h-5" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-lg font-bold" style={{ color: '#1e3a8a' }}>Popular Programs</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {programs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-5">
          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Program Duration</div>
              <div className="text-xl font-bold text-white">1 - 3 Weeks</div>
            </div>
            <Calendar className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-xl p-4 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1.5 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-xl font-bold text-white">$5K - $50K</div>
            </div>
            <Tag className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>14</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 15: Cloud Migration & Modernization
// ============================================
function Slide15() {
  const whatWeDo = [
    { title: 'Workload Assessment', desc: 'Analyze current infrastructure to identify migration candidates, dependencies, and risks.' },
    { title: 'Migrate DW/ETL to Cloud', desc: 'Seamlessly lift and shift or re-platform data warehouses and ETL pipelines to the cloud.' },
    { title: 'Modernize to Lakehouse/Fabric', desc: 'Upgrade legacy systems to modern Lakehouse architectures or Microsoft Fabric environments.' },
    { title: 'Optimize Cost & Performance', desc: 'Refine resource allocation to maximize performance while minimizing cloud spend (FinOps).' },
    { title: 'Security & Governance', desc: 'Implement robust security controls and data governance frameworks during migration.' }
  ];

  const deliverables = [
    'Detailed Migration Plan',
    'Cutover & Rollback Runbooks',
    'Secure Landing Zone Setup',
    'TCO & Cost Model',
    'Migration KPI Dashboard'
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Service Detail
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Cloud Migration & Modernization
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-3 gap-2" style={{ backgroundColor: '#f8fafc' }}>
        {/* Two Column Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6 flex-1">
          {/* Left: What We Do */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-2 border-b-2" style={{ borderColor: '#e2e8f0' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ecfeff' }}
              >
                <CloudUpload className="w-4 h-4" style={{ color: '#0891b2' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>What We Do</h2>
            </div>

            <div className="flex flex-col gap-2">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border transition-all hover:translate-x-1"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#334155' }}>{item.title}</h4>
                    <p className="text-xs leading-snug" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key Deliverables */}
          <div
            className="bg-white rounded-xl p-4 border flex flex-col"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex items-center gap-2 pb-2 border-b-2 mb-2" style={{ borderColor: '#bae6fd' }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eff6ff' }}
              >
                <PackageOpen className="w-4 h-4" style={{ color: '#3b82f6' }} />
              </div>
              <h2 className="text-base font-bold" style={{ color: '#1e3a8a' }}>Key Deliverables</h2>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-md"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: '#10b981' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Typical Timeline</div>
              <div className="text-lg font-bold text-white">2 - 5 Months</div>
            </div>
            <Clock className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>

          <div
            className="rounded-lg p-3 flex items-center justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: '#06b6d4' }} />
            <div className="pl-3">
              <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#94a3b8' }}>Investment Range</div>
              <div className="text-lg font-bold text-white">$80K - $220K</div>
            </div>
            <Coins className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>15</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 16: Technology Partners
// ============================================
function Slide16() {
  const partners = [
    { name: 'Microsoft Azure', icon: Monitor, color: '#0078d4', borderColor: '#0078d4' },
    { name: 'Databricks', icon: Layers, color: '#ff3621', borderColor: '#ff3621' },
    { name: 'Microsoft Fabric', icon: Network, color: '#502288', borderColor: '#605e5c' },
    { name: 'Power BI', icon: BarChart3, color: '#dcb000', borderColor: '#f2c811' },
    { name: 'Snowflake', icon: Snowflake, color: '#29b5e8', borderColor: '#29b5e8' },
    { name: 'AWS', icon: Cloud, color: '#ff9900', borderColor: '#ff9900' }
  ];

  const certifications = [
    { count: '40+', label: 'Azure Certifications', icon: Award },
    { count: 'Arch.', label: 'Databricks Certified', icon: GraduationCap },
    { count: 'Spec.', label: 'Power BI Specialists', icon: TrendingUp }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Ecosystem & Expertise
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Technology Partners
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-6 gap-6" style={{ backgroundColor: '#f8fafc' }}>
        {/* Intro Text */}
        <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#475569' }}>
          We partner with industry leaders to deliver best-in-class solutions. Our deep expertise across these platforms ensures you get the most out of your technology investment.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 gap-5 flex-1">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border flex flex-col items-center justify-center relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: '#e2e8f0' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: partner.borderColor }}
              />
              <partner.icon className="w-12 h-12 mb-3" style={{ color: partner.color }} />
              <span className="font-bold text-lg" style={{ color: '#334155' }}>{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div
          className="rounded-2xl p-6 flex items-center justify-between relative overflow-hidden"
          style={{ backgroundColor: '#1e3a8a' }}
        >
          {/* Background shape */}
          <div
            className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full opacity-10"
            style={{ backgroundColor: '#06b6d4' }}
          />

          {/* Left: Title block */}
          <div className="flex flex-col gap-2 pr-10 border-r" style={{ borderColor: 'rgba(255,255,255,0.1)', maxWidth: '280px' }}>
            <h3 className="text-xl font-bold text-white">Proven Expertise</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              Our team holds top-tier certifications validating our technical mastery.
            </p>
          </div>

          {/* Right: Certifications */}
          <div className="flex gap-10 pl-10 flex-1 justify-end">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <cert.icon className="w-6 h-6" style={{ color: '#22d3ee' }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-none mb-1">{cert.count}</span>
                  <span className="text-xs" style={{ color: '#cbd5e1', maxWidth: '100px', lineHeight: 1.2 }}>{cert.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>16</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 17: Our Delivery Methodology
// ============================================
function Slide17() {
  const phases = [
    {
      number: 1,
      title: 'Discovery',
      duration: '2 - 4 Weeks',
      color: '#1e3a8a',
      bgColor: '#eff6ff',
      durationBg: '#eff6ff',
      durationText: '#1e40af',
      items: [
        { icon: Search, text: 'Stakeholder interviews & needs analysis' },
        { icon: ClipboardCheck, text: 'Current state assessment' },
        { icon: PenTool, text: 'Solution design & roadmap' },
        { icon: FileText, text: 'Detailed proposal' }
      ]
    },
    {
      number: 2,
      title: 'Implementation',
      duration: '3 - 6 Months',
      color: '#0891b2',
      bgColor: '#f0fdfa',
      durationBg: '#ecfeff',
      durationText: '#0e7490',
      items: [
        { icon: GitBranch, text: 'Platform build & configuration' },
        { icon: Database, text: 'Pipeline development' },
        { icon: LineChart, text: 'Dashboard creation' },
        { icon: Presentation, text: 'Team training & handoff' }
      ]
    },
    {
      number: 3,
      title: 'Support',
      duration: 'Ongoing',
      color: '#06b6d4',
      bgColor: '#ecfeff',
      durationBg: '#f0fdfa',
      durationText: '#0f766e',
      items: [
        { icon: Headset, text: 'Managed services support' },
        { icon: Gauge, text: 'Performance optimization' },
        { icon: Maximize2, text: 'Feature expansion' },
        { icon: RefreshCw, text: 'Continuous improvement' }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            How We Work
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Our Delivery Methodology
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-10 justify-center" style={{ backgroundColor: '#f8fafc' }}>
        {/* Timeline Container */}
        <div className="relative flex justify-between mt-5">
          {/* Connecting Line */}
          <div
            className="absolute h-1 z-0"
            style={{
              top: '40px',
              left: '80px',
              right: '80px',
              backgroundColor: '#e2e8f0'
            }}
          />
          <div
            className="absolute h-1 z-0 opacity-30"
            style={{
              top: '40px',
              left: '80px',
              right: '80px',
              backgroundColor: '#06b6d4'
            }}
          />

          {/* Phase Cards */}
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="flex-1 mx-4 relative z-10 flex flex-col items-center text-center"
              style={{ paddingTop: '50px' }}
            >
              {/* Phase Number Circle */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center font-extrabold text-3xl z-10 border-4 shadow-md transition-transform hover:scale-110"
                style={{
                  backgroundColor: phase.bgColor,
                  color: phase.color,
                  borderColor: phase.color
                }}
              >
                {phase.number}
              </div>

              {/* Card Content */}
              <div
                className="bg-white rounded-2xl border w-full flex flex-col gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderColor: '#e2e8f0',
                  padding: '50px 24px 24px'
                }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e293b' }}>{phase.title}</h3>
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: phase.durationBg, color: phase.durationText }}
                  >
                    {phase.duration}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 text-left">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm" style={{ color: '#64748b' }}>
                      <item.icon className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: phase.color }} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>17</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 18: Industries We Serve
// ============================================
function Slide18() {
  const industries = [
    {
      title: 'Energy & Utilities',
      icon: Zap,
      accentColor: '#0891b2',
      bgColor: '#ecfeff',
      features: [
        'Real-time operations',
        'Predictive maintenance',
        'Regulatory compliance',
        'Production optimization'
      ]
    },
    {
      title: 'Financial Services',
      icon: PieChart,
      accentColor: '#1e3a8a',
      bgColor: '#eff6ff',
      features: [
        'Risk analytics',
        'Fraud detection',
        'Regulatory reporting',
        'Customer 360 insights'
      ]
    },
    {
      title: 'Public Sector',
      icon: Landmark,
      accentColor: '#06b6d4',
      bgColor: '#f0fdfa',
      features: [
        'Citizen services portal',
        'Policy analytics',
        'Cross-agency sharing',
        'Grant management'
      ]
    },
    {
      title: 'Healthcare',
      icon: HeartPulse,
      accentColor: '#14b8a6',
      bgColor: '#f0fdf4',
      features: [
        'Patient outcome analysis',
        'Operational efficiency',
        'Research analytics',
        'HIPAA compliance'
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Vertical Expertise
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Industries We Serve
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-8 relative" style={{ backgroundColor: '#f8fafc' }}>
        {/* Background Pattern */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Industry Grid */}
        <div className="grid grid-cols-4 gap-6 h-full relative z-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border flex flex-col items-center text-center relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: '#e2e8f0', padding: '28px 20px' }}
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ backgroundColor: industry.accentColor }}
              />

              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform hover:scale-110"
                style={{ backgroundColor: industry.bgColor }}
              >
                <industry.icon className="w-9 h-9" style={{ color: industry.accentColor }} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-5 h-12 flex items-center"
                style={{ color: '#1e293b' }}
              >
                {industry.title}
              </h3>

              {/* Features List */}
              <div className="flex flex-col gap-2.5 w-full text-left">
                {industry.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className="flex items-start gap-2.5 text-sm rounded-lg px-3 py-2"
                    style={{ backgroundColor: '#f8fafc', color: '#64748b' }}
                  >
                    <Check className="w-3 h-3 mt-0.5 shrink-0" style={{ color: industry.accentColor }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>18</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 19: Energy Sector Success (Case Study)
// ============================================
function Slide19() {
  const challenges = [
    { icon: XCircle, text: '15+ Disconnected Systems:', desc: 'Fragmented data landscape creating operational blind spots.' },
    { icon: Clock, text: '72-Hour Reporting Delays:', desc: 'Critical operational decisions made on stale, 3-day old data.' },
    { icon: FileSpreadsheet, text: 'Manual Consolidation:', desc: 'High risk of human error and excessive time spent on data prep.' }
  ];

  const solutions = [
    { icon: CheckCircle, text: 'Modern Data Platform:', desc: 'Implemented Azure Synapse + Databricks for scalable processing.' },
    { icon: Radio, text: 'Real-time Streaming:', desc: 'IoT data ingestion pipeline for instant operational visibility.' },
    { icon: PieChart, text: 'Automated Dashboards:', desc: 'Self-service Power BI reports replacing manual Excel workflows.' }
  ];

  const results = [
    { value: '99.7%', label: 'Faster Reporting', desc: 'Reduced from 72h to 15min', bgColor: '#1e3a8a', icon: Timer },
    { value: '$2.4M', label: 'Annual Savings', desc: 'Through operational efficiency', bgColor: '#0891b2', icon: Banknote },
    { value: '40%', label: 'Lower Infra Cost', desc: 'Optimized cloud resource usage', bgColor: '#06b6d4', icon: Server },
    { value: '28%', label: 'Less Downtime', desc: 'via Predictive Maintenance', bgColor: '#0f766e', icon: Settings }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Case Study
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Energy Sector Success
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Context Banner */}
        <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl border" style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <Factory className="w-5 h-5" style={{ color: '#1e3a8a' }} />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold" style={{ color: '#64748b' }}>Client</p>
              <p className="font-bold text-lg" style={{ color: '#1e293b' }}>Major Canadian Energy Producer</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <Calendar className="w-4 h-4" />
              <span>Timeline: 8 Months</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <MapPin className="w-4 h-4" />
              <span>Alberta, Canada</span>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="flex gap-6 flex-1">
          {/* Challenge Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#ef4444' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <AlertTriangle className="w-5 h-5" style={{ color: '#ef4444' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>The Challenge</h2>
            </div>
            <div className="flex flex-col gap-4">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#f87171' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#06b6d4' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <Lightbulb className="w-5 h-5" style={{ color: '#06b6d4' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Our Solution</h2>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#22d3ee' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-base" style={{ color: '#1e3a8a' }}>
            <Trophy className="w-5 h-5" />
            <span>Measurable Impact</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 flex flex-col justify-center relative overflow-hidden text-white"
                style={{ backgroundColor: result.bgColor, height: '120px' }}
              >
                <result.icon
                  className="absolute -right-2 -bottom-2 w-20 h-20 opacity-10 -rotate-12"
                />
                <div className="text-4xl font-extrabold leading-none mb-1 relative z-10">{result.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90 relative z-10">{result.label}</div>
                <div className="text-xs opacity-70 mt-1 relative z-10">{result.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>19</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 20: Financial Services Success (Case Study)
// ============================================
function Slide20() {
  const challenges = [
    { icon: Network, text: 'Fragmented Reporting:', desc: 'Risk data siloed across 12 different business units.' },
    { icon: CalendarX2, text: 'Slow Month-End:', desc: '3-week manual consolidation process delaying critical insights.' },
    { icon: Percent, text: 'Data Quality Issues:', desc: 'Struggling with an 87% data accuracy baseline.' }
  ];

  const solutions = [
    { icon: Network, text: 'Microsoft Fabric Lakehouse:', desc: 'Unified data platform with automated ELT pipelines.' },
    { icon: Shield, text: 'Governed Models:', desc: 'Semantic models ensuring consistent business logic.' },
    { icon: LineChart, text: 'Executive Dashboards:', desc: 'Real-time visualization for instant risk assessment.' }
  ];

  const results = [
    { value: '93%', label: 'Faster Reporting', desc: 'Reduced from 3 weeks to 2 days', bgColor: '#1e3a8a', icon: Gauge },
    { value: '500+', label: 'Processes Removed', desc: 'Eliminated manual Excel work', bgColor: '#0891b2', icon: ClipboardList },
    { value: '99.97%', label: 'Data Accuracy', desc: 'Achieved high quality standards', bgColor: '#06b6d4', icon: CheckCheck },
    { value: 'Real-time', label: 'Risk Visibility', desc: 'Instant exposure monitoring', bgColor: '#0f766e', icon: Eye }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Case Study
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Financial Services Success
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Context Banner */}
        <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl border" style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <Landmark className="w-5 h-5" style={{ color: '#1e3a8a' }} />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold" style={{ color: '#64748b' }}>Client</p>
              <p className="font-bold text-lg" style={{ color: '#1e293b' }}>Top-5 Canadian Bank</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <Calendar className="w-4 h-4" />
              <span>Timeline: 6 Months</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <MapPin className="w-4 h-4" />
              <span>Toronto, Canada</span>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="flex gap-6 flex-1">
          {/* Challenge Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#ef4444' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <AlertTriangle className="w-5 h-5" style={{ color: '#ef4444' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>The Challenge</h2>
            </div>
            <div className="flex flex-col gap-4">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#f87171' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#06b6d4' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <Lightbulb className="w-5 h-5" style={{ color: '#06b6d4' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Our Solution</h2>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#22d3ee' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-base" style={{ color: '#1e3a8a' }}>
            <Trophy className="w-5 h-5" />
            <span>Measurable Impact</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 flex flex-col justify-center relative overflow-hidden text-white"
                style={{ backgroundColor: result.bgColor, height: '120px' }}
              >
                <result.icon
                  className="absolute -right-2 -bottom-2 w-20 h-20 opacity-10 -rotate-12"
                />
                <div className="text-3xl font-extrabold leading-none mb-1 relative z-10">{result.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90 relative z-10">{result.label}</div>
                <div className="text-xs opacity-70 mt-1 relative z-10">{result.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>20</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 21: Public Sector Success (Case Study)
// ============================================
function Slide21() {
  const challenges = [
    { icon: Layers, text: 'Data Silos:', desc: 'Critical information isolated across 8 distinct departments.' },
    { icon: EyeOff, text: 'Insight Gap:', desc: 'Inability to generate cross-agency analytics or holistic views.' },
    { icon: FileSpreadsheet, text: 'Manual Processes:', desc: '500+ staff relying on disconnected Excel workflows.' }
  ];

  const solutions = [
    { icon: Network, text: 'Governed Data Mesh:', desc: 'Centralized architecture respecting departmental boundaries.' },
    { icon: Monitor, text: 'Central Power BI Portal:', desc: 'Unified self-service hub for all reporting needs.' },
    { icon: UsersRound, text: 'Mass Enablement:', desc: 'Comprehensive training program upskilling 500+ users.' }
  ];

  const results = [
    { value: '23M', label: 'Records Unified', desc: 'Single source of truth', bgColor: '#1e3a8a', icon: Database },
    { value: '65%', label: 'Faster Analysis', desc: 'For policy decisions', bgColor: '#0891b2', icon: Gauge },
    { value: '500+', label: 'Users Enabled', desc: 'Self-service access', bgColor: '#06b6d4', icon: UserCheck },
    { value: '34%', label: 'Better Delivery', desc: 'Service metrics improved', bgColor: '#0f766e', icon: HandHeart }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Case Study
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Public Sector Success
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Context Banner */}
        <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl border" style={{ borderColor: '#e2e8f0' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <Landmark className="w-5 h-5" style={{ color: '#1e3a8a' }} />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold" style={{ color: '#64748b' }}>Client</p>
              <p className="font-bold text-lg" style={{ color: '#1e293b' }}>Provincial Government Agency</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <Calendar className="w-4 h-4" />
              <span>Timeline: 12 Months</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
              <MapPin className="w-4 h-4" />
              <span>Canada</span>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="flex gap-6 flex-1">
          {/* Challenge Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#ef4444' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <AlertTriangle className="w-5 h-5" style={{ color: '#ef4444' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>The Challenge</h2>
            </div>
            <div className="flex flex-col gap-4">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#f87171' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="flex-1 bg-white rounded-2xl border p-5 flex flex-col relative overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: '#06b6d4' }} />
            <div className="flex items-center gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#f1f5f9' }}>
              <Lightbulb className="w-5 h-5" style={{ color: '#06b6d4' }} />
              <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Our Solution</h2>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: '#22d3ee' }} />
                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{item.text}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-base" style={{ color: '#1e3a8a' }}>
            <Trophy className="w-5 h-5" />
            <span>Measurable Impact</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 flex flex-col justify-center relative overflow-hidden text-white"
                style={{ backgroundColor: result.bgColor, height: '120px' }}
              >
                <result.icon
                  className="absolute -right-2 -bottom-2 w-20 h-20 opacity-10 -rotate-12"
                />
                <div className="text-4xl font-extrabold leading-none mb-1 relative z-10">{result.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90 relative z-10">{result.label}</div>
                <div className="text-xs opacity-70 mt-1 relative z-10">{result.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>21</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 22: Training Programs
// ============================================
function Slide22() {
  const programs = [
    { title: 'Power BI Analyst', icon: BarChart3, duration: '12 Weeks', price: '$1,599', type: 'analyst' },
    { title: 'Python for Data', icon: FileCode, duration: '12 Weeks', price: '$1,599', type: 'analyst' },
    { title: 'Prompt Engineering', icon: Bot, duration: '12 Weeks', price: '$1,599', type: 'special' },
    { title: 'Azure Data Engineer', icon: Cloud, duration: '24 Weeks', price: '$3,999', type: 'engineer' },
    { title: 'Databricks Engineer', icon: Layers, duration: '24 Weeks', price: '$3,999', type: 'engineer' },
    { title: 'AI Engineer', icon: Brain, duration: '24 Weeks', price: '$3,999', type: 'special' },
    { title: 'BI Analyst', icon: Table2, duration: '12 Weeks', price: '$1,799', type: 'analyst' },
    { title: 'Azure Data Factory', icon: Cog, duration: '12 Weeks', price: '$1,799', type: 'engineer' }
  ];

  const stats = [
    { icon: Briefcase, value: '85%', label: 'Placement Rate' },
    { icon: Timer, value: '90 Days', label: 'Avg. Time to Hire' },
    { icon: GraduationCap, value: '2,000+', label: 'Students Trained' }
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case 'engineer':
        return { accentColor: '#1e3a8a', bgColor: '#eff6ff' };
      case 'analyst':
        return { accentColor: '#06b6d4', bgColor: '#ecfeff' };
      case 'special':
        return { accentColor: '#8b5cf6', bgColor: '#f5f3ff' };
      default:
        return { accentColor: '#1e3a8a', bgColor: '#eff6ff' };
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Launch Your Data Career
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Training Programs
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-4 gap-3" style={{ backgroundColor: '#f8fafc' }}>
        <p className="text-sm mb-1" style={{ color: '#64748b' }}>
          Comprehensive, hands-on bootcamps designed to take you from beginner to job-ready professional.
        </p>

        {/* Programs Grid */}
        <div className="grid grid-cols-4 gap-3 flex-1">
          {programs.map((program, idx) => {
            const styles = getTypeStyles(program.type);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#e2e8f0', padding: '14px' }}
              >
                {/* Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: styles.accentColor }}
                />

                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: styles.bgColor }}
                  >
                    <program.icon className="w-5 h-5" style={{ color: styles.accentColor }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1e293b' }}>{program.title}</h3>
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: '#64748b' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: '#f1f5f9' }}>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{ backgroundColor: '#f1f5f9', color: '#334155' }}
                  >
                    {program.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div
          className="rounded-xl p-4 flex justify-around items-center relative overflow-hidden"
          style={{ backgroundColor: '#1e3a8a' }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: '#22d3ee' }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-none">{stat.value}</span>
                  <span className="text-xs mt-1" style={{ color: '#cbd5e1' }}>{stat.label}</span>
                </div>
              </div>
              {idx < stats.length - 1 && (
                <div className="w-px h-10" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>22</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 23: Training-to-Hire Model
// ============================================
function Slide23() {
  const steps = [
    { number: '1', icon: Presentation, title: 'Live Training', desc: 'Week 0-12', subdesc: 'Instructor-led sessions' },
    { number: '2', icon: Laptop, title: 'Portfolio', desc: 'Throughout', subdesc: 'Hands-on projects' },
    { number: '3', icon: UsersRound, title: 'Mentorship', desc: 'Ongoing', subdesc: '1-on-1 expert guidance' },
    { number: '4', icon: FileText, title: 'Prep', desc: 'Final Weeks', subdesc: 'Resume & Interviews' },
    { number: '5', icon: Handshake, title: 'Intros', desc: 'Post-Grad', subdesc: 'Partner connections' },
    { number: 'check', icon: Rocket, title: 'Success', desc: '85% Placed', subdesc: 'within 90 days', isLast: true }
  ];

  const partners = ['Suncor', 'TD Bank', 'RBC', 'ATB', 'Gov. of Alberta', '+45 More'];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Career Journey
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Training-to-Hire Model
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-6 gap-5" style={{ backgroundColor: '#f8fafc' }}>
        <p className="text-base" style={{ color: '#64748b', maxWidth: '800px' }}>
          We don't just teach skills; we build careers. Our integrated model ensures you are job-ready from day one.
        </p>

        {/* Timeline Section */}
        <div className="flex-1 flex flex-col">
          <div className="relative flex justify-between mt-5 px-2">
            {/* Connecting Line */}
            <div
              className="absolute h-0.5 z-0"
              style={{ top: '24px', left: '40px', right: '40px', backgroundColor: '#e2e8f0' }}
            />
            <div
              className="absolute h-0.5 z-0 opacity-20"
              style={{ top: '24px', left: '40px', right: '40px', backgroundColor: '#06b6d4' }}
            />

            {/* Steps */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center"
                style={{ width: '15%' }}
              >
                {/* Step Circle */}
                <div
                  className={`rounded-full flex items-center justify-center font-bold mb-4 border-3 shadow-md ${step.isLast ? 'w-14 h-14 text-xl' : 'w-12 h-12 text-lg'}`}
                  style={{
                    backgroundColor: step.isLast ? '#06b6d4' : 'white',
                    borderColor: step.isLast ? '#0891b2' : '#06b6d4',
                    borderWidth: '3px',
                    color: step.isLast ? 'white' : '#0f766e'
                  }}
                >
                  {step.number === 'check' ? <Check className="w-6 h-6" /> : step.number}
                </div>

                {/* Step Content Card */}
                <div
                  className="rounded-xl p-4 w-full border flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: step.isLast ? '#f0fdfa' : 'white',
                    borderColor: step.isLast ? '#ccfbf1' : '#e2e8f0',
                    height: '130px'
                  }}
                >
                  <step.icon className="w-5 h-5 mb-2" style={{ color: '#0891b2' }} />
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: step.isLast ? '#0f766e' : '#1e293b' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                    {step.desc}<br />{step.subdesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners Section */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
          style={{ backgroundColor: '#1e3a8a' }}
        >
          {/* Background Decoration */}
          <Building2
            className="absolute -right-5 -bottom-12 w-48 h-48 opacity-5 -rotate-12"
            style={{ color: 'white' }}
          />

          <div className="flex justify-between items-center border-b pb-4 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <Briefcase className="w-5 h-5" />
              <span>Our Hiring Partners</span>
            </div>
            <span
              className="px-4 py-1.5 rounded-full font-bold text-sm"
              style={{ backgroundColor: '#22d3ee', color: '#0f172a' }}
            >
              85% Placement Rate
            </span>
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="h-12 rounded-lg flex items-center justify-center font-semibold text-sm text-white transition-colors hover:bg-white/20"
                style={{
                  backgroundColor: idx === partners.length - 1 ? 'transparent' : 'rgba(255,255,255,0.1)',
                  border: idx === partners.length - 1 ? '1px dashed rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  color: idx === partners.length - 1 ? '#94a3b8' : 'white'
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>23</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 24: Client Testimonials
// ============================================
function Slide24() {
  const testimonials = [
    {
      quote: "Ripotek transformed our data chaos into a governed analytics platform. We now get insights in minutes instead of weeks, enabling real-time decision making.",
      name: 'Sarah Mitchell',
      role: 'Director of Analytics',
      company: 'Major Energy Corp',
      icon: Zap,
      accentColor: '#1e3a8a',
      bgColor: '#eff6ff'
    },
    {
      quote: "Their Databricks expertise is unmatched. They not only built our lakehouse but also trained our internal team to own and evolve the solution.",
      name: 'Michael Chang',
      role: 'VP Technology',
      company: 'Government Agency',
      icon: Landmark,
      accentColor: '#0891b2',
      bgColor: '#ecfeff'
    },
    {
      quote: "The Azure Data Engineer program exceeded my expectations. The hands-on projects were incredible, and within 90 days I landed a role at a top bank.",
      name: 'Jessica M.',
      role: 'Program Graduate',
      company: 'Data Engineer @ Top 5 Bank',
      icon: GraduationCap,
      accentColor: '#06b6d4',
      bgColor: '#f0fdfa'
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            What Our Clients Say
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Client Testimonials
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center px-16 py-12" style={{ backgroundColor: '#f8fafc' }}>
        <div className="grid grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col border relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: '#e2e8f0' }}
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl"
                style={{ backgroundColor: testimonial.accentColor }}
              />

              {/* Large Quote Background */}
              <span
                className="absolute top-4 left-5 text-7xl font-serif pointer-events-none"
                style={{ color: '#f1f5f9' }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#fbbf24' }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg italic leading-relaxed mb-6 flex-1 relative z-10"
                style={{ color: '#334155' }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-5 border-t relative z-10" style={{ borderColor: '#f1f5f9' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <testimonial.icon className="w-5 h-5" style={{ color: testimonial.accentColor }} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base" style={{ color: '#1e293b' }}>{testimonial.name}</span>
                  <span className="text-sm" style={{ color: '#64748b' }}>{testimonial.role}</span>
                  <span className="text-xs uppercase tracking-wide font-semibold mt-0.5" style={{ color: '#94a3b8' }}>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>24</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 25: Pricing Transparency
// ============================================
function Slide25() {
  const services = [
    { name: 'Discovery & Strategy', icon: Search, timeline: '2 - 4 Weeks', timeIcon: Clock, investment: '$15K - $30K' },
    { name: 'Data Platform Build', icon: Layers, timeline: '3 - 6 Months', timeIcon: Clock, investment: '$100K - $300K' },
    { name: 'Analytics & BI', icon: PieChart, timeline: '2 - 4 Months', timeIcon: Clock, investment: '$50K - $150K' },
    { name: 'MLOps & AI Solutions', icon: Brain, timeline: '2 - 6 Months', timeIcon: Clock, investment: '$75K - $250K' },
    { name: 'Managed Services', icon: LifeBuoy, timeline: 'Ongoing', timeIcon: RefreshCw, investment: '$8K - $25K', period: '/ month' },
    { name: 'Enterprise Training', icon: GraduationCap, timeline: 'Custom', timeIcon: CalendarCheck, investment: '$5K - $50K' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Investment Ranges
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Pricing Transparency
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-4 gap-4" style={{ backgroundColor: '#f8fafc' }}>
        {/* Pricing Table */}
        <div className="bg-white rounded-xl border overflow-hidden flex-1" style={{ borderColor: '#e2e8f0' }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: '#1e3a8a' }}>
                <th className="text-left px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white" style={{ width: '40%' }}>
                  Service Offering
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white" style={{ width: '25%' }}>
                  Typical Timeline
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white" style={{ width: '35%' }}>
                  Investment Range
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, idx) => (
                <tr
                  key={idx}
                  className="transition-colors hover:bg-slate-50"
                  style={{ borderBottom: idx < services.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                >
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: '#ecfeff' }}
                      >
                        <service.icon className="w-4 h-4" style={{ color: '#0891b2' }} />
                      </div>
                      <span className="font-semibold" style={{ color: '#1e293b' }}>{service.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2" style={{ color: '#64748b' }}>
                      <service.timeIcon className="w-4 h-4" />
                      <span>{service.timeline}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="font-bold text-lg" style={{ color: '#0f766e' }}>
                      {service.investment}
                      {service.period && (
                        <span className="text-xs font-medium ml-1" style={{ color: '#94a3b8' }}>{service.period}</span>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Info Banner */}
        <div className="flex gap-4" style={{ height: '80px' }}>
          {/* ROI Card */}
          <div
            className="rounded-xl px-6 flex items-center gap-5 relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a', width: '280px' }}
          >
            <LineChart
              className="absolute -right-2 -bottom-2 w-20 h-20 opacity-5 -rotate-12"
              style={{ color: 'white' }}
            />
            <Timer className="w-8 h-8" style={{ color: '#22d3ee' }} />
            <div className="flex flex-col text-white">
              <span className="text-2xl font-bold">6 Months</span>
              <span className="text-xs" style={{ color: '#cbd5e1' }}>Average ROI on Projects</span>
            </div>
          </div>

          {/* Note Cards */}
          <div className="flex-1 bg-white rounded-xl border px-5 flex items-center gap-4" style={{ borderColor: '#e2e8f0' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#f1f5f9' }}
            >
              <SlidersHorizontal className="w-5 h-5" style={{ color: '#64748b' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold" style={{ color: '#1e293b' }}>Customized Solutions</span>
              <span className="text-sm" style={{ color: '#64748b' }}>
                All engagements are tailored to your specific needs.
              </span>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl border px-5 flex items-center gap-4" style={{ borderColor: '#e2e8f0' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#f1f5f9' }}
            >
              <FileCheck2 className="w-5 h-5" style={{ color: '#64748b' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold" style={{ color: '#1e293b' }}>Transparent Terms</span>
              <span className="text-sm" style={{ color: '#64748b' }}>
                No hidden fees. Detailed scope with every proposal.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>25</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 26: Why Calgary Chooses Ripotek
// ============================================
function Slide26() {
  const features = [
    {
      title: 'Canadian-Owned',
      icon: MapPin,
      accentColor: '#3b82f6',
      bgColor: '#eff6ff',
      items: ['Data stays in Canada', 'Compliance focus', 'Local governance', 'Serving AB, BC, ON, SK'],
      highlight: 'Sovereignty Assured',
      highlightBg: '#eff6ff',
      highlightText: '#1e40af'
    },
    {
      title: 'Local Team',
      icon: UsersRound,
      accentColor: '#14b8a6',
      bgColor: '#f0fdfa',
      items: ['Face-to-face service', 'On-site availability', 'Mountain Time Zone', 'Quick response'],
      highlight: 'Accessible Partners',
      highlightBg: '#f0fdfa',
      highlightText: '#115e59'
    },
    {
      title: 'Industry Knowledge',
      icon: Briefcase,
      accentColor: '#f59e0b',
      bgColor: '#fffbeb',
      items: ['Alberta economy focus', 'Energy sector depth', 'Regulatory insight', 'Market context'],
      highlight: 'We Know Your Business',
      highlightBg: '#fffbeb',
      highlightText: '#92400e'
    },
    {
      title: 'Community Invested',
      icon: Heart,
      accentColor: '#0f172a',
      bgColor: '#f1f5f9',
      items: ['Tech ecosystem support', 'Local talent training', 'Job creation in YYC', 'Giving back locally'],
      highlight: 'Building Calgary Tech',
      highlightBg: '#f1f5f9',
      highlightText: '#1e293b'
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Local & Trusted
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Why Calgary Chooses Ripotek
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-8 relative" style={{ backgroundColor: '#f8fafc' }}>
        {/* Background Dots Pattern */}
        <div
          className="absolute right-10 bottom-10 w-32 h-32 opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Headline */}
        <div className="text-center mb-8 relative z-10">
          <p className="text-2xl font-semibold" style={{ color: '#334155' }}>
            Local expertise meeting <span className="font-bold" style={{ color: '#0891b2' }}>global standards</span>.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-4 gap-6 flex-1 relative z-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex flex-col border relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: '#e2e8f0' }}
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: feature.accentColor }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: feature.bgColor }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.accentColor }} />
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg mb-4 pb-4 border-b"
                style={{ color: '#1e293b', borderColor: '#f1f5f9' }}
              >
                {feature.title}
              </h3>

              {/* Features List */}
              <ul className="flex flex-col gap-3 flex-1">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-sm" style={{ color: '#64748b' }}>
                    <Check className="w-3 h-3 mt-1 shrink-0" style={{ color: feature.accentColor }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Highlight */}
              <div
                className="mt-5 py-3 px-4 rounded-lg text-center font-semibold text-sm"
                style={{ backgroundColor: feature.highlightBg, color: feature.highlightText }}
              >
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>26</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 27: Next Steps
// ============================================
function Slide27() {
  const steps = [
    {
      number: 1,
      icon: Headset,
      title: 'Discovery Call',
      subtitle: '30 Minutes',
      description: "We discuss your challenges, goals, and current infrastructure to determine if we're the right fit for your needs.",
      color: '#1e3a8a'
    },
    {
      number: 2,
      icon: ZoomIn,
      title: 'Assessment',
      subtitle: 'Optional',
      description: 'A deep dive into your current state to identify gaps, opportunities, and provide a preliminary ROI estimation.',
      color: '#0891b2'
    },
    {
      number: 3,
      icon: FilePen,
      title: 'Proposal',
      subtitle: 'Plan of Action',
      description: 'We deliver a detailed roadmap including scope, timeline, investment requirements, and defined success metrics.',
      color: '#06b6d4'
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Let's Transform Your Data Strategy
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Next Steps
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-5 items-center justify-center" style={{ backgroundColor: '#f8fafc' }}>
        <p className="text-base text-center mb-6 max-w-3xl" style={{ color: '#64748b' }}>
          Ready to unlock the full potential of your data? We've designed a simple, transparent engagement process to get started.
        </p>

        {/* Steps Container */}
        <div className="flex items-stretch gap-5 mb-6 relative w-full justify-center">
          {/* Dashed Line */}
          <div
            className="absolute top-10 left-24 right-24 border-t-2 border-dashed z-0"
            style={{ borderColor: '#cbd5e1' }}
          />

          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                className="bg-white rounded-2xl p-5 pt-8 flex flex-col items-center text-center border relative z-10 transition-all hover:-translate-y-2 hover:shadow-xl"
                style={{ borderColor: '#e2e8f0', width: '260px' }}
              >
                {/* Number Badge */}
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center font-extrabold text-lg border-4"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {step.number}
                </div>

                <step.icon className="w-8 h-8 mb-4" style={{ color: step.color }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1e293b' }}>{step.title}</h3>
                <span
                  className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                >
                  {step.subtitle}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center pt-10" style={{ color: '#cbd5e1' }}>
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            className="flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: '#1e3a8a', boxShadow: '0 4px 6px rgba(30, 58, 138, 0.3)' }}
          >
            Book Your Discovery Call Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-sm" style={{ color: '#64748b' }}>
            No commitment required. Start the conversation.
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>27</span>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 28: Contact Us
// ============================================
function Slide28() {
  const contactInfo = [
    { icon: MapPin, title: 'Headquarters', text: 'Calgary, Alberta\nCanada' },
    { icon: Phone, title: 'Phone', text: '+1 (403) 555-DATO' },
    { icon: Globe, title: 'Website', text: 'www.ripotek.ca' }
  ];

  const emails = [
    { icon: Mail, email: 'info@ripotek.ca', label: 'General' },
    { icon: Briefcase, email: 'consulting@ripotek.ca', label: 'Consulting' },
    { icon: GraduationCap, email: 'training@ripotek.ca', label: 'Training' },
    { icon: UsersRound, email: 'careers@ripotek.ca', label: 'Careers' }
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: MessageCircle, label: 'Discord' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-bl-full"
        style={{ backgroundColor: '#f0fdfa' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-tr-full"
        style={{ backgroundColor: '#eff6ff' }}
      />

      {/* Header */}
      <div className="h-24 px-16 flex items-center justify-between relative z-10">
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[2px] mb-1" style={{ color: '#06b6d4' }}>
            Get In Touch
          </span>
          <h1 className="text-3xl font-bold" style={{ color: '#0f172a' }}>
            Contact Us
          </h1>
        </div>
        <Image src="/logo-light.svg" alt="Ripotek" width={120} height={36} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-16 py-4 relative z-10 justify-center">
        <div className="grid grid-cols-2 gap-8" style={{ height: '360px' }}>
          {/* Left Card: Contact Info */}
          <div className="bg-white rounded-2xl p-8 border shadow-sm flex flex-col justify-center gap-6" style={{ borderColor: '#e2e8f0' }}>
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#ecfeff' }}
                >
                  <item.icon className="w-5 h-5" style={{ color: '#0891b2' }} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-base mb-1" style={{ color: '#1e293b' }}>{item.title}</h3>
                  <p className="text-sm whitespace-pre-line" style={{ color: '#64748b' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Card: Emails & Social */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#1e3a8a' }}
          >
            {/* Decorative Circle */}
            <div
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            />

            {/* Email List */}
            <div className="flex flex-col gap-3 relative z-10">
              {emails.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg border transition-colors hover:bg-white/10"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <item.icon className="w-4 h-4" style={{ color: '#22d3ee' }} />
                  <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{item.email}</span>
                  <span className="text-xs uppercase tracking-wide ml-auto" style={{ color: '#94a3b8' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Social Section */}
            <div className="mt-6 relative z-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#cbd5e1' }}>
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <div
                    key={idx}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                    style={{ backgroundColor: '#06b6d4' }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-extrabold" style={{ color: '#1e3a8a' }}>
            Design. <span style={{ color: '#06b6d4' }}>Engineer.</span> Deliver.
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t relative z-10"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0', backgroundColor: 'white' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>28</span>
      </div>
    </div>
  );
}

function Slide29() {
  const certifications = [
    { name: 'Azure Solutions Architect Expert', count: 5, color: '#00a4ef' },
    { name: 'Azure Data Engineer Associate', count: 8, color: '#00a4ef' },
    { name: 'Databricks Data Engineer Pro', count: 4, color: '#ff3621' },
    { name: 'Power BI Data Analyst Associate', count: 6, color: '#00a4ef' },
    { name: 'AWS Solutions Architect', count: 2, color: '#ff9900' },
  ];

  const techCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      tags: ['Microsoft Azure', 'AWS (Select)', 'GCP (Select)'],
    },
    {
      title: 'Data Platforms',
      icon: Database,
      tags: ['Databricks', 'Azure Synapse', 'Microsoft Fabric', 'Snowflake'],
    },
    {
      title: 'ETL / ELT',
      icon: Shuffle,
      tags: ['Azure Data Factory', 'Databricks Workflows', 'SSIS', 'dbt'],
    },
    {
      title: 'Analytics & BI',
      icon: PieChart,
      tags: ['Power BI', 'Tableau', 'Analysis Services', 'Looker'],
    },
    {
      title: 'Programming',
      icon: Code,
      tags: ['Python', 'SQL', 'Spark (PySpark/Scala)', 'C#'],
    },
    {
      title: 'AI / ML',
      icon: Brain,
      tags: ['Azure OpenAI', 'Azure ML', 'Databricks ML', 'LangChain'],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: 'white' }}>
      {/* Header */}
      <div
        className="h-24 flex items-center justify-between px-16 border-b"
        style={{ borderColor: '#e2e8f0' }}
      >
        <div className="flex flex-col">
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: '#06b6d4', marginBottom: '4px' }}
          >
            Appendix
          </span>
          <h1
            className="font-bold text-3xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#0f172a' }}
          >
            Certifications & Tech Stack
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center font-extrabold text-lg"
            style={{ backgroundColor: '#06b6d4', color: '#0f172a', fontFamily: 'Montserrat, sans-serif' }}
          >
            R
          </div>
          <span
            className="font-bold text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#0f172a' }}
          >
            Ripotek
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-row px-16 py-5"
        style={{ backgroundColor: '#f8fafc', gap: '40px' }}
      >
        {/* Left Column: Certifications */}
        <div className="flex flex-col gap-3" style={{ width: '35%' }}>
          <div
            className="flex items-center gap-2.5 pb-2 border-b-2 mb-1"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: '#1e3a8a',
              borderColor: '#e2e8f0',
            }}
          >
            <Award className="w-5 h-5" />
            <span>Team Certifications</span>
          </div>

          <div className="flex flex-col gap-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2.5 rounded-xl border"
                style={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                  style={{ fontSize: '20px', color: cert.color }}
                >
                  {cert.color === '#ff3621' ? (
                    <Layers className="w-5 h-5" />
                  ) : cert.color === '#ff9900' ? (
                    <Cloud className="w-5 h-5" />
                  ) : (
                    <BarChart3 className="w-5 h-5" />
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-sm" style={{ color: '#1e293b', marginBottom: '2px' }}>
                    {cert.name}
                  </p>
                  <div
                    className="flex items-center gap-1 px-2 py-0.5 rounded-xl w-fit text-xs font-medium"
                    style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                  >
                    Team Members: <span className="font-bold" style={{ color: '#0f766e' }}>{cert.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="flex flex-col gap-3" style={{ width: '65%' }}>
          <div
            className="flex items-center gap-2.5 pb-2 border-b-2 mb-1"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: '#1e3a8a',
              borderColor: '#e2e8f0',
            }}
          >
            <Layers className="w-5 h-5" />
            <span>Detailed Technology Stack</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="p-3 rounded-xl border"
                  style={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
                >
                  <div
                    className="flex items-center gap-2 mb-2"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '600',
                      fontSize: '13px',
                      color: '#334155',
                    }}
                  >
                    <IconComponent className="w-4 h-4" style={{ color: '#0891b2' }} />
                    <span>{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-medium border"
                        style={{ backgroundColor: '#f8fafc', borderColor: '#cbd5e1', color: '#475569' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* DevOps - Spanning full width */}
            <div
              className="p-3 rounded-xl border col-span-2"
              style={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
            >
              <div
                className="flex items-center gap-2 mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: '#334155',
                }}
              >
                <Settings className="w-4 h-4" style={{ color: '#0891b2' }} />
                <span>DevOps & CI/CD</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Azure DevOps', 'GitHub Actions', 'Terraform', 'Docker', 'Kubernetes'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-md text-xs font-medium border"
                    style={{ backgroundColor: '#f8fafc', borderColor: '#cbd5e1', color: '#475569' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-12 px-16 flex items-center justify-between text-sm border-t"
        style={{ color: '#94a3b8', borderColor: '#e2e8f0', backgroundColor: 'white' }}
      >
        <span>Ripotek Technologies Inc. | Capabilities Deck</span>
        <span>29</span>
      </div>
    </div>
  );
}
