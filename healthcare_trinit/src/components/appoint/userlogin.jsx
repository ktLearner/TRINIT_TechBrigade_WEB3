// Home.js

import React from "react";
import { useNavigate } from "react-router-dom";
import PatientRegistrationForm from "../../Forms/PatientRegn";
import UseWallet from "../../../wallet/wallet";


export default function Home() {
  const [wallet, userId, login, logout] = UseWallet();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Assuming you have a userId stored in localStorage
    if (userId) {
      navigate(`/dashboard/hospital/${wallet}`);
    } else {
      console.error("User ID not found in localStorage.");
    }
  };

  return (
    <main>
      <div>
        <h2>Tracking Expenses. &nbsp; Empowering Organizations.</h2>
        <div>
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
                <PatientRegistrationForm />
                <button
                  className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
                <button
                  className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
