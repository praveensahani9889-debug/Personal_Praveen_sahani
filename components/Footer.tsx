'use client';

import React from 'react';
import { ArrowUp, Globe, Shield, FileText } from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

interface FooterProps {
  onOpenTerms: () => void;
}

export default function Footer({ onOpenTerms }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-14 pb-12 border-t border-[#E8DCCF] pt-8 text-xs text-[#735A4A]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright notice */}
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C2410C] shrink-0" />
          <p className="font-medium text-[#4A372C]">
            © {PRAVEEN_IDENTITY.copyrightYear} {PRAVEEN_IDENTITY.fullName}. All Rights Reserved.
          </p>
        </div>

        {/* Navigation for public visitors */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
          <a
            href="#"
            className="hover:text-[#C2410C] transition-colors"
          >
            Home
          </a>
          <a
            href="#socials"
            className="hover:text-[#C2410C] transition-colors"
          >
            Social Links
          </a>
          <a
            href={PRAVEEN_IDENTITY.websites.business}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C2410C] transition-colors flex items-center gap-1"
          >
            <span>Business Website</span>
            <Globe className="w-3 h-3 text-[#8C715F]" />
          </a>
          <a
            href="#contact"
            className="hover:text-[#C2410C] transition-colors"
          >
            Contact
          </a>
          <button
            onClick={onOpenTerms}
            className="hover:text-[#C2410C] transition-colors flex items-center gap-1 cursor-pointer font-medium text-[#8C4A26]"
          >
            <FileText className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Terms &amp; Conditions</span>
          </button>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF5EE] hover:bg-[#F2E7DC] hover:text-[#C2410C] transition-all text-[#4A372C] font-medium cursor-pointer shadow-2xs border border-[#E8DCCF]"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mt-6 pt-4 border-t border-[#ECE0D3] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C715F] gap-2">
        <span>Official Digital Identity · praveensahani.netlify.app</span>
        <span>India · Uttar Pradesh · Gorakhpur</span>
      </div>
    </footer>
  );
}
