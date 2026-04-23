import { motion } from "motion/react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  align?: "start" | "center";
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  badge,
  align = "start",
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#e5e5e5] bg-[#111111] pt-28 md:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.72),rgba(17,17,17,0.42),rgba(17,17,17,0.18)),linear-gradient(0deg,rgba(17,17,17,0.28),rgba(17,17,17,0.04))]" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[#f1d28a]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-serif tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            {description}
          </p>
          {badge ? (
            <div className="mt-8 inline-flex items-center rounded-full border border-[#f1d28a]/45 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f1d28a] shadow-sm backdrop-blur-sm">
              {badge}
            </div>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}
