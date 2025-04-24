import LinkItem from '../../atoms/LinkItem';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../context/AuthContext';
import { ROLES } from '../../../router/role';
import Button from '../../atoms/Button';
import { useLocation } from 'react-router-dom';
import { StyledNavbar } from './style';

const Navbar = () => {
  const { role, user, logout } = useAuthContext();
  const location = useLocation();

  const isLoginPage = location.pathname === PATHS.LOGIN;
  const isSignupPage = location.pathname === PATHS.SIGNUP;

  const handleClick = () => {
    logout();
  };

  return (
    <StyledNavbar>
      {role === ROLES.GUEST ? (
        <ul>
          {!isLoginPage && (
            <li>
              <LinkItem linkPath={PATHS.LOGIN} children="Login" />
            </li>
          )}
          {!isSignupPage && (
            <li>
              <LinkItem linkPath={PATHS.SIGNUP} children="Signup" />
            </li>
          )}
        </ul>
      ) : (
        <>
          <ul>
            <li>
              <LinkItem linkPath={PATHS.MOVIES.ROOT} children="Home" />
            </li>
            <li>
              <LinkItem
                linkPath={PATHS.MOVIES.WATCHLIST}
                children="Watchlist"
              />
            </li>
            <li>
              <Button handleClick={handleClick}>Logout</Button>
            </li>
          </ul>
          <div className="username">
            <h4>" Weclome {user?.name} "</h4>
          </div>
        </>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
