import React, {useState} from 'react';
import './login.css'
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  const handleFacebookLogin = () => {
    // your logic to handle Facebook login goes here
    
  };
  

  const handleGoogleLogin = () => {
    // your logic to handle Google login goes here
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

        <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={handleFacebookLogin}
      >
        Login with Facebook
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
      </form>
    </div>
  );
};






  export default Login
