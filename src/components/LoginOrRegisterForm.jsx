import React, { useState, useEffect } from "react";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import styles from "./LoginOrRegisterForm.module.css";
import backgroundImage from "./AssetManagement.jpg";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");

    // Kita di sini tidak menggunakan navigate ke login lagi,
    // karena pada firebase, ketika selesai login,
    // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
    loginDenganEmailDanPassword(credential.email, credential.password);
    setCredential({
      email: "",
      password: "",
    });
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");

    // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
    // Ketika selesai register akan otomatis login juga
    // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  // Lalu sekarang bagaimana kita track orang yang sedang login, dan apabila ada yang login
  // kita pindahkan ke halaman utama?

  // Kita gunakan.... useEffect !
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate.navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <div>
      <img src={backgroundImage} alt="asset" className={styles.image}></img>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-end"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <Box className={styles.boxy} component="form" noValidate>
          <Typography variant="h5">
            {loginOrRegister === "login" ? "Login" : "Register"}
          </Typography>

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            sx={{
              label: {
                color: "white",
              },
              input: { color: "white" },
            }}
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />

          <TextField
            label="password"
            type="Password"
            variant="outlined"
            size="small"
            sx={{
              label: {
                color: "white",
              },
              input: { color: "white" },
            }}
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />

          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </Button>

          {loginOrRegister === "login" ? (
            <Link to="/register">
              <Typography variant="body1" sx={{ color: "white" }}>
                or do you want Register ?
              </Typography>
            </Link>
          ) : (
            <Link to="/login">
              <Typography variant="body1" sx={{ color: "white" }}>
                or do you want Login ?
              </Typography>
            </Link>
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default LoginOrRegisterForm;
