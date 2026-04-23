import {
  sevenBGalleryImages,
  sevenBHeroImage,
  shabrawyGalleryImages,
  shabrawyHeroImage,
} from "../config/media";
import type { Language } from "../i18n/translations";

type LocalizedText = Record<Language, string>;

export type Project = {
  slug: string;
  featured: boolean;
  image: string;
  heroImage: string;
  gallery: string[];
  progressValue: number;
  projectType: LocalizedText;
  location: LocalizedText;
  cardDescription: LocalizedText;
  shortLabel: LocalizedText;
  overview: LocalizedText;
  highlights: LocalizedText[];
  unitTypes: LocalizedText[];
  progressText: LocalizedText;
  ctaTitle: LocalizedText;
  ctaDescription: LocalizedText;
};

export const projects: Project[] = [
  {
    slug: "seven-b-mall",
    featured: true,
    image: sevenBHeroImage,
    heroImage: sevenBHeroImage,
    gallery: [...sevenBGalleryImages],
    progressValue: 72,
    projectType: {
      en: "Mixed-Use Commercial Development",
      ar: "مشروع تجاري متعدد الاستخدامات",
    },
    location: {
      en: "Strategic commercial corridor, Cairo",
      ar: "موقع تجاري استراتيجي، القاهرة",
    },
    cardDescription: {
      en: "The flagship destination by Gold City Developments, curated for retail, clinics, offices, and food concepts.",
      ar: "الوجهة الرئيسية من جولد سيتي، مصممة للمحال والعيادات والمكاتب وأنشطة المأكولات والمشروبات.",
    },
    shortLabel: {
      en: "Flagship Project",
      ar: "المشروع الرئيسي",
    },
    overview: {
      en: "Seven B Mall is conceived as a premium mixed-use commercial address that brings together visibility, accessibility, and a strong tenant mix. The project is designed to attract brands, professionals, healthcare operators, and food concepts within one polished destination.",
      ar: "تم تصميم Seven B Mall كعنوان تجاري فاخر يجمع بين الظهور القوي وسهولة الوصول وتنوع الأنشطة. ويستهدف المشروع العلامات التجارية والأنشطة الطبية والمكاتب ومفاهيم المأكولات داخل وجهة واحدة راقية.",
    },
    highlights: [
      {
        en: "Strategic location with premium frontage and strong exposure",
        ar: "موقع استراتيجي بواجهة مميزة وظهور قوي",
      },
      {
        en: "Retail shops, medical clinics, office units, and food & beverage mix",
        ar: "تنوع بين المحال والعيادات والوحدات الإدارية وأنشطة المأكولات والمشروبات",
      },
      {
        en: "Basement parking and circulation designed for smooth visitor flow",
        ar: "بدروم انتظار وحركة داخلية مصممة لانسيابية الزوار",
      },
      {
        en: "Modern construction quality aligned with premium commercial positioning",
        ar: "جودة تنفيذ حديثة متوافقة مع التموضع التجاري الراقي",
      },
    ],
    unitTypes: [
      {
        en: "Retail Shop",
        ar: "محل تجاري",
      },
      {
        en: "Medical Clinic",
        ar: "عيادة طبية",
      },
      {
        en: "Office Unit",
        ar: "وحدة إدارية",
      },
      {
        en: "Food & Beverage",
        ar: "مطاعم ومشروبات",
      },
    ],
    progressText: {
      en: "Construction and commercial positioning are advancing with sales-focused momentum.",
      ar: "تتقدم أعمال التنفيذ والتموضع التجاري بوتيرة تدعم المبيعات والتحويل.",
    },
    ctaTitle: {
      en: "Reserve your place in Seven B Mall.",
      ar: "احجز مكانك في Seven B Mall",
    },
    ctaDescription: {
      en: "Submit your inquiry and continue immediately with WhatsApp or email follow-up.",
      ar: "أرسل طلبك الآن وانتقل مباشرة إلى المتابعة عبر واتساب أو البريد الإلكتروني.",
    },
  },
  {
    slug: "el-shabrawy-mall",
    featured: false,
    image: shabrawyHeroImage,
    heroImage: shabrawyHeroImage,
    gallery: [...shabrawyGalleryImages],
    progressValue: 100,
    projectType: {
      en: "Delivered Commercial Project",
      ar: "مشروع تجاري تم تسليمه",
    },
    location: {
      en: "High-demand local service district",
      ar: "منطقة خدمية ذات طلب مرتفع",
    },
    cardDescription: {
      en: "A completed project that demonstrates Gold City Developments' execution capability and forms the foundation for the more advanced Seven B Mall vision.",
      ar: "مشروع مكتمل يوضح قدرة جولد سيتي على التنفيذ والتسليم، ويمثل الأساس الذي تطورت منه رؤية Seven B Mall الأكثر تقدمًا.",
    },
    shortLabel: {
      en: "Delivered Project",
      ar: "مشروع تم تسليمه",
    },
    overview: {
      en: "El-Shabrawy Mall was the starting point for Gold City Developments' commercial journey. It is now presented as previous work and proof of execution, while Seven B Mall represents a more advanced development level with higher quality, stronger planning, and a more curated tenant mix.",
      ar: "كان El-Shabrawy Mall نقطة البداية في رحلة جولد سيتي التجارية، ويتم تقديمه الآن كسابقة أعمال ودليل تنفيذ، بينما يمثل Seven B Mall مستوى أكثر تطورًا من حيث الجودة والتخطيط وتنسيق مزيج الأنشطة.",
    },
    highlights: [
      {
        en: "Designed for sustained local retail demand",
        ar: "مصمم لخدمة الطلب المحلي المستمر على التجزئة",
      },
      {
        en: "Balanced mix of commercial and office spaces",
        ar: "مزيج متوازن بين الوحدات التجارية والإدارية",
      },
      {
        en: "Clear circulation and efficient unit planning",
        ar: "حركة داخلية واضحة وتخطيط فعال للوحدات",
      },
      {
        en: "A delivered foundation for the more advanced Seven B Mall model",
        ar: "أساس تم تسليمه للنموذج الأكثر تطورًا في Seven B Mall",
      },
    ],
    unitTypes: [
      {
        en: "Retail Shop",
        ar: "محل تجاري",
      },
      {
        en: "Office Unit",
        ar: "وحدة إدارية",
      },
      {
        en: "Service Unit",
        ar: "وحدة خدمية",
      },
    ],
    progressText: {
      en: "Completed and delivered as a proof point for Gold City Developments' execution track record.",
      ar: "تم اكتماله وتسليمه كسابقة أعمال تدعم سجل تنفيذ جولد سيتي.",
    },
    ctaTitle: {
      en: "A delivered project that proves execution.",
      ar: "مشروع تم تسليمه ويثبت القدرة على التنفيذ",
    },
    ctaDescription: {
      en: "Contact the team to learn more about El-Shabrawy Mall and portfolio fit.",
      ar: "تواصل مع الفريق لمعرفة المزيد عن El-Shabrawy Mall ومكانه داخل المحفظة.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
