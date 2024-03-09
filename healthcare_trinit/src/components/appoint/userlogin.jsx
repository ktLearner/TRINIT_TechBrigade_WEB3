import React from "react";
import { useNavigate } from "react-router-dom";
import PatientRegistrationForm from "../../Forms/PatientRegn";
import UseWallet from "../../../wallet/wallet";
import Navbar from "./../../components/Navbar/Navbar.jsx"; // Import the Navbar component


export default function Home() {
  const [wallet, userId, login, logout] = UseWallet();
  const navigate = useNavigate();
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
                <PatientRegistrationForm />
              </>
            )}
          </div>
        </div>
    </main>
  );
}