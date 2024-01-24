import { FC, ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isLoggedIn: boolean;
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider(children: Array<ReactNode>) {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(setIsLoggedIn);
  const [user, setUser] = useState("");

  const login = (username: string) => {
    setUser(username);
    navigate("/profile");
  };
  const logout = () => {
    setUser("");
  };
  const auth = { isLoggedIn, user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
