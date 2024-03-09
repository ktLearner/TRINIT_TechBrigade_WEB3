// HospitalSelector.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const HospitalSelector = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalList, setHospitalList] = useState([
    'Mercy General Hospital',
    'Unity Medical Center',
    'Serenity Health Clinic',
    'Prestige Healthcare',
    'Harmony Community Hospital',
    'Hope Springs Medical Center',
    'Graceful Healing Institute',
    'Tranquil Wellness Hospital',
    'Prosperity Medical Group',
    'Radiant Life Clinic',
    'Wellness Junction Hospital',
    'Calm Harbor Healthcare',
    'Elevate Medical Solutions',
    'Benevolent Health Center',
    'Sunny Meadows Hospital',
    'Healing Haven Clinic',
    'Trinity Medical Center',
    'Harborview Wellness Hub',
    'Majestic Care Hospital',
    'Golden Gate Medical Group',
    'Eternal Health Clinic',
    'Riverside Community Hospital',
    'Elysium Medical Center',
    'Caring Touch Healthcare',
    'Serene Springs Clinic',
    'Regal Health Institute',
    'Uplift Wellness Hospital',
    'Evergreen Care Center',
    'Grandview Medical Plaza',
  ]);


  const filteredHospitals = hospitalList.filter((hospital) =>
  hospital.toLowerCase().includes(searchTerm.toLowerCase())
);

const shuffleHospitals = () => {
  const shuffledList = [...hospitalList].sort(() => Math.random() - 0.5);
  setHospitalList(shuffledList);
};

return (
  <div className="container mx-auto mt-8">
    <input
      type="text"
      placeholder="Search Hospital"
      className="p-2 border rounded-md w-full mb-4"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <div className="flex items-center justify-between mb-4">
      <p className="text-lg font-bold">Hospital List</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={shuffleHospitals}
      >
        Shuffle
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {filteredHospitals.map((hospital, index) => (
        <Link to={`/appointment/${encodeURIComponent(hospital)}`} key={index}>
          <button
            className={classNames(
              'p-4 border rounded-md hover:bg-black-100 focus:outline-none',
              'bg-blue-500 text-white' 
            )}
          >
            {hospital}
          </button>
        </Link>
      ))}
    </div>
  </div>
);
};

export default HospitalSelector;