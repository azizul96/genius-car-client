/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <div className=" flex justify-center items-center mt-20">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>
};

export default PrivateRoute;