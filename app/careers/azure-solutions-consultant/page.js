'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Briefcase, MapPin, DollarSign, Clock, Users, CheckCircle, Target, Award, Heart, TrendingUp, Mail, Calendar, Plane, Phone, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import ApplicationModal from '../../../components/ApplicationModal';
import Navbar from '../../../components/Navbar';

export default function AzureSolutionsConsultantPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jobHighlights = [
    { icon: MapPin, label: 'Location', value: 'Calgary, AB (Hybrid - 2 days/week)' },
    { icon: Briefcase, label: 'Employment Type', value: 'Full-Time' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Azure Solutions Consultant</h1>
          <p className="text-xl text-gray-300 mb-8">Consulting Department</p>

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

      {/* Sticky Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/careers#positions"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </button>
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
              As an Azure Solutions Consultant, you&apos;ll design and implement modern data platforms on Azure for enterprise clients. You&apos;ll build end-to-end data pipelines, implement lakehouses, and create governed analytics solutions using Azure Data Factory, Databricks, Synapse, and Microsoft Fabric. This is a hands-on technical role with client-facing responsibilities.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solution Delivery (65%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Design and implement Azure data architectures (Data Lake, Synapse, Fabric, Databricks)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Build production-grade ELT pipelines using Azure Data Factory and Databricks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Implement medallion architecture (Bronze/Silver/Gold layers) with Delta Lake</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Design and optimize data models (star schema, dimensional modeling)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Configure security, access controls, and data governance (Azure Purview)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Implement CI/CD pipelines for data workflows using Azure DevOps</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Troubleshoot performance issues and optimize pipeline/query performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Create technical documentation (architecture diagrams, runbooks, data dictionaries)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Provide knowledge transfer to client teams</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Engagement (25%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in discovery workshops to understand requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Present technical solutions and recommendations to stakeholders</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Collaborate with client data teams, architects, and business users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Manage client expectations and communicate project status</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Support sales team with technical scoping and estimation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Gather feedback and iterate on solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Development (10%)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Stay current with Azure updates and new service releases</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Pursue Microsoft certifications (Azure Data Engineer, Solutions Architect)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Contribute to internal knowledge sharing (demos, documentation)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentor junior consultants</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Participate in community events and conferences</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>4+ years in data engineering, cloud engineering, or BI development</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>2+ years hands-on experience with Azure data services</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Delivered 3+ end-to-end data platform implementations</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Experience with both on-premises and cloud data technologies</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Track record of working directly with clients or business stakeholders</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Azure Data Services:</p>
                    <p className="text-gray-700">Data Factory, Data Lake Gen2, Synapse Analytics, Databricks</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Programming:</p>
                    <p className="text-gray-700">SQL (advanced), Python (intermediate), Scala (nice to have)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Orchestration:</p>
                    <p className="text-gray-700">ADF pipelines, Databricks workflows, Azure Functions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Data Modeling:</p>
                    <p className="text-gray-700">Dimensional modeling, star schema, slowly changing dimensions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Version Control:</p>
                    <p className="text-gray-700">Git, Azure Repos, GitHub</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">CI/CD:</p>
                    <p className="text-gray-700">Azure DevOps, GitHub Actions, deployment pipelines</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Power BI:</p>
                    <p className="text-gray-700">Basic to intermediate (connecting to data sources, simple reports)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Infrastructure as Code:</p>
                    <p className="text-gray-700">ARM templates, Terraform, or Bicep (nice to have)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Strong communication skills (technical and non-technical audiences)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Problem-solving mindset and troubleshooting abilities</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Self-directed and able to manage multiple priorities</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Comfortable with ambiguity and changing requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Team player with collaborative approach</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                    <span>Eagerness to learn and adapt to new technologies</span>
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
                <span>Microsoft Certified: Azure Data Engineer Associate (DP-203)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Microsoft Certified: Azure Solutions Architect Expert</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Databricks Certified Data Engineer Associate</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Experience with Microsoft Fabric (OneLake, Data Factory, Synapse)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Knowledge of data governance tools (Azure Purview, Collibra)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Familiarity with streaming data (Event Hubs, Stream Analytics, Kafka)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Previous consulting or professional services experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span>Domain expertise in Energy, Finance, or Public Sector</span>
              </li>
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compensation & Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Competitive salary: $95K-$130K based on experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Annual performance bonus (10-15% of salary)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>RRSP matching (4% of salary)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Comprehensive health, dental, and vision benefits</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Professional development budget ($3,500/year)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Certification exam fees and training covered</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work Environment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Hybrid: 2 days/week in Calgary office, 3 days remote</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Flexible hours (core hours 10am-3pm MT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Latest MacBook Pro or Surface Laptop</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Home office setup allowance ($1,500)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Downtown Calgary office with collaborative spaces</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Work on diverse projects across industries</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Mentorship from senior architects and principals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Clear career progression (Consultant → Senior Consultant → Architect)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Opportunity to specialize (Databricks, Fabric, AI/ML)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Exposure to pre-sales and client management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Internal training on new Azure services and best practices</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Collaborative, low-ego team environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Direct impact on client success</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Knowledge-sharing culture (lunch-and-learns, demos)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Supportive of work-life balance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Small company - your voice matters</span>
                  </li>
                </ul>
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
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Screen (30 min)</h4>
                  <p className="text-gray-700">HR and technical lead</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Technical Interview (90 min)</h4>
                  <p className="text-gray-700">Azure architecture and pipeline design questions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Coding Challenge (take-home, 2-3 hours)</h4>
                  <p className="text-gray-700">Build a simple ELT pipeline</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Client Scenario (45 min)</h4>
                  <p className="text-gray-700">Present solution to mock client problem</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold text-gray-900">Team Fit (30 min)</h4>
                  <p className="text-gray-700">Meet with team members</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">Timeline:</span>
                <span>2-3 weeks from application to offer</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-br from-blue-900 via-blue-800 to-teal-900 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Modern Data Platforms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team and work on cutting-edge Azure solutions for enterprise clients.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold text-lg"
            >
              <Mail className="w-6 h-6" />
              Apply for This Position
            </button>
          </div>

        </div>
      </section>

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle="Azure Solutions Consultant"
        portalId="342603298"
        formId="73226891-65ae-4581-97e8-70f52f76a3be"
        region="na3"
      />

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
                <li><a href="/services#analytics-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
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
              <a href="https://www.facebook.com/profile.php?id=61583595044786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotekacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
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








