import React from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/context/AuthContext';
import { LoginHandler } from '../../components/context/AuthService';


const Login = () => {
    const navigate = useNavigate();  
    const { email, password, authDispatch } = useAuth();
    console.log("username",email, password, authDispatch );
 const handleLoginClick= (event)=> {
          event.preventDefault();
          const token = LoginHandler(email, password);
          console.log("token", token);
          if(token){
            navigate("/")
          }
          authDispatch({
            type: "TOKEN",
            payload: token
          })
          authDispatch({
            type: "CLEAR_CREDENTIALS"
          })
 }
 const handleEmailChange = (event)=> {
         authDispatch({
            type: "EMAIL",
            payload: event.target.value
         })
 }
 const handlePasswordChange = (event)=> {
         authDispatch({
            type: "PASSWORD",
            payload: event.target.value
         })
 }
 const handleTestCredentialsClick = ()=> {
      const token = LoginHandler("pratapchandan207@gmail.com", "Abcd@123");
      authDispatch({
        type: "TOKEN",
        payload: token
      })
      if(token){
        navigate("/");

      }
     
 }
  return (
    <div className="d-grid">
    <div className="login-auth d-flex direction-column justify-center">
        <h2 className="auth-title">Login</h2>
        <form 
        onSubmit={handleLoginClick}
        >
            <div className="form-container">
                <label className="form-label">Email ID</label>
                <input 
                value={email} 
                className="form-input-log lh-ls" placeholder="Chandan_Pratap8585" 
                onChange={handleEmailChange}
                />
            </div>
            <div className="form-container">
                <label className="form-label">Password</label>
                <input 
                value={password} 
                className="form-input-log lh-ls" placeholder="*******" 
                onChange={handlePasswordChange}
                />
            </div>
            <div className="cta">
                <button className="button login-btn btn-margin cursor">Login</button>
            </div>
        </form>
        <div>
            <button className="test button login-btn btn-outline-primary btn-margin sign-up-btn" 
            onClick={handleTestCredentialsClick}
            >
                Login with Test Credentials
            </button>
        </div>
        <div className='sign-up-here'>
          <p>Don't have an account <Link to="/signup"><span className='span'>Sign Up</span></Link> here</p>
        </div>
    </div>
</div>
  )
}

export default Login