import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../component/About";
import Jobwatching from "../component/Jobwatching";
import MainHome from "../component/MainHome";
import Membership from "../component/Membership";


export default function Router() {
  return(
    <Routes>
      <Route path="" element={<MainHome />}></Route>  
      <Route path="/" element={<MainHome />}></Route>  
      <Route path="/Main" element={<MainHome />}></Route>  
      <Route path="/About" element={<About />}></Route>  
      <Route path="/Membership" element={<Membership />}></Route> 
      <Route path="/Jobwatching" element={<Jobwatching />}></Route> 
    </Routes>
  );
}
