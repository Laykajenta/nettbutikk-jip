import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import MinLogo from '../../assets/crown.svg?react';
import './navigation.style.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          
          <MinLogo className='logo' />
    
          
        </Link>
              <div className="nav-links-container">
                  <Link className="nav-link" to='/shop'>
                      BUTIKK                    
          </Link>   
           <Link className="nav-link" to='/sign-in'>
                      SIGN IN                   
               </Link>   
              </div>
              
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
