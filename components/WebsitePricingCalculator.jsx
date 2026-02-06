'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Clock, CheckCircle, ArrowRight, Info } from 'lucide-react';

const WebsitePricingCalculator = () => {
  const [selections, setSelections] = useState({
    websiteType: 'new',
    numberOfPages: '4-7',
    features: [],
    hasBranding: 'yes-basic',
    contentProvided: 'yes',
    integrations: 'none',
    customDesign: 'template-based',
    timeline: 'standard',
    maintenance: 'none'
  });

  const [pricing, setPricing] = useState({
    basePrice: 0,
    featuresPrice: 0,
    integrationPrice: 0,
    designPrice: 0,
    timelinePrice: 0,
    totalDevelopment: 0,
    monthlyMaintenance: 0,
    estimatedTimeline: '',
    suggestedPackage: ''
  });

  const featureOptions = [
    { id: 'contact-form', label: 'Contact Form', price: 0, included: true },
    { id: 'blog', label: 'Blog/News Section', price: 500 },
    { id: 'portfolio', label: 'Portfolio/Gallery', price: 400 },
    { id: 'testimonials', label: 'Testimonials System', price: 300 },
    { id: 'booking', label: 'Booking/Scheduling', price: 1200 },
    { id: 'ecommerce', label: 'E-commerce (Basic)', price: 2500 },
    { id: 'member-portal', label: 'Member Portal/Login', price: 2000 },
    { id: 'live-chat', label: 'Live Chat Integration', price: 200 },
    { id: 'newsletter', label: 'Newsletter Signup', price: 150 },
    { id: 'multi-language', label: 'Multi-language Support', price: 1000 }
  ];

  const calculatePricing = () => {
    let basePrice = 0;
    let timeline = '';
    let suggestedPackage = '';

    // Base price by number of pages and type
    const pageRanges = {
      '1-3': 2500,
      '4-7': 4000,
      '8-15': 7000,
      '16+': 12000
    };

    basePrice = pageRanges[selections.numberOfPages] || 4000;

    // Website type adjustment
    if (selections.websiteType === 'redesign') {
      basePrice *= 0.9; // 10% discount for redesign (existing content)
    } else if (selections.websiteType === 'landing') {
      basePrice = 2000; // Fixed price for landing page
    } else if (selections.websiteType === 'ecommerce') {
      basePrice *= 1.5; // 50% premium for e-commerce
    }

    // Features pricing
    const featuresPrice = selections.features.reduce((total, featureId) => {
      const feature = featureOptions.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    // Integrations pricing
    const integrationPrices = {
      'none': 0,
      'basic': 500, // 1-2 integrations (Mailchimp, Google Analytics)
      'standard': 1000, // 3-4 integrations (CRM, email, analytics, social)
      'advanced': 2000 // 5+ integrations or complex APIs
    };
    const integrationPrice = integrationPrices[selections.integrations] || 0;

    // Design pricing
    const designPrices = {
      'template-based': 0, // Professional customization of templates
      'semi-custom': 1000, // Significant custom design work
      'fully-custom': 2500 // Complete custom design from scratch
    };
    const designPrice = designPrices[selections.customDesign] || 0;

    // Timeline pricing (rush fee)
    const timelinePrices = {
      'rush': basePrice * 0.3, // 30% rush fee for 1-2 week timeline
      'fast': basePrice * 0.15, // 15% rush fee for 2-3 week timeline
      'standard': 0, // No fee for standard 3-6 week timeline
      'flexible': -basePrice * 0.05 // 5% discount for flexible timeline
    };
    const timelinePrice = timelinePrices[selections.timeline] || 0;

    // Branding adjustment
    let brandingDiscount = 0;
    if (selections.hasBranding === 'yes-complete') {
      brandingDiscount = -300; // Small discount for complete brand guidelines
    } else if (selections.hasBranding === 'no') {
      basePrice += 800; // Add cost for basic branding work
    }

    // Content provided adjustment
    if (selections.contentProvided === 'no') {
      basePrice += 1500; // Add content creation cost
    } else if (selections.contentProvided === 'partial') {
      basePrice += 750; // Add partial content creation cost
    }

    // Calculate total development cost
    const totalDevelopment = Math.round(
      basePrice +
      featuresPrice +
      integrationPrice +
      designPrice +
      timelinePrice +
      brandingDiscount
    );

    // Maintenance pricing
    const maintenancePrices = {
      'none': 0,
      'basic': 150,
      'standard': 350,
      'premium': 650
    };
    const monthlyMaintenance = maintenancePrices[selections.maintenance] || 0;

    // Determine timeline
    const timelines = {
      'rush': '1-2 weeks',
      'fast': '2-3 weeks',
      'standard': selections.numberOfPages === '1-3' ? '2-3 weeks' :
                  selections.numberOfPages === '4-7' ? '3-4 weeks' :
                  selections.numberOfPages === '8-15' ? '4-6 weeks' : '6-8 weeks',
      'flexible': selections.numberOfPages === '1-3' ? '3-4 weeks' :
                  selections.numberOfPages === '4-7' ? '4-5 weeks' :
                  selections.numberOfPages === '8-15' ? '6-8 weeks' : '8-10 weeks'
    };
    timeline = timelines[selections.timeline] || '3-4 weeks';

    // Suggest package
    if (totalDevelopment <= 4000) {
      suggestedPackage = 'Starter';
    } else if (totalDevelopment <= 8000) {
      suggestedPackage = 'Professional';
    } else {
      suggestedPackage = 'Enterprise';
    }

    setPricing({
      basePrice: Math.round(basePrice),
      featuresPrice,
      integrationPrice,
      designPrice,
      timelinePrice,
      totalDevelopment,
      monthlyMaintenance,
      estimatedTimeline: timeline,
      suggestedPackage
    });
  };

  useEffect(() => {
    calculatePricing();
  }, [selections]);

  const handleFeatureToggle = (featureId) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleChange = (field, value) => {
    setSelections(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5" />
            <span className="text-sm font-semibold">Pricing Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Estimate Your Website Project Cost
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get an instant estimate by selecting your requirements below. All prices are in USD and represent typical project costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-6">

            {/* Website Type */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                What type of website do you need?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: 'new', label: 'Brand New Website', description: 'Starting from scratch' },
                  { value: 'redesign', label: 'Redesign Existing', description: 'Update current site' },
                  { value: 'landing', label: 'Landing Page', description: 'Single page site' },
                  { value: 'ecommerce', label: 'E-commerce', description: 'Online store' }
                ].map(option => (
                  <label
                    key={option.value}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selections.websiteType === option.value
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="websiteType"
                      value={option.value}
                      checked={selections.websiteType === option.value}
                      onChange={(e) => handleChange('websiteType', e.target.value)}
                      className="mt-1 text-teal-600"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-slate-800">{option.label}</div>
                      <div className="text-sm text-slate-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Number of Pages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                How many pages do you need?
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {['1-3', '4-7', '8-15', '16+'].map(range => (
                  <label
                    key={range}
                    className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selections.numberOfPages === range
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="numberOfPages"
                      value={range}
                      checked={selections.numberOfPages === range}
                      onChange={(e) => handleChange('numberOfPages', e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-2xl font-bold text-slate-800 mb-1">{range}</div>
                    <div className="text-xs text-slate-600">pages</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Select features you need
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {featureOptions.map(feature => (
                  <label
                    key={feature.id}
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                      selections.features.includes(feature.id)
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selections.features.includes(feature.id)}
                        onChange={() => handleFeatureToggle(feature.id)}
                        className="w-5 h-5 text-teal-600 border-slate-300 rounded"
                      />
                      <span className="text-slate-700">{feature.label}</span>
                    </div>
                    <span className={`text-sm font-semibold ${feature.included ? 'text-teal-600' : 'text-slate-600'}`}>
                      {feature.included ? 'Included' : `+$${feature.price}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Design & Branding */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                Design & Branding
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Custom Design Level
                  </label>
                  <select
                    value={selections.customDesign}
                    onChange={(e) => handleChange('customDesign', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="template-based">Template-Based (Professional Customization)</option>
                    <option value="semi-custom">Semi-Custom ($1,000 additional)</option>
                    <option value="fully-custom">Fully Custom ($2,500 additional)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Do you have existing branding?
                  </label>
                  <select
                    value={selections.hasBranding}
                    onChange={(e) => handleChange('hasBranding', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="yes-complete">Yes, complete brand guidelines</option>
                    <option value="yes-basic">Yes, basic (logo and colors)</option>
                    <option value="no">No, need branding help ($800 additional)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Will you provide content (text & images)?
                  </label>
                  <select
                    value={selections.contentProvided}
                    onChange={(e) => handleChange('contentProvided', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="yes">Yes, I'll provide all content</option>
                    <option value="partial">Partial, need help with some ($750 additional)</option>
                    <option value="no">No, need full content creation ($1,500 additional)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Integrations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                Third-Party Integrations
              </h2>
              <select
                value={selections.integrations}
                onChange={(e) => handleChange('integrations', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value="none">No integrations needed</option>
                <option value="basic">Basic (1-2 integrations) - $500</option>
                <option value="standard">Standard (3-4 integrations) - $1,000</option>
                <option value="advanced">Advanced (5+ or complex APIs) - $2,000</option>
              </select>
              <p className="text-sm text-slate-600 mt-2">
                Examples: CRM (Salesforce), Email Marketing (Mailchimp), Payment Processing (Stripe), Booking Systems
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
                Project Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: 'rush', label: 'Rush', time: '1-2 weeks', extra: '+30% fee' },
                  { value: 'fast', label: 'Fast', time: '2-3 weeks', extra: '+15% fee' },
                  { value: 'standard', label: 'Standard', time: '3-6 weeks', extra: 'No extra fee' },
                  { value: 'flexible', label: 'Flexible', time: '6-10 weeks', extra: '5% discount' }
                ].map(option => (
                  <label
                    key={option.value}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selections.timeline === option.value
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      checked={selections.timeline === option.value}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className="mt-1 text-teal-600"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-slate-800">{option.label} - {option.time}</div>
                      <div className="text-sm text-slate-600">{option.extra}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">7</span>
                Ongoing Maintenance (Optional)
              </h2>
              <select
                value={selections.maintenance}
                onChange={(e) => handleChange('maintenance', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value="none">No maintenance plan</option>
                <option value="basic">Basic Care - $150/month</option>
                <option value="standard">Standard Care - $350/month</option>
                <option value="premium">Premium Care - $650/month</option>
              </select>
            </div>

          </div>

          {/* Right Column - Pricing Summary (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-xl shadow-2xl p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <DollarSign className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Your Estimate</h2>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-teal-400">
                  <div className="flex justify-between text-teal-100">
                    <span>Base Price</span>
                    <span className="font-semibold">${pricing.basePrice.toLocaleString()}</span>
                  </div>

                  {pricing.featuresPrice > 0 && (
                    <div className="flex justify-between text-teal-100">
                      <span>Features</span>
                      <span className="font-semibold">+${pricing.featuresPrice.toLocaleString()}</span>
                    </div>
                  )}

                  {pricing.integrationPrice > 0 && (
                    <div className="flex justify-between text-teal-100">
                      <span>Integrations</span>
                      <span className="font-semibold">+${pricing.integrationPrice.toLocaleString()}</span>
                    </div>
                  )}

                  {pricing.designPrice > 0 && (
                    <div className="flex justify-between text-teal-100">
                      <span>Custom Design</span>
                      <span className="font-semibold">+${pricing.designPrice.toLocaleString()}</span>
                    </div>
                  )}

                  {pricing.timelinePrice !== 0 && (
                    <div className="flex justify-between text-teal-100">
                      <span>Timeline Adjustment</span>
                      <span className="font-semibold">
                        {pricing.timelinePrice > 0 ? '+' : ''}${pricing.timelinePrice.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="mb-6">
                  <div className="text-teal-100 text-sm mb-2">TOTAL DEVELOPMENT COST</div>
                  <div className="text-5xl font-bold mb-2">
                    ${pricing.totalDevelopment.toLocaleString()}
                  </div>
                  {pricing.monthlyMaintenance > 0 && (
                    <div className="text-teal-100 mt-4">
                      + ${pricing.monthlyMaintenance}/month maintenance
                    </div>
                  )}
                </div>

                {/* Package Suggestion */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-200" />
                    <span className="font-semibold">Suggested Package</span>
                  </div>
                  <div className="text-2xl font-bold">{pricing.suggestedPackage}</div>
                </div>

                {/* Timeline */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-teal-200" />
                    <span className="font-semibold">Estimated Timeline</span>
                  </div>
                  <div className="text-2xl font-bold">{pricing.estimatedTimeline}</div>
                </div>

                {/* CTA */}
                <a
                  href="/website-discovery"
                  className="block w-full bg-white text-teal-600 text-center font-bold py-4 px-6 rounded-lg hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                >
                  Get Detailed Proposal
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>

                <div className="mt-6 text-center text-teal-100 text-sm">
                  <div className="flex items-start space-x-2 justify-center">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-left">
                      This is an estimate. Final pricing may vary based on detailed requirements.
                      Contact us for a custom quote.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">What's Included</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile-responsive design</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Google Analytics setup</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Basic SEO optimization</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Revision rounds</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Post-launch support</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Training & documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebsitePricingCalculator;
