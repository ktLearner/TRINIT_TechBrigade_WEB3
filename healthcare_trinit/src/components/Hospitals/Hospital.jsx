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
      <div className="px-8 py-6">
        <div className="text-center"> {/* Wrapping the paragraph in a div and applying text-center class */}
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>Hospital List</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Hospital"
        className="p-2 border rounded-md w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="flex items-center mr-5 justify-between ml-5 mb-4">
      <div></div> {/* Add an empty div to fill the space on the left */}
      <div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-5"
          onClick={shuffleHospitals}
        >
          Shuffle
        </button>
      </div>
    </div>
      <div className="container  mx-10 mt-8">

      <div className="px-8 py-6">
          <div className="grid grid-cols-2 gap-4">
            {filteredHospitals.map((hospital, index) => (
              <Link to={`/appointment/${encodeURIComponent(hospital)}`} key={index}>
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-self-end" // Added justify-self-end class to shift the button to the right
                >
                  {hospital}
                </button>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HospitalSelector;