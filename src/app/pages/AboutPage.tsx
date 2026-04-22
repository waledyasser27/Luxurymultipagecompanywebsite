import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver exceptional construction and architectural solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be recognized as the premier luxury construction and design firm, known for our innovation, integrity, and commitment to creating spaces that inspire and endure.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Excellence, integrity, innovation, and client satisfaction are the pillars that guide every decision we make and every project we undertake.",
    },
    {
      icon: Award,
      title: "Our Promise",
      description:
        "We promise to deliver unparalleled quality, transparent communication, and a seamless experience from concept to completion on every project.",
    },
  ];

  const team = [
    {
      name: "Michael Harrison",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mjg5Mzc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Architect",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjgwNzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "James Anderson",
      position: "Head of Construction",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mjg5Mzc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Emily Chen",
      position: "Design Director",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjgwNzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
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
              'url("https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjgwNzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080")',
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Building Excellence Since 1995
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tight">
                Three Decades of Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1995 by visionary architect Michael Harrison, Prestige began with 
                a simple yet ambitious goal: to redefine luxury construction and architectural 
                design. What started as a small team of passionate professionals has grown into 
                a leading firm known for its exceptional craftsmanship and innovative approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the years, we've successfully completed over 500 projects, ranging from 
                luxury residential estates to iconic commercial buildings. Each project is a 
                testament to our commitment to excellence, sustainability, and our clients' 
                unique visions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Prestige stands as a symbol of quality and innovation in the construction 
                industry. Our portfolio includes award-winning projects that have shaped skylines 
                and created lasting impressions in communities worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzI5MTAwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office Interior"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              What Drives Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
              Our Core Principles
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <value.icon className="w-12 h-12 text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-serif text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              Meet the Team
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
              Leadership & Expertise
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-serif text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-sm tracking-wide uppercase">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
