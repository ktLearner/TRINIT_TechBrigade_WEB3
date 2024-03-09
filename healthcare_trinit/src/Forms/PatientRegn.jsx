import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import UseWallet from "../../wallet/wallet";
import { CreatePatientProfile } from "../_contract/contract_functions";

function PatientRegistrationForm() {
  let [wallet, login, logout] = UseWallet();
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    emailAddress: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    // You can perform form validation or submit the data to an API here
    let res = await CreatePatientProfile(wallet, formData.fullName, formData.dob, formData.gender, formData.contactNumber, formData.emailAddress, formData.description, window.ethereum);
    console.log(formData);
    if (formData) {
      navigate(`/dashboard/hospital/${wallet}`);
    } else {
      console.error("User ID not found in localStorage.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-gray-800 x`">
      <h2 className="text-2xl font-bold mb-4">Patient Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block mb-2">
            Contact Number:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
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

export default PatientRegistrationForm;
