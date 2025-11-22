
import React from 'react'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const featuredPost = {
    title: 'The Ultimate Guide to Creating Product Demos That Convert',
    excerpt: 'Learn the proven strategies and best practices for creating product demonstrations that turn visitors into customers.',
    image: 'https://picsum.photos/800/400?random=70',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Best Practices',
    readTime: '8 min read'
  }

  const blogPosts = [
    {
      title: '10 Demo Design Principles Every Marketer Should Know',
      excerpt: 'Discover the fundamental design principles that make demos engaging and effective.',
      image: 'https://picsum.photos/400/250?random=71',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      category: 'Design',
      readTime: '5 min read'
    },
    {
      title: 'How to Measure Demo Performance and ROI',
      excerpt: 'Learn which metrics matter most and how to track the success of your product demos.',
      image: 'https://picsum.photos/400/250?random=72',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      category: 'Analytics',
      readTime: '6 min read'
    },
    {
      title: 'Interactive vs Static Demos: Which Converts Better?',
      excerpt: 'A comprehensive comparison of different demo formats and their conversion rates.',
      image: 'https://picsum.photos/400/250?random=73',
      author: 'David Thompson',
      date: 'March 8, 2024',
      category: 'Strategy',
      readTime: '7 min read'
    },
    {
      title: 'Building Demos for Mobile: Best Practices',
      excerpt: 'Essential tips for creating demos that work perfectly on mobile devices.',
      image: 'https://picsum.photos/400/250?random=74',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      category: 'Mobile',
      readTime: '4 min read'
    },
    {
      title: 'The Psychology of Demo Engagement',
      excerpt: 'Understanding what makes users engage with product demonstrations.',
      image: 'https://picsum.photos/400/250?random=75',
      author: 'James Wilson',
      date: 'March 3, 2024',
      category: 'Psychology',
      readTime: '9 min read'
    },
    {
      title: 'Demo Automation: Scaling Your Demo Strategy',
      excerpt: 'How to automate demo creation and distribution for maximum efficiency.',
      image: 'https://picsum.photos/400/250?random=76',
      author: 'Sarah Johnson',
      date: 'March 1, 2024',
      category: 'Automation',
      readTime: '6 min read'
    }
  ]

  const categories = [
    'All Posts',
    'Best Practices',
    'Design',
    'Analytics',
    'Strategy',
    'Mobile',
    'Psychology',
    'Automation'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            DemoGet
            <span className="block text-yellow-300">Blog</span>
          </h1>
          <p className="text-xl opacity-90">
            Insights, tips, and best practices for creating amazing product demos 
            that convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500">{featuredPost.date}</div>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User size={14} />
                          <span>{post.author}</span>
                          <span>•</span>
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <Link
                          to="#"
                          className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        index === 0
                          ? 'bg-primary-100 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest articles and demo tips delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-primary-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Demo Design', 'Conversion', 'UX', 'Marketing', 'SaaS', 'Analytics', 'Mobile', 'Best Practices'].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-600 cursor-pointer transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
