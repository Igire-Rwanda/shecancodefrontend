 
// import Header from './components/Header/index';
// import Nav from './components/Nav';
// function App() {
//   return (
//     <div className="App">
//   <Nav/>
//   <Header/>
//     </div>
 
// import Course from "./components/section/alumni/explore-course/course"

// function App() {
//   return (
//     <div className="App">
//       <Course/>
//     </div>

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
function App() {
  return (
    <>
      <Router>
        <Routes></Routes>
      </Router>
    </>

 
  );
}
export default App;
