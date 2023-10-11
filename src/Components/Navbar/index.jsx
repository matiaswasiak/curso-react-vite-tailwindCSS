import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingBag from "../../../assets/icons/ShoppingBag";

function getNavLinkClassName({ isActive }) {
  const activeStyle = "underline underline-offset-4";
  return isActive ? activeStyle : undefined;
}

const Navbar = () => {
  const { count } = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={"/"}>Shopi</NavLink>
        </li>
        <li>
          <NavLink to={"/"} className={getNavLinkClassName}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={"/clothes"} className={getNavLinkClassName}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to={"/electronics"} className={getNavLinkClassName}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to={"/furnitures"} className={getNavLinkClassName}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to={"/toys"} className={getNavLinkClassName}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to={"/others"} className={getNavLinkClassName}>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">matiaswasiak@gmail.com</li>
        <li>
          <NavLink to={"/my-orders"} className={getNavLinkClassName}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to={"/my-account"} className={getNavLinkClassName}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sign-in"} className={getNavLinkClassName}>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBag className="h-6 w-6 text-black" />
          <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
