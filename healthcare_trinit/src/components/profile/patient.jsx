import React, { useState, useEffect } from "react";
import UseWallet from "../../../wallet/wallet";
import { GetPatientProfile } from "../../_contract/contract_functions";

function PatientProfile() {
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
    <div>
      <h1>Profile</h1>
      {/* Render your profile data here */}
    </div>
  );
}

export default PatientProfile;
