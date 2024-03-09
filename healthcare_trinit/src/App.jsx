import React ,{ useState, useEffect } from "react";
import Hero from './Hero';
import Navbar from "./components/Navbar/Navbar";
import { GetPatientId } from "./_contract/contract_functions";
import { HosDetail } from "./_contract/contract_functions";

const App = () => {
    useEffect(() => {
        async function getid(){
            let res = await HosDetail(window.ethereum);
            console.log(res);
        }

        getid();
    }, []);

  const [address, setAddress] = useState(
    localStorage.getItem("wallet_address")
  );
    return (
      <div>
        {/* Navbar */}
        <Navbar setAddress={setAddress}/>
        <Hero address={address}/>
      </div>
    );
};

export default App;
