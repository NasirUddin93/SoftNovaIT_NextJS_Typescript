import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pioneering digital solutions that transform businesses and empower growth through innovation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="p-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2015, we began as a small team of passionate developers with a vision to bridge the gap between cutting-edge technology and practical business solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Today, we've grown into a full-service software firm serving clients across multiple industries, delivering robust applications that drive real results.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is marked by relentless pursuit of excellence, continuous learning, and unwavering commitment to our clients' success.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                {/* Replace this div with an actual image */}
                <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span>Company Timeline or Office Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="p-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center bg-indigo-100 p-10 rounded-2xl">  
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative, scalable, and user-centric software solutions that solve complex challenges and drive sustainable growth in the digital age.
              </p>
            </div>
            <div className="text-center bg-indigo-100 p-10 rounded-2xl  shadow-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted technology partner for businesses worldwide, recognized for our technical excellence, innovative thinking, and transformative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="p-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We believe in the power of teamwork and building strong partnerships with our clients."
              },
              {
                icon: "⚡",
                title: "Excellence",
                description: "We're committed to delivering the highest quality in every project, every time."
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "We foster continuous learning and personal development for our team members."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate minds driving our company forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">CEO Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-indigo-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                With over 15 years in the tech industry, Sarah leads our strategic vision and client relationships.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">CTO Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-indigo-600 font-medium mb-2">CTO</p>
              <p className="text-gray-600">
                Michael architects our technical solutions and ensures we stay at the forefront of technology.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Designer Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emily Rodriguez</h3>
              <p className="text-indigo-600 font-medium mb-2">Lead Designer</p>
              <p className="text-gray-600">
                Emily creates intuitive and beautiful user experiences that delight our clients and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="p-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
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
            Let's discuss how we can help transform your business with custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default page