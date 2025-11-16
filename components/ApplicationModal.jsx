'use client';

import { useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import HubSpotForm from './HubSpotForm';

/**
 * ApplicationModal Component
 *
 * Full-screen modal for job applications with HubSpot form integration.
 * Features accessibility, keyboard navigation, and smooth animations.
 *
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal should close
 * @param {string} jobTitle - Title of the job being applied for
 * @param {string} portalId - HubSpot portal ID
 * @param {string} formId - HubSpot form ID
 * @param {string} region - HubSpot region (default: 'na3')
 */
export default function ApplicationModal({
  isOpen,
  onClose,
  jobTitle,
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
    console.log('Application submitted for:', jobTitle);
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
        <div className="bg-gradient-to-r from-teal-600 to-blue-900 p-6 flex items-center justify-between">
          <h2 id="modal-title" className="text-2xl font-bold text-white">
            Apply for {jobTitle}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close application form"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-8 flex-1">
          <HubSpotForm
            portalId={portalId}
            formId={formId}
            region={region}
            targetId={`hubspot-form-${jobTitle.replace(/\s+/g, '-').toLowerCase()}`}
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
