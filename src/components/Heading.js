import {HEAD_LOGO} from "../utils/urls";
const Heading = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={HEAD_LOGO}
          alt="Logo"
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default Heading;