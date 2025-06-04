import { useNavigate } from "react-router-dom";

const DropDownMenuModal = ({ isOpen, onClose }) => {
const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/account/login');
  };

  return (
  <div className={`DropDownMenuModal ${isOpen ? "active" : ""}`} style={{ pointerEvents: isOpen ? "auto" : "none" }}>
    <div className={`DropDownMenu-card ${isOpen ? "active" : ""}`}>
        <button className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark-large"></i>
        </button>

        <div className="account-container">
          <div className="account-header">
            <div className="account-name">
              <h4>Fredrik Nilsson</h4>
            </div>
          </div>
            <div className="account-body">
              <span className="account-type">Guest</span>
            </div>
        </div>


        <div className="menu-log-out-container">
            <button className="btn-big-boy" onClick={handleLogout}>
            <span className="logout-text">LogOut</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenuModal;