import React, { useState } from "react";
import { RegisHospital } from "../_contract/contract_functions";
import { useNavigate } from "react-router-dom";

function HospitalRegistrationForm() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalType: "",
    government: "",
    hospitalAddress: "",
    state: "",
    district: "",
    website: "",
    walletNumber: "",
  });

  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  const states = [
    { name: "State 1", districts: ["District 1", "District 2", "District 3"] },
    { name: "State 2", districts: ["District A", "District B", "District C"] },
    // Add more states and their districts as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "state") {
      const selectedState = states.find((state) => state.name === value);
      setDistricts(selectedState ? selectedState.districts : []);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    let res = await RegisHospital(
      window.ethereum,
      formData.hospitalName,
      formData.hospitalType,
      formData.hospitalAddress,
      formData.state,
      formData.district,
      formData.website
    );
    console.log(res);
    if (formData) {
      navigate(`/`);
    } else {
      console.error("User ID not found in localStorage.");
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Hospital Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hospitalName" className="block mb-2">
            Hospital Name:
          </label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalType" className="block mb-2">
            Hospital Type:
          </label>
          <select
            id="hospitalType"
            name="hospitalType"
            value={formData.hospitalType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          >
            <option value="">Select Type</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="government" className="block mb-2">
            Government:
          </label>
          <select
            id="government"
            name="government"
            value={formData.government}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          >
            <option value="">Select Government</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
            <option value="Local">Local</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalAddress" className="block mb-2">
            Hospital Address:
          </label>
          <textarea
            id="hospitalAddress"
            name="hospitalAddress"
            value={formData.hospitalAddress}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-2">
            State:
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="district" className="block mb-2">
            District:
          </label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="website" className="block mb-2">
            Website:
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HospitalRegistrationForm;
