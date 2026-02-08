'use client';

import { useEffect, useCallback, useRef } from 'react';
import { X, Calendar } from 'lucide-react';
import HubSpotForm from './HubSpotForm';

/**
 * DiscoveryCallModal Component
 *
 * Full-screen modal for discovery call requests with HubSpot form integration.
 * Features accessibility, keyboard navigation, and smooth animations.
 *
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal should close
 * @param {string} portalId - HubSpot portal ID
 * @param {string} formId - HubSpot form ID
 * @param {string} region - HubSpot region (default: 'na3')
 */
export default function DiscoveryCallModal({
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
    // Optional: Show success message or auto-close
    console.log('Discovery call request submitted');
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
        <div className="bg-linear-to-r from-blue-900 via-teal-700 to-blue-900 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-white" />
              <div>
                <h2 id="modal-title" className="text-2xl font-bold text-white">
                  Let's Discuss Your Data Strategy
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white shrink-0"
              aria-label="Close discovery call form"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-white/90 text-lg ml-11">
            Schedule a free 30-minute discovery call
          </p>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-8 flex-1">
          <HubSpotForm
            portalId={portalId}
            formId={formId}
            region={region}
            targetId="hubspot-form-discovery-call"
            onFormSubmit={handleFormSubmit}
          />
        </div>

        {/* Footer Message */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
          <p className="text-center text-gray-600 italic">
            No sales pressure. Just a conversation about your goals.
          </p>
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
          background: #0f766e;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
      `}</style>
    </div>
  );
}
