import { HeroSlider } from "../components/HeroSlider";
import { motion } from "motion/react";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

export function HomePage() {
  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "250+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: TrendingUp, value: "28", label: "Years of Excellence" },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              Welcome to Prestige
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              Building Dreams, Creating Legacy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, Prestige has been at the forefront of luxury construction 
              and architectural design. We transform visions into reality, creating spaces that 
              inspire, innovate, and endure. Our commitment to excellence, attention to detail, 
              and unwavering dedication to our clients has made us a trusted name in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-white/80" />
                <div className="text-4xl md:text-5xl font-serif mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzI4NDE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Partnership"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase">
                Our Commitment
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tight">
                Excellence in Every Detail
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Prestige, we believe that exceptional projects are built on strong 
                partnerships. Our collaborative approach ensures that every client's unique 
                vision is realized with precision and care. From initial concept to final 
                execution, we maintain the highest standards of quality and professionalism.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts brings decades of combined experience in architecture, 
                construction, and project management. We leverage cutting-edge technology 
                and innovative techniques to deliver results that exceed expectations.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 tracking-wide text-sm uppercase transform hover:scale-105">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
