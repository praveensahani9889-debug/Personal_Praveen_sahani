export interface IdentityData {
  fullName: string;
  roleSubtitle: string;
  shortBio: string;
  heroLocation: string;
  locationDetails: {
    country: string;
    state: string;
    city: string;
    area: string;
    pinCode: string;
    countryCode: string;
  };
  websites: {
    personal: string;
    business: string;
  };
  email: string;
  profilePhoto: string;
  ogImage: string;
  qrCode: string;
  copyrightYear: number;
}

export const PRAVEEN_IDENTITY: IdentityData = {
  fullName: 'Praveen Sahani',
  roleSubtitle: 'Personal Digital Identity',
  shortBio: 'Welcome to my personal space on the internet. Connect with me and explore my online presence.',
  heroLocation: 'India · Uttar Pradesh · Gorakhpur',
  locationDetails: {
    country: 'India',
    state: 'Uttar Pradesh',
    city: 'Gorakhpur',
    area: 'Shahajanwa',
    pinCode: '273209',
    countryCode: 'IN',
  },
  websites: {
    personal: 'https://praveensahani.netlify.app',
    business: 'https://praveensahani-business.netlify.app',
  },
  email: 'praveensahani9273@gmail.com',
  profilePhoto: '/images/profile-photo.jpg',
  ogImage: 'https://praveensahani.netlify.app/images/og-image.jpg',
  qrCode: '/images/qr-code.svg',
  copyrightYear: 2026,
};
