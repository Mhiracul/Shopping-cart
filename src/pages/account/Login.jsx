import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
//import { GoogleLogin } from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import Footer from '../../components/Footer';
import { CSSProperties } from 'react'
import { Link } from 'react-router-dom';
//import { GoogleLoginButton } from "react-social-login-buttons"
//import { LoginSocialGoogle } from "reactjs-social-login"

const override: CSSProperties = {
  display:"block",
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: "red",
  marginLeft: '100px',
}
const Login = ({history }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginStatus("pending"); 
    try {
      const res = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      setEmail('');
      setPassword('');
      navigate('/shop')
    } catch (err) {
      setError(err.response.data.error);
      setLoginStatus('rejected'); 
      setShowError(true);
    }
  };

  
  /*const handleGoogleLogin = async (googleData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/google', { token: googleData.tokenId });
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };*/
  /*const handleGoogleLogin = async (googleData) => {
    try {
      const response = await axios.post('http://localhost:4000/auth/google', { token: googleData.tokenId });
      localStorage.setItem('accessToken', response.data.accessToken);
      history.push('/shop');
    } catch (error) {
      console.error(error);
    }
  }; 
  

  const handleFacebookLogin = async (facebookData) => {
    try {
      const response = await axios.post('/api/facebook', { token: facebookData.accessToken });
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.err(error);
    }
  }; */

  return (
    <div className='form-card'>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      
      <div className='image'>  
      <form className='forma' onSubmit={handleLogin}>
        <h2 className='hello' style={{color: 'black'}}>Hello Again</h2>
        <p style={{color: 'black', fontSize: '12px'}}>Enter your Credentials to access your account</p>
        <input
          type='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={loginStatus === 'pending'}>
          {loginStatus === 'pending' ? <HashLoader color="#ccc" size={15} cssOverride={override} /> : 'Sign In'}
        </button>
        {showError && <div className="error">Invalid Email or Password.....</div>}
       
      <p style={{color: '#919aa3', fontSize:'13px', marginTop: '10px'}} >Dont have an account? <Link to= '/signUp' style={{color: 'red'}} >Register Now</Link> </p>
      </form>
      </div>    
      {error && <p className="error">{error}</p>}

      
    </div>
   
  );
};
<Footer />
export default Login;
