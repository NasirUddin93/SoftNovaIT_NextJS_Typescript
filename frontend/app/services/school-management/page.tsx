'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Zap, 
  Check,
  ArrowRight,
  Play,
  Download,
  Star,
  Clock,
  Smartphone,
  Cloud,
  Database,
  Settings,
  MessageSquare,
  FileText,
  Library,
  GraduationCap,
  UserCheck,
  Bell
} from 'lucide-react';

// Features data
const features = [
  {
    icon: Users,
    title: 'Student Management',
    description: 'Complete student information system with profiles, academic records, and attendance tracking.',
    features: ['Student Profiles', 'Academic Records', 'Attendance Tracking', 'Behavior Monitoring']
  },
  {
    icon: BookOpen,
    title: 'Academic Management',
    description: 'Comprehensive academic planning with curriculum management, grading system, and report cards.',
    features: ['Curriculum Planning', 'Grading System', 'Report Cards', 'Progress Tracking']
  },
  {
    icon: Calendar,
    title: 'Timetable & Scheduling',
    description: 'Smart timetable management with class scheduling, room allocation, and teacher assignments.',
    features: ['Class Scheduling', 'Room Allocation', 'Teacher Assignments', 'Conflict Detection']
  },
  {
    icon: CreditCard,
    title: 'Fee Management',
    description: 'Automated fee collection, invoice generation, and financial reporting system.',
    features: ['Fee Collection', 'Invoice Generation', 'Payment Tracking', 'Financial Reports']
  },
  {
    icon: Library,
    title: 'Library Management',
    description: 'Digital library system with book tracking, issue/return management, and cataloging.',
    features: ['Book Catalog', 'Issue/Return', 'Fine Calculation', 'Digital Resources']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Advanced analytics dashboard with performance metrics and custom reports.',
    features: ['Performance Analytics', 'Custom Reports', 'Data Visualization', 'Export Options']
  }
];

// Modules data
const modules = [
  {
    name: 'Student Information System',
    description: 'Complete student database with personal, academic, and medical information.',
    features: ['Student Profiles', 'Parent Information', 'Medical Records', 'Document Management']
  },
  {
    name: 'Attendance Management',
    description: 'Automated attendance tracking with biometric integration and notification system.',
    features: ['Biometric Integration', 'Daily Attendance', 'Leave Management', 'SMS Alerts']
  },
  {
    name: 'Exam & Grade Management',
    description: 'Comprehensive exam scheduling, grade calculation, and report card generation.',
    features: ['Exam Scheduling', 'Grade Calculation', 'Report Cards', 'Progress Reports']
  },
  {
    name: 'Fee & Finance Management',
    description: 'Complete financial management with fee collection, expense tracking, and accounting.',
    features: ['Online Payments', 'Fee Structure', 'Expense Tracking', 'Financial Reports']
  },
  {
    name: 'Library Management',
    description: 'Digital library system with book management and online resource access.',
    features: ['Book Management', 'Online Catalog', 'Issue/Return System', 'E-library Access']
  },
  {
    name: 'Transport Management',
    description: 'School transport system with route planning and vehicle tracking.',
    features: ['Route Planning', 'Vehicle Tracking', 'Driver Management', 'Parent Notifications']
  },
  {
    name: 'Hostel Management',
    description: 'Boarding facility management with room allocation and meal planning.',
    features: ['Room Allocation', 'Meal Planning', 'Staff Management', 'Inventory Control']
  },
  {
    name: 'Parent & Teacher Portal',
    description: 'Dedicated portals for parents and teachers with real-time communication.',
    features: ['Progress Tracking', 'Communication Tools', 'Event Calendar', 'Homework Assignments']
  }
];

// Pricing plans
const pricingPlans = [
  {
    name: 'Basic',
    price: 45000,
    period: 'one-time',
    description: 'For small schools with basic management needs',
    features: [
      'Up to 200 students',
      'Student Information System',
      'Attendance Management',
      'Basic Grade Management',
      'Fee Management',
      '6 months support',
      'Basic Reports'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 75000,
    period: 'one-time',
    description: 'For medium-sized schools with advanced features',
    features: [
      'Up to 500 students',
      'All Basic Features',
      'Library Management',
      'Transport Management',
      'Parent & Teacher Portal',
      'Mobile App',
      '12 months support',
      'Advanced Analytics'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 120000,
    period: 'one-time',
    description: 'For large institutions with complete automation',
    features: [
      'Unlimited students',
      'All Professional Features',
      'Hostel Management',
      'Biometric Integration',
      'Custom Modules',
      'API Integration',
      '24 months support',
      'Dedicated Account Manager'
    ],
    popular: false
  }
];

// Benefits data
const benefits = [
  {
    icon: Zap,
    title: '90% Time Saving',
    description: 'Automate administrative tasks and save valuable time'
  },
  {
    icon: Shield,
    title: '99.9% Accuracy',
    description: 'Eliminate manual errors with automated systems'
  },
  {
    icon: Cloud,
    title: 'Cloud Based',
    description: 'Access your school data from anywhere, anytime'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Manage your school on the go with mobile apps'
  }
];

export default function SchoolManagementPage() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Complete School Management Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                School <span className="text-green-500">Management</span> System
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your educational institution with our comprehensive school management software. 
                Streamline operations, enhance communication, and improve academic outcomes with one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
                <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</div>
                  <div className="text-gray-600 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-green-500">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage your educational institution efficiently and effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete <span className="text-green-500">Modules</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modular design allows you to choose the features that fit your institution&apos;s needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{module.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It <span className="text-green-500">Works</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Simple implementation process to get your school management system running quickly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Consultation',
                    description: 'We understand your school requirements'
                  },
                  {
                    step: '2',
                    title: 'Customization',
                    description: 'Tailor the system to your needs'
                  },
                  {
                    step: '3',
                    title: 'Training',
                    description: 'Train your staff on using the system'
                  },
                  {
                    step: '4',
                    title: 'Support',
                    description: 'Ongoing technical support'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
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
                Affordable <span className="text-green-500">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your institution&apos;s size and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-2xl scale-105' 
                      : 'bg-white text-gray-900 shadow-lg border border-gray-100'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">৳{plan.price.toLocaleString()}</span>
                    <span className={plan.popular ? 'text-white/80' : 'text-gray-500'}>
                      {plan.period === 'one-time' ? ' one-time' : '/month'}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
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

        {/* Demo Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                See It In <span className="text-green-500">Action</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Watch our demo to see how the school management system can transform your institution.
              </p>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <div className="text-gray-600">School Management System Demo Video</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Full Demo
                  </button>
                  <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                    Schedule Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of educational institutions that have streamlined their operations with our school management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Digital Transformation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Contact Sales Team
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}