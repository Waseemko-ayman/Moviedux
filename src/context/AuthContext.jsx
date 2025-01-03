import useAuth from "../Hooks/useAuth";
import React, { createContext, useContext, useEffect } from "react";

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const data = useAuth();
  useEffect(() => {
    if (data?.user) {
      console.log(data?.user?.email);
    } else {
      console.log("User is not logged in");
    }
  }, [data?.user]);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
