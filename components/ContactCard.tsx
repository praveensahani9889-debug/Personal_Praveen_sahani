'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = PRAVEEN_IDENTITY.email;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-7 scroll-mt-12">
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#2B1E16] tracking-tight flex items-center gap-2">
          <span>Get in Touch</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#735A4A] mt-0.5">
          Reach out directly for business inquiries, collaborations, or greetings
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#E8DCCF] shadow-sm shadow-[#8C5D3E]/5 p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F8EFE4] border border-[#E8DCCF] flex items-center justify-center text-[#C2410C] shrink-0">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E8270] block mb-0.5">
                Official Business Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-xl font-bold text-[#2B1E16] hover:text-[#C2410C] transition-colors break-all"
              >
                {email}
              </a>
              <p className="text-xs text-[#735A4A] mt-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Primary channel for correspondence & direct messages</span>
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`mailto:${email}?subject=Hello%20Praveen%20Sahani&body=Hi%20Praveen,%0D%0A%0D%0AI%20am%20contacting%20you%20through%20your%20personal%20digital%20identity%20website.`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-medium text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FAF5EE] hover:bg-[#F2E7DC] text-[#4A372C] font-medium text-sm border border-[#E5D4C2] transition-colors cursor-pointer"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8C715F]" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
