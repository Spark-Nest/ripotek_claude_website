'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Printer, ArrowLeft, Lightbulb, Clock, DollarSign, Calendar, Award, CheckCircle, BookOpen, Briefcase, Mail, Phone, Globe } from 'lucide-react';
import EnrollmentModal from '../../../components/EnrollmentModal';

export default function PromptEngineeringSyllabus() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrint = () => { window.print(); };

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
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg font-semibold"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-24 px-4 md:px-8 pb-8 print:p-12">
        <header className="mb-12 border-b-4 border-yellow-600 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={64} height={64} className="w-16 h-16 rounded-lg shadow-lg print:shadow-none" />
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
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Prompt Engineering</h2>
            </div>
            <p className="text-xl text-yellow-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-600" />Program Overview</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-yellow-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-yellow-600" /><span className="font-semibold text-gray-900">Duration</span></div>
              <p className="text-gray-700">12 Weeks (2 sessions per week)</p>
              <p className="text-sm text-gray-600">24 total sessions, 72 instructional hours</p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><DollarSign className="w-5 h-5 text-yellow-600" /><span className="font-semibold text-gray-900">Investment</span></div>
              <p className="text-gray-700">CAD $700</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Calendar className="w-5 h-5 text-yellow-600" /><span className="font-semibold text-gray-900">Schedule</span></div>
              <p className="text-gray-700">Monday/Wednesday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-yellow-600" /><span className="font-semibold text-gray-900">Certification</span></div>
              <p className="text-gray-700">Ripotek Prompt Engineer</p>
              <p className="text-sm text-gray-600">Industry credential</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">Master the art and science of prompt engineering for large language models. Learn to design effective prompts, chain reasoning tasks, evaluate outputs, and build AI workflows.</p>
            <p className="text-gray-700">Work with GPT-4, Claude, and other LLMs. Build practical applications and understand model limitations. Prepare for high-demand prompt engineering roles.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />Learning Outcomes</h3>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon completion, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {["Design effective prompts for various tasks", "Chain prompts for complex workflows", "Evaluate and refine outputs", "Understand model capabilities and limits", "Implement zero-shot and few-shot learning", "Build AI-powered applications"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Apply advanced techniques (CoT, ReAct)", "Manage context windows effectively", "Implement safety guardrails", "Optimize for cost and performance", "Work with multiple LLM providers", "Create prompt libraries and templates"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
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
            <Calendar className="w-6 h-6 text-yellow-600" />12-Week Curriculum</h3>
          <div className="space-y-6">
            {[
              { week: 1, title: "LLM Fundamentals", topics: ["How LLMs work", "Tokenization basics", "Temperature and sampling", "Model comparison"] },
              { week: 2, title: "Prompt Design Basics", topics: ["Instruction writing", "Context provision", "Role assignment", "Output formatting"] },
              { week: 3, title: "Advanced Techniques", topics: ["Chain-of-Thought (CoT)", "Few-shot learning", "ReAct framework", "Self-consistency"] },
              { week: 4, title: "Prompt Chaining", topics: ["Sequential prompts", "Parallel prompting", "Workflow design", "Error handling"] },
              { week: 5, title: "Evaluation Methods", topics: ["Output assessment", "Quality metrics", "A/B testing prompts", "Regression testing"] },
              { week: 6, title: "Domain Applications", topics: ["Code generation", "Content creation", "Data analysis", "Customer service"] },
              { week: 7, title: "Safety and Ethics", topics: ["Bias mitigation", "Jailbreak prevention", "Content filtering", "Responsible AI"] },
              { week: 8, title: "API Integration", topics: ["OpenAI API", "Azure OpenAI", "Anthropic Claude", "Error handling"] },
              { week: 9, title: "RAG Systems", topics: ["Vector databases", "Document retrieval", "Context injection", "Hybrid search"] },
              { week: 10, title: "Optimization", topics: ["Cost optimization", "Latency reduction", "Caching strategies", "Batch processing"] },
              { week: 11, title: "Production Deployment", topics: ["Monitoring", "Logging", "Version control", "CI/CD for prompts"] },
              { week: 12, title: "Capstone Project", topics: ["End-to-end application", "Presentation", "Portfolio development", "Career planning"] }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-4">
                  <h4 className="text-xl font-bold">Week {item.week}: {item.title}</h4>
                </div>
                <div className="p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
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
            <Briefcase className="w-6 h-6 text-yellow-600" />Career Services</h3>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Roles:</h4>
                <ul className="space-y-2">
                  {["Prompt Engineer", "AI Product Manager", "GenAI Specialist", "LLM Application Developer"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-700">$75K+</div>
                <div className="text-sm text-gray-600">Average Starting Salary</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t-4 border-yellow-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-yellow-600" />Contact</h4><p className="text-gray-700 text-sm">training@ripotek.com</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Phone className="w-5 h-5 text-yellow-600" />Phone</h4><p className="text-gray-700 text-sm">+1 587 259-0033</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-yellow-600" />Online</h4><p className="text-gray-700 text-sm">www.ripotek.com/training</p></div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm mb-2 break-words">Ripotek Technologies Inc. | Calgary, Alberta, Canada</p>
            <p className="text-gray-500 text-xs">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        programName="Prompt Engineering"
        duration="4 Weeks"
        price="$499"
        nextStart="January 8, 2025"
        portalId="342603298"
        formId="7406ec42-22b5-4449-81f1-3a508db656d7"
        region="na3"
      />
    </div>
  );
}



