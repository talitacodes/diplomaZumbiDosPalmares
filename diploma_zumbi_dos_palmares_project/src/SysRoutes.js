import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites"
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login"
import Search from "./components/Search/Search";

const SysRoutes = (props) => {
  const [status, setStatus] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home home={props.people} />} />
      <Route path="/Favorites" element={<Favorites favorites={props.favorites}/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Search" element={<Search />} />

    </Routes>
  )
}
export default SysRoutes;