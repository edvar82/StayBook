import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/Register";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Description from "./pages/Description/Description";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/description" element={<Description />}></Route>
      </Routes>
    </Router>
  );
}
