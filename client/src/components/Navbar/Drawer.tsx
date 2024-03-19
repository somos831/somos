import React from "react";
import styles from "./Drawer.module.css";

export default function Drawer({ children, handleDismiss }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.backdrop}>
          <div className={styles.drawer}>
            <div>{children}</div>
            <button className={styles.dismissBtn} onClick={handleDismiss}>
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
