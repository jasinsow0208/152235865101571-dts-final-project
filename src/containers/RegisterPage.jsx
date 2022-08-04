import React from "react";

import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import Footer from "../components/Footer";

const RegisterPage = () => {
  return (
    <>
      <LoginOrRegisterForm loginOrRegister={"register"} />
      <Footer />
    </>
  );
};

export default RegisterPage;
