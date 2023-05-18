import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { json, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const GetStarted = () => {
    const navigate = useNavigate();
    const [schoolName, setSchoolName] = useState("");
    const [schoolEmail, setSchoolEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault()

        if (schoolName.trim().length == 0) {
            toast.error("School name is required!");
        }
        else if (schoolEmail.trim().length == 0) {
            toast.error("School E-mail is required!")
        }
        else if (password.trim().length == 0) {
            toast.error("Enter correct password!")
        }
        else {
            let schoolData = {
                name: schoolName,
                email: schoolEmail,
                password: password
            };

            localStorage.setItem("schoolData", JSON.stringify(schoolData));

            toast.success("Registered successfully");
        }
    }


    return (
        <>
            <Navbar />

            <div className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: 'auto', width: '100%', marginTop: "30px" }}
            >
                <h3 className='text-center mb-2' >Register</h3>

                <div className="border border-2 border-light rounded pt-4 px-3 pb-3" style={{ height: 'auto', width: "30%" }}>

                    <div className="mb-3">
                        <label htmlFor="school-name"
                            className="form-label">
                            School Name
                        </label>
                        <input type="text"
                            className="form-control"
                            id="school-name"
                            aria-describedby="nameHelp"
                            value={schoolName}
                            onChange={e => setSchoolName(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="school-email"
                            className="form-label">
                            Email address
                        </label>
                        <input type="email"
                            className="form-control"
                            id="school-email"
                            aria-describedby="emailHelp"
                            value={schoolEmail}
                            onChange={e => setSchoolEmail(e.target.value)}
                        />
                        <div id="emailHelp"
                            className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"
                            className="form-label">
                            Password
                        </label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit"
                        className="btn btn-primary"
                        onClick={submitHandler}
                        style={{ width: "100%" }} >
                        Submit
                    </button>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'
                style={{ marginTop: "30px" }} >
                <button className='border border-danger bg-danger rounded-pill px-5 py-2 text-white '>
                    Get Started
                </button>
            </div>

        </>
    )
}

export default GetStarted
