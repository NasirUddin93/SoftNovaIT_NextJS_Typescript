'use client';

import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Code,
  Database,
  Cloud,
  Brain,
  Smartphone,
  Globe,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Calendar,
  Award,
  Star,
  Users,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Eye,
  Clock,
  Zap,
  Shield,
  Rocket,
  Laptop,
  Cpu,
  Server,
  BarChart3,
  Heart
} from 'lucide-react';
import { useState } from 'react';

const Portfolio: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skills = [
    {
      category: 'Frontend Development',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      icon: <Code className="w-6 h-6" />,
      level: 95
    },
    {
      category: 'Backend Development',
      technologies: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'],
      icon: <Server className="w-6 h-6" />,
      level: 90
    },
    {
      category: 'Database & Cloud',
      technologies: ['MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Docker'],
      icon: <Cloud className="w-6 h-6" />,
      level: 85
    },
    {
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP'],
      icon: <Brain className="w-6 h-6" />,
      level: 80
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with AI-powered recommendations, real-time inventory, and seamless payment integration.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'web',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+42%',
        users: '50K+',
        revenue: '$2.4M'
      }
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with predictive analytics and automated reporting features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      category: 'ai',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+65%',
        users: '10K+',
        revenue: '$1.8M'
      }
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      description: 'Cross-platform mobile application for patient monitoring and telemedicine services with HIPAA compliance.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC', 'Redis'],
      category: 'mobile',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+38%',
        users: '25K+',
        revenue: '$1.2M'
      }
    },
    {
      id: 4,
      title: 'FinTech Banking Solution',
      description: 'Secure banking platform with real-time transactions, fraud detection, and multi-currency support.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Java', 'PostgreSQL', 'Spring Boot', 'Kubernetes'],
      category: 'web',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+55%',
        users: '100K+',
        revenue: '$3.5M'
      }
    },
    {
      id: 5,
      title: 'Smart Home IoT System',
      description: 'Internet of Things platform for home automation with voice control and energy optimization.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'React', 'MQTT', 'Raspberry Pi', 'AWS IoT'],
      category: 'iot',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+47%',
        users: '15K+',
        revenue: '$900K'
      }
    },
    {
      id: 6,
      title: 'EdTech Learning Platform',
      description: 'Interactive learning management system with AI-powered personalized learning paths and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MongoDB', 'OpenAI', 'WebSocket', 'Stripe'],
      category: 'ai',
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        performance: '+60%',
        users: '75K+',
        revenue: '$2.1M'
      }
    }
  ];

  const experience = [
    {
      company: 'TechInnovate Solutions',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      duration: '2 years',
      location: 'San Francisco, CA',
      achievements: [
        'Led development of AI-powered SaaS platform serving 50K+ users',
        'Improved application performance by 65% through code optimization',
        'Mentored 5 junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 80%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      company: 'DigitalCraft Inc.',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      duration: '2 years',
      location: 'New York, NY',
      achievements: [
        'Developed 15+ web applications for Fortune 500 clients',
        'Reduced page load time by 40% through performance optimization',
        'Collaborated with cross-functional teams in agile environment',
        'Implemented responsive designs improving mobile conversion by 25%'
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Azure', 'GraphQL'],
      icon: <Laptop className="w-6 h-6" />
    },
    {
      company: 'StartUp Ventures',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      duration: '1 year',
      location: 'Austin, TX',
      achievements: [
        'Built responsive user interfaces for early-stage startup',
        'Implemented design system used across 3 product lines',
        'Improved user engagement by 30% through UX enhancements',
        'Collaborated with designers to create pixel-perfect implementations'
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Firebase', 'Jest'],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechInnovate',
      content: 'Exceptional developer who consistently delivers high-quality solutions. Transformed our platform and drove significant business growth.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO at DigitalCraft',
      content: 'Outstanding technical skills and problem-solving abilities. Always goes above and beyond to ensure project success.',
      rating: 5,
      project: 'Analytics Dashboard'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager at StartUp',
      content: 'A true professional with excellent communication skills. Delivered complex projects on time and exceeded expectations.',
      rating: 5,
      project: 'Healthcare Mobile App'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <CheckCircle2 className="w-6 h-6" /> },
    { number: '3M+', label: 'Users Impacted', icon: <Users className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> }
  ];

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'iot', name: 'IoT', count: projects.filter(p => p.category === 'iot').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Full Stack Developer & AI Specialist</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm Alex
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Thompson</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                I build digital experiences that solve real-world problems. 
                Specializing in full-stack development, AI integration, and scalable cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center text-blue-200">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3">
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

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-purple-600">Expertise</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A comprehensive skill set covering modern web technologies, cloud infrastructure, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{skill.category}</h3>
                    <div className="w-24 bg-gray-300 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-3 py-2 rounded-lg border border-gray-300 hover:border-purple-300 hover:shadow-sm transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A selection of projects that showcase my expertise in full-stack development, AI integration, and innovative problem-solving.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-200 pt-4">
                    <div>
                      <div className="text-lg font-bold text-gray-800">{project.stats.performance}</div>
                      <div className="text-xs text-gray-500">Performance</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">{project.stats.users}</div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">{project.stats.revenue}</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-purple-600">Journey</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              My career path through leading tech companies, building innovative solutions and driving digital transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300"></div>
                )}
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mr-6 flex-shrink-0">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-purple-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {exp.period}
                        </span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-cyan-400">Testimonials</span>
            </h2>
            <p className="text-purple-200 text-xl max-w-3xl mx-auto">
              What clients and colleagues say about working with me and the solutions we've built together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                  <div className="text-purple-300 text-xs mt-1">Project: {testimonial.project}</div>
                </div>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm available for freelance work and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-gray-700">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Proven Track Record</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-purple-100 transition-colors duration-300">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-cyan-100 transition-colors duration-300">
                <Twitter className="w-6 h-6 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-4 rounded-2xl hover:bg-green-100 transition-colors duration-300">
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;