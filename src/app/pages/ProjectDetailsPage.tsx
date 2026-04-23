import { Link, Navigate, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Gift,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { ReservationForm } from "../components/ReservationForm";
import {
  officialEmail,
  officialEmailHref,
  officialPhoneDisplay,
  officialPhoneTel,
} from "../config/contact";
import { getProjectBySlug } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";
import type { Language } from "../i18n/translations";

const sevenBMedicalContent = {
  medicalHub: {
    eyebrow: { en: "Medical Hub", ar: "مركز طبي متكامل" },
    title: {
      en: "A complete medical ecosystem built for doctors, operators, and investors.",
      ar: "منظومة طبية متكاملة للأطباء والمشغلين والمستثمرين.",
    },
    description: {
      en: "Seven B Mall is positioned to become a strong healthcare destination with clinics, labs, and supporting services in one accessible commercial address. The mix creates daily footfall, referral potential, and a practical business opportunity for medical professionals.",
      ar: "يتمركز Seven B Mall كوجهة رعاية صحية قوية تجمع العيادات والمعامل والخدمات الداعمة في عنوان تجاري سهل الوصول، بما يخلق حركة يومية وفرص إحالة وقيمة تشغيلية واضحة للأطباء.",
    },
    stats: [
      { value: "32", label: { en: "Medical Clinics", ar: "عيادة طبية" } },
      { value: "1", label: { en: "Analysis Lab", ar: "معمل تحاليل" } },
      { value: "1", label: { en: "Radiology Lab Available", ar: "معمل أشعة متاح" } },
    ],
  },
  specialties: {
    eyebrow: { en: "Medical Specialties", ar: "التخصصات الطبية" },
    title: {
      en: "Clinic categories designed for a complete patient journey.",
      ar: "تخصصات عيادات مصممة لتجربة مريض متكاملة.",
    },
    items: [
      { en: "Dental", ar: "أسنان" },
      { en: "Physiotherapy", ar: "علاج طبيعي" },
      { en: "Cosmetic", ar: "تجميل" },
      { en: "Pediatrics", ar: "أطفال" },
      { en: "Gynecology", ar: "نساء وتوليد" },
      { en: "Dermatology", ar: "جلدية" },
      { en: "Orthopedics", ar: "عظام" },
      { en: "Internal Medicine", ar: "باطنة" },
      { en: "Cardiology", ar: "قلب" },
      { en: "Ophthalmology", ar: "عيون" },
    ],
  },
  location: {
    eyebrow: { en: "Strategic Location", ar: "موقع استراتيجي" },
    title: {
      en: "Connected to high-traffic destinations and daily movement routes.",
      ar: "قريب من وجهات وحركة يومية تدعم الإقبال المستمر.",
    },
    description: {
      en: "Located beside Nabaweya Mousa School, Seven B Mall offers 3 facades, high visibility, and a 2500 m² footprint. The project benefits from practical accessibility across residential, educational, club, airport, and new-city routes, helping clinics attract repeat visits and strong patient reach.",
      ar: "يقع Seven B Mall بجوار مدرسة نبوية موسى، مع 3 واجهات وظهور قوي ومساحة 2500 متر مربع. ويستفيد المشروع من سهولة الوصول من مناطق سكنية وتعليمية ونوادي ومطار ومدن جديدة، مما يدعم تكرار الزيارات ووصول العيادات لشريحة أوسع.",
    },
    features: [
      { en: "Beside Nabaweya Mousa School", ar: "بجوار مدرسة نبوية موسى" },
      { en: "3 facades", ar: "3 واجهات" },
      { en: "High visibility", ar: "ظهور قوي" },
      { en: "2500 m² project footprint", ar: "مساحة 2500 متر مربع" },
    ],
    distances: [
      { time: "3 min", place: { en: "Metro", ar: "المترو" } },
      { time: "7 min", place: { en: "Sporting Club", ar: "Sporting Club" } },
      { time: "15 min", place: { en: "BUE", ar: "BUE" } },
      { time: "15 min", place: { en: "Suez Road", ar: "طريق السويس" } },
      { time: "18 min", place: { en: "Madinaty", ar: "مدينتي" } },
      { time: "20 min", place: { en: "New Cairo", ar: "القاهرة الجديدة" } },
      { time: "25 min", place: { en: "New Capital", ar: "العاصمة الإدارية" } },
      { time: "15 min", place: { en: "Airport", ar: "المطار" } },
    ],
  },
  offers: {
    eyebrow: { en: "Launch Offers", ar: "عروض الإطلاق" },
    title: {
      en: "A stronger start for your clinic investment.",
      ar: "بداية أقوى لاستثمار عيادتك.",
    },
    description: {
      en: "Seven B supports medical investors beyond the unit itself, helping doctors launch faster with financing, licensing support, clinic systems, and digital patient acquisition tools.",
      ar: "يدعم Seven B المستثمر الطبي بما يتجاوز الوحدة، من خلال تسهيلات وتمويل وأنظمة تشغيل وأدوات رقمية تساعد الطبيب على الانطلاق أسرع.",
    },
    items: [
      { en: "Free licensing costs", ar: "تكاليف الترخيص مجانًا" },
      {
        en: "Medical equipment financing up to 5,000,000 EGP",
        ar: "تمويل أجهزة طبية حتى 5,000,000 جنيه",
      },
      { en: "Free clinic management system", ar: "نظام إدارة عيادة مجاني" },
      { en: "Patient booking system", ar: "نظام حجز للمرضى" },
      { en: "Doctor profile creation", ar: "إنشاء ملف الطبيب" },
    ],
  },
  facilities: {
    eyebrow: { en: "Facilities & Surroundings", ar: "الخدمات والمحيط" },
    title: {
      en: "Designed to support patient comfort and commercial activity.",
      ar: "تصميم يدعم راحة المرضى والحركة التجارية.",
    },
    items: [
      { en: "Escalators", ar: "سلالم كهربائية" },
      { en: "Elevators", ar: "مصاعد" },
      { en: "Green areas", ar: "مساحات خضراء" },
      { en: "Café with 1300m garden", ar: "كافيه بحديقة 1300 متر" },
      { en: "Car showroom with 1200m parking", ar: "معرض سيارات بباركينج 1200 متر" },
      { en: "Optical store", ar: "محل نظارات" },
      { en: "Medical supplies store", ar: "محل مستلزمات طبية" },
    ],
  },
  delivery: {
    eyebrow: { en: "Delivery Timeline", ar: "موعد التسليم" },
    title: { en: "Delivery in 8 months.", ar: "التسليم خلال 8 أشهر." },
    description: {
      en: "A near-term delivery window creates urgency for doctors and investors who want to secure a clinic before availability tightens.",
      ar: "مدة تسليم قريبة تخلق فرصة مهمة للأطباء والمستثمرين لحجز عيادة قبل انخفاض الوحدات المتاحة.",
    },
  },
};

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const { dictionary, language, dir } = useLanguage();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isSevenB = project.slug === "seven-b-mall";
  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const medical = sevenBMedicalContent;

  return (
    <div className="bg-white text-[#111111]">
      <PageHero
        eyebrow={project.shortLabel[language]}
        title={isSevenB ? "Seven B Mall" : "El-Shabrawy Mall"}
        description={project.cardDescription[language]}
        image={project.heroImage}
        badge={isSevenB ? dictionary.projectDetails.flagshipBadge : undefined}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A96E] bg-white px-6 py-3 text-sm uppercase tracking-[0.28em] text-[#9d7529] shadow-sm transition-colors hover:bg-[#C9A96E] hover:text-white"
          >
            <BackIcon className="h-4 w-4" />
            {dictionary.common.backToProjects}
          </Link>
          <a
            href={`tel:${officialPhoneTel}`}
            className="rounded-full bg-[#C9A96E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)]"
          >
            {dictionary.common.contactSales}
          </a>
        </div>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.projectDetails.overview}
            </p>
            <p className="mt-6 text-base leading-8 text-[#666666]">
              {project.overview[language]}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#e5e5e5] bg-[#f7f7f7] p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#8a8377]">
                  {dictionary.common.projectType}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {project.projectType[language]}
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[#e5e5e5] bg-[#f7f7f7] p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#8a8377]">
                  {dictionary.common.location}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {project.location[language]}
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.common.progress}
            </p>
            <div className="mt-6 flex items-end justify-between gap-4">
              <h2 className="text-5xl font-serif text-[#111111]">{project.progressValue}%</h2>
              <span className="text-sm uppercase tracking-[0.28em] text-[#8a8377]">
                {isSevenB ? dictionary.common.flagshipProject : dictionary.projectsPage.eyebrow}
              </span>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e5e5e5]">
              <div
                className="h-full rounded-full bg-[#C9A96E]"
                style={{ width: `${project.progressValue}%` }}
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-[#666666]">
              {project.progressText[language]}
            </p>
            <p className="mt-10 text-sm leading-7 text-[#8a8377]">
              {dictionary.projectDetails.videoNote}
            </p>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.projectDetails.highlights}
            </p>
            <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
              {project.ctaTitle[language]}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={highlight[language]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="rounded-[1.15rem] border border-[#e5e5e5] bg-white p-4 text-xs leading-6 text-[#666666] shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.5rem] md:p-5 md:text-sm md:leading-7 md:shadow-[0_12px_30px_rgba(17,17,17,0.05)]"
              >
                {highlight[language]}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.projectDetails.categories}
            </p>
            <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
              {project.projectType[language]}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {project.unitTypes.map((unit) => (
              <div
                key={unit[language]}
                className="rounded-[1.15rem] border border-[#e5e5e5] bg-white p-4 text-xs uppercase leading-6 tracking-[0.14em] text-[#555555] shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.5rem] md:p-6 md:text-sm md:tracking-[0.28em] md:shadow-[0_14px_35px_rgba(17,17,17,0.06)]"
              >
                {unit[language]}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.projectDetails.gallery}
            </p>
            <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
              {project.ctaDescription[language]}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={`${project.slug}-gallery-${index}`}
                className={`overflow-hidden rounded-[1.5rem] border border-[#e5e5e5] shadow-[0_18px_45px_rgba(17,17,17,0.08)] ${
                  project.gallery.length % 2 === 1 && index === project.gallery.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${project.slug} gallery ${index + 1}`}
                  className="h-64 w-full object-cover md:h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isSevenB ? (
        <>
          <section className="py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
              >
                <Stethoscope className="h-10 w-10 text-[#C9A96E]" />
                <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#9d7529]">
                  {medical.medicalHub.eyebrow[language]}
                </p>
                <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
                  {medical.medicalHub.title[language]}
                </h2>
                <p className="mt-6 text-base leading-8 text-[#666666]">
                  {medical.medicalHub.description[language]}
                </p>
              </motion.div>

              <div className="grid grid-cols-3 gap-3 md:gap-5 lg:grid-cols-1">
                {medical.medicalHub.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label[language]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    className="rounded-[1.1rem] border border-[#e5e5e5] bg-[#f7f7f7] p-3 shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.75rem] md:p-6"
                  >
                    <p className="text-3xl font-serif text-[#111111] md:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.12em] text-[#666666] md:mt-3 md:text-sm md:tracking-[0.28em]">
                      {stat.label[language]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
                  {medical.specialties.eyebrow[language]}
                </p>
                <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
                  {medical.specialties.title[language]}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
                {medical.specialties.items.map((specialty, index) => (
                  <motion.div
                    key={specialty[language]}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.03 }}
                    className="rounded-[1.1rem] border border-[#e5e5e5] bg-white p-4 text-xs font-semibold leading-6 text-[#333333] shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.4rem] md:p-5 md:text-sm md:shadow-[0_12px_30px_rgba(17,17,17,0.05)]"
                  >
                    <HeartPulse className="mb-3 h-4 w-4 text-[#C9A96E] md:mb-4 md:h-5 md:w-5" />
                    {specialty[language]}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
              <div className="space-y-5">
                <MapPin className="h-10 w-10 text-[#C9A96E]" />
                <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
                  {medical.location.eyebrow[language]}
                </p>
                <h2 className="text-4xl font-serif text-[#111111] md:text-5xl">
                  {medical.location.title[language]}
                </h2>
                <p className="text-base leading-8 text-[#666666]">
                  {medical.location.description[language]}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {medical.location.features.map((feature) => (
                    <div
                      key={feature.en}
                      className="rounded-[1.25rem] border border-[#e5e5e5] bg-[#f7f7f7] p-4 text-sm font-semibold text-[#333333]"
                    >
                      {feature[language]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4">
                {medical.location.distances.map((distance) => (
                  <div
                    key={`${distance.time}-${distance.place.en}`}
                    className="rounded-[1.1rem] border border-[#e5e5e5] bg-white p-3 shadow-[0_10px_24px_rgba(17,17,17,0.05)] sm:p-4 lg:rounded-[1.5rem] lg:p-5 lg:shadow-[0_14px_35px_rgba(17,17,17,0.06)]"
                  >
                    <p className="text-xl font-serif text-[#111111] sm:text-2xl lg:text-3xl">
                      {distance.time}
                    </p>
                    <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.12em] text-[#666666] sm:text-xs lg:text-sm lg:tracking-[0.24em]">
                      {distance.place[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-[2.25rem] border border-[#d9c28d] bg-white shadow-[0_24px_70px_rgba(201,169,110,0.16)]">
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-[linear-gradient(135deg,#fffaf0,#ffffff)] p-8 text-[#1a1a1a] md:p-10">
                    <Gift className="h-10 w-10 text-[#C9A96E]" />
                    <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#9d7529]">
                      {medical.offers.eyebrow[language]}
                    </p>
                    <h2 className="mt-4 text-4xl font-serif md:text-5xl">
                      {medical.offers.title[language]}
                    </h2>
                    <p className="mt-6 text-base leading-8 text-[#6b6b6b]">
                      {medical.offers.description[language]}
                    </p>
                    <Link
                      to="#reservation"
                      className="mt-8 inline-flex rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)]"
                    >
                      {dictionary.common.reserveNow}
                    </Link>
                  </div>
                  <div className="grid gap-4 p-6 md:p-8">
                    {medical.offers.items.map((offer, index) => (
                      <motion.div
                        key={offer[language]}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, delay: index * 0.04 }}
                        className="flex items-start gap-4 rounded-[1.4rem] border border-[#e5e5e5] bg-[#f7f7f7] p-5"
                      >
                        <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#C9A96E]" />
                        <p className="text-sm font-semibold leading-7 text-[#333333]">
                          {offer[language]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
                  {medical.facilities.eyebrow[language]}
                </p>
                <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
                  {medical.facilities.title[language]}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {medical.facilities.items.map((facility) => (
                  <div
                    key={facility[language]}
                    className="rounded-[1.1rem] border border-[#e5e5e5] bg-white p-4 shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.5rem] md:p-6 md:shadow-[0_14px_35px_rgba(17,17,17,0.06)]"
                  >
                    <Building2 className="mb-4 h-5 w-5 text-[#C9A96E] md:mb-5 md:h-6 md:w-6" />
                    <p className="text-xs uppercase leading-6 tracking-[0.12em] text-[#555555] md:text-sm md:tracking-[0.22em]">
                      {facility[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-[2.25rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_24px_70px_rgba(17,17,17,0.10)] md:p-12">
                <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A96E] text-white">
                      <Clock3 className="h-9 w-9" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[#9d7529]">
                        {medical.delivery.eyebrow[language]}
                      </p>
                      <h2 className="mt-3 text-4xl font-serif text-[#111111]">
                        {medical.delivery.title[language]}
                      </h2>
                    </div>
                  </div>
                  <p className="text-base leading-8 text-[#666666]">
                    {medical.delivery.description[language]}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <section id="reservation" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReservationForm
            projectName={isSevenB ? "Seven B Mall" : "El-Shabrawy Mall"}
            isFlagship={isSevenB}
            includeSpecialty={isSevenB}
          />
        </div>
      </section>

      {isSevenB ? (
        <section className="border-t border-[#e5e5e5] bg-[#f7f7f7] py-16">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <a
              href={`tel:${officialPhoneTel}`}
              className="flex items-center gap-4 rounded-[1.5rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_14px_35px_rgba(17,17,17,0.06)]"
            >
              <Phone className="h-6 w-6 text-[#C9A96E]" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a8377]">Phone</p>
                <p className="mt-2 text-lg font-semibold text-[#111111]">
                  {officialPhoneDisplay}
                </p>
              </div>
            </a>
            <a
              href={officialEmailHref}
              className="flex items-center gap-4 rounded-[1.5rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_14px_35px_rgba(17,17,17,0.06)]"
            >
              <Mail className="h-6 w-6 text-[#C9A96E]" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a8377]">Email</p>
                <p className="mt-2 text-lg font-semibold text-[#111111]">{officialEmail}</p>
              </div>
            </a>
          </div>
        </section>
      ) : null}
    </div>
  );
}
