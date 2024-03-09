import React, { useState, useEffect } from "react";
import UseWallet from "../../../wallet/wallet";
import { HosDetail } from "../../_contract/contract_functions";
import Navbar from "../Navbar/Navbar";

function HospitalProfile() {
  const [address, setAddress] = useState(
    localStorage.getItem("wallet_address")
  );
  let [wallet, login, logout] = UseWallet();
  const [profile, setprofile] = useState({
    hospitalName: "",
    hospitalType: "",
    hospitalAddress: "",
    state: "",
    district: "",
    website: "",
  });

  useEffect(() => {
    async function getData() {
      let res = await HosDetail(window.ethereum);
      setprofile({
        hospitalName: res[0],
        hospitalType: res[1],
        hospitalAddress: res[2],
        state: res[3],
        district: res[4],
        website: res[5],
      });
    }

    getData();
  }, []);

  useEffect(() => {
    console.log("Profile Updated:", profile);
  }, [profile]); // Log profile when it changes

  return (
    <div class = "bg-[#00FFFF]">

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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;hospitalName: <span className="text-yellow-300">{profile.hospitalName}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;hospitalType: <span className="text-yellow-300">{profile.hospitalType}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;hospitalAddress: <span className="text-yellow-300">{profile.hospitalAddress}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;state: <span className="text-yellow-300">{profile.state}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;district: <span className="text-yellow-300">{profile.district}</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span className="text-yellow-300"><a href={profile.website} target="_blank" class="text-yellow-300 hover:underline focus:border-none">{profile.website}</a></span>,</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>&#123;</p>
          </div>
        </div>
      </div>



    </div>

  );
}

export default HospitalProfile;
