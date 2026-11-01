'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Copy,
  Check,
  Share2,
  QrCode,
  MessageCircle,
  Send,
  Twitter,
  Facebook,
  Linkedin,
  Download,
} from 'lucide-react';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialShowQr?: boolean;
}

export default function ShareModal({
  isOpen,
  onClose,
  initialShowQr = false,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(initialShowQr);

  const shareUrl = PRAVEEN_IDENTITY.websites.personal;
  const shareTitle = 'Praveen Sahani | Official Personal Digital Identity';

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQr = () => {
    const link = document.createElement('a');
    link.href = '/images/qr-code.png';
    link.download = 'Praveen-Sahani-QR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: PRAVEEN_IDENTITY.shortBio,
          url: shareUrl,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      copyShareLink();
    }
  };

  if (!isOpen) return null;

  const shareChannels = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      bg: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}\n${shareUrl}`)}`,
    },
    {
      name: 'Telegram',
      icon: Send,
      bg: 'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      bg: 'bg-[#FAF5EE] hover:bg-[#F2E7DC] text-[#2B1E16] border border-[#E8DCCF]',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      bg: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      bg: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-[#E8DCCF] overflow-hidden my-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#ECE0D3]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#F8EFE4] text-[#C2410C]">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#2B1E16] text-lg">Share Digital Identity</h3>
                <p className="text-xs text-[#735A4A]">Praveen Sahani&apos;s verified profile</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#FAF5EE] text-[#9E8270] hover:text-[#2B1E16] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* URL Copy Bar */}
          <div className="mt-4">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-[#9E8270] block mb-1.5">
              Personal Website Link
            </label>
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#FAF5EE] border border-[#E8DCCF]">
              <span className="text-xs font-mono text-[#2B1E16] px-2.5 truncate flex-1">
                {shareUrl}
              </span>
              <button
                onClick={copyShareLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Platforms Row */}
          <div className="mt-4">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E8270] block mb-2">
              Share Instantly
            </span>
            <div className="grid grid-cols-5 gap-2">
              {shareChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-xl transition-all ${channel.bg}`}
                    title={`Share on ${channel.name}`}
                  >
                    <Icon className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-semibold truncate max-w-full">
                      {channel.name.split(' ')[0]}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* QR Code Toggle & Native Share */}
          <div className="mt-4 pt-4 border-t border-[#ECE0D3] flex items-center justify-between gap-3">
            <button
              onClick={() => setShowQr(!showQr)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#8C4A26] bg-[#F2E7DC] hover:bg-[#EADBCE] border border-[#E5D4C2] transition-colors cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-[#C2410C]" />
              <span>{showQr ? 'Hide QR Code' : 'Show Digital QR'}</span>
            </button>

            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#4A372C] bg-[#FAF5EE] hover:bg-[#F2E7DC] border border-[#E8DCCF] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Native Share</span>
            </button>
          </div>

          {/* Prominent QR Code Section */}
          {showQr && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 rounded-2xl bg-[#FAF5EE] border border-[#E8DCCF] flex flex-col items-center text-center"
            >
              <div className="relative w-44 h-44 rounded-xl bg-white p-2 border border-[#EFE5DB] shadow-xs flex items-center justify-center">
                <Image
                  src="/images/qr-code.svg"
                  alt="Praveen Sahani QR Code"
                  width={180}
                  height={180}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              <p className="text-[11px] text-[#735A4A] mt-2">
                Point any smartphone camera to connect with Praveen Sahani
              </p>

              <button
                onClick={downloadQr}
                className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E4D5C5] text-[11px] font-semibold text-[#4A372C] hover:bg-[#FAF5EE] transition-colors cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>Save QR Image</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
