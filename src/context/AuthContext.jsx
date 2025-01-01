import { ROLES } from "../router/role";
const { createContext, useState, useContext } = require("react");

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const myToken = () => localStorage.getItem("token");
const myRole = () => localStorage.getItem("role");

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(() => myRole() || ROLES.ADMIN);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => myToken() || "");

  console.log(role, user, token)

  return (
    <AuthContext.Provider value={{ role, setRole, user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
