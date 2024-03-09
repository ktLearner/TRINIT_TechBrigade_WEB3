import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import UseWallet from "../../../wallet/wallet";

export default function Navbar() {
  let [wallet, login, logout] =  UseWallet();
    return (
      <>
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarCollapse} id="navbarSupportedContent">
              <ul className={styles.navbarNav}>
                {/* <li className={`${styles.navItem} ${styles.navItemHover}`}>
                  <Link className={styles.navLink} to={`/#login`}>
                    Login
                  </Link>
                </li> */}
                <li className={`${styles.navItem} ${styles.navItemHover}`}>
                  <Link className={styles.navLink} to="/about">
                    About
                  </Link>
                </li>

                {wallet == null && (
                  <>
                    <li className={`${styles.navItem} ${styles.navItemHover}`}>
                      <button className={styles.navLink} onClick={login}>
                        Connect to Metamask
                      </button>
                    </li>
                  </>
                )}
                {wallet != null && (
                  <>
                    <li className={`${styles.navItem} ${styles.navItemHover}`}>
                      <button className={styles.navLink} onClick={logout}>
                        Disconnect Metamask
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}