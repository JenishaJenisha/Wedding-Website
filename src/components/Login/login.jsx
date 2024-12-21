import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication logic (replace with real API calls)
    if (email === 'test@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch('https://your-api/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//     });
//     if (response.ok) {
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
        <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
