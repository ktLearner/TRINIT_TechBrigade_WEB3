import React, { useEffect, useState } from "react";
import { GetHashes, GetPatientId } from "../_contract/contract_functions";
import Navbar from "../components/Navbar/Navbar";

function RecordsViewer() {
  const [hashes, setHashes] = useState([]);

  useEffect(() => {
    let id = null;

    async function fetchData() {
      try {
        id = await GetPatientId(window.ethereum);
        const data = await GetHashes(window.ethereum, id);
        setHashes(data);
      } catch (error) {
        console.error("Error fetching hashes:", error);
      }
    }

    fetchData();
  }, []);

  const openIPFSFile = (ipfsCID) => {
    window.open(`http://gateway.pinata.cloud/ipfs/${ipfsCID}`, "_blank");
  };

  return (
    <div
      style={{
        // backgroundColor: "#ffffff",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Navbar />
      {hashes.map((ipfsCID, index) => (
        <button
          key={index}
          className="ipfs-file"
          onClick={() => openIPFSFile(ipfsCID)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Report {index + 1}
        </button>
      ))}
    </div>
  );
}

export default RecordsViewer;
