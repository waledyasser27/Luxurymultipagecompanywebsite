const imagePath = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;

export const goldCityHeroImage = imagePath("hero-gold-city.jpg.jpg");
export const sevenBHeroImage = imagePath("hero-seven-b-mall.jpg.jpg");
export const sevenBGalleryImages = [
  imagePath("7b-1.jpg"),
  imagePath("7b-2.jpg"),
  imagePath("7v-3.jpg"),
  imagePath("7b-4.jpg"),
  imagePath("7b-5.jpg"),
] as const;
export const shabrawyHeroImage = imagePath("sh1.png");
export const shabrawyGalleryImages = [
  imagePath("sh1.png"),
  imagePath("sh2.png"),
  imagePath("sh3.png"),
  imagePath("sh4.png"),
] as const;
export const brandLogoImage = imagePath(
  "ChatGPT Image Apr 23, 2026, 02_50_15 PM.png",
);

export const homeHeroSlides = [
  {
    id: "seven-b",
    image: sevenBHeroImage,
    label: "Seven B Mall",
    position: "center center",
    mobilePosition: "50% center",
  },
  {
    id: "shabrawy",
    image: shabrawyHeroImage,
    label: "El-Shabrawy Mall",
    position: "center center",
    mobilePosition: "50% center",
  },
] as const;

export const sharedPageHeroImage = goldCityHeroImage;
