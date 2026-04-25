import { Link } from "react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { officialEmailHref, officialPhoneTel } from "../config/contact";
import { useLanguage } from "../i18n/LanguageProvider";

export function Footer() {
  const { dictionary } = useLanguage();

  return (
    <footer className="border-t border-[#e5e5e5] bg-white text-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-serif tracking-tight">
                {dictionary.brand.name}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#666666]">
              {dictionary.brand.tagline}
            </p>
            <Link
              to="/projects/seven-b-mall"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[#9d7529] hover:text-[#7c5c1d]"
            >
              {dictionary.common.reserveNow}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.35em] text-[#777777]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#666666]">
              <li><Link to="/">{dictionary.nav.home}</Link></li>
              <li><Link to="/about">{dictionary.nav.about}</Link></li>
              <li><Link to="/projects">{dictionary.nav.projects}</Link></li>
              <li><Link to="/contact">{dictionary.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.35em] text-[#777777]">
              Flagship & Delivered
            </h4>
            <ul className="space-y-3 text-sm text-[#666666]">
              <li><Link to="/projects/seven-b-mall">Seven B Mall</Link></li>
              <li><Link to="/projects/el-shabrawy-mall">El-Shabrawy Mall · Delivered</Link></li>
              <li><Link to="/projects">{dictionary.common.exploreProjects}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.35em] text-[#777777]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#666666]">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#C9A96E]" />
                <span>{dictionary.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#666666]">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#C9A96E]" />
                <a href={`tel:${officialPhoneTel}`} className="hover:text-[#9d7529]">
                  {dictionary.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#666666]">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#C9A96E]" />
                <a href={officialEmailHref} className="hover:text-[#9d7529]">
                  {dictionary.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#e5e5e5] pt-8 text-center">
          <p className="text-sm text-[#777777]">
            © {new Date().getFullYear()} {dictionary.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
