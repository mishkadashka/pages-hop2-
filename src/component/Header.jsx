import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";
import Logo from '../component/logo.png';
const styles = {
  container: {
    width: "100vw",
    height: "100px",
    background: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  links: {
    fontSize: "16px",
    fontWeight: 700,
    color: "white",
    justifyContent: "flex-end",
  },
  color: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
  },
  underlinedColor: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    borderBottom: "2px solid white",
  },
  button: {
    backgroundColor: "transparent",
    color: "grey",
    border: "2px grey  solid",
    height: "60px",
    borderRadius: "4px",
  },
};

export const Header = () => {
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);

  const getAccess = () => {
      alert(access ? 'access denied' : 'access accepted')
      setAccess(!access)
  } 
  return (
    <div style={styles.container}>
      <Link to="/">
        <img src={Logo} alt="logo" width="80" height="20" />
      </Link>
      <div style={styles.links}>
        <Link
          style={
            pathname == "/products" ? styles.underlinedColor : styles.color
          }
          to="/products"
        >
          Products
        </Link>
        <Link
          style={
            pathname == "/services" ? styles.underlinedColor : styles.color
          }
          to="/services"
        >
          Services
        </Link>
        <Link
          style={pathname == "/contact" ? styles.underlinedColor : styles.color}
          to="/contact"
        >
          Contact
        </Link>
        {!access && (
          <Link
            style={pathname == "/login" ? styles.underlinedColor : styles.color}
            to="/login"
          >
            Log in
          </Link>
        )}

        <button style={styles.button} onClick={getAccess}>
          {access ? <p>Cancel Access</p> : <p>Get Access</p>}
        </button>
      </div>
    </div>
  );
};
 