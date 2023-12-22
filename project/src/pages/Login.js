import React from 'react'
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('البريد الإلكتروني وكلمة المرور مطلوبان');
    } else {
           navigate('/product');
    }
  };

  return (
    <div className="loginn">
          <div className="log">
             <h2>Login</h2>
             </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className='but'>

      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;