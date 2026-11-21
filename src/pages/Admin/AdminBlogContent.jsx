import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, X, Image as ImageIcon, CheckCircle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const BLOG_CATEGORIES = [
  'How to Become a Sub-Broker',
  'Demat Account Guide',
  'Stock Market Basics',
  'Options Trading',
  'Mutual Fund Investing',
  'Tax Saving Investments',
  'IPO Calendar',
  'Market Updates'
];

export const getFullImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('/uploads') || (url.startsWith('/') && !url.startsWith('//'))) {
    return `${API_BASE}${url}`;
  }
  return url;
};

const AdminBlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: BLOG_CATEGORIES[0],
    imageUrl: '',
    author: 'Admin'
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/blogs`);
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs (${response.status})`);
      }
      const data = await response.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching blogs from API:', err);
      setError('Failed to load blogs from server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleOpenModal = (blog = null) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        category: blog.category || BLOG_CATEGORIES[0],
        imageUrl: blog.imageUrl || '',
        author: blog.author || 'Admin'
      });
    } else {
      setEditingBlog(null);
      setFormData({
        title: '',
        content: '',
        category: BLOG_CATEGORIES[0],
        imageUrl: '',
        author: 'Admin'
      });
    }
    setError('');
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      let finalImageUrl = formData.imageUrl;
      
      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append('image', selectedFile);
        const uploadRes = await fetch(`${API_BASE}/api/upload`, {
          method: 'POST',
          body: uploadData
        });
        if (!uploadRes.ok) {
          const errData = await uploadRes.json().catch(() => ({}));
          throw new Error(errData.error || 'Image upload failed');
        }
        const uploadJson = await uploadRes.json();
        finalImageUrl = uploadJson.imageUrl;
      }
      
      const submitData = { ...formData, imageUrl: finalImageUrl };

      if (editingBlog) {
        const response = await fetch(`${API_BASE}/api/blogs/${editingBlog._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        });
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Update failed (${response.status})`);
        }
        setSuccess('Blog updated successfully!');
      } else {
        const response = await fetch(`${API_BASE}/api/blogs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        });
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Create failed (${response.status})`);
        }
        setSuccess('Blog created successfully!');
      }
      
      setIsModalOpen(false);
      setTimeout(() => setSuccess(''), 4000);
      fetchBlogs();
    } catch (err) {
      console.error('Error saving blog to API:', err);
      setError(err.message || 'Failed to save blog. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await fetch(`${API_BASE}/api/blogs/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Delete failed');
        setSuccess('Blog deleted successfully!');
        setTimeout(() => setSuccess(''), 4000);
        fetchBlogs();
      } catch (err) {
        console.error('Error deleting blog from API:', err);
        setError('Failed to delete blog.');
      }
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
          <p className="text-gray-500 mt-1">Create and manage content for your Blog section.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-brand-green text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
        >
          <Plus className="w-5 h-5" />
          New Blog Post
        </button>
      </div>

      {success && !isModalOpen && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2 border border-green-200">
          <CheckCircle className="w-5 h-5 shrink-0" />
          {success}
        </div>
      )}

      {error && !isModalOpen && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2 border border-red-200">
          <X className="w-5 h-5 shrink-0" />
          {error}
        </div>
      )}

      {/* Blogs List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-500 max-w-sm mx-auto">You haven't created any blog posts yet. Click the button above to create your first post.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-medium">Post</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {blog.imageUrl ? (
                          <img 
                            src={getFullImageUrl(blog.imageUrl)} 
                            alt="" 
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100 border border-gray-100"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-gray-900 line-clamp-1">{blog.title}</div>
                          <div className="text-xs text-gray-400">By {blog.author || 'Admin'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'Recent'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <button 
                          onClick={() => handleOpenModal(blog)}
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(blog._id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">{error}</div>
              )}

              <form id="blogForm" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title *</label>
                  <input 
                    type="text" 
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="e.g. 5 Best Tips for Options Trading"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all bg-white"
                    >
                      {BLOG_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                    <input 
                      type="text" 
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="url" 
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={(e) => {
                          handleInputChange(e);
                          setSelectedFile(null);
                        }}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                        placeholder="Or paste image URL (https://...)"
                      />
                    </div>
                    <div>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-green file:text-white hover:file:bg-green-700 cursor-pointer"
                      />
                    </div>
                  </div>
                  {(formData.imageUrl || selectedFile) && (
                    <div className="mt-3 relative h-40 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                      <img 
                        src={selectedFile ? URL.createObjectURL(selectedFile) : getFullImageUrl(formData.imageUrl)} 
                        alt="Preview" 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content (Markdown supported) *</label>
                  <textarea 
                    name="content"
                    required
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="10"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all resize-none font-mono text-sm"
                    placeholder="Write your blog content here..."
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                form="blogForm"
                className="px-5 py-2.5 text-white bg-brand-green rounded-lg hover:bg-green-700 font-medium transition-colors"
              >
                {editingBlog ? 'Save Changes' : 'Publish Blog'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogContent;
