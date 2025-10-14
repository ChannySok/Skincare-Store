import React, { useState, useEffect } from "react";
import jsonData from "../data/products.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [brandInfo, setBrandInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with timeout
    const loadData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setProducts(jsonData.products);
        setBrandInfo(jsonData.brandInfo);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading beautiful products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-light text-gray-800 mb-4 tracking-tight">
          {brandInfo.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          {brandInfo.tagline}
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ maxHeight: '400px' }} // Added max height for mobile
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 ease-in-out flex items-end justify-center">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out w-full p-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <p className="text-rose-600 font-bold text-lg mb-3">
                      {product.price}
                    </p>
                    <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:from-rose-500 hover:to-rose-600 hover:scale-105 shadow-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info (Visible by default on mobile) */}
            <div className="p-4 bg-white lg:hidden">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {product.name}
                  </h3>
                  <p className="text-rose-600 font-bold text-md">
                    {product.price}
                  </p>
                </div>
                <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>
              <button className="w-full bg-rose-500 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:bg-rose-600">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;