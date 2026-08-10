import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children , allowedRole }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); 
  console.log("User Role:", userRole);

  if (!token || token === "null" || token === "undefined") {
    return <Navigate to="/login" />;
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/" />; 
  }

  return children;
}