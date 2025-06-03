import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const SignUpForm = () => {
  // creates a statevariable containing empty email and password
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  
  const goToLogin = () => {
  navigate('/account/login');
  };  

  //updates the correct fields in form
  const handleChange = (e) => {
    // ... is a spread operator that copys key-value-pairs. so you can update specifik fields
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

 try {
    const res = await fetch('https://localhost:7093/api/account/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      navigate('/account/verify', { state: { email: form.email } });
    } else {
      const data = await res.json();

      const userAlreadyExists = Array.isArray(data)
        && data.some(e => e.code === 'DuplicateUserName');

      if (userAlreadyExists) {
        navigate('/account/verify', { state: { email: form.email } });
      } else {
        console.error('Registration failed:', data);
      }
    }
  } catch (error) {
    console.error('Network or server error:', error);
  }
};

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Create Account</h2>
      <div className="form-group">
        <label htmlFor="email">E-post</label>
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

      <button type="submit" className="signup-btn">Register</button>

      <button type="button" className="signup-btn" onClick={goToLogin}>Already have an account? Log In</button>
    </form>
  );
};

export default SignUpForm;