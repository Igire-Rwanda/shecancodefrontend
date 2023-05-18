import Image from "./images/logoscc.png";
import { Link } from "react-router-dom";
import "./nav.css";
let Index = () => {
  return (
    <div>
      <div class="all">
        <img src={Image} alt="scc-logo" />
        <ul class="navbar">
          <li>
            <Link to="/" class="active">
              Home
            </Link>
          </li>
          <li>
            <a href="#">
              About <i class="bx bx-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="/program">Program</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <div class="menu">
          <button class="btn">
            {" "}
            <a href="/apply">Apply</a>{" "}
          </button>
          <div class="bx bx-menu" id="menu-icon"></div>
        </div>
      </div>
    </div>
  );
};
export default Index;
