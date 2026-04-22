import { motion } from "motion/react";
import {
  Building2,
  Hammer,
  Ruler,
  PaintBucket,
  TreePine,
  Home,
  HardHat,
  Wrench,
} from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description:
        "Our award-winning architects create innovative, sustainable designs that blend aesthetics with functionality. From concept to completion, we bring your vision to life with precision and creativity.",
    },
    {
      icon: Hammer,
      title: "Luxury Construction",
      description:
        "Premium construction services using the finest materials and cutting-edge techniques. We deliver exceptional quality on residential and commercial projects of all scales.",
    },
    {
      icon: Ruler,
      title: "Project Management",
      description:
        "Comprehensive project oversight ensuring timely delivery, budget adherence, and seamless coordination between all stakeholders. Your peace of mind is our priority.",
    },
    {
      icon: PaintBucket,
      title: "Interior Design",
      description:
        "Transform spaces with our bespoke interior design services. We create harmonious environments that reflect your style while maximizing comfort and functionality.",
    },
    {
      icon: TreePine,
      title: "Landscape Design",
      description:
        "Expert landscape architecture that complements your property's aesthetic. We design outdoor spaces that enhance beauty, sustainability, and value.",
    },
    {
      icon: Home,
      title: "Residential Development",
      description:
        "From luxury estates to modern residences, we specialize in creating homes that exceed expectations. Every detail is crafted with care and precision.",
    },
    {
      icon: HardHat,
      title: "Commercial Construction",
      description:
        "Build your business vision with our commercial construction expertise. We deliver functional, inspiring spaces for offices, retail, and hospitality projects.",
    },
    {
      icon: Wrench,
      title: "Renovation & Restoration",
      description:
        "Breathe new life into existing structures with our renovation services. We preserve character while incorporating modern amenities and efficiency.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzI4OTIyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080")',
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Comprehensive Solutions for Every Vision
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              What We Offer
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              Full-Service Excellence
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial design concepts to final construction, Prestige offers a comprehensive 
              suite of services tailored to meet the unique needs of each client. Our integrated 
              approach ensures seamless execution and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-gray-900 font-medium tracking-wide text-sm uppercase hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                  Learn More
                  <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's discuss how Prestige can bring your vision to life. Our team of experts 
              is ready to collaborate with you on your next project.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 tracking-wide text-sm uppercase transform hover:scale-105">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
