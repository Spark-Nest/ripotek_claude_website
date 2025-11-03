'use client';

import React from 'react';
import { Printer, ArrowLeft, Code, Clock, DollarSign, Calendar, Award, CheckCircle, BookOpen, Briefcase, Mail, Phone, Globe } from 'lucide-react';

export default function PythonForDataSyllabus() {
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
        <header className="mb-12 border-b-4 border-emerald-600 pb-8">
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
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Python for Data</h2>
            </div>
            <p className="text-xl text-emerald-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />Program Overview</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-emerald-600" /><span className="font-semibold text-gray-900">Duration</span></div>
              <p className="text-gray-700">12 Weeks (Weekend sessions)</p>
              <p className="text-sm text-gray-600">24 total sessions, 72 instructional hours</p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><DollarSign className="w-5 h-5 text-emerald-600" /><span className="font-semibold text-gray-900">Investment</span></div>
              <p className="text-gray-700">CAD $1,599</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Calendar className="w-5 h-5 text-emerald-600" /><span className="font-semibold text-gray-900">Schedule</span></div>
              <p className="text-gray-700">Saturday/Sunday</p>
              <p className="text-sm text-gray-600">10:00 AM - 1:00 PM Mountain Time</p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-emerald-600" /><span className="font-semibold text-gray-900">Level</span></div>
              <p className="text-gray-700">Beginner</p>
              <p className="text-sm text-gray-600">No prior coding required</p>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">Learn Python from scratch with a focus on data analytics. This beginner-friendly program covers Python fundamentals, pandas for data manipulation, visualization libraries, and automation techniques.</p>
            <p className="text-gray-700">Build practical skills for data analysis, report automation, and working with APIs. Perfect for aspiring data analysts, business analysts, and anyone looking to add Python to their skillset.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-600" />Learning Outcomes</h3>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon completion, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {["Write clean, readable Python code", "Manipulate data with pandas", "Create visualizations with matplotlib/seaborn", "Work with files (CSV, Excel, JSON)", "Connect to databases with SQL", "Automate repetitive tasks"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Use APIs for data collection", "Perform statistical analysis", "Debug and test code", "Use Jupyter notebooks", "Apply data cleaning techniques", "Build data pipelines"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            <Calendar className="w-6 h-6 text-emerald-600" />12-Week Curriculum</h3>
          <div className="space-y-6">
            {[
              { week: 1, title: "Python Basics", topics: ["Installation and setup", "Variables and data types", "Operators", "Input/output"] },
              { week: 2, title: "Control Flow", topics: ["If/else statements", "Loops (for, while)", "Break and continue", "List comprehensions"] },
              { week: 3, title: "Data Structures", topics: ["Lists and tuples", "Dictionaries and sets", "String manipulation", "Collections module"] },
              { week: 4, title: "Functions", topics: ["Defining functions", "Parameters and arguments", "Lambda functions", "Scope and closures"] },
              { week: 5, title: "File Operations", topics: ["Reading/writing files", "CSV handling", "JSON processing", "Excel with openpyxl"] },
              { week: 6, title: "Pandas Fundamentals", topics: ["Series and DataFrames", "Reading data sources", "Data inspection", "Basic operations"] },
              { week: 7, title: "Data Manipulation", topics: ["Filtering and sorting", "GroupBy operations", "Merging and joining", "Reshaping data"] },
              { week: 8, title: "Data Cleaning", topics: ["Handling missing values", "Data type conversion", "Duplicate removal", "String operations"] },
              { week: 9, title: "Visualization", topics: ["Matplotlib basics", "Seaborn for stats", "Plotly interactive", "Plot customization"] },
              { week: 10, title: "Working with APIs", topics: ["HTTP requests", "REST APIs", "JSON parsing", "Authentication"] },
              { week: 11, title: "Database Connectivity", topics: ["SQL basics review", "SQLite with Python", "Pandas and SQL", "Query execution"] },
              { week: 12, title: "Capstone Project", topics: ["End-to-end analysis", "Automation workflow", "Presentation", "Best practices"] }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4">
                  <h4 className="text-xl font-bold">Week {item.week}: {item.title}</h4>
                </div>
                <div className="p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            <Briefcase className="w-6 h-6 text-emerald-600" />Career Pathways</h3>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Roles:</h4>
                <ul className="space-y-2">
                  {["Data Analyst", "Business Analyst", "Junior Data Scientist", "Analytics Engineer", "Reporting Specialist"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">$55K+</div>
                <div className="text-sm text-gray-600 mb-4">Average Starting Salary</div>
                <p className="text-sm text-gray-600">Perfect foundation for advanced programs like Power BI or Azure Data Engineer</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t-4 border-emerald-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-emerald-600" />Contact</h4><p className="text-gray-700 text-sm">training@ripotek.com</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-600" />Phone</h4><p className="text-gray-700 text-sm">+1 306 999-3552</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-emerald-600" />Online</h4><p className="text-gray-700 text-sm">www.ripotek.com/training</p></div>
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
