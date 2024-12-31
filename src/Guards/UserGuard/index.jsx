import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { ROLES } from "../../router/role";
import { PATHS } from "../../router/paths";

const UserGuard = () => {
  const { role } = useAuthContext();

  if (role === ROLES.USER) return <Outlet />;
  return <Navigate to={PATHS.MOVIES.ROOT} replace={true} />;
};

export default UserGuard;
