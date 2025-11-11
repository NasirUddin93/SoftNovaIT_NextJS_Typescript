import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Target, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Zap, 
  Award,
  Heart,
  Shield
} from 'lucide-react';

export default function MissionVision() {
  // Core values data
  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We maintain the highest standards of honesty and transparency in all our dealings.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We constantly explore new technologies and creative approaches to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual success.'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'We strive for perfection in every project, delivering quality that exceeds expectations.'
    }
  ];

  // Our approach data
  const approaches = [
    {
      title: 'Client-Centric Solutions',
      description: 'We design solutions that address specific client needs and business objectives.',
      points: ['Deep requirement analysis', 'Customized strategies', 'Continuous feedback loops']
    },
    {
      title: 'Technology Excellence',
      description: 'We leverage cutting-edge technologies to build robust and scalable solutions.',
      points: ['Modern tech stack', 'Best practices', 'Performance optimization']
    },
    {
      title: 'Sustainable Growth',
      description: 'We focus on creating solutions that support long-term business growth and scalability.',
      points: ['Scalable architecture', 'Future-proof solutions', 'Continuous improvement']
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-500">Mission & Vision</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At SoftNovaIT, we are driven by a strong purpose and a clear vision for the future. 
                Discover our goals, values, and the impact we aim to create in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/about" 
                  className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Mission Card */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-2xl mr-4 shadow-lg">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive sustainable growth and success. 
                  We focus on quality, cutting-edge technology, and creative problem-solving to help our clients 
                  achieve their strategic objectives in an ever-evolving digital landscape.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What Drives Us:</h3>
                  {[
                    'Deliver exceptional value to every client',
                    'Stay at the forefront of technological innovation',
                    'Build lasting partnerships based on trust',
                    'Make advanced technology accessible and impactful'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-500 text-white rounded-2xl mr-4 shadow-lg">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To become the leading digital transformation partner globally, recognized for excellence, 
                  innovation, and meaningful client impact. We envision a future where technology seamlessly 
                  enhances business capabilities and creates new opportunities for growth and innovation.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Aspirations:</h3>
                  {[
                    'Pioneer AI and machine learning solutions',
                    'Expand our global footprint and impact',
                    'Foster a culture of continuous innovation',
                    'Transform industries through technology'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our decisions, shape our culture, and define how we work with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Approach</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How we turn our mission and vision into tangible results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{approach.description}</p>
                  <ul className="space-y-2">
                    {approach.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making a Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Through our mission-driven approach, we help businesses transform, innovate, 
              and achieve remarkable results in the digital space.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-green-200">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">35+</div>
                <div className="text-green-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div className="text-green-200">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-green-200">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to turn your vision into reality. Our mission-driven approach 
              ensures you get solutions that align with your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio"
                className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Our Success Stories
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}