'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe, Code, Rocket, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users, Layout, Smartphone, Search, BarChart3, Layers, HeadphonesIcon, MapPin, Mail, Phone, Calendar, Calculator } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function WebsiteDevelopmentPage() {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = 'consulting@ripotek.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (err) {
      // Fallback: try to open mailto
      window.location.href = `mailto:${email}`;
    }
  };



  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$2,500 - $4,000',
      timeline: '2-3 weeks',
      bestFor: 'Small businesses, solo practitioners, new ventures',
      features: [
        '3-5 page professional website',
        'Mobile-responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Google Analytics integration',
        '2 rounds of revisions',
        '30 days post-launch support',
        'SSL certificate setup',
        'Social media links'
      ],
      ideal: ['Consultants', 'Freelancers', 'Local businesses', 'Professional services']
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$5,000 - $8,000',
      timeline: '3-4 weeks',
      bestFor: 'Growing companies needing comprehensive online presence',
      features: [
        '6-10 page custom website',
        'Custom design & branding refinement',
        'Advanced features (blog, testimonials, case studies)',
        'Google Analytics + event tracking',
        'Lead capture forms with CRM integration',
        'Email marketing integration',
        'Advanced SEO optimization',
        '3 rounds of revisions',
        '60 days post-launch support',
        'Content strategy consultation',
        'Performance optimization',
        'Training session for your team'
      ],
      ideal: ['Consulting firms', 'Tech companies', 'B2B services', 'Agencies'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$10,000 - $20,000+',
      timeline: '6-8 weeks',
      bestFor: 'Established companies requiring sophisticated functionality',
      features: [
        '10-20+ page comprehensive site',
        'Full custom development',
        'Advanced functionality (portals, booking, e-commerce)',
        'API integrations (CRM, ERP, payment systems)',
        'Custom content management',
        'Multi-user role management',
        'Advanced analytics dashboard',
        'Unlimited revisions during development',
        '90 days premium support',
        'Dedicated project manager',
        'Training for entire team',
        'Documentation & SOPs',
        'Migration from existing platform'
      ],
      ideal: ['Large enterprises', 'SaaS companies', 'E-commerce', 'Member platforms']
    }
  ];

  const maintenancePlans = [
    {
      name: 'Basic Care',
      price: '$150',
      period: 'month',
      features: [
        'Security updates & backups',
        'Uptime monitoring (99.9% SLA)',
        '1 hour content updates/month',
        'Email support (48hr response)',
        'Monthly performance report',
        'Plugin/dependency updates'
      ]
    },
    {
      name: 'Standard Care',
      price: '$350',
      period: 'month',
      features: [
        'Everything in Basic',
        '3 hours content updates/month',
        'SEO monitoring & reporting',
        'Priority email support (24hr)',
        'Quarterly strategy call',
        'A/B testing implementation',
        'Conversion tracking'
      ],
      popular: true
    },
    {
      name: 'Premium Care',
      price: '$650',
      period: 'month',
      features: [
        'Everything in Standard',
        '6 hours content updates/month',
        'Monthly blog post writing',
        'Advanced analytics reporting',
        'Phone support',
        'Monthly strategy call',
        'Priority bug fixes (4hr response)',
        'Ongoing optimization'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.',
      duration: '1 week',
      deliverables: ['Project brief', 'Sitemap', 'Content strategy', 'Technical requirements']
    },
    {
      step: 2,
      title: 'Design & Wireframing',
      description: 'Our design process focuses on creating intuitive, conversion-optimized layouts that represent your brand perfectly.',
      duration: '1-2 weeks',
      deliverables: ['Wireframes', 'Design mockups', 'Style guide', 'Interactive prototypes']
    },
    {
      step: 3,
      title: 'Development',
      description: 'Using modern technologies (React, Tailwind CSS), we build fast, secure, and scalable websites that perform beautifully.',
      duration: '2-4 weeks',
      deliverables: ['Functional website', 'Content integration', 'Feature implementation', 'Cross-browser testing']
    },
    {
      step: 4,
      title: 'Testing & Refinement',
      description: 'Rigorous testing across devices, browsers, and user scenarios ensures your site works flawlessly before launch.',
      duration: '1 week',
      deliverables: ['QA report', 'Performance optimization', 'Security audit', 'Final revisions']
    },
    {
      step: 5,
      title: 'Launch & Support',
      description: 'We handle the technical launch, monitor performance, and provide ongoing support to ensure your success.',
      duration: 'Ongoing',
      deliverables: ['Live website', 'Training session', 'Documentation', 'Post-launch monitoring']
    }
  ];

  const technologies = [
    { name: 'React', icon: Code, description: 'Modern, component-based development' },
    { name: 'Tailwind CSS', icon: Layout, description: 'Beautiful, responsive styling' },
    { name: 'Analytics', icon: BarChart3, description: 'Google Analytics & tracking' },
    { name: 'SEO Tools', icon: Search, description: 'Optimized for search engines' },
    { name: 'Mobile-First', icon: Smartphone, description: 'Perfect on all devices' },
    { name: 'Security', icon: Shield, description: 'SSL, backups, monitoring' }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Data-Driven Approach',
      description: 'As a data consultancy, we build websites with analytics and conversion tracking from day one, giving you insights into what\'s working.'
    },
    {
      icon: TrendingUp,
      title: 'Performance-Focused',
      description: 'Fast load times, SEO optimization, and conversion-focused design ensure your website actually drives business results.'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'We use React and Tailwind CSS for cutting-edge, maintainable websites that are easy to update and scale.'
    },
    {
      icon: Users,
      title: 'Consultative Process',
      description: 'We don\'t just build what you ask for - we consult on strategy, UX, and best practices to ensure maximum ROI.'
    },
    {
      icon: Rocket,
      title: 'Fast Turnaround',
      description: 'Our streamlined process means you get a professional website in weeks, not months, without sacrificing quality.'
    },
    {
      icon: HeadphonesIcon,
      title: 'True Partnership',
      description: 'From discovery to launch and beyond, we\'re your technology partner, not just a vendor.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Timelines vary by package: Starter (2-3 weeks), Professional (3-4 weeks), Enterprise (6-8 weeks). The timeline depends on scope, complexity, and how quickly you can provide content and feedback.'
    },
    {
      question: 'Do I need to provide the content and images?',
      answer: 'Yes, you provide the text content and images for your website. We can guide you on what\'s needed and provide recommendations, but you know your business best. If you need help with content creation, we can refer you to trusted partners or discuss content services.'
    },
    {
      question: 'What if I want to make changes after the website is live?',
      answer: 'All packages include post-launch support (30-90 days depending on package). After that, you can purchase a maintenance plan, request changes at our hourly rate, or manage updates yourself if you have the technical capability.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built mobile-first and fully responsive, meaning they look and work great on phones, tablets, and desktops. We test across multiple devices before launch.'
    },
    {
      question: 'Can I update the website myself after it\'s built?',
      answer: 'It depends on your technical comfort level and the complexity of changes. We provide training and documentation. For simple content updates, we can build in easy-to-use editing capabilities. For more complex changes, our maintenance plans are very affordable.'
    },
    {
      question: 'What about hosting and domain registration?',
      answer: 'We recommend hosting platforms (typically Vercel or Netlify) and can set everything up for you, or you can provide your own hosting. Domain registration costs are separate (~$15/year) but we can handle the purchase and setup.'
    },
    {
      question: 'Will my website be optimized for search engines (SEO)?',
      answer: 'Yes! All packages include basic technical SEO setup (meta tags, sitemap, proper structure). Professional and Enterprise packages include more advanced SEO optimization. For ongoing SEO campaigns, that\'s a separate service we can discuss.'
    },
    {
      question: 'What happens if I\'m not happy with the design?',
      answer: 'That\'s why we include revision rounds! We present mockups early for your feedback and don\'t proceed until you approve the design direction. Our goal is to create something you love, and we work collaboratively to get there.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! Projects are broken into milestones with payments spread across the project timeline. Typically 50% upfront for smaller projects, or split into 3-4 payments for larger projects aligned with completion milestones.'
    },
    {
      question: 'Can you integrate my website with other tools?',
      answer: 'Yes! We regularly integrate with CRMs (Salesforce, HubSpot), email marketing (Mailchimp, ActiveCampaign), booking systems, payment processors, and more. Integration complexity varies, so we\'ll discuss your specific needs during discovery.'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-24">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold">Digital Platforms</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Websites Built for Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Modern, fast, and conversion-optimized websites powered by data-driven insights. From concept to launch in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/website-discovery"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Ripotek for Your Website?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just developers—we're technology consultants who understand business strategy, data analytics, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent pricing, clear deliverables, no hidden fees. Select the package that fits your business needs.
            </p>
            <a
              href="/website-pricing"
              className="inline-flex items-center justify-center gap-3 mt-8 px-8 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Calculator className="w-6 h-6" />
              Need a custom quote? Try our Pricing Calculator
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-linear-to-br from-teal-600 to-cyan-600 text-white shadow-2xl scale-105 transform'
                    : 'bg-slate-50 text-slate-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-slate-800 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-teal-600'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm ${pkg.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                    Timeline: {pkg.timeline}
                  </p>
                </div>

                <div className="mb-6">
                  <p className={`text-sm font-semibold mb-2 ${pkg.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                    BEST FOR:
                  </p>
                  <p className={`${pkg.popular ? 'text-white' : 'text-slate-700'}`}>
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.popular ? 'text-teal-200' : 'text-teal-600'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-white' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className={`text-xs font-semibold mb-2 ${pkg.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                    IDEAL FOR:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.ideal.map((item, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          pkg.popular
                            ? 'bg-white/20 text-white'
                            : 'bg-teal-100 text-teal-700'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="/website-discovery"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-white text-teal-600 hover:bg-teal-50'
                      : 'bg-linear-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured, collaborative approach that ensures your website exceeds expectations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {process.map((phase, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {index !== process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-teal-200"></div>
                )}

                <div className="flex gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-linear-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {phase.step}
                    </div>
                  </div>

                  <div className="grow bg-white rounded-xl shadow-lg p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-800">{phase.title}</h3>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Deliverables:</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We use cutting-edge, proven technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700 transition-all duration-200">
                  <Icon className="w-12 h-12 text-teal-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-slate-300">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Ongoing Maintenance & Support
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Keep your website secure, updated, and performing at its best with our maintenance plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-200 ${
                  plan.popular
                    ? 'bg-linear-to-br from-teal-600 to-cyan-600 text-white shadow-2xl scale-105'
                    : 'bg-slate-50 text-slate-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                    RECOMMENDED
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-teal-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                    /{plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-teal-200' : 'text-teal-600'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-teal-600 hover:bg-teal-50'
                      : 'bg-linear-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about our website development services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="discovery-form" className="py-20 bg-linear-to-br from-teal-600 via-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-3xl mx-auto">
            Let's discuss your project. Fill out our discovery form and we'll contact you within 24 hours with a custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/website-discovery"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Complete Discovery Form
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/contact#book-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
            </a>
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
                <li><a href="/services#analytics-&-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Data Services</a></li>
                <li><a href="/website-development" className="text-gray-300 hover:text-teal-400 transition">Digital Platforms</a></li>
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
