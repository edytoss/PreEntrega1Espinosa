import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={logo} alt="logo-tienda" />
      </div>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">A cerca de nosotros</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contactenos</a>
          </li>
        </ul>
      </nav>
      <CartWidget cantidad="0" />
    </div>
  );
};

export default Navbar;
