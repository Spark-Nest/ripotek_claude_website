'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * HubSpotForm Component
 *
 * Embeds HubSpot form using the official embed method with data attributes.
 */
export default function HubSpotForm({
  portalId,
  formId,
  region = 'na3',
  targetId = 'hubspot-form',
  onFormReady,
  onFormSubmit
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    // Set timeout for error handling
    const timeout = setTimeout(() => {
      if (mounted && loading) {
        console.error('Form loading timeout');
        setError(true);
        setLoading(false);
      }
    }, 20000); // 20 second timeout

    const loadForm = () => {
      try {
        // Check if script is already loaded
        const existingScript = document.querySelector(`script[src="https://js-${region}.hsforms.net/forms/embed/${portalId}.js"]`);

        if (!existingScript && !scriptLoadedRef.current) {
          console.log('Loading HubSpot form script...');

          const script = document.createElement('script');
          script.src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
          script.defer = true;

          script.onload = () => {
            console.log('✅ HubSpot script loaded successfully');
            scriptLoadedRef.current = true;

            // Wait a bit for the form to render
            setTimeout(() => {
              if (mounted && containerRef.current) {
                const formElement = containerRef.current.querySelector('.hs-form-frame, form');
                if (formElement) {
                  console.log('✅ Form rendered');
                  setLoading(false);
                  setError(false);
                } else {
                  console.warn('Form element not found after script load');
                  // Give it more time
                  setTimeout(() => {
                    if (mounted) {
                      const retryFormElement = containerRef.current?.querySelector('.hs-form-frame, form');
                      if (retryFormElement) {
                        setLoading(false);
                        setError(false);
                      }
                    }
                  }, 2000);
                }
              }
            }, 1000);
          };

          script.onerror = (e) => {
            console.error('❌ Failed to load HubSpot script', e);
            if (mounted) {
              setError(true);
              setLoading(false);
            }
          };

          document.body.appendChild(script);
        } else {
          console.log('HubSpot script already loaded');
          // Script already exists, just wait for form to render
          setTimeout(() => {
            if (mounted) {
              setLoading(false);
            }
          }, 1000);
        }
      } catch (err) {
        console.error('❌ Error loading form:', err);
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadForm();

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [portalId, formId, region, loading]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-red-600 text-center mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-lg font-semibold">Unable to load application form</p>
          <p className="text-sm text-gray-600 mt-2 mb-4">
            The form is taking longer than expected to load.
          </p>
          <a
            href="mailto:info@ripotek.com"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Email us instead
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-[600px]">
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-teal-600 animate-spin mb-3" />
          <span className="text-gray-600">Loading application form...</span>
          <span className="text-sm text-gray-500 mt-2">This may take a few seconds</span>
        </div>
      )}
      <div
        className={`hs-form-frame transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      />
    </div>
  );
}
