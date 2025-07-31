export interface HeroTitleBlock {
  readonly beforeImage?: string;
  readonly image?: string;
  readonly afterImage?: string;
  readonly secondImage?: string;
}

export const heroData = {
  titleBlocks: [
    {
      beforeImage: 'NEVER',
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef4a4378becf3627556de8_1.png"
    },
    {
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef4a437537013aa54aadc1_2.png",
      afterImage: 'DO',
      secondImage: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef4a43bd8869524e320399_3.png"
    },
    {
      image: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/67ef4a43fcb5ebdf151fb6cc_4.png",
      afterImage: 'NORMAL'
    }
  ] as const,
  
  mainTitle:{
    firstPart: 'VIZIUNEA VOASTRĂ',
    secondPart: 'MISIUNEA NOASTRĂ',
  },
  subtitle: 'AGENȚIE DE MARKETING & CONTENT',
  description: `We drive measurable results with data-driven, tech-powered campaigns to boost awareness, and skyrocket engagement for the world's leading brands.`
} as const; 