import "./navbar.css";
import Netflix from "/netflix-backg.png";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const renderNavbarItems = () => {
        switch(location.pathname) {
            case "/":
                return (
                    <>
                        <h1>
                            <NavLink to="/" className="nav-link">
                                <img src={Netflix} alt="logo"/>
                            </NavLink>
                        </h1>

                        <NavLink to="/home" className="authBtn">Sign In</NavLink>
                    </>
                );
            case "/home":
                return (
                    <>
                      <h1>
                            <NavLink to="/" className="nav-link">
                                <img src={Netflix} alt="logo"/>
                            </NavLink>
                        </h1>

                        <NavLink to="#" className="authBtn">Sign In</NavLink>  
                    </>
                )
            default:
                return null;
        }
    };

    return (
        <nav className="navbar">
            {renderNavbarItems()}
        </nav>
    );
};

export default Navbar;
