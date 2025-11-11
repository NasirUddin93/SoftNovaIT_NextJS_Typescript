import Header from '../components/Header';
import Footer from '../components/Footer';

import Link from 'next/link';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Code,
  Heart,
  Shield,
  Zap,
  Calendar,
  TrendingUp
} from 'lucide-react';

export default function About() {
  // Team members data
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/ceo.jpg',
      description: 'Visionary leader with 10+ years in IT industry',
      expertise: ['Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/cto.jpg',
      description: 'Tech expert specializing in AI and cloud solutions',
      expertise: ['AI/ML', 'Cloud Architecture', 'Security']
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/team/lead-dev.jpg',
      description: 'Full-stack developer with passion for modern web technologies',
      expertise: ['Next.js', 'React', 'TypeScript']
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      image: '/team/designer.jpg',
      description: 'Creative designer focused on user-centered design',
      expertise: ['Figma', 'User Research', 'Prototyping']
    },
  ];

  // Values data
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and ethical business practices in everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients as partners to achieve shared success and goals.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality and exceeding client expectations.'
    },
  ];

  // Milestones data
  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to transform digital landscape' },
    { year: '2019', event: 'First 50 Clients', description: 'Successfully delivered projects for 50+ satisfied clients' },
    { year: '2020', event: 'AI Division Launch', description: 'Expanded into AI and machine learning services' },
    { year: '2021', event: 'Team Expansion', description: 'Grew to 20+ dedicated professionals' },
    { year: '2022', event: 'International Projects', description: 'Started serving clients across 10+ countries' },
    { year: '2023', event: 'Award Recognition', description: 'Received "Best IT Company" award for innovation' },
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
              About <span className="text-green-500">SoftNovaIT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of innovators, developers, and designers dedicated to 
              transforming businesses through cutting-edge technology solutions. Since 2018, 
              we&apos;ve been helping companies thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
                <Target className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-900">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Businesses Through Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To provide cutting-edge IT solutions that drive growth, enhance efficiency, 
                and create meaningful digital experiences for businesses worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  'Deliver exceptional value to every client',
                  'Stay at the forefront of technology trends',
                  'Foster long-term partnerships',
                  'Make technology accessible and impactful'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
                <Eye className="w-6 h-6 text-purple-500" />
                <span className="font-semibold text-gray-900">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping the Future of Digital Transformation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To be the leading partner for businesses seeking to leverage technology 
                for sustainable growth and competitive advantage in an ever-evolving digital landscape.
              </p>
              <ul className="space-y-3">
                {[
                  'Pioneer AI and machine learning solutions',
                  'Expand global reach and impact',
                  'Build a culture of continuous innovation',
                  'Transform industries through technology'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Story</span>
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to becoming a trusted technology partner
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="text-2xl font-bold text-green-500 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering exceptional results and 
              building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-green-500 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/careers"
              className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Join Our Team <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-green-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-green-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how SoftNovaIT can help transform your business with innovative technology solutions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}