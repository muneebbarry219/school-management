import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">School Management System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex jusi=tify-content-end">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/signup">SignUp</Link>
                            <Link className="nav-link" to="/welcome">Welcome</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
