import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe lazily inside the handler to avoid build-time errors
let stripe;
function getStripe() {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }
  return stripe;
}

export async function POST(request) {
  try {
    const stripeClient = getStripe();
    const body = await request.json();
    const { programName, price, duration, customerEmail } = body;

    // Parse price - remove $ and convert to cents
    const priceInCents = Math.round(parseFloat(price.replace(/[$,]/g, '')) * 100);

    // Create Stripe Checkout Session
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `${programName} Training Program`,
              description: `${duration} professional training program at Ripotek Academy`,
              images: ['https://ripotek.com/favicon.svg'],
            },
            unit_amount: priceInCents,
            tax_behavior: 'exclusive', // Tax is added on top of the price
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      automatic_tax: { enabled: true }, // Enable automatic tax calculation
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&program=${encodeURIComponent(programName)}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancelled?program=${encodeURIComponent(programName)}`,
      customer_email: customerEmail || undefined,
      metadata: {
        programName,
        duration,
        originalPrice: price,
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
