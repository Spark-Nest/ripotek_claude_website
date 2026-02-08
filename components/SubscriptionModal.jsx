'use client';

import { useEffect, useCallback, useRef } from 'react';
import { X, Mail } from 'lucide-react';
import HubSpotForm from './HubSpotForm';

/**
 * SubscriptionModal Component
 *
 * Full-screen modal for blog newsletter subscriptions with HubSpot form integration.
 * Features accessibility, keyboard navigation, and smooth animations.
 *
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal should close
 * @param {string} portalId - HubSpot portal ID
 * @param {string} formId - HubSpot form ID
 * @param {string} region - HubSpot region (default: 'na3')
 */
export default function SubscriptionModal({
  isOpen,
  onClose,
  portalId,
  formId,
  region = 'na3'
}) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Handle ESC key press
  const handleEscape = useCallback((event) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  // Handle click outside modal
  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  // Prevent body scroll and handle keyboard events
  useEffect(() => {
    if (isOpen) {
      // Save currently focused element
      previousFocusRef.current = document.activeElement;

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Add event listeners
      document.addEventListener('keydown', handleEscape);

      // Focus on modal
      if (modalRef.current) {
        modalRef.current.focus();
      }

      return () => {
        // Restore body scroll
        document.body.style.overflow = 'unset';

        // Remove event listeners
        document.removeEventListener('keydown', handleEscape);

        // Restore focus to previous element
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, handleEscape]);

  // Focus trap - keep focus within modal
  const handleTabKey = (e) => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  // Handle form submission callback
  const handleFormSubmit = () => {
    console.log('Newsletter subscription submitted');
    // Optional: Auto-close modal after a delay
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn max-h-[90vh] flex flex-col"
        onKeyDown={handleTabKey}
        tabIndex={-1}
      >
        {/* Modal Header */}
        <div className="bg-linear-to-br from-teal-600 via-blue-600 to-blue-700 p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          <div className="flex items-start justify-between mb-3 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 id="modal-title" className="text-2xl font-bold text-white pr-4">
                Stay Updated
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white shrink-0"
              aria-label="Close subscription form"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Subscription Description */}
          <p className="text-white/90 text-sm relative z-10">Get the latest insights on data engineering, AI, and career development delivered to your inbox</p>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-8 flex-1">
          <HubSpotForm
            portalId={portalId}
            formId={formId}
            region={region}
            targetId="hubspot-form-newsletter-subscription"
            onFormSubmit={handleFormSubmit}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 200ms ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 200ms ease-out;
        }

        /* Smooth scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #14b8a6;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
      `}</style>
    </div>
  );
}
