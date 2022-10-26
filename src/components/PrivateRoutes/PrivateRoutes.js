import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading){
        return (
          <div className="w-16 h-16 my-5 border-4 border-dashed mx-auto rounded-full animate-spin border-x-black border-y-black"></div>
        );
    }

      if (!user) {
        return (
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
      }
    return children;
};

export default PrivateRoutes;