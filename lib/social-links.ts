/**
 * OFFICIAL VERIFIED SOCIAL LINKS CONFIGURATION
 * Configured with Praveen Sahani's verified profiles
 */

export interface SocialPlatformConfig {
  id: string;
  name: string;
  platform: 'youtube' | 'instagram' | 'github' | 'whatsapp' | 'freefire' | 'facebook' | 'twitter' | 'telegram';
  handleDisplay: string;
  url: string; // If empty string, hidden from the public view
  description: string;
  iconName: 'Youtube' | 'Instagram' | 'Github' | 'MessageCircle' | 'Gamepad2' | 'Facebook' | 'Twitter' | 'Send';
  themeColor: string;
  gradient: string;
  badgeText: string;
  actionLabel: string;
}

export const INITIAL_SOCIAL_LINKS: SocialPlatformConfig[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    platform: 'youtube',
    handleDisplay: '@praveen_sahani',
    url: 'https://youtube.com/@praveen_sahani?si=emPJgcXrhQ34yfZ9',
    description: 'Videos, updates & creative video content',
    iconName: 'Youtube',
    themeColor: '#E63946',
    gradient: 'from-rose-500/15 via-red-500/10 to-orange-500/5',
    badgeText: 'Official Channel',
    actionLabel: 'Watch & Subscribe',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    platform: 'instagram',
    handleDisplay: '@praveen_nishad_103',
    url: 'https://www.instagram.com/praveen_nishad_103?rpxt=MW5tbTc3aGdsNGU1eg==',
    description: 'Photos, stories, moments & reels',
    iconName: 'Instagram',
    themeColor: '#D946EF',
    gradient: 'from-fuchsia-500/15 via-rose-500/10 to-amber-500/5',
    badgeText: 'Follow Profile',
    actionLabel: 'Connect on Instagram',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    platform: 'whatsapp',
    handleDisplay: 'Direct Chat',
    url: 'https://wa.me/qr/EBJIX57CXG3JJ1',
    description: 'Instant direct messaging & personal contact',
    iconName: 'MessageCircle',
    themeColor: '#16A34A',
    gradient: 'from-emerald-500/15 via-teal-500/10 to-emerald-600/5',
    badgeText: 'Direct Contact',
    actionLabel: 'Chat on WhatsApp',
  },
  {
    id: 'github',
    name: 'GitHub',
    platform: 'github',
    handleDisplay: '@praveensahani9889-debug',
    url: 'https://github.com/praveensahani9889-debug',
    description: 'Code repositories, projects & open source',
    iconName: 'Github',
    themeColor: '#24292F',
    gradient: 'from-slate-700/15 via-zinc-800/10 to-neutral-900/5',
    badgeText: 'Developer',
    actionLabel: 'View GitHub Profile',
  },
  {
    id: 'freefire',
    name: 'Free Fire India',
    platform: 'freefire',
    handleDisplay: 'Survival Battlegrounds',
    url: 'https://ffshare.garena.com/?region=IND&lang=en',
    description: 'The ultimate survival battlegrounds game on mobile',
    iconName: 'Gamepad2',
    themeColor: '#EA580C',
    gradient: 'from-orange-500/15 via-amber-500/10 to-yellow-500/5',
    badgeText: 'Mobile Game',
    actionLabel: 'Play / Join Game',
  },
  // Platforms without URLs remain empty and hidden from public display
  {
    id: 'facebook',
    name: 'Facebook',
    platform: 'facebook',
    handleDisplay: '',
    url: '',
    description: 'Personal social network',
    iconName: 'Facebook',
    themeColor: '#1877F2',
    gradient: 'from-blue-600/15 via-blue-500/10 to-sky-500/5',
    badgeText: 'Profile',
    actionLabel: 'Connect on Facebook',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    platform: 'twitter',
    handleDisplay: '',
    url: '',
    description: 'Thoughts & discourse',
    iconName: 'Twitter',
    themeColor: '#0f1419',
    gradient: 'from-slate-700/15 via-slate-800/10 to-zinc-900/5',
    badgeText: 'Updates',
    actionLabel: 'Follow on X',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    platform: 'telegram',
    handleDisplay: '',
    url: '',
    description: 'Fast messaging',
    iconName: 'Send',
    themeColor: '#229ED9',
    gradient: 'from-sky-500/15 via-cyan-500/10 to-blue-500/5',
    badgeText: 'Channel',
    actionLabel: 'Join on Telegram',
  },
];

export function getActiveSocialLinks(): SocialPlatformConfig[] {
  return INITIAL_SOCIAL_LINKS.filter((item) => typeof item.url === 'string' && item.url.trim().length > 0);
}
