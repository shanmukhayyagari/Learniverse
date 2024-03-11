import React from 'react'
import store from '../Redux/Store'
import { Navigate } from 'react-router-dom';

export default function PrivateRouteForTeacher({children}) {
    const TeacherAuth = store.getState().TeachAuth;
    if(TeacherAuth){
        return children
    }else{
        return <Navigate to="/" />;
    }
 
}