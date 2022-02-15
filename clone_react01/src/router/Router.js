import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../component/About";
import MainHome from "../component/MainHome";


export default function Router() {
  return(
    <Routes>
      <Route path="" element={<MainHome />}></Route>  
      <Route path="/" element={<MainHome />}></Route>  
      <Route path="/main" element={<MainHome />}></Route>  
      <Route path="/about" element={<About />}></Route>  

    </Routes>
  );
}
