import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Building2, CircleParking, Landmark, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { officialPhoneTel } from "../config/contact";
import { homeHeroSlides } from "../config/media";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";

export function HomePage() {
  const { dictionary, language } = useLanguage();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const sevenBProject = projects[0];
  const secondaryProject = projects[1];
  const credibilityIcons = [Building2, Landmark, Sparkles];
  const numbersItems = dictionary.home.numbersItems;
  const currentHeroSlide = homeHeroSlides[activeHeroSlide];
  const sevenBFeatures = [
    { icon: Building2, label: dictionary.home.heroStats[0] },
    { icon: Landmark, label: dictionary.home.heroStats[1] },
    { icon: CircleParking, label: dictionary.home.heroStats[2] },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % homeHeroSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-white text-[#111111]">
      <section className="relative isolate overflow-hidden bg-[#111111] pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover md:hidden"
              style={{
                backgroundImage: `url("${currentHeroSlide.image}")`,
                backgroundPosition: currentHeroSlide.mobilePosition,
              }}
              aria-label={currentHeroSlide.label}
            />
            <div
              className="absolute inset-0 hidden bg-cover md:block"
              style={{
                backgroundImage: `url("${currentHeroSlide.image}")`,
                backgroundPosition: currentHeroSlide.position,
              }}
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.64),rgba(17,17,17,0.36),rgba(17,17,17,0.08)),linear-gradient(0deg,rgba(17,17,17,0.22),rgba(17,17,17,0.02))]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-8 px-4 py-10 sm:px-6 md:min-h-[calc(100vh-6rem)] md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col justify-end pb-12 md:justify-center md:pb-0"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#f1d28a]">
              {dictionary.home.heroEyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-serif tracking-tight text-white sm:text-5xl md:text-7xl">
              {dictionary.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/84 sm:text-base md:mt-6 md:text-lg md:leading-8">
              {dictionary.home.heroDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <Link
                to="/projects/seven-b-mall"
                className="rounded-full bg-[#C9A96E] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)] transition-transform hover:-translate-y-0.5 md:px-7 md:py-4 md:text-sm md:tracking-[0.28em]"
              >
                {dictionary.common.viewSevenB}
              </Link>
              <Link
                to="/projects/seven-b-mall#reservation"
                className="rounded-full border border-white/70 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur-sm transition-colors hover:border-[#f1d28a] hover:text-[#f1d28a] md:px-7 md:py-4 md:text-sm md:tracking-[0.28em]"
              >
                {dictionary.common.reserveNow}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/70 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white backdrop-blur-sm transition-colors hover:border-[#f1d28a] hover:text-[#f1d28a] md:px-7 md:py-4 md:text-sm md:tracking-[0.28em]"
              >
                {dictionary.common.contactUs}
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2">
              {homeHeroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveHeroSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeHeroSlide ? "w-10 bg-[#f1d28a]" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="hidden self-end rounded-[2rem] border border-white/25 bg-white/12 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.18)] backdrop-blur-xl lg:block"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  {dictionary.common.flagshipProject}
                </p>
                <h2 className="mt-3 text-3xl font-serif text-white">Seven B Mall</h2>
              </div>
              <span className="rounded-full border border-[#f1d28a]/45 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#f1d28a] shadow-sm">
                {sevenBProject.progressValue}%
              </span>
            </div>
            <div className="space-y-4">
              {sevenBFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-start gap-4 rounded-[1.25rem] border border-white/16 bg-white/10 p-4"
                >
                  <feature.icon className="mt-1 h-5 w-5 text-[#f1d28a]" />
                  <p className="text-sm leading-7 text-white/78">{feature.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#baa270] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.06))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              {dictionary.home.numbersTitle}
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {numbersItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/18 bg-white/6 px-6 py-10 text-center shadow-[0_18px_45px_rgba(17,17,17,0.08)] backdrop-blur-[2px]"
              >
                <p className="text-5xl font-semibold leading-none text-white md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-4 text-base font-medium text-white/92 md:text-lg">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.home.sevenBLabel}
            </p>
            <h2 className="text-4xl font-serif text-[#111111] md:text-5xl">
              {dictionary.home.sevenBSpotlightTitle}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#666666]">
              {dictionary.home.sevenBSpotlightDescription}
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {dictionary.home.sevenBHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-[#e5e5e5] bg-white p-4 text-xs leading-6 text-[#666666] shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.5rem] md:p-5 md:text-sm md:leading-7 md:shadow-[0_12px_30px_rgba(17,17,17,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white shadow-[0_18px_45px_rgba(17,17,17,0.08)]"
          >
            <img
              src={sevenBProject.image}
              alt="Seven B Mall"
              className="h-64 w-full object-cover sm:h-72"
            />
            <div className="space-y-4 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a8377]">
                {dictionary.common.investmentOpportunity}
              </p>
              <p className="text-2xl font-serif text-[#111111]">
                {sevenBProject.overview[language]}
              </p>
              <div className="h-2 overflow-hidden rounded-full bg-[#e5e5e5]">
                <div
                  className="h-full rounded-full bg-[#C9A96E]"
                  style={{ width: `${sevenBProject.progressValue}%` }}
                />
              </div>
              <p className="text-sm leading-7 text-[#666666]">
                {sevenBProject.progressText[language]}
              </p>
              <Link
                to="/projects/seven-b-mall"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#9d7529]"
              >
                {dictionary.common.viewProject}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.home.secondaryLabel}
            </p>
            <h2 className="text-4xl font-serif text-[#111111]">{dictionary.home.secondaryTitle}</h2>
            <p className="text-base leading-8 text-[#666666]">
              {dictionary.home.secondaryDescription}
            </p>
            <Link
              to={`/projects/${secondaryProject.slug}`}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#9d7529]"
            >
              {dictionary.common.viewProject}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectCard project={secondaryProject} />
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.home.credibilityTitle}
            </p>
            <h2 className="text-4xl font-serif text-[#111111] md:text-5xl">
              {dictionary.home.journeyTitle}
            </h2>
            <p className="text-base leading-8 text-[#666666]">
              {dictionary.home.journeyDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {dictionary.home.credibilityItems.map((item, index) => {
              const Icon = credibilityIcons[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[1.2rem] border border-[#e5e5e5] bg-white p-4 shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.8rem] md:p-7 md:shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
                >
                  <Icon className="h-6 w-6 text-[#C9A96E] md:h-8 md:w-8" />
                  <h3 className="mt-4 text-xl font-serif text-[#111111] md:mt-6 md:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#666666] md:mt-4 md:text-sm md:leading-7">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.25rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_24px_70px_rgba(17,17,17,0.10)] md:p-12">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl font-serif text-[#111111] md:text-5xl">
                {dictionary.home.finalCtaTitle}
              </h2>
              <p className="text-base leading-8 text-[#666666]">
                {dictionary.home.finalCtaDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects/seven-b-mall#reservation"
                  className="rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)]"
                >
                  {dictionary.common.reserveNow}
                </Link>
                <a
                  href={`tel:${officialPhoneTel}`}
                  className="rounded-full border border-[#C9A96E] bg-white px-7 py-4 text-sm uppercase tracking-[0.28em] text-[#9d7529] transition-colors hover:bg-[#C9A96E] hover:text-white"
                >
                  {dictionary.common.contactSales}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
