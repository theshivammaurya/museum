import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Wallet from "../pages/Wallet";

const Routers = (props) => {

  const {mainObject} = props;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home mainObject={mainObject}/>} />
      <Route path="/market" element={<Market mainObject={mainObject}/>} />
      <Route path="/create" element={<Create mainObject={mainObject}/>} />
      <Route path="/wallet" element={<Wallet mainObject={mainObject}/>} />
    
    </Routes>
  );
};

export default Routers;
