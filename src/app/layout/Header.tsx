"use client";

import { routes } from "@/app/routes";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";
import Button from "../components/Button";
import Cart from "../../../public/assets/icons/Cart";

const Header = () => {
  const isCurrentPath = (path: string) => {
    return usePathname() === path ? styles.active : "";
  };

  return (
    <div className={styles.headerContainer}>
      <Image
        src="assets/svg/main-logo.svg"
        alt="main-logo"
        width={203}
        height={62}
      />

      <ul className={styles.routeList}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path} className={isCurrentPath(route.path)}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button icon={<Cart />} type="outlined-contrast">
        Carrito
      </Button>
    </div>
  );
};

export default Header;
