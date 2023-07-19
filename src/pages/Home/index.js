import "./Home.css";
import Bar from "../../components/Nav/index";
import Explore from "../../components/explore-course/course";
import Header from "../../components/Header/index";
import Alumni from "../../components/alumnisection/index";
import FirstHome from "../../components/firsthomesection/firstsection";
import Program from "../../components/Program/program";
// import Footer from "../Footer/Footer";
import Footer from "../../components/Footers/footer";
import Heading from "./headding";
import Offers from "./offers";
import Parteners from "../../components/parteners";

let Home = () => {
  return (
    <div>
      <Bar />
      <Header />
      <Heading />
      <Offers />
      {/* <Parteners /> */}
      {/* <Index /> */}
      {/* */}
      {/* <Alumni /> */}
      {/* <Footer /> */}
      {/* 
     <Explore />
      <Program />
     
       */}
    </div>
  );
};

export default Home;
