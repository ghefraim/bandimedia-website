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
      containerClass: "text-white bg-[var(--brand-green-light)] box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'evodia-gag',
      quote: `O echipă dinamică, profesionistă, cu viziune, cu atitudine pozitivă, și cel mai important, principii. E o bucurie să îi ai alături în procesul dezvoltării afacerii tale.`,
      name: 'Evodia Gag',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790edb5ad33146f48d74b9_Adidas.avif",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "text-white bg-slate-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'adelin-duca',
      quote: `Chiar e o echipă serioasă care își face treaba. Te ajută să crești în mediul online și îți oferă diverse servicii de marketing și media.. Apelați cu încredere!`,
      name: 'Adelin Duca',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3d592646de216e3b5303_f03fb12f9fd1533b5aaec75f952025da9b87ff71-1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "text-black bg-[var(--brand-yellow)] box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-black box-border flex w-12 md:w-[72px] before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-black text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-black text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-black text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'ionatan-lup',
      quote: 'O echipă de oameni profesioniști care livrează peste așteptări și te fac să te simți ca într-o familie. The best!',
      name: 'Ionatan Lup',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3c5054d917065f272aaf_Kiig.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "text-white bg-teal-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'beni-strava',
      quote: `Recomand cu încredere! O echipă super faină! Paul, the best!🫶🏽 Tot ce scot ei e top! Fac și deplasări. 🚀🔥`,
      name: 'Beni Strava',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6779102cad994bbae5304c6f_Rony.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "text-white bg-stone-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
   
    {
      id: 'bogdan-botau',
      quote: `Tineri ancorați în realitatea rețelelor sociale de azi. Profesioniști, nu ezită să investească în echipamente performante și în timpul de producție. Flexibili, ei se mulează pe orice industrie.`,
      name: 'Bogdan Botau',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790edb5ad33146f48d74b9_Adidas.avif",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "text-black bg-orange-400 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-black box-border flex w-12 md:w-[72px] before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-black text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-black text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-black text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'lorena-blocau',
      quote: `O adevărată echipă de profesioniști! Atât de atenți la detalii, la preferințele clientului și, totodată, pasionați și plini de idei inovative. Nu aș putea să recomand pe nimeni din domeniul marketing/foto și video, mai mult decât pe cei de la Bandi Media. O adevărată plăcere să lucrez cu ei!`,
      name: 'Lorena Blocau',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3d592646de216e3b5303_f03fb12f9fd1533b5aaec75f952025da9b87ff71-1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "text-white bg-indigo-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'cret-tanya',
      quote: `Cea mai tare echipă! Dedicarea lor, organizarea, creativitatea și ideile spontane au dus evenimentul la nivelul următor! Îi recomand cu toată încrederea! 🫶🏽📸`,
      name: 'Cret Tanya',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3c5054d917065f272aaf_Kiig.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "text-white bg-purple-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'anca-popa',
      quote: `Recomand!🔝 Bandi Media nu te lasă la greu, ei sunt o echipă receptivă și promptă pentru nevoile noastre. Mulțumim pentru ajutor! 🙏🏻`,
      name: 'Anca Popa',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6779102cad994bbae5304c6f_Rony.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "text-black bg-lime-400 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-black box-border flex w-12 md:w-[72px] before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-black text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-black text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-black text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'huse-tamas',
      quote: `Echipă super colaborativă , idei actuale, deschiși chiar și la noutățile care sunt mai greu de realizat 5 ⭐️!`,
      name: 'Huse Tamas',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790fb6f49358dd4d263149_OLIVIA_FARRELL.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "text-white bg-red-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'jeanine-naomi',
      quote: `Îi recomand cu încredere pe cei de la Bandi Media! Până în prezent am colaborat cu ei pentru realizarea a două videoclipuri. Au dat dovadă de seriozitate, implicare și au, și au contribuit cu idei creative pe parcursul filmărilor. [...] Vor fi deschiși să te asculte, să-ți înțeleagă viziunea și să o aducă la viață împreună cu tine.😌`,
      name: 'Jeanine Naomi',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790edb5ad33146f48d74b9_Adidas.avif",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "text-white bg-cyan-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'flavius-avramescu',
      quote: `Nu e doar o firmă de marketing. Paul lucrează pentru clienții lui ca și cum ar lucra pentru el. Sunt sigur că oricine apelează la serviciile #BandiMedia nu va găsi doar colaboratori, ci prieteni. Cred că orice client Bandi Media poate ajunge ușor să se simtă ca într-o familie, și nu doar într-un mediu de lucru cu task-uri.`,
      name: 'Flavius D. Avramescu',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790fb6f49358dd4d263149_OLIVIA_FARRELL.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "text-white bg-emerald-800 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'nae-bara',
      quote: `Îl cunosc pe Paul de 5 ani. Are un drive fenomenal și o echipă în spate care e creativă și atentă la detalii. Dacă ești în căutarea unor servicii de marketing care să îți aducă afacerea la nivelul următor, Bandi Media face toți banii!`,
      name: 'Nae Bara',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3d592646de216e3b5303_f03fb12f9fd1533b5aaec75f952025da9b87ff71-1.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "text-white bg-gray-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'cristina-borz',
      quote: `5/5 Spun doar câteva cuvinte cheie: calitate, vibe bun, mereu în trend, producție TOP, mereu din suflet.`,
      name: 'Cristina Borz',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/677b3c5054d917065f272aaf_Kiig.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-4.svg",
      containerClass: "text-black bg-pink-400 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-black box-border flex w-12 md:w-[72px] before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-black text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-black text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-black text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'laura-b',
      quote: `It was great working with the team, with Bandi Media! Looking forward to the next Bethany Mission trip! God bless you, guys!`,
      name: 'Laura B.',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6779102cad994bbae5304c6f_Rony.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-3.svg",
      containerClass: "text-white bg-blue-700 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-white box-border flex w-12 md:w-[72px] before:accent-auto before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-white text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-white text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-white text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    },
    {
      id: 'simona-grad',
      quote: `Calitate, profesionalism și multă dedicare în tot ceea ce fac.✨`,
      name: 'Simona Grad',
      title: '⭐️⭐️⭐️⭐️⭐️',
      avatar: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67790fb6f49358dd4d263149_OLIVIA_FARRELL.png",
      icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/icon-5.svg",
      containerClass: "text-black bg-yellow-300 box-border flex flex-col h-full justify-start pb-4 px-4 rounded-[20px] md:pb-8 md:px-8",
      iconContainerClass: "text-black box-border flex w-12 md:w-[72px] before:accent-auto before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-poppins-extrabold after:accent-auto after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins-extrabold",
      textClass: "text-black text-base box-border leading-[22.4px] md:text-2xl md:leading-[33.6px]",
      nameClass: "text-black text-sm font-semibold box-border leading-[21px] md:text-xl md:leading-[30px]",
      titleClass: "text-black text-sm box-border leading-[21px] md:text-lg md:leading-[27px]"
    }
  ] as const
} as const; 