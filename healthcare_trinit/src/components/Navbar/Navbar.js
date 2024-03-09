import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
          <nav className={styles.navbar}>
            <div className={styles.container}>
              <div className={styles.navbarCollapse} id="navbarSupportedContent">
                <ul className={styles.navbarNav}>
                 
                    <li className={`${styles.navItem} ${styles.navItemHover}`}>
                      <Link className={styles.navLink} to={`/#login`}>
                        Login
                      </Link>
                    </li>
                  <li className={`${styles.navItem} ${styles.navItemHover}`}>
                    <Link className={styles.navLink} to="/about">
                      About
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
}