import { useLocation } from 'react-router-dom';
import VerifyForm from '../components/VerifyForm';

const VerifyPage = () => {
  const { state } = useLocation();
  const email = state?.email;

  return (
    <div className="signup-wrapper">
      <VerifyForm email={email} />
    </div>
  );
};

export default VerifyPage;