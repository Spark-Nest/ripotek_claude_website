'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle, Home, Calendar, Mail, ArrowRight } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [programName, setProgramName] = useState('');
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const program = searchParams.get('program');
    const session = searchParams.get('session_id');
    if (program) setProgramName(decodeURIComponent(program));
    if (session) setSessionId(session);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-linear-to-r from-green-600 to-emerald-600 p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
          <p className="text-green-100 text-lg">Welcome to Ripotek Academy</p>
        </div>

        {/* Success Content */}
        <div className="p-8">
          {programName && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                You&apos;re enrolled in: {programName}
              </h2>
              <p className="text-gray-700">
                Thank you for enrolling in our training program. We&apos;re excited to have you join us!
              </p>
            </div>
          )}

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Check Your Email</h4>
                <p className="text-gray-600 text-sm">
                  You&apos;ll receive a confirmation email with your receipt and enrollment details within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Onboarding Email</h4>
                <p className="text-gray-600 text-sm">
                  Within 24-48 hours, you&apos;ll receive your onboarding materials, Slack workspace invite, and learning portal access.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Start Your Journey</h4>
                <p className="text-gray-600 text-sm">
                  Prepare for your first session by reviewing the student onboarding checklist on our training page.
                </p>
              </div>
            </div>
          </div>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-500">
                Transaction ID: <span className="font-mono">{sessionId}</span>
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="flex-1 bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition font-semibold text-center flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </a>
            <a
              href="/training"
              className="flex-1 bg-white border-2 border-teal-600 text-teal-600 py-3 px-6 rounded-lg hover:bg-teal-50 transition font-semibold text-center"
            >
              View Training Programs
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 text-center border-t">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Image src="/favicon.svg" alt="Ripotek" width={24} height={24} className="rounded" />
            <span className="font-semibold text-gray-900">Ripotek Academy</span>
          </div>
          <p className="text-sm text-gray-600">
            Questions? Contact us at{' '}
            <a href="mailto:training@ripotek.com" className="text-teal-600 hover:underline">
              training@ripotek.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-linear-to-br from-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
