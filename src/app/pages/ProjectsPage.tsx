import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { sharedPageHeroImage } from "../config/media";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageProvider";

export function ProjectsPage() {
  const { dictionary } = useLanguage();

  return (
    <div className="bg-white text-[#111111]">
      <PageHero
        eyebrow={dictionary.projectsPage.eyebrow}
        title={dictionary.projectsPage.title}
        description={dictionary.projectsPage.description}
        image={sharedPageHeroImage}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
