import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contacts</NavLink>
    </div>
  );
};

export default Header;
