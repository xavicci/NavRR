import { Link, NavLink } from "react-router-dom";

export const MenuPage = () => {
  return (
    <nav>
      <ul>
        <Link to="/">HomePage</Link>
        <Link to="/blog">BlogPage</Link>
        <Link to="/profile">ProfilePage</Link>
        <li>
          <NavLink
          className={}
          style={}
          to='/'
          >Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};
