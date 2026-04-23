import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { language, dictionary } = useLanguage();
  const isDeliveredProject = project.slug === "el-shabrawy-mall";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white shadow-[0_18px_45px_rgba(17,17,17,0.08)]"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.shortLabel[language]}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/62 via-[#111111]/10 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full border border-[#d8bf7a] bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#9d7529] shadow-sm">
          {project.shortLabel[language]}
        </span>
      </div>
      <div className="space-y-5 p-7 text-[#111111]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8a8377]">
            {project.projectType[language]}
          </p>
          <h3 className="text-3xl font-serif">{project.slug === "seven-b-mall" ? "Seven B Mall" : "El-Shabrawy Mall"}</h3>
          <p className="text-sm leading-7 text-[#666666]">
            {project.cardDescription[language]}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-[1.5rem] border border-[#e5e5e5] bg-[#f7f7f7] p-4 text-sm text-[#666666]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a8377]">
              {dictionary.common.location}
            </p>
            <p className="mt-2">{project.location[language]}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a8377]">
              {dictionary.common.progress}
            </p>
            <p className="mt-2">
              {isDeliveredProject ? (language === "en" ? "Delivered" : "تم التسليم") : `${project.progressValue}%`}
            </p>
          </div>
        </div>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9d7529] transition-colors hover:text-[#7c5c1d]"
        >
          {dictionary.common.detailsButton}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
