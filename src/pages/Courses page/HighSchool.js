import React, { useEffect } from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./mobileApp.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const HighSchool = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='w-full flex flex-col justify-start'>
      <Nav />
      <Header />
      <div className="w-full flex flex-col justify-center items-center mb-10">
        {/* Banner  */}
        <div className='softwareeng-parts-container flex w-full justify-between items-center'>
          <div className='mobileApp-part1 flex flex-col w-11/12 md:w-10/12 m-auto justify-around'>
            <h1 className='para1'>Summer Coding Camp</h1>
            <p className='w-full sm:w-2/3 md:w-1/2'>
              Empowering the next generation of tech leaders, The SheCanCODE Summer Camp is back!
              <br />
              Now we are welcoming both <strong>boys</strong> and <strong>girls</strong>.
            </p>
            
            <a href='https://forms.office.com/r/ixyZS72QVS' className='bg-orange-400 border-l-4 py-2 px-4 mt-3 text-white mb-3 w-full md:w-fit'>
              <span className='font-bold'>Cost:</span> 
              <br/>Program fee: 200,000 Rwf
              <br/>Scholarship: <strong><em>100,000 Rwf (For those who are eligible)</em></strong>  
            </a>
            <a href='https://forms.office.com/r/ixyZS72QVS' className='mob-btn mb-12 w-fit'>Apply Now</a>
          </div>
        </div>

        {/* Call to action  */}
        <div className='flex flex-col w-11/12 md:w-10/12 m-auto justify-around bg-white pt-10 md:pt-24 pb-5 md:pb-12'>
          <h1 className='text-xl md:text-3xl text-left p-0 mb-9'>Hands on Practice building User-Friendly and interactive websites.</h1>
          <p className='text-base'>This camp/program is designed to equip high school students with the coding skills and confidence they need to advance and perform better while preparing themselves for the tech industry. <br/> Don't let this opportunity slide.</p>

          <h1 className='text-xl md:text-2xl text-left p-0 mt-5 mb-3'>Get more information</h1>
          <p className='text-base mb-4'>Click on the image bellow to download a 2 page flyer for more information including the payment process.</p>
          <Link to='/images/SheCanCODE-Summer-Code-Camp.pdf' className='w-full md:w-1/4' target='_blank' download>
            <img src='/images/1721462137293.jpeg' alt='' className='w-full'/>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HighSchool
