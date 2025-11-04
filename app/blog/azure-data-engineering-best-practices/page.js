'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Calendar, Clock, User, Linkedin, Twitter, Mail, ChevronRight, CheckCircle, Code, Database, Shield } from 'lucide-react';

export default function BlogPost() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Careers', href: '/careers' }
  ];

  const postMeta = {
    title: '10 Azure Data Engineering Best Practices Every Team Should Know',
    author: 'Sarah Chen',
    authorTitle: 'Senior AI Solutions Architect',
    authorBio: 'Sarah Chen leads AI strategy and implementation at Ripotek, specializing in enterprise AI adoption and MLOps architecture. She has architected Azure data solutions for Fortune 500 companies across energy, finance, and healthcare sectors.',
    date: 'October 8, 2024',
    readTime: '10 min read',
    category: 'Azure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
  };

  const tableOfContents = [
    { id: 'practice-1', title: '1. Design for Scalability from Day One' },
    { id: 'practice-2', title: '2. Implement Robust Data Governance' },
    { id: 'practice-3', title: '3. Optimize for Cost Efficiency' },
    { id: 'practice-4', title: '4. Build Observability into Pipelines' },
    { id: 'practice-5', title: '5. Embrace Delta Lake Architecture' },
    { id: 'practice-6', title: '6. Automate Everything' },
    { id: 'practice-7', title: '7. Security by Design' },
    { id: 'practice-8', title: '8. Master Data Modeling' },
    { id: 'practice-9', title: '9. Testing & Quality Assurance' },
    { id: 'practice-10', title: '10. Documentation & Knowledge Transfer' }
  ];

  const relatedPosts = [
    {
      slug: 'navigating-ai-revolution',
      title: 'Navigating the AI Revolution: A Strategic Guide for Business Leaders',
      category: 'Best Practices',
      readTime: '8 min read'
    },
    {
      slug: 'transition-data-career-without-cs-degree',
      title: 'How to Transition Into a Data Career Without a CS Degree',
      category: 'Career',
      readTime: '9 min read'
    },
    {
      slug: 'upskilling-imperative',
      title: 'The Upskilling Imperative: Why Data Skills Are Non-Negotiable in 2025',
      category: 'Career',
      readTime: '6 min read'
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
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">{item.name}</a>
              ))}
              <a href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let's Talk</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="pt-24 pb-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <a href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </a>
        </div>
      </div>

      <section className="pb-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">{postMeta.category}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{postMeta.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2"><User className="w-5 h-5" /><span className="font-medium">{postMeta.author}</span></div>
            <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /><span>{postMeta.date}</span></div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5" /><span>{postMeta.readTime}</span></div>
          </div>
          <div className="flex items-center gap-4 pb-8 border-b">
            <span className="text-gray-600 font-medium">Share:</span>
            <button onClick={() => handleShare('linkedin')} className="p-2 hover:bg-gray-100 rounded-lg transition"><Linkedin className="w-5 h-5 text-gray-600" /></button>
            <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-gray-100 rounded-lg transition"><Twitter className="w-5 h-5 text-gray-600" /></button>
            <button onClick={() => handleShare('email')} className="p-2 hover:bg-gray-100 rounded-lg transition"><Mail className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <img src={postMeta.image} alt={postMeta.title} className="w-full h-64 lg:h-96 object-cover rounded-xl mb-12" />

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Building scalable, secure, and cost-efficient data platforms on Azure requires following proven patterns. After architecting 50+ Azure data solutions, here are the essential best practices our team applies on every project.
                  </p>

                  <h2 id="practice-1" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    1. Design for Scalability from Day One
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Don't let current data volumes dictate your architecture. Design for 10x growth.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Key Principles:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Use partitioning:</span> Partition large tables by date or logical boundaries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Leverage Delta Lake:</span> Built-in optimization, ACID transactions, time travel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Design medallion architecture:</span> Bronze (raw), Silver (cleansed), Gold (aggregated)</span>
                      </li>
                    </ul>
                  </div>

                  <h2 id="practice-2" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    2. Implement Robust Data Governance
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Governance isn't a "nice-to-have"—it's essential for compliance, trust, and self-service analytics.
                  </p>
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Tools We Use:</p>
                    <p className="text-gray-700">Microsoft Purview for data cataloging, lineage tracking, and sensitive data classification. Unity Catalog for Databricks environments.</p>
                  </div>

                  <h2 id="practice-3" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    3. Optimize for Cost Efficiency
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cloud costs can spiral without proper optimization. We've helped clients reduce Azure spending by 40-60%.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2">Storage Optimization</h4>
                      <p className="text-gray-700">Use lifecycle policies to move cold data to Cool/Archive tiers. Compress with Parquet or Delta format.</p>
                    </div>
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2">Compute Optimization</h4>
                      <p className="text-gray-700">Right-size clusters. Use auto-scaling. Shut down dev/test resources after hours.</p>
                    </div>
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2">Query Optimization</h4>
                      <p className="text-gray-700">Use partition pruning, predicate pushdown, and caching strategically.</p>
                    </div>
                  </div>

                  <h2 id="practice-4" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    4. Build Observability into Pipelines
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can't fix what you can't see. Monitoring and alerting are non-negotiable.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">What to Monitor:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pipeline execution times and success rates</li>
                      <li>• Data quality metrics (null rates, schema drift, duplicate records)</li>
                      <li>• Resource utilization (CPU, memory, I/O)</li>
                      <li>• Cost per pipeline run</li>
                      <li>• Data freshness (SLA compliance)</li>
                    </ul>
                  </div>

                  <h2 id="practice-5" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    5. Embrace Delta Lake Architecture
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Delta Lake has become the de facto standard for lakehouse architectures. It solves critical problems:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-teal-50 rounded-xl p-4">
                      <Database className="w-8 h-8 text-teal-600 mb-2" />
                      <h5 className="font-bold text-gray-900 mb-1">ACID Transactions</h5>
                      <p className="text-sm text-gray-700">No more corrupt data from failed writes</p>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-4">
                      <Code className="w-8 h-8 text-teal-600 mb-2" />
                      <h5 className="font-bold text-gray-900 mb-1">Time Travel</h5>
                      <p className="text-sm text-gray-700">Query historical versions for audit and recovery</p>
                    </div>
                  </div>

                  <h2 id="practice-6" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    6. Automate Everything
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Manual processes don't scale. Automate deployments, testing, and operational tasks.
                  </p>
                  <div className="bg-gray-900 text-white rounded-xl p-6 mb-8 overflow-x-auto">
                    <p className="text-sm text-gray-400 mb-2">Example: CI/CD Pipeline with Azure DevOps</p>
                    <pre className="text-sm"><code>{`# azure-pipelines.yml
trigger:
  branches:
    include: [main, develop]

stages:
  - stage: Test
    jobs:
      - job: DataQualityTests
        steps:
          - script: pytest tests/

  - stage: Deploy
    jobs:
      - job: DeployPipelines
        steps:
          - task: AzureCLI@2
            inputs:
              scriptType: 'bash'
              scriptLocation: 'inlineScript'
              inlineScript: |
                az datafactory pipeline create-run`}</code></pre>
                  </div>

                  <h2 id="practice-7" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    7. Security by Design
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Security isn't a checkbox—it's a continuous practice.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Encrypt at Rest and in Transit</p>
                        <p className="text-gray-700">Use Azure Key Vault for secrets, enable TLS 1.2+</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Implement Least Privilege Access</p>
                        <p className="text-gray-700">RBAC with Azure AD, fine-grained permissions in Unity Catalog</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Network Isolation</p>
                        <p className="text-gray-700">Private endpoints, VNet integration, no public internet exposure</p>
                      </div>
                    </div>
                  </div>

                  <h2 id="practice-8" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    8. Master Data Modeling
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your data model determines query performance and analytical flexibility.
                  </p>
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Pro Tip:</p>
                    <p className="text-gray-700">Use star schemas for BI workloads (Power BI, Tableau). Use wide denormalized tables for ML training datasets.</p>
                  </div>

                  <h2 id="practice-9" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    9. Testing & Quality Assurance
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Test your data pipelines like you test your code.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Testing Layers:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">1.</span>
                        <span className="text-gray-700"><span className="font-semibold">Unit Tests:</span> Test individual transformations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">2.</span>
                        <span className="text-gray-700"><span className="font-semibold">Integration Tests:</span> Test end-to-end pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">3.</span>
                        <span className="text-gray-700"><span className="font-semibold">Data Quality Tests:</span> Great Expectations, custom assertions</span>
                      </li>
                    </ul>
                  </div>

                  <h2 id="practice-10" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    10. Documentation & Knowledge Transfer
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The best architecture means nothing if your team doesn't understand it.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">What to Document:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Architecture diagrams (Lucidchart, draw.io)</li>
                      <li>• Data lineage and transformation logic</li>
                      <li>• Runbooks for common operations</li>
                      <li>• Troubleshooting guides</li>
                      <li>• Cost optimization playbooks</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    These 10 practices aren't theoretical—they're battle-tested on production systems processing billions of events daily. Adopt them early, and you'll avoid costly rewrites down the road.
                  </p>

                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Azure Architecture Help?</h3>
                    <p className="text-gray-700 mb-6">
                      Our team has built enterprise-grade Azure data platforms for 50+ organizations. Let's discuss your project.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">
                      Schedule Consultation <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className={`block text-sm py-2 px-3 rounded-lg transition ${activeSection === item.id ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">SC</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{postMeta.author}</h4>
                    <p className="text-sm text-gray-600">{postMeta.authorTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{postMeta.authorBio}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Learn Azure Engineering</h3>
                <p className="text-gray-200 mb-4 text-sm">24-week program with hands-on Azure projects</p>
                <a href="/training" className="block w-full text-center bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                  View Program
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="bg-gray-50 rounded-xl p-6 hover-lift card-shine border-2 border-transparent hover:border-teal-500 transition group">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">{post.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition">{post.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />{post.readTime}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
