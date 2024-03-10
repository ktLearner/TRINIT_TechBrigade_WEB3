import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import { createHWpRecord } from "../_contract/contract_functions";
import { GetPatientId } from "../_contract/contract_functions";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function DocDetails() {
  const [bp, setBp] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [id, setId] = useState(null);

  const navigate = useNavigate();
  const handleClicker = () => {
    navigate(`/viewReports/`);
  };

  useEffect(() => {
    async function getid() {
      let id = await GetPatientId(window.ethereum);
      setId(id);
    }
    getid();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createHWpRecord(window.ethereum, id, bp, weight, height);
    setBp("");
    setHeight("");
    setWeight("");
  };

  return (
    <>
      <Navbar />
      <div className="container flex justify-center mx-auto mt-8">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Update Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <label
                className="w-1/3 text-gray-500 font-bold pr-4"
                htmlFor="weight"
              >
                Weight :
              </label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-2/3 bg-gray-200 border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="weight"
                type="text"
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                className="w-1/3 text-gray-500 font-bold pr-4"
                htmlFor="height"
              >
                Height :
              </label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-2/3 bg-gray-200 border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="height"
                type="text"
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                className="w-1/3 text-gray-500 font-bold pr-4"
                htmlFor="bp"
              >
                B.P. :
              </label>
              <input
                id="bp"
                name="bp"
                type="text"
                value={bp}
                onChange={(e) => setBp(e.target.value)}
                className="w-2/3 bg-gray-200 border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="Submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <UploadForm />
          <button
            className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4"
            onClick={handleClicker}
          >
            View Reports
          </button>
        </div>
      </div>
    </>
  );
}

export default DocDetails;
