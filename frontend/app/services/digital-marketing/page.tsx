'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Check,
  ArrowRight,
  Play,
  Download,
  Star,
  Clock,
  Globe,
  Users,
  Mail,
  Smartphone,
  MessageSquare,
  Share2,
  Video,
  Search,
  FileText,
  Award,
  LineChart,
  DollarSign,
  Heart
} from 'lucide-react';

// Digital Marketing Services
const dmServices = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website visibility in search engines and drive organic traffic.',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Content Optimization',
      'Local SEO Implementation',
      'Monthly Performance Reports'
    ],
    results: ['Higher Search Rankings', 'Increased Organic Traffic', 'Better Conversion Rates']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand presence and engage with your audience across social platforms.',
    features: [
      'Social Media Strategy',
      'Content Creation & Publishing',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Performance Analytics'
    ],
    results: ['Increased Brand Awareness', 'Higher Engagement Rates', 'More Qualified Leads']
  },
  {
    icon: DollarSign,
    title: 'PPC Advertising',
    description: 'Drive immediate traffic and conversions with targeted paid campaigns.',
    features: [
      'Google Ads Management',
      'Facebook/Instagram Ads',
      'LinkedIn Advertising',
      'Display Network Campaigns',
      'Remarketing Strategies',
      'ROI Optimization'
    ],
    results: ['Immediate Results', 'Targeted Audience Reach', 'Measurable ROI']
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and build customer relationships through personalized email campaigns.',
    features: [
      'Email Strategy Development',
      'List Building & Segmentation',
      'Automated Campaigns',
      'Newsletter Design',
      'A/B Testing',
      'Performance Tracking'
    ],
    results: ['Higher Conversion Rates', 'Improved Customer Retention', 'Increased Repeat Sales']
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Create valuable content that attracts, engages, and converts your target audience.',
    features: [
      'Content Strategy Planning',
      'Blog Post Creation',
      'Video Content Production',
      'Infographic Design',
      'Content Distribution',
      'Performance Analysis'
    ],
    results: ['Establish Authority', 'Build Trust', 'Drive Long-term Growth']
  },
  {
    icon: Video,
    title: 'Video Marketing',
    description: 'Leverage the power of video to tell your brand story and connect with audiences.',
    features: [
      'Video Strategy Development',
      'Script Writing & Storyboarding',
      'Professional Video Production',
      'YouTube Channel Management',
      'Video SEO Optimization',
      'Performance Analytics'
    ],
    results: ['Higher Engagement', 'Better Conversion Rates', 'Increased Social Shares']
  }
];

