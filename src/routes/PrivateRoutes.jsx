import React from 'react';
import useCustomHook from '../hooks/useCustomHook';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useCustomHook()
    const location = useLocation();
   
    if(loading){
        return <div className='h-[50vh] flex items-center justify-center'> 
            <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
        </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;