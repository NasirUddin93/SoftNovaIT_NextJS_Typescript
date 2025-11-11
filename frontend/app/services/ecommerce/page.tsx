'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  Zap, 
  Shield, 
  Clock,
  Truck,
  CreditCard,
  ArrowRight,
  Check,
  Grid,
  List,
  ChevronDown,
  Heart,
  Eye,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Laptop,
  Palette
} from 'lucide-react';

export default function Ecommerce() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // E-commerce solutions data
  const ecommerceProducts = [
    {
      id: 1,
      name: 'Basic E-commerce Store',
      category: 'starter',
      price: 25000,
      type: 'one-time',
      description: 'Perfect for small businesses starting their online journey with essential e-commerce features.',
      features: [
        'Up to 50 products',
        'Basic product management',
        'Payment gateway integration',
        'Order management system',
        'Mobile responsive design',
        'Basic SEO optimization'
      ],
      delivery: '2-3 weeks',
      support: '3 months free support',
      rating: 4.5,
      reviews: 28,
      popular: false,
      image: '/images/ecommerce/basic-store.jpg'
    },
    {
      id: 2,
      name: 'Professional Online Store',
      category: 'professional',
      price: 50000,
      type: 'one-time',
      description: 'Complete e-commerce solution with advanced features for growing businesses.',
      features: [
        'Unlimited products',
        'Advanced inventory management',
        'Multiple payment gateways',
        'Customer accounts & profiles',
        'Advanced analytics dashboard',
        'Email marketing integration',
        'Social media integration',
        'Multi-language support'
      ],
      delivery: '4-5 weeks',
      support: '6 months free support',
      rating: 4.8,
      reviews: 45,
      popular: true,
      image: '/images/ecommerce/professional-store.jpg'
    },
    {
      id: 3,
      name: 'Enterprise E-commerce Platform',
      category: 'enterprise',
      price: 100000,
      type: 'one-time',
      description: 'Scalable enterprise solution for large businesses with complex requirements.',
      features: [
        'Unlimited products & categories',
        'Multi-vendor marketplace',
        'Custom ERP integration',
        'Advanced reporting & analytics',
        'AI-powered recommendations',
        'Mobile app development',
        'Custom payment solutions',
        'Priority 24/7 support',
        'Custom feature development',
        'Performance optimization'
      ],
      delivery: '6-8 weeks',
      support: '12 months free support',
      rating: 4.9,
      reviews: 32,
      popular: false,
      image: '/images/ecommerce/enterprise-platform.jpg'
    },
    {
      id: 4,
      name: 'E-commerce Monthly Support',
      category: 'support',
      price: 3000,
      type: 'monthly',
      description: 'Ongoing maintenance and support for your e-commerce store.',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Bug fixes & troubleshooting',
        'Backup management',
        'Content updates',
        'SEO optimization',
        'Analytics reporting',
        '24/7 technical support'
      ],
      delivery: 'Immediate',
      support: 'Ongoing',
      rating: 4.7,
      reviews: 67,
      popular: true,
      image: '/images/ecommerce/support-plan.jpg'
    },
    {
      id: 5,
      name: 'Custom E-commerce Development',
      category: 'custom',
      price: 150000,
      type: 'custom',
      description: 'Fully customized e-commerce solution tailored to your specific business needs.',
      features: [
        'Custom design & development',
        'Unique functionality',
        'Third-party API integration',
        'Custom payment processing',
        'Advanced user experience',
        'Scalable architecture',
        'Dedicated project manager',
        'Source code ownership'
      ],
      delivery: '8-12 weeks',
      support: 'Lifetime support available',
      rating: 5.0,
      reviews: 18,
      popular: false,
      image: '/images/ecommerce/custom-solution.jpg'
    },
    {
      id: 6,
      name: 'E-commerce Marketing Package',
      category: 'marketing',
      price: 20000,
      type: 'one-time',
      description: 'Complete digital marketing setup to drive traffic and sales to your store.',
      features: [
        'SEO optimization',
        'Social media integration',
        'Email marketing setup',
        'Google Analytics configuration',
        'Conversion rate optimization',
        'PPC campaign setup',
        'Content marketing strategy',
        'Sales funnel optimization'
      ],
      delivery: '2 weeks',
      support: '1 month free support',
      rating: 4.6,
      reviews: 23,
      popular: false,
      image: '/images/ecommerce/marketing-package.jpg'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Solutions', count: ecommerceProducts.length },
    { id: 'starter', name: 'Starter Stores', count: ecommerceProducts.filter(p => p.category === 'starter').length },
    { id: 'professional', name: 'Professional', count: ecommerceProducts.filter(p => p.category === 'professional').length },
    { id: 'enterprise', name: 'Enterprise', count: ecommerceProducts.filter(p => p.category === 'enterprise').length },
    { id: 'support', name: 'Support Plans', count: ecommerceProducts.filter(p => p.category === 'support').length },
    { id: 'custom', name: 'Custom Solutions', count: ecommerceProducts.filter(p => p.category === 'custom').length },
    { id: 'marketing', name: 'Marketing', count: ecommerceProducts.filter(p => p.category === 'marketing').length }
  ];

  // Features showcase
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs that work perfectly on all devices'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple secure payment gateway integrations'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimized',
      description: 'Built-in SEO features to rank higher in search results'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interfaces for both customers and admins'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Multi-currency and multi-language support'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and excellent user experience'
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We understand your business requirements and goals'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Create detailed project plan and timeline'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build your e-commerce solution with regular updates'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Deploy and launch your online store'
    },
    {
      step: '5',
      title: 'Support',
      description: 'Ongoing maintenance and optimization'
    }
  ];

  // Filter products
  const filteredProducts = selectedCategory === 'all' 
    ? ecommerceProducts 
    : ecommerceProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Boost Your Online Sales</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Powerful <span className="text-green-500">E-commerce</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your business with our comprehensive e-commerce solutions. 
                From simple online stores to complex multi-vendor marketplaces, we build platforms that drive sales and growth.
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
                Why Choose Our <span className="text-green-500">E-commerce</span> Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We build e-commerce platforms that are not just beautiful, but also drive real business results.
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
                Our <span className="text-green-500">E-commerce</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect e-commerce solution for your business needs and budget.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
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
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  } ${product.popular ? 'ring-2 ring-green-500' : ''}`}
                >
                  
                  {/* Product Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full h-48'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <ShoppingCart className="w-12 h-12 text-green-500" />
                    </div>
                    
                    {/* Popular Badge */}
                    {product.popular && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <div className="flex gap-1">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">৳{product.price.toLocaleString()}</span>
                      {product.type === 'monthly' && (
                        <span className="text-gray-500 text-sm">/month</span>
                      )}
                      {product.type === 'one-time' && (
                        <span className="text-gray-500 text-sm"> one-time</span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="space-y-2">
                        {product.features.slice(0, viewMode === 'list' ? 6 : 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Truck className="w-4 h-4" />
                        <span>{product.delivery}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>{product.support}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Get Quote
                      </button>
                      <button className="px-4 py-3 border border-gray-300 hover:border-green-500 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Process</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                From concept to launch, we follow a proven process to deliver exceptional e-commerce solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {/* Connecting Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-green-200 -z-10"></div>
                    )}
                    
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
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
              Ready to Start Your E-commerce Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s build an e-commerce platform that drives growth and exceeds your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}