'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Mail, ChevronRight, CheckCircle, TrendingUp, Target, Award, MapPin, Phone } from 'lucide-react';
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
    title: 'The Upskilling Imperative: Why Data Skills Are Non-Negotiable in 2025',
    author: 'Marcus Johnson',
    authorTitle: 'Power BI Instructor',
    authorBio: 'Marcus Johnson is Ripotek Academy\'s lead Power BI instructor with 12 years of analytics experience and 6 years teaching data visualization. He has trained over 1,500 students, maintaining a 95% satisfaction rate and helping hundreds transition into BI analyst roles. At Ripotek Academy, Marcus designed the comprehensive Power BI curriculum that covers everything from fundamentals to advanced topics.',
    date: 'October 22, 2024',
    readTime: '6 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop'
  };

  const tableOfContents = [
    { id: 'data-revolution', title: 'The Data Skills Revolution' },
    { id: 'skills-gap', title: 'The Growing Skills Gap' },
    { id: 'in-demand-skills', title: 'Most In-Demand Skills in 2025' },
    { id: 'business-case', title: 'The Business Case for Upskilling' },
    { id: 'getting-started', title: 'Getting Started with Upskilling' },
    { id: 'success-stories', title: 'Real Success Stories' }
  ];

  const relatedPosts = [
    {
      slug: 'transition-data-career-without-cs-degree',
      title: 'How to Transition Into a Data Career Without a CS Degree',
      category: 'Career',
      readTime: '9 min read'
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
            <button onClick={() => handleShare('twitter')} className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Share on X (Twitter)">
              <FaXTwitter className="w-5 h-5 text-gray-600" />
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
                <Image src={postMeta.image} alt={postMeta.title} width={1200} height={600} className="w-full h-64 lg:h-96 object-cover rounded-xl mb-12" />

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    The data revolution is creating unprecedented opportunities—and widening skill gaps. Organizations across every sector are racing to build data capabilities, but they're struggling to find qualified talent. For professionals, this represents a career-defining moment: upskill or risk obsolescence.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Whether you're a business analyst looking to level up, a software developer pivoting into data engineering, or a complete newcomer to tech, investing in data skills is no longer optional—it's imperative.
                  </p>

                  <h2 id="data-revolution" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Data Skills Revolution: By the Numbers
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Let's look at the compelling data driving this skills revolution:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">36%</div>
                      <p className="text-sm text-gray-700">Projected growth in data engineering jobs by 2028 (US Bureau of Labor)</p>
                    </div>
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <Target className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">$125K</div>
                      <p className="text-sm text-gray-700">Average salary for data engineers in Canada (2024)</p>
                    </div>
                    <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
                      <Award className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                      <p className="text-sm text-gray-700">Of companies report difficulty finding data talent (LinkedIn, 2024)</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These aren't just numbers—they represent a fundamental shift in the job market. Data skills have become the new digital literacy, essential across industries from healthcare to energy, finance to retail.
                  </p>

                  <h2 id="skills-gap" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Growing Skills Gap: Why Organizations Can't Find Talent
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The demand for data professionals far outpaces supply. Here's why:
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Factors Driving the Gap:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Cloud Migration Explosion:</span>
                          <p className="text-gray-700">Companies are moving to Azure, AWS, and GCP, requiring engineers skilled in cloud-native data platforms.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">AI/ML Democratization:</span>
                          <p className="text-gray-700">Generative AI and AutoML are bringing ML to the masses, but someone needs to build the data pipelines feeding these models.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Real-Time Analytics Demand:</span>
                          <p className="text-gray-700">Organizations want insights in seconds, not days. This requires modern streaming architectures and skilled engineers.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">Legacy System Complexity:</span>
                          <p className="text-gray-700">Bridging old and new systems requires both business domain knowledge and modern technical skills—a rare combination.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Industry Insight:</p>
                    <p className="text-gray-700">
                      "We're not just competing for talent with other tech companies. Every bank, energy firm, and retailer is now a data company. The talent war is fierce, and upskilling existing teams is often faster than recruiting." — CTO, Major Canadian Bank
                    </p>
                  </div>

                  <h2 id="in-demand-skills" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Most In-Demand Data Skills in 2025
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Based on our placement data and conversations with 50+ hiring managers, here are the skills commanding premium salaries:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Cloud Data Engineering</h3>
                      <p className="text-gray-700 mb-3">Building scalable data pipelines on Azure, AWS, or GCP.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Azure Data Factory</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Databricks</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Snowflake</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Apache Spark</span>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Business Intelligence & Analytics</h3>
                      <p className="text-gray-700 mb-3">Transforming data into actionable insights through visualization and semantic modeling.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Power BI</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Tableau</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">SQL</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">DAX</span>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Machine Learning Operations (MLOps)</h3>
                      <p className="text-gray-700 mb-3">Deploying, monitoring, and maintaining ML models in production.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Azure ML</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">MLflow</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Docker/Kubernetes</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Python</span>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">4. Data Governance & Quality</h3>
                      <p className="text-gray-700 mb-3">Ensuring data is trustworthy, compliant, and accessible.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Microsoft Purview</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Great Expectations</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">GDPR/Compliance</span>
                      </div>
                    </div>
                  </div>

                  <h2 id="business-case" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Business Case for Upskilling: ROI That Speaks Volumes
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    For individuals, upskilling is a career investment. For organizations, it's a strategic imperative. Here's why:
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    For Individuals:
                  </h3>

                  <div className="bg-linear-to-br from-blue-50 to-teal-50 rounded-xl p-6 mb-8">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Salary Increase:</span> Average 30-50% salary bump after transitioning into data roles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Job Security:</span> Data roles are consistently ranked among the most recession-proof careers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Flexibility:</span> Remote/hybrid work is the norm in data roles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Career Growth:</span> Clear pathways from analyst to architect to leadership</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    For Organizations:
                  </h3>

                  <div className="bg-linear-to-br from-blue-50 to-teal-50 rounded-xl p-6 mb-8">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Faster Hiring:</span> Training-to-hire programs reduce time-to-fill from 6+ months to 90 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Lower Costs:</span> Upskilling internal teams costs 50-70% less than external recruiting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Retention:</span> Employees offered training are 2.5x more likely to stay long-term</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                        <span className="text-gray-700"><span className="font-semibold">Competitive Edge:</span> Data-savvy teams drive better decision-making and innovation</span>
                      </li>
                    </ul>
                  </div>

                  <h2 id="getting-started" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Getting Started: Your Upskilling Roadmap
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ready to upskill? Here's a practical roadmap based on your starting point:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Path 1: Business Professional → Data Analyst</h4>
                      <p className="text-gray-700 mb-3">Timeline: 12-16 weeks</p>
                      <p className="text-gray-700">
                        Start with Power BI and SQL. Focus on data visualization, semantic modeling, and business storytelling. No coding required initially.
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Path 2: Analyst → Data Engineer</h4>
                      <p className="text-gray-700 mb-3">Timeline: 24 weeks</p>
                      <p className="text-gray-700">
                        Learn Python, Azure Data Factory, Databricks, and data pipeline design. Focus on ETL/ELT, data modeling, and cloud platforms.
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Path 3: Software Developer → ML Engineer</h4>
                      <p className="text-gray-700 mb-3">Timeline: 24 weeks</p>
                      <p className="text-gray-700">
                        Leverage your coding skills. Add ML fundamentals, MLOps practices, and production deployment experience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Pro Tip:</p>
                    <p className="text-gray-700">
                      Choose programs that emphasize real-world projects over theory. Employers value hands-on experience with tools and technologies you'll use on day one.
                    </p>
                  </div>

                  <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Real Success Stories from Our Community
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-3">
                        "I was a petroleum engineer struggling to find roles after the 2020 downturn. Ripotek's Azure Data Engineer program gave me the skills to pivot. Six months later, I'm earning $115K as a data engineer at a Calgary fintech."
                      </p>
                      <p className="text-gray-900 font-semibold">— James, Former Petroleum Engineer</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-3">
                        "As a business analyst, I'd hit a career ceiling. Learning Power BI and data modeling opened doors. I'm now leading BI strategy for a major retailer—and earning 40% more."
                      </p>
                      <p className="text-gray-900 font-semibold">— Priya, BI Lead</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-3">
                        "Our HR team trained 20 employees in data skills over 18 months. The impact? Faster reporting, better insights, and a culture shift toward data-driven decision-making."
                      </p>
                      <p className="text-gray-900 font-semibold">— Sarah, VP of HR, Energy Company</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    The Bottom Line: Act Now
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The data skills gap isn't closing anytime soon. For professionals, this is a golden window to future-proof your career. For organizations, investing in upskilling is the fastest path to building competitive data capabilities.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    The question isn't whether to upskill—it's how fast you can move.
                  </p>

                  <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
                    <p className="text-gray-700 mb-6">
                      Explore Ripotek's training programs designed for busy professionals. Live instructor-led, hands-on projects, and 85% job placement rate.
                    </p>
                    <a href="/training" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold">
                      View Training Programs <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-36 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
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
                    <div className="w-16 h-16 bg-linear-to-br from-teal-600 to-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      MJ
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
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Services</a></li>
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
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Case Studies</a></li>
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








