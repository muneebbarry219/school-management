import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'
// import Welcome from './Welcome'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        if (email === localStorage.getItem("email") && password === localStorage.getItem('password')) {
            localStorage.setItem('login', true);// ye key iss liye k agr login: true nhi hoga tw user protected route ko access nhi kr saky ga

            navigate('/welcome');
        } else {
            toast.error('invalid Email or Password')
        }
    }
    return (
        <>
            <Navbar />
            <form className="d-flex flex-column justify-content-center align-items-center" style={{ height: '90vh', width: '100%' }}>
                <h3 className='text-center mb-2' >Login</h3>
                <div className="border border-2 border-light rounded pt-4 px-3 pb-3" style={{ height: "auto", width: "35%" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }} onClick={submitHandler} >Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login





