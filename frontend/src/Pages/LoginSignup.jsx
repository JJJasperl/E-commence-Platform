import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';

export const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      // successful login here 
      console.log(response.data);
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Simulate sign-up by posting to a generic endpoint (use an actual sign-up endpoint in a real app)
      const response = await axios.post('https://dummyjson.com/users/add', {
        username,
        password,
        email,
      });
      console.log(response.data); // Simulated response from sign-up
      
    } catch (err) {
      setError('Failed to sign up.');
    }
  };
  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className="loginsignup-fields" onSubmit={isLogin ? handleLogin : handleSignUp}>
          <input 
            type="text" 
            placeholder='Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          { !isLogin && <input 
            type="email" 
            placeholder='Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />}
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? " Sign up here" : " Login here"}</span>
        </p>
      </div>
    </div>
  );
};
