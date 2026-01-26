'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Printer, ArrowLeft, Database, Clock, DollarSign, Calendar, Users, Award, CheckCircle, BookOpen, Target, Briefcase, Mail, Phone, Globe, Cloud } from 'lucide-react';
import EnrollmentModal from '../../../components/EnrollmentModal';
import StripeCheckoutButton from '../../../components/StripeCheckoutButton';

export default function AzureDataEngineerSyllabus() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/training#our-programs"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Programs
          </a>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition shadow"
            >
              <Printer className="w-4 h-4" />
              Print to PDF
            </button>
            <StripeCheckoutButton
              programName="Azure Data Engineer"
              price="$1,500"
              duration="24 Weeks"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition shadow-lg font-semibold"
            >
              Pay $1,500 CAD
            </StripeCheckoutButton>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto pt-24 px-4 md:px-8 pb-8 print:p-12">
        {/* Header */}
        <header className="mb-12 border-b-4 border-purple-600 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={64} height={64} className="w-16 h-16 rounded-lg print:shadow-none shadow-lg" />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight break-words">Ripotek Technologies Inc.</h1>
  <p className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 text-center">Design. Engineer. Deliver.</p>
                </div>
              </div>
            </div>
            <div className="text-left md:text-right text-sm text-gray-600 break-words max-w-full">
              <p>Calgary, Alberta</p>
              <p>www.ripotek.com</p>
              <p>training@ripotek.com</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Cloud className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Azure Data Engineer</h2>
            </div>
            <p className="text-xl text-purple-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        {/* Program Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            Program Overview
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">24 Weeks (3 sessions per week)</p>
              <p className="text-sm text-gray-600">72 total sessions, 216 instructional hours</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Investment</span>
              </div>
              <p className="text-gray-700">CAD $1,500</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Schedule</span>
              </div>
              <p className="text-gray-700">Tuesday/Thursday/Sunday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Certification Prep</span>
              </div>
              <p className="text-gray-700">Microsoft DP-203</p>
              <p className="text-sm text-gray-600">Azure Data Engineer Associate</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">
              The Azure Data Engineer program is an intensive 24-week training designed to transform you into a cloud data engineering professional. This comprehensive program covers the full spectrum of Azure data services including Azure Data Factory, Synapse Analytics, Databricks, Data Lake Storage, and modern data lakehouse architectures.
            </p>
            <p className="text-gray-700">
              Through hands-on projects and real-world scenarios, you'll master ELT pipeline design, data modeling, performance optimization, DevOps practices, and security implementation. By completion, you'll have built a portfolio of enterprise-grade solutions and be fully prepared for the Microsoft DP-203 certification exam.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Prerequisites
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Required</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SQL proficiency (queries, joins, aggregations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic Python or another programming language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Understanding of data concepts (databases, ETL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Familiarity with cloud computing concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Azure subscription (provided for labs)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recommended</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Experience with data warehousing or BI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Azure Fundamentals (AZ-900) knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Git and version control familiarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">JSON and data formats knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-600" />
            Learning Outcomes
          </h3>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon successful completion of this program, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Design and implement ELT pipelines in Azure Data Factory</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Build data lakehouse architectures on Azure</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimize queries in Azure Synapse Analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement CI/CD for data pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Work with Delta Lake and medallion architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement data security and compliance</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monitor and troubleshoot data pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Design star and snowflake schemas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Process streaming data with Event Hubs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automate deployments with Azure DevOps</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimize cost and performance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pass the Microsoft DP-203 certification exam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Break for Print */}
        <div className="print:break-before-page"></div>

        {/* Phase-by-Phase Curriculum */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-purple-600" />
            Curriculum Overview: 5 Phases, 24 Weeks
          </h3>

          {/* Phase 1 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Phase 1: Foundations (Weeks 1-5)</h4>
              <p className="text-purple-100 text-sm">Azure fundamentals, SQL, and data storage</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 1: Azure Data Platform Overview</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Azure data services ecosystem</li>
                  <li>Resource groups, subscriptions, and management</li>
                  <li>Storage accounts and data lake fundamentals</li>
                  <li>Security and access control basics</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 2: Advanced SQL for Data Engineering</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Complex joins and subqueries</li>
                  <li>Window functions and CTEs</li>
                  <li>Performance tuning and indexing</li>
                  <li>Stored procedures and functions</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 3: Azure Data Lake Storage Gen2</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Hierarchical namespace and file systems</li>
                  <li>Access tiers and lifecycle management</li>
                  <li>Security with RBAC and ACLs</li>
                  <li>Best practices for folder structure</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 4: Azure SQL Database</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Deployment models and service tiers</li>
                  <li>Elastic pools and scaling</li>
                  <li>Security features and encryption</li>
                  <li>Backup and disaster recovery</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 5: Cosmos DB for Big Data</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>NoSQL concepts and APIs</li>
                  <li>Partition keys and throughput</li>
                  <li>Change feed and analytical store</li>
                  <li>Integration with data platforms</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Phase 1 Project:</p>
                <p className="text-gray-700">Design and implement multi-tier data storage solution</p>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Phase 2: Data Integration (Weeks 6-11)</h4>
              <p className="text-purple-100 text-sm">Azure Data Factory and pipeline engineering</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 6: Azure Data Factory Fundamentals</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>ADF architecture and components</li>
                  <li>Linked services and datasets</li>
                  <li>Copy activity and data movement</li>
                  <li>Integration runtimes</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 7: Pipeline Orchestration</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Control flow activities</li>
                  <li>Parameters and variables</li>
                  <li>Conditional logic and loops</li>
                  <li>Pipeline dependencies and triggers</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 8: Data Transformation</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Mapping data flows</li>
                  <li>Transformations and derived columns</li>
                  <li>Aggregations and pivoting</li>
                  <li>Data flow debugging</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 9: Advanced ADF Patterns</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Metadata-driven pipelines</li>
                  <li>Dynamic pipeline execution</li>
                  <li>Error handling and retry logic</li>
                  <li>Logging and monitoring</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 10: Azure Databricks Integration</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Databricks workspace and clusters</li>
                  <li>Notebook activities in ADF</li>
                  <li>Passing parameters to notebooks</li>
                  <li>Mounting data lakes</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 11: Incremental Loading Patterns</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Change data capture (CDC)</li>
                  <li>Watermark-based loading</li>
                  <li>Delta lake merge operations</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Phase 2 Project:</p>
                <p className="text-gray-700">Build end-to-end ELT pipeline for enterprise data warehouse</p>
              </div>
            </div>
          </div>

          <div className="print:break-before-page"></div>

          {/* Phase 3 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Phase 3: Analytics and Data Warehousing (Weeks 12-16)</h4>
              <p className="text-purple-100 text-sm">Azure Synapse Analytics and dimensional modeling</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 12: Azure Synapse Analytics Overview</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Synapse workspace and components</li>
                  <li>Dedicated SQL pools vs serverless</li>
                  <li>Spark pools and notebooks</li>
                  <li>Integration with Power BI</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 13: Dedicated SQL Pools</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Distribution strategies (hash, round-robin, replicated)</li>
                  <li>Table design and partitioning</li>
                  <li>Columnstore indexes</li>
                  <li>Query optimization techniques</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 14: Serverless SQL Pools</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Querying data lake files</li>
                  <li>External tables and views</li>
                  <li>OPENROWSET function</li>
                  <li>Cost optimization strategies</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 15: Dimensional Modeling</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Star schema vs snowflake schema</li>
                  <li>Fact and dimension table design</li>
                  <li>Slowly changing dimensions (SCD)</li>
                  <li>Surrogate keys and business keys</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 16: Performance Tuning</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Query execution plans</li>
                  <li>Statistics and data skew</li>
                  <li>Resource classes and workload management</li>
                  <li>Materialized views and result set caching</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Phase 3 Project:</p>
                <p className="text-gray-700">Build optimized data warehouse with star schema</p>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Phase 4: Advanced Topics (Weeks 17-21)</h4>
              <p className="text-purple-100 text-sm">Streaming, security, and DevOps</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 17: Stream Processing</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Azure Event Hubs fundamentals</li>
                  <li>Stream Analytics jobs</li>
                  <li>Windowing functions</li>
                  <li>Real-time dashboards</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 18: Data Security and Compliance</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Azure Active Directory integration</li>
                  <li>Managed identities and service principals</li>
                  <li>Data encryption (at rest and in transit)</li>
                  <li>Auditing and compliance features</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 19: DevOps for Data Engineering</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Git integration with ADF</li>
                  <li>CI/CD pipelines with Azure DevOps</li>
                  <li>Environment management (Dev, Test, Prod)</li>
                  <li>Automated testing strategies</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 20: Monitoring and Troubleshooting</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Azure Monitor and Log Analytics</li>
                  <li>Alerts and notifications</li>
                  <li>Pipeline debugging techniques</li>
                  <li>Performance diagnostics</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 21: Cost Optimization</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Azure Cost Management tools</li>
                  <li>Resource sizing and scaling</li>
                  <li>Reserved capacity and savings plans</li>
                  <li>Best practices for cost control</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Phase 4 Project:</p>
                <p className="text-gray-700">Implement secure, production-ready data platform with CI/CD</p>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
              <h4 className="text-xl font-bold">Phase 5: Capstone and Certification (Weeks 22-24)</h4>
              <p className="text-purple-100 text-sm">Final project and DP-203 exam preparation</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 22: Capstone Project - Planning and Design</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Project requirements gathering</li>
                  <li>Architecture design and documentation</li>
                  <li>Technology stack selection</li>
                  <li>Implementation kickoff</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 23: Capstone Project - Implementation</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Data ingestion and transformation</li>
                  <li>Data warehouse development</li>
                  <li>Security and monitoring implementation</li>
                  <li>Testing and validation</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">Week 24: DP-203 Exam Prep and Presentations</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>DP-203 exam structure and topics</li>
                  <li>Practice questions and mock exams</li>
                  <li>Capstone project presentations</li>
                  <li>Career guidance and next steps</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-1">Capstone Project:</p>
                <p className="text-gray-700">Enterprise data lakehouse with full ELT pipeline, data warehouse, and analytics</p>
              </div>
            </div>
          </div>
        </section>

        <div className="print:break-before-page"></div>

        {/* Assessment and Grading */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Assessment and Grading
          </h3>

          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
                  <td className="p-4 text-gray-700">Hands-on exercises and assignments</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Participation</td>
                  <td className="p-4 text-gray-700">10%</td>
                  <td className="p-4 text-gray-700">Class engagement and discussions</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Capstone Project</td>
                  <td className="p-4 text-gray-700">30%</td>
                  <td className="p-4 text-gray-700">Comprehensive final project</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Grading Scale</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-purple-700 text-xl">A</div>
                <div className="text-gray-600 text-sm">90-100%</div>
              </div>
              <div>
                <div className="font-bold text-purple-700 text-xl">B</div>
                <div className="text-gray-600 text-sm">80-89%</div>
              </div>
              <div>
                <div className="font-bold text-purple-700 text-xl">C</div>
                <div className="text-gray-600 text-sm">70-79%</div>
              </div>
              <div>
                <div className="font-bold text-purple-700 text-xl">F</div>
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
            <BookOpen className="w-6 h-6 text-purple-600" />
            Materials and Resources
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Required Tools</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Azure Subscription</div>
                    <div className="text-sm text-gray-600">Provided for lab exercises</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Azure Data Studio</div>
                    <div className="text-sm text-gray-600">Free database tool</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Visual Studio Code</div>
                    <div className="text-sm text-gray-600">With Azure extensions</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Git</div>
                    <div className="text-sm text-gray-600">Version control system</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Provided Resources</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Course Materials</div>
                    <div className="text-sm text-gray-600">Slides, code samples, datasets</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Azure Credits</div>
                    <div className="text-sm text-gray-600">$500 per student for labs</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Exam Voucher</div>
                    <div className="text-sm text-gray-600">Microsoft DP-203 certification</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Practice Tests</div>
                    <div className="text-sm text-gray-600">MeasureUp practice exams</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Services */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-purple-600" />
            Career Services and Job Placement
          </h3>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
            <p className="text-gray-700 mb-6">
              Azure Data Engineers are in high demand across Energy, Finance, Healthcare, and Technology sectors. Our graduates secure roles at leading organizations within 90 days on average.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Career Support Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated career coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Resume and portfolio development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Technical interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Direct introductions to hiring partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">LinkedIn optimization and networking</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Job Titles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Azure Data Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data Platform Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cloud Data Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ETL/ELT Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data Warehouse Architect</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-purple-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-700">85%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-700">90 days</div>
                  <div className="text-sm text-gray-600">Average Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-700">$85K+</div>
                  <div className="text-sm text-gray-600">Avg Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-purple-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                Contact Us
              </h4>
              <p className="text-gray-700 text-sm mb-2">training@ripotek.com</p>
              <p className="text-gray-700 text-sm mb-2">enroll@ripotek.com</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-600" />
                Phone
              </h4>
              <p className="text-gray-700 text-sm mb-2">+1 587 259-0033</p>
              <p className="text-gray-700 text-sm">Mon-Fri: 9am-5pm MT</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Online
              </h4>
              <p className="text-gray-700 text-sm mb-2">www.ripotek.com/training</p>
              <p className="text-gray-700 text-sm">LinkedIn: /company/ripotek</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2 break-words">
              Ripotek Technologies Inc. | Calgary, Alberta, Canada
            </p>
            <p className="text-gray-500 text-xs">
              © 2023-2025 Ripotek Technologies Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        programName="Azure Data Engineer"
        duration="24 Weeks"
        price="$1,500"
        nextStart="February 1, 2025"
        portalId="342603298"
        formId="7406ec42-22b5-4449-81f1-3a508db656d7"
        region="na3"
      />
    </div>
  );
}



