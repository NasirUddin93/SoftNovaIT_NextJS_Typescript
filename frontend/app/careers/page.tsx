import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Trophy, 
  Heart, 
  Zap, 
  GraduationCap,
  ArrowRight,
  DollarSign,
  Calendar,
  Star,
  Award,
  Coffee,
  Palette,
  Code,
  TrendingUp
} from 'lucide-react';

export default function Careers() {
  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      department: 'Engineering',
      experience: '2+ years',
      salary: 'Competitive',
      description: 'Work on responsive web apps, implement UI components, and collaborate with designers and backend developers to build modern web solutions.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: Code
    },
    {
      id: 2,
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      department: 'Engineering',
      experience: '3+ years',
      salary: 'Competitive',
      description: 'Design and implement robust backend systems using Laravel, manage databases, APIs, and ensure security and scalability of web applications.',
      skills: ['Laravel', 'Node.js', 'MySQL', 'API Development'],
      icon: Code
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      experience: '2+ years',
      salary: 'Competitive',
      description: 'Create visually appealing and user-friendly designs, wireframes, and prototypes for web and mobile applications to enhance user experience.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      icon: Palette
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      department: 'Marketing',
      experience: '2+ years',
      salary: 'Competitive',
      description: 'Develop and execute marketing campaigns, manage social media, SEO, and analytics to drive growth and brand awareness.',
      skills: ['SEO', 'Social Media', 'Google Analytics', 'Content Marketing'],
      icon: TrendingUp
    },
    {
      id: 5,
      title: 'AI Engineer',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      department: 'Research & Development',
      experience: '3+ years',
      salary: 'Competitive',
      description: 'Develop and implement machine learning models, work on AI-powered solutions, and contribute to cutting-edge projects.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science'],
      icon: Zap
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      experience: '3+ years',
      salary: 'Competitive',
      description: 'Manage cloud infrastructure, implement CI/CD pipelines, and ensure system reliability and scalability.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      icon: Zap
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Attractive compensation package with performance bonuses'
    },
    {
      icon: Trophy,
      title: 'Career Growth',
      description: 'Clear career progression paths and skill development programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications'
    },
    {
      icon: Calendar,
      title: 'Flexible Hours',
      description: 'Flexible working hours and remote work options'
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health and medical insurance coverage'
    },
    {
      icon: Coffee,
      title: 'Great Environment',
      description: 'Modern office space with snacks and team activities'
    }
  ];

  // Company culture highlights
  const cultureHighlights = [
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work with talented, supportive colleagues who value teamwork'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Opportunity to work on cutting-edge technologies and projects'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Your contributions are valued and recognized regularly'
    },
    {
      icon: Star,
      title: 'Work-Life Balance',
      description: 'We believe in sustainable productivity and personal well-being'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Briefcase className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">We&apos;re Hiring!</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Build Your Career at <span className="text-green-500">SoftNovaIT</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our team of innovators and problem-solvers. Work on exciting projects, 
                grow your skills, and make a real impact in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#openings"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  View Open Positions <ArrowRight className="w-5 h-5" />
                </a>
                <Link 
                  href="/about"
                  className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why <span className="text-green-500">SoftNovaIT</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;re not just another workplace. We&apos;re a community of passionate professionals 
                dedicated to making a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                    <highlight.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Amazing <span className="text-green-500">Benefits</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We take care of our team with comprehensive benefits and perks that support 
                both professional growth and personal well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Current <span className="text-green-500">Openings</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our available positions and find the perfect role to grow your career.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                        <job.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-green-500 font-semibold">{job.salary}</span>
                      <a 
                        href={`/careers/apply/${job.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Hiring</span> Process
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                We&apos;ve designed a straightforward and transparent process to help you succeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '1', title: 'Apply', description: 'Submit your application and resume' },
                  { step: '2', title: 'Screening', description: 'Initial phone/video interview' },
                  { step: '3', title: 'Technical', description: 'Skills assessment and technical round' },
                  { step: '4', title: 'Offer', description: 'Welcome to the team!' }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Even if you don&apos;t see the perfect role, we&apos;d love to hear from you. 
              Send us your resume and let&apos;s explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@softnovait.com"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Your Resume <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                href="/team"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}