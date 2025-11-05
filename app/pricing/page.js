'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, Calculator, TrendingUp, Users, Clock, CheckCircle, AlertCircle, Calendar, Download } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState('consulting');
  const [projectScope, setProjectScope] = useState('medium');
  const [timeline, setTimeline] = useState('standard');
  const [teamSize, setTeamSize] = useState(1);
  const [managedServices, setManagedServices] = useState(false);
  const [training, setTraining] = useState(false);
  const [estimate, setEstimate] = useState(0);
  const [monthlyEstimate, setMonthlyEstimate] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedConsultingService, setSelectedConsultingService] = useState('Strategy & Governance');
  const consultingServices = [
    'Strategy & Governance',
    'Data Platform Build',
    'Analytics & BI',
    'MLOps & AI',
    'Managed Services'
  ];
  const trainingProgramPrices = {
    'Power BI Analyst': 1599,
    'Azure Data Engineer': 3999,
    'Databricks Engineer': 3999,
    'Business Intelligence Analyst': 1799,
    'AI Engineer': 3999,
    'Prompt Engineering': 1599,
    'Python for Data': 1599,
    'Azure Data Factory Masterclass': 1799
  };
  const trainingProgramTimelines = {
    'Power BI Analyst': '12 weeks',
    'Azure Data Engineer': '24 weeks',
    'Databricks Engineer': '24 weeks',
    'Business Intelligence Analyst': '12 weeks',
    'AI Engineer': '24 weeks',
    'Prompt Engineering': '12 weeks',
    'Python for Data': '12 weeks',
    'Azure Data Factory Masterclass': '12 weeks'
  };
  const [selectedTrainingProgram, setSelectedTrainingProgram] = useState('Power BI Analyst');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    calculateEstimate();
  }, [serviceType, projectScope, timeline, teamSize, managedServices, training, selectedTrainingProgram]);

  // When switching to Training, clear consulting add-ons
  useEffect(() => {
    if (serviceType === 'training') {
      setManagedServices(false);
      setTraining(false);
    }
  }, [serviceType]);

  const calculateEstimate = () => {
    let base = 0;
    let monthly = 0;

    // Base pricing by service type
    if (serviceType === 'consulting') {
      const scopePricing = {
        small: 50000,
        medium: 150000,
        large: 250000,
        enterprise: 400000
      };
      base = scopePricing[projectScope] || 150000;

      // Timeline adjustments
      if (timeline === 'rush') base *= 1.25;
      if (timeline === 'extended') base *= 0.9;

      // Team size multiplier
      if (teamSize > 1) {
        base += (teamSize - 1) * 40000;
      }
    } else if (serviceType === 'training') {
      const pricePerPerson = trainingProgramPrices[selectedTrainingProgram] || 1599;
      base = pricePerPerson * teamSize; // Price per person for selected program
    }

    // Add-ons (consulting only)
    if (serviceType === 'consulting' && managedServices) {
      monthly = projectScope === 'enterprise' ? 25000 : projectScope === 'large' ? 15000 : 8000;
    }

    if (training && serviceType === 'consulting') {
      base += 15000; // Training add-on
    }

    setEstimate(base);
    setMonthlyEstimate(monthly);
  };

  const handleDownloadEstimatePDF = () => {
    const now = new Date();
    const ref = `RPK-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    const timelineText = getTimelineEstimate();
    const serviceSummary = serviceType === 'consulting'
      ? `Consulting Service: ${selectedConsultingService} • Scope: ${projectScope} • Timeline: ${timeline}`
      : `Training Program: ${selectedTrainingProgram}`;
    const managedLine = serviceType === 'consulting' && managedServices
      ? `<div class="row"><span>Managed Services</span><span>${formatCurrency(monthlyEstimate)}/mo</span></div>`
      : '';

    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ripotek Estimate ${ref}</title>
        <style>
          :root{ --bg:#0b1220; --teal:#0f766e; --cyan:#22d3ee; --ink:#0f172a; --muted:#475569; }
          *{ box-sizing:border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: Letter; margin: 20mm; }
          html, body{ height:100%; }
          body{ margin:0; background:#fff; font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial; color:#0f172a; }
          .page{ padding:0; }
          .wrap{ padding:40px 48px; }
          .letterhead{ display:flex; align-items:center; gap:12px; }
          .logo{ width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; background:linear-gradient(135deg,#0f766e,#0b1220); box-shadow:0 8px 24px rgba(2,132,199,.25); }
          .brand{ line-height:1; }
          .brand .name{ font-size:18px; font-weight:800; letter-spacing:.2px; background:linear-gradient(90deg,#0b1220,#0f766e); -webkit-background-clip:text; background-clip:text; color:transparent; }
          .brand .tag{ font-size:10px; color:#64748b; font-style:italic; }
          .bar{ height:6px; background:linear-gradient(90deg,#0b1220,#0f766e,#22d3ee); border-radius:6px; margin:16px 0 28px; }
          .title{ font-size:28px; font-weight:800; color:#0b1220; margin:0 0 6px; }
          .subtitle{ color:#475569; margin:0 0 24px; }
          .meta{ display:flex; flex-wrap:wrap; gap:16px; margin:8px 0 24px; color:#334155; }
          .meta div{ font-size:12px; }
          .card{ border:1px solid #e2e8f0; border-radius:14px; padding:18px 20px; margin:14px 0; }
          .row{ display:flex; justify-content:space-between; align-items:center; padding:6px 0; font-size:14px; }
          .muted{ color:#64748b; }
          .total{ font-size:20px; font-weight:800; color:#0f766e; }
          .grid{ display:grid; grid-template-columns:1fr 1fr; gap:16px; }
          .section-title{ font-weight:700; font-size:14px; color:#0b1220; margin:18px 0 8px; }
          .footer{ margin-top:28px; padding-top:16px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; color:#64748b; font-size:12px; }
          .screen-tip{ font-size:12px; color:#64748b; margin-top:8px; }
          @media print{ .btn, .screen-tip{ display:none } body{ background:#fff } .wrap{ padding:0 } .grid{ gap:12px } }
          .btn{ margin-top:12px; padding:10px 14px; border:1px solid #e2e8f0; border-radius:10px; background:#0f766e; color:#fff; font-weight:600; }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="wrap">
          <div class="letterhead">
            <div class="logo">R</div>
            <div class="brand">
              <div class="name">Ripotek Technologies Inc.</div>
              <div class="tag">Design. Engineer. Deliver.</div>
            </div>
          </div>
          <div class="bar"></div>
          <h1 class="title">Project Estimate</h1>
          <p class="subtitle">Modern, professional estimate tailored to your selection.</p>
          <div class="meta">
            <div><strong>Ref:</strong> ${ref}</div>
            <div><strong>Date:</strong> ${now.toLocaleString()}</div>
            <div><strong>Service:</strong> ${serviceType === 'consulting' ? 'Consulting' : 'Training'}</div>
          </div>

          <div class="grid">
            <div class="card">
              <div class="section-title">Summary</div>
              <div class="row"><span>${serviceSummary}</span><span></span></div>
              <div class="row"><span>Team Size</span><span>${teamSize} ${serviceType === 'consulting' ? 'consultant(s)' : 'student(s)'}</span></div>
              <div class="row"><span>Timeline</span><span>${timelineText}</span></div>
              ${managedLine}
            </div>
            <div class="card">
              <div class="section-title">Investment</div>
              ${serviceType === 'training' ? `<div class="row"><span>Program (${selectedTrainingProgram})</span><span>${formatCurrency(trainingProgramPrices[selectedTrainingProgram] || 0)} / person</span></div>` : ''}
              <div class="row"><span class="muted">Subtotal</span><span class="muted">${formatCurrency(estimate)}</span></div>
              <div class="row total"><span>Total</span><span>${formatCurrency(estimate)}</span></div>
            </div>
          </div>

          <div class="card">
            <div class="section-title">Message</div>
            <p class="muted">Thank you for considering Ripotek. This estimate is a starting point — we tailor solutions to your goals, team, and timelines. Reply to this PDF or book a discovery call and we’ll finalize a detailed proposal.</p>
          </div>

          <div class="footer">
            <div>Ripotek • Calgary, Alberta • info@ripotek.com • +1 306-999-3552</div>
            <div>ripotek.com</div>
          </div>

          <button class="btn" onclick="window.print()">Print / Save as PDF</button>
          <div class="screen-tip">Tip: For best results, enable “Background graphics” in your print dialog.</div>
          </div>
        </div>
      </body>
    </html>`;

    const w = window.open('', '_blank');
    if (!w) return;
    w.document.open();
    w.document.write(html);
    w.document.close();
    w.focus();
    try { setTimeout(() => w.print(), 300); } catch (e) {}
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getROIEstimate = () => {
    if (serviceType === 'consulting') {
      return Math.round(estimate * 2.5); // 2.5x ROI average
    }
    return null;
  };

  const getTimelineEstimate = () => {
    if (serviceType === 'consulting') {
      const consultingTimelines = {
        small: '2-3 months',
        medium: '3-6 months',
        large: '6-9 months',
        enterprise: '9-12 months'
      };
      return consultingTimelines[projectScope] || 'Contact us';
    }
    // training: reflect selected program duration
    return trainingProgramTimelines[selectedTrainingProgram] || 'Custom timeline';
  };

  const navLinks = [
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
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center leading-none">Ripotek</div>
                <div className="text-gray-600 text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 text-center">Design. Engineer. Deliver.</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, i) => (
                <div key={i} className="relative group">
                  <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium flex items-center gap-1">
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out py-2">
                      {item.dropdown.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">{subItem.name}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">Let's Talk</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300">
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-gray-700 hover:text-teal-600 transition font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/contact" className="block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold text-center">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-teal-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-white whitespace-nowrap">
              <span className="text-white">Investment </span>
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-xl text-gray-200 mx-auto whitespace-nowrap">
              Get an instant estimate for your data transformation project or training program
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
              {/* Service Type */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">What do you need?</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setServiceType('consulting')}
                    className={`p-6 rounded-xl border-2 transition ${
                      serviceType === 'consulting'
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <TrendingUp className="w-8 h-8 text-teal-600 mb-2" />
                    <div className="font-bold text-gray-900">Consulting Services</div>
                    <div className="text-sm text-gray-600">Data platform, BI, AI/ML</div>
                  </button>
                  <button
                    onClick={() => setServiceType('training')}
                    className={`p-6 rounded-xl border-2 transition ${
                      serviceType === 'training'
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Users className="w-8 h-8 text-teal-600 mb-2" />
                    <div className="font-bold text-gray-900">Training Programs</div>
                    <div className="text-sm text-gray-600">Individual or Team upskilling</div>
                  </button>
                </div>
                {serviceType === 'consulting' && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Consulting Service</label>
                    <select
                      value={selectedConsultingService}
                      onChange={(e) => setSelectedConsultingService(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {consultingServices.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                )}
                {serviceType === 'training' && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Training Program</label>
                    <select
                      value={selectedTrainingProgram}
                      onChange={(e) => setSelectedTrainingProgram(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {Object.keys(trainingProgramPrices).map((prog) => (
                        <option key={prog} value={prog}>
                          {prog} — CAD ${trainingProgramPrices[prog].toLocaleString('en-CA')}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-600 mt-2">Price is per person. Total updates with team size.</p>
                  </div>
                )}
              </div>

              {/* Project Scope (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Project Scope</label>
                  <div className="grid md:grid-cols-4 gap-3">
                    {[
                      { value: 'small', label: 'Discovery', desc: '2-4 weeks' },
                      { value: 'medium', label: 'Standard', desc: '3-6 months' },
                      { value: 'large', label: 'Advanced', desc: '6-9 months' },
                      { value: 'enterprise', label: 'Enterprise', desc: '9-12 months' }
                    ].map((scope) => (
                      <button
                        key={scope.value}
                        onClick={() => setProjectScope(scope.value)}
                        className={`p-4 rounded-lg border-2 transition text-center ${
                          projectScope === scope.value
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-gray-900 text-sm">{scope.label}</div>
                        <div className="text-xs text-gray-600">{scope.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Timeline Preference</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: 'rush', label: 'Rush', desc: '+25% fee', icon: '🚀' },
                      { value: 'standard', label: 'Standard', desc: 'Best value', icon: '✓' },
                      { value: 'extended', label: 'Flexible', desc: '-10% discount', icon: '📅' }
                    ].map((time) => (
                      <button
                        key={time.value}
                        onClick={() => setTimeline(time.value)}
                        className={`p-4 rounded-lg border-2 transition ${
                          timeline === time.value
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{time.icon}</div>
                        <div className="font-bold text-gray-900">{time.label}</div>
                        <div className="text-sm text-gray-600">{time.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Size */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  {serviceType === 'consulting' ? 'Consultant Team Size' : 'Number of Students'}
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTeamSize(Math.max(1, teamSize - 1))}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-teal-600">{teamSize}</div>
                    <div className="text-sm text-gray-600">
                      {serviceType === 'consulting' ? 'Consultants' : 'Students'}
                    </div>
                  </div>
                  <button
                    onClick={() => setTeamSize(teamSize + 1)}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add-ons (Consulting only) */}
              {serviceType === 'consulting' && (
                <div className="mb-8">
                  <label className="block text-lg font-bold text-gray-900 mb-4">Add-ons</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={managedServices}
                        onChange={(e) => setManagedServices(e.target.checked)}
                        className="w-5 h-5 text-teal-600 rounded"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-bold text-gray-900">Managed Services</div>
                        <div className="text-sm text-gray-600">24/7 monitoring, optimization, support</div>
                      </div>
                      <div className="text-teal-600 font-bold">+CAD $8K-$25K/mo</div>
                    </label>

                    <label className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={training}
                        onChange={(e) => setTraining(e.target.checked)}
                        className="w-5 h-5 text-teal-600 rounded"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-bold text-gray-900">Team Training</div>
                        <div className="text-sm text-gray-600">Knowledge transfer workshops</div>
                      </div>
                      <div className="text-teal-600 font-bold">+CAD $15K</div>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Estimate Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl shadow-xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>

                {/* Total Investment */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                  <div className="text-sm text-gray-300 mb-2">Total Investment</div>
                  <div className="text-4xl font-bold mb-2">{formatCurrency(estimate)}</div>
                  <div className="text-sm text-gray-300">
                    {serviceType === 'consulting' ? 'One-time project cost' : `${teamSize} student${teamSize > 1 ? 's' : ''}`}
                  </div>
                </div>

                {/* Monthly (if applicable) */}
                {monthlyEstimate > 0 && (
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                    <div className="text-sm text-gray-300 mb-2">Monthly (Managed Services)</div>
                    <div className="text-3xl font-bold mb-2">{formatCurrency(monthlyEstimate)}</div>
                    <div className="text-sm text-gray-300">Ongoing support & optimization</div>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-4 mb-6 pb-6 border-b border-white/20">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-300">Timeline</div>
                      <div className="font-semibold">{getTimelineEstimate()}</div>
                    </div>
                  </div>

                  {serviceType === 'consulting' && getROIEstimate() && (
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-sm text-gray-300">Expected ROI</div>
                        <div className="font-semibold">{formatCurrency(getROIEstimate())}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-300">Team Size</div>
                      <div className="font-semibold">{teamSize} {serviceType === 'consulting' ? 'consultants' : 'students'}</div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-300 mb-3">What's Included:</div>
                  <div className="space-y-2">
                    {serviceType === 'consulting' ? (
                      <>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Discovery & assessment</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Platform implementation</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Testing & deployment</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Documentation</span>
                        </div>
                        {training && (
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>Team training workshops</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Live instructor-led sessions</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Hands-on projects</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>One-on-one mentorship</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Career coaching</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>Job placement assistance</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a href="/contact#send-message" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                    <Mail className="w-5 h-5" />
                    Request Detailed Proposal
                  </a>
                  <button onClick={handleDownloadEstimatePDF} className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border border-white/20">
                    <Download className="w-5 h-5" />
                    Download Estimate PDF
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-start gap-2 text-xs text-gray-300">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>This is an estimate only. Final pricing will be provided after discovery call and detailed assessment.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Talk</h3>
            <p className="text-gray-600 mb-6">Book a free 30-minute discovery call to discuss your specific needs and get a detailed proposal.</p>
            <a href="/contact#book-call" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="font-extrabold text-xl md:text-2xl tracking-tight leading-none block text-left truncate">Ripotek Technologies Inc.</span>
              </div>
              <p className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 text-left">Design. Engineer. Deliver.</p>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl mt-4">
                Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-base">
                <div>Calgary, Alberta, Canada</div>
                <div>info@ripotek.com</div>
                <div>+1 306-999-3552</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-teal-400 transition">Data Architecture</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services" className="hover:text-teal-400 transition">MLOps & AI</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/training" className="hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training" className="hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
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
              <p className="text-gray-300 text-base">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
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




