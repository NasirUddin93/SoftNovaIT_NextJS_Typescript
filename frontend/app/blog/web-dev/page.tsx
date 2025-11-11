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
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  Search,
  Rocket,
  Cpu,
  Layers
} from 'lucide-react';
import Link from 'next/link';

const WebDevelopmentBlog: NextPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of React: What to Expect in 2024',
      excerpt: 'Explore the upcoming features and changes in React 18 and beyond, including concurrent features, server components, and performance improvements.',
      image: '/api/placeholder/400/250',
      category: 'Frontend',
      readTime: '8 min read',
      date: 'Dec 15, 2023',
      author: 'Sarah Chen',
      views: '2.4K',
      comments: 42,
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Node.js Microservices',
      excerpt: 'Learn how to design and implement microservices architecture with Node.js, Docker, and Kubernetes for enterprise applications.',
      image: '/api/placeholder/400/250',
      category: 'Backend',
      readTime: '12 min read',
      date: 'Dec 12, 2023',
      author: 'Mike Rodriguez',
      views: '1.8K',
      comments: 28,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'Next.js 14: Complete Guide to New Features',
      excerpt: 'Deep dive into the latest Next.js 14 features including Server Actions, partial prerendering, and enhanced developer experience.',
      image: '/api/placeholder/300/200',
      category: 'Framework',
      readTime: '10 min read',
      date: 'Dec 10, 2023',
      author: 'Alex Thompson',
      views: '3.1K',
      comments: 56
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Applications',
      excerpt: 'Advanced TypeScript patterns and practices to maintain type safety and developer productivity in large codebases.',
      image: '/api/placeholder/300/200',
      category: 'TypeScript',
      readTime: '15 min read',
      date: 'Dec 8, 2023',
      author: 'Emma Wilson',
      views: '2.2K',
      comments: 34
    },
    {
      id: 5,
      title: 'Web Performance Optimization Master Guide',
      excerpt: 'Comprehensive strategies for optimizing web performance, from Core Web Vitals to advanced caching techniques.',
      image: '/api/placeholder/300/200',
      category: 'Performance',
      readTime: '14 min read',
      date: 'Dec 5, 2023',
      author: 'James Park',
      views: '4.5K',
      comments: 89
    },
    {
      id: 6,
      title: 'Modern CSS Layouts with Grid and Flexbox',
      excerpt: 'Master CSS Grid and Flexbox with practical examples and responsive design patterns for modern web layouts.',
      image: '/api/placeholder/300/200',
      category: 'CSS',
      readTime: '9 min read',
      date: 'Dec 3, 2023',
      author: 'Lisa Zhang',
      views: '1.9K',
      comments: 23
    }
  ];

  const popularTopics = [
    { name: 'React', count: 42, icon: <Code className="w-4 h-4" /> },
    { name: 'Next.js', count: 38, icon: <Globe className="w-4 h-4" /> },
    { name: 'TypeScript', count: 35, icon: <Cpu className="w-4 h-4" /> },
    { name: 'Node.js', count: 31, icon: <Database className="w-4 h-4" /> },
    { name: 'Performance', count: 28, icon: <Zap className="w-4 h-4" /> },
    { name: 'Security', count: 25, icon: <Shield className="w-4 h-4" /> },
    { name: 'Mobile', count: 22, icon: <Smartphone className="w-4 h-4" /> },
    { name: 'SEO', count: 19, icon: <Search className="w-4 h-4" /> }
  ];

  const webDevTools = [
    {
      category: 'Frontend Frameworks',
      tools: ['React', 'Vue.js', 'Angular', 'Svelte'],
      icon: <Layers className="w-6 h-6" />
    },
    {
      category: 'Backend Technologies',
      tools: ['Node.js', 'Python/Django', 'Ruby on Rails', 'PHP/Laravel'],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: 'Database Systems',
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      category: 'DevOps & Deployment',
      tools: ['Docker', 'Kubernetes', 'AWS', 'Vercel'],
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const learningPaths = [
    {
      title: 'Frontend Developer',
      level: 'Beginner to Advanced',
      duration: '6 months',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      level: 'Intermediate to Expert',
      duration: '9 months',
      skills: ['Frontend', 'Backend', 'Database', 'DevOps'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Specialist',
      level: 'Intermediate to Expert',
      duration: '7 months',
      skills: ['Node.js/Python', 'API Design', 'Database', 'Security'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Latest Web Development Trends & Tutorials</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Web Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Blog & Resources</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest web technologies, frameworks, and best practices. 
              From beginner tutorials to advanced architecture patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md w-full mx-auto">
                <input
                  type="text"
                  placeholder="Search articles, tutorials, and guides..."
                  className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Search className="w-5 h-5 text-blue-300 absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center whitespace-nowrap">
                Browse Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured <span className="text-cyan-600">Articles</span>
            </h2>
            <Link href="/blog/featured" className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
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
                      <button className="p-2 text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyan-600 transition-colors duration-300">
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
              Recent <span className="text-cyan-600">Posts</span>
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
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
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
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                      <Link href={`/blog/${post.id}`}>
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

      {/* Topics & Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Topics */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Popular <span className="text-cyan-600">Topics</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {popularTopics.map((topic, index) => (
                  <Link
                    key={index}
                    href={`/blog/topics/${topic.name.toLowerCase()}`}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mr-3 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                          {topic.icon}
                        </div>
                        <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                          {topic.name}
                        </span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                        {topic.count}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Web Development Tools */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Development <span className="text-cyan-600">Stack</span>
              </h3>
              <div className="space-y-4">
                {webDevTools.map((stack, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mr-3">
                        {stack.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{stack.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-300"
                        >
                          {tool}
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

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development <span className="text-cyan-600">Learning Paths</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Structured learning paths to guide your web development journey from beginner to expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs font-medium mr-3">
                    {path.level}
                  </span>
                  <Clock className="w-4 h-4 mr-1" />
                  {path.duration}
                </div>
                <div className="space-y-3 mb-6">
                  {path.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Web Dev Trends
            </h2>
            <p className="text-cyan-100 text-lg mb-8">
              Get weekly articles, tutorials, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-cyan-200 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebDevelopmentBlog;