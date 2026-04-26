import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Globe2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { officialPhoneDisplay, officialPhoneTel } from "../config/contact";
import { useLanguage } from "../i18n/LanguageProvider";

const navbarMarkSrc = "/images/ChatGPT%20Image%20Apr%2025,%202026,%2002_33_44%20PM.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { dictionary, dir, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: dictionary.nav.home },
    { path: "/about", label: dictionary.nav.about },
    { path: "/projects", label: dictionary.nav.projects },
    { path: "/contact", label: dictionary.nav.contact },
  ];

  const isActivePath = (path: string) =>
    path === "/"
      ? location.pathname === path
      : location.pathname === path || location.pathname.startsWith(`${path}/`);
  const isTransparent = !isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#e5e5e5] bg-white/95 shadow-[0_14px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-[10px]"
            >
              <img
                src={navbarMarkSrc}
                alt={dictionary.brand.name}
                className="h-[170px] w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className={`text-[18px] font-semibold leading-none tracking-[0.06em] transition-colors ${
                    isTransparent ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  GOLD CITY
                </span>
                <span
                  className={`mt-0.5 text-[9px] uppercase tracking-[0.4em] transition-colors ${
                    isTransparent ? "text-[#cccccc]" : "text-[#999999]"
                  }`}
                >
                  DEVELOPMENTS
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative px-4 py-2 text-sm uppercase tracking-[0.28em] transition-all duration-300 ${
                    isActivePath(link.path)
                      ? isTransparent
                        ? "text-[#f1d28a]"
                        : "text-[#9d7529]"
                      : isTransparent
                      ? "text-white/86 hover:text-white"
                      : "text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full origin-left transform transition-transform duration-300 ${
                      isActivePath(link.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } ${isTransparent ? "bg-[#f1d28a]" : "bg-[#C9A96E]"}`}
                  />
                </Link>
              ))}
              <button
                type="button"
                onClick={toggleLanguage}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition-colors ${
                  isTransparent
                    ? "border-white/30 bg-white/10 text-white hover:border-[#f1d28a] hover:text-[#f1d28a]"
                    : "border-[#e5e5e5] bg-white text-[#555555] hover:border-[#C9A96E] hover:text-[#9d7529]"
                }`}
              >
                <Globe2 className="h-4 w-4" />
                {dictionary.nav.language}
              </button>
              <a
                href={`tel:${officialPhoneTel}`}
                className={`hidden rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-colors xl:inline-flex ${
                  isTransparent
                    ? "border-white/45 text-white hover:border-[#f1d28a] hover:text-[#f1d28a]"
                    : "border-[#C9A96E] text-[#9d7529] hover:bg-[#C9A96E] hover:text-white"
                }`}
              >
                {officialPhoneDisplay}
              </a>
              <Link
                to="/projects/seven-b-mall#reservation"
                className="rounded-full bg-[#C9A96E] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_14px_30px_rgba(201,169,110,0.24)] transition-transform hover:-translate-y-0.5"
              >
                {dictionary.nav.reserve}
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 lg:hidden ${
                isTransparent ? "text-white" : "text-[#111111]"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 border-b border-[#e5e5e5] bg-white shadow-xl lg:hidden"
          >
            <div className="space-y-3 px-4 py-6" dir={dir}>
              <div className="mb-4 flex items-center justify-center gap-3">
                <img
                  src={navbarMarkSrc}
                  alt={dictionary.brand.name}
                  className="h-[170px] w-auto object-contain"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[18px] font-semibold leading-none tracking-[0.06em] text-[#1a1a1a]">
                    GOLD CITY
                  </span>
                  <span className="mt-0.5 text-[9px] uppercase tracking-[0.4em] text-[#999999]">
                    DEVELOPMENTS
                  </span>
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActivePath(link.path)
                      ? "bg-[#f4efe6] text-[#9d7529]"
                      : "text-[#555555] hover:bg-[#f7f7f7] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#e5e5e5] px-4 py-3 text-sm uppercase tracking-[0.25em] text-[#555555]"
              >
                <Globe2 className="h-4 w-4" />
                {dictionary.nav.language}
              </button>
              <Link
                to="/projects/seven-b-mall#reservation"
                className="block rounded-2xl bg-[#C9A96E] px-4 py-3 text-center text-sm uppercase tracking-[0.25em] text-white"
              >
                {dictionary.nav.reserve}
              </Link>
              <a
                href={`tel:${officialPhoneTel}`}
                className="block rounded-2xl border border-[#C9A96E] px-4 py-3 text-center text-sm uppercase tracking-[0.22em] text-[#9d7529]"
              >
                {officialPhoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
