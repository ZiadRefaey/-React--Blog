import { Navigate, Outlet } from "react-router";
import { UserAuth } from "../providers/AuthContext";

export default function ProtectedRoute() {
  const { session } = UserAuth();

  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}
