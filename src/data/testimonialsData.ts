export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly name: string;
  readonly title: string;
  readonly avatar: string;
  readonly icon: string;
  readonly containerClass: string;
  readonly iconContainerClass: string;
  readonly textClass: string;
  readonly nameClass: string;
  readonly titleClass: string;
}

export const testimonialsData = {
  testimonials: [
    {
      id: 'olivia-farrell',
      quote: 'Komodo have changed the game at TUI. Since our first project together back in 2019, the whole business has shifted to invest more in social after seeing the return and reach of our campaigns with Komodo.',
      name: 'Olivia Farrell',
      title: 'Social & Talent Marketing Lead , TUI',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790fb6f49358dd4d263149_OLIVIA_FARRELL.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "bg-emerald-300 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-slate-600 text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-slate-600 text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-slate-600 text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'tofunmi-ifarajimi',
      quote: `I'm not surprised we're now working on a retainer basis, the campaign went so well the first time it just made sense. That's credit to you guys!`,
      name: 'Tofunmi Ifarajimi',
      title: 'Digital Brand Activation Specialist, ADIDAS',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790edb5ad33146f48d74b9_Adidas.avif",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "bg-[var(--brand-yellow)] box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-slate-600 text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-slate-600 text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-slate-600 text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'justine-dunton',
      quote: `MASSIVE THANK YOU for everything you poured into our Halloween Event. We're seeing such INCREDIBLE content go up – and can't wait to see the full results and impact come through.`,
      name: 'Justine Dunton',
      title: 'Director Communications, MAC Cosmetics',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3d592646de216e3b5303_f03fb12f9fd1533b5aaec75f952025da9b87ff71-1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "bg-slate-600 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-emerald-300 box-border flex w-12 md:w-[72px] before:accent-auto before:text-emerald-300 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-emerald-300 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'felicity-elliott',
      quote: 'Working with Komodo has been better than any other agency i have worked with. They become part of the team which makes for seamless campaign execution. Exceeded all expectations.',
      name: 'Felicity Elliott',
      title: 'Brand Manager, Glaze Hair',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3c5054d917065f272aaf_Kiig.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "bg-emerald-300 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-slate-600 box-border flex w-12 md:w-[72px] before:accent-auto before:text-slate-600 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-slate-600 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'rany-rosalie',
      quote: `Penhaligon's appointed Komodo as our events and content agency for a major fragrance launch which proved to be a great partnership from start to finish. We couldn't have wished for a better kickoff to the campaign.`,
      name: 'Rany Rosalie',
      title: 'Marketing Manager',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6779102cad994bbae5304c6f_Rony.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "bg-slate-600 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-emerald-300 box-border flex w-12 md:w-[72px] before:accent-auto before:text-emerald-300 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-emerald-300 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    }
  ] as const
} as const; 