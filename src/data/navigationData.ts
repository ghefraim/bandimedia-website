export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly hasBreak?: boolean;
}

export const navigationData = {
  // services: [
  //   { id: 'all-services', label: 'All Services', href: '/services' },
  //   { id: 'social-media', label: 'Social Media Management', href: '/service/social-media-management', hasBreak: true },
  //   { id: 'content-production', label: 'Content Production', href: '/service/content-production' },
  //   { id: 'influencer-marketing', label: 'Influencer Marketing', href: '/service/influencer-marketing' },
  //   { id: 'events-activations', label: 'Events & Activations', href: '/service/events-activations', hasBreak: true },
  //   { id: 'performance-marketing', label: 'Performance Marketing', href: '/service/performance-marketing' },
  //   { id: 'tiktok-marketing', label: 'Tiktok Marketing', href: '/service/tiktok-marketing' }
  // ] as const,
  
  mainNav: [
    { id: 'services', label: 'Servicii', href: '#services' },
    { id: 'work', label: 'Proiecte', href: '#results' },
    { id: 'about', label: 'Despre Noi', href: '/about' },
    // { id: 'blogs', label: 'Blog', href: '/blog' }
  ] as const
} as const; 