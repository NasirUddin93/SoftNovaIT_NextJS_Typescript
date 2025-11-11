'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  Play,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Video,
  Download,
  Share2,
  Bookmark,
  Zap,
  TrendingUp,
  Target,
  Globe,
  Shield,
  Code,
  Database,
  Cloud,
  Brain,
  BarChart3,
  Smartphone,
  Laptop,
  GraduationCap,
  UserCheck,
  FileText,
  MapPin,
  Eye,
  Heart,
  BadgeCheck
} from 'lucide-react';

const CoursesAndTraining: NextPage = () => {
  const courses = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and cloud deployment. Build real-world applications.',
      level: 'Beginner to Advanced',
      duration: '12 weeks',
      price: '$1,299',
      rating: 4.9,
      students: 2450,
      features: ['HTML/CSS/JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB', 'AWS Deployment'],
      popular: true,
      category: 'Development'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning & AI',
      description: 'Comprehensive AI course covering machine learning, deep learning, and real-world AI applications.',
      level: 'Intermediate',
      duration: '16 weeks',
      price: '$1,599',
      rating: 4.8,
      students: 1820,
      features: ['Python Programming', 'TensorFlow & PyTorch', 'Neural Networks', 'Computer Vision', 'NLP'],
      popular: true,
      category: 'AI & Data Science'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Computing & DevOps',
      description: 'Learn cloud infrastructure, containerization, and DevOps practices for modern software delivery.',
      level: 'Intermediate',
      duration: '10 weeks',
      price: '$1,199',
      rating: 4.7,
      students: 1560,
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      category: 'Cloud & DevOps'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity skills for protecting systems and data in today\'s digital landscape.',
      level: 'Beginner',
      duration: '8 weeks',
      price: '$999',
      rating: 4.6,
      students: 2100,
      features: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Management', 'Compliance'],
      category: 'Security'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Science & Analytics',
      description: 'Transform data into insights with statistical analysis, visualization, and predictive modeling.',
      level: 'Beginner to Intermediate',
      duration: '14 weeks',
      price: '$1,399',
      rating: 4.8,
      students: 1980,
      features: ['Python & R', 'Statistical Analysis', 'Data Visualization', 'SQL', 'Big Data Tools'],
      category: 'AI & Data Science'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and modern development tools.',
      level: 'Intermediate',
      duration: '10 weeks',
      price: '$1,099',
      rating: 4.7,
      students: 1320,
      features: ['React Native', 'iOS & Android', 'API Integration', 'App Store Deployment', 'Performance'],
      category: 'Development'
    }
  ];

  const trainingFormats = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Self-Paced Online',
      description: 'Learn at your own pace with pre-recorded videos, exercises, and lifetime access to course materials.',
      features: ['Flexible Schedule', 'Lifetime Access', 'Community Support', 'Certificate Included'],
      duration: '3-6 months access',
      bestFor: 'Busy professionals & students'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Live Online Classes',
      description: 'Interactive live sessions with expert instructors, real-time Q&A, and collaborative projects.',
      features: ['Live Instruction', 'Real-time Q&A', 'Group Projects', 'Networking'],
      duration: 'Scheduled sessions',
      bestFor: 'Structured learning & networking'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'In-Person Bootcamps',
      description: 'Immersive classroom experience with hands-on projects and direct mentorship from industry experts.',
      features: ['Hands-on Labs', 'Direct Mentorship', 'Career Support', 'Job Placement'],
      duration: 'Full-time intensive',
      bestFor: 'Career changers & intensive learning'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Corporate Training',
      description: 'Customized training programs for teams and organizations with tailored curriculum and reporting.',
      features: ['Custom Curriculum', 'Team Discounts', 'Progress Tracking', 'Dedicated Support'],
      duration: 'Flexible scheduling',
      bestFor: 'Companies & organizations'
    }
  ];

  const instructors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Expert',
      experience: '12+ years at Google & Microsoft',
      courses: 8,
      rating: 4.9,
      students: 15000,
      image: '/api/placeholder/100/100',
      specialties: ['Machine Learning', 'Deep Learning', 'Computer Vision']
    },
    {
      name: 'Mike Rodriguez',
      role: 'Full Stack Developer',
      experience: 'Former Tech Lead at Amazon',
      courses: 6,
      rating: 4.8,
      students: 12000,
      image: '/api/placeholder/100/100',
      specialties: ['React', 'Node.js', 'Cloud Architecture']
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Data Science Specialist',
      experience: 'PhD in Data Science from MIT',
      courses: 7,
      rating: 4.9,
      students: 11000,
      image: '/api/placeholder/100/100',
      specialties: ['Data Analysis', 'Statistics', 'Big Data']
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Architect',
      experience: 'CISO at Fortune 500 Company',
      courses: 5,
      rating: 4.7,
      students: 8000,
      image: '/api/placeholder/100/100',
      specialties: ['Network Security', 'Ethical Hacking', 'Compliance']
    }
  ];

  const successStories = [
    {
      name: 'Emily Johnson',
      role: 'Software Engineer at Google',
      story: 'The Full Stack course completely transformed my career. I went from retail management to landing my dream job at Google in just 6 months!',
      course: 'Full Stack Web Development',
      salary: '125% increase',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Carlos Martinez',
      role: 'Data Scientist at Netflix',
      story: 'The Machine Learning program gave me the practical skills I needed. The projects were so relevant that I could showcase them in interviews.',
      course: 'Machine Learning & AI',
      salary: '95% increase',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Jessica Wang',
      role: 'DevOps Engineer at Spotify',
      story: 'The hands-on approach and real-world scenarios prepared me perfectly for my current role. The career support was exceptional.',
      course: 'Cloud Computing & DevOps',
      salary: '110% increase',
      image: '/api/placeholder/80/80'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Free Web Development Workshop',
      date: 'January 15, 2024',
      time: '6:00 PM EST',
      type: 'Live Workshop',
      instructor: 'Mike Rodriguez',
      seats: '45/100 remaining',
      level: 'Beginner'
    },
    {
      title: 'AI Career Path Webinar',
      date: 'January 18, 2024',
      time: '7:30 PM EST',
      type: 'Webinar',
      instructor: 'Dr. Sarah Chen',
      seats: '32/150 remaining',
      level: 'All Levels'
    },
    {
      title: 'Cybersecurity Hands-on Lab',
      date: 'January 22, 2024',
      time: '5:00 PM EST',
      type: 'Practical Session',
      instructor: 'Alex Thompson',
      seats: '18/50 remaining',
      level: 'Intermediate'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Students Trained', icon: <Users className="w-6 h-6" /> },
    { number: '94%', label: 'Completion Rate', icon: <Award className="w-6 h-6" /> },
    { number: '4.8/5.0', label: 'Average Rating', icon: <Star className="w-6 h-6" /> },
    { number: '85%', label: 'Career Advancement', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const learningFeatures = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Project-Based Learning',
      description: 'Build real-world projects that showcase your skills to employers'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: '1-on-1 Mentorship',
      description: 'Get personalized guidance from industry experts'
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'Industry Certificates',
      description: 'Earn recognized certificates to boost your career'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Career Support',
      description: 'Resume reviews, interview prep, and job placement assistance'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Transform Your Career with Tech Skills</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Learn In-Demand
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Tech Skills</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Master the most sought-after technologies with industry-expert instructors, 
                hands-on projects, and career-focused curriculum designed for today's job market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Student Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular <span className="text-green-600">Courses</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Industry-relevant courses designed by experts to help you master in-demand skills and advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  course.popular 
                    ? 'border-green-500 relative' 
                    : 'border-gray-100 hover:border-green-200'
                } group`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {course.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {course.features.length > 3 && (
                      <div className="text-gray-500 text-sm">
                        +{course.features.length - 3} more topics
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>

                  <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flexible <span className="text-green-600">Learning Formats</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Choose the learning style that fits your schedule, goals, and preferred way of learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFormats.map((format, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {format.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{format.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{format.description}</p>
                
                <div className="space-y-3 mb-6">
                  {format.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{format.duration}</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      {format.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Learn <span className="text-cyan-400">With Us?</span>
            </h2>
            <p className="text-green-200 text-xl max-w-3xl mx-auto">
              Our proven approach combines expert instruction, hands-on projects, and comprehensive support to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learn from <span className="text-green-600">Industry Experts</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our instructors are seasoned professionals with real-world experience from top tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center group">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-200 group-hover:border-green-500 transition-colors duration-300"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-3">{instructor.role}</p>
                <p className="text-gray-600 text-sm mb-4">{instructor.experience}</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {instructor.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {instructor.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, specialtyIndex) => (
                    <span 
                      key={specialtyIndex}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Student <span className="text-green-600">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-2 border-green-500"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800">{story.name}</h3>
                    <p className="text-green-600 text-sm">{story.role}</p>
                    <p className="text-gray-500 text-xs">{story.salary} salary increase</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Course:</span>
                    <span className="font-medium text-gray-800">{story.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Free <span className="text-white">Learning Events</span>
            </h2>
            <p className="text-green-100 text-xl max-w-3xl mx-auto">
              Join our free workshops and webinars to experience our teaching style and learn new skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {event.type}
                  </span>
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                    {event.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-green-100 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-green-100 text-sm">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Instructor: {event.instructor}
                  </div>
                  <div className="flex items-center text-green-100 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {event.seats} seats
                  </div>
                </div>

                <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Register Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Start Your Tech Career Journey Today
            </h2>
            <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
              Join 50,000+ students who have transformed their careers with our industry-leading tech education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Browse All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-gray-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Advisor
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Industry-Recognized Certificates</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Flexible Learning Schedule</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span>Job Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursesAndTraining;