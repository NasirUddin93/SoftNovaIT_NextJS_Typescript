'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Check,
  Grid,
  List,
  ChevronDown,
  Star,
  Eye,
  Download,
  Calendar,
  Clock,
  TrendingUp,
  Smartphone,
  Globe,
  Server,
  Palette,
  BarChart3,
  Workflow
} from 'lucide-react';

// Software solutions data
const softwareSolutions = [
  {
    id: 1,
    name: 'School Management System',
    category: 'education',
    industry: 'education',
    price: 75000,
    type: 'one-time',
    description: 'Comprehensive school management software for educational institutions with student, teacher, and administrative management.',
    features: [
      'Student Information System',
      'Attendance Management',
      'Grade & Report Cards',
      'Timetable Management',
      'Fee Management',
      'Library Management',
      'Parent Portal',
      'Mobile App Support'
    ],
    technologies: ['Laravel', 'React', 'MySQL', 'Node.js'],
    delivery: '6-8 weeks',
    support: '12 months free support',
    rating: 4.9,
    reviews: 34,
    popular: true,
    demoUrl: '#',
    image: '/images/software/school-management.jpg'
  },
  {
    id: 2,
    name: 'Hospital Management System',
    category: 'healthcare',
    industry: 'healthcare',
    price: 120000,
    type: 'one-time',
    description: 'Complete hospital management solution for patient care, appointments, billing, and inventory management.',
    features: [
      'Patient Records Management',
      'Appointment Scheduling',
      'Electronic Health Records',
      'Pharmacy Management',
      'Laboratory Management',
      'Billing & Insurance',
      'Inventory Management',
      'Staff Management'
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
    delivery: '8-10 weeks',
    support: '12 months free support',
    rating: 4.8,
    reviews: 28,
    popular: false,
    demoUrl: '#',
    image: '/images/software/hospital-management.jpg'
  },
  {
    id: 3,
    name: 'Inventory Management System',
    category: 'business',
    industry: 'retail',
    price: 45000,
    type: 'one-time',
    description: 'Advanced inventory tracking and management system for retail and wholesale businesses.',
    features: [
      'Real-time Inventory Tracking',
      'Purchase Order Management',
      'Sales & Order Management',
      'Supplier Management',
      'Barcode Integration',
      'Stock Alerts',
      'Reporting & Analytics',
      'Multi-location Support'
    ],
    technologies: ['Node.js', 'Vue.js', 'MongoDB', 'Express'],
    delivery: '4-6 weeks',
    support: '6 months free support',
    rating: 4.7,
    reviews: 42,
    popular: true,
    demoUrl: '#',
    image: '/images/software/inventory-management.jpg'
  },
  {
    id: 4,
    name: 'CRM Software',
    category: 'business',
    industry: 'all',
    price: 60000,
    type: 'one-time',
    description: 'Customer Relationship Management software to streamline sales, marketing, and customer service.',
    features: [
      'Lead Management',
      'Sales Pipeline',
      'Customer Database',
      'Email Marketing',
      'Task Management',
      'Reporting Dashboard',
      'Mobile App',
      'API Integration'
    ],
    technologies: ['Laravel', 'React', 'MySQL', 'Redis'],
    delivery: '6-8 weeks',
    support: '12 months free support',
    rating: 4.6,
    reviews: 39,
    popular: false,
    demoUrl: '#',
    image: '/images/software/crm.jpg'
  },
  {
    id: 5,
    name: 'ERP System',
    category: 'enterprise',
    industry: 'manufacturing',
    price: 250000,
    type: 'one-time',
    description: 'Enterprise Resource Planning system integrating all business processes and departments.',
    features: [
      'Finance & Accounting',
      'Human Resources',
      'Supply Chain Management',
      'Manufacturing',
      'Sales & Distribution',
      'Project Management',
      'Business Intelligence',
      'Custom Module Development'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle'],
    delivery: '12-16 weeks',
    support: '24 months free support',
    rating: 4.9,
    reviews: 23,
    popular: false,
    demoUrl: '#',
    image: '/images/software/erp.jpg'
  },
  {
    id: 6,
    name: 'Custom Mobile App Development',
    category: 'mobile',
    industry: 'all',
    price: 80000,
    type: 'project',
    description: 'Custom mobile applications for iOS and Android platforms with native performance.',
    features: [
      'Native iOS & Android',
      'Cross-Platform Options',
      'UI/UX Design',
      'Backend Integration',
      'Push Notifications',
      'Offline Capability',
      'App Store Deployment',
      'Maintenance & Updates'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'REST API'],
    delivery: '8-12 weeks',
    support: '6 months free support',
    rating: 4.8,
    reviews: 47,
    popular: true,
    demoUrl: '#',
    image: '/images/software/mobile-app.jpg'
  },
  {
    id: 7,
    name: 'E-commerce Platform',
    category: 'ecommerce',
    industry: 'retail',
    price: 55000,
    type: 'one-time',
    description: 'Custom e-commerce platform with advanced features for online retail businesses.',
    features: [
      'Product Management',
      'Shopping Cart',
      'Payment Gateway',
      'Order Management',
      'Inventory Tracking',
      'Customer Accounts',
      'Admin Dashboard',
      'Multi-vendor Support'
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
    delivery: '6-8 weeks',
    support: '12 months free support',
    rating: 4.7,
    reviews: 51,
    popular: false,
    demoUrl: '#',
    image: '/images/software/ecommerce-platform.jpg'
  },
  {
    id: 8,
    name: 'AI-Powered Analytics',
    category: 'ai',
    industry: 'all',
    price: 95000,
    type: 'one-time',
    description: 'Advanced analytics platform with AI and machine learning capabilities for business intelligence.',
    features: [
      'Predictive Analytics',
      'Data Visualization',
      'Machine Learning Models',
      'Real-time Dashboards',
      'Custom Reports',
      'Data Integration',
      'Automated Insights',
      'API Access'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    delivery: '10-12 weeks',
    support: '12 months free support',
    rating: 4.9,
    reviews: 19,
    popular: false,
    demoUrl: '#',
    image: '/images/software/ai-analytics.jpg'
  }
];

// Categories
const categories = [
  { id: 'all', name: 'All Solutions', count: softwareSolutions.length },
  { id: 'education', name: 'Education', count: softwareSolutions.filter(s => s.category === 'education').length },
  { id: 'healthcare', name: 'Healthcare', count: softwareSolutions.filter(s => s.category === 'healthcare').length },
  { id: 'business', name: 'Business', count: softwareSolutions.filter(s => s.category === 'business').length },
  { id: 'enterprise', name: 'Enterprise', count: softwareSolutions.filter(s => s.category === 'enterprise').length },
  { id: 'mobile', name: 'Mobile Apps', count: softwareSolutions.filter(s => s.category === 'mobile').length },
  { id: 'ecommerce', name: 'E-commerce', count: softwareSolutions.filter(s => s.category === 'ecommerce').length },
  { id: 'ai', name: 'AI & Analytics', count: softwareSolutions.filter(s => s.category === 'ai').length }
];

// Industries
const industries = [
  { id: 'all', name: 'All Industries' },
  { id: 'education', name: 'Education' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'retail', name: 'Retail' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'finance', name: 'Finance' },
  { id: 'logistics', name: 'Logistics' }
];

// Features showcase
const features = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with reliable performance'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and efficient resource usage'
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    description: 'Deploy on-premise or in the cloud'
  },
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Intuitive interfaces for better user experience'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Built-in reporting and business intelligence'
  },
  {
    icon: Workflow,
    title: 'Customizable',
    description: 'Tailored to your specific business needs'
  }
];

// Development process
const developmentProcess = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'We analyze your business needs and technical requirements'
  },
  {
    step: '02',
    title: 'Planning & Design',
    description: 'Create detailed project plan and system architecture'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular progress updates'
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Comprehensive testing to ensure quality'
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Smooth deployment and data migration'
  },
  {
    step: '06',
    title: 'Support & Maintenance',
    description: 'Ongoing support and regular updates'
  }
];

export default function SoftwareServicesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Filter solutions
  const filteredSolutions = softwareSolutions.filter(solution => {
    const categoryMatch = selectedCategory === 'all' || solution.category === selectedCategory;
    const industryMatch = selectedIndustry === 'all' || solution.industry === selectedIndustry || solution.industry === 'all';
    return categoryMatch && industryMatch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Code className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Custom Software Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Powerful <span className="text-green-500">Software</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your business with our custom software solutions. From enterprise systems to mobile applications, 
                we build scalable, secure, and efficient software that drives growth and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Our <span className="text-green-500">Software</span> Stands Out
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We build software that not only meets your requirements but exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Software</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our range of custom software solutions designed for various industries and business needs.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-green-500'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Industry Filter */}
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  {industries.map(industry => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-green-500 text-white' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-green-500 text-white' : 'text-gray-500'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }>
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  } ${solution.popular ? 'ring-2 ring-green-500' : ''}`}
                >
                  
                  {/* Solution Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full h-48'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Code className="w-12 h-12 text-green-500" />
                    </div>
                    
                    {/* Popular Badge */}
                    {solution.popular && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{solution.rating}</span>
                    </div>
                  </div>

                  {/* Solution Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="space-y-2">
                        {solution.features.slice(0, viewMode === 'list' ? 4 : 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Delivery */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{solution.delivery}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>{solution.support}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">৳{solution.price.toLocaleString()}</span>
                      {solution.type === 'one-time' && (
                        <span className="text-gray-500 text-sm"> one-time</span>
                      )}
                      {solution.type === 'monthly' && (
                        <span className="text-gray-500 text-sm">/month</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" />
                        View Demo
                      </button>
                      <button className="px-4 py-3 border border-gray-300 hover:border-green-500 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredSolutions.length === 0 && (
              <div className="text-center py-12">
                <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No solutions found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any solutions matching your selected filters.
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedIndustry('all');
                  }}
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  Clear filters and show all solutions
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-green-500">Development</span> Process
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We follow a proven agile development process to deliver high-quality software on time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentProcess.map((step, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-6 text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Software Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and build a software solution that transforms your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Technical Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}