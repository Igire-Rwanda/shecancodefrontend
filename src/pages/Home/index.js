import Header from '../../components/Header/index';
import First from '../../components/section/alumni/firsthomesection/firstsection'
import Second from  '../../components/section/alumni/alumnisection/index'
// import Third from '../../components/section/WhatWeDo/index'
import Fourth from '../../components/section/alumni/Program/program'
import Footer from '../../components/Footer/index'
let Home = () =>{
return(
<>
<Header />
<First/>
<Second/>
{/* <Third/> */}
<Fourth/>
<Footer/>
</>
);
}

export default Home;
