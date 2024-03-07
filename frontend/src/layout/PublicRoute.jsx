import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const { user } = useSelector((state) => state.userState);

  return !user ? children : <Navigate to={"/"} replace />;
}
export default PublicRoutes;
