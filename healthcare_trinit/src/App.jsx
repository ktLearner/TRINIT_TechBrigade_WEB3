import React ,{ useState, useEffect } from "react";
import Hero from './Hero';
import Navbar from "./components/Navbar/Navbar.jsx"; // Import the Navbar component

const App = () => {
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
