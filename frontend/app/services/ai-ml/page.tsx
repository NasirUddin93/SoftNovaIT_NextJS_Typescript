'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Brain,
  Cpu,
  Database,
  Zap,
  TrendingUp,
  CheckCircle2,
  Search,
  Rocket,
  Code,
  Globe,
  Shield,
  BarChart3,
  Lightbulb,
  Target,
  Users,
  Clock,
  ArrowRight,
  Play,
  Star,
  Award,
  Calendar,
  MessageCircle,
  FileText,
  Cloud,
  Server,
  Smartphone,
  Eye,
  BookOpen,
  Sparkles,
  CircuitBoard,
  Cog,
  Microscope
} from 'lucide-react';

const AIMachineLearning: NextPage = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence systems designed to solve your specific business challenges and drive innovation.',
      features: ['Machine Learning Models', 'Deep Learning Networks', 'AI Strategy Consulting', 'Custom Algorithm Development'],
      deliveryTime: '4-8 weeks',
      complexity: 'Advanced'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast future trends, customer behavior, and business outcomes with high accuracy.',
      features: ['Time Series Analysis', 'Customer Behavior Prediction', 'Risk Assessment', 'Demand Forecasting'],
      deliveryTime: '2-4 weeks',
      complexity: 'Intermediate'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information from the world around them.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analytics'],
      deliveryTime: '6-10 weeks',
      complexity: 'Advanced'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Transform how you interact with text and speech data through advanced language understanding capabilities.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Classification', 'Language Translation'],
      deliveryTime: '4-6 weeks',
      complexity: 'Intermediate'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Generative AI',
      description: 'Create new content, designs, and solutions using cutting-edge generative models and creative AI.',
      features: ['Content Generation', 'Image Synthesis', 'Code Generation', 'Creative Design'],
      deliveryTime: '8-12 weeks',
      complexity: 'Expert'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'AI Process Automation',
      description: 'Streamline and automate complex business processes with intelligent automation solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Decision Support Systems', 'Process Optimization'],
      deliveryTime: '3-5 weeks',
      complexity: 'Intermediate'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      applications: ['Medical Diagnosis', 'Drug Discovery', 'Patient Monitoring', 'Treatment Personalization'],
      icon: <Heart className="w-6 h-6" />,
      caseStudy: 'Reduced diagnosis time by 65%'
    },
    {
      name: 'Finance',
      applications: ['Fraud Detection', 'Algorithmic Trading', 'Credit Scoring', 'Risk Management'],
      icon: <TrendingUp className="w-6 h-6" />,
      caseStudy: 'Improved fraud detection by 89%'
    },
    {
      name: 'Retail',
      applications: ['Personalized Recommendations', 'Inventory Optimization', 'Customer Segmentation', 'Price Optimization'],
      icon: <ShoppingCart className="w-6 h-6" />,
      caseStudy: 'Increased sales by 32%'
    },
    {
      name: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'],
      icon: <Factory className="w-6 h-6" />,
      caseStudy: 'Reduced downtime by 45%'
    }
  ];

  const technologies = [
    {
      category: 'Machine Learning Frameworks',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      category: 'Deep Learning',
      tools: ['Neural Networks', 'CNN', 'RNN/LSTM', 'Transformers'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: 'Cloud Platforms',
      tools: ['AWS SageMaker', 'Google AI Platform', 'Azure ML', 'IBM Watson'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: 'Data Processing',
      tools: ['Apache Spark', 'Hadoop', 'Pandas', 'NumPy'],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Retail Chain',
      results: ['35% reduction in logistics costs', '28% improvement in delivery times', '99.2% inventory accuracy'],
      duration: '6 months',
      technologies: ['Python', 'TensorFlow', 'AWS'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Intelligent Customer Service Platform',
      client: 'Financial Services Company',
      results: ['75% reduction in response time', '40% decrease in support tickets', '95% customer satisfaction'],
      duration: '4 months',
      technologies: ['NLP', 'Dialogflow', 'Google Cloud'],
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Corporation',
      results: ['50% reduction in equipment downtime', '30% maintenance cost savings', '99.8% prediction accuracy'],
      duration: '5 months',
      technologies: ['IoT Sensors', 'PyTorch', 'Azure IoT'],
      image: '/api/placeholder/400/250'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data landscape, and technical requirements to define the AI solution scope.',
      icon: <Search className="w-6 h-6" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Data Preparation',
      description: 'Our team cleans, labels, and prepares your data for model training, ensuring quality and reliability.',
      icon: <Database className="w-6 h-6" />,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'We design, train, and validate machine learning models using state-of-the-art algorithms and techniques.',
      icon: <Brain className="w-6 h-6" />,
      duration: '3-6 weeks'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'Seamless integration of AI solutions into your existing systems and infrastructure.',
      icon: <Rocket className="w-6 h-6" />,
      duration: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, performance tracking, and model retraining for sustained excellence.',
      icon: <BarChart3 className="w-6 h-6" />,
      duration: 'Ongoing'
    }
  ];

  const stats = [
    { number: '245%', label: 'Average ROI for AI Projects', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '150+', label: 'AI Solutions Deployed', icon: <Rocket className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction Rate', icon: <Star className="w-6 h-6" /> },
    { number: '3.2M', label: 'Predictions Processed Daily', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Transforming Businesses with AI</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                AI & Machine
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Learning Solutions</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to drive innovation, optimize operations, 
                and unlock new opportunities for your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Case Studies
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
              Our <span className="text-purple-600">AI & ML</span> Services
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Comprehensive artificial intelligence and machine learning solutions tailored to your unique business needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {service.deliveryTime}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {service.complexity}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-600">5-Step</span> AI Development Process
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Across <span className="text-purple-600">Industries</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Discover how artificial intelligence is transforming various sectors and creating unprecedented value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{industry.name}</h3>
                    <p className="text-green-600 text-sm font-medium">{industry.caseStudy}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-600">Technology</span> Stack
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              We leverage cutting-edge tools and frameworks to build robust, scalable, and efficient AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:border-purple-300 hover:shadow-sm transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-cyan-400">Stories</span>
            </h2>
            <p className="text-purple-200 text-xl max-w-3xl mx-auto">
              Real-world examples of how our AI solutions have driven measurable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-cyan-300 text-sm mb-4">{study.client}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-purple-100 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-sm text-purple-200">
                    <span>Duration: {study.duration}</span>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-100">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support & Monitoring</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified AI Experts</span>
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

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default AIMachineLearning;