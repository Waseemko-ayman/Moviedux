import useAuth from "../Hooks/useAuth";
const { createContext, useContext } = require("react");

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const data = useAuth();
  if (data?.user) {
    console.log(data?.user?.email);
  } else {
    console.log("User is not logged in");
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
