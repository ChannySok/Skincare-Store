import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token or user session
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    }
    setLoading(false);
  }, []);

  // eslint-disable-next-line
  const signIn = async (email, password) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, accept any email/password
      const user = {
        id: 1,
        email: email,
        name: email.split("@")[0],
      };

      setUser(user);
      localStorage.setItem("authToken", "demo-token-" + Date.now());
      localStorage.setItem("userData", JSON.stringify(user));
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  // eslint-disable-next-line
  const signUp = async (email, password) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = {
        id: Date.now(),
        email: email,
        name: email.split("@")[0],
      };

      setUser(user);
      localStorage.setItem("authToken", "demo-token-" + Date.now());
      localStorage.setItem("userData", JSON.stringify(user));
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  };

  const value = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
