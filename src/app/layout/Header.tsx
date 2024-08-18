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

const Header = () => {
  const [activePath, setActivePath] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isCurrentPath = (path: string) => {
    return activePath === path ? styles.active : "";
  };

  const handleNavClick = (event: MouseEvent, targetId: string) => {
    detectScroll(event, targetId);
  };

  const sectionNames = ["home", "products", "about", "contact"];
  const sections = sectionNames.map((s) => document.getElementById(s));
  const heroSection = document.getElementById("home");

  useEffect(() => {
    if (window.innerWidth < 1120) return;

    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
  }, [activePath, heroSection, sections]);

  return (
    <div className={styles.headerContainer}>
      <Image
        src="assets/svg/main-logo.svg"
        alt="main-logo"
        width={257}
        height={78}
        onClick={(e) => handleNavClick(e, "home")}
        className={styles.logo}
        priority={true}
      />
      <nav>
        <ul className={styles.routeList}>
          {routes.map((route) => (
            <li
              key={route.path}
              className={`${styles.route} ${isCurrentPath(
                route.path
              )} route-path`}
            >
              <Button
                onClick={(e) => handleNavClick(e, route.path)}
                type="ghost"
              >
                {route.label}
              </Button>
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
        <Link target="_blank" href="tel:+3012890029">
          <Button icon={<Call />} type="outlined-contrast">
            224 800 5302
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
