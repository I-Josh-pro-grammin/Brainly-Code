import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const { userInfo } = useSelector(state => state.auth || {});
  
  return userInfo ? <Outlet /> : <Navigate to='/welcome/login' replace />
}

export default AdminRoutes