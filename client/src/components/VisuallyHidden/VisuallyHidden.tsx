import React, { ReactNode } from "react";
import styles from "./VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  children: ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  ...delegated
}) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV != false) {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span className={styles.hiddenStyles} {...delegated}>
      {children}
    </span>
  );
};
export default VisuallyHidden;
