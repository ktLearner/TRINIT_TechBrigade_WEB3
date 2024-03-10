// HospitalSelector.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AllHos, HosName } from '../../_contract/contract_functions';
import Navbar from '../Navbar/Navbar';

const HospitalSelector = () => {
  const [ids, setIds] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    async function getHospitals() {
      try {
        // Fetch hospital IDs
        let resIds = await AllHos(window.ethereum);
        setIds(resIds);

        // Fetch hospital names based on IDs
        const promises = resIds.map(async (id) => {
          const name = await HosName(window.ethereum, id);
          return [id, name[0]];
        });

        const hospitalsWithNames = await Promise.all(promises);
        setHospitalList(hospitalsWithNames);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    }

    getHospitals();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredHospitals = hospitalList.filter(([id, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shuffleHospitals = () => {
    const shuffledList = [...hospitalList].sort(() => Math.random() - 0.5);
    setHospitalList(shuffledList);
  };

  return (
    <>
    <Navbar />
      <div className="container mx-auto mt-8">
        <div className="px-8 py-6">
          <div className="text-center">
            {" "}
            {/* Wrapping the paragraph in a div and applying text-center class */}
            <p
              className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
            >
              Hospital List
            </p>
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
              {filteredHospitals.map(([hospitalId, hospitalName], index) => (
                <Link to={`/appointment/${hospitalId}`} key={index}>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-self-end">
                    {hospitalName}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalSelector;
