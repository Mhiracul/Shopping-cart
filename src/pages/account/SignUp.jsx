import React from 'react'
import './login.css'
import axios from "axios"
import { Component } from 'react';
import { Link } from 'react-router-dom';



class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    }
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  

  setName(event) {
    this.setState({ name: event.target.value  })
  }

  setEmail(event) {
    this.setState({ email: event.target.value })
  }

  

  setPassword(event) {
    this.setState({ password: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    
    if (this.state.name.trim().length < 3) {
      this.setState({ error: 'Name must be at least 3 characters long' });
      return;
    }
    if (!this.state.email) {
      this.setState({ error: 'Email field cannot be empty' });
      return;
    }
    
    if (!this.state.password) {
      this.setState({ error: 'Password field cannot be empty' });
      return;
    }
    if (!this.state.email + (!this.state.password)) {
      this.setState({ error : 'Email & Password field cannot be empty'});
      return;
    }

    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
   

    axios.post("http://localhost:4000/api/register", registered)
    .then(response => 
      console.log(response.data))
      this.props.history.push('/');
    
  }
  

  render() {
    return (
      <div className='sign-card'>
        <h2>Sign Up</h2>
        <form className='forma' onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.setName}
          />
          
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.setEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.setPassword}
          />
           {this.state.error && <p>{this.state.error}</p>}
          <button type="submit">Sign Up</button>
          <p style={{color: '#919aa3', fontSize:'13px', marginTop: '10px'}} >Have an account? <Link to= '/login' style={{color: 'red'}} >Sign In</Link> </p>

        </form>
       

      </div>
    );
  }
}

export default SignUp;
