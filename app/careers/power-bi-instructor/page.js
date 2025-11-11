'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Briefcase, MapPin, DollarSign, Clock, Users, CheckCircle, Target, Award, Heart, TrendingUp, Mail, Calendar, BookOpen } from 'lucide-react';

export default function PowerBIInstructorPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const jobHighlights = [
    { icon: MapPin, label: 'Location', value: 'Remote (Calgary-based preferred)' },
    { icon: Briefcase, label: 'Employment Type', value: 'Contract (Renewable)' },
    { icon: DollarSign, label: 'Compensation', value: '$80-$120/hour CAD' },
    { icon: Clock, label: 'Commitment', value: '12-24 weeks per cohort, 2-3 cohorts/year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <Image src="/favicon.svg" alt="Ripotek logo" width={48} height={48} className="w-12 h-12 rounded-lg shadow-lg" />
              <div>
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center leading-none">Ripotek</div>
                <div className="text-gray-600 text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 text-center">Design. Engineer. Deliver.</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg">Let&apos;s Talk</button>
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

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-5xl mx-auto">
          <a href="/careers" className="inline-flex items-center text-teal-300 hover:text-teal-200 mb-6 transition">
            ← Back to Careers
          </a>
          <h1 className="text-5xl font-bold text-white mb-4">Power BI Instructor</h1>
          <p className="text-xl text-gray-300 mb-8">Training & Development Department</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobHighlights.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 text-teal-300 mb-2">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Button - Sticky */}
      <div className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <a
            href="mailto:careers@ripotek.com?subject=Application: Power BI Instructor"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Role Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Role Overview</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deliver live, instructor-led Power BI Analyst training programs to aspiring data professionals. You&apos;ll teach 15-25 students per cohort through a 12-week intensive program covering Power BI Desktop, DAX, data modeling, and enterprise BI best practices. This role combines teaching, mentorship, and career coaching to help students secure BI analyst positions within 90 days of graduation.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instruction & Curriculum Delivery (50%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Deliver 3-hour live sessions 3x per week (Mon/Wed/Sat 6-9pm MT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Teach foundational to advanced Power BI topics following Ripotek curriculum</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Demonstrate concepts through live coding and real-world examples</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Facilitate hands-on labs and troubleshoot student issues in real-time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Adapt teaching style to accommodate diverse learning paces and backgrounds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Create engaging, interactive sessions (polls, breakout rooms, Q&A)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Record sessions for students who miss class or need to review</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Student Support & Mentorship (25%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Hold weekly office hours (2-3 hours) for 1-on-1 help</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Review and grade weekly lab assignments (15-25 per week)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Provide detailed feedback on student projects and dashboards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Conduct 1-on-1 check-ins with struggling students</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentor students on career development and job search strategies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Write LinkedIn recommendations for top-performing students</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Serve as technical reference for students applying to roles</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment & Feedback (15%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Create and grade quizzes, exams, and practical assessments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Evaluate capstone projects using rubric</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Provide constructive feedback on DAX formulas, data models, and dashboard design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Track student progress and identify at-risk students early</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Prepare students for Microsoft PL-300 certification exam</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Conduct mock technical interviews</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Curriculum Development & Improvement (10%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Update course materials based on student feedback and industry changes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Develop new lab exercises and capstone project scenarios</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Stay current with Power BI monthly updates and new features</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Suggest curriculum improvements based on teaching experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Contribute to Ripotek&apos;s Power BI knowledge base</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Qualifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Required Qualifications</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>5+ years as a BI developer, analyst, or consultant with Power BI as primary tool</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Built 20+ production Power BI dashboards for enterprise clients</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Deep expertise in DAX (advanced calculated columns, measures, time intelligence)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Strong data modeling skills (star schema, snowflake, dimensional modeling)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Experience with Power Query M for data transformation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Knowledge of Power BI Service, workspaces, deployment pipelines, RLS</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Understanding of BI best practices and data visualization principles</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Teaching Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>2+ years teaching, training, or mentoring (formal or informal)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Experience explaining complex technical concepts to beginners</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Comfortable with live, virtual instruction (Zoom, Teams, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Proven ability to adapt teaching style to student needs</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Patient, encouraging, and supportive teaching approach</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Power BI:</p>
                    <p className="text-gray-700">Desktop, Service, Report Builder, Paginated Reports</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">DAX:</p>
                    <p className="text-gray-700">Advanced functions, variables, context transition, time intelligence</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Power Query:</p>
                    <p className="text-gray-700">M language, data transformations, custom functions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Modeling:</p>
                    <p className="text-gray-700">Star schema, slowly changing dimensions, fact tables</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">SQL:</p>
                    <p className="text-gray-700">T-SQL for querying databases (intermediate level)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Excel:</p>
                    <p className="text-gray-700">Advanced formulas, pivot tables, Power Pivot</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Azure:</p>
                    <p className="text-gray-700">Basic understanding of Azure SQL, Data Lake, Synapse (nice to have)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Excellent verbal and written communication</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>High energy and enthusiasm for teaching</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Empathy for students from non-technical backgrounds</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Strong time management and organizational skills</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Ability to give constructive, actionable feedback</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span>Comfortable with public speaking and live presentations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preferred Qualifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Preferred Qualifications</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Microsoft Certified: Power BI Data Analyst Associate (PL-300)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Prior teaching experience in a bootcamp, college, or corporate training setting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Experience with Thinkific, Canvas, or similar LMS platforms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Background in adult education or instructional design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Active presence in Power BI community (blogs, YouTube, forums)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Consulting or freelance BI experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Knowledge of other BI tools (Tableau, Looker, Qlik)</span>
              </li>
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compensation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>$80-$120/hour based on experience and credentials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Guaranteed minimum hours per cohort (150 hours)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Paid prep time for curriculum review and session planning</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Bonuses based on student satisfaction scores and placement rates</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexibility</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Remote instruction from anywhere in Canada</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Evening classes (6-9pm MT) - keep your day job or work freelance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>12-week commitment per cohort (predictable schedule)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>2-4 week breaks between cohorts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact & Growth</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Direct impact on students&apos; career transformations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Watch students go from zero to employed BI analysts in 3-6 months</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Build your personal brand as an instructor</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Opportunity to contribute to curriculum design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Potential to teach additional programs (Azure DE, AI, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Join a community of expert instructors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Comprehensive curriculum and teaching materials provided</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Teaching assistant (TA) support for large cohorts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Regular instructor training and peer learning sessions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Access to Ripotek&apos;s Azure/Power BI environments for demos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Admin support for grading and student management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teaching Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Teaching Schedule (12-Week Program)</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Live Sessions:</p>
                  <p className="text-gray-700">Mon/Wed/Sat 6-9pm MT (36 sessions total)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Office Hours:</p>
                  <p className="text-gray-700">2-3 hours/week (student-scheduled)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Grading:</p>
                  <p className="text-gray-700">~3-5 hours/week</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Total Time Commitment:</p>
                  <p className="text-gray-700">~15-18 hours/week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Interview Process</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Initial Screening (30 min)</h4>
                  <p className="text-gray-700">Teaching philosophy and experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Technical Assessment (60 min)</h4>
                  <p className="text-gray-700">Build a Power BI dashboard (take-home)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Teaching Demo (45 min)</h4>
                  <p className="text-gray-700">Teach a 15-minute lesson on a DAX concept</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Student Empathy Interview (30 min)</h4>
                  <p className="text-gray-700">Discuss approach to diverse learners</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold text-gray-900">Reference Checks</h4>
                  <p className="text-gray-700">2 professional references</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Help students transform their careers and become successful BI professionals.
            </p>
            <a
              href="mailto:careers@ripotek.com?subject=Application: Power BI Instructor"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold text-lg"
            >
              <Mail className="w-6 h-6" />
              Apply for This Position
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <span className="font-extrabold text-2xl md:text-3xl tracking-tight">Ripotek Technologies Inc.</span>
              </div>
              <p className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 text-center">Design. Engineer. Deliver.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services#strategy-&-governance" className="hover:text-teal-400 transition">Data Architecture</a></li>
                <li><a href="/services#analytics-&-bi" className="hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="hover:text-teal-400 transition">MLOps & AI</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/training#power-bi-analyst" className="hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training#azure-data-engineer" className="hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training#ai-engineer" className="hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="hover:text-teal-400 transition">Case Studies</a></li>
                <li><a href="/careers" className="hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-base">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}








