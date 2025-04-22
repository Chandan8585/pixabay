import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./SignUp.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const initialValues = {
    userName: '',
    emailID: '',
    mobile: '',
    password: '',
    confirmPassword: '',
}

const validationSchema = Yup.object({
    userName: Yup.string().required("User name is required"),
    emailID: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid number').required('Phone Number is Required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).+$/, 'Password must include atleast 1 upperCase 1 lowerCase and any spcial Character ex: Abcd@1234').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Not Matching").required('Confirm Password is required')
})

const Signup = () => {
    const [serverError, setServerError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(values) => {
        let {userName, emailID, mobile, password} = values;
        setServerError("");
        
        try {
            const response = await axios.post("https://menu-api-zps1.vercel.app/signup", {
                firstName: values.userName, 
                email: values.emailID, 
                password: values.password,
                mobile: values.mobile
            });
            
            console.log("Signup successful:", response.data);
            setShowSuccess(true);
            
            setTimeout(() => {
                navigate('/login');
            }, 3000);
            
        } catch (error) {
            console.log(error);
            setServerError(error.response?.data?.message || "User Already exists with these details");
        }
    }

    return (
        <div className="container">
            <h2 className="auth-title">Sign Up</h2>
            
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                className='signUp-container'
            >
                <Form>
                    <div className='form-container'>
                        <label htmlFor='userName' className="form-label">Your Name</label>
                        <Field type="text" className="form-input-log" name='userName' placeholder="Enter your First Name"/> 
                        <ErrorMessage name='userName' component='div' className='error-message'/>
                    </div>
                    <div className='form-container'>
                        <label htmlFor='mobile' className="form-label">Phone Number</label>
                        <Field type="tel" className="form-input-log lh-ls" name='mobile' placeholder="Enter your Phone Number" /> 
                        <ErrorMessage name='mobile' component='div' className='error-message'/>
                    </div>
                    <div className='form-container'>
                        <label htmlFor='emailID' className="form-label">Email ID</label>
                        <Field type="email" className="form-input-log lh-ls" name='emailID' placeholder="Enter your Email ID"/> 
                        <ErrorMessage name='emailID' component='div' className='error-message'/>
                    </div>
                    <div className='form-container'>
                        <label htmlFor='password' className="form-label">Password</label>
                        <Field type="password" className="form-input-log lh-ls" name='password' placeholder="Enter your password"/> 
                        <ErrorMessage name='password' component='div' className='error-message'/>
                    </div>
                    <div className='form-container'>
                        <label htmlFor='confirmPassword' className="form-label">Confirm Password</label>
                        <Field type="password" className="form-input-log lh-ls" name='confirmPassword' placeholder="Enter Confirm Password"/> 
                        <ErrorMessage name='confirmPassword' component='div' className='error-message'/>
                    </div>
                    <div className='submit-btn'>
                        <button type="submit" className='btn-margin cursor signup-btn'>Sign Up</button>
                        {serverError && <div className='server-error'>{serverError}</div>}
                    </div>
                    <div className='login-here'> 
                        <p>Already have an account <Link to="/login"><span className='span'>Login</span></Link> here</p>
                    </div>
                </Form>
            </Formik>

            {/* Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="success-popup"
                    >
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                            </svg>
                        </div>
                        <h3>Signup Successful!</h3>
                        <p>You will be redirected to login page shortly</p>
                        <div className="progress-bar">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3 }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Signup;