const DropDownMenuModal = ({ isOpen, onClose}) => {
  if(!isOpen) return null;

  return (
    <div className={`DropDownMenuModal ${isOpen ? 'active' : ''}`}>
      <div className={`DropDownMenu-card ${isOpen ? 'active' : ''}`}>
        <button className="btn-close" onClick={onClose}>X</button>

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
          <button className="drop-down-btn">LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenuModal;