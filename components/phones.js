'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import products from '@/phonesdata';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'cases', name: 'Cases' },
  { id: 'screen-protectors', name: 'Screen Protectors' },
  { id: 'chargers', name: 'Chargers' },
  { id: 'earphones', name: 'Earphones' },
  { id: 'power-banks', name: 'Power Banks' },
  { id: 'holders', name: 'Holders' },
  { id: 'cables', name: 'Cables' },
];

export default function PhoneAccessoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setMounted(true);
    // Adjust items per page based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(8);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(15);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && brandMatch && priceMatch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedBrand, priceRange]);

  const themeClasses = {
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      secondaryText: 'text-gray-600',
      border: 'border-gray-200',
      cardBg: 'bg-white',
      filterBg: 'bg-white',
      hoverBg: 'hover:bg-gray-100',
      inputBg: 'bg-white',
      shadow: 'shadow-sm',
      hoverShadow: 'hover:shadow-md',
      placeholder: 'placeholder-gray-400'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-gray-100',
      secondaryText: 'text-gray-400',
      border: 'border-gray-700',
      cardBg: 'bg-gray-800',
      filterBg: 'bg-gray-800',
      hoverBg: 'hover:bg-gray-700',
      inputBg: 'bg-gray-700',
      shadow: 'shadow-none',
      hoverShadow: 'hover:shadow-lg',
      placeholder: 'placeholder-gray-500'
    }
  };

  const currentTheme = mounted ? theme : 'light';
  const themeStyles = themeClasses[currentTheme] || themeClasses.light;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  // Pagination controls component
  const PaginationControls = () => {
    if (totalPages <= 1) return null;
    
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        {/* Previous button */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${themeStyles.border} border ${
            currentPage === 1 
              ? 'opacity-50 cursor-not-allowed' 
              : `${themeStyles.hoverBg} cursor-pointer`
          }`}
          aria-label="Previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* First page */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-md ${themeStyles.border} border ${themeStyles.hoverBg}`}
            >
              1
            </button>
            {startPage > 2 && <span className={`px-1 ${themeStyles.secondaryText}`}>...</span>}
          </>
        )}
        
        {/* Page numbers */}
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md border ${
              currentPage === page
                ? 'bg-yellow-500 text-white border-yellow-500'
                : `${themeStyles.border} ${themeStyles.hoverBg}`
            }`}
          >
            {page}
          </button>
        ))}
        
        {/* Last page */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className={`px-1 ${themeStyles.secondaryText}`}>...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`px-3 py-1 rounded-md ${themeStyles.border} border ${themeStyles.hoverBg}`}
            >
              {totalPages}
            </button>
          </>
        )}
        
        {/* Next button */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${themeStyles.border} border ${
            currentPage === totalPages 
              ? 'opacity-50 cursor-not-allowed' 
              : `${themeStyles.hoverBg} cursor-pointer`
          }`}
          aria-label="Next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className={`py-12 ${themeStyles.bg} transition-colors duration-300 min-h-screen`}>
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme toggle button */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`absolute top-4 right-4 p-2 rounded-full ${themeStyles.cardBg} ${themeStyles.border} border ${themeStyles.hoverBg} transition-colors`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold ${themeStyles.text} mb-3`}>
            Premium <span className="text-yellow-500 dark:text-yellow-400">Phone</span>{' '}
            <span className="text-teal-600 dark:text-teal-400">Accessories</span>
          </h2>
          <p className={`text-sm md:text-base ${themeStyles.secondaryText} max-w-2xl mx-auto`}>
            Protect and enhance your devices with our high-quality accessories
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className={`mb-8 ${themeStyles.filterBg} p-4 rounded-lg ${themeStyles.shadow} border ${themeStyles.border} transition-all duration-300`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Category Filter as Tabs */}
            <div className="flex-1 w-full">
              <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex-shrink-0 px-4 py-2 text-sm rounded-full mr-2 transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : `${themeStyles.secondaryText} ${themeStyles.cardBg} border ${themeStyles.border} ${themeStyles.hoverBg}`
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="w-full sm:w-48">
              <select
                className={`w-full text-sm rounded-lg ${themeStyles.inputBg} ${themeStyles.border} border py-2 px-3 ${themeStyles.text} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors duration-200`}
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="all">All Brands</option>
                {[...new Set(products.map(p => p.brand))].map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-4">
            <label className={`block text-sm font-medium ${themeStyles.text} mb-2`}>
              Price Range: UGX {formatPrice(priceRange[0])} - UGX {formatPrice(priceRange[1])}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                className={`flex-1 h-2 ${themeStyles.bg} rounded-lg appearance-none cursor-pointer accent-yellow-500`}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              />
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                className={`flex-1 h-2 ${themeStyles.bg} rounded-lg appearance-none cursor-pointer accent-yellow-500`}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className={`mb-4 text-sm ${themeStyles.secondaryText}`}>
          Showing {Math.min(filteredProducts.length, startIndex + 1)}-{Math.min(filteredProducts.length, startIndex + itemsPerPage)} of {filteredProducts.length} products
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className={`group relative ${themeStyles.cardBg} border ${themeStyles.border} rounded-lg overflow-hidden ${themeStyles.shadow} ${themeStyles.hoverShadow} transition-all duration-300`}
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Compatibility Badge */}
                <div className="absolute top-2 right-2 bg-teal-100/90 dark:bg-teal-900/90 text-teal-800 dark:text-teal-200 text-[10px] font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                  {product.compatibleWith[0].replace('iPhone', '').replace('Galaxy', '')}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className={`text-sm font-semibold ${themeStyles.text} mb-1 line-clamp-2`}>
                  <Link href={`/phone-accessories/${product.id}`} className="hover:text-yellow-500 transition-colors">
                    {product.name}
                  </Link>
                </h3>

                {/* Price */}
                <p className={`text-base font-bold ${themeStyles.text} mb-2`}>UGX {formatPrice(product.price)}</p>

                {/* Rating and Brand */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className={`text-xs ${themeStyles.secondaryText} ml-1`}>
                      {product.rating}
                    </span>
                  </div>
                  <span className={`text-xs font-medium ${themeStyles.secondaryText}`}>
                    {product.brand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <PaginationControls />

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className={`text-center py-16 ${themeStyles.text}`}>
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium">No products found</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your filters or browse our full collection
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setPriceRange([0, 100000]);
              }}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}