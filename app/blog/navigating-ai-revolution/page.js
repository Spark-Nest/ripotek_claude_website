'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Mail, ChevronRight, CheckCircle } from 'lucide-react';

export default function BlogPost() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section for table of contents
      const sections = document.querySelectorAll('h2[id]');
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
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

  const postMeta = {
    title: 'Navigating the AI Revolution: A Strategic Guide for Business Leaders',
    author: 'Sarah Chen',
    authorTitle: 'Senior AI Solutions Architect',
    authorBio: 'Sarah Chen leads AI strategy and implementation at Ripotek, specializing in enterprise AI adoption and MLOps architecture. With 12+ years in data science and machine learning, she helps organizations transform AI pilot projects into production systems.',
    date: 'October 28, 2024',
    readTime: '8 min read',
    category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop'
  };

  const tableOfContents = [
    { id: 'the-state', title: 'The State of AI in 2024' },
    { id: 'strategic-framework', title: 'Strategic Framework for AI Adoption' },
    { id: 'use-cases', title: 'High-Impact AI Use Cases' },
    { id: 'building-foundation', title: 'Building the Right Foundation' },
    { id: 'overcoming-challenges', title: 'Overcoming Common Challenges' },
    { id: 'measuring-success', title: 'Measuring AI Success' }
  ];

  const relatedPosts = [
    {
      slug: 'azure-data-engineering-best-practices',
      title: '10 Azure Data Engineering Best Practices Every Team Should Know',
      category: 'Azure',
      readTime: '10 min read'
    },
    {
      slug: 'upskilling-imperative',
      title: 'The Upskilling Imperative: Why Data Skills Are Non-Negotiable in 2025',
      category: 'Career',
      readTime: '6 min read'
    },
    {
      slug: 'process-automation-small-businesses',
      title: 'Why Process Automation Is No Longer Optional for Small Businesses',
      category: 'Best Practices',
      readTime: '7 min read'
    }
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = postMeta.title;

  const handleShare = (platform) => {
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], '_blank');
  };

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
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">
                Let's Talk
              </a>
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

      {/* Back to Blog */}
      <div className="pt-24 pb-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              {postMeta.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {postMeta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{postMeta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{postMeta.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{postMeta.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b">
            <span className="text-gray-600 font-medium">Share:</span>
            <button onClick={() => handleShare('linkedin')} className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Share on LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Share on Twitter">
              <Twitter className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => handleShare('email')} className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Share via Email">
              <Mail className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Article */}
            <article className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                {/* Featured Image */}
                <img src={postMeta.image} alt={postMeta.title} className="w-full h-64 lg:h-96 object-cover rounded-xl mb-12" />

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Artificial Intelligence is no longer a futuristic concept—it's reshaping industries today. From healthcare to finance, manufacturing to retail, AI is transforming how businesses operate, compete, and deliver value. Yet, despite the hype, many organizations struggle to move beyond pilot projects to achieve tangible business outcomes.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    This guide provides a strategic framework for business leaders looking to navigate the AI revolution successfully. Whether you're just starting your AI journey or scaling existing initiatives, understanding the landscape, challenges, and proven pathways to success is critical.
                  </p>

                  <h2 id="the-state" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The State of AI in 2024: Where We Stand
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The AI landscape has matured significantly. Generative AI models like GPT-4 and Claude have democratized access to sophisticated language capabilities. Computer vision models can now detect anomalies with superhuman accuracy. Predictive analytics platforms enable real-time decision-making at scale.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    According to Gartner, by 2025, 75% of enterprises will shift from piloting to operationalizing AI. McKinsey reports that organizations with mature AI capabilities see 20% higher profit margins than their peers. The question is no longer whether to adopt AI, but how to do it strategically.
                  </p>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Key Insight:</p>
                    <p className="text-gray-700">
                      "Companies that excel at AI don't just deploy models—they embed AI into their culture, processes, and decision-making frameworks."
                    </p>
                  </div>

                  <h2 id="strategic-framework" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    A Strategic Framework for AI Adoption
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Successful AI adoption requires a structured approach. Here's a framework our team uses with enterprise clients:
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    1. Define Clear Business Objectives
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Start with the problem, not the technology. Ask yourself:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">What business outcomes are we trying to improve? (Revenue, cost, customer satisfaction, risk reduction)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Where are our current manual processes creating bottlenecks?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">What decisions could we make faster or better with AI?</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    2. Assess Data Readiness
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    AI is only as good as the data it's trained on. Conduct a data maturity assessment:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Do we have sufficient historical data?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Is our data accessible, clean, and well-governed?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Do we have the right data infrastructure (lakehouse, data warehouse, pipelines)?</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    3. Start with High-Impact, Low-Risk Use Cases
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Don't try to boil the ocean. Identify quick wins that build momentum and demonstrate ROI. Examples include:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Customer service chatbots powered by GPT-4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Predictive maintenance for manufacturing equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Automated document processing and classification</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    4. Build for Production from Day One
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Most AI projects fail not because of poor models, but because of weak infrastructure. Ensure you have:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">MLOps pipelines for model versioning, monitoring, and retraining</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Governance frameworks for ethical AI and compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Cross-functional teams (data scientists, engineers, domain experts)</span>
                    </li>
                  </ul>

                  <h2 id="use-cases" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    High-Impact AI Use Cases Across Industries
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Here are proven AI applications we've implemented for clients across sectors:
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Energy & Utilities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Predictive maintenance reducing equipment downtime by 35%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Demand forecasting improving grid efficiency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Fraud detection models processing 100K+ transactions per second</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Personalized investment recommendations increasing customer engagement 40%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Medical image analysis assisting radiologists with 98% accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-gray-700">Patient risk stratification improving care coordination</span>
                      </li>
                    </ul>
                  </div>

                  <h2 id="building-foundation" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Building the Right Foundation: Technology Stack
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    A modern AI technology stack typically includes:
                  </p>

                  <div className="bg-white border-2 border-teal-200 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Core Components:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-lg">1.</span>
                        <div>
                          <p className="font-semibold text-gray-900">Data Platform</p>
                          <p className="text-gray-700">Azure Synapse, Databricks, or Snowflake for scalable data storage and processing</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-lg">2.</span>
                        <div>
                          <p className="font-semibold text-gray-900">ML Platform</p>
                          <p className="text-gray-700">Azure ML, Databricks ML, or AWS SageMaker for model training and deployment</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-lg">3.</span>
                        <div>
                          <p className="font-semibold text-gray-900">MLOps Tools</p>
                          <p className="text-gray-700">MLflow, Kubeflow, or Azure DevOps for CI/CD pipelines</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-lg">4.</span>
                        <div>
                          <p className="font-semibold text-gray-900">Monitoring & Governance</p>
                          <p className="text-gray-700">Model drift detection, explainability tools, and compliance frameworks</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h2 id="overcoming-challenges" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Overcoming Common Challenges
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Organizations face several hurdles on their AI journey:
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Challenge 1: Talent Shortage
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-semibold">Solution:</span> Invest in upskilling existing teams. Partner with training providers like Ripotek to develop in-house AI expertise. Consider augmented teams that blend internal knowledge with external AI specialists.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Challenge 2: Data Silos
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-semibold">Solution:</span> Implement a modern data architecture (lakehouse or mesh) that breaks down silos. Establish data governance policies that balance accessibility with security.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Challenge 3: Resistance to Change
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-semibold">Solution:</span> Build change management into your AI strategy. Communicate wins early and often. Involve end-users in the design process to ensure adoption.
                  </p>

                  <h2 id="measuring-success" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Measuring AI Success: Key Metrics
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Define success metrics before launching AI initiatives. Track both technical and business KPIs:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Technical Metrics</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Model accuracy & precision</li>
                        <li>• Inference latency</li>
                        <li>• Model drift rate</li>
                        <li>• System uptime</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Business Metrics</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Cost savings or revenue lift</li>
                        <li>• Time-to-decision reduction</li>
                        <li>• Customer satisfaction scores</li>
                        <li>• Employee productivity gains</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Path Forward
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    AI adoption is not a one-time project—it's a continuous journey. Organizations that succeed treat AI as a strategic capability, not just a technology implementation. They invest in people, processes, and platforms in parallel.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    The AI revolution is here. The question for business leaders is simple: Will you lead the change, or react to it?
                  </p>

                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h3>
                    <p className="text-gray-700 mb-6">
                      Ripotek helps organizations design and implement production-ready AI solutions. From strategy to MLOps, we provide end-to-end support tailored to your industry and maturity level.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">
                      Book a Consultation <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-2 px-3 rounded-lg transition ${
                        activeSection === item.id
                          ? 'bg-teal-50 text-teal-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Bio */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{postMeta.author}</h4>
                    <p className="text-sm text-gray-600">{postMeta.authorTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {postMeta.authorBio}
                </p>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Need AI Expertise?</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Get expert guidance on your AI strategy and implementation.
                </p>
                <a href="/training" className="block w-full text-center bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                  Explore Training
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gray-50 rounded-xl p-6 hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition group"
              >
                <div className="mb-3">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </a>
            ))}
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
                <li><a href="/blog" className="hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

