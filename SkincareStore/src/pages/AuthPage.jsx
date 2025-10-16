// pages/AuthPage.jsx
import React, { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-amber-400 to-purple-500 dark:from-rose-600 dark:via-amber-600 dark:to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 dark:border-gray-700/50">
            <h1 className="text-5xl lg:text-6xl font-serif font-light text-white mb-4">
              Welcome to Lunara
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Discover the art of skincare with our premium products. 
              Join our community and transform your skincare routine.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span>Premium Products</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <span>Expert Care</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auth Forms */}
        <div className="lg:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            {isSignIn ? (
              <SignIn key="signin" switchToSignUp={() => setIsSignIn(false)} />
            ) : (
              <SignUp key="signup" switchToSignIn={() => setIsSignIn(true)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;