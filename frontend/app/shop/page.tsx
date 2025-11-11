'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Eye, 
  Zap, 
  Tag,
  ArrowRight,
  Grid,
  List,
  ChevronDown,
  Check,
  Sparkles,
  Shield,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function Shop() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Product data
  const products = [
    {
      id: 1,
      name: 'Real Estate Website',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Professional real estate platform with property listings, agent profiles, and advanced search functionality.',
      features: ['Property Listings', 'Agent Profiles', 'Advanced Search', 'Contact Forms'],
      demoUrl: 'https://real-estate.syedmominulislam.com/',
      image: '/images/products/real-estate.jpg',
      rating: 4.8,
      reviews: 24,
      tags: ['Featured', 'Popular'],
      support: '24/7 Support included'
    },
    {
      id: 2,
      name: 'LMS Platform',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Complete Learning Management System with course management, student progress tracking, and payment integration.',
      features: ['Course Management', 'Progress Tracking', 'Payment Integration', 'Certificates'],
      demoUrl: 'https://lms.syedmominulislam.com/',
      image: '/images/products/lms.jpg',
      rating: 4.9,
      reviews: 18,
      tags: ['Hot'],
      support: '24/7 Support included'
    },
    {
      id: 3,
      name: 'Blog Platform',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Modern blogging platform with rich content editor, SEO optimization, and social media integration.',
      features: ['Rich Editor', 'SEO Optimized', 'Social Integration', 'Analytics'],
      demoUrl: 'https://blog.syedmominulislam.com/',
      image: '/images/products/blog.jpg',
      rating: 4.7,
      reviews: 32,
      tags: ['New'],
      support: '24/7 Support included'
    },
    {
      id: 4,
      name: 'Hospital Management',
      category: 'application',
      price: 1000,
      period: 'month',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and billing.',
      features: ['Patient Records', 'Appointments', 'Billing System', 'Inventory'],
      demoUrl: 'https://hospital.syedmominulislam.com/',
      image: '/images/products/hospital.jpg',
      rating: 4.9,
      reviews: 15,
      tags: ['Featured'],
      support: '24/7 Support included'
    },
    {
      id: 5,
      name: 'Creative Agency',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Portfolio website for creative agencies with project showcases, team profiles, and client testimonials.',
      features: ['Portfolio Showcase', 'Team Profiles', 'Testimonials', 'Contact Forms'],
      demoUrl: 'https://creatif.syedmominulislam.com/',
      image: '/images/products/creative.jpg',
      rating: 4.6,
      reviews: 21,
      tags: ['Popular'],
      support: '24/7 Support included'
    },
    {
      id: 6,
      name: 'Business Corporate',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Professional corporate website with service pages, about us section, and contact information.',
      features: ['Service Pages', 'About Section', 'Contact Info', 'Blog Integration'],
      demoUrl: 'https://demo-unit-one.syedmominulislam.com/',
      image: '/images/products/corporate.jpg',
      rating: 4.5,
      reviews: 19,
      tags: [],
      support: '24/7 Support included'
    },
    {
      id: 7,
      name: 'Travel Agency',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Travel booking platform with destination packages, booking system, and customer reviews.',
      features: ['Destination Packages', 'Booking System', 'Reviews', 'Gallery'],
      demoUrl: 'https://travel-one.syedmominulislam.com/',
      image: '/images/products/travel.jpg',
      rating: 4.8,
      reviews: 27,
      tags: ['New'],
      support: '24/7 Support included'
    },
    {
      id: 8,
      name: 'Company Profile',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Professional company profile website with team introduction, services, and project portfolio.',
      features: ['Team Introduction', 'Services', 'Portfolio', 'Client logos'],
      demoUrl: 'https://company.syedmominulislam.com/',
      image: '/images/products/company.jpg',
      rating: 4.7,
      reviews: 16,
      tags: [],
      support: '24/7 Support included'
    },
    {
      id: 9,
      name: 'Charity Organization',
      category: 'website',
      price: 1000,
      period: 'month',
      description: 'Non-profit organization website with donation system, event management, and volunteer registration.',
      features: ['Donation System', 'Event Management', 'Volunteer Registration', 'Blog'],
      demoUrl: 'https://charity.syedmominulislam.com/',
      image: '/images/products/charity.jpg',
      rating: 4.9,
      reviews: 22,
      tags: ['Featured'],
      support: '24/7 Support included'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'website', name: 'Websites', count: products.filter(p => p.category === 'website').length },
    { id: 'application', name: 'Applications', count: products.filter(p => p.category === 'application').length },
    { id: 'ecommerce', name: 'E-commerce', count: 0 },
    { id: 'custom', name: 'Custom Solutions', count: 0 }
  ];

  // Filter products based on category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Premium Digital Products</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-500">Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our collection of premium websites and applications. 
                Each product comes with full support, regular updates, and professional maintenance.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            
            {/* Controls Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-green-500' : 'text-gray-500'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-green-500' : 'text-gray-500'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid/List */}
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
                  }`}
                >
                  
                  {/* Product Image/Preview */}
                  <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full h-64'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-green-500 mx-auto mb-2" />
                        <span className="text-gray-600 text-sm">Live Preview Available</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Support Info */}
                    <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                      <Shield className="w-4 h-4" />
                      <span>{product.support}</span>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-green-600">৳{product.price}</span>
                        <span className="text-gray-500 text-sm">/{product.period}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <a
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Demo
                        </a>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                Load More Products <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="text-green-500">Products</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Every product comes with comprehensive features and dedicated support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: 'Full Support',
                    description: '24/7 technical support and regular maintenance'
                  },
                  {
                    icon: Clock,
                    title: 'Quick Setup',
                    description: 'Get your website running in just 24-48 hours'
                  },
                  {
                    icon: TrendingUp,
                    title: 'SEO Ready',
                    description: 'Optimized for search engines from day one'
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We can build a completely custom website or application tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Request Custom Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/contact"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}