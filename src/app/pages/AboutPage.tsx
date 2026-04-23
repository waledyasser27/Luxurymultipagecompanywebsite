import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { sharedPageHeroImage } from "../config/media";
import { useLanguage } from "../i18n/LanguageProvider";

export function AboutPage() {
  const { dictionary } = useLanguage();

  return (
    <div className="bg-white text-[#111111]">
      <PageHero
        eyebrow={dictionary.about.eyebrow}
        title={dictionary.about.title}
        description={dictionary.about.intro}
        image={sharedPageHeroImage}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:gap-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: dictionary.about.overviewTitle,
              body: dictionary.about.overviewBody,
            },
            {
              title: dictionary.about.visionTitle,
              body: dictionary.about.visionBody,
            },
            {
              title: dictionary.about.missionTitle,
              body: dictionary.about.missionBody,
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-[1.2rem] border border-[#e5e5e5] bg-white p-4 shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.8rem] md:p-7 md:shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
            >
              <h2 className="text-xl font-serif text-[#111111] md:text-3xl">{item.title}</h2>
              <p className="mt-3 text-xs leading-6 text-[#666666] md:mt-5 md:text-sm md:leading-8">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.about.valuesTitle}
            </p>
            <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
              {dictionary.about.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {dictionary.about.values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="rounded-[1.15rem] border border-[#e5e5e5] bg-white p-4 text-xs leading-6 text-[#666666] shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[1.5rem] md:p-5 md:text-sm md:leading-7 md:shadow-[0_12px_30px_rgba(17,17,17,0.05)]"
              >
                {value}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.about.growthTitle}
            </p>
            <h2 className="mt-4 text-4xl font-serif text-[#111111] md:text-5xl">
              {dictionary.about.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
            {dictionary.about.growthSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="rounded-[1.2rem] border border-[#e5e5e5] bg-white p-4 shadow-[0_10px_24px_rgba(17,17,17,0.05)] md:rounded-[2rem] md:p-7 md:shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#9d7529] md:text-xs md:tracking-[0.35em]">{step.year}</p>
                <h3 className="mt-4 text-xl font-serif text-[#111111] md:mt-5 md:text-2xl">{step.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#666666] md:mt-4 md:text-sm md:leading-7">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
