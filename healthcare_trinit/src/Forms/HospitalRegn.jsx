import React, { useState } from 'react';
import { RegisHospital } from '../_contract/contract_functions';

function HospitalRegistrationForm() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalType: '',
    government: '',
    hospitalAddress: '',
    state: '',
    district: '',
    website: '',
    walletNumber: ''
  });

  const [districts, setDistricts] = useState([]);

  const states = [
    { name: 'State 1', districts: ['District 1', 'District 2', 'District 3'] },
    { name: 'State 2', districts: ['District A', 'District B', 'District C'] },
    // Add more states and their districts as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'state') {
      const selectedState = states.find(state => state.name === value);
      setDistricts(selectedState ? selectedState.districts : []);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    let res = await RegisHospital(window.ethereum, formData.hospitalName, formData.hospitalType, formData.hospitalAddress, formData.state, formData.district, formData.website);
    console.log(res);
  }

  return (
    <div>
      <h2>Hospital Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hospitalName">Hospital Name:</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="hospitalType">Hospital Type:</label>
          <select
            id="hospitalType"
            name="hospitalType"
            value={formData.hospitalType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div>
          <label htmlFor="government">Government:</label>
          <select
            id="government"
            name="government"
            value={formData.government}
            onChange={handleChange}
            required
          >
            <option value="">Select Government</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
            <option value="Local">Local</option>
          </select>
        </div>
        <div>
          <label htmlFor="hospitalAddress">Hospital Address:</label>
          <textarea
            id="hospitalAddress"
            name="hospitalAddress"
            value={formData.hospitalAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state.name} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select District</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="walletNumber">Wallet Number:</label>
          <input
            type="text"
            id="walletNumber"
            name="walletNumber"
            value={formData.walletNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HospitalRegistrationForm;
