// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signUp = (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if email already exists
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const emailExists = existingUsers.some(user => user.email === userData.email);
        
        if (emailExists) {
          reject(new Error('Email already exists'));
          return;
        }

        // Create new user
        const newUser = {
          id: Date.now().toString(),
          ...userData,
          dateJoined: new Date().toISOString(),
          totalOrders: 0,
          loyaltyPoints: 0
        };

        // Save to localStorage
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        localStorage.setItem('user', JSON.stringify(newUser));
        
        setUser(newUser);
        resolve(newUser);
      }, 1000);
    });
  };

  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find(user => 
          user.email === email && user.password === password
        );

        if (foundUser) {
          localStorage.setItem('user', JSON.stringify(foundUser));
          setUser(foundUser);
          resolve(foundUser);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};