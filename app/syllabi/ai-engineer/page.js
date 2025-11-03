'use client';

import React from 'react';
import { Printer, ArrowLeft, Brain, Clock, DollarSign, Calendar, Award, CheckCircle, BookOpen, Target, Briefcase, Mail, Phone, Globe } from 'lucide-react';

export default function AIEngineerSyllabus() {
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
        <header className="mb-12 border-b-4 border-pink-600 pb-8">
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
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 rounded-lg print:rounded-none">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-8 h-8" />
              <h2 className="text-3xl font-bold">AI Engineer</h2>
            </div>
            <p className="text-xl text-pink-100">Professional Training Program Syllabus</p>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-pink-600" />Program Overview</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-pink-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-pink-600" /><span className="font-semibold text-gray-900">Duration</span></div>
              <p className="text-gray-700">24 Weeks (3 sessions per week)</p>
              <p className="text-sm text-gray-600">72 total sessions, 216 instructional hours</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><DollarSign className="w-5 h-5 text-pink-600" /><span className="font-semibold text-gray-900">Investment</span></div>
              <p className="text-gray-700">CAD $3,999</p>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Calendar className="w-5 h-5 text-pink-600" /><span className="font-semibold text-gray-900">Schedule</span></div>
              <p className="text-gray-700">Wednesday/Friday/Sunday</p>
              <p className="text-sm text-gray-600">6:00 PM - 9:00 PM Mountain Time</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4">
              <div className="flex items-center gap-2 mb-2"><Award className="w-5 h-5 text-pink-600" /><span className="font-semibold text-gray-900">Certification Prep</span></div>
              <p className="text-gray-700">Microsoft AI-102</p>
              <p className="text-sm text-gray-600">Azure AI Engineer Associate</p>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 print:border-2">
            <h4 className="font-bold text-gray-900 mb-3">Program Description</h4>
            <p className="text-gray-700 mb-4">The AI Engineer program is an intensive 24-week training designed to build production-ready AI solutions on Azure. Master Azure OpenAI, Computer Vision, NLP, MLOps, and responsible AI practices.</p>
            <p className="text-gray-700">Build RAG systems, deploy GenAI apps, fine-tune models, and implement CI/CD for AI workloads. Prepare for Microsoft AI-102 certification and secure high-demand AI engineering roles.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-pink-600" />Learning Outcomes</h3>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4 font-semibold">Upon completion, you will be able to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {["Deploy Azure OpenAI solutions", "Build RAG systems with vector databases", "Implement computer vision applications", "Create NLP pipelines", "Fine-tune language models", "Design conversational AI"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Implement MLOps pipelines", "Monitor AI models in production", "Apply responsible AI principles", "Secure AI applications", "Optimize inference performance", "Pass Microsoft AI-102 exam"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
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
            <Calendar className="w-6 h-6 text-pink-600" />24-Week Curriculum Highlights</h3>
          <div className="space-y-6">
            {[
              { phase: "Foundations (Weeks 1-6)", topics: ["Python for AI/ML", "Azure ML basics", "ML fundamentals", "Neural networks intro", "Azure Cognitive Services", "REST APIs and SDKs"] },
              { phase: "Azure OpenAI & GenAI (Weeks 7-12)", topics: ["Azure OpenAI Service", "Prompt engineering advanced", "RAG architecture", "Vector databases (Cognitive Search)", "LangChain and frameworks", "Fine-tuning models"] },
              { phase: "Computer Vision & NLP (Weeks 13-18)", topics: ["Custom Vision models", "Object detection", "OCR and Form Recognizer", "Text analytics", "Translation services", "Speech recognition"] },
              { phase: "MLOps & Production (Weeks 19-24)", topics: ["Azure ML pipelines", "Model deployment", "Monitoring and drift", "CI/CD for AI", "Responsible AI", "Capstone project and AI-102 prep"] }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4">
                  <h4 className="text-xl font-bold">{item.phase}</h4>
                </div>
                <div className="p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
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
            <Briefcase className="w-6 h-6 text-pink-600" />Career Services</h3>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Support:</h4>
                <ul className="space-y-2">
                  {["Advanced career coaching", "Portfolio development", "Technical interview prep", "Employer introductions"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Typical Roles:</h4>
                <ul className="space-y-2">
                  {["AI Engineer", "ML Engineer", "GenAI Developer", "AI Solutions Architect"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-pink-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><div className="text-3xl font-bold text-pink-700">85%</div><div className="text-sm text-gray-600">Placement Rate</div></div>
                <div><div className="text-3xl font-bold text-pink-700">90 days</div><div className="text-sm text-gray-600">Average Time</div></div>
                <div><div className="text-3xl font-bold text-pink-700">$100K+</div><div className="text-sm text-gray-600">Avg Starting Salary</div></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t-4 border-pink-600 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-pink-600" />Contact</h4><p className="text-gray-700 text-sm">training@ripotek.com</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Phone className="w-5 h-5 text-pink-600" />Phone</h4><p className="text-gray-700 text-sm">+1 (403) 999-RIPO</p></div>
            <div><h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-pink-600" />Online</h4><p className="text-gray-700 text-sm">www.ripotek.com/training</p></div>
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
