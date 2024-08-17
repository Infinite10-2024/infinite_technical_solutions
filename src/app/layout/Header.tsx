"use client";

import { routes } from "@/app/routes";
import Image from "next/image";
import styles from "./layout.module.css";
import { MouseEvent, useEffect, useState } from "react";
import { detectScroll } from "../utils/scroll";
import Button from "../components/Button";
import Menu from "../../../public/assets/icons/Menu";
import MobileMenu from "./MobileMenu";
import Call from "../../../public/assets/icons/Call";
import Link from "next/link";

function debounce(func: any, delay: any) {
  let timer: any;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args as any);
    }, delay);
  };
}

const Header = () => {
  const [activePath, setActivePath] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isCurrentPath = (path: string) => {
    return activePath === path ? styles.active : "";
  };

  const handleNavClick = (event: MouseEvent, targetId: string) => {
    detectScroll(event, targetId);
  };

  useEffect(() => {
    const sectionNames = ["home", "products", "about", "contact"];
    const sections = sectionNames.map((s) => document.getElementById(s));
    const heroSection = document.getElementById("home");

    const handleScroll = debounce(() => {
      sections.forEach((s, i) => {
        const offset = (s?.offsetTop as number) - 75;
        const height = s?.offsetHeight;
        const heroHeight = heroSection?.offsetHeight;

        if (!heroSection || !heroHeight || !height || !s) return;

        if (
          window.scrollY >= offset + (s.id === "home" ? 0 : heroHeight) &&
          window.scrollY <= offset + height + (s.id === "home" ? 0 : heroHeight)
        ) {
          setActivePath(s.id);
        }
      });
    }, 0);

    window.addEventListener("scroll", handleScroll);
  }, [activePath]);

  return (
    <div className={styles.headerContainer}>
      <Image
        src="assets/svg/main-logo.svg"
        alt="main-logo"
        width={257}
        height={78}
        onClick={(e) => handleNavClick(e, "home")}
        className={styles.logo}
      />
      <nav>
        <ul className={styles.routeList}>
          {routes.map((route) => (
            <li
              key={route.path}
              className={`${styles.route} ${isCurrentPath(
                route.path
              )} route-path`}
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
            ariaLabel="header-menu"
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

      <div className={styles.call}>
        <Button icon={<Call />} type="outlined-contrast">
          <Link target="_blank" href="tel:+3012890029">
            224 800 5302
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
