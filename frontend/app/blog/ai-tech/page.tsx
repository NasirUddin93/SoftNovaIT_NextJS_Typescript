'use client';

import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  Brain,
  Cpu,
  Database,
  Zap,
  TrendingUp,
  CheckCircle2,
  Search,
  Rocket,
  Microscope,
  Code,
  Globe,
  Shield,
  BarChart3,
  Lightbulb,
  Target,
  Video,
  Podcast,
  BookOpen,
  Sparkles,
  CircuitBoard,
  Cloud,
  Server,
  Smartphone,
  Cog
} from 'lucide-react';
import Link from 'next/link';

const AIAndTechInsights: NextPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'GPT-5 and Beyond: The Future of Large Language Models',
      excerpt: 'Exploring the next generation of AI models, their capabilities, and the ethical considerations shaping artificial intelligence development.',
      image: '/api/placeholder/400/250',
      category: 'AI Research',
      readTime: '12 min read',
      date: 'Jan 15, 2024',
      author: 'Dr. Elena Rodriguez',
      views: '5.2K',
      comments: 89,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: What It Means for AI',
      excerpt: 'How recent quantum computing advancements are set to revolutionize machine learning and solve previously intractable problems.',
      image: '/api/placeholder/400/250',
      category: 'Quantum AI',
      readTime: '15 min read',
      date: 'Jan 12, 2024',
      author: 'Dr. Marcus Chen',
      views: '3.8K',
      comments: 67,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'The Rise of Multimodal AI: Beyond Text and Images',
      excerpt: 'How AI systems are learning to understand and generate across multiple modalities including audio, video, and sensory data.',
      image: '/api/placeholder/300/200',
      category: 'AI Development',
      readTime: '10 min read',
      date: 'Jan 10, 2024',
      author: 'Sarah Kim',
      views: '4.1K',
      comments: 72,
      trending: true
    },
    {
      id: 4,
      title: 'Edge AI: Bringing Intelligence to IoT Devices',
      excerpt: 'The convergence of AI and edge computing enabling real-time processing on devices with limited computational resources.',
      image: '/api/placeholder/300/200',
      category: 'Edge Computing',
      readTime: '8 min read',
      date: 'Jan 8, 2024',
      author: 'Alex Thompson',
      views: '2.9K',
      comments: 45
    },
    {
      id: 5,
      title: 'AI in Healthcare: Revolutionizing Medical Diagnosis',
      excerpt: 'How deep learning models are achieving human-level performance in medical imaging and diagnostic tasks.',
      image: '/api/placeholder/300/200',
      category: 'AI Healthcare',
      readTime: '14 min read',
      date: 'Jan 5, 2024',
      author: 'Dr. Priya Sharma',
      views: '6.3K',
      comments: 124,
      trending: true
    },
    {
      id: 6,
      title: 'The Ethics of Autonomous Systems: Navigating AI Governance',
      excerpt: 'Framework for developing ethical AI systems and the regulatory landscape shaping autonomous technology.',
      image: '/api/placeholder/300/200',
      category: 'AI Ethics',
      readTime: '11 min read',
      date: 'Jan 3, 2024',
      author: 'Michael Reynolds',
      views: '3.5K',
      comments: 58
    },
    {
      id: 7,
      title: 'Neuromorphic Computing: Mimicking the Human Brain',
      excerpt: 'How brain-inspired computing architectures are enabling more efficient and powerful AI systems.',
      image: '/api/placeholder/300/200',
      category: 'Hardware AI',
      readTime: '9 min read',
      date: 'Dec 29, 2023',
      author: 'Dr. Lisa Wang',
      views: '2.7K',
      comments: 36
    },
    {
      id: 8,
      title: 'AI-Powered Cybersecurity: The Next Generation of Digital Defense',
      excerpt: 'Machine learning applications in threat detection, anomaly identification, and automated security response.',
      image: '/api/placeholder/300/200',
      category: 'AI Security',
      readTime: '13 min read',
      date: 'Dec 27, 2023',
      author: 'Carlos Martinez',
      views: '4.8K',
      comments: 91
    }
  ];

  const popularTopics = [
    { name: 'Machine Learning', count: 56, icon: <Brain className="w-4 h-4" />, trend: 'up' },
    { name: 'Computer Vision', count: 42, icon: <Eye className="w-4 h-4" />, trend: 'up' },
    { name: 'Natural Language Processing', count: 48, icon: <BookOpen className="w-4 h-4" />, trend: 'up' },
    { name: 'Robotics', count: 35, icon: <CircuitBoard className="w-4 h-4" />, trend: 'stable' },
    { name: 'AI Ethics', count: 39, icon: <Shield className="w-4 h-4" />, trend: 'up' },
    { name: 'Quantum AI', count: 28, icon: <Atom className="w-4 h-4" />, trend: 'up' },
    { name: 'Edge AI', count: 31, icon: <Smartphone className="w-4 h-4" />, trend: 'up' },
    { name: 'Generative AI', count: 63, icon: <Sparkles className="w-4 h-4" />, trend: 'up' }
  ];

  const aiTrends = [
    {
      title: 'AI Democratization',
      description: 'Tools making AI accessible to non-experts',
      impact: 'High',
      timeline: 'Current',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Autonomous Agents',
      description: 'Self-operating AI systems for complex tasks',
      impact: 'Very High',
      timeline: '2-3 years',
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: 'AI Safety Research',
      description: 'Ensuring alignment with human values',
      impact: 'Critical',
      timeline: 'Ongoing',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Multimodal Models',
      description: 'AI understanding multiple data types',
      impact: 'High',
      timeline: '1-2 years',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const researchSpotlight = [
    {
      title: 'Google DeepMind New Architecture',
      description: 'Breakthrough in efficient transformer models reducing computational costs by 60%',
      institution: 'Google Research',
      field: 'Model Architecture',
      date: 'Jan 2024'
    },
    {
      title: 'OpenAI Reasoning Framework',
      description: 'New approach to enhance logical reasoning in large language models',
      institution: 'OpenAI',
      field: 'AI Reasoning',
      date: 'Dec 2023'
    },
    {
      title: 'MIT Neural Network Compression',
      description: 'Novel technique for compressing neural networks without performance loss',
      institution: 'MIT CSAIL',
      field: 'Model Optimization',
      date: 'Dec 2023'
    }
  ];

  const upcomingEvents = [
    {
      title: 'NeurIPS 2024 Conference',
      date: 'March 15-17, 2024',
      location: 'Virtual & Montreal',
      type: 'Conference',
      speakers: 200
    },
    {
      title: 'AI Safety Summit',
      date: 'April 5-6, 2024',
      location: 'San Francisco, CA',
      type: 'Summit',
      speakers: 45
    },
    {
      title: 'Machine Learning Workshop',
      date: 'February 20, 2024',
      location: 'Online',
      type: 'Workshop',
      speakers: 12
    }
  ];

  const industryApplications = [
    {
      sector: 'Healthcare',
      applications: ['Medical Imaging', 'Drug Discovery', 'Personalized Treatment'],
      growth: '42% YoY',
      icon: <Heart className="w-6 h-6" />
    },
    {
      sector: 'Finance',
      applications: ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment'],
      growth: '38% YoY',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      sector: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
      growth: '35% YoY',
      icon: <Factory className="w-6 h-6" />
    },
    {
      sector: 'Education',
      applications: ['Personalized Learning', 'Automated Grading', 'Intelligent Tutoring'],
      growth: '45% YoY',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Latest AI Breakthroughs & Tech Insights</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  AI & Tech
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Insights</span>
                </h1>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  Exploring the frontier of artificial intelligence, emerging technologies, 
                  and their transformative impact on society and industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative max-w-md w-full">
                    <input
                      type="text"
                      placeholder="Search AI research, trends, and analysis..."
                      className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <Search className="w-5 h-5 text-blue-300 absolute right-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center whitespace-nowrap">
                    Explore Trends
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-6 text-cyan-300">Hot Topics This Week</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-purple-300 mr-3" />
                        <span>Generative AI Advances</span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-300 mr-3" />
                        <span>AI Regulation Updates</span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <div className="flex items-center">
                        <Smartphone className="w-5 h-5 text-cyan-300 mr-3" />
                        <span>Edge AI Deployments</span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured <span className="text-purple-600">Insights</span>
            </h2>
            <Link href="/blog/ai/featured" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {post.trending && (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-gray-600 text-sm mb-4 flex-wrap gap-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    <Link href={`/blog/ai/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-300">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recent Posts Grid */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Latest <span className="text-purple-600">Research & Analysis</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                      <Link href={`/blog/ai/${post.id}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Trends & Research Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Emerging Trends */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Emerging <span className="text-purple-600">AI Trends</span>
              </h3>
              <div className="space-y-4">
                {aiTrends.map((trend, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                          {trend.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{trend.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{trend.description}</p>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Impact: {trend.impact}</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Timeline: {trend.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Spotlight */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Research <span className="text-purple-600">Spotlight</span>
              </h3>
              <div className="space-y-6">
                {researchSpotlight.map((research, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900 text-lg">{research.title}</h4>
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {research.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{research.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span className="font-medium">{research.institution}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{research.field}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-xs text-gray-600">AI Papers Published</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600">$42B</div>
                  <div className="text-xs text-gray-600">AI Investment 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications & Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Topics */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                AI Research <span className="text-purple-600">Topics</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {popularTopics.map((topic, index) => (
                  <Link
                    key={index}
                    href={`/blog/ai/topics/${topic.name.toLowerCase().replace(' ', '-')}`}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                          {topic.icon}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 block">
                            {topic.name}
                          </span>
                          <span className="text-xs text-gray-500">{topic.count} articles</span>
                        </div>
                      </div>
                      <TrendingUp className={`w-4 h-4 ${
                        topic.trend === 'up' ? 'text-green-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industry Applications */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Industry <span className="text-purple-600">Applications</span>
              </h3>
              <div className="space-y-4">
                {industryApplications.map((industry, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mr-4">
                          {industry.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{industry.sector}</h4>
                          <span className="text-green-600 text-sm font-medium">{industry.growth} growth</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 transition-colors duration-300"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Upcoming <span className="text-cyan-300">Events</span>
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg">{event.title}</h4>
                      <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-cyan-100 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-cyan-100 text-sm mb-3">
                      <Globe className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span>{event.speakers} speakers</span>
                      <button className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Stay <span className="text-cyan-300">Informed</span>
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Rocket className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">AI Insights Newsletter</h4>
                <p className="text-cyan-100 mb-6">
                  Get weekly updates on AI research breakthroughs, industry trends, and expert analysis delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <button className="w-full bg-cyan-400 text-white font-semibold py-3 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105">
                    Subscribe to Newsletter
                  </button>
                </div>
                <p className="text-cyan-200 text-xs mt-4 text-center">
                  Join 25,000+ AI professionals and researchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Helper components for missing Lucide icons
const Atom = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-1.5 0-3 .5-4 1.5-1 1-1.5 2.5-1.5 4 0 1.5.5 3 1.5 4 1 1 2.5 1.5 4 1.5 1.5 0 3-.5 4-1.5 1-1 1.5-2.5 1.5-4 0-1.5-.5-3-1.5-4-1-1-2.5-1.5-4-1.5z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

export default AIAndTechInsights;