'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Server,
  Cloud,
  Shield,
  Database,
  Code,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  Search,
  Rocket,
  Globe,
  BarChart3,
  Target,
  Clock,
  ArrowRight,
  Play,
  Star,
  Award,
  Calendar,
  MessageCircle,
  FileText,
  Smartphone,
  Wifi,
  Cpu,
  Network,
  Settings,
  Monitor,
  Laptop,
  Smartphone as Mobile,
  HardDrive,
  Lock
} from 'lucide-react';

const ITSolutions: NextPage = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services across all major platforms.',
      features: ['Cloud Migration', 'AWS/Azure/GCP Management', 'Cost Optimization', 'Disaster Recovery'],
      deliveryTime: '2-6 weeks',
      complexity: 'Enterprise',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'End-to-end security solutions to protect your digital assets and ensure regulatory compliance.',
      features: ['Network Security', 'Threat Detection', 'Compliance Auditing', 'Security Training'],
      deliveryTime: '3-8 weeks',
      complexity: 'Advanced',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance for optimal performance.',
      features: ['Network Setup', 'Server Management', 'Performance Monitoring', '24/7 Support'],
      deliveryTime: '4-10 weeks',
      complexity: 'Enterprise'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and analytics solutions for informed decision-making.',
      features: ['Database Design', 'Data Warehousing', 'Backup Solutions', 'Business Intelligence'],
      deliveryTime: '3-6 weeks',
      complexity: 'Advanced'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs and digital transformation goals.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      deliveryTime: '6-16 weeks',
      complexity: 'Custom'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT with business objectives and drive digital growth.',
      features: ['IT Strategy', 'Digital Transformation', 'Technology Audit', 'Vendor Management'],
      deliveryTime: '2-4 weeks',
      complexity: 'Strategic'
    }
  ];

  const solutions = [
    {
      category: 'Enterprise Solutions',
      items: [
        { name: 'ERP Implementation', icon: <Settings className="w-5 h-5" /> },
        { name: 'CRM Systems', icon: <Users className="w-5 h-5" /> },
        { name: 'Business Intelligence', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Workflow Automation', icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'Network Security', icon: <Lock className="w-5 h-5" /> },
        { name: 'Server Virtualization', icon: <Server className="w-5 h-5" /> },
        { name: 'Storage Solutions', icon: <HardDrive className="w-5 h-5" /> },
        { name: 'Disaster Recovery', icon: <Cloud className="w-5 h-5" /> }
      ]
    },
    {
      category: 'Digital Workplace',
      items: [
        { name: 'Collaboration Tools', icon: <MessageCircle className="w-5 h-5" /> },
        { name: 'Remote Work Solutions', icon: <Laptop className="w-5 h-5" /> },
        { name: 'Mobile Device Management', icon: <Mobile className="w-5 h-5" /> },
        { name: 'Unified Communications', icon: <Wifi className="w-5 h-5" /> }
      ]
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      tools: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: 'Security',
      tools: ['Cisco', 'Palo Alto', 'Fortinet', 'Check Point'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Development',
      tools: ['.NET', 'Java', 'Python', 'Node.js'],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: 'Database',
      tools: ['SQL Server', 'Oracle', 'MongoDB', 'PostgreSQL'],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Cloud Migration',
      client: 'Global Manufacturing Company',
      results: ['40% reduction in IT costs', '99.9% uptime achieved', '50% faster deployment'],
      duration: '12 weeks',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Overhaul',
      client: 'Financial Services Firm',
      results: ['Zero security breaches', 'Compliance with regulations', '24/7 threat monitoring'],
      duration: '8 weeks',
      technologies: ['Palo Alto', 'SIEM', 'MFA'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Digital Workplace Transformation',
      client: 'Healthcare Organization',
      results: ['75% improved collaboration', 'Remote work enabled', '30% productivity increase'],
      duration: '10 weeks',
      technologies: ['Microsoft 365', 'Teams', 'SharePoint'],
      image: '/api/placeholder/400/250'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current IT infrastructure and business requirements.',
      icon: <Search className="w-6 h-6" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Architecting tailored IT solutions that align with your business objectives.',
      icon: <Target className="w-6 h-6" />,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration of new systems and technologies.',
      icon: <Rocket className="w-6 h-6" />,
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure system reliability, security, and performance.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      duration: '1-3 weeks'
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing maintenance, monitoring, and continuous improvement services.',
      icon: <Settings className="w-6 h-6" />,
      duration: 'Ongoing'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'System Uptime Guarantee', icon: <Zap className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention Rate', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Availability', icon: <Clock className="w-6 h-6" /> }
  ];

  const industries = [
    {
      name: 'Healthcare',
      solutions: ['HIPAA Compliance', 'EMR Systems', 'Telemedicine', 'Data Security'],
      icon: <Heart className="w-6 h-6" />,
      clients: '50+ Hospitals'
    },
    {
      name: 'Finance',
      solutions: ['PCI Compliance', 'Fraud Detection', 'Core Banking', 'Risk Management'],
      icon: <TrendingUp className="w-6 h-6" />,
      clients: '30+ Banks'
    },
    {
      name: 'Education',
      solutions: ['LMS Integration', 'Campus Networks', 'E-learning', 'Student Portals'],
      icon: <GraduationCap className="w-6 h-6" />,
      clients: '100+ Institutions'
    },
    {
      name: 'Manufacturing',
      solutions: ['IoT Integration', 'Supply Chain', 'ERP Systems', 'Quality Control'],
      icon: <Factory className="w-6 h-6" />,
      clients: '75+ Factories'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Comprehensive IT Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Enterprise IT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions & Services</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                End-to-end IT services that drive digital transformation, enhance security, 
                and optimize business operations for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get IT Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Solutions
                </button>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-600">IT Services</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet the evolving needs of modern businesses across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  service.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-gray-100 hover:border-blue-200'
                } group`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {service.deliveryTime}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {service.complexity}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              End-to-end IT solutions covering every aspect of your digital infrastructure and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{solution.category}</h3>
                <div className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-600">5-Step</span> Process
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A structured approach that ensures successful IT implementation and long-term business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Specialized IT solutions tailored to meet the unique challenges and compliance requirements of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{industry.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{industry.clients}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="text-cyan-400">Partnerships</span>
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              We partner with leading technology providers to deliver best-in-class solutions and ensure optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-cyan-500/50 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Real-world examples of how our IT solutions have transformed businesses and driven measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{study.title}</h3>
                  <p className="text-blue-600 text-sm mb-4 font-medium">{study.client}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive IT solutions can optimize your operations, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Solutions Expert
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified IT Professionals</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Proactive Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Helper components for missing Lucide icons
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default ITSolutions;