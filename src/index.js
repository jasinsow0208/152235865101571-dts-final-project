import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import HomePage from "./containers/HomePage";
import EditPage from "./containers/EditPage";
import DeletePage from "./containers/DeletePage";
import AddPage from "./containers/AddPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent loginOnly={true}>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="EditSelected/:id"
          element={
            <ProtectedComponent loginOnly={true}>
              <EditPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="DeleteSelected/:id"
          element={
            <ProtectedComponent loginOnly={true}>
              <DeletePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="Add"
          element={
            <ProtectedComponent loginOnly={true}>
              <AddPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="MoviePlayer"
          element={<ProtectedComponent loginOnly={true}></ProtectedComponent>}
        />
        <Route
          path="login"
          element={
            <ProtectedComponent loginOnly={false}>
              <LoginPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedComponent loginOnly={false}>
              <RegisterPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
