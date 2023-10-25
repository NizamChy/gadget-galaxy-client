import { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location.pathname);

  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-md loading-spinner text-info"></span>
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
