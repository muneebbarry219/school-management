import React from 'react'
import { useNavigate, Outlet } from "react-router-dom";

function Protected(isLogged) {
    const navigate = useNavigate()
    return (
        <>
            {isLogged ? <Outlet /> : navigate('/login')}
        </>
    )
}

export default Protected
