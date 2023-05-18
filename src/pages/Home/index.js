import React from "react";
import Head from "../../components/Header/index";
import Deeds from "../../components/section/WhatWeDo/index";
import Program from "../../components/section/alumni/Program/program";
import Footer from "../../components/Footer/index";
import Alumni from "../../components/section/alumni/index";

const Final = () => {
  return (
    <>
      <Head />
      <Alumni />
      <Deeds />
      <Program />
      <Footer />
    </>
  );
};

export default Final;
