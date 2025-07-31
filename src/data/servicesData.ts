export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly image: string;
  readonly icon: string;
  readonly containerClass: string;
  readonly headerClass: string;
  readonly iconContainerClass: string;
}

export const servicesData = {
  services: [
    {
      id: 'social-media',
      title: 'SOCIAL MEDIA MARKETING',
      description: 'Social management and content that create real engagement with your target audience, build brand awareness that turns heads, and drive sales through the roof.',
      href: '/service/social-media-management',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b260debad96f28abab1_1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "items-start bg-emerald-300 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'influencer-marketing',
      title: 'INFLUENCER MARKETING',
      description: `Connecting you with the word's best influencers and creators who will accelerate your brand's visibility in the most authentic, scalable and ROI-oriented way.`,
      href: '/service/influencer-marketing',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b257a235e18bc3484d1_2.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "items-start bg-[var(--brand-yellow)] box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-8 md:items-center md:gap-x-[normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'content-production',
      title: 'CONTENT PRODUCTION',
      description: 'Content is fresher, bigger and better with Komodo. Impact more people or reimagine your brand in a new market with content that gets noticed and sets you apart.',
      href: '/service/content-production',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b2524a874e1e6698532_3.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-2.svg",
      containerClass: "text-white items-start bg-slate-600 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'events-activations',
      title: 'EVENTS & ACTIVATIONS',
      description: `With live event production and extraordinary campaigns in the world's most desired locations, you'll win hearts and draw in crowds from far and wide.`,
      href: '/service/events-activations',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b267a235e18bc348513_4.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "items-start bg-emerald-300 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'performance-marketing',
      title: 'PERFORMANCE MARKETING',
      description: 'Your entire spend is justified through accountability, precision and measurable outcomes with a tailor-made process to achieve your most ambitious goals.',
      href: '/service/performance-marketing',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b2540d0a33a438f73cb_5.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "items-start bg-[var(--brand-yellow)] box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-8 md:items-center md:gap-x-[normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'talent-management',
      title: 'TALENT MANAGEMENT',
      description: 'We source, support and nurture incredible talent from every corner of the globe. Working with an incredible roster across fashion, comedy, lifestyle, beauty, fitness and more, we support and connect talent with the world\'s most prestigious brands.',
      href: '/service/talent-management',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b25f206a1cb59b3d56c_6.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "items-start bg-emerald-300 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    }
  ] as const
} as const; 