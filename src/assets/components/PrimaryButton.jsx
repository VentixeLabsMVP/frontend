const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      <i className="fa-solid fa-arrow-right-from-bracket log-out-icon"></i>
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default PrimaryButton;