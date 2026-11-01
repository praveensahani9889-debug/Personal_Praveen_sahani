'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Share2, QrCode } from 'lucide-react';

import { PRAVEEN_IDENTITY } from '@/lib/identity-data';
import { INITIAL_SOCIAL_LINKS } from '@/lib/social-links';

import HeroProfile from '@/components/HeroProfile';
import SocialGrid from '@/components/SocialGrid';
import BusinessWebsiteCard from '@/components/BusinessWebsiteCard';
import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';

import ShareModal from '@/components/ShareModal';
import TermsModal from '@/components/TermsModal';

export default function HomePage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F8F4EE] text-[#2D241E] selection:bg-amber-500/20 selection:text-amber-900 overflow-x-hidden">
      {/* Rich ambient warm background elements to make the background warm, artistic & not empty */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Warm Skinny & Peach Gradient Orbs */}
        <div className="absolute -top-32 -left-20 w-[30rem] h-[30rem] bg-gradient-to-br from-[#F5DEB3]/35 via-[#E8C5A5]/30 to-[#FCE8D5]/25 rounded-full blur-3xl opacity-80 animate-float-orb" />
        <div
          className="absolute top-1/3 -right-28 w-[32rem] h-[32rem] bg-gradient-to-bl from-[#EED7C5]/40 via-[#F3DFD1]/35 to-[#E8C5A5]/25 rounded-full blur-3xl opacity-75 animate-float-orb"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute bottom-16 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#F1DDD0]/35 via-[#E6CEBE]/30 to-[#F8E8DD]/25 rounded-full blur-3xl opacity-70 animate-float-orb"
          style={{ animationDelay: '-12s' }}
        />

        {/* Subtle warm micro-mesh background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D9C4B2_1px,transparent_1px)] [background-size:26px_26px] opacity-35" />

        {/* Decorative soft glowing curves in background */}
        <svg
          className="absolute top-12 left-0 w-full h-[800px] opacity-[0.14] stroke-[#8C5D3E]"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100,150 C200,280 400,-20 700,200 C1000,420 1100,220 1200,350"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50,380 C250,500 500,260 850,480 C1050,600 1150,490 1250,580"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Clean Floating Glass Navigation Header — Sole location for Share & QR */}
      <header className="sticky top-3.5 z-40 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E8DCCF] shadow-sm shadow-[#8C5D3E]/5">
          {/* Brand Identity Pill */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E5D4C2] shadow-2xs">
              <Image
                src={PRAVEEN_IDENTITY.profilePhoto}
                alt="Praveen Sahani avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-bold text-sm text-[#2B1E16] block leading-tight">
                {PRAVEEN_IDENTITY.fullName}
              </span>
              <span className="text-[10px] text-[#C2410C] font-semibold block leading-tight">
                Official Digital Identity
              </span>
            </div>
          </div>

          {/* Top Header Actions (Sole locations for QR and Share) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#8C4A26] bg-[#FAF5EE] hover:bg-[#F2E7DC] border border-[#E8DCCF] transition-colors cursor-pointer"
              title="View & Scan Digital QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-[#C2410C]" />
              <span className="hidden sm:inline">Digital QR</span>
            </button>

            <button
              onClick={() => setIsShareOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-medium text-xs shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Identity Content Canvas */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-2 pb-12">
        {/* Section A — Hero Profile (Clean without duplicate buttons) */}
        <HeroProfile />

        {/* Section B — Verified Social Connections (YouTube, Instagram, GitHub, WhatsApp, Free Fire) */}
        <SocialGrid links={INITIAL_SOCIAL_LINKS} />

        {/* Section C — My Website (Business Website) */}
        <BusinessWebsiteCard />

        {/* Section D — Contact */}
        <ContactCard />

        {/* Section E — Footer with Terms & Conditions */}
        <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        initialShowQr={false}
      />

      {/* QR Code Modal (opened directly from top header button) */}
      <ShareModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        initialShowQr={true}
      />

      {/* Terms & Conditions Dialog Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
