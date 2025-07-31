export interface CaseStudyMetric {
  readonly value: string;
  readonly label: string;
  readonly hasStrong?: boolean;
  readonly hasBreak?: boolean;
  readonly labelBreak?: boolean;
}

export interface CaseStudy {
  readonly id: string;
  readonly href: string;
  readonly logo: string;
  readonly logoClass: string;
  readonly backgroundImage: string;
  readonly backgroundClass: string;
  readonly metrics: readonly CaseStudyMetric[];
}

export const caseStudiesData = {
  cases: [
    {
      id: 'maybelline',
      href: '/work/maybelline-fireworks-mascara-launch',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6777ac524374025d3efe0bf0_maybeline.svg",
      logoClass: "box-border max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6789218430334ccf0b42ed67_Maybeline-n\'.avif",
      backgroundClass: "absolute box-border h-full max-w-full object-cover object-[50%_0%] w-full z-0 inset-[0%] md:object-[50%_50%]",
      metrics: [
        { value: '114M', label: 'Reach' },
        { value: '6.5M', label: 'Views' },
        { value: '610K', label: 'Engagements' }
      ]
    },
    {
      id: 'penhaligons',
      href: '/work/penhaligons-alula',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f00ce9df2c335d5223df87_Loog.svg",
      logoClass: "box-border max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f00fb364a9defbef64e474_P{en.jpg",
      backgroundClass: "absolute box-border h-full max-w-full object-cover object-[50%_0%] w-full z-0 inset-[0%] md:object-[50%_50%]",
      metrics: [
        { value: '19.6m', label: 'Impressions' },
        { value: '1.93%', label: 'Engagement', hasBreak: true },
        { value: '£365.1k', label: 'Content Value', hasBreak: true }
      ]
    },
    {
      id: 'puma-fenty',
      href: '/work/puma-x-fenty-creeper-launch',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f02bd29290371a22cea71f_PUma.svg",
      logoClass: "box-border max-h-12 max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f02c14be430793f65617c5_PUMA.jpg",
      backgroundClass: "absolute box-border h-full max-w-full object-cover w-full z-0 inset-[0%]",
      metrics: [
        { value: '8.1M', label: 'Reach' },
        { value: '3.2M', label: 'Impressions' },
        { value: '4.6K', label: 'Link Clicks', labelBreak: true }
      ]
    },
    {
      id: 'selfie-leslie',
      href: '/work/selfie-leslie-global-digital-strategy',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f004e183deb252cbf70b3e_image_(4).png",
      logoClass: "box-border max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/678916896f4c15f34a01cfde_Selfie_Social_1.avif",
      backgroundClass: "absolute box-border h-full max-w-full object-cover object-[50%_0%] w-full z-0 inset-[0%] md:object-[50%_50%]",
      metrics: [
        { value: '63K +', label: 'Followers' },
        { value: '14.1M', label: 'TikTok Views' },
        { value: '56%', label: 'Interactions' }
      ]
    },
    {
      id: 'turo',
      href: '/work/turo',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f02f029290371a22d1929e_Turo_Logo.svg",
      logoClass: "box-border max-h-12 max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f02ee1db710d91761332ea_Turo.jpg",
      backgroundClass: "absolute box-border h-full max-w-full object-cover w-full z-0 inset-[0%]",
      metrics: [
        { value: '49%', label: 'Downloads', labelBreak: true },
        { value: '27,300', label: 'Attendees' },
        { value: '3.8M', label: 'Impressions' }
      ]
    },
    {
      id: 'burger-lobster',
      href: '/work/burger-lobster',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f0032aed3359be5fb040ee_Burger.svg",
      logoClass: "box-border max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/678915c89c2a13d359844d6b_Burger.avif",
      backgroundClass: "absolute box-border h-full max-w-full object-cover object-[50%_0%] w-full z-0 inset-[0%] md:object-[50%_50%]",
      metrics: [
        { value: '120K', label: 'Followers' },
        { value: '5m', label: 'Impressions', hasStrong: true },
        { value: '29.6k', label: 'Engagements', hasStrong: true }
      ]
    },
    {
      id: 'marriott',
      href: '/work/marriott-hotels-social-media-presence',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67eff999be0e01f91fd4c052_Maa.svg",
      logoClass: "box-border max-h-12 max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f75707c74b75ff9df4a4bc_marr.avif",
      backgroundClass: "absolute box-border h-full max-w-full object-cover w-full z-0 inset-[0%]",
      metrics: [
        { value: '1.1M', label: 'Reach' },
        { value: '1.3M', label: 'Impressions' },
        { value: '997K', label: 'Engagement' }
      ]
    },
    {
      id: 'selfie-leslie-2',
      href: '/work/selfie-leslie-global-digital-strategy',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67c969aef0a51fe4474a05f1_67c58c3c842d2081688283bd_Etymon.svg",
      logoClass: "box-border max-w-[40%] w-full mx-auto md:max-w-[30%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67c9845cdaec6e59d52b2c8d_0X0A1257.jpg",
      backgroundClass: "absolute box-border h-full max-w-full object-cover object-[50%_0%] w-full z-0 inset-[0%] md:object-[50%_50%]",
      metrics: [
        { value: '8.9x', label: 'ROAS\nMultiplied', labelBreak: true },
        { value: '1,800', label: 'Restaurant Bookings', labelBreak: true },
        { value: '$395K', label: 'Added Monthly' }
      ]
    },
    {
      id: 'my-sky-sunday',
      href: '/work/my-sky-sunday',
      logo: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f00dd39c33dd6091541dbf_Patr.svg",
      logoClass: "box-border max-h-12 max-w-[40%] w-full mx-auto md:max-w-[50%]",
      backgroundImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67f00db087df84d98861cd4c_Patron.jpg",
      backgroundClass: "absolute box-border h-full max-w-full object-cover w-full z-0 inset-[0%]",
      metrics: [
        { value: '9m', label: 'Impressions' },
        { value: '237k', label: 'Engagements' },
        { value: '115', label: 'Assets' }
      ]
    }
  ] as const
} as const; 