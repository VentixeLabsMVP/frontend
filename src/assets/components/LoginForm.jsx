import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const LoginForm = () => {
  // creates a statevariable containing empty email and password
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  //updates the correct fields in form
  const handleChange = (e) => {
    // ... is a spread operator that copys key-value-pairs. so you can update specifik fields
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const goToRegister = () => {
    navigate('/account/signup');
  };
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://authprovider.azurewebsites.net/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        const data = await res.json(); 
        localStorage.setItem('token', data.token);
        console.log('Login successful, token:', data.token);
        navigate('/events');
      } else {
        console.error('Login was NOT successful');
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Login to account</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      </div>

      <button type="submit" className="signup-btn">Log In</button>

      <button type="button" className="signup-btn" onClick={goToRegister}>Sign Up</button>
    </form>
  );
};

export default LoginForm;