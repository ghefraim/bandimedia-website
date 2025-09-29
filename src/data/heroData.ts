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
    firstPart: 'SPUNEM POVEȘTI CARE NU',
    secondPart: 'POT FI TRECUTE CU VEDEREA',
  },
  subtitle: 'AGENȚIE DE SOCIAL MEDIA MARKETING',
  description: `Suntem echipa care transformă ideile în campanii care se fac văzute, auzite și simțite. Creăm conținut care stârnește reacții, gestionăm conturi de social media care cresc comunități și punem brandurile în lumina pe care o merită. Fiecare postare e o poveste, iar fiecare poveste îți aduce publicul mai aproape.`
} as const; 