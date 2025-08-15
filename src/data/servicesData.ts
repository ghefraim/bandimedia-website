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
      id: 'content-production',
      title: 'CREARE DE CONȚINUT FOTO/VIDEO',
      description: 'Nu realizăm doar cadre estetice, ci capturăm momente, emoții și detalii care dau viață brandului tău. Fiecare imagine e gândită într-un mod profesional, menită să oprească scroll-ul, iar fiecare video să scoată la iveală esența poveștii voastre. Vedem lucrurile prin obiectiv așa cum le-ar vedea și clientul tău: aproape, sincer și cu atenție la detalii.',
      href: '/service/content-production',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b2524a874e1e6698532_3.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-2.svg",
      containerClass: "text-white items-start bg-[var(--brand-green-light)] box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'social-media',
      title: 'SOCIAL MEDIA MANAGEMENT',
      description: 'Facem ca postările tale să fie imposibil de ignorat. Aducem brandului tău prospețime prin descrieri bine scrise și creative. Îmbinăm ideile fresh cu înțelegerea publicului tău, astfel încât fiecare postare să conteze și fiecare interacțiune să construiască ceva real.',
      href: '/service/social-media-management',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b260debad96f28abab1_1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "text-white items-start bg-slate-700 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'events-activations',
      title: 'WEB DESIGN',
      description: `Suntem aici să te descotorosim de șabloane reciclate! Construim, împreună, fiecare pas de la zero, totul sculptat din cod, gândit exact pentru website-ul tău și pentru modul în care oamenii îl descoperă. Designul atrage, structura ghidează, iar experiența îi face pe vizitatori să rămână și să revină.`,
      href: '/service/events-activations',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b267a235e18bc348513_4.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "text-black items-start bg-[var(--brand-yellow)] box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'performance-marketing',
      title: 'ADS',
      description: 'Gândim reclame care nu fac baie de bani, ci slalom pe valul conversiilor. Țintim exact unde contează, vorbim pe limba publicului tău și livrăm rezultate care vând, nu doar se măsoară.',
      href: '/service/performance-marketing',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b2540d0a33a438f73cb_5.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "text-white items-start bg-emerald-700 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-8 md:items-center md:gap-x-[normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'influencer-marketing',
      title: 'COPYWRITING',
      description: `Așezăm cuvinte care îți iau povestea și o propulsează direct în inima cititorului. Fără clișee banale și idei neinspirate, doar emoție, claritate și texte care împing degetul pe butonul „cumpără".`,
      href: '/service/influencer-marketing',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b257a235e18bc3484d1_2.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "text-black items-start bg-amber-400 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-between gap-y-8 md:items-center md:gap-x-[normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    },
    {
      id: 'talent-management',
      title: 'BRANDING',
      description: 'Nu-ți realizăm doar un logo, îți construim și șlefuim o amprentă pe care nimeni nu o poate șterge. Construim culori care vorbesc, forme care seduc și un brandbook care poate deveni manualul tău de superputeri.',
      href: '/service/talent-management',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef7b25f206a1cb59b3d56c_6.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-1.svg",
      containerClass: "text-white items-start bg-stone-700 box-border gap-x-8 flex flex-col justify-start max-w-full gap-y-8 text-left w-full pl-0 pr-5 py-5 rounded-[20px] md:gap-x-12 md:flex-row md:gap-y-12 md:text-center md:w-auto md:pt-12 md:pb-0 md:px-12",
      headerClass: "items-start box-border gap-x-8 flex justify-between gap-y-8 md:items-center md:gap-x-[normal] md:gap-y-[normal]",
      iconContainerClass: "box-border flex shrink-0 max-w-8 md:max-w-10 before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-impact after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-impact"
    }
  ] as const
} as const; 