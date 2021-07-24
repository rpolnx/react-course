import classes from "./Header.module.css";
import { selectLogged, logout } from "../auth/auth.slice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isAuth = useSelector(selectLogged);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {isAuth && (
              <button onClick={() => dispatch(logout())}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
