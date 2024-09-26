import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { auth, logout } = useContext(AuthContext);

  const storedAuth = JSON.parse(localStorage.getItem('auth'));
  const userName = storedAuth && auth.loggedIn ? storedAuth.user : "Guest";

  return (
    <nav style={style.navbar}>
      <div style={style.logo}>
        <Link to="/dashboard" style={style.logoLink}>Employee Management Portal</Link>
      </div>
      <ul style={style.navlinks}>
        {auth.loggedIn && (
          <>
            <li style={style.navitems}>
              <Link to="/dashboard" style={style.navLink}>Home</Link>
            </li>
            <li style={style.navitems}>
              <Link to="/employeelist" style={style.navLink}>Employee List</Link>
            </li>
          </>
        )}
          <li style={style.navitems}>
            <span style={style.navtext}>{userName}</span>
          </li> 
        <li style={style.navitems}>
          {auth.loggedIn ? (
            <button
              onClick={logout}
              style={{ ...style.navLink, ...style.buttonLink }}
            >
              Logout
            </button>
          ) : (
            <Link to="/signin" style={style.navLink}>Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const style = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#2f3e46',
    color: '#001d3d',
    height: '60px',
    marginBottom: '0px'
  },
  logo: {
    fontSize: '1.2rem',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  navlinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    margin: 0,
    padding: 0,
  },
  navitems: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.3rem 0.7rem',
    fontWeight: 'bold',
  },
  buttonLink: {
    background: 'none',
    border: 'none',
    padding: '0.3rem 0.7rem',
    cursor: 'pointer',
  },
  navtext: {
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
};

export default Navbar;