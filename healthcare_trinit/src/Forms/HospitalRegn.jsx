import React, { useState } from 'react';

function HospitalRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    foundedYear: '',
    address: '',
    doctorName: '',
    doctorSpecialization: '',
    walletAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or submit the data to an API here
    console.log(formData);
  };

  return (
    <div>
      <h2>Hospital Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Hospital Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="foundedYear">Founded Year:</label>
          <input
            type="number"
            id="foundedYear"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="doctorName">Doctor's Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="doctorSpecialization">Doctor's Specialization:</label>
          <input
            type="text"
            id="doctorSpecialization"
            name="doctorSpecialization"
            value={formData.doctorSpecialization}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={formData.walletAddress}
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
