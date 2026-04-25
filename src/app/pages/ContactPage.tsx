import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import {
  officialEmailHref,
  officialPhoneTel,
  officialWhatsAppBaseUrl,
} from "../config/contact";
import { sharedPageHeroImage } from "../config/media";
import { useLanguage } from "../i18n/LanguageProvider";

export function ContactPage() {
  const { dictionary } = useLanguage();
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dictionary.contact.mapLabel)}`;

  const contactCards = [
    { icon: MapPin, title: dictionary.contact.addressTitle, body: dictionary.contact.address },
    { icon: Phone, title: dictionary.contact.phoneTitle, body: dictionary.contact.phone, href: `tel:${officialPhoneTel}` },
    { icon: Mail, title: dictionary.contact.emailTitle, body: dictionary.contact.email, href: officialEmailHref },
  ];

  return (
    <div className="bg-white text-[#111111]">
      <PageHero
        eyebrow={dictionary.contact.eyebrow}
        title={dictionary.contact.title}
        description={dictionary.contact.description}
        image={sharedPageHeroImage}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {contactCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-[1.8rem] border border-[#e5e5e5] bg-white p-7 shadow-[0_18px_45px_rgba(17,17,17,0.07)]"
            >
              <card.icon className="h-8 w-8 text-[#C9A96E]" />
              <h2 className="mt-6 text-2xl font-serif text-[#111111]">{card.title}</h2>
              {card.href ? (
                <a href={card.href} className="mt-4 block text-sm leading-7 text-[#666666] hover:text-[#9d7529]">
                  {card.body}
                </a>
              ) : (
                <p className="mt-4 text-sm leading-7 text-[#666666]">{card.body}</p>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] bg-[#f7f7f7] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.contact.hoursTitle}
            </p>
            <h2 className="mt-5 text-4xl font-serif text-[#111111]">{dictionary.contact.ctaTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#666666]">
              {dictionary.contact.ctaBody}
            </p>
            <p className="mt-8 text-sm text-[#777777]">{dictionary.contact.hours}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects/seven-b-mall#reservation"
                className="rounded-full bg-[#C9A96E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_32px_rgba(201,169,110,0.24)]"
              >
                {dictionary.common.reserveNow}
              </Link>
              <a
                href={officialWhatsAppBaseUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#C9A96E] bg-white px-7 py-4 text-sm uppercase tracking-[0.28em] text-[#9d7529] transition-colors hover:bg-[#C9A96E] hover:text-white"
              >
                {dictionary.common.whatsappContinue}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9d7529]">
              {dictionary.common.strategicAddress}
            </p>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex min-h-80 items-center justify-center rounded-[1.5rem] border border-[#e5e5e5] bg-[#f7f7f7] p-8 text-center text-sm leading-8 text-[#666666] transition-colors hover:border-[#C9A96E] hover:text-[#9d7529]"
            >
              {dictionary.contact.mapLabel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
