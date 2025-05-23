import { Link, useLocation } from 'react-router-dom';// to be able to keep track on where the user is

const Header = ({ onHamburgerClick }) => {// send in hamburger prop to enable use of modal
  const location = useLocation();//saves user url location
  const showBack = location.pathname.startsWith('/events/') && location.pathname !== '/events';// shows events plus where u are

  return (
    <header className="header">
      {showBack && (
        <Link to="/events" className="back-link">
          <i className="fa-duotone fa-light fa-arrow-left"></i>
          <span className="return-link">Event Details</span>
        </Link>
      )}
      Header
      {/* user the prop hamburger here */}
      <div className="gear-container" onClick={onHamburgerClick}>
        <i className="fa-light fa-gear gear-icon"></i>
      </div>
    </header>
  );
};

export default Header