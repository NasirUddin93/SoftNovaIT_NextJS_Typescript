

import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code, 
  Globe, 
  Palette, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  // Stats data
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Top Companies', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
  ];

  // Services data
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with Next.js, React, and cutting-edge technologies.',
      features: ['Next.js & React', 'TypeScript', 'Tailwind CSS', 'SEO Optimized'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment integration and inventory management.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management', 'Security'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'School Management',
      description: 'Comprehensive school ERP systems for efficient administration and student management.',
      features: ['Student Management', 'Attendance Tracking', 'Grade System', 'Parent Portal'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: ['Custom AI Models', 'Data Analysis', 'Predictive Analytics', 'Automation'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and drive growth.',
      features: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Analytics'],
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'IT Solutions',
      description: 'Comprehensive IT services including cybersecurity, cloud solutions, and technical support.',
      features: ['Cybersecurity', 'Cloud Services', 'Technical Support', 'Consulting'],
      gradient: 'from-indigo-500 to-purple-500'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      role: 'CEO',
      content: 'SoftNovaIT transformed our online presence with a stunning website and effective SEO strategy. Our traffic increased by 300% in just 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'EduTech Solutions',
      role: 'Director',
      content: 'The school management system they developed streamlined our entire operation. The team is professional and delivered beyond expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'FashionHub',
      role: 'Marketing Manager',
      content: 'Their e-commerce solution helped us scale our business internationally. The payment integration and user experience are flawless.',
      rating: 5
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'The timeline varies depending on the project scope and complexity. Typically, most projects are completed within 4-8 weeks. We provide a detailed timeline after our initial consultation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer both project-based pricing and retainer models. After understanding your requirements, we provide a transparent quote with no hidden fees and flexible payment plans.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we offer various support packages to ensure your website or application continues to perform optimally, including regular updates, security monitoring, and technical assistance.'
    },
    {
      question: 'Can you work with our existing design?',
      answer: 'Absolutely! We can work with your existing design and branding, or create a completely new look based on your preferences. We are flexible and adapt to your specific needs.'
    }
  ];

  // Trusted companies
  const companies = ['TechCorp', 'InnovateLabs', 'DigitalPlus', 'WebSolutions', 'CloudTech', 'DataSystems'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with light gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Innovating Since 2018</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Technology Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Your Business
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                We deliver cutting-edge web, mobile, and software solutions that drive growth and digital transformation for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center hover:shadow-lg hover:scale-105"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/portfolio" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Code className="w-32 h-32 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-blue-600">50+ Top Companies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to partner with leading companies across industries to deliver outstanding IT solutions.
            </p>
          </div>

          {/* Companies Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-12 py-4">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 bg-gray-100 rounded-lg px-8 py-4 flex items-center justify-center min-w-[180px]">
                  <span className="text-gray-700 font-medium text-lg">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wide text-sm">
                <span>Who We Are</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About SoftNovaIT
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                SoftNovaIT is a technology solutions provider committed to helping businesses transform through 
                innovative web, mobile, and software development. We combine technical expertise with creative 
                thinking to deliver measurable results for our clients.
              </p>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link 
                href="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 mt-6"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-xl p-6 text-center">
                    <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">Web Development</h3>
                  </div>
                  <div className="bg-green-100 rounded-xl p-6 text-center">
                    <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">AI Solutions</h3>
                  </div>
                  <div className="bg-purple-100 rounded-xl p-6 text-center">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">Team Management</h3>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-6 text-center">
                    <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">Security</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1 transition-all" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our team */}
      <Team />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand you might have questions about our services. Below you&apos;ll find answers to the most common questions we receive.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+880 1707568468</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">support@softnovait.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Chat</h4>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together. 
            Get a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 hover:gap-3 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get Free Consultation
            </Link>
            <Link 
              href="tel:+880707568468"
              className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Call Now: +880 707 568 468
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}