import React from 'react'
import store from '../Redux/Store'
import { Navigate } from 'react-router-dom';

export default function PrivateRouteForStudent({children}) {
    const StudentAuth = store.getState().stuAuth;
    if(StudentAuth){
        return children
    }else{
        return <Navigate to="/" />;
    }
 
}
