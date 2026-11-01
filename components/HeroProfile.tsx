'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

export default function HeroProfile() {
  return (
    <section className="relative pt-6 pb-6 flex flex-col items-center text-center">
      {/* Decorative ambient background glows with warm skinny nude / amber tones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-88 h-88 bg-gradient-to-tr from-amber-200/40 via-orange-200/35 to-rose-200/30 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-warm" />

      {/* Top Identity Tag */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EE]/90 backdrop-blur-md border border-[#E8DCCF] shadow-xs text-xs font-semibold text-[#8C4A26] mb-5"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <ShieldCheck className="w-3.5 h-3.5 text-[#C2410C]" />
        <span>Verified Personal Identity</span>
        <Sparkles className="w-3 h-3 text-amber-500 ml-0.5" />
      </motion.div>

      {/* Profile Photo Container */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 220, delay: 0.1 }}
        className="relative group mb-5"
      >
        {/* Soft 3D Glow halo in warm amber-nude */}
        <div className="absolute -inset-2.5 bg-gradient-to-r from-amber-400/40 via-orange-400/40 to-rose-400/35 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10 animate-pulse-warm" />

        {/* Circular Avatar Ring */}
        <div className="relative p-1.5 rounded-full bg-gradient-to-b from-white via-[#F6ECE0] to-[#E9DACE] shadow-xl shadow-[#8C5D3E]/15">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-3 border-white shadow-inner bg-[#EFE3D5]">
            <Image
              src={PRAVEEN_IDENTITY.profilePhoto}
              alt="Praveen Sahani - Official Profile Photo"
              width={240}
              height={240}
              priority
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Verified Check Badge */}
          <div
            title="Official Verified Identity"
            className="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 bg-white p-1 rounded-full shadow-md border border-[#E8DCCF] flex items-center justify-center text-emerald-600"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-50 text-emerald-600" />
          </div>
        </div>
      </motion.div>

      {/* Name & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-2 max-w-xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B1E16]">
          {PRAVEEN_IDENTITY.fullName}
        </h1>

        <div className="flex items-center justify-center gap-2">
          <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#B45309] via-[#C2410C] to-[#9A3412] bg-clip-text text-transparent">
            {PRAVEEN_IDENTITY.roleSubtitle}
          </span>
        </div>

        {/* Short Introduction */}
        <p className="text-sm sm:text-base text-[#614A3C] leading-relaxed font-normal pt-1 max-w-md mx-auto">
          {PRAVEEN_IDENTITY.shortBio}
        </p>

        {/* Location Badge */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] text-[#543E31] text-xs sm:text-sm font-medium border border-[#E6D8C8] shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{PRAVEEN_IDENTITY.heroLocation}</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
