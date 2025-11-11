'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageCircle,
  Zap,
  Clock,
  Shield,
  DollarSign,
  Users,
  Globe,
  Code,
  TrendingUp
} from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ categories data
  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'pricing',
      name: 'Pricing & Plans',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'services',
      name: 'Our Services',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // FAQ items data
  const faqItems = [
    // General Questions
    {
      id: 1,
      category: 'general',
      question: 'What services do you offer?',
      answer: 'We provide comprehensive digital solutions including web development, e-commerce solutions, digital marketing, SEO optimization, UI/UX design, AI and machine learning services, and complete website support services for businesses of all sizes.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A basic website takes 2-4 weeks, e-commerce solutions 4-8 weeks, and custom applications 8+ weeks. We provide detailed timelines during project planning.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Do you work with international clients?',
      answer: 'Yes! We serve clients worldwide. We have experience working with businesses from the USA, UK, Canada, Australia, and many other countries. We accommodate different time zones and communication preferences.'
    },
    // Pricing & Plans
    {
      id: 4,
      category: 'pricing',
      question: 'How much does your website support cost?',
      answer: 'Our website support starts at ৳1,000 per month and includes regular updates, security monitoring, backups, and technical assistance. We offer three main plans: Basic (৳1,000), Standard (৳3,000), and Premium (৳5,000) per month.'
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade or change your plan at any time based on your website needs. Changes take effect immediately, and we prorate the costs accordingly.'
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Do you offer custom pricing for large projects?',
      answer: 'Yes, we provide custom quotes for enterprise-level projects and long-term partnerships. Contact us with your requirements for a personalized pricing plan.'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, bKash, Nagad, Rocket, and credit cards for international clients. All payments are secure and we provide proper invoices for every transaction.'
    },
    // Technical Support
    {
      id: 8,
      category: 'technical',
      question: 'How do I contact support?',
      answer: 'You can contact our support team via email at support@softnovait.com, live chat on our website, or phone at +880 707 568 468. We provide 24/7 assistance for all our premium plans and business hours support for other plans.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'What is your response time for support requests?',
      answer: 'For Premium plans: 1-2 hours, Standard plans: 4-8 hours, Basic plans: 24-48 hours. Emergency issues are prioritized across all plans.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'Do you provide training for the systems you develop?',
      answer: 'Yes, we provide comprehensive training sessions for all the systems we develop. This includes video tutorials, documentation, and live training sessions to ensure your team can manage the system effectively.'
    },
    // Our Services
    {
      id: 11,
      category: 'services',
      question: 'Do you offer e-commerce solutions?',
      answer: 'Yes, we develop complete e-commerce solutions including online stores, payment gateway integration, inventory management, order processing, and marketing features. We work with platforms like WooCommerce, Shopify, and custom solutions.'
    },
    {
      id: 12,
      category: 'services',
      question: 'Can you help with digital marketing?',
      answer: 'Absolutely! We offer comprehensive digital marketing services including SEO, social media marketing, PPC campaigns, content marketing, email marketing, and analytics to help grow your online presence.'
    },
    {
      id: 13,
      category: 'services',
      question: 'Do you provide AI and machine learning services?',
      answer: 'Yes, we have a dedicated AI team that develops custom machine learning models, AI-powered applications, data analysis solutions, and automation systems to help businesses leverage artificial intelligence.'
    },
    {
      id: 14,
      category: 'services',
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including Next.js, React, TypeScript, Node.js, Python, Laravel, WordPress, and various databases. We choose the best stack for each project based on requirements.'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Group FAQs by category
  const faqsByCategory = faqCategories.map(category => ({
    ...category,
    items: filteredFAQs.filter(item => item.category === category.id)
  }));

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">We&apos;re Here to Help</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-green-500">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find quick answers to common questions about our services, pricing, support, and more. 
                Can&apos;t find what you&apos;re looking for? Contact us directly!
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories & Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Categories Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl`}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {faqsByCategory.map((category) => (
                  <div key={category.id} className="mb-12">
                    {category.items.length > 0 && (
                      <>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          {category.name}
                        </h2>
                        
                        <div className="space-y-4">
                          {category.items.map((item) => (
                            <div 
                              key={item.id}
                              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                              <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full text-left flex justify-between items-center p-6 font-semibold text-gray-900 hover:text-green-500 transition-colors duration-300"
                              >
                                <span className="text-lg pr-4">{item.question}</span>
                                {openItems.includes(item.id) ? (
                                  <ChevronUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-green-500 flex-shrink-0" />
                                )}
                              </button>
                              
                              {openItems.includes(item.id) && (
                                <div className="px-6 pb-6">
                                  <div className="border-t border-gray-100 pt-4">
                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredFAQs.length === 0 && searchTerm && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn&apos;t find any questions matching &quot;{searchTerm}&quot;
                  </p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-green-500 hover:text-green-600 font-semibold"
                  >
                    Clear search and show all questions
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Still Need <span className="text-green-500">Help</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or concerns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: MessageCircle,
                    title: 'Live Chat',
                    description: 'Get instant help from our support team',
                    action: 'Start Chat',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Mail,
                    title: 'Email Support',
                    description: 'Send us your questions anytime',
                    action: 'support@softnovait.com',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: Phone,
                    title: 'Phone Support',
                    description: 'Call us for immediate assistance',
                    action: '+880 707 568 468',
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((channel, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${channel.color}`}>
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{channel.title}</h3>
                    <p className="text-gray-600 mb-6">{channel.description}</p>
                    <div className="text-green-500 font-semibold">{channel.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {[
                { icon: Clock, number: '24/7', label: 'Support Available' },
                { icon: Shield, number: '98%', label: 'Satisfaction Rate' },
                { icon: Users, number: '500+', label: 'Clients Helped' },
                { icon: Zap, number: '1-2h', label: 'Avg. Response Time' }
              ].map((stat, index) => (
                <div key={index}>
                  <stat.icon className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-green-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}