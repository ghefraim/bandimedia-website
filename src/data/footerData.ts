export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export const footerData = {
  socialLinks: [
    { id: 'instagram', label: 'Instagram', href: "https://www.instagram.com/bandimedia/", icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6776d4ace386e2b27d197df4_Instagram.svg" },
    { id: 'linkedin', label: 'Linkedin', href: "https://www.linkedin.com/company/bandi-media/", icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6776d4e555b9c18a7922b3c3_LinkedIn.svg" },
    // { id: 'youtube', label: 'Youtube', href: "https://www.youtube.com/@bandimedia", icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/6776d4e5b68313349fd4b4d9_Youtube.svg" },
    { id: 'tiktok', label: 'Tiktok', href: "https://www.tiktok.com/@bandimedia", icon: "https://c.animaapp.com/mdnaiz9v1SsCjN/assets/679c67e077e9c706de5aad97_Tik.svg" }
  ] as const
} as const; 