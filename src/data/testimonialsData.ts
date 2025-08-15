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
      id: 'marinel-neaga',
      quote: 'Administrator competent, cu o echipă competentă care oferă servicii de top.',
      name: 'Marinel Neaga',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790fb6f49358dd4d263149_OLIVIA_FARRELL.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "bg-emerald-300 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-slate-600 text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-slate-600 text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-slate-600 text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'evodia-gag',
      quote: `O echipă dinamică, profesionistă, cu viziune, cu atitudine pozitivă, și cel mai important, principii. E o bucurie să îi ai alături în procesul dezvoltării afacerii tale.`,
      name: 'Evodia Gag',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790edb5ad33146f48d74b9_Adidas.avif",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "bg-[var(--brand-yellow)] box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-gray-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-gray-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-slate-600 text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-slate-600 text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-slate-600 text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'adelin-duca',
      quote: `Chiar e o echipă serioasă care își face treaba. Te ajută să crești în mediul online și îți oferă diverse servicii de marketing și media.. Apelați cu încredere!`,
      name: 'Adelin Duca',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3d592646de216e3b5303_f03fb12f9fd1533b5aaec75f952025da9b87ff71-1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "bg-slate-600 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-emerald-300 box-border flex w-12 md:w-[72px] before:accent-auto before:text-emerald-300 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-emerald-300 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'ionatan-lup',
      quote: 'O echipă de oameni profesioniști care livrează peste așteptări și te fac să te simți ca într-o familie. The best!',
      name: 'Ionatan Lup',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3c5054d917065f272aaf_Kiig.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "bg-emerald-300 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-slate-600 box-border flex w-12 md:w-[72px] before:accent-auto before:text-slate-600 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-slate-600 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact",
      textClass: "text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'beni-strava',
      quote: `Recomand cu încredere! O echipă super faină! Paul, the best!🫶🏽 Tot ce scot ei e top! Fac și deplasări. 🚀🔥`,
      name: 'Beni Strava',
      title: '⭐️⭐️⭐️⭐️⭐️',
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