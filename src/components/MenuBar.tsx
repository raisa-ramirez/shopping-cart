import { Link } from 'react-router';

const MenuBar = () => (
  <div className="menu-bar">
    <Link to="/" className="app-title">
      eStore
    </Link>
    <div className="menu">
      <Link to="/car" className="cart-button">
        My Cart
      </Link>
    </div>
  </div>
);

export default MenuBar;
