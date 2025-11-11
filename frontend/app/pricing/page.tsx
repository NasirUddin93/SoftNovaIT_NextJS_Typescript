import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  HelpCircle,
  Calendar,
  Mail,
  Phone,
  Crown,
  Rocket,
  Target
} from 'lucide-react';

export default function Pricing() {
  // Pricing plans data
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '৳1000',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      popular: false,
      features: [
        'Basic Website Support',
        'Monthly Updates & Maintenance',
        '24/7 Email Support',
        'Basic Security Monitoring',
        'Upto 5 Pages Website',
        'Standard Performance'
      ],
      buttonText: 'Get Started',
      icon: Target
    },
    {
      id: 2,
      name: 'Standard',
      price: '৳3000',
      period: '/month',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Full Website Support',
        'Weekly Updates & Backups',
        'Priority 24/7 Support',
        'Advanced Security Monitoring',
        'Upto 15 Pages Website',
        'Enhanced Performance',
        'SEO Basic Optimization',
        'Monthly Analytics Report'
      ],
      buttonText: 'Most Popular',
      icon: TrendingUp
    },
    {
      id: 3,
      name: 'Premium',
      price: '৳5000',
      period: '/month',
      description: 'Complete solution for established businesses',
      popular: false,
      features: [
        'Full Website + Marketing Support',
        'Daily Updates & Backups',
        'Dedicated 24/7 Support',
        'Premium Security Suite',
        'Unlimited Pages Website',
        'Maximum Performance',
        'Advanced SEO Optimization',
        'Weekly Analytics Reports',
        'Social Media Integration',
        'Custom Feature Development'
      ],
      buttonText: 'Go Premium',
      icon: Crown
    }
  ];

  // Features comparison
  const featureComparison = [
    {
      feature: 'Website Support',
      basic: 'Basic',
      standard: 'Full',
      premium: 'Full + Marketing'
    },
    {
      feature: 'Update Frequency',
      basic: 'Monthly',
      standard: 'Weekly',
      premium: 'Daily'
    },
    {
      feature: 'Support Response',
      basic: '24-48 hours',
      standard: '4-8 hours',
      premium: '1-2 hours'
    },
    {
      feature: 'Backup Frequency',
      basic: 'Monthly',
      standard: 'Weekly',
      premium: 'Daily'
    },
    {
      feature: 'Security Monitoring',
      basic: 'Basic',
      standard: 'Advanced',
      premium: 'Premium'
    },
    {
      feature: 'SEO Optimization',
      basic: 'Not Included',
      standard: 'Basic',
      premium: 'Advanced'
    },
    {
      feature: 'Analytics Reports',
      basic: 'Not Included',
      standard: 'Monthly',
      premium: 'Weekly'
    },
    {
      feature: 'Custom Development',
      basic: 'Not Included',
      standard: 'Limited',
      premium: 'Available'
    }
  ];

  // Additional services
  const additionalServices = [
    {
      icon: Rocket,
      title: 'Custom Development',
      price: 'Starts from ৳10,000',
      description: 'Tailored solutions built specifically for your business needs'
    },
    {
      icon: Zap,
      title: 'E-commerce Setup',
      price: 'Starts from ৳15,000',
      description: 'Complete online store with payment integration and inventory management'
    },
    {
      icon: Shield,
      title: 'Security Audit',
      price: 'Starts from ৳5,000',
      description: 'Comprehensive security assessment and vulnerability testing'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      price: 'Custom Quote',
      description: 'SEO, social media marketing, and online advertising campaigns'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Transparent Pricing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Simple, <span className="text-green-500">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Choose the perfect plan for your business. All plans include full support, 
                regular updates, and reliable service with no hidden fees.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 mb-12">
                <button className="px-6 py-3 rounded-md bg-green-500 text-white font-semibold transition-all">
                  Monthly
                </button>
                <button className="px-6 py-3 rounded-md text-gray-600 font-semibold hover:text-gray-900 transition-all">
                  Yearly <span className="text-green-500 text-sm">(Save 20%)</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-2xl scale-105 border-0' 
                      : 'bg-white text-gray-900 shadow-lg border border-gray-100 hover:shadow-2xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.popular ? 'bg-white/20' : 'bg-green-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                  </div>

                  {/* Plan Name & Description */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-white/20' : 'bg-green-100'
                        }`}>
                          <Check className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                        </div>
                        <span className={plan.popular ? 'text-white/90' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link 
                    href="/contact"
                    className={`block text-center font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-white text-green-500 hover:bg-gray-100' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {plan.buttonText} <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Plan <span className="text-green-500">Comparison</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Compare all features across our plans to make the best choice for your business.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-4 gap-8 p-8 border-b border-gray-200 bg-gray-50">
                  <div className="font-semibold text-gray-900">Features</div>
                  <div className="text-center font-semibold text-gray-600">Basic</div>
                  <div className="text-center font-semibold text-green-500">Standard</div>
                  <div className="text-center font-semibold text-gray-900">Premium</div>
                </div>
                
                {featureComparison.map((item, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-4 gap-8 p-6 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{item.feature}</div>
                    <div className="text-center text-gray-600">{item.basic}</div>
                    <div className="text-center text-green-500 font-semibold">{item.standard}</div>
                    <div className="text-center text-gray-900 font-medium">{item.premium}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Additional <span className="text-green-500">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Need something specific? We offer custom solutions tailored to your unique requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-green-500 font-semibold mb-3">{service.price}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
                  Frequently Asked <span className="text-green-500">Questions</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Get answers to common questions about our pricing and services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: 'Can I change plans later?',
                    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                  },
                  {
                    question: 'Is there a setup fee?',
                    answer: 'No setup fees for any of our standard plans. Custom development may have initial costs.'
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept bank transfers, bKash, Nagad, and credit cards for international clients.'
                  },
                  {
                    question: 'Do you offer discounts for yearly payments?',
                    answer: 'Yes! Save 20% when you choose annual billing instead of monthly payments.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have questions or need a custom quote? Our team is here to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Custom Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4 text-white/80">
                <Mail className="w-5 h-5" />
                <span>info@softnovait.com</span>
                <Phone className="w-5 h-5" />
                <span>+880 707 568 468</span>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}