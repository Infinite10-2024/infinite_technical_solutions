import { Dispatch, MouseEvent, SetStateAction } from "react";
import { routes } from "../routes";
import styles from "./layout.module.css";
import Close from "../../../public/assets/icons/Close";
import Button from "../components/Button";

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
    <div>
      <div className={styles.mobileMenuCloseIcon}>
        <Button
          icon={<Close />}
          type="ghost"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <ul className={styles.mobileRouteList}>
        {routes.map((route) => (
          <li
            key={route.path}
            onClick={(e) => handleMobileClick(e, route.path)}
          >
            {route.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
