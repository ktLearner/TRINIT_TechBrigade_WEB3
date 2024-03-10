import React from "react";
import ReactTyped from "react-typed";
import ParticlesComponent from "./partcles";
import { Link } from "react-router-dom";
import { IsPatientReg } from "./_contract/contract_functions";

const Hero = ({ address }) => {
  console.log(address);
  function userType(address) {
    if (IsPatientReg(address)) {
      return "patient";
      // return "hospital";
      // return "none";
    } else {
      // return "patient";
      // return "hospital";
      return "none";
    }
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
      <ParticlesComponent />
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
            <ReactTyped
              strings={[
                "BLOCKCHAIN",
                "DECENTRALIZATION",
                "TECHNOLOGY",
                "INNOVATION",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            ></ReactTyped>
          </p>
          <br />
          <br />
        </div>
      </div>

      {(address == null || address === "null") && (
        <>
          <div className="flex justify-center mb-8">
            <Link
              className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
              to="dashboard/hospital/"
            >
              View Hospitals
            </Link>
          </div>
        </>
      )}
      {address != null && address != "null" && (
        <div className="flex justify-center mb-8">
          {true && (
            <>
              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                to="/dashboard/hospital"
              >
                Book Appointment
              </Link>

              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                to="view-appointments"
              >
                View Appointments
              </Link>

              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                to="viewers"
              >
                Alter Viewers
              </Link>
            </>
          )}
          {true && (
            <>
              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full"
                to="/h_profile"
              >
                Hospital Details
              </Link>
            </>
          )}
          {true && (
            <>
              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                to="registerPatient"
              >
                Register as Patient
              </Link>

              <Link
                className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                to="registerHospital"
              >
                Register as Hospital
              </Link>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
