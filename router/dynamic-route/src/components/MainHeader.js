import { NavLink } from "react-router-dom";
import React from "react";

import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header>
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName={styles.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
