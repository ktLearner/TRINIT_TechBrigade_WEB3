import React, { useState, useEffect } from "react";
import UseWallet from "../../../wallet/wallet";
import { GetPatientProfile } from "../../_contract/contract_functions";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function PatientProfile() {
  const [address, setAddress] = useState(
    localStorage.getItem("wallet_address")
  );
  let [wallet, login, logout] = UseWallet();
  const [profile, setprofile] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    emailAddress: "",
    description: "",
    bp: "",
    height: "",
    weight: ""
  });

  useEffect(() => {
    async function getData() {
      let res = await GetPatientProfile(window.ethereum);
      setprofile({
        fullName: res[0],
        dob: res[2],
        gender: res[3],
        contactNumber: res[4],
        emailAddress: res[5],
        description: res[6],
        bp: res[7],
        height: res[8],
        weight: res[9]
      });
    }

    getData();
  }, []);

  useEffect(() => {
    console.log("Profile Updated:", profile);
  }, [profile]); // Log profile when it changes

  return (
    <div class="bg-[#00FFFF]">

      <Navbar setAddress={setAddress} />

      <div className=" min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
        <div className="rounded-lg shadow-xl bg-gray-900 text-white" style={{ width: '450px' }}>
          <div className="border-b border-gray-800 px-8 py-3">
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
          </div>
          <div className="px-8 py-6">
            <p><em className="text-blue-400">const</em> <span className="text-green-400">Profile</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>()&#123;</p>
            <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">{profile.fullName}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;dob: <span className="text-yellow-300">{profile.dob}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;gender: <span className="text-yellow-300">{profile.gender}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;contactNumber: <span className="text-yellow-300">{profile.contactNumber}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;description: <span className="text-yellow-300">{profile.description}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;emailAddress: <span className="text-yellow-300">{profile.emailAddress}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;bp: <span className="text-yellow-300">{profile.bp}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;height: <span className="text-yellow-300">{profile.height}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;weight: <span className="text-yellow-300">{profile.weight}</span>,</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>&#123;</p>
          </div>
        </div>
        <div class ="pl-20">
      <Link
        className="bg-gray-900  pl-4 py-2 px-9 rounded-full mr-4"
        to="/user_profile"
        >
        <span class="text-red-500">Register</span> <span class="text-yellow-300">as</span> <span class ="text-green-500">Hospital</span>   
      </Link>
        </div>
      </div>



    </div>

  );
}

export default PatientProfile;
