"use client";
import { createContext, useContext, useState } from "react";

export interface AuthContextType {
  name: string | null;
  email: string | null;
  role: string | null;
  city: string | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export interface User {
  name: string;
  email: string;
  role: string;
  city: string;
}

export const authContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const setUser = (user: User) : void => {
    setCurrentUser(user);
  };
  const clearUser = () : void => {
    setCurrentUser(null);
  };

  return (
    <authContext.Provider value={{ ...currentUser, setUser, clearUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
    const context = useContext(authContext);
    if (!context) {
      throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
  };

export default AuthContextProvider;
