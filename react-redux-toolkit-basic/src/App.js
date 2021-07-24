import { Fragment } from "react";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Auth from "./components/auth/Auth";
import UserProfile from "./components/user-profile/UserProfile";
import { useSelector } from "react-redux";
import { selectLogged } from "./components/auth/auth.slice";

function App() {
  const isAuth = useSelector(selectLogged);
  return (
    <Fragment>
      <Header />
      ${!isAuth && <Auth />}
      ${isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
