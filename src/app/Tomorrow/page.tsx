"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  if (!formId) {
    return (
      <p className="text-red-600 font-semibold">
        Error: Formspree ID not set. Make sure NEXT_PUBLIC_FORMSPREE_ID is defined.
      </p>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  useEffect(() => {
    if (state.succeeded) setShowPopup(true);
  }, [state.succeeded]);

  const handleClosePopup = () => {
    setShowPopup(false);
    formRef.current?.reset();
  };

  return (
    <section
      id="tomorrow"
      className="max-w-3xl mx-auto px-6 py-12 space-y-8 scroll-mt-32"
    >
      <h2 className="era-title text-3xl font-heading mb-4 text-center">
        Tomorrow Station
      </h2>
      <p className="text-text-secondary text-center">
        Send me a message or connect via social media. I’m always happy to
        collaborate or chat about Imagineering-style projects.
      </p>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 bg-[var(--card-bg)] shadow-xl rounded-2xl p-8 border border-[var(--border-color)] transition-all duration-300"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--card-text)] mb-1">
              First Name <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              name="FirstName"
              placeholder="First Name"
              required
              className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--card-text)] mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--card-text)] mb-1">
            Email Address <span className="text-amber-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--card-text)] mb-1">
            Message <span className="text-amber-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message here..."
            required
            className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed bg-[var(--accent-bg)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] focus:ring-2 focus:ring-accent"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--card-bg)] text-[var(--card-text)] rounded-2xl p-8 shadow-2xl max-w-sm text-center border border-[var(--border-color)]"
            >
              <h3 className="text-2xl font-semibold mb-4">✨ Message Sent!</h3>
              <p className="text-[var(--muted)] mb-6">
                Thanks for reaching out! I’ll get back to you soon.
              </p>
              <button
                onClick={handleClosePopup}
                className="px-6 py-2 rounded-lg bg-[var(--accent-bg)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] transition-all duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/colby-eakin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[var(--accent-hover)] transition-colors focus:ring-2 focus:ring-accent"
        >
          <Image src="/linkedin-logo.png" alt="LinkedIn" width={24} height={24} />
          <span className="text-[var(--card-text)]">LinkedIn</span>
        </a>

        <a
          href="https://www.facebook.com/colby.eakin.2025"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[var(--accent-hover)] transition-colors focus:ring-2 focus:ring-accent"
        >
          <Image src="/facebook-logo.png" alt="Facebook" width={24} height={24} />
          <span className="text-[var(--card-text)]">Facebook</span>
        </a>

        <a
          href="https://github.com/colbyeakin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[var(--accent-hover)] transition-colors focus:ring-2 focus:ring-accent"
        >
          <Image src="/github-logo.png" alt="GitHub" className="invert" width={24} height={24} />
          <span className="text-[var(--card-text)]">GitHub</span>
        </a>
      </div>
    </section>
  );
}
