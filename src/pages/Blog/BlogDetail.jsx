import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog details from API:', err);
        setError('Article not found or error loading from server.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-32 pb-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Something went wrong.</h2>
          <p className="text-gray-500 mb-8">{error}</p>
          <button 
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-brand-green text-white rounded-lg hover:bg-green-700 font-medium transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-brand-green font-medium transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-sm font-bold uppercase tracking-wide">
                {blog.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 5 min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{blog.author}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400 hidden sm:block">Share:</span>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-green hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {blog.imageUrl && (
            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg prose-green max-w-none prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-green prose-img:rounded-xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            {/* Simple split by newline for basic rendering since we just have textarea */}
            {blog.content.split('\n').map((paragraph, index) => {
              if (!paragraph.trim()) return <br key={index} />;
              return <p key={index} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
            })}
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
