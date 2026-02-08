'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, DollarSign } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <DollarSign className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Refund Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <p className="text-gray-700 leading-relaxed">
                At Ripotek Technologies Inc., we strive to provide exceptional training and consulting services. This Refund Policy outlines the terms and conditions for refunds and cancellations of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Training Program Refunds</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Full Refund Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are eligible for a full refund (100%) if you cancel your enrollment:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>More than 14 days before the program start date</li>
                <li>Within the first session if you are not satisfied with the program (satisfaction guarantee applies to first-time enrollments only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Partial Refund</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Partial refunds are available under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>7-14 days before start:</strong> 50% refund of the program fee</li>
                <li><strong>Less than 7 days before start:</strong> No refund available</li>
                <li><strong>After program commencement:</strong> Refunds are calculated on a pro-rata basis for unused sessions, minus a 25% administrative fee</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Corporate Training Programs</h3>
              <p className="text-gray-700 leading-relaxed">
                Corporate and enterprise training programs have customized refund terms outlined in the service agreement. Please refer to your specific contract for cancellation and refund policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Consulting Services Refunds</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Project-Based Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For project-based consulting engagements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Refunds are based on work completed and deliverables provided</li>
                <li>Cancellation must be provided in writing with 14 days notice</li>
                <li>Any work completed up to the cancellation date will be billed at the contracted rate</li>
                <li>Deposits and retainer fees are non-refundable</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Managed Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For ongoing managed services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Services are billed monthly in advance</li>
                <li>Cancellation requires 30 days written notice</li>
                <li>No refunds for partial months of service</li>
                <li>Final month will be pro-rated based on actual usage</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Request Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                <li className="pl-2">
                  <strong>Submit a written request:</strong> Email your refund request to info@ripotek.com with "Refund Request" in the subject line
                </li>
                <li className="pl-2">
                  <strong>Include required information:</strong>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-8 mt-2">
                    <li>Your full name and contact information</li>
                    <li>Program or service name and enrollment/contract date</li>
                    <li>Reason for cancellation</li>
                    <li>Original payment method and transaction reference</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <strong>Await confirmation:</strong> You will receive an email confirmation within 2 business days acknowledging your request
                </li>
                <li className="pl-2">
                  <strong>Review and approval:</strong> Our team will review your request and determine eligibility based on this policy
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processing Time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your refund is approved:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Refunds will be processed within 10 business days of approval</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Credit card refunds may take an additional 5-10 business days to appear on your statement, depending on your financial institution</li>
                <li>Wire transfer refunds may be subject to processing fees</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You will receive an email notification once your refund has been processed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following items and fees are non-refundable under all circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Registration fees and administrative charges</li>
                <li>Third-party certification exam fees</li>
                <li>Software licenses and subscriptions purchased through us</li>
                <li>Digital downloads and course materials accessed or downloaded</li>
                <li>Promotional or discounted program fees (special pricing terms apply)</li>
                <li>Travel and accommodation expenses (if applicable)</li>
                <li>Deposits and retainer fees for consulting services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Program Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As an alternative to cancellation, we offer the following transfer options:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Transfer to another program:</strong> You may transfer your enrollment to a different program of equal or lesser value with no penalty if requested more than 7 days before the start date</li>
                <li><strong>Transfer to future session:</strong> You may defer your enrollment to a future session of the same program once, subject to availability, with at least 7 days notice</li>
                <li><strong>Transfer fees:</strong> Transfers to programs of greater value will require payment of the difference</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Transfer requests must be submitted in writing to info@ripotek.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ripotek-Initiated Cancellations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event that Ripotek Technologies Inc. must cancel a program or service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You will receive a full refund (100%) of all fees paid</li>
                <li>You will be notified as soon as possible, typically at least 7 days in advance</li>
                <li>You will be offered the option to transfer to an alternative program or future session</li>
                <li>Ripotek is not responsible for any indirect costs such as travel or accommodation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exceptional Circumstances</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that unforeseen circumstances may arise. In cases of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Serious illness or medical emergencies (documentation required)</li>
                <li>Family emergencies</li>
                <li>Natural disasters or force majeure events</li>
                <li>Other extraordinary circumstances beyond your control</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We will review refund requests on a case-by-case basis. Please contact us at info@ripotek.com to discuss your situation. Documentation may be required to support exceptional circumstance claims.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about our refund policy or to submit a refund request, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-700"><strong>Ripotek Technologies Inc.</strong></p>
                <p className="text-gray-700">Email: info@ripotek.com</p>
                <p className="text-gray-700">Phone: +1 587-259-0033</p>
                <p className="text-gray-700">Address: Calgary, Alberta, Canada</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our team is available Monday through Friday, 9:00 AM to 5:00 PM Mountain Time, to assist with your refund inquiries.
              </p>
            </div>

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
    </div>
  );
}
