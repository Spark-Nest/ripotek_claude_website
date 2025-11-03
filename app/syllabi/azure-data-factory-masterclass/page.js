'use client';

import React from 'react';
import { Printer, ArrowLeft, Database, Clock, DollarSign, Calendar, Award, CheckCircle, BookOpen, Briefcase, Mail, Phone, Globe, Target } from 'lucide-react';

export default function AzureDataFactoryMasterclassSyllabus() {
  const handlePrint = () => { window.print(); };

  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <a href="/training" className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition">
          <ArrowLeft className="w-4 h-4" />Back to Training</a>
        <button onClick={handlePrint} className="bg-teal-600 text-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-teal-700 transition">
          <Printer className="w-4 h-4" />Print to PDF</button>
      </div>

      <div className="max-w-5xl mx-auto p-8 print:p-12">
        <header className="mb-12 border-b-4 border-indigo-600 pb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center shadow-lg print:shadow-none">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Ripotek Technologies Inc.</h1>
                  <p className="text-gray-600 italic">Design. Engineer. Deliver.</p>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>Calgary, Alberta</p>
              <p>www.ripotek.com</p>
              <p>training@ripotek.com</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Azure Data Factory Masterclass</h2>
            </div>
            <p className="text-xl text-indigo-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />Program Overview</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-indigo-600" /><span className="font-semibold text-gray-900">Duration</span></div>
              <p className="text-gray-700">12 Weeks (2 sessions per week)</p>
              <p className="text-sm text-gray-600">24 total sessions, 72 instructional hours</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><DollarSign className="w-5 h-5 text-indigo-600" /><span className="font-semibold text-gray-900">Investment</span></div>
              <p className="text-gray-700">CAD $1,799</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Calendar className="w-5 h-5 text-indigo-600" /><span className="font-semibold text-gray-900">Schedule</span></div>
              <p className="text-gray-700">Tuesday/Thursday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-indigo-600" /><span className="font-semibold text-gray-900">Level</span></div>
              <p className="text-gray-700">Intermediate</p>
              <p className="text-sm text-gray-600">Azure and SQL knowledge required</p>
            </div>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">Deep dive into Azure Data Factory for building enterprise-grade data integration pipelines. This intensive masterclass covers advanced ADF patterns, complex orchestration, error handling, performance optimization, and DevOps practices.</p>
            <p className="text-gray-700">Master metadata-driven frameworks, incremental loading, monitoring, and production deployment strategies. Build real-world pipelines that handle millions of records efficiently and reliably.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />Prerequisites</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Required:</h4>
              <ul className="space-y-2">
                {["Azure fundamentals knowledge", "SQL proficiency", "Understanding of ETL/ELT concepts", "Basic ADF experience"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recommended:</h4>
              <ul className="space-y-2">
                {["Data warehouse experience", "JSON and ARM templates", "Git basics", "Azure DevOps familiarity"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-600" />Learning Outcomes</h3>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon completion, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {["Design complex multi-pipeline solutions", "Implement metadata-driven frameworks", "Handle errors and retries gracefully", "Optimize pipeline performance", "Implement incremental loading patterns", "Use parameters and variables effectively"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Deploy with Azure DevOps", "Monitor production pipelines", "Troubleshoot complex issues", "Implement data quality checks", "Manage dependencies and triggers", "Apply enterprise best practices"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="print:break-before-page"></div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-indigo-600" />12-Week Curriculum</h3>
          <div className="space-y-6">
            {[
              { week: 1, title: "ADF Architecture Deep Dive", topics: ["Components review", "Integration runtimes", "Linked services patterns", "Security best practices"] },
              { week: 2, title: "Advanced Copy Activities", topics: ["Complex mappings", "Data type conversions", "Performance tuning", "Parallel processing"] },
              { week: 3, title: "Orchestration Patterns", topics: ["Control flow mastery", "Dynamic pipelines", "Conditional logic", "Loop patterns"] },
              { week: 4, title: "Metadata-Driven Frameworks", topics: ["Configuration tables", "Dynamic source/sink", "Parameter injection", "Template pipelines"] },
              { week: 5, title: "Data Flows Advanced", topics: ["Complex transformations", "Performance optimization", "Debug strategies", "Data flow expressions"] },
              { week: 6, title: "Error Handling", topics: ["Try-catch patterns", "Retry logic", "Logging frameworks", "Alert configuration"] },
              { week: 7, title: "Incremental Loading", topics: ["Watermark patterns", "CDC implementation", "Delta loads", "Full vs incremental"] },
              { week: 8, title: "Integration Scenarios", topics: ["REST APIs", "SFTP and file systems", "SaaS connectors", "Custom activities"] },
              { week: 9, title: "Performance Optimization", topics: ["Pipeline tuning", "Partition strategies", "DIU optimization", "Cost management"] },
              { week: 10, title: "CI/CD and DevOps", topics: ["ARM templates", "Azure DevOps pipelines", "Environment promotion", "Release management"] },
              { week: 11, title: "Monitoring and Troubleshooting", topics: ["Azure Monitor integration", "Log Analytics", "Alerting strategies", "Debugging techniques"] },
              { week: 12, title: "Capstone Project", topics: ["Enterprise pipeline solution", "Documentation", "Best practices review", "Certification prep"] }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
                  <h4 className="text-xl font-bold">Week {item.week}: {item.title}</h4>
                </div>
                <div className="p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-600" />Career Services</h3>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Roles:</h4>
                <ul className="space-y-2">
                  {["Azure Data Engineer", "ETL Developer", "Data Integration Specialist", "Cloud Data Architect"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700">$80K+</div>
                <div className="text-sm text-gray-600 mb-4">Average Starting Salary</div>
                <p className="text-sm text-gray-600">Strong foundation for DP-203 certification</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t-4 border-indigo-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-indigo-600" />Contact</h4><p className="text-gray-700 text-sm">training@ripotek.com</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Phone className="w-5 h-5 text-indigo-600" />Phone</h4><p className="text-gray-700 text-sm">+1 306 999-3552</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-indigo-600" />Online</h4><p className="text-gray-700 text-sm">www.ripotek.com/training</p></div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Ripotek Technologies Inc. | Calgary, Alberta, Canada</p>
            <p className="text-gray-500 text-xs">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </div>
  );
}
