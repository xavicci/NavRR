import { NavLink } from "react-router-dom";

export const MenuPage = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <Link to="/">HomePage</Link>
        <Link to="/blog">BlogPage</Link>
        <Link to="/profile">ProfilePage</Link> */}
        {/* <li>
          <NavLink
            // className={({isActive})=>'' }
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

interface routeNav {
  to: string;
  text: string;
}
const routes: Array<routeNav> = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
