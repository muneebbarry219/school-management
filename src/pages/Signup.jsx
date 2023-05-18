import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        if (name === "") {
            toast.error('Name is Required!!')
        } else if (email === "") {
            toast.error('Email is Required!!')
        } else if (password === "") {
            toast.error('Password is Required!!')
        } else {
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            toast.success('User Created')
            navigate('/login')
        }
    }

    return (
        <>
            <Navbar />
            <form className="d-flex flex-column justify-content-center align-items-center" style={{ height: '90vh', width: '100%' }}>
                <h3 className='text-center mb-2' >Sign Up</h3>
                <div className="border border-2 border-light rounded pt-4 px-3 pb-3" style={{ height: 'auto', width: "35%" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="nameHelp" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitHandler} style={{ width: "100%" }} >Submit</button>
                </div>
            </form>
        </>
    )
}

export default Signup





