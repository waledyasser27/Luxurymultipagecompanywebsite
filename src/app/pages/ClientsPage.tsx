import { motion } from "motion/react";
import Slider from "react-slick";

export function ClientsPage() {
  const clients = [
    { name: "Goldman Sachs", logo: "GS" },
    { name: "Morgan Stanley", logo: "MS" },
    { name: "Hilton Hotels", logo: "HH" },
    { name: "Four Seasons", logo: "FS" },
    { name: "Vanguard Group", logo: "VG" },
    { name: "BlackRock", logo: "BR" },
    { name: "JP Morgan Chase", logo: "JPM" },
    { name: "Marriott International", logo: "MI" },
    { name: "Ritz Carlton", logo: "RC" },
    { name: "Mandarin Oriental", logo: "MO" },
    { name: "Citigroup", logo: "CG" },
    { name: "Wells Fargo", logo: "WF" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzI4NDE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080")',
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
              Our Clients
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Trusted by Industry Leaders
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
              Client Partnerships
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              Building Trust Through Excellence
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, we've had the privilege of partnering with some of the 
              world's most prestigious organizations. Our commitment to quality, innovation, 
              and exceptional service has earned us the trust of industry leaders across 
              multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Carousel */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-serif text-gray-900 mb-4 tracking-tight">
              Esteemed Partners
            </h3>
            <p className="text-gray-600">
              Companies that have trusted Prestige with their vision
            </p>
          </motion.div>
        </div>

        <div className="client-carousel">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <div className="bg-white h-40 flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-gray-400 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300 tracking-wide">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client Testimonials
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
              What Our Clients Say
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Prestige transformed our corporate headquarters into a modern masterpiece. Their attention to detail and commitment to excellence exceeded all expectations.",
                author: "Sarah Johnson",
                position: "CEO, Goldman Sachs",
              },
              {
                quote:
                  "Working with Prestige was a seamless experience. From design to completion, they delivered on every promise with professionalism and precision.",
                author: "Michael Chen",
                position: "VP Development, Hilton Hotels",
              },
              {
                quote:
                  "The team at Prestige doesn't just build structures; they create experiences. Our luxury resort is a testament to their exceptional craftsmanship.",
                author: "Emily Rodriguez",
                position: "Director, Four Seasons",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl text-gray-300 font-serif mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
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
              Join Our Prestigious Clientele
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Experience the Prestige difference. Let us bring your vision to life 
              with the same excellence and dedication that has earned us the trust 
              of industry leaders worldwide.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 tracking-wide text-sm uppercase transform hover:scale-105">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
