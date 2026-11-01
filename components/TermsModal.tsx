'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, CheckCircle2, Mail } from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-[#E8DCCF] my-8 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#ECE0D3]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#F8EFE4] text-[#C2410C]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#2B1E16] text-lg sm:text-xl">
                  Terms &amp; Conditions
                </h3>
                <p className="text-xs text-[#735A4A]">
                  Praveen Sahani Official Personal Digital Identity
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#FAF5EE] text-[#9E8270] hover:text-[#2B1E16] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 py-4 pr-1 text-xs text-[#614A3C] space-y-4 leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DCCF]">
              <div className="flex items-center gap-2 font-semibold text-[#2B1E16] text-sm mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C2410C]" />
                <span>1. Official Personal Identity</span>
              </div>
              <p>
                This website is the official personal digital identity of <strong>Praveen Sahani</strong> ({PRAVEEN_IDENTITY.websites.personal}). It is created solely for personal representation, social connectivity, and professional contact across the web.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-[#2B1E16] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2. Verified Links &amp; External Profiles</span>
              </h4>
              <p>
                All official social media links featured on this site (including YouTube, Instagram, GitHub, WhatsApp, and Free Fire) are verified profiles belonging to Praveen Sahani. Visiting external links is subject to the terms and privacy policies of each respective platform.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-[#2B1E16] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3. Privacy &amp; Location Information</span>
              </h4>
              <p>
                In alignment with personal digital safety guidelines, geographic details are presented exclusively at the district and regional level (Gorakhpur, Uttar Pradesh, India — 273209). No private residential address is recorded or disclosed on this website.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-[#2B1E16] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>4. Media &amp; Intellectual Property</span>
              </h4>
              <p>
                The photograph, visual branding, and personal digital identity assets displayed here belong exclusively to Praveen Sahani. Unauthorized reproduction, impersonation, or misuse of this likeness is strictly prohibited.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8EFE4] border border-[#E8DCCF]">
              <div className="flex items-center gap-2 font-semibold text-[#2B1E16] text-sm mb-1">
                <Mail className="w-4 h-4 text-[#C2410C]" />
                <span>5. Contact &amp; Correspondence</span>
              </div>
              <p>
                For official inquiries, collaborations, or general correspondence, contact directly via email at <strong className="text-[#2B1E16]">{PRAVEEN_IDENTITY.email}</strong>.
              </p>
            </div>

            <div className="pt-2 text-[11px] text-[#8C715F]">
              Last updated: November 2026 · © 2026 Praveen Sahani. All Rights Reserved.
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-3 border-t border-[#ECE0D3] flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-medium text-xs shadow-xs transition-colors cursor-pointer"
            >
              I Understand &amp; Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
