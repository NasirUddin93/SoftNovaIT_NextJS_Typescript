'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { 
  Search, 
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
  FileText,
  MessageSquare,
  Users,
  Shield,
  Award,
  LineChart,
  Smartphone,
  Mail
} from 'lucide-react';

// SEO Services data
const seoServices = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Comprehensive keyword analysis to target the right audience and drive qualified traffic.',
    features: [
      'Competitor Keyword Analysis',
      'Long-tail Keyword Research',
      'Search Volume Analysis',
      'Keyword Difficulty Assessment',
      'Local SEO Keywords'
    ]
  },
  {
    icon: FileText,
    title: 'On-Page SEO',
    description: 'Optimize your website content and structure for better search engine visibility.',
    features: [
      'Meta Tags Optimization',
      'Content Optimization',
      'URL Structure',
      'Header Tags',
      'Internal Linking'
    ]
  },
  {
    icon: Globe,
    title: 'Technical SEO',
    description: 'Improve your website technical foundation for better crawling and indexing.',
    features: [
      'Website Speed Optimization',
      'Mobile Responsiveness',
      'XML Sitemap Creation',
      'Robots.txt Optimization',
      'Structured Data Markup'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Off-Page SEO',
    description: 'Build quality backlinks and online presence to improve domain authority.',
    features: [
      'Link Building Strategy',
      'Guest Posting',
      'Local Citations',
      'Social Signals',
      'Brand Mentions'
    ]
  },
  {
    icon: BarChart3,
    title: 'SEO Analytics',
    description: 'Track performance and measure ROI with comprehensive analytics and reporting.',
    features: [
      'Google Analytics Setup',
      'Rank Tracking',
      'Traffic Analysis',
      'Conversion Tracking',
      'Custom Reports'
    ]
  },
  {
    icon: Target,
    title: 'Local SEO',
    description: 'Dominate local search results and attract customers in your geographic area.',
    features: [
      'Google Business Optimization',
      'Local Citations',
      'Review Management',
      'Local Directory Listings',
      'Map Pack Optimization'
    ]
  }
];

// SEO Packages
const seoPackages = [
  {
    name: 'Starter SEO',
    price: 8000,
    period: 'month',
    description: 'Perfect for small businesses starting their SEO journey',
    bestFor: 'Small Businesses & Startups',
    features: [
      '50 Keywords Optimization',
      'On-Page SEO Audit',
      'Basic Technical SEO',
      'Monthly Performance Report',
      'Google Analytics Setup',
      'Google Search Console Setup',
      '1 Blog Post per Month',
      'Email Support'
    ],
    popular: false
  },
  {
    name: 'Professional SEO',
    price: 15000,
    period: 'month',
    description: 'Comprehensive SEO strategy for growing businesses',
    bestFor: 'Growing Businesses',
    features: [
      '100 Keywords Optimization',
      'Complete On-Page SEO',
      'Advanced Technical SEO',
      'Weekly Performance Reports',
      'Competitor Analysis',
      '2 Blog Posts per Month',
      'Local SEO Optimization',
      'Priority Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise SEO',
    price: 25000,
    period: 'month',
    description: 'Advanced SEO solution for established businesses',
    bestFor: 'Established Businesses',
    features: [
      '200+ Keywords Optimization',
      'Full-Scale SEO Strategy',
      'Enterprise Technical SEO',
      'Daily Performance Monitoring',
      'Advanced Competitor Analysis',
      '4 Blog Posts per Month',
      'Comprehensive Local SEO',
      'Dedicated Account Manager',
      '24/7 Priority Support'
    ],
    popular: false
  }
];

// Benefits data
const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Organic Traffic',
    description: 'Drive qualified visitors to your website without paid advertising'
  },
  {
    icon: Users,
    title: 'Better Conversion Rates',
    description: 'Attract targeted visitors who are more likely to convert'
  },
  {
    icon: Shield,
    title: 'Long-term Results',
    description: 'SEO provides sustainable growth that lasts for years'
  },
  {
    icon: Award,
    title: 'Higher ROI',
    description: 'Get the best return on investment compared to other marketing channels'
  }
];

// Process steps
const processSteps = [
  {
    step: '1',
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your current SEO performance'
  },
  {
    step: '2',
    title: 'Strategy Development',
    description: 'Custom SEO strategy tailored to your business goals'
  },
  {
    step: '3',
    title: 'Implementation',
    description: 'Execute the SEO plan with ongoing optimization'
  },
  {
    step: '4',
    title: 'Monitoring & Reporting',
    description: 'Track progress and provide detailed performance reports'
  }
];

// Case studies
const caseStudies = [
  {
    industry: 'E-commerce',
    result: '320% Increase in Organic Traffic',
    duration: '6 Months',
    description: 'Transformed an online store SEO strategy resulting in massive traffic growth'
  },
  {
    industry: 'Education',
    result: 'Top 3 Rankings for 45 Keywords',
    duration: '8 Months',
    description: 'Helped an educational institute dominate search results in their niche'
  },
  {
    industry: 'Healthcare',
    result: '180% More Appointment Bookings',
    duration: '5 Months',
    description: 'Increased patient appointments through targeted local SEO strategy'
  },
  {
    industry: 'Real Estate',
    result: '450% ROI in First Year',
    duration: '12 Months',
    description: 'Generated massive returns through comprehensive real estate SEO'
  }
];

export default function SEOServicesPage() {
  const [activeTab, setActiveTab] = useState('services');

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
                <span className="text-green-500 text-sm font-medium">Rank Higher, Grow Faster</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-green-500">SEO</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Dominate search engine results and drive sustainable growth with our data-driven SEO strategies. 
                We help businesses increase visibility, attract qualified traffic, and boost conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Get Free SEO Audit <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Success Stories
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
                Comprehensive <span className="text-green-500">SEO</span> Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our full-spectrum SEO services cover every aspect of search engine optimization to ensure maximum visibility and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {seoServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-500">SEO</span> Process
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                We follow a proven 4-step process to deliver measurable SEO results for your business.
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SEO <span className="text-green-500">Packages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect SEO package that matches your business goals and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {seoPackages.map((packageItem, index) => (
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

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SEO <span className="text-green-500">Success</span> Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we&apos;ve helped businesses across various industries achieve remarkable SEO results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-green-500 text-2xl font-bold mb-2">{caseStudy.result}</div>
                  <div className="text-gray-900 font-semibold mb-2">{caseStudy.industry}</div>
                  <div className="text-gray-500 text-sm mb-3">{caseStudy.duration}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  SEO <span className="text-green-500">FAQ</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions about our SEO services and process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: 'How long does it take to see SEO results?',
                    answer: 'Typically, you can see initial results in 3-6 months, with significant growth occurring within 6-12 months of consistent optimization.'
                  },
                  {
                    question: 'Do you offer local SEO services?',
                    answer: 'Yes, we specialize in local SEO to help businesses dominate search results in their geographic area and attract local customers.'
                  },
                  {
                    question: 'What makes your SEO services different?',
                    answer: 'We use data-driven strategies, white-hat techniques, and provide transparent reporting with clear ROI measurement.'
                  },
                  {
                    question: 'Do you work with businesses outside Bangladesh?',
                    answer: 'Absolutely! We serve clients worldwide and have experience with international SEO strategies for various markets.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s develop a custom SEO strategy that drives sustainable growth and puts your business on the map.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Free SEO Audit <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}