import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ZoomIn, 
  Calendar, 
  Sparkles, 
  Award, 
  Users, 
  Building2, 
  TrendingUp, 
  ArrowRight,
  Flame
} from 'lucide-react';
import Navbar from '../../Comman components/Navbar';
import Footer from '../../Comman components/Footer';
import GalleryHero from './GalleryHero';
import GalleryModal from './GalleryModal';
import { galleryImages, GALLERY_CATEGORIES } from './galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Highlights / Milestones data
  const highlights = [
    {
      icon: Building2,
      title: 'Headquarters Opening',
      subtitle: 'Dealing Beneficial Fintrix HQ',
      color: 'from-blue-500/20 to-blue-600/5',
      accent: 'text-blue-500',
    },
    {
      icon: Flame,
      title: 'Auspicious Beginnings',
      subtitle: 'Vedic Pooja & Deep Prajwalan',
      color: 'from-amber-500/20 to-amber-600/5',
      accent: 'text-amber-500',
    },
    {
      icon: Award,
      title: 'Leadership Vision',
      subtitle: 'Experienced Market Mentors',
      color: 'from-[#0f9d27]/20 to-[#0f9d27]/5',
      accent: 'text-[#0f9d27]',
    },
    {
      icon: Users,
      title: 'United Team Spirit',
      subtitle: 'Dedicated to Investor Success',
      color: 'from-purple-500/20 to-purple-600/5',
      accent: 'text-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Navbar theme="dark" />

      {/* Hero Section */}
      <GalleryHero totalPhotos={galleryImages.length} />

      {/* Milestones / Highlights Strip */}
      <section className="container mx-auto px-6 max-w-7xl -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-13 h-13 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-6 h-6 ${item.accent}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1d42] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Gallery Area */}
      <main className="container mx-auto px-6 max-w-7xl py-14 flex-grow">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f9d27] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Event Categories</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1d42]">
              Explore Our Memories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {GALLERY_CATEGORIES.map((category) => {
              const count = category === 'All' 
                ? galleryImages.length 
                : galleryImages.filter(img => img.category === category).length;

              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0f9d27] text-white shadow-lg shadow-[#0f9d27]/30 scale-105'
                      : 'bg-white text-gray-600 hover:text-[#0f9d27] hover:bg-green-50/50 border border-gray-200'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(index)}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:border-green-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative h-72 sm:h-64 md:h-72 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d42]/90 via-[#0a1d42]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-green-300 font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0a1d42] text-xs font-bold shadow-sm">
                    {item.category}
                  </span>
                  
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#0f9d27]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Hover Quick Zoom Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#0a1d42] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-xl">
                  <ZoomIn className="w-5 h-5 text-[#0f9d27]" />
                </div>
              </div>

              {/* Card Bottom Details */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0a1d42] group-hover:text-[#0f9d27] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#0f9d27]" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-[#0f9d27] font-semibold group-hover:translate-x-1 transition-transform">
                    View Photo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state fallback (just in case) */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <Eye className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-700">No photos found</h3>
            <p className="text-sm text-gray-400">Try selecting another category.</p>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a1d42] via-[#0d2757] to-[#0a1d42] p-8 md:p-14 text-white shadow-2xl border border-white/10">
          {/* Ambient light glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0f9d27]/25 blur-[90px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f9d27]/20 border border-[#0f9d27]/40 text-[#0f9d27] text-xs font-bold uppercase tracking-wider mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                Join Our Story
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                Ready to Grow with <span className="text-[#0f9d27]">DB Fintrix?</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
                Experience world-class trading, seamless Demat account opening, and dedicated partner support with Dealing Beneficial Fintrix.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <Link
                to="/open-account"
                className="w-full sm:w-auto text-center bg-[#0f9d27] hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-green-900/40 hover:shadow-green-600/30 hover:scale-105"
              >
                Open Demat Account
              </Link>
              <Link
                to="/become-partner"
                className="w-full sm:w-auto text-center border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={modalOpen}
        currentImage={filteredImages[selectedImageIndex]}
        currentIndex={selectedImageIndex}
        totalCount={filteredImages.length}
        onClose={() => setModalOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
