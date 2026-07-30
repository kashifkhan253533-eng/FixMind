// context/AuthContext.tsx
"use client";

import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (name: string, email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  isLoading: boolean; // اب ہمیشہ false، لیکن TypeScript کے لیے رکھا ہوا ہے
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ✅ Initializer function: localStorage سے ڈیٹا لوڈ کریں (صرف client-side پر)
const loadUserFromStorage = (): { name: string; email: string } | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem("fixmend_user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // ✅ اب صرف user کی state ہے، isLoading کی کوئی ضرورت نہیں
  const [user, setUser] = useState<{ name: string; email: string } | null>(loadUserFromStorage);

  const login = (name: string, email: string) => {
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem("fixmend_user", JSON.stringify(userData));
    document.cookie = "session=true; path=/";
  };

  const signup = (name: string, email: string) => {
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem("fixmend_user", JSON.stringify(userData));
    document.cookie = "session=true; path=/";
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fixmend_user");
    document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}