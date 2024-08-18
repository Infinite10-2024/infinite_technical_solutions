import { Dispatch, MouseEvent, SetStateAction } from "react";
import { routes } from "../routes";
import styles from "./layout.module.css";
import Close from "../../../public/assets/icons/Close";
import Button from "../components/Button";
import Call from "../../../public/assets/icons/Call";
import Link from "next/link";

interface MobileMenuProps {
  handleNavClick: (event: MouseEvent, targetId: string) => void;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ handleNavClick, setShowMenu }: MobileMenuProps) => {
  const handleMobileClick = (event: MouseEvent, targetId: string) => {
    handleNavClick(event, targetId);
    setShowMenu(false);
  };

  return (
    <div className={styles.mobileMenuInnerContainer}>
      <div className={styles.mobileMenuCloseIcon}>
        <Button
          icon={<Close />}
          type="ghost"
          onClick={() => setShowMenu(false)}
          ariaLabel="Menu Button"
        />
      </div>
      <ul className={styles.mobileRouteList}>
        {routes.map((route) => (
          <li key={route.path}>
            <button onClick={(e) => handleMobileClick(e, route.path)}>
              {route.label}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.mobileCall}>
        <Button icon={<Call />} type="ghost">
          <Link target="_blank" href="tel:+3012890029">
            224 800 5302
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
