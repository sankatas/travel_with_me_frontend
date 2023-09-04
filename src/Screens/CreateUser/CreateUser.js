import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';
import { useNavigate } from "react-router-dom";
import { URL } from "../../Utils/Url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateUser() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        mobileNo: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.userName) {
            errors.userName = 'User Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios
                .post(`${URL}/autenticate/create`, formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    toast.success('Review submitted successfully!', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    console.log('Response from server:', response.data);
                    navigate("/home");

                })
                .catch((error) => {
                    toast.success(error.response.data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    console.error('Error:', error);
                });
        }
    };

    return (

        <div className="registration-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <label>
                    User Name:
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                    {formErrors.userName && <div className="error-text">{formErrors.userName}</div>}
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {formErrors.firstName && <div className="error-text">{formErrors.firstName}</div>}
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {formErrors.lastName && <div className="error-text">{formErrors.lastName}</div>}
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <div className="error-text">{formErrors.email}</div>}
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <div className="error-text">{formErrors.password}</div>}
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mobile No:
                    <input
                        type="tel"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
