// src/context/AuthContext.tsx
import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
  user: null,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={{ user: null, login: () => {}, logout: () => {} }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
