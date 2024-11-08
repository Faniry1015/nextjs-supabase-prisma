"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  name: string | null;
  email: string | null;
  role: string | null;
  city: string | null;
  setUserContext: (user: User) => void;
  clearUserContext: () => void;
}

export interface User {
  name: string;
  email: string;
  role: string;
  city: string;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const setUserContext = (user: User) : void => {
    setUser(user);
  };
  const clearUserContext = () : void => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ ...user, setUserContext, clearUserContext }}>
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
