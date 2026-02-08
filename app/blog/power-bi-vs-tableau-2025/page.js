'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Mail, ChevronRight, CheckCircle, BarChart3, TrendingUp, DollarSign, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function BlogPost() {
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

  const postMeta = {
    title: 'Power BI vs Tableau in 2025: Which BI Tool Should You Learn?',
    author: 'David Thompson',
    authorTitle: 'VP of Training & Education',
    authorBio: 'David Thompson is a passionate educator and big data expert with 10 years of experience in Apache Spark, Databricks, and distributed data processing. He has trained over 2,000 students in data engineering technologies and maintains an impressive 85% job placement rate for Ripotek Academy graduates. At Ripotek, David oversees all training programs, ensuring curriculum remains current with industry demands.',
    date: 'September 24, 2024',
    readTime: '11 min read',
    category: 'Business Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop'
  };

  const tableOfContents = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'market-landscape', title: 'Market Landscape 2025' },
    { id: 'head-to-head', title: 'Head-to-Head Comparison' },
    { id: 'power-bi-strengths', title: 'Power BI Strengths' },
    { id: 'tableau-strengths', title: 'Tableau Strengths' },
    { id: 'cost-analysis', title: 'Total Cost Analysis' },
    { id: 'learning-curve', title: 'Learning Curve & Training' },
    { id: 'decision-framework', title: 'Decision Framework' }
  ];

  const relatedPosts = [
    {
      slug: 'azure-data-engineering-best-practices',
      title: '10 Azure Data Engineering Best Practices Every Team Should Know',
      category: 'Azure',
      readTime: '10 min read'
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
      <Navbar />

      {/* Back to Blog - Sticky */}
      <div className={`fixed top-20 left-0 right-0 z-30 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>

      {/* Spacer for sticky button */}
      <div className="h-20"></div>

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
            <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Share on X (Twitter)"><FaXTwitter className="w-5 h-5 text-gray-600" /></button>
            <button onClick={() => handleShare('email')} className="p-2 hover:bg-gray-100 rounded-lg transition"><Mail className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <Image src={postMeta.image} alt={postMeta.title} width={1200} height={600} className="w-full h-64 lg:h-96 object-cover rounded-xl mb-12" />

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    The Power BI vs Tableau debate continues to dominate BI discussions. We break down the strengths, weaknesses, and ideal use cases for each platform based on 30+ real-world enterprise deployments.
                  </p>

                  <h2 id="executive-summary" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Executive Summary: The TL;DR
                  </h2>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 mb-3">Quick Verdict:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <span className="font-semibold">Choose Power BI if:</span> You're in the Microsoft ecosystem, need tight Excel/Office integration, or want lower TCO</li>
                      <li>• <span className="font-semibold">Choose Tableau if:</span> You need advanced visualizations, have complex analytical needs, or are cloud-agnostic</li>
                      <li>• <span className="font-semibold">For Career Growth:</span> Power BI skills are in higher demand in Canada (60% of job postings)</li>
                    </ul>
                  </div>

                  <h2 id="market-landscape" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Market Landscape in 2025
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <BarChart3 className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">38%</div>
                      <p className="text-sm text-gray-700">Power BI market share (Gartner 2024)</p>
                    </div>
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">22%</div>
                      <p className="text-sm text-gray-700">Tableau market share (Gartner 2024)</p>
                    </div>
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <DollarSign className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">60%</div>
                      <p className="text-sm text-gray-700">Of Canadian BI jobs require Power BI (LinkedIn 2024)</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Power BI has seen explosive growth, fueled by Microsoft's bundling strategy and Azure ecosystem integration. Tableau remains strong in enterprises with mature analytics teams and complex visualization needs.
                  </p>

                  <h2 id="head-to-head" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Head-to-Head Feature Comparison
                  </h2>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                      <thead className="bg-teal-600 text-white">
                        <tr>
                          <th className="p-4 text-left font-semibold">Feature</th>
                          <th className="p-4 text-center font-semibold">Power BI</th>
                          <th className="p-4 text-center font-semibold">Tableau</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Ease of Learning</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Winner</td>
                          <td className="p-4 text-center text-gray-500">Steeper curve</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 font-medium text-gray-900">Advanced Visualizations</td>
                          <td className="p-4 text-center text-gray-500">Good</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Winner</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Pricing (5-user team)</td>
                          <td className="p-4 text-center text-teal-600 font-bold">$50/user/mo</td>
                          <td className="p-4 text-center text-gray-500">$75/user/mo</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 font-medium text-gray-900">Microsoft Integration</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Winner</td>
                          <td className="p-4 text-center text-gray-500">Limited</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Data Modeling</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Winner (DAX)</td>
                          <td className="p-4 text-center text-gray-500">Calculated fields</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 font-medium text-gray-900">Mobile Experience</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Native apps</td>
                          <td className="p-4 text-center text-gray-500">Browser-based</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Cloud Platform</td>
                          <td className="p-4 text-center text-gray-700">Azure-centric</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Cloud-agnostic</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-4 font-medium text-gray-900">Community & Resources</td>
                          <td className="p-4 text-center text-teal-600 font-bold">Huge & growing</td>
                          <td className="p-4 text-center text-gray-700">Mature</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="power-bi-strengths" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Power BI Strengths: Where It Shines
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Unbeatable Microsoft Ecosystem Integration</h3>
                      <p className="text-gray-700 mb-3">
                        If your organization runs on Office 365, Azure AD, SharePoint, or Teams, Power BI is a no-brainer.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Embed reports in Teams channels</li>
                        <li>• Single sign-on with Azure AD</li>
                        <li>• Natural Excel import/export workflows</li>
                        <li>• Power Automate integration for alerts</li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Superior Data Modeling with DAX</h3>
                      <p className="text-gray-700 mb-3">
                        DAX (Data Analysis Expressions) is more powerful than Tableau's calculated fields for complex business logic.
                      </p>
                      <div className="bg-gray-900 text-white rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`// Example: Year-over-Year Growth
YoY Growth % =
VAR CurrentYear = SUM(Sales[Revenue])
VAR PreviousYear =
    CALCULATE(
        SUM(Sales[Revenue]),
        SAMEPERIODLASTYEAR(Date[Date])
    )
RETURN
    DIVIDE(CurrentYear - PreviousYear, PreviousYear)`}</code>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Lower Total Cost of Ownership</h3>
                      <p className="text-gray-700 mb-3">
                        For a 100-user organization:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Power BI Pro: $10/user/month = $12K/year</li>
                        <li>• Tableau Creator + Viewer: $90K+/year</li>
                        <li>• <span className="font-bold text-teal-600">Savings: $78K annually</span></li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">4. Faster Learning Curve</h3>
                      <p className="text-gray-700">
                        Business users familiar with Excel can be productive in Power BI within 2-3 weeks. Our training data shows Power BI students achieve competency 30% faster than Tableau students.
                      </p>
                    </div>
                  </div>

                  <h2 id="tableau-strengths" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Tableau Strengths: Where It Excels
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Visualization Flexibility & Beauty</h3>
                      <p className="text-gray-700 mb-3">
                        Tableau's drag-and-drop interface produces gorgeous, publication-ready visuals with minimal effort. Advanced chart types (Sankey diagrams, bullet charts, box plots) are native.
                      </p>
                      <p className="text-gray-700 italic">
                        "If your dashboards need to wow executives or customers, Tableau has the edge." — Fortune 500 Analytics Director
                      </p>
                    </div>

                    <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Superior Performance with Large Datasets</h3>
                      <p className="text-gray-700">
                        Tableau's in-memory engine (Hyper) handles 100M+ row datasets more efficiently than Power BI's in-memory model. Critical for organizations with massive data volumes.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cloud-Agnostic Architecture</h3>
                      <p className="text-gray-700 mb-3">
                        While Power BI is Azure-first, Tableau works seamlessly across AWS, GCP, Azure, and on-premises environments.
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Best for:</span> Multi-cloud enterprises or organizations not committed to Azure.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">4. Mature Governance & Enterprise Features</h3>
                      <p className="text-gray-700">
                        Tableau has been enterprise-ready longer. Features like data lineage, detailed audit logs, and granular permissions are more robust than Power BI's evolving governance model.
                      </p>
                    </div>
                  </div>

                  <h2 id="cost-analysis" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Total Cost Analysis: 3-Year TCO
                  </h2>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Scenario: Mid-sized company (500 employees, 50 analysts)</h4>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-bold text-teal-600 mb-2">Power BI</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• 50 Power BI Pro licenses: $10/user × 50 = $500/month</li>
                          <li>• 1 Premium Per User (for large models): $20/user × 10 = $200/month</li>
                          <li>• Azure infrastructure: ~$500/month</li>
                          <li>• Training (one-time): $15K</li>
                          <li className="font-bold text-teal-600 pt-2">Total 3-Year: $58K</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-blue-600 mb-2">Tableau</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• 50 Creator licenses: $75/user × 50 = $3,750/month</li>
                          <li>• 100 Viewer licenses: $15/user × 100 = $1,500/month</li>
                          <li>• Tableau Server hosting: $1,200/month</li>
                          <li>• Training (one-time): $25K</li>
                          <li className="font-bold text-blue-600 pt-2">Total 3-Year: $258K</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 mt-4">
                        <p className="text-gray-900 font-bold text-lg">
                          Power BI saves $200K over 3 years (77% lower TCO)
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 id="learning-curve" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Learning Curve & Training Time
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Power BI</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <span className="font-semibold">Beginner to Productive:</span> 2-3 weeks</li>
                        <li>• <span className="font-semibold">Advanced (DAX, M):</span> 3-4 months</li>
                        <li>• <span className="font-semibold">Certification:</span> PL-300 (40-60 hours study)</li>
                        <li>• <span className="font-semibold">Community:</span> Massive YouTube, Reddit, forums</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Tableau</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <span className="font-semibold">Beginner to Productive:</span> 4-6 weeks</li>
                        <li>• <span className="font-semibold">Advanced (LODs, calcs):</span> 4-6 months</li>
                        <li>• <span className="font-semibold">Certification:</span> Desktop Specialist (60-80 hours)</li>
                        <li>• <span className="font-semibold">Community:</span> Active, but smaller than Power BI</li>
                      </ul>
                    </div>
                  </div>

                  <h2 id="decision-framework" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Decision Framework: Which Should You Choose?
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Choose Power BI if you:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Are heavily invested in Microsoft 365 / Azure ecosystem</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Need to democratize BI across many business users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Have budget constraints (Power BI is 75% cheaper)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Want faster time-to-value (easier learning curve)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Need strong data modeling capabilities (DAX)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Choose Tableau if you:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Require best-in-class visualization aesthetics</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Work with massive datasets (100M+ rows regularly)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Need multi-cloud or cloud-agnostic architecture</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Have advanced analytical users (data scientists, statisticians)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Budget isn't the primary concern</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Verdict: It Depends (But Mostly Power BI)
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    For 70% of organizations, especially in Canada, <span className="font-bold text-teal-600">Power BI is the right choice</span>. It's more cost-effective, easier to learn, and integrates seamlessly with tools your team already uses.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tableau shines in specific scenarios: large enterprises with complex visualization needs, multi-cloud architectures, or organizations willing to invest in premium analytics experiences.
                  </p>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Career Advice:</p>
                    <p className="text-gray-700">
                      If you're learning BI for career growth, start with Power BI. It has 3x more job postings in Canada, and you can always add Tableau later. The concepts transfer easily.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Hybrid Strategy: Why Not Both?
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Some enterprises deploy both:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <span className="text-gray-700"><span className="font-semibold">Power BI for:</span> Operational dashboards, self-service BI, embedded analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <span className="text-gray-700"><span className="font-semibold">Tableau for:</span> Executive dashboards, advanced analytics, external-facing reports</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    This maximizes ROI but adds complexity in governance, training, and support.
                  </p>

                  <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Power BI with Ripotek</h3>
                    <p className="text-gray-700 mb-6">
                      Our 12-week Power BI Analyst program covers data modeling, DAX, advanced visualizations, and real-world projects. 85% of graduates land BI roles within 90 days.
                    </p>
                    <a href="/training" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">
                      View Training Program <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-36 space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
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
                    <div className="w-16 h-16 bg-linear-to-br from-teal-600 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">DT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{postMeta.author}</h4>
                      <p className="text-sm text-gray-600">{postMeta.authorTitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{postMeta.authorBio}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-linear-to-br from-blue-900 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get expert guidance on your data and AI journey. Our team helps organizations unlock the full potential of their data.
          </p>
          <a href="/training" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-xl text-lg font-semibold">
            Explore Training Programs
          </a>
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

      <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <div className="min-w-0">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
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
              <a href="https://twitter.com/Ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Twitter">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotekacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583595044786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
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








