'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Loader2 } from 'lucide-react';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

/**
 * StripeCheckoutButton Component
 *
 * A button that initiates Stripe Checkout for training program enrollment.
 *
 * @param {string} programName - Name of the training program
 * @param {string} price - Program price (e.g., "$700" or "$1,500")
 * @param {string} duration - Program duration (e.g., "12 Weeks")
 * @param {string} customerEmail - Optional pre-filled customer email
 * @param {string} className - Optional additional CSS classes
 * @param {React.ReactNode} children - Optional custom button content
 */
export default function StripeCheckoutButton({
  programName,
  price,
  duration,
  customerEmail,
  className = '',
  children,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session via API
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          programName,
          price,
          duration,
          customerEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback to Stripe.js redirect
        const stripe = await stripePromise;
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (stripeError) {
          throw new Error(stripeError.message);
        }
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const defaultClassName = 'w-full bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition font-semibold hover-lift flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={className || defaultClassName}
        aria-label={`Pay ${price} for ${programName}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : children ? (
          children
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            Pay {price} CAD
          </>
        )}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">
          {error}
        </p>
      )}
    </div>
  );
}
