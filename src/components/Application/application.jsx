import React from 'react';
import Typed from 'react-typed';
import Index from '../Header/index';
import './application.css';
import Button from '../Button';
import Footer from '../Footers/footer';
import { Link } from 'react-router-dom';
const Application = () => {
  const sentences = [
    'Application is open for SheCanCode Cohort 9 Bootcamp',
    'Join us and learn valuable coding skills',
    'Become a part of an inclusive and supportive community',
    'Unlock your potential with SheCanCode',
  ];
  const sentences1 = [
    'We choose perfect course for you!!',
    'Unlock the best-fit course that suits your goals!',
    'Explore handpicked courses that match your needs!',
  ];

  return (
    <div>
      <Index />
      <div className="application-container">
        <div>
          <h1 className="application-title">
            <Typed strings={sentences} typeSpeed={50} backSpeed={40} loop />
          </h1>
        </div>
        <div className="application-upper">
          <div className="application-upper-content">
            <h1>Learning made Easy</h1>
            <Button btnTitle={'Get started'} />
          </div>
        </div>

        <div className="appliction-middle">
          <div className="middle-1">
            <div className="middle-1-content">
              <div className="middle-1-left">
                <h2>Learn</h2>
              </div>
              <div className="middle-1-right">
                <h3>Rearning Mantality</h3>
                <p>
                  Each session of the training will be intense and you must have
                  a learning and open mindset.
                </p>
              </div>
            </div>
            <div className="middle-1-content">
              <div className="middle-1-left">
                <h2>Time</h2>
              </div>
              <div className="middle-1-right">
                <h3>Time commitment</h3>
                <p>
                  Each session of the training will be intense and you must have
                  a learning and open mindset.
                </p>
              </div>
            </div>
          </div>
          <div className="middle-1">
            <div className="middle-1-content">
              <div className="middle-1-left">
                <h2>Solve</h2>
              </div>
              <div className="middle-1-right">
                <h3>Problem solving skills</h3>
                <p>
                  software development involves breaking down complex problems
                  into smaller, more manageable tasks..
                </p>
              </div>
            </div>
            <div className="middle-1-content">
              <div className="middle-1-left">
                <h2>Think</h2>
              </div>
              <div className="middle-1-right">
                <h3>Logic and Problem Solving</h3>
                <p>
                  Master logical thinking and apply logical reasoning to solve
                  challenges in software development
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="application-lower-content">
          <div className="middle-2">
            <h1>
              <Typed
                strings={sentences1}
                typeSpeed={80}
                backSpeed={0}
                startDelay={300}
                smartBackspace
                loop
              />
            </h1>
          </div>
          <p>
            Our training workshop will give you the know-how to get started,
            boost your Employability, Entrepreneurship & Leadership skills and
            productivity by learning to code, hosting your websites, & designing
            apps.
          </p>

          <div className="application-lower-content-element">
            <div className="application-lower-content-left">
              <div className="flyer">
                {' '}
                <h1>Flyer to be here</h1>
              </div>
            </div>
            <div className="application-lower-content-middle"></div>
            <div className="application-lower-content-right">
              <h2>Shecancode Website development</h2>
              <p style={{ paddingLeft: '100px' }}>
                10th.July.2023_10th.October.2023
              </p>
              <div className="application-courses">
                <h4>HTML </h4>
                <div className="vl"></div>
                <h4>CSS </h4>
                <div className="vl"></div>
                <h4>FIGMA </h4>
                <div className="vl"></div>
                <h4>GITHUB</h4>
                <div className="vl"></div>
                <h4>JAVASCRIPT </h4>
                <div className="vl"></div>
                <h4>REACT JS </h4>
                <div className="vl"></div>
                <h4>NODE JS </h4>
                <div className="vl"></div>
                <h4>DEPLOYMENT </h4>
              </div>
              <Link to="/apply">
                <Button btnTitle={'Apply Now'} />
              </Link>
            </div>
          </div>
          <hr style={{ width: '80%', margin: 'auto' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Application;
