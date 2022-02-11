import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "../component/MainHome";


export default function Router() {
  return(
    <Routes>
      <Route path="" element={<MainHome />}></Route>  
      <Route path="/" element={<MainHome />}></Route>  
      <Route path="/main" element={<MainHome />}></Route>  

    </Routes>
  );
}
