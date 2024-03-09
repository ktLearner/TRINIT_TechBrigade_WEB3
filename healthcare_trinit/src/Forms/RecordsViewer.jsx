import React from "react";

function RecordsViewer({ ipfsFiles }) {
  let ipfsFiles1 = [
    "QmbdKN3R2jGxvhzae4T6ngdnchXwTA1Jbds6jZmibmL9XU",
    "QmQzuo8Jg5VV3L1ZdKyj4pADQjf1dxg7tmZoFKCNCVqWja",
  ];

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
      {ipfsFiles1.map((ipfsCID, index) => (
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
          IPFS File {index + 1}
        </button>
      ))}
    </div>
  );
}

export default RecordsViewer;
