import React from "react";
import styles from "./Footer.module.css";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.left}>
        <Typography variant="h6">Digital Talent Scholarship</Typography>
      </span>
      <span className={styles.right}>
        <Typography variant="body1">
          Jasin Sowandi (152235865101-571) &copy; 2022
        </Typography>
      </span>
    </div>
  );
};

export default Footer;
