import React from "react";
import "./style.css";
import LinkItem from "../../atoms/LinkItem";
import { PATHS } from "../../../router/paths";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../router/role";
import Button from "../../atoms/Button";

const Navbar = () => {
  const { role, user, setUser, setToken, setRole } = useAuthContext();

  const handleClick = () => {
    setUser(null);
    setToken("");
    setRole(ROLES.GUEST);
  };

  return (
    <nav>
      {role === ROLES.GUEST ? (
        <ul>
          <li>
            <LinkItem linkPath={PATHS.LOGIN} children="Login" />
          </li>
          <li>
            <LinkItem linkPath={PATHS.SIGNUP} children="Singup" />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <LinkItem linkPath={PATHS.MOVIES.ROOT} children="Home" />
          </li>
          <li>
            <LinkItem linkPath={PATHS.MOVIES.WATCHLIST} children="Watchlist" />
          </li>
          <li>
            <Button handleClick={handleClick}>Logout</Button>
          </li>
          <li>
            <h4>Weclome {user?.username}</h4>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