// Marketing Packages
const marketingPackages = [
  {
    name: 'Starter Package',
    price: 12000,
    period: 'month',
    description: 'Perfect for small businesses starting their digital marketing journey',
    bestFor: 'Startups & Small Businesses',
    features: [
      'Basic SEO Optimization',
      'Social Media Management (2 platforms)',
      '4 Blog Posts per Month',
      'Google Ads Management (৳5,000 ad spend)',
      'Monthly Performance Report',
      'Email Support',
      'Up to 5 Keywords Tracking'
    ],
    popular: false
  },
  {
    name: 'Growth Package',
    price: 25000,
    period: 'month',
    description: 'Comprehensive marketing strategy for growing businesses',
    bestFor: 'Growing Businesses',
    features: [
      'Advanced SEO Strategy',
      'Social Media Management (4 platforms)',
      '8 Blog Posts per Month',
      'PPC Management (৳10,000 ad spend)',
      'Email Marketing Campaigns',
      'Weekly Performance Reports',
      'Up to 15 Keywords Tracking',
      'Priority Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise Package',
    price: 50000,
    period: 'month',
    description: 'Full-scale digital marketing for established businesses',
    bestFor: 'Established Businesses',
    features: [
      'Comprehensive SEO Strategy',
      'Full Social Media Management',
      '16 Blog Posts per Month',
      'Multi-channel PPC Management',
      'Advanced Email Marketing',
      'Video Marketing',
      'Daily Performance Monitoring',
      'Dedicated Account Manager',
      'Unlimited Keywords Tracking',
      '24/7 Priority Support'
    ],
    popular: false
  }
];

// Benefits
const benefits = [
  {
    icon: Target,
    title: 'Targeted Audience Reach',
    description: 'Reach the right people at the right time with precision targeting'
  },
  {
    icon: LineChart,
    title: 'Measurable Results',
    description: 'Track every campaign with detailed analytics and ROI reporting'
  },
  {
    icon: Zap,
    title: 'Faster Growth',
    description: 'Accelerate your business growth with proven marketing strategies'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Get better results than traditional marketing at a fraction of the cost'
  }
];

// Process
const processSteps = [
  {
    step: '1',
    title: 'Strategy & Planning',
    description: 'We analyze your business and develop a customized marketing strategy'
  },
  {
    step: '2',
    title: 'Campaign Setup',
    description: 'Implement and optimize all marketing channels and campaigns'
  },
  {
    step: '3',
    title: 'Execution & Management',
    description: 'Continuous campaign management and performance optimization'
  },
  {
    step: '4',
    title: 'Analysis & Reporting',
    description: 'Detailed reporting and strategy refinement based on results'
  }
];

// Case Studies
const caseStudies = [
  {
    industry: 'E-commerce Fashion',
    result: '400% Increase in Online Sales',
    duration: '4 Months',
    strategy: 'Social Media + Influencer Marketing',
    metrics: ['320% ROI', '15,000+ New Followers', '2,500+ Sales']
  },
  {
    industry: 'SaaS Company',
    result: '280% More Qualified Leads',
    duration: '6 Months',
    strategy: 'Content Marketing + SEO',
    metrics: ['45% Lower CAC', '200+ Blog Posts', 'Top 10 Rankings']
  },
  {
    industry: 'Local Restaurant Chain',
    result: '150% Increase in Reservations',
    duration: '3 Months',
    strategy: 'Local SEO + Social Media',
    metrics: ['85% Local Search Visibility', '1,200+ Reviews', '90% Occupancy Rate']
  },
  {
    industry: 'B2B Service Provider',
    result: '220% Growth in Client Acquisition',
    duration: '8 Months',
    strategy: 'LinkedIn Ads + Email Marketing',
    metrics: ['35% Conversion Rate', '500+ Leads', '50% Revenue Growth']
  }
];

// Platforms we work with
const platforms = [
  { name: 'Google Ads', icon: '🔍' },
  { name: 'Facebook/Instagram', icon: '📱' },
  { name: 'LinkedIn', icon: '💼' },
  { name: 'YouTube', icon: '🎥' },
  { name: 'Twitter', icon: '🐦' },
  { name: 'TikTok', icon: '🎵' },
  { name: 'Pinterest', icon: '📌' },
  { name: 'Email Platforms', icon: '✉️' }
];

export default function DigitalMarketingPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Data-Driven Marketing Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital <span className="text-green-500">Marketing</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Drive growth, increase revenue, and build your brand with our comprehensive digital marketing strategies. 
                We combine creativity with data to deliver measurable results for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Get Free Marketing Audit <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Marketing</span> Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business goals and target audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dmServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Expected Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.results.map((result, resultIndex) => (
                        <span
                          key={resultIndex}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Platforms We <span className="text-green-500">Master</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We have expertise in all major digital marketing platforms to maximize your reach and results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors duration-300">
                    <span className="text-2xl">{platform.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-900">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">Process</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                A proven 4-step process to ensure your digital marketing success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Marketing <span className="text-green-500">Packages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect digital marketing package for your business needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {marketingPackages.map((packageItem, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                    packageItem.popular 
                      ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-2xl scale-105' 
                      : 'bg-white text-gray-900 shadow-lg border border-gray-100'
                  }`}
                >
                  {/* Popular Badge */}
                  {packageItem.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{packageItem.name}</h3>
                  <p className={`mb-2 text-sm ${packageItem.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {packageItem.bestFor}
                  </p>
                  <p className={`mb-6 ${packageItem.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {packageItem.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">৳{packageItem.price.toLocaleString()}</span>
                    <span className={packageItem.popular ? 'text-white/80' : 'text-gray-500'}>
                      /{packageItem.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {packageItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${packageItem.popular ? 'text-white' : 'text-green-500'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    packageItem.popular 
                      ? 'bg-white text-green-500 hover:bg-gray-100' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}>
                    Get Started <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Marketing <span className="text-green-500">Success</span> Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we&apos;ve helped businesses achieve remarkable growth through digital marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-green-500 text-2xl font-bold mb-1">{caseStudy.result}</div>
                      <div className="text-gray-900 font-semibold">{caseStudy.industry}</div>
                      <div className="text-gray-500 text-sm">{caseStudy.duration} • {caseStudy.strategy}</div>
                    </div>
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {caseStudy.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-gray-900 font-semibold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    View Case Study Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s develop a custom digital marketing strategy that drives real business growth and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Free Marketing Plan <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Book Strategy Session
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}