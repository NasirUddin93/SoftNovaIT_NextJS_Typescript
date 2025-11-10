import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements and workflows.",
      features: ["Web Applications", "Desktop Software", "Mobile Apps", "API Development", "System Integration"],
      color: "blue"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences across all devices.",
      features: ["React/Next.js Development", "E-commerce Solutions", "Progressive Web Apps", "CMS Development", "Performance Optimization"],
      color: "green"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter", "App Store Deployment"],
      color: "purple"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Cloud Security"],
      color: "orange"
    },
    {
      icon: "🔍",
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, beautiful interfaces that users love to interact with.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
      color: "pink"
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly and securely.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Bug Fixes", "Technical Support"],
      color: "indigo"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap for success."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "We create wireframes, mockups, and prototypes to visualize the final product before development."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our team builds your solution using best practices, with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "We deploy your solution to production and ensure a smooth transition to your team."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "We provide ongoing support, updates, and improvements to keep your system running optimally."
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to drive your business forward in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end software development services that deliver real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 ${getColorClasses(service.color)}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition duration-300 flex items-center group">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures quality, transparency, and successful project delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 md:mb-0 md:mr-8">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with modern technologies and frameworks to build scalable, high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "AWS", icon: "☁️" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Docker", icon: "🐳" },
              { name: "Kubernetes", icon: "⚓" },
              { name: "GraphQL", icon: "📊" },
              { name: "Tailwind CSS", icon: "🎨" }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services