import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import MinLogo from "../../assets/crown.svg?react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => { 
    await signOutUser();
    setCurrentUser(null);
  
    
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <MinLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            BUTIKK
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
