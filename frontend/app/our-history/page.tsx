import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  Trophy, 
  Target, 
  Globe, 
  Zap, 
  ArrowRight,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

export default function OurHistory() {
  // Timeline data
  const timelineEvents = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Our journey began with a small team of passionate professionals aiming to create innovative digital solutions.',
      icon: Target,
      achievements: ['Started with 3 team members', 'First office in Uttara, Dhaka', 'Initial focus on web development']
    },
    {
      year: '2013',
      title: 'First 100 Clients',
      description: 'By 2013, we successfully served over 100 clients and established ourselves as a reliable digital solutions provider.',
      icon: Users,
      achievements: ['Reached 100+ happy clients', 'Expanded service offerings', 'Built strong local presence']
    },
    {
      year: '2016',
      title: 'Expansion & Growth',
      description: 'Expanded our team and services to include web development, digital marketing, and design, catering to national and international clients.',
      icon: Globe,
      achievements: ['International client base', 'Team grew to 15+ members', 'Added new service verticals']
    },
    {
      year: '2020',
      title: '50+ Top Companies Served',
      description: 'We have partnered with over 50 top companies, delivering high-quality solutions and building long-term relationships.',
      icon: Trophy,
      achievements: ['Partnerships with major brands', 'Award-winning projects', 'Industry recognition']
    },
    {
      year: '2025',
      title: 'Leading in Digital Solutions',
      description: 'Today, we continue to innovate, helping businesses grow with cutting-edge digital services and unmatched customer support.',
      icon: Zap,
      achievements: ['AI & ML integration', 'Global service delivery', 'Continuous innovation']
    }
  ];

  // Company stats
  const companyStats = [
    { number: '15+', label: 'Years Experience', icon: Calendar },
    { number: '500+', label: 'Projects Completed', icon: Trophy },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
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
                Our <span className="text-green-500">History</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how we started and the milestones we achieved over the years. Our journey reflects 
                our growth, values, and unwavering commitment to excellence in digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/about" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More About Us <ArrowRight className="w-5 h-5" />
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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {companyStats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Enhanced Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-green-500 h-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {timelineEvents.map((event, index) => (
                    <div 
                      key={index}
                      className={`relative flex flex-col md:flex-row items-center w-full ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-8 md:mb-0`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                          {/* Year Badge */}
                          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Calendar className="w-4 h-4" />
                            {event.year}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                          
                          {/* Achievements */}
                          <ul className="space-y-2">
                            {event.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center text-gray-700 text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                        <div className="w-16 h-16 bg-green-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Growth Chart Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Growth</span> Journey
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted digital partner for businesses worldwide.
              </p>

              {/* Simple Growth Visualization */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-5 gap-4 mb-8">
                  {[
                    { year: '2010', clients: '5', team: '3' },
                    { year: '2013', clients: '100+', team: '8' },
                    { year: '2016', clients: '250+', team: '15' },
                    { year: '2020', clients: '400+', team: '35' },
                    { year: '2025', clients: '500+', team: '50+' }
                  ].map((period, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-green-500 mb-2">{period.year}</div>
                      <div className="text-gray-600 text-sm">Clients: {period.clients}</div>
                      <div className="text-gray-600 text-sm">Team: {period.team}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <TrendingUp className="w-5 h-5" />
                  <span>Steady Growth Over 15+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Evolution Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Evolving Our Values
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              While our core values remain constant, our approach has evolved to meet the changing 
              needs of the digital landscape and our growing client base.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Award className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-white/80">
                  From day one, we&apos;ve maintained an unwavering commitment to delivering exceptional quality.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Users className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Client Partnership</h3>
                <p className="text-white/80">
                  Building lasting relationships has been key to our sustained growth and success.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <Zap className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
                <p className="text-white/80">
                  We continuously adapt and innovate to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be Part of Our Future Story
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us on our journey as we continue to innovate and create amazing digital experiences 
              for businesses around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/careers"
                className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}