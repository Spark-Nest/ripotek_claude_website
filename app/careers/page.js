'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowRight, Award, Briefcase, Calendar, CheckCircle, Heart, Send, Users, Sparkles, TrendingUp, Globe, Code, GraduationCap, Lightbulb } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';
import Navbar from '../../components/Navbar';
import ApplicationModal from '../../components/ApplicationModal';

export default function CareersPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  const careers = [
    { title: 'Senior Data Architect', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', slug: 'senior-data-architect', icon: Code },
    { title: 'Power BI Instructor', dept: 'Training', type: 'Contract', location: 'Remote', slug: 'power-bi-instructor', icon: GraduationCap },
    { title: 'Azure Solutions Consultant', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB', slug: 'azure-solutions-consultant', icon: Globe },
    { title: 'Student Success Coordinator', dept: 'Training', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', slug: 'student-success-coordinator', icon: Users },
    { title: 'Junior Data Engineer', dept: 'Consulting', type: 'Full-Time', location: 'Calgary, AB (Hybrid)', slug: 'junior-data-engineer', icon: TrendingUp }
  ];

  const benefits = [
    'Work on cutting-edge data and AI projects',
    'Flexible hybrid work model',
    'Competitive salary and benefits',
    'Professional development budget',
    'Collaborative team culture',
    'Make real impact for clients'
  ];

  const cultureImages = [
    {
      src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop',
      alt: 'Team collaborating on a project',
      label: 'Collaboration',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      src: '/learning.jpg',
      alt: 'Team workshop session',
      label: 'Learning',
      span: ''
    },
    {
      src: '/innovation.jpg',
      alt: 'Modern tech workspace',
      label: 'Innovation',
      span: ''
    },
    {
      src: '/growth.jpg',
      alt: 'Team celebrating success',
      label: 'Growth',
      span: ''
    },
    {
      src: '/mentorship.jpg',
      alt: 'Professional mentoring',
      label: 'Mentorship',
      span: 'col-span-2 md:col-span-1'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      desc: 'We push the boundaries of what data and AI can achieve, always exploring the cutting edge.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'People Matter',
      desc: 'Our team is our greatest asset. We invest in growth, wellness, and a culture of belonging.',
      image: '/people_matter.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Real Impact',
      desc: 'Every project we take on drives measurable transformation for our clients and communities.',
      image: '/real_impact.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Immersive Full-Screen */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
            alt="Team working together"
            fill
            className="object-cover"
            priority
          />
          {/* Blue overlay gradient to match other pages */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-800/80 to-teal-900/85"></div>
        </div>

        {/* Floating ambient elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-20 px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-200 font-medium">We're hiring across multiple roles</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Build the Future<br />
              <span className="bg-linear-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">of Data & AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Join a team that's transforming how organizations leverage their data. Work on cutting-edge projects that matter.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a href="#positions" className="group bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-500/25 flex items-center gap-3 text-lg font-semibold">
                <Briefcase className="w-5 h-5" /> View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#culture" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3 text-lg font-semibold">
                Learn About Our Culture
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {[
              { value: '5+', label: 'Open Roles' },
              { value: 'Hybrid', label: 'Work Model' },
              { value: '100%', label: 'Team Growth Focus' },
              { value: 'Calgary', label: 'HQ Location' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out both;
          }
        `}</style>
      </section>

      {/* Life at Ripotek - Culture Photo Grid */}
      <section id="culture" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Our Culture</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-gray-900">Life at </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Ripotek</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collaborative, innovative environment where passionate people build remarkable things
            </p>
          </div>

          {/* Asymmetric Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {cultureImages.map((img, i) => (
              <div key={i} className={`relative group rounded-2xl overflow-hidden ${img.span}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-semibold text-lg">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work at Ripotek - Split Layout with Image */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3">
                <Image
                  src="/a_place_to_thrive.jpg"
                  alt="A place where you can thrive"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white rounded-2xl p-6 shadow-xl max-w-[220px] hidden md:block">
                <Award className="w-8 h-8 mb-3" />
                <p className="font-bold text-lg leading-tight">Recognized for workplace excellence</p>
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-3xl bg-teal-100"></div>
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Why Ripotek</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A Place Where You<br />Can <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Thrive</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Ripotek, we believe in empowering our team members to grow, innovate, and make meaningful contributions. We foster an inclusive environment where diverse perspectives drive better solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="font-medium">Mentorship programs</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">Community engagement</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="font-medium">Recognition & rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Image Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values shape every project, every interaction, and every hire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden h-80 md:h-[420px] shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="relative py-24 px-4 overflow-hidden">
        {/* Background with subtle image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=60"
            alt=""
            fill
            className="object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gray-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">Join Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-gray-900">Open </span>
              <span className="bg-linear-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team and make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {careers.map((job, i) => {
              const JobIcon = job.icon;
              return (
                <a
                  key={i}
                  href={`/careers/${job.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center shrink-0 group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors">
                      <JobIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{job.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">{job.dept}</span>
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-5 flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-teal-600 font-semibold text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* General Application CTA */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop"
              alt="Team working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-900/80 to-teal-900/70"></div>
            <div className="relative z-10 py-12 px-8 md:px-16 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Don't see the right role?</h3>
                <p className="text-gray-300 max-w-lg">
                  We're always looking for talented individuals who are passionate about data and AI. Send us your resume and let's explore how you can contribute.
                </p>
              </div>
              <button
                onClick={() => setApplicationModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-semibold text-lg shrink-0 shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Full Bleed Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
            alt="Inspiring mountain landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-800/80 to-teal-900/85"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join a team that's transforming how organizations leverage data and AI. Apply today and help us build the future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#positions" className="group bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-500/25 text-lg font-semibold inline-flex items-center gap-3">
              <Briefcase className="w-5 h-5" /> View All Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact#book-call" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-lg font-semibold inline-flex items-center gap-3">
              <Calendar className="w-5 h-5" /> Schedule a Chat
            </a>
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
                  <span className="font-semibold text-base md:text-lg tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
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

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applicationModalOpen}
        onClose={() => setApplicationModalOpen(false)}
        jobTitle="Open Application"
        portalId="342603298"
        formId="fedd373f-24b8-4849-be94-6c6f6e873c70"
        region="na3"
      />
    </div>
  );
}
