'use client';

import React from 'react';
import { Printer, ArrowLeft, Zap, Clock, DollarSign, Calendar, Users, Award, CheckCircle, BookOpen, Target, Briefcase, Mail, Phone, Globe } from 'lucide-react';

export default function DatabricksEngineerSyllabus() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print-hidden navigation buttons */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <a
          href="/training"
          className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Training
        </a>
        <button
          onClick={handlePrint}
          className="bg-teal-600 text-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-teal-700 transition"
        >
          <Printer className="w-4 h-4" />
          Print to PDF
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-8 print:p-12">
        {/* Header */}
        <header className="mb-12 border-b-4 border-orange-600 pb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-900 rounded-lg flex items-center justify-center print:shadow-none shadow-lg">
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

          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Databricks Engineer</h2>
            </div>
            <p className="text-xl text-orange-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        {/* Program Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            Program Overview
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">24 Weeks (3 sessions per week)</p>
              <p className="text-sm text-gray-600">72 total sessions, 216 instructional hours</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">Investment</span>
              </div>
              <p className="text-gray-700">CAD $3,999</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">Schedule</span>
              </div>
              <p className="text-gray-700">Monday/Wednesday/Saturday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">Certification Prep</span>
              </div>
              <p className="text-gray-700">Databricks Certified</p>
              <p className="text-sm text-gray-600">Data Engineer Associate & Professional</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">
              The Databricks Engineer program is a comprehensive 24-week training designed to master Apache Spark, Delta Lake, and the Databricks Unified Analytics Platform. This intensive program covers distributed computing fundamentals, advanced PySpark programming, Delta Lake architecture, medallion design patterns, and production-grade orchestration.
            </p>
            <p className="text-gray-700">
              You'll build real-world data pipelines, implement data quality frameworks, optimize Spark jobs, and prepare for Databricks certification exams. By completion, you'll have a portfolio demonstrating expertise in building scalable, enterprise-grade data lakehouse solutions.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Prerequisites
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Required</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Strong Python programming skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SQL proficiency (queries, joins, window functions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Understanding of data engineering concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Familiarity with cloud platforms (Azure/AWS/GCP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic understanding of distributed systems</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recommended</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Experience with ETL/ELT processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Data warehouse or data lake experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Git and version control knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Apache Spark awareness (helpful but not required)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-orange-600" />
            Learning Outcomes
          </h3>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon successful completion of this program, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Write advanced PySpark code for data processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build Delta Lake pipelines with medallion architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimize Spark jobs for performance and cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement CDC and streaming workloads</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Design data quality and testing frameworks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Orchestrate workflows with Databricks Jobs</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Manage Unity Catalog for data governance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement CI/CD for Databricks projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Work with Delta Live Tables</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monitor and troubleshoot production pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integrate machine learning workflows</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pass Databricks certification exams</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Break for Print */}
        <div className="print:break-before-page"></div>

        {/* Curriculum Highlights */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-orange-600" />
            Curriculum Highlights
          </h3>

          <div className="space-y-6">
            {/* Foundation */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                <h4 className="text-xl font-bold">Phase 1: Spark Fundamentals (Weeks 1-6)</h4>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Spark architecture and execution model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">RDDs, DataFrames, and Datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transformations and actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">PySpark DataFrame API mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reading/writing multiple formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SQL on Spark and catalog integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Delta Lake */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                <h4 className="text-xl font-bold">Phase 2: Delta Lake Architecture (Weeks 7-12)</h4>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Delta Lake transaction log</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ACID transactions and time travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Medallion architecture (Bronze/Silver/Gold)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">MERGE, UPDATE, DELETE operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Schema evolution and enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optimization techniques (OPTIMIZE, Z-ORDER)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Performance */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                <h4 className="text-xl font-bold">Phase 3: Performance and Optimization (Weeks 13-16)</h4>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Partitioning strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Broadcast joins and shuffle optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Caching and persistence strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Spark UI and query plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Adaptive Query Execution (AQE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cluster sizing and autoscaling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Streaming */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                <h4 className="text-xl font-bold">Phase 4: Streaming and Advanced Patterns (Weeks 17-20)</h4>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Structured Streaming fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Windowing and watermarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Change Data Capture (CDC) patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Delta Live Tables (DLT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data quality expectations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Event-driven architectures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Production */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                <h4 className="text-xl font-bold">Phase 5: Production Engineering (Weeks 21-24)</h4>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unity Catalog and data governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Workflow orchestration and jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">CI/CD with Databricks Asset Bundles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monitoring and alerting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Security best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Capstone project and certification prep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment and Grading */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Assessment and Grading
          </h3>

          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <th className="p-4 text-left font-semibold">Assessment Component</th>
                  <th className="p-4 text-left font-semibold">Weight</th>
                  <th className="p-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Phase Projects (5)</td>
                  <td className="p-4 text-gray-700">40%</td>
                  <td className="p-4 text-gray-700">One project per phase</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Weekly Labs</td>
                  <td className="p-4 text-gray-700">20%</td>
                  <td className="p-4 text-gray-700">Hands-on coding exercises</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Participation</td>
                  <td className="p-4 text-gray-700">10%</td>
                  <td className="p-4 text-gray-700">Class engagement and peer reviews</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Capstone Project</td>
                  <td className="p-4 text-gray-700">30%</td>
                  <td className="p-4 text-gray-700">End-to-end lakehouse solution</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Grading Scale</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-orange-700 text-xl">A</div>
                <div className="text-gray-600 text-sm">90-100%</div>
              </div>
              <div>
                <div className="font-bold text-orange-700 text-xl">B</div>
                <div className="text-gray-600 text-sm">80-89%</div>
              </div>
              <div>
                <div className="font-bold text-orange-700 text-xl">C</div>
                <div className="text-gray-600 text-sm">70-79%</div>
              </div>
              <div>
                <div className="font-bold text-orange-700 text-xl">F</div>
                <div className="text-gray-600 text-sm">Below 70%</div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              A minimum grade of 70% is required to receive a certificate of completion
            </p>
          </div>
        </section>

        {/* Materials and Resources */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            Materials and Resources
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Required Tools</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Databricks Workspace</div>
                    <div className="text-sm text-gray-600">Community or trial edition</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Python 3.8+</div>
                    <div className="text-sm text-gray-600">Local development environment</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Visual Studio Code</div>
                    <div className="text-sm text-gray-600">With Python and Databricks extensions</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Git</div>
                    <div className="text-sm text-gray-600">Version control</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Provided Resources</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Course Materials</div>
                    <div className="text-sm text-gray-600">Notebooks, code samples, datasets</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Cloud Credits</div>
                    <div className="text-sm text-gray-600">For lab exercises</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Certification Voucher</div>
                    <div className="text-sm text-gray-600">Databricks certification exam</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Practice Exams</div>
                    <div className="text-sm text-gray-600">Certification preparation</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Services */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-orange-600" />
            Career Services and Job Placement
          </h3>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-6">
            <p className="text-gray-700 mb-6">
              Databricks engineers are highly sought after in enterprise organizations undergoing cloud and data modernization initiatives. Our graduates secure senior-level positions with competitive compensation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Career Support Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced career coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GitHub portfolio development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">System design interview prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Direct introductions to hiring companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Salary negotiation coaching</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Job Titles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Databricks Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Spark Data Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lakehouse Architect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Big Data Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Senior Data Platform Engineer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-orange-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-700">85%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-700">90 days</div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-700">$95K+</div>
                  <div className="text-sm text-gray-600">Avg Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-orange-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-600" />
                Contact Us
              </h4>
              <p className="text-gray-700 text-sm mb-2">training@ripotek.com</p>
              <p className="text-gray-700 text-sm mb-2">enroll@ripotek.com</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-600" />
                Phone
              </h4>
              <p className="text-gray-700 text-sm mb-2">+1 (403) 999-RIPO</p>
              <p className="text-gray-700 text-sm">Mon-Fri: 9am-5pm MT</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-600" />
                Online
              </h4>
              <p className="text-gray-700 text-sm mb-2">www.ripotek.com/training</p>
              <p className="text-gray-700 text-sm">LinkedIn: /company/ripotek</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">
              Ripotek Technologies Inc. | Calgary, Alberta, Canada
            </p>
            <p className="text-gray-500 text-xs">
              © 2023-2025 Ripotek Technologies Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

    </div>
  );
}
