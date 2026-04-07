"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <div ref={widgetRef} className="fixed bottom-22 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 right-0 w-[300px] sm:w-[380px] rounded-2xl border border-white/[0.08] bg-[#1a1a1a] shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    Have a question? Drop in your message{" "}
                    <span className="inline-block">👋</span>
                  </h3>
                  <p className="text-[12px] text-neutral-400 mt-1">
                    It won&apos;t take more than 16 Seconds. Shoot your shot.{" "}
                    <span className="inline-block">😊</span>
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-2 mt-0.5 p-1 rounded-lg text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close contact form"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/[0.06]" />

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-5 py-10 text-center"
              >
                <div className="text-3xl mb-3">🎉</div>
                <p className="text-sm font-medium text-white">
                  Message sent successfully!
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] font-medium text-neutral-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="johndoe@xyz.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#252525] border border-white/[0.06] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/30 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[13px] font-medium text-neutral-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="I'd love a compliment from you."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#252525] border border-white/[0.06] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/30 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-[#2a2a2a] hover:bg-[#333] border border-white/[0.06] text-sm font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={14} />
                      Submit
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-12 h-12 rounded-full bg-[#2a2a2a] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-neutral-300 hover:text-white hover:bg-[#333] transition-all duration-300 ${!isOpen ? "animate-float hover:shadow-[0_4px_25px_rgba(99,102,241,0.2)]" : ""}`}
        aria-label="Open contact form"
        id="contact-widget-trigger"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse indicator */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#2a2a2a]">
            <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
