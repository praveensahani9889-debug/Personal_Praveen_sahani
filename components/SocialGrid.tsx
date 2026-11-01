'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Youtube,
  Instagram,
  Github,
  MessageCircle,
  Gamepad2,
  Facebook,
  Twitter,
  Send,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SocialPlatformConfig } from '@/lib/social-links';

interface SocialGridProps {
  links: SocialPlatformConfig[];
}

export default function SocialGrid({ links }: SocialGridProps) {
  // Only display platforms that have a non-empty valid URL
  const activeLinks = links.filter((item) => item.url && item.url.trim().length > 0);

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube className={className} />;
      case 'Instagram':
        return <Instagram className={className} />;
      case 'Github':
        return <Github className={className} />;
      case 'MessageCircle':
        return <MessageCircle className={className} />;
      case 'Gamepad2':
        return <Gamepad2 className={className} />;
      case 'Facebook':
        return <Facebook className={className} />;
      case 'Twitter':
        return <Twitter className={className} />;
      case 'Send':
        return <Send className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="socials" className="py-7 scroll-mt-12">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2B1E16] tracking-tight flex items-center gap-2">
            <span>Online Connections</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F2E7DC] text-[#8C4A26] font-semibold border border-[#E5D4C2]">
              {activeLinks.length} Verified Profiles
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#735A4A] mt-0.5">
            Official social channels, developer profile & mobile gaming identity
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {activeLinks.map((item, idx) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="group relative p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E9DDD0] hover:border-[#D4BEA9] shadow-xs hover:shadow-lg hover:shadow-[#8C5D3E]/10 transition-all duration-300 flex items-center justify-between"
          >
            {/* Subtle warm accent gradient on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />

            <div className="flex items-center gap-3.5 relative z-10 min-w-0 pr-2">
              {/* Bubble platform icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-2xs transition-transform duration-300 group-hover:scale-110 shrink-0"
                style={{
                  backgroundColor: `${item.themeColor}12`,
                  color: item.themeColor,
                  border: `1px solid ${item.themeColor}25`,
                }}
              >
                {renderIcon(item.iconName, 'w-6 h-6')}
              </div>

              <div className="text-left min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm sm:text-base text-[#2B1E16] group-hover:text-[#8C4A26] transition-colors truncate">
                    {item.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline shrink-0" />
                </div>
                <p className="text-xs text-[#735A4A] line-clamp-1">
                  {item.description}
                </p>
                {item.handleDisplay && (
                  <span className="text-[11px] font-medium text-[#C2410C] block mt-0.5 truncate">
                    {item.handleDisplay}
                  </span>
                )}
              </div>
            </div>

            {/* External Link Action Arrow */}
            <div className="w-8 h-8 rounded-full bg-[#FAF5EE] group-hover:bg-[#F2E7DC] flex items-center justify-center text-[#8C715F] group-hover:text-[#C2410C] transition-colors shrink-0 relative z-10 border border-[#ECE0D3]">
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
