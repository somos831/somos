import React, { ReactNode } from "react";
import styles from "./Drawer.module.css";
import somosLogoWhite from "../../assets/somoLogo_white.png";
import { FaTimes } from "react-icons/fa";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

interface DrawerProps {
  children: ReactNode;
  handleDismiss: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, handleDismiss }) => {
  useEscapeKey(handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop}>
            <div className={styles.drawer}>
              <img className={styles.somosLogoWhite} src={somosLogoWhite} />

              <div>{children}</div>

              <button className={styles.dismissBtn} onClick={handleDismiss}>
                <FaTimes size={18} aria-hidden="true" focusable="false" />{" "}
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );

  function useEscapeKey(callback: () => void) {
    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.code === "Escape") {
          callback();
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [callback]);
  }
};

export default Drawer;
