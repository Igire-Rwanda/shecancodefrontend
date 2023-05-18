import React from "react";
import { Routes, Switch, Route } from "react-router-dom";
import Home from "../components/Header/index";
import Apply from "../components/Header/index";
// import Header from "../components/Header/index";
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" component={Apply} />
        {/* <Route path="/apply" component={Apply} /> */}
      </Routes>
    </>
  );
};
export default Index;
