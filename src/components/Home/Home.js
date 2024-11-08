import React from "react";
import "./Home.css";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="content-wrapper">
        <div className="text-content">
          <div className="greeting-text">
            <TypeAnimation
              sequence={[
                'Hello.', 2000,
                'สวัสดี.', 2000,
              ]}
              repeat={Infinity}
              className="animated-greeting"
            />
          </div>
          
          <h1 className="name-title">
            I am <span className="highlight">Nawaphol Srichuwong</span>
          </h1>
          
          <div className="role-text">
            <TypeAnimation
              sequence={[
                'Frontend Developer 💻', 2000,
                
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="bio-text">
            Welcome to my Portfolio, Please enjoy my represent!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;