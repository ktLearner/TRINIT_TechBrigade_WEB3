import React from "react";
import { useNavigate } from "react-router-dom";
import HospitalRegistrationForm from "../../Forms/HospitalRegn";
import UseWallet from "../../../wallet/wallet";
import Navbar from "./../../components/Navbar/Navbar.jsx"; // Import the Navbar component


export default function Home() {
  const [wallet, userId, login] = UseWallet();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Assuming you have a userId stored in localStorage
    if (userId) {
      navigate(`/hospital-dashboard/${wallet}`);
    } else {
      console.error("User ID not found in localStorage.");
    }
  };

  return (
    <main>
        <div>
          <Navbar></Navbar>
          <div>
            {wallet == null ? (
              <>
                <div
                  className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                  onClick={login}
                >
                  Login To Metamask
                </div>
              </>
            ) : (
              <>
                <HospitalRegistrationForm />
                <button
                  className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
              </>
            )}
          </div>
        </div>
    </main>
  );
}