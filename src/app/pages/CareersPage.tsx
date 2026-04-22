import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openPositions = [
    {
      title: "Senior Architect",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Lead architectural design projects from concept to completion. Collaborate with clients and internal teams to deliver innovative, sustainable designs.",
      requirements: [
        "10+ years of experience in architecture",
        "Licensed architect with strong portfolio",
        "Proficiency in AutoCAD, Revit, and 3D modeling software",
        "Excellent communication and leadership skills",
      ],
    },
    {
      title: "Project Manager",
      department: "Construction",
      location: "Los Angeles, CA",
      type: "Full-time",
      description:
        "Oversee luxury construction projects ensuring timely delivery, budget adherence, and quality standards. Coordinate with contractors, architects, and clients.",
      requirements: [
        "8+ years of construction project management",
        "PMP certification preferred",
        "Experience with high-end residential and commercial projects",
        "Strong organizational and problem-solving skills",
      ],
    },
    {
      title: "Interior Designer",
      department: "Design",
      location: "Miami, FL",
      type: "Full-time",
      description:
        "Create sophisticated interior designs for luxury residential and commercial projects. Source materials, furniture, and finishes.",
      requirements: [
        "5+ years of interior design experience",
        "Strong portfolio of luxury projects",
        "Proficiency in design software and 3D rendering",
        "Knowledge of current design trends and materials",
      ],
    },
    {
      title: "Construction Superintendent",
      department: "Construction",
      location: "Chicago, IL",
      type: "Full-time",
      description:
        "Manage on-site construction operations, supervise subcontractors, and ensure safety compliance and quality control.",
      requirements: [
        "7+ years of construction supervision experience",
        "OSHA certification required",
        "Experience with luxury construction projects",
        "Strong leadership and communication skills",
      ],
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Professional development and training opportunities",
    "Flexible work arrangements",
    "Generous paid time off",
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
              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Join Our Team of Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              Why Prestige
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              Build Your Career With Us
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Prestige, we believe our greatest asset is our people. Join a team of 
              talented professionals dedicated to excellence, innovation, and creating 
              spaces that inspire. We offer competitive compensation, comprehensive benefits, 
              and unparalleled opportunities for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              Current Openings
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
              Available Positions
            </h3>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Briefcase className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-2xl font-serif text-gray-900 mb-2">
                          {position.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700">
                            {position.department}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {position.description}
                    </p>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Requirements:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 tracking-wide text-sm uppercase whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-base md:text-lg tracking-[0.3em] text-gray-600 uppercase mb-4">
              Apply Today
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 tracking-tight">
              Submit Your Application
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fill out the form below to apply for any of our open positions. 
              We'll review your application and get back to you soon.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300"
                >
                  <option value="">Select a position</option>
                  {openPositions.map((pos, idx) => (
                    <option key={idx} value={pos.title}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Years of Experience *
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Cover Letter / Additional Information *
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                required
                rows={6}
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 tracking-wide text-sm uppercase transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                "Application Submitted!"
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
