'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ShoppingCart,
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Clock,
  Users,
  Award,
  Shield,
  Zap,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Code,
  Palette,
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Brain,
  Video,
  MessageCircle,
  FileText,
  ShoppingBag,
  Tag,
  Headphones,
  RotateCcw,
  Crown,
  Calendar,
  MapPin,
  UserCheck,
  Rocket,
  Cpu,
  Server,
  Laptop,
  Target,
  Wallet,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';

const ServicesShop: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Services', count: 24, icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'development', name: 'Web Development', count: 8, icon: <Code className="w-5 h-5" /> },
    { id: 'design', name: 'UI/UX Design', count: 6, icon: <Palette className="w-5 h-5" /> },
    { id: 'marketing', name: 'Digital Marketing', count: 5, icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'consulting', name: 'Tech Consulting', count: 3, icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'content', name: 'Content Creation', count: 2, icon: <FileText className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 1,
      name: 'Custom Web Application Development',
      description: 'Full-stack web application development with modern technologies, responsive design, and scalable architecture.',
      price: 2999,
      pricingType: 'project',
      deliveryTime: '4-6 weeks',
      image: '/api/placeholder/300/200',
      category: 'development',
      rating: 4.9,
      reviews: 89,
      completed: 47,
      features: ['React/Next.js Development', 'Backend API Integration', 'Database Design', 'Deployment & Hosting'],
      tags: ['bestseller', 'featured'],
      expert: {
        name: 'Sarah Chen',
        role: 'Senior Full Stack Developer',
        experience: '8+ years',
        completed: 120,
        rating: 4.9,
        image: '/api/placeholder/60/60'
      },
      popular: true
    },
    {
      id: 2,
      name: 'UI/UX Design System',
      description: 'Comprehensive design system with component library, style guide, and design principles for consistent user experiences.',
      price: 1999,
      pricingType: 'project',
      deliveryTime: '3-4 weeks',
      image: '/api/placeholder/300/200',
      category: 'design',
      rating: 4.8,
      reviews: 67,
      completed: 32,
      features: ['Design System', 'Component Library', 'Style Guide', 'Design Principles'],
      tags: ['trending'],
      expert: {
        name: 'Mike Rodriguez',
        role: 'Lead UI/UX Designer',
        experience: '6+ years',
        completed: 85,
        rating: 4.8,
        image: '/api/placeholder/60/60'
      },
      popular: true
    },
    {
      id: 3,
      name: 'SEO Optimization Package',
      description: 'Comprehensive SEO audit and optimization to improve search rankings and drive organic traffic to your website.',
      price: 1499,
      pricingType: 'monthly',
      deliveryTime: '2-3 weeks',
      image: '/api/placeholder/300/200',
      category: 'marketing',
      rating: 4.7,
      reviews: 124,
      completed: 156,
      features: ['Technical SEO Audit', 'Keyword Research', 'Content Optimization', 'Performance Tracking'],
      tags: ['bestseller'],
      expert: {
        name: 'Emily Davis',
        role: 'SEO Specialist',
        experience: '5+ years',
        completed: 200,
        rating: 4.7,
        image: '/api/placeholder/60/60'
      }
    },
    {
      id: 4,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application development for iOS and Android with native performance and modern features.',
      price: 4499,
      pricingType: 'project',
      deliveryTime: '6-8 weeks',
      image: '/api/placeholder/300/200',
      category: 'development',
      rating: 4.9,
      reviews: 45,
      completed: 28,
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications'],
      tags: ['featured'],
      expert: {
        name: 'Alex Thompson',
        role: 'Mobile Developer',
        experience: '7+ years',
        completed: 65,
        rating: 4.9,
        image: '/api/placeholder/60/60'
      },
      popular: true
    },
    {
      id: 5,
      name: 'Digital Marketing Strategy',
      description: 'Data-driven digital marketing strategy with campaign planning, audience targeting, and performance analytics.',
      price: 999,
      pricingType: 'monthly',
      deliveryTime: '1-2 weeks',
      image: '/api/placeholder/300/200',
      category: 'marketing',
      rating: 4.6,
      reviews: 78,
      completed: 92,
      features: ['Strategy Development', 'Audience Analysis', 'Campaign Planning', 'ROI Tracking'],
      tags: [],
      expert: {
        name: 'David Kim',
        role: 'Marketing Strategist',
        experience: '8+ years',
        completed: 150,
        rating: 4.6,
        image: '/api/placeholder/60/60'
      }
    },
    {
      id: 6,
      name: 'Technical Consultation',
      description: 'Expert technical consultation for technology stack selection, architecture planning, and development guidance.',
      price: 199,
      pricingType: 'hourly',
      deliveryTime: '1-2 days',
      image: '/api/placeholder/300/200',
      category: 'consulting',
      rating: 4.8,
      reviews: 156,
      completed: 300,
      features: ['Technology Assessment', 'Architecture Review', 'Best Practices', 'Implementation Plan'],
      tags: ['trending'],
      expert: {
        name: 'Dr. Lisa Wang',
        role: 'Tech Consultant',
        experience: '10+ years',
        completed: 400,
        rating: 4.8,
        image: '/api/placeholder/60/60'
      }
    },
    {
      id: 7,
      name: 'E-commerce Website Development',
      description: 'Complete e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard.',
      price: 3999,
      pricingType: 'project',
      deliveryTime: '5-7 weeks',
      image: '/api/placeholder/300/200',
      category: 'development',
      rating: 4.7,
      reviews: 67,
      completed: 35,
      features: ['E-commerce Platform', 'Payment Integration', 'Inventory System', 'Admin Dashboard'],
      tags: [],
      expert: {
        name: 'Carlos Martinez',
        role: 'E-commerce Specialist',
        experience: '6+ years',
        completed: 55,
        rating: 4.7,
        image: '/api/placeholder/60/60'
      }
    },
    {
      id: 8,
      name: 'Content Strategy & Creation',
      description: 'Comprehensive content strategy with blog posts, social media content, and SEO-optimized articles.',
      price: 799,
      pricingType: 'monthly',
      deliveryTime: '2-3 weeks',
      image: '/api/placeholder/300/200',
      category: 'content',
      rating: 4.5,
      reviews: 89,
      completed: 120,
      features: ['Content Strategy', 'Blog Writing', 'Social Media', 'SEO Optimization'],
      tags: [],
      expert: {
        name: 'Jessica Brown',
        role: 'Content Strategist',
        experience: '4+ years',
        completed: 180,
        rating: 4.5,
        image: '/api/placeholder/60/60'
      }
    }
  ];

  const featuredServices = services.filter(service => service.popular);
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle2 className="w-6 h-6" /> },
    { number: '4.8/5', label: 'Average Rating', icon: <Star className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Professionals', icon: <UserCheck className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: 'All services come with a 100% satisfaction guarantee'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description: 'We deliver projects on time, every time'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your needs'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Flexible Revisions',
      description: 'Multiple revision rounds until you are happy'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation & Planning',
      description: 'We discuss your requirements and create a detailed project plan',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Development & Execution',
      description: 'Our experts work on your project with regular updates',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Review & Feedback',
      description: 'You review the work and provide feedback for improvements',
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'We deliver the final product and provide ongoing support',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'TechStart Inc.',
      role: 'Startup Founder',
      content: 'The custom web application transformed our business operations. The team was professional and delivered beyond expectations.',
      service: 'Custom Web Application',
      rating: 5,
      result: 'Revenue increased by 150%'
    },
    {
      name: 'DesignStudio Co.',
      role: 'Creative Director',
      content: 'The UI/UX design system provided consistency across all our products. The collaboration was seamless and productive.',
      service: 'UI/UX Design System',
      rating: 5,
      result: 'User engagement up by 65%'
    },
    {
      name: 'Global Retail Chain',
      role: 'Marketing Director',
      content: 'The SEO optimization package dramatically improved our search rankings and organic traffic within months.',
      service: 'SEO Optimization',
      rating: 5,
      result: 'Organic traffic grew by 300%'
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
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Professional Services Marketplace</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">For Your Business</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Connect with top professionals and get your projects done right. 
                From development to design, we have the experts you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Browse Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  How It Works
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

      {/* Categories Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-3">{category.icon}</span>
                {category.name}
                <span className="ml-3 bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-green-600">Services</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Most popular services chosen by our clients for exceptional quality and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Crown className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Service Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category.toUpperCase()}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {service.rating} ({service.reviews})
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expert Info */}
                  <div className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={service.expert.image} 
                      alt={service.expert.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm">{service.expert.name}</div>
                      <div className="text-gray-500 text-xs">{service.expert.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        {service.expert.rating}
                      </div>
                      <div className="text-gray-500 text-xs">{service.expert.completed} projects</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Delivery & Pricing */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.completed} completed
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-800">${service.price}</span>
                      <span className="text-sm text-gray-500 capitalize">{service.pricingType}</span>
                    </div>
                    <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Simple process to get your project started with our expert professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="text-green-600">Services</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Browse our complete collection of professional services.
              </p>
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {service.name}
                  </h3>
                  
                  {/* Expert Mini Info */}
                  <div className="flex items-center mb-3">
                    <img 
                      src={service.expert.image} 
                      alt={service.expert.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{service.expert.name}</span>
                    <div className="flex items-center ml-2 text-sm text-gray-500">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      {service.expert.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {service.rating} ({service.reviews})
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.completed} completed
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-800">${service.price}</span>
                      <span className="text-sm text-gray-500 capitalize">{service.pricingType}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                  </div>

                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-green-600">Our Services?</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              We're committed to delivering exceptional service and outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-cyan-400">Stories</span>
            </h2>
            <p className="text-green-200 text-xl max-w-3xl mx-auto">
              See how our services have helped businesses achieve their goals and drive growth.
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
                <p className="text-green-100 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                  <div className="text-green-300 text-xs mt-2">
                    <strong>Result:</strong> {testimonial.result}
                  </div>
                  <div className="text-green-200 text-xs mt-1">
                    Service: {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Browse All Services
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Expert Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesShop;