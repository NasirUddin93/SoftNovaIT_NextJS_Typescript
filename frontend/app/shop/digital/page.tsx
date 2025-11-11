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
  Download,
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
  Music,
  BookOpen,
  FileText,
  ShoppingBag,
  Tag,
  Truck,
  Headphones,
  RotateCcw,
  Crown
} from 'lucide-react';
import { useState } from 'react';

const DigitalShop: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', count: 28, icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'templates', name: 'Website Templates', count: 8, icon: <Code className="w-5 h-5" /> },
    { id: 'ui-kits', name: 'UI Kits', count: 6, icon: <Palette className="w-5 h-5" /> },
    { id: 'plugins', name: 'Plugins & Scripts', count: 5, icon: <Zap className="w-5 h-5" /> },
    { id: 'courses', name: 'Online Courses', count: 4, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'graphics', name: 'Digital Graphics', count: 3, icon: <Sparkles className="w-5 h-5" /> },
    { id: 'audio', name: 'Audio & Music', count: 2, icon: <Music className="w-5 h-5" /> }
  ];

  const products = [
    {
      id: 1,
      name: 'Nexus - React Admin Dashboard',
      description: 'Complete admin dashboard template with 50+ components, dark mode, and responsive design.',
      price: 49,
      originalPrice: 89,
      image: '/api/placeholder/300/200',
      category: 'templates',
      rating: 4.9,
      reviews: 1247,
      sales: 2840,
      features: ['React + TypeScript', '50+ Components', 'Dark Mode', 'Fully Responsive'],
      tags: ['bestseller', 'trending'],
      delivery: 'Instant Download',
      updates: 'Lifetime Free Updates',
      popular: true
    },
    {
      id: 2,
      name: 'AI-Powered Analytics Plugin',
      description: 'Advanced analytics plugin with AI insights, real-time data visualization, and automated reporting.',
      price: 79,
      originalPrice: 129,
      image: '/api/placeholder/300/200',
      category: 'plugins',
      rating: 4.8,
      reviews: 892,
      sales: 1560,
      features: ['AI Insights', 'Real-time Data', 'Custom Reports', 'API Integration'],
      tags: ['featured', 'ai'],
      delivery: 'Instant Download',
      updates: '1 Year Support',
      popular: true
    },
    {
      id: 3,
      name: 'Modern UI Kit Pro',
      description: 'Comprehensive UI kit with 200+ components, design system, and Figma files included.',
      price: 39,
      originalPrice: 69,
      image: '/api/placeholder/300/200',
      category: 'ui-kits',
      rating: 4.7,
      reviews: 734,
      sales: 2180,
      features: ['200+ Components', 'Figma Files', 'Design System', 'Customizable'],
      tags: ['bestseller'],
      delivery: 'Instant Download',
      updates: 'Lifetime Free Updates'
    },
    {
      id: 4,
      name: 'Full Stack Web Development Course',
      description: 'Complete course covering React, Node.js, databases, and deployment with real projects.',
      price: 99,
      originalPrice: 199,
      image: '/api/placeholder/300/200',
      category: 'courses',
      rating: 4.9,
      reviews: 1563,
      sales: 3240,
      features: ['30+ Hours Video', '5 Real Projects', 'Certificate', 'Community Access'],
      tags: ['featured', 'trending'],
      delivery: 'Instant Access',
      updates: 'Lifetime Access',
      popular: true
    },
    {
      id: 5,
      name: 'E-Commerce Website Template',
      description: 'Professional e-commerce template with shopping cart, payment integration, and admin panel.',
      price: 59,
      originalPrice: 99,
      image: '/api/placeholder/300/200',
      category: 'templates',
      rating: 4.6,
      reviews: 567,
      sales: 1420,
      features: ['Shopping Cart', 'Payment Integration', 'Admin Panel', 'Mobile Ready'],
      tags: ['bestseller'],
      delivery: 'Instant Download',
      updates: 'Lifetime Free Updates'
    },
    {
      id: 6,
      name: 'Digital Marketing Analytics Tool',
      description: 'Comprehensive marketing analytics with campaign tracking, ROI analysis, and automation.',
      price: 129,
      originalPrice: 199,
      image: '/api/placeholder/300/200',
      category: 'plugins',
      rating: 4.8,
      reviews: 423,
      sales: 890,
      features: ['Campaign Tracking', 'ROI Analysis', 'Automation', 'Multi-platform'],
      tags: ['featured'],
      delivery: 'Instant Download',
      updates: '1 Year Support'
    },
    {
      id: 7,
      name: 'Premium Icon Pack - 5000+ Icons',
      description: 'Massive icon collection with multiple styles, formats, and commercial license.',
      price: 29,
      originalPrice: 49,
      image: '/api/placeholder/300/200',
      category: 'graphics',
      rating: 4.7,
      reviews: 1289,
      sales: 4560,
      features: ['5000+ Icons', 'Multiple Styles', 'SVG & PNG', 'Commercial License'],
      tags: ['trending'],
      delivery: 'Instant Download',
      updates: 'Lifetime Free Updates'
    },
    {
      id: 8,
      name: 'Mobile App UI Components',
      description: 'React Native UI components library with 100+ pre-built components and animations.',
      price: 45,
      originalPrice: 79,
      image: '/api/placeholder/300/200',
      category: 'ui-kits',
      rating: 4.5,
      reviews: 378,
      sales: 1120,
      features: ['100+ Components', 'React Native', 'Smooth Animations', 'Customizable'],
      tags: [],
      delivery: 'Instant Download',
      updates: 'Lifetime Free Updates'
    }
  ];

  const featuredProducts = products.filter(product => product.popular);
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Headphones className="w-6 h-6" /> },
    { number: '100%', label: 'Satisfaction Guarantee', icon: <Award className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Instant Delivery',
      description: 'Get immediate access to your digital products after purchase'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: 'All transactions are protected with industry-standard encryption'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Money Back Guarantee',
      description: '30-day refund policy if you are not satisfied with your purchase'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Premium Support',
      description: 'Dedicated support team to help you with any questions'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      content: 'The React admin dashboard saved me weeks of development time. The code quality is exceptional!',
      product: 'Nexus - React Admin Dashboard',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Product Manager',
      content: 'The analytics plugin provided insights we never had before. Game changer for our business!',
      product: 'AI-Powered Analytics Plugin',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      content: 'The UI kit is incredibly comprehensive. It accelerated our design process by 50%.',
      product: 'Modern UI Kit Pro',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Premium Digital Products</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build Amazing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Digital Experiences</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Discover premium templates, tools, and resources to accelerate your development 
                and create stunning digital products faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
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

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-600">Products</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Hand-picked premium digital products that our customers love and recommend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative">
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Crown className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
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

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {product.rating} ({product.reviews})
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Delivery & Updates */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {product.delivery}
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      {product.updates}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="text-cyan-600">Digital Products</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Browse our complete collection of premium digital assets and tools.
              </p>
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 border-0 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {product.rating}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.sales} sales
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-800">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Shop <span className="text-cyan-600">With Us?</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              We're committed to providing the best digital products shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-cyan-600">Customers Say</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Join thousands of satisfied developers, designers, and creators who trust our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-cyan-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500">Purchased: {testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your Projects?
            </h2>
            <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto">
              Join 50,000+ developers and creators who are building amazing things with our digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Shopping Now
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Free Resources
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-cyan-100">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Secure Payment Processing</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DigitalShop;