'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { XCircle, Home, ArrowLeft, MessageCircle } from 'lucide-react';

function CancelledContent() {
  const searchParams = useSearchParams();
  const [programName, setProgramName] = useState('');

  useEffect(() => {
    const program = searchParams.get('program');
    if (program) setProgramName(decodeURIComponent(program));
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Cancelled Header */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <XCircle className="w-12 h-12 text-gray-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment Cancelled</h1>
          <p className="text-gray-300 text-lg">No worries - your enrollment is not complete</p>
        </div>

        {/* Cancelled Content */}
        <div className="p-8">
          {programName && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {programName} Training Program
              </h2>
              <p className="text-gray-700">
                Your payment was cancelled. You have not been charged, and your spot has not been reserved.
              </p>
            </div>
          )}

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">What would you like to do?</h3>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Have questions before enrolling?</h4>
              <p className="text-gray-600 text-sm mb-4">
                We&apos;re here to help! Book a free discovery call with our team to learn more about the program, payment options, or career outcomes.
              </p>
              <a
                href="/contact#book-call"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Book a Discovery Call
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Need flexible payment options?</h4>
              <p className="text-gray-600 text-sm">
                We offer payment plans with 0% interest. Split your tuition into 3 or 6 monthly installments. Contact us to set up a payment plan that works for you.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/training"
              className="flex-1 bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition font-semibold text-center flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Programs
            </a>
            <a
              href="/"
              className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition font-semibold text-center flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
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
            Need help? Contact us at{' '}
            <a href="mailto:training@ripotek.com" className="text-teal-600 hover:underline">
              training@ripotek.com
            </a>
            {' '}or call{' '}
            <a href="tel:+15872590033" className="text-teal-600 hover:underline">
              +1 587-259-0033
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCancelledPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CancelledContent />
    </Suspense>
  );
}
