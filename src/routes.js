import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import Description from "./pages/Description/Description";
import Favoritos from "./pages/Favoritos/Favoritos";
import Profile from "./pages/Profile/Profile";
import Payment from "./pages/Payment/Payment";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/description" element={<Description />}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </Router>
  );
}
