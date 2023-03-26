import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Start from "./pages/Start";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";

import { useUserContext } from "./context/UserContext";
export let theme;

const App = () => {
  const { newtheme, setnewtheme, updateonlineindb, deletestory } =
    useUserContext();
  theme = newtheme;
  let interval = null;

  useEffect(() => {
    setnewtheme();
  }, []);

  const InternetErrMessagenger = () => {
    if (navigator.onLine === true) {
      updateonlineindb("online 🟢");
    } else {
      updateonlineindb("offline 🔴");
    }
  };

  useEffect(() => {
    window.addEventListener("unload", () => {
      updateonlineindb("offline 🔴");
    });
    interval = setInterval(InternetErrMessagenger, 6000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("unload", () => {});
    };
  }, []);

  useEffect(() => {
    deletestory();
    const interval = setInterval(() => {
      deletestory();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="cont">
      <div className="innercon">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Start />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/chat" element={<Chat />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
