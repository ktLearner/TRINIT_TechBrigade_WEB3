import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import UseWallet from "../../../wallet/wallet";

export default function Navbar({setAddress}) {
  let [wallet, login, logout] = UseWallet();

  async function customLogin(){
    await login();
    setAddress(localStorage.getItem("wallet_address"))
  }

  async function customLogout() {
    await logout();
    setAddress(localStorage.getItem("wallet_address"));
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarCollapse} id="navbarSupportedContent">
            <ul className={styles.navbarNav}>
              <li className={`${styles.navItem} ${styles.navItemHover}`}>
                <Link className={styles.navLink} to="/about">
                  About
                </Link>
              </li>

              {(wallet == null || wallet == "null") && (
                <>
                  <li className={`${styles.navItem} ${styles.navItemHover}`}>
                    <button className={styles.navLink} onClick={customLogin}>
                      Connect to Metamask
                    </button>
                  </li>
                </>
              )}
              {wallet != null && wallet != "null" && (
                <>
                  <li className={`${styles.navItem} ${styles.navItemHover}`}>
                    <button className={styles.navLink} onClick={customLogout}>
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
