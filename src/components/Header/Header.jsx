import "./header.css";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";


const Header = ({ toggleCart, cartQuantity }) => {

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="d-flex align-items-center justify-content-between">
        <nav>
          <ul className="d-flex align-items-center">
            <li>
              <NavLink to={`/albums`}>Albums</NavLink>
            </li>
            <li>
              <NavLink to={`about`}>About</NavLink>
            </li>
            <li>
              <NavLink to={`/projects`}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={`/shop-all`}>Shop All</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <NavLink to={`/`}>
            <img src={logo} id="logo" alt="logo" width={150} />
          </NavLink>
        </div>
        <button className="d-block" onClick={toggleCart}>
          Cart ( {totalQuantity} )
        </button>
      </header>
    </>
  );
};

export default Header;
