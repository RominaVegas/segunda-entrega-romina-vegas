import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>AmeliaDress 👗</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todos</li>
          </Link>
          <Link to="/category/largos">
            <li>Vestidos Largos</li>
          </Link>
          <Link to="/category/cortos">
            <li>Vestidos Cortos</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
