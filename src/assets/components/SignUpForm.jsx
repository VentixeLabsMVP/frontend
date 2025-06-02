import { useState } from 'react';

const SignUpForm = () => {
  // creates a statevariable containing empty email and password
  const [form, setForm] = useState({ email: '', password: '' });

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
      console.log('Registration was successfull');
    } else {
      console.error('Registration was NOT successfull');
    }
  } catch (error) {
    console.error('Network Error:', error);
  }
};

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Skapa konto</h2>
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

      <button type="submit" className="signup-btn">Log In</button>
    </form>
  );
};

export default SignUpForm;