import { useLocation } from 'react-router-dom';
import VerifyForm from '../components/VerifyForm'; // eller rätt path

const VerifyPage = () => {
  const { state } = useLocation();
  const email = state?.email;

  return <VerifyForm email={email} />;
};

export default VerifyPage;