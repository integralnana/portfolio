import React from "react";
import "./Home.css"; // สร้างไฟล์ CSS สำหรับ Home
// import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row align-items-center">
        </div>
        <div className="col-md-12 text-center text-md-left">
          <h1>
            <span style={{ color: "#a24f74" }}>Hello.</span> I am{" "}
            <span style={{ color: "#64a3ca" }}>Nawaphol Srichuwong</span>
          </h1>
          <h2 class="underlined-text">Welcome to my Portfolio.</h2>
        </div>
      </div>

  );
};

export default Home;
