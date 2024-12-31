import { useAuthContext } from "../../context/AuthContext";
import { ROLES } from "../../router/role";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

const GuestGuard = ({ children }) => {
  const { role } = useAuthContext();

  if (role === ROLES.USER || role === ROLES.ADMIN)
    return <Navigate to={PATHS.MOVIES.ROOT} replace={true} />;
  return children;
};

export default GuestGuard;
