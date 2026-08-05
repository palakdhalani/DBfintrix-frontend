import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, User, Search, RefreshCw, Image as ImageIcon } from 'lucide-react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import blogImage from '../../assets/blog image.jpg';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const CATEGORIES = [
  'All',
  'How to Become a Sub-Broker',
  'Demat Account Guide',
  'Stock Market Basics',
  'Options Trading',
  'Mutual Fund Investing',
  'Tax Saving Investments',
  'IPO Calendar',
  'Market Updates'
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, [activeCategory]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let url = `${import.meta.env.VITE_API_URL}/api/blogs`;
      if (activeCategory !== 'All') {
        url += `?category=${encodeURIComponent(activeCategory)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs from API:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="pt-44 pb-32 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${blogImage}')` }}
      >
        {/* Subtle overlay to ensure text is readable but not overly dark */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* The geometric SVG shadow you asked to keep! */}
        <div className="absolute inset-0 opacity-30 z-0 text-black">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight drop-shadow-xl shadow-black">
            Knowledge <span className="text-brand-green">Center</span>
          </h1>
          <p className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg shadow-black">
            Stay updated with the latest market trends, trading strategies, and comprehensive financial guides.
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 border-none rounded-full bg-white/10 text-white placeholder-gray-300 focus:bg-white focus:text-gray-900 focus:ring-4 focus:ring-brand-green/30 transition-all duration-300 backdrop-blur-md outline-none shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-brand-green border-brand-green text-white shadow-md transform scale-105'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-12 flex-grow">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-brand-green">
            <RefreshCw className="w-10 h-10 animate-spin mb-4" />
            <p className="font-medium text-gray-500">Loading articles...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-4">
              <BookOpen className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any articles matching your search or selected category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog._id} 
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative bg-gray-100">
                  {blog.imageUrl ? (
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <ImageIcon className="w-12 h-12 opacity-50" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-green transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {blog.content}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-400 gap-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${blog._id}`} 
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
