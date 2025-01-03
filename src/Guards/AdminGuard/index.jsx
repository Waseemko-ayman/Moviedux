import { useAuthContext } from "../../context/AuthContext";
import { ROLES } from "../../router/role";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../router/paths";

const AdminGuard = () => {
  const { role } = useAuthContext();

  if (role === ROLES.ADMIN) return <Outlet />;
  return <Navigate to={PATHS.LOGIN} replace={true} />;
};

export default AdminGuard;
