import React from "react";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";

// Import fungsi untuk melakukan Logout
import { keluarDariApps } from "../authentication/firebase";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarDariApps();
    navigate("/login");
  };

  const buttonHomeOnClickHandler = () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    navigate("/");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar className={styles.bar}>
          <Button color="inherit" onClick={buttonHomeOnClickHandler}>
            Home
          </Button>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
