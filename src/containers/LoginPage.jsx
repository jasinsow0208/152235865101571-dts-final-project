import React from "react";

import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import Footer from "../components/Footer";
function LoginPage() {
  return (
    <>
      <LoginOrRegisterForm loginOrRegister={"login"} />
      <Footer />
    </>
  );
}

export default LoginPage;
