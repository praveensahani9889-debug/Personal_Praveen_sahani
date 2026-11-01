'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Globe, ExternalLink, ArrowRight, Briefcase } from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

export default function BusinessWebsiteCard() {
  const businessUrl = PRAVEEN_IDENTITY.websites.business;

  return (
    <section id="business" className="py-7 scroll-mt-12">
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#2B1E16] tracking-tight flex items-center gap-2">
          <span>Ventures & Projects</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#735A4A] mt-0.5">
          Dedicated portal for professional services and commercial business initiatives
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -3 }}
        className="relative group overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-[#D97706] via-[#C2410C] to-[#B45309] shadow-lg shadow-[#C2410C]/15 transition-all duration-300"
      >
        <div className="relative rounded-[22px] bg-white/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#C2410C] to-[#D97706] flex items-center justify-center text-white shadow-md shadow-[#C2410C]/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#F2E7DC] text-[#8C4A26] border border-[#E5D4C2] flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  Official Business
                </span>
                <span className="text-xs text-[#8C715F] font-mono hidden sm:inline">
                  praveensahani-business.netlify.app
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#2B1E16] group-hover:text-[#C2410C] transition-colors">
                My Business Website
              </h3>
              <p className="text-sm text-[#614A3C] mt-1 max-w-md">
                Explore my business website, digital services, creative ventures, and official commercial portfolio.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="w-full md:w-auto shrink-0">
            <a
              href={businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#C2410C] to-[#B45309] hover:from-[#9A3412] hover:to-[#7C2D12] text-white font-semibold text-sm shadow-md shadow-[#C2410C]/25 hover:shadow-lg hover:shadow-[#C2410C]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group/btn"
            >
              <span>Visit Business Website</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <ArrowRight className="w-4 h-4 hidden sm:inline group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
