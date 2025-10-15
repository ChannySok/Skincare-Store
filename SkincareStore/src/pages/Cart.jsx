// components/Cart.jsx
import React from 'react';
import { useCart } from '@/context/CartContext';
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Add some products to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-light text-gray-800 dark:text-white">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
          >
            Clear Cart
          </button>
        </div>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400 font-bold">
                    {item.price}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span className="text-gray-800 dark:text-white">Total:</span>
            <span className="text-rose-600 dark:text-rose-400">
              ${getCartTotal().toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-600 hover:to-amber-600 transition-all duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;