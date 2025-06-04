import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const VerifyForm = ({ email }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length === 6) {
      const newCode = value.split('').slice(0, 6);
      setCode(newCode);
      inputsRef.current[5]?.focus();
    } else {
      const newCode = [...code];
      newCode[index] = value[0] || '';
      setCode(newCode);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    const res = await fetch('https://accountprovider.azurewebsites.net/api/account/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code: fullCode })
    });
      if (res.ok) {
    navigate('/account/login'); // if verificaation is success
  } else {
    console.error('Verification failed');
  }
};

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2 className="register-account">Enter Verification Code</h2>
      <div className="code-inputs">
        {code.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength="6"
            value={digit}
            onChange={(e) => handleChange(e, i)}
            ref={(el) => (inputsRef.current[i] = el)}
            className="code-box"
          />
        ))}
      </div>
      <button type="submit" className="signup-btn">Verify</button>
    </form>
  );
};

export default VerifyForm;