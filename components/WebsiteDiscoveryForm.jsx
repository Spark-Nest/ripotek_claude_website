'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const WebsiteDiscoveryForm = () => {
  const [formData, setFormData] = useState({
    // Business Information
    companyName: '',
    industry: '',
    currentWebsite: '',
    businessGoals: '',
    targetAudience: '',
    keyCompetitors: '',

    // Project Scope
    websiteType: '',
    numberOfPages: '',
    keyFeatures: [],
    hasBranding: '',
    logoAvailable: '',

    // Timeline & Budget
    desiredLaunchDate: '',
    budgetRange: '',
    decisionMaker: '',

    // Technical Requirements
    hostingPreference: '',
    domainStatus: '',
    integrationsNeeded: '',
    seoImportance: '',

    // Post-Launch
    contentManagement: '',
    maintenanceExpectation: '',
    trainingNeeded: '',

    // Contact Information
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    preferredContact: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const featureOptions = [
    'Contact Form',
    'Blog',
    'E-commerce',
    'Booking System',
    'Member Portal',
    'Gallery/Portfolio',
    'Testimonials',
    'Client Impact',
    'Newsletter Signup',
    'Live Chat',
    'Social Media Integration',
    'Video Integration'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.businessGoals.trim()) newErrors.businessGoals = 'Business goals are required';
    if (!formData.websiteType) newErrors.websiteType = 'Please select a website type';
    if (!formData.budgetRange) newErrors.budgetRange = 'Please select a budget range';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Email is required';

    // Email validation
    if (formData.contactEmail && !/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Here you would typically send to your backend or email service
    console.log('Form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          companyName: '', industry: '', currentWebsite: '', businessGoals: '',
          targetAudience: '', keyCompetitors: '', websiteType: '', numberOfPages: '',
          keyFeatures: [], hasBranding: '', logoAvailable: '', desiredLaunchDate: '',
          budgetRange: '', decisionMaker: '', hostingPreference: '', domainStatus: '',
          integrationsNeeded: '', seoImportance: '', contentManagement: '',
          maintenanceExpectation: '', trainingNeeded: '', contactName: '',
          contactEmail: '', contactPhone: '', preferredContact: ''
        });
      }, 3000);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h2>
          <p className="text-slate-600 text-lg mb-2">
            We've received your project details.
          </p>
          <p className="text-slate-500">
            Our team will review your requirements and contact you within 24 hours to discuss your website project.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Website Project Discovery
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Help us understand your vision. This form takes about 5-7 minutes to complete and ensures we build exactly what you need.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">

          {/* Section 1: Business Information */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Business Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.companyName ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Your company name"
                />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.industry ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="e.g., Healthcare, Technology, Retail"
                />
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Current Website (if applicable)
                </label>
                <input
                  type="url"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Primary Business Goals *
                </label>
                <textarea
                  name="businessGoals"
                  value={formData.businessGoals}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.businessGoals ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="What are you trying to achieve with this website? (e.g., generate leads, showcase portfolio, sell products, educate customers)"
                />
                {errors.businessGoals && <p className="text-red-500 text-sm mt-1">{errors.businessGoals}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="Who are your ideal customers?"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Key Competitors
                </label>
                <input
                  type="text"
                  name="keyCompetitors"
                  value={formData.keyCompetitors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="List 2-3 competitor websites we should be aware of"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Project Scope */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
              Project Scope
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Website Type *
                </label>
                <select
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.websiteType ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select type...</option>
                  <option value="new">Brand New Website</option>
                  <option value="redesign">Redesign Existing Website</option>
                  <option value="landing">Landing Page</option>
                  <option value="ecommerce">E-commerce Site</option>
                  <option value="portfolio">Portfolio/Showcase</option>
                  <option value="other">Other</option>
                </select>
                {errors.websiteType && <p className="text-red-500 text-sm mt-1">{errors.websiteType}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Estimated Number of Pages
                </label>
                <select
                  name="numberOfPages"
                  value={formData.numberOfPages}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select range...</option>
                  <option value="1-3">1-3 pages</option>
                  <option value="4-7">4-7 pages</option>
                  <option value="8-15">8-15 pages</option>
                  <option value="16+">16+ pages</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Key Features Needed (select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {featureOptions.map(feature => (
                    <label key={feature} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                      <input
                        type="checkbox"
                        name="keyFeatures"
                        value={feature}
                        checked={formData.keyFeatures.includes(feature)}
                        onChange={handleChange}
                        className="w-5 h-5 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-slate-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Do you have existing branding?
                  </label>
                  <select
                    name="hasBranding"
                    value={formData.hasBranding}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  >
                    <option value="">Select...</option>
                    <option value="yes-complete">Yes, complete brand guidelines</option>
                    <option value="yes-basic">Yes, basic (logo and colors)</option>
                    <option value="no">No, need branding help</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Logo Available?
                  </label>
                  <select
                    name="logoAvailable"
                    value={formData.logoAvailable}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  >
                    <option value="">Select...</option>
                    <option value="yes-vector">Yes, vector format (AI, SVG, EPS)</option>
                    <option value="yes-raster">Yes, image format only (PNG, JPG)</option>
                    <option value="no">No logo yet</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Timeline & Budget */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
              Timeline & Budget
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Desired Launch Date
                </label>
                <input
                  type="date"
                  name="desiredLaunchDate"
                  value={formData.desiredLaunchDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Budget Range *
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.budgetRange ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select range...</option>
                  <option value="under-2500">Under $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000+">$20,000+</option>
                </select>
                {errors.budgetRange && <p className="text-red-500 text-sm mt-1">{errors.budgetRange}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Who will be the primary decision-maker?
                </label>
                <input
                  type="text"
                  name="decisionMaker"
                  value={formData.decisionMaker}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="Name and role"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Technical Requirements */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
              Technical Requirements
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Hosting Preference
                </label>
                <select
                  name="hostingPreference"
                  value={formData.hostingPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select preference...</option>
                  <option value="ripotek-managed">Ripotek managed hosting (recommended)</option>
                  <option value="client-managed">I'll manage my own hosting</option>
                  <option value="existing">Use existing hosting provider</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Domain Status
                </label>
                <select
                  name="domainStatus"
                  value={formData.domainStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select status...</option>
                  <option value="have">I already own my domain</option>
                  <option value="need">Need to purchase a domain</option>
                  <option value="transfer">Need to transfer domain</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Integrations Needed
                </label>
                <textarea
                  name="integrationsNeeded"
                  value={formData.integrationsNeeded}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="e.g., CRM (Salesforce), Email Marketing (Mailchimp), Payment Processing (Stripe), Booking System"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How important is SEO to you?
                </label>
                <select
                  name="seoImportance"
                  value={formData.seoImportance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select...</option>
                  <option value="critical">Critical - Main source of traffic</option>
                  <option value="important">Important - Want to rank well</option>
                  <option value="nice">Nice to have</option>
                  <option value="not-priority">Not a priority</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Post-Launch */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
              Post-Launch Support
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Content Management Needs
                </label>
                <select
                  name="contentManagement"
                  value={formData.contentManagement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select...</option>
                  <option value="self-manage">I want to update content myself</option>
                  <option value="ripotek-manage">Ripotek should manage updates</option>
                  <option value="mixed">Mix of both</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Maintenance Expectations
                </label>
                <select
                  name="maintenanceExpectation"
                  value={formData.maintenanceExpectation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select...</option>
                  <option value="basic">Basic (monitoring + security updates)</option>
                  <option value="standard">Standard (updates + monthly content changes)</option>
                  <option value="premium">Premium (active management + content creation)</option>
                  <option value="none">No maintenance needed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Would you like training on managing your site?
                </label>
                <select
                  name="trainingNeeded"
                  value={formData.trainingNeeded}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select...</option>
                  <option value="yes-detailed">Yes, detailed training session</option>
                  <option value="yes-basic">Yes, basic walkthrough</option>
                  <option value="documentation">Just documentation is fine</option>
                  <option value="no">No training needed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 6: Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.contactName ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="John Smith"
                />
                {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                    errors.contactEmail ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                >
                  <option value="">Select...</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="either">Either is fine</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-700 hover:to-cyan-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Submit Project Details</span>
              <Send className="w-5 h-5" />
            </button>
            <p className="text-center text-slate-500 text-sm mt-4">
              We'll review your submission and contact you within 24 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebsiteDiscoveryForm;
