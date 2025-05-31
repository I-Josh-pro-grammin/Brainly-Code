import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const TeacherRoutes = () => {
  const { userInfo } = useSelector(state => state.auth || {});

  return userInfo && userInfo.role === 'TEACHER' ? <Outlet /> : <Navigate to='/welcome/login' replace />
}

export default TeacherRoutes