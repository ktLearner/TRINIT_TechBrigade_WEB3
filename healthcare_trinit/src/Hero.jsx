import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  function checkUser(){
    return 6;
  }
  return (
    <section
      className={`relative w-full mx-auto pd-20`}
      style={{
        maxHeight: "calc(100vh - 40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        className={`top-[120px] sm:px-16 px-6 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ paddingTop: "20vh", paddingBottom: "20vh" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00FFFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}
          >
            Decentralized <span className="text-[#00FFFF]">HealthCare</span>{" "}
            Platform
          </h1>
          <p
            className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            Dive into the world of <br className="sm:block hidden" />
            BlockChain and Web3
          </p>
          <br />
          <br />
        </div>
      </div>

      {/* Added Buttons */}
      <div className="flex justify-center mb-8">
        <Link
          className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
          to="dashboard"
        >
          Patient
        </Link>
        <button className="bg-[#00FFFF] text-black py-2 px-9 rounded-full">
          Hospital
        </button>
      </div>
    </section>
  );
};

export default Hero;
