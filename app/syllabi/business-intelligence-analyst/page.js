'use client';

import React from 'react';
import { Printer, ArrowLeft, TrendingUp, Clock, DollarSign, Calendar, Award, CheckCircle, BookOpen, Target, Briefcase, Mail, Phone, Globe } from 'lucide-react';

export default function BusinessIntelligenceAnalystSyllabus() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="print:hidden fixed top-4 left-4 right-4 md:left-auto md:right-4 z-50 flex flex-col md:flex-row gap-3">
        <a href="/training" className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Training
        </a>
        <button onClick={handlePrint} className="bg-teal-600 text-white shadow-lg rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-teal-700 transition">
          <Printer className="w-4 h-4" />
          Print to PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto pt-32 md:pt-8 px-4 md:px-8 pb-8 print:p-12">
        <header className="mb-12 border-b-4 border-green-600 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center print:shadow-none shadow-lg">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight break-words">Ripotek Technologies Inc.</h1>
  <p className="text-gray-700 text-base md:text-lg font-semibold italic">Design. Engineer. Deliver.</p>
                </div>
              </div>
            </div>
            <div className="text-left md:text-right text-sm text-gray-600 break-words max-w-full">
              <p>Calgary, Alberta</p>
              <p>www.ripotek.com</p>
              <p>training@ripotek.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Business Intelligence Analyst</h2>
            </div>
            <p className="text-xl text-green-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Program Overview
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">12 Weeks (2 sessions per week)</p>
              <p className="text-sm text-gray-600">24 total sessions, 72 instructional hours</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Investment</span>
              </div>
              <p className="text-gray-700">CAD $1,799</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Schedule</span>
              </div>
              <p className="text-gray-700">Tuesday/Thursday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Certification</span>
              </div>
              <p className="text-gray-700">Ripotek BI Analyst Certificate</p>
              <p className="text-sm text-gray-600">Industry-recognized credential</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">
              The Business Intelligence Analyst program provides end-to-end training in the complete BI lifecycle, from requirements gathering to dashboard delivery. This practical program combines business analysis fundamentals, data modeling, visualization best practices, and stakeholder communication skills.
            </p>
            <p className="text-gray-700">
              You'll learn to translate business questions into data requirements, design dimensional models, create compelling visualizations, and present insights effectively. The program uses Power BI, Excel, and SQL to prepare you for real-world BI analyst roles across industries.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-green-600" />
            Learning Outcomes
          </h3>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon completion, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gather and document business requirements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Design dimensional data models</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Write SQL queries for analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Create KPI frameworks and metrics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build interactive dashboards</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Perform ad-hoc analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Apply data storytelling techniques</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Present insights to stakeholders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Document BI solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Support data-driven decision making</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="print:break-before-page"></div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-600" />
            12-Week Curriculum
          </h3>

          <div className="space-y-6">
            {[
              { week: 1, title: "Business Intelligence Fundamentals", topics: ["BI concepts and lifecycle", "Role of a BI analyst", "Data warehouse vs data lake", "BI tools landscape"] },
              { week: 2, title: "Requirements Gathering", topics: ["Stakeholder interviews", "Documenting requirements", "Defining success metrics", "Project scoping"] },
              { week: 3, title: "SQL for Analysis", topics: ["Advanced queries and joins", "Window functions", "CTEs and subqueries", "Performance optimization"] },
              { week: 4, title: "Dimensional Modeling", topics: ["Star schema design", "Fact and dimension tables", "SCD types", "Data modeling best practices"] },
              { week: 5, title: "Excel for Analysis", topics: ["Power Query in Excel", "Pivot tables mastery", "Advanced formulas", "Excel dashboards"] },
              { week: 6, title: "KPIs and Metrics", topics: ["Defining KPIs", "Metric frameworks", "Leading vs lagging indicators", "Balanced scorecards"] },
              { week: 7, title: "Data Visualization Principles", topics: ["Chart selection", "Color theory", "Dashboard design", "Avoiding common mistakes"] },
              { week: 8, title: "Power BI Essentials", topics: ["Building reports", "DAX basics", "Interactive features", "Publishing and sharing"] },
              { week: 9, title: "Ad-Hoc Analysis", topics: ["Exploratory data analysis", "Statistical analysis basics", "Trend analysis", "Root cause analysis"] },
              { week: 10, title: "Data Storytelling", topics: ["Narrative structures", "Communicating insights", "Executive presentations", "Influence through data"] },
              { week: 11, title: "BI Best Practices", topics: ["Documentation standards", "Version control", "Testing and validation", "Maintenance strategies"] },
              { week: 12, title: "Capstone Project", topics: ["End-to-end BI solution", "Stakeholder presentation", "Portfolio development", "Career planning"] }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4">
                  <h4 className="text-xl font-bold">Week {item.week}: {item.title}</h4>
                </div>
                <div className="p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
            <Briefcase className="w-6 h-6 text-green-600" />
            Career Services
          </h3>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Support Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Resume optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Portfolio development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Employer connections</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Roles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Business Intelligence Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reporting Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Business Analyst</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-green-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-700">85%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700">90 days</div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700">$60K+</div>
                  <div className="text-sm text-gray-600">Avg Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t-4 border-green-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" />
                Contact Us
              </h4>
              <p className="text-gray-700 text-sm mb-2">training@ripotek.com</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                Phone
              </h4>
              <p className="text-gray-700 text-sm mb-2">+1 306 999-3552</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                Online
              </h4>
              <p className="text-gray-700 text-sm mb-2">www.ripotek.com/training</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2 break-words">Ripotek Technologies Inc. | Calgary, Alberta, Canada</p>
            <p className="text-gray-500 text-xs">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </div>
  );
}
