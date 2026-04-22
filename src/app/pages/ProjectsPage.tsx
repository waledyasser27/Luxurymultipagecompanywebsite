import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["All", "Residential", "Commercial", "Hospitality", "Institutional"];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Estate",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1654175868733-6e60cc6f9ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzcyODI1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A stunning 15,000 sq ft luxury villa featuring contemporary design, infinity pool, and breathtaking ocean views.",
      location: "Miami Beach, FL",
      year: "2024",
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGdsYXNzfGVufDF8fHx8MTc3MjkxMDAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A state-of-the-art 20-story office building with sustainable design and smart building technology.",
      location: "New York, NY",
      year: "2023",
    },
    {
      id: 3,
      title: "Boutique Hotel Renovation",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1723465313715-586dd9689b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MjkxMDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Complete transformation of a historic property into a luxury boutique hotel with 75 premium suites.",
      location: "San Francisco, CA",
      year: "2023",
    },
    {
      id: 4,
      title: "Contemporary Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1758445043367-3c91bf6cb0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mjg5MjY4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Modern residential masterpiece featuring open-plan living, floor-to-ceiling windows, and sustainable materials.",
      location: "Los Angeles, CA",
      year: "2024",
    },
    {
      id: 5,
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyOTEwMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Iconic corporate headquarters featuring innovative design, collaborative workspaces, and rooftop gardens.",
      location: "Chicago, IL",
      year: "2022",
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZ3xlbnwxfHx8fDE3NzI5MTAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Exquisite penthouse interior with custom finishes, designer furnishings, and panoramic city views.",
      location: "Manhattan, NY",
      year: "2023",
    },
    {
      id: 7,
      title: "Modern Campus Building",
      category: "Institutional",
      image: "https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NzI5MTAwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Educational facility designed for modern learning with sustainable features and flexible spaces.",
      location: "Boston, MA",
      year: "2022",
    },
    {
      id: 8,
      title: "Executive Office Suite",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzI5MTAwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium office interiors designed for executive leadership with sophisticated finishes and technology.",
      location: "Seattle, WA",
      year: "2024",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGdsYXNzfGVufDF8fHx8MTc3MjkxMDAxOXww&ixlib=rb-4.1.0&q=80&w=1080")',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif mb-4 tracking-tight"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              A Portfolio of Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wide uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden mb-4 h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs tracking-widest uppercase text-white/80 mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-serif">{project.title}</h4>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-serif text-gray-900">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={
                    projects.find((p) => p.id === selectedProject)?.image
                  }
                  alt={projects.find((p) => p.id === selectedProject)?.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-xs tracking-widest uppercase text-gray-600 mb-2 block">
                  {projects.find((p) => p.id === selectedProject)?.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                  {projects.find((p) => p.id === selectedProject)?.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {projects.find((p) => p.id === selectedProject)?.location} •{" "}
                  {projects.find((p) => p.id === selectedProject)?.year}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projects.find((p) => p.id === selectedProject)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
