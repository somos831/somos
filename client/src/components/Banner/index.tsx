//TODO: Lines below remove typescript error, remove once types are implemented
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";

import styles from "./Banner.module.css";

import useResponsive from "../../hooks/useResponsive";

interface BannerProps {
  title: string;
  background: string;
  body?: string;
  height?: number;
  justifyContent?: string;
  alignItems?: string;
  py?: number;
  variation?: string;
  decoration?: boolean;
  tabletHeight?: number;
  mobileHeight?: number;
}

const Banner: React.FC<BannerProps> = ({
  title,
  background,
  body = "",
  height = 300,
  tabletHeight = -1,
  mobileHeight = -1,
  justifyContent = "center",
  alignItems = "center",
  py = "",
  variation = "",
  decoration = false,
}) => {
  const { isTablet, isMobile } = useResponsive();

  const containerHeight = React.useMemo(() => {
    if (mobileHeight > 0 && isMobile) return mobileHeight;
    else if (tabletHeight > 0 && isTablet) return tabletHeight;

    return height;
  }, [isTablet, isMobile, height, mobileHeight, tabletHeight]);

  const containerBackStyle = {
    backgroundImage: `url(${background})`,
  };

  const containerStyle = {
    minHeight: `${containerHeight}px`,
  };

  const textContainerStyle = {
    justifyContent,
    alignItems,
    ...(py !== "" && {
      paddingTop: `${py}rem`,
      paddingBottom: `${py}rem`,
    }),
  };

  const headerTextStyle = {
    color: "white",
    ...(variation == "" && {
      fontWeight: 800,
      fontSize: `3.75rem`,
      textAlign: "center",
      textTransform: "uppercase",
    }),
    ...(variation == "header1" && {
      fontWeight: 800,
      fontSize: `2.5rem`,
      letterSpacing: "1px",
      textTransform: "capitalize",
      textShadow: `2px 2px 2px black`,
    }),
  };

  const bodyTextStyle = {
    color: "white",
    fontFamily: '"Poppins", sans-serif',
    textShadow: `1px 1px 2px black`,
    fontWeight: 300,
    fontSize: "1.5rem",
  };

  return (
    <div>
      <div className={styles.container} style={containerStyle}>
        <div className={styles.textContainer} style={textContainerStyle}>
          <h2 style={headerTextStyle}>{title}</h2>
          {body !== "" && <p style={bodyTextStyle}>{body}</p>}
        </div>
        <div
          style={containerBackStyle}
          className={styles.backgroundContainer}
        ></div>
      </div>
      {decoration && <p className={styles.backDecoration}></p>}
    </div>
  );
};

export default Banner;

