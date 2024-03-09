import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx"; // Import the Navbar component

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto pd-20`}>
      {/* Navbar */}
      <Navbar />

      <div
        className={`absolute inset-0 top-[120px] sm:px-16 px-6 max-w-7xl mx-auto $ flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00FFFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={` font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}
          >
            Decentralized <span className="text-[#00FFFF]"> HealthCare </span>{" "}
            Platform
          </h1>
          <p
            className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            Dive into the world of <br className="sm:block hidden" />
            BlockChain and Web3
          </p>
          <br></br>
          <br></br>
        </div>
      </div>

      {/* Added Buttons */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
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
