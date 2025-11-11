'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Heart,
  Share2,
  MessageCircle,
  Tag,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Code,
  Smartphone,
  Zap,
  Filter,
  ChevronDown
} from 'lucide-react';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Business Operations',
    excerpt: 'Discover how AI is transforming business operations and what it means for the future of enterprise technology.',
    category: 'AI & Machine Learning',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    views: 1247,
    likes: 89,
    comments: 23,
    image: '/images/blog/ai-business.jpg',
    tags: ['AI', 'Business', 'Automation', 'Future Tech']
  },
  {
    id: 2,
    title: 'Next.js 14: What\'s New and Why You Should Upgrade',
    excerpt: 'Explore the latest features in Next.js 14 and learn how they can improve your web development workflow.',
    category: 'Web Development',
    author: 'Mike Chen',
    date: '2024-01-12',
    readTime: '6 min read',
    views: 892,
    likes: 67,
    comments: 18,
    image: '/images/blog/nextjs-14.jpg',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript']
  },
  {
    id: 3,
    title: 'SEO Trends 2024: What You Need to Know to Rank Higher',
    excerpt: 'Stay ahead of the competition with these essential SEO trends and strategies for 2024.',
    category: 'Digital Marketing',
    author: 'Emily Davis',
    date: '2024-01-10',
    readTime: '10 min read',
    views: 1563,
    likes: 112,
    comments: 31,
    image: '/images/blog/seo-trends.jpg',
    tags: ['SEO', 'Digital Marketing', 'Google', 'Content Strategy']
  },
  {
    id: 4,
    title: 'Building Scalable Mobile Apps with React Native',
    excerpt: 'Learn best practices for creating scalable and maintainable mobile applications using React Native.',
    category: 'Mobile Development',
    author: 'Alex Rodriguez',
    date: '2024-01-08',
    readTime: '12 min read',
    views: 734,
    likes: 54,
    comments: 15,
    image: '/images/blog/react-native.jpg',
    tags: ['React Native', 'Mobile', 'JavaScript', 'App Development']
  },
  {
    id: 5,
    title: 'The Rise of Edge Computing: What Developers Need to Know',
    excerpt: 'Understanding edge computing and its implications for modern application development and deployment.',
    category: 'Cloud Computing',
    author: 'David Kim',
    date: '2024-01-05',
    readTime: '9 min read',
    views: 621,
    likes: 43,
    comments: 12,
    image: '/images/blog/edge-computing.jpg',
    tags: ['Edge Computing', 'Cloud', 'Infrastructure', 'IoT']
  },
  {
    id: 6,
    title: 'UI/UX Design Principles for Better User Engagement',
    excerpt: 'Essential design principles that can significantly improve user engagement and conversion rates.',
    category: 'UI/UX Design',
    author: 'Sophia Williams',
    date: '2024-01-03',
    readTime: '7 min read',
    views: 987,
    likes: 78,
    comments: 21,
    image: '/images/blog/ui-ux-design.jpg',
    tags: ['UI/UX', 'Design', 'User Experience', 'Web Design']
  },
  {
    id: 7,
    title: 'Cybersecurity Best Practices for Modern Web Applications',
    excerpt: 'Protect your web applications from common security threats with these essential practices.',
    category: 'Cybersecurity',
    author: 'James Wilson',
    date: '2024-01-01',
    readTime: '11 min read',
    views: 1123,
    likes: 91,
    comments: 27,
    image: '/images/blog/cybersecurity.jpg',
    tags: ['Security', 'Web Development', 'Best Practices', 'Cybersecurity']
  },
  {
    id: 8,
    title: 'The Impact of 5G on Mobile App Development',
    excerpt: 'How 5G technology is revolutionizing mobile app development and user experiences.',
    category: 'Mobile Development',
    author: 'Lisa Zhang',
    date: '2023-12-28',
    readTime: '8 min read',
    views: 845,
    likes: 61,
    comments: 16,
    image: '/images/blog/5g-mobile.jpg',
    tags: ['5G', 'Mobile', 'Technology', 'App Development']
  }
];

// Categories
const categories = [
  { name: 'All Posts', count: blogPosts.length, icon: BookOpen },
  { name: 'AI & Machine Learning', count: blogPosts.filter(post => post.category === 'AI & Machine Learning').length, icon: Zap },
  { name: 'Web Development', count: blogPosts.filter(post => post.category === 'Web Development').length, icon: Code },
  { name: 'Digital Marketing', count: blogPosts.filter(post => post.category === 'Digital Marketing').length, icon: TrendingUp },
  { name: 'Mobile Development', count: blogPosts.filter(post => post.category === 'Mobile Development').length, icon: Smartphone },
  { name: 'UI/UX Design', count: blogPosts.filter(post => post.category === 'UI/UX Design').length, icon: BookOpen },
  { name: 'Cloud Computing', count: blogPosts.filter(post => post.category === 'Cloud Computing').length, icon: BookOpen },
  { name: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length, icon: BookOpen }
];

// Popular tags
const popularTags = [
  'AI', 'React', 'Next.js', 'SEO', 'JavaScript', 'TypeScript',
  'Mobile', 'Cloud', 'Security', 'Design', 'Marketing', 'Business'
];

// Featured posts (most viewed)
const featuredPosts = blogPosts.slice(0, 2);

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const categoryMatch = selectedCategory === 'All Posts' || post.category === selectedCategory;
      const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'popular') {
        return b.views - a.views;
      } else if (sortBy === 'likes') {
        return b.likes - a.likes;
      }
      return 0;
    });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Latest Insights & Trends</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                SoftNovaIT <span className="text-green-500">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stay updated with the latest trends, insights, and best practices in technology, 
                digital marketing, and software development.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured <span className="text-green-500">Articles</span>
              </h2>
              <Link 
                href="/blog/featured"
                className="text-green-500 hover:text-green-600 font-semibold flex items-center gap-2"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-green-500" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>

                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-green-500 hover:text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-green-500" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                          selectedCategory === category.name
                            ? 'bg-green-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </div>
                        <span className={`text-sm ${
                          selectedCategory === category.name ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-green-500" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-300"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white border border-white/30 focus:border-white focus:outline-none"
                    />
                    <button className="w-full bg-white text-green-500 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="lg:w-3/4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedCategory === 'All Posts' ? 'All' : selectedCategory} 
                      <span className="text-green-500"> Articles</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {filteredPosts.length} articles found
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 text-sm">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    >
                      <option value="newest">Newest First</option>
                      <option value="popular">Most Popular</option>
                      <option value="likes">Most Liked</option>
                    </select>
                  </div>
                </div>

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-green-500" />
                          </div>
                          <div className="absolute top-3 left-3">
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-500 transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex gap-3 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {post.views}
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                {post.likes}
                              </div>
                            </div>

                            <Link 
                              href={`/blog/${post.id}`}
                              className="text-green-500 hover:text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                            >
                              Read <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn&apos;t find any articles matching your search criteria.
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedCategory('All Posts');
                        setSearchQuery('');
                      }}
                      className="text-green-500 hover:text-green-600 font-semibold"
                    >
                      Clear filters and show all articles
                    </button>
                  </div>
                )}

                {/* Load More */}
                {filteredPosts.length > 0 && (
                  <div className="text-center mt-12">
                    <button className="bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                      Load More Articles <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Write for Our Blog?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Share your expertise and insights with our community of developers and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Submit Guest Post <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                View Writing Guidelines
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}