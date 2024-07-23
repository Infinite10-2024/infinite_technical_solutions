"use client";

import { routes } from "@/app/routes";
import Image from "next/image";
import styles from "./layout.module.css";
import { MouseEvent, useState } from "react";
import { scrollTo } from "../utils/scroll";
import Button from "../components/Button";
import Menu from "../../../public/assets/icons/Menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activePath, setActivePath] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isCurrentPath = (path: string) => {
    return activePath === path ? styles.active : styles.route;
  };

  const handleNavClick = (event: MouseEvent, targetId: string) => {
    scrollTo(event, targetId);
    setActivePath(targetId);
  };

  return (
    <div className={styles.headerContainer}>
      <Image
        src="assets/svg/main-logo.svg"
        alt="main-logo"
        width={203}
        height={62}
        onClick={(e) => handleNavClick(e, "home")}
      />
      <nav>
        <ul className={styles.routeList}>
          {routes.map((route) => (
            <li
              key={route.path}
              className={isCurrentPath(route.path)}
              onClick={(e) => handleNavClick(e, route.path)}
            >
              {route.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuBtn}>
          <Button
            icon={<Menu />}
            type="ghost"
            onClick={() => setShowMenu(true)}
          />
        </div>
        <div
          style={{
            transform: showMenu ? "translateX(0)" : "translateX(-100vw)",
            opacity: showMenu ? 1 : 0.5,
          }}
          className={styles.mobileMenuContainer}
        >
          <MobileMenu
            handleNavClick={handleNavClick}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>

      <div className={styles.cart}>
        {/* <Button icon={<Cart />} type="outlined-contrast">
          Carrito
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
