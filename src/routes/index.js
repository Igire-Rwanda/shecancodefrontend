import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Apply from "../pages/Application-page/index";
// import Footer from "../components/Footer/index";
// import Alumni from "../components/section/alumni/index";
// import Program from "../components/section/alumni/Program/program";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
      {/* <Route path="/footer" element={<Footer />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/program" element={<Program />} /> */}
    </Routes>
  );
};

export default Index;
