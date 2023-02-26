import React, {useState} from 'react'
import './login.css'
import axios from "axios";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/register", {
        email,
        password,
      });
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  const handleFacebookSignUp = () => {
    // your logic to handle Facebook login goes here
    
  };
  

  const handleGoogleSignUp = () => {
    // your logic to handle Google login goes here
  };
  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>

        <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={handleFacebookSignUp}
      >
        Login with Facebook
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={handleGoogleSignUp}
      >
        Login with Google
      </button>
      </form>
    </div>
  );
};

export default SignUp