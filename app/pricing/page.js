'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, CheckCircle, AlertCircle, Download, Mail, Calendar, Menu, X } from 'lucide-react';

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

  useEffect(() => {
    calculateEstimate();
  }, [serviceType, projectScope, timeline, teamSize, managedServices, training]);

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
      const programPricing = {
        small: 1599,  // 1 program
        medium: 4500, // 3 programs (bulk discount)
        large: 8500,  // 5 programs
        enterprise: 15000 // 8+ programs custom
      };
      base = programPricing[projectScope] || 1599;
      base *= teamSize; // Per person
    }

    // Add-ons
    if (managedServices) {
      monthly = projectScope === 'enterprise' ? 25000 : projectScope === 'large' ? 15000 : 8000;
    }

    if (training && serviceType === 'consulting') {
      base += 15000; // Training add-on
    }

    setEstimate(base);
    setMonthlyEstimate(monthly);
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
    const timelines = {
      consulting: {
        small: '2-3 months',
        medium: '3-6 months',
        large: '6-9 months',
        enterprise: '9-12 months'
      },
      training: {
        small: '12 weeks',
        medium: '12-24 weeks',
        large: '24 weeks',
        enterprise: 'Custom timeline'
      }
    };
    return timelines[serviceType]?.[projectScope] || 'Contact us';
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Consulting', href: '/services#consulting' },
        { name: 'Training', href: '/services#training' },
        { name: 'Managed Services', href: '/services#managed' }
      ]
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'All Programs', href: '/training' },
        { name: 'Power BI Analyst', href: '/training#powerbi' },
        { name: 'Azure Data Engineer', href: '/training#azure' },
        { name: 'Databricks Engineer', href: '/training#databricks' },
        { name: 'AI Engineer', href: '/training#ai' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Ripotek</div>
                <div className="text-xs text-gray-600">Data & AI Solutions</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                  {link.name}
                </a>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition font-semibold">
                Get Started
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, i) => (
                <a key={i} href={link.href} className="block text-gray-700 hover:text-teal-600 transition font-medium py-2">
                  {link.name}
                </a>
              ))}
              <a href="/contact" className="block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-gray-900">Investment </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get an instant estimate for your data transformation project or training program
            </p>
          </div>

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
                    <div className="text-sm text-gray-600">Team upskilling</div>
                  </button>
                </div>
              </div>

              {/* Project Scope */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-4">Project Scope</label>
                <div className="grid md:grid-cols-4 gap-3">
                  {[
                    { value: 'small', label: serviceType === 'consulting' ? 'Discovery' : '1 Program', desc: serviceType === 'consulting' ? '2-4 weeks' : '1 person' },
                    { value: 'medium', label: serviceType === 'consulting' ? 'Standard' : '3 Programs', desc: serviceType === 'consulting' ? '3-6 months' : '3 people' },
                    { value: 'large', label: serviceType === 'consulting' ? 'Advanced' : '5 Programs', desc: serviceType === 'consulting' ? '6-9 months' : '5 people' },
                    { value: 'enterprise', label: 'Enterprise', desc: serviceType === 'consulting' ? '9-12 months' : '8+ people' }
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

              {/* Add-ons */}
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

                  {serviceType === 'consulting' && (
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
                  )}
                </div>
              </div>
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
                  <a href="/contact" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                    <Mail className="w-5 h-5" />
                    Request Detailed Proposal
                  </a>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border border-white/20">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Book a free 30-minute discovery call to discuss your specific needs and get a detailed proposal.</p>
            <a href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-teal-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">R</span>
                </div>
                <div className="text-xl font-bold">Ripotek</div>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering organizations with cutting-edge data and AI solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <a href="/services#consulting" className="block text-gray-300 hover:text-teal-400 transition">Data Consulting</a>
                <a href="/services#training" className="block text-gray-300 hover:text-teal-400 transition">Training Programs</a>
                <a href="/services#managed" className="block text-gray-300 hover:text-teal-400 transition">Managed Services</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="/about" className="block text-gray-300 hover:text-teal-400 transition">About Us</a>
                <a href="/careers" className="block text-gray-300 hover:text-teal-400 transition">Careers</a>
                <a href="/blog" className="block text-gray-300 hover:text-teal-400 transition">Blog</a>
                <a href="/contact" className="block text-gray-300 hover:text-teal-400 transition">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Calgary, Alberta</p>
                <p>info@ripotek.com</p>
                <p>(403) 555-0123</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Ripotek. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
