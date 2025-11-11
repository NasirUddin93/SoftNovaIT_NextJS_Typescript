'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  BarChart3, 
  Search, 
  Users, 
  Target, 
  TrendingUp, 
  Smartphone, 
  Mail,
  MessageCircle,
  CheckCircle2,
  Play,
  Star,
  Award,
  Calendar,
  Clock,
  Zap,
  Shield,
  HeartHandshake
} from 'lucide-react';

const DigitalMarketing: NextPage = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and other platforms.',
      features: ['Google Ads', 'Social Media Ads', 'Retargeting', 'Conversion Tracking']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience through strategic social media management.',
      features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Analytics']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns that drive conversions.',
      features: ['Automation', 'Segmentation', 'A/B Testing', 'Performance Analytics']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your target audience.',
      features: ['Blog Content', 'Video Production', 'Infographics', 'Content Strategy']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed performance reports.',
      features: ['KPI Tracking', 'Custom Dashboards', 'ROI Analysis', 'Monthly Reports']
    }
  ];

  const stats = [
    { number: '245%', label: 'Average ROI Increase' },
    { number: '150+', label: 'Happy Clients' },
    { number: '3.2M', label: 'Monthly Traffic Generated' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechGrowth Inc',
      content: 'Their digital marketing strategy increased our leads by 300% in just 6 months. Absolutely phenomenal results!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartUp Ventures',
      content: 'The team transformed our online presence. Our social media engagement has never been higher.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'EcoProducts LLC',
      content: 'Outstanding SEO work that put us on the first page for all our key terms. Highly recommended!',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business, competitors, and target audience to create a customized strategy.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We develop a comprehensive digital marketing plan tailored to your specific goals.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our team executes the strategy across all selected channels with precision and expertise.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Optimization & Reporting',
      description: 'We continuously optimize campaigns and provide detailed performance reports.',
      icon: <TrendingUp className="w-6 h-6" />
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
              <div className="inline-flex items-center bg-blue-800/30 rounded-full px-4 py-2 mb-6 border border-blue-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">#1 Digital Marketing Agency</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Grow Your Business With
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Digital Excellence</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                We drive measurable results through data-driven digital marketing strategies. 
                Increase your revenue, boost brand awareness, and dominate your market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Free Consultation
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
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
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
              Our <span className="text-cyan-600">Digital Marketing</span> Services
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-cyan-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Our <span className="text-cyan-600">4-Step</span> Process
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A proven methodology that delivers consistent results and drives sustainable growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-cyan-400">Clients Say</span>
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-cyan-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Call
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-cyan-100">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DigitalMarketing;