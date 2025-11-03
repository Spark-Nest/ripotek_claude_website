'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Calendar, Clock, User, Linkedin, Twitter, Mail, ChevronRight, CheckCircle, GraduationCap, TrendingUp, Target } from 'lucide-react';

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
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const postMeta = {
    title: 'How to Transition Into a Data Career Without a CS Degree: Your Complete Roadmap',
    author: 'Marcus Johnson',
    authorTitle: 'Head of Training & Career Development',
    authorBio: 'Marcus Johnson leads Ripotek\'s training programs, helping professionals transition into data careers. He has successfully coached over 1,500 career changers, with 85% landing data roles within 90 days of completing their training.',
    date: 'October 1, 2024',
    readTime: '9 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop'
  };

  const tableOfContents = [
    { id: 'myth-busting', title: 'Myth-Busting: Do You Need a CS Degree?' },
    { id: 'skills-you-need', title: 'The Skills That Actually Matter' },
    { id: 'learning-roadmap', title: 'Your 6-Month Learning Roadmap' },
    { id: 'building-portfolio', title: 'Building a Portfolio That Gets Noticed' },
    { id: 'networking', title: 'Networking for Career Changers' },
    { id: 'landing-first-role', title: 'Landing Your First Data Role' }
  ];

  const relatedPosts = [
    {
      slug: 'upskilling-imperative',
      title: 'The Upskilling Imperative: Why Data Skills Are Non-Negotiable in 2025',
      category: 'Career',
      readTime: '6 min read'
    },
    {
      slug: 'azure-data-engineering-best-practices',
      title: '10 Azure Data Engineering Best Practices Every Team Should Know',
      category: 'Azure',
      readTime: '10 min read'
    },
    {
      slug: 'power-bi-vs-tableau-2025',
      title: 'Power BI vs Tableau in 2025: Which BI Tool Should You Choose?',
      category: 'Business Intelligence',
      readTime: '11 min read'
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
                <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">Ripotek</div>
                <div className="text-xs text-gray-600 italic">Design. Engineer. Deliver.</div>
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
                    You don't need a computer science degree to break into data engineering or analytics. What you need is the right roadmap, skills, and mindset. Here's your blueprint for making the transition—based on real success stories from our training community.
                  </p>

                  <h2 id="myth-busting" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Myth-Busting: Do You Actually Need a CS Degree?
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Let's address the elephant in the room. When you look at data job postings, many list "Computer Science degree or equivalent experience" as a requirement. Here's what that really means:
                  </p>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Reality Check:</p>
                    <p className="text-gray-700">
                      "Equivalent experience" is the key phrase. I've placed petroleum engineers, business analysts, teachers, and accountants into data roles. What matters is demonstrable skills, not your degree.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <GraduationCap className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">35%</div>
                      <p className="text-sm text-gray-700">Of data professionals don't have CS degrees (Stack Overflow 2024)</p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">65%</div>
                      <p className="text-sm text-gray-700">Of hiring managers value skills over degrees (LinkedIn, 2024)</p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <Target className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                      <p className="text-sm text-gray-700">Of Ripotek grads without CS degrees land roles within 90 days</p>
                    </div>
                  </div>

                  <h2 id="skills-you-need" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Skills That Actually Matter
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Forget abstract computer science theory. Here's what employers actually test for in interviews:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. SQL Mastery (Non-Negotiable)</h3>
                      <p className="text-gray-700 mb-3">
                        You'll be tested on joins, aggregations, window functions, and CTEs in 90% of data interviews.
                      </p>
                      <div className="bg-gray-900 text-white rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`-- Example: Revenue by Customer Segment
SELECT
  segment,
  COUNT(DISTINCT customer_id) as customers,
  SUM(revenue) as total_revenue,
  AVG(revenue) as avg_revenue
FROM sales
WHERE date >= '2024-01-01'
GROUP BY segment
HAVING total_revenue > 100000;`}</code>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Python for Data (Focus on Pandas)</h3>
                      <p className="text-gray-700 mb-3">
                        You don't need to be a software engineer. Focus on data manipulation, not web frameworks.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Key libraries:</span> pandas, numpy, matplotlib, scikit-learn basics
                      </p>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cloud Platform Fundamentals</h3>
                      <p className="text-gray-700 mb-3">
                        Pick one cloud (Azure, AWS, or GCP) and get certified. Azure is easiest for beginners.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Azure Data Factory</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Azure Storage</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Databricks</span>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">4. BI Tool Proficiency</h3>
                      <p className="text-gray-700 mb-3">
                        Power BI or Tableau. Power BI has more demand in Canada and is easier to learn.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Master these:</span> Data modeling, DAX/calculated fields, dashboard design, row-level security
                      </p>
                    </div>
                  </div>

                  <h2 id="learning-roadmap" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Your 6-Month Learning Roadmap
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    This is the exact path I recommend to career changers:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Months 1-2: SQL & Data Fundamentals</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Complete SQL course (Mode Analytics, DataCamp, or Khan Academy)</li>
                        <li>• Learn data modeling concepts (star schema, normalization)</li>
                        <li>• Practice on real datasets (Kaggle, SQL Murder Mystery)</li>
                        <li>• Build 3 portfolio projects showcasing SQL skills</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Months 3-4: Power BI or Python</h4>
                      <p className="text-gray-700 mb-2"><span className="font-semibold">Choose your path:</span></p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Path A (Analyst):</span> Master Power BI. Build 5 dashboards. Get certified (PL-300).
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Path B (Engineer):</span> Learn Python for data engineering (pandas, APIs, automation).
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Months 5-6: Cloud & Real-World Projects</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Get Azure Data Fundamentals certified (DP-900)</li>
                        <li>• Build an end-to-end data pipeline project</li>
                        <li>• Contribute to open-source data projects on GitHub</li>
                        <li>• Start applying to jobs (yes, before you feel "ready")</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Pro Tip:</p>
                    <p className="text-gray-700">
                      Don't wait until you've "learned everything" to start applying. You need 60-70% of the skills listed in job postings—not 100%.
                    </p>
                  </div>

                  <h2 id="building-portfolio" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Building a Portfolio That Gets Noticed
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your portfolio is your proof. Here's what hiring managers want to see:
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Portfolio Must-Haves:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">End-to-End Data Pipeline:</span>
                          <p className="text-gray-700">Ingest data from an API, transform it, load to database, visualize in Power BI</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">SQL Challenge Solutions:</span>
                          <p className="text-gray-700">Document your approach to complex SQL problems on GitHub</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Business-Focused Dashboard:</span>
                          <p className="text-gray-700">Build a dashboard solving a real business problem (sales analysis, customer churn, etc.)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Cloud Project:</span>
                          <p className="text-gray-700">Deploy something to Azure or AWS. Show you understand cloud services.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h2 id="networking" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Networking for Career Changers
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Here's the truth: 60% of jobs are filled through referrals. Networking is non-negotiable.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">1. LinkedIn Strategy</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Post weekly about your learning journey (projects, insights, challenges)</li>
                        <li>• Comment on posts from data professionals in your target companies</li>
                        <li>• Connect with 3-5 people per day (personalize messages)</li>
                        <li>• Share your portfolio projects</li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">2. Informational Interviews</h4>
                      <p className="text-gray-700 mb-2">
                        Reach out to data professionals for 15-minute coffee chats. Ask about their career path, tools they use, and advice for newcomers.
                      </p>
                      <p className="text-gray-700 text-sm italic">
                        "Hi [Name], I'm transitioning into data analytics from [your field]. I'd love to learn about your journey into data. Would you have 15 minutes for a quick call?"
                      </p>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">3. Community Engagement</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Join local data meetups (Calgary Data Science, Azure user groups)</li>
                        <li>• Participate in online communities (r/dataengineering, Power BI forums)</li>
                        <li>• Attend virtual conferences (Microsoft Ignite, Databricks Summit)</li>
                      </ul>
                    </div>
                  </div>

                  <h2 id="landing-first-role" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Landing Your First Data Role
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    You've built skills and a portfolio. Now let's get you hired.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Resume Tips for Career Changers:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Lead with projects:</span> Create a "Projects" section before "Experience"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Quantify everything:</span> "Analyzed 50K+ customer records" sounds better than "Analyzed customer data"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Highlight transferable skills:</span> Problem-solving, communication, domain expertise</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Include certifications prominently:</span> Azure, Power BI, Databricks certs matter</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Where to Apply:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Startups and scale-ups (more open to non-traditional backgrounds)</li>
                      <li>• Companies in your previous industry (leverage domain knowledge)</li>
                      <li>• Consulting firms (Ripotek, Deloitte, Accenture—they train you)</li>
                      <li>• Contract-to-hire roles (easier to break into)</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Success Stories: Proof It Works
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-3">
                        "I was a high school math teacher earning $68K. After 6 months of training, I landed a Power BI analyst role at $95K. My teaching background helped me communicate insights to non-technical stakeholders."
                      </p>
                      <p className="text-gray-900 font-semibold">— Jennifer, BI Analyst</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-3">
                        "Petroleum engineering degree, zero coding experience. Ripotek's program gave me the skills to pivot. I'm now a data engineer at a Calgary fintech earning $120K."
                      </p>
                      <p className="text-gray-900 font-semibold">— Raj, Data Engineer</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Bottom Line
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    You don't need a CS degree. You need:
                  </p>

                  <ul className="space-y-2 mb-8 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Demonstrable skills (SQL, Python/Power BI, cloud basics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>A portfolio proving you can solve real problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Strategic networking and persistence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>The confidence to apply before you feel "ready"</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    The data career you want is within reach. You just need the right roadmap—and the willingness to start walking.
                  </p>

                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make the Leap?</h3>
                    <p className="text-gray-700 mb-6">
                      Our training programs are designed specifically for career changers. 85% of graduates land roles within 90 days. No CS degree required.
                    </p>
                    <a href="/training" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">
                      Explore Training Programs <ChevronRight className="w-5 h-5" />
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
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">MJ</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{postMeta.author}</h4>
                    <p className="text-sm text-gray-600">{postMeta.authorTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{postMeta.authorBio}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-teal-900 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Career Change Support</h3>
                <p className="text-gray-200 mb-4 text-sm">Join 1,500+ successful career changers. No CS degree needed.</p>
                <a href="/training" className="block w-full text-center bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                  View Programs
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
                <span className="font-bold text-xl">Ripotek</span>
              </div>
              <p className="text-gray-400 text-sm">Design. Engineer. Deliver.</p>
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
