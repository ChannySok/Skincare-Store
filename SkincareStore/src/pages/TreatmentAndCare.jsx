import React, { useState } from 'react';
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

// Product data from your JSON
const productData = {
  category: "Treatment & Care",
  description: "Professional skincare treatments and specialized care solutions for various skin concerns. Our expert formulations target specific issues while nourishing and protecting your skin.",
  products: [
    {
      id: 1,
      name: "Acne Control Solution",
      price: "$45.00",
      originalPrice: "$55.00",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Acne Treatment",
      description: "Powerful yet gentle formula to combat acne breakouts and prevent future ones.",
      ingredients: ["Salicylic Acid", "Tea Tree Oil", "Niacinamide", "Zinc"],
      benefits: [
        "Reduces inflammation and redness",
        "Unclogs pores",
        "Controls excess oil",
        "Prevents future breakouts"
      ],
      skinType: ["Oily", "Combination", "Acne-Prone"],
      size: "30ml",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Anti-Aging Serum",
      price: "$68.00",
      originalPrice: "$78.00",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Anti-Aging",
      description: "Advanced serum targeting fine lines, wrinkles, and loss of elasticity.",
      ingredients: ["Retinol", "Vitamin C", "Hyaluronic Acid", "Peptides"],
      benefits: [
        "Reduces appearance of wrinkles",
        "Boosts collagen production",
        "Improves skin elasticity",
        "Brightens complexion"
      ],
      skinType: ["All Skin Types"],
      size: "30ml",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Brightening Treatment",
      price: "$52.00",
      originalPrice: "$62.00",
      image: "https://images.unsplash.com/photo-1556228579-4a6cda31543a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Brightening",
      description: "Targets dark spots and uneven skin tone for a radiant, luminous complexion.",
      ingredients: ["Vitamin C", "Niacinamide", "Tranexamic Acid", "Licorice Root"],
      benefits: [
        "Fades dark spots and hyperpigmentation",
        "Evens skin tone",
        "Provides antioxidant protection",
        "Enhances natural radiance"
      ],
      skinType: ["All Skin Types"],
      size: "30ml",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Sensitive Skin Soother",
      price: "$38.00",
      originalPrice: "$48.00",
      image: "https://images.unsplash.com/photo-1570194065650-2f016fdcfb7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Sensitive Skin",
      description: "Gentle, calming treatment for reactive and sensitive skin types.",
      ingredients: ["Centella Asiatica", "Oat Extract", "Ceramides", "Panthenol"],
      benefits: [
        "Reduces redness and irritation",
        "Strengthens skin barrier",
        "Provides instant relief",
        "Calms inflammation"
      ],
      skinType: ["Sensitive", "Dry", "Reactive"],
      size: "50ml",
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Hydration Boost Cream",
      price: "$42.00",
      originalPrice: "$52.00",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Hydration",
      description: "Intense hydration treatment for severely dry and dehydrated skin.",
      ingredients: ["Hyaluronic Acid", "Squalane", "Ceramides", "Shea Butter"],
      benefits: [
        "Provides 72-hour hydration",
        "Restores skin barrier",
        "Prevents moisture loss",
        "Soothes dry patches"
      ],
      skinType: ["Dry", "Very Dry", "Dehydrated"],
      size: "50ml",
      rating: 4.8,
      reviews: 178
    },
    {
      id: 6,
      name: "Pore Refining Treatment",
      price: "$48.00",
      originalPrice: "$58.00",
      image: "https://images.unsplash.com/photo-1590439471364-0b22a8019491?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Pore Care",
      description: "Minimizes appearance of pores and controls excess sebum production.",
      ingredients: ["Niacinamide", "Salicylic Acid", "Clay Extract", "Willow Bark"],
      benefits: [
        "Minimizes pore appearance",
        "Controls oil production",
        "Smooths skin texture",
        "Prevents blackheads"
      ],
      skinType: ["Oily", "Combination", "Large Pores"],
      size: "30ml",
      rating: 4.5,
      reviews: 142
    },
    {
      id: 7,
      name: "Overnight Repair Mask",
      price: "$55.00",
      originalPrice: "$65.00",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Overnight Treatment",
      description: "Intensive overnight treatment that works while you sleep to repair and rejuvenate.",
      ingredients: ["Bakuchiol", "Peptides", "Ceramides", "Evening Primrose"],
      benefits: [
        "Repairs skin overnight",
        "Boosts natural regeneration",
        "Reduces fine lines",
        "Improves skin texture"
      ],
      skinType: ["All Skin Types"],
      size: "50ml",
      rating: 4.9,
      reviews: 167
    },
    {
      id: 8,
      name: "Rosacea Relief Serum",
      price: "$58.00",
      originalPrice: "$68.00",
      image: "https://images.unsplash.com/photo-1556228453-2aeb66c9a529?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      category: "Specialized Care",
      description: "Specialized treatment for rosacea-prone skin to reduce redness and sensitivity.",
      ingredients: ["Azelaic Acid", "Centella Asiatica", "Green Tea", "Allantoin"],
      benefits: [
        "Reduces redness and flushing",
        "Calms inflammation",
        "Strengthens capillaries",
        "Soothes irritation"
      ],
      skinType: ["Sensitive", "Rosacea-Prone"],
      size: "30ml",
      rating: 4.7,
      reviews: 98
    }
  ],
  skinConcerns: [
    {
      name: "Acne & Breakouts",
      description: "Target stubborn acne and prevent future breakouts",
      recommendedProducts: [1, 6]
    },
    {
      name: "Aging & Wrinkles",
      description: "Combat signs of aging and restore youthful appearance",
      recommendedProducts: [2, 7]
    },
    {
      name: "Hyperpigmentation",
      description: "Even out skin tone and fade dark spots",
      recommendedProducts: [3, 2]
    },
    {
      name: "Dryness & Dehydration",
      description: "Restore moisture and strengthen skin barrier",
      recommendedProducts: [5, 4]
    },
    {
      name: "Sensitivity & Redness",
      description: "Calm and soothe reactive, sensitive skin",
      recommendedProducts: [4, 8]
    }
  ],
  usageTips: [
    "Apply treatments to clean, dry skin",
    "Start with once daily application and increase frequency as tolerated",
    "Always follow with sunscreen during daytime use",
    "Patch test new products before full application",
    "Consistent use yields best results"
  ]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const TreatmentAndCare = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    skinType: 'all',
    category: 'all',
    priceRange: 'all'
  });

  // Get unique categories and skin types for filters
  const categories = ['all', ...new Set(productData.products.map(p => p.category))];
  const skinTypes = ['all', ...new Set(productData.products.flatMap(p => p.skinType))];

  // Filter products based on selected filters
  const filteredProducts = productData.products.filter(product => {
    const skinTypeMatch = filters.skinType === 'all' || product.skinType.includes(filters.skinType);
    const categoryMatch = filters.category === 'all' || product.category === filters.category;
    
    let priceMatch = true;
    if (filters.priceRange !== 'all') {
      const price = parseFloat(product.price.replace('$', ''));
      switch (filters.priceRange) {
        case 'under-40': priceMatch = price < 40; break;
        case '40-60': priceMatch = price >= 40 && price <= 60; break;
        case 'over-60': priceMatch = price > 60; break;
        default: priceMatch = true;
      }
    }
    
    return skinTypeMatch && categoryMatch && priceMatch;
  });

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    // Add to cart functionality here
    alert(`Added ${product.name} to cart!`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) 
            ? 'text-yellow-400' 
            : index < rating 
            ? 'text-yellow-300' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-rose-200/40 via-amber-200/40 to-rose-200/40 dark:from-gray-800/60 dark:via-gray-700/60 dark:to-gray-800/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-4 tracking-tight">
            Treatment & Care
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Professional skincare solutions for your specific concerns
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {/* Skin Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Skin Type
              </label>
              <select
                value={filters.skinType}
                onChange={(e) => setFilters({...filters, skinType: e.target.value})}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                {skinTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Skin Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-40">Under $40</option>
                <option value="40-60">$40 - $60</option>
                <option value="over-60">Over $60</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sale
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {product.name}
                      </h3>
                      <span className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Skin Type */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.skinType.map((type) => (
                      <span
                        key={type}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 text-white py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => openProductModal(product)}
                      className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No products found matching your filters.
              </p>
              <button
                onClick={() => setFilters({ skinType: 'all', category: 'all', priceRange: 'all' })}
                className="mt-4 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skin Concerns Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 dark:text-white mb-4">
              Skin Concerns
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the perfect treatment for your specific skin needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productData.skinConcerns.map((concern) => (
              <motion.div
                key={concern.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {concern.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {concern.description}
                </p>
                <div className="flex gap-2">
                  {concern.recommendedProducts.map(productId => {
                    const product = productData.products.find(p => p.id === productId);
                    return product ? (
                      <button
                        key={product.id}
                        onClick={() => openProductModal(product)}
                        className="text-sm bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full hover:bg-rose-200 dark:hover:bg-rose-800/50 transition-colors duration-300"
                      >
                        {product.name}
                      </button>
                    ) : null;
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-serif font-light text-gray-800 dark:text-white">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={closeProductModal}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-rose-600 dark:text-rose-400">
                        {selectedProduct.price}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-400 dark:text-gray-500 line-through">
                          {selectedProduct.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(selectedProduct.rating)}
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {selectedProduct.rating} • {selectedProduct.reviews} reviews
                      </span>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Key Ingredients
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full text-sm"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Benefits
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Skin Type & Size */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                          Skin Type
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedProduct.skinType.map((type) => (
                            <span
                              key={type}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                          Size
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProduct.size}
                        </p>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        closeProductModal();
                      }}
                      className="w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Add to Cart - {selectedProduct.price}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TreatmentAndCare;