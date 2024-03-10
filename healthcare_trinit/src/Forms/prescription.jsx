import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CreatePrescription } from '../_contract/contract_functions';


function Prescription() {
    const { id } = useParams();

    const [follow, setFollow] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [advice, setAdvice] = useState('');
    const [medicine, setMedicine] = useState('');


    async function handleSubmit(event){
        event.preventDefault();

        await CreatePrescription(window.ethereum, id, medicine, diagnosis, advice, follow);
        // Here you can perform any action with the form data, such as sending it to a server
        console.log('Form submitted:', { follow, diagnosis, advice, medicine });

        // Clear the form fields after submission
        setFollow('');
        setAdvice('');
        setMedicine('');
    }
    return (

        <>
            <div>

                <form class="w-full max-w-lg" onSubmit={handleSubmit}>


                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name" >
                                Medicine
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea
                                value={medicine} onChange={(e) => setMedicine(e.target.value)}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div>

                        </div>
                    </div>



                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Diagnosis
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Advice
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea
                                value={advice} onChange={(e) => setAdvice(e.target.value)}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div>

                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Follow-up Date
                            </label>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                            <input
                                id="dob"
                                name="dob"
                                type='date'
                                value={follow} onChange={(e) => setFollow(e.target.value)}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                 />
                        </div>


                    </div>


                    <div class="md:flex md:items-center">
                        <div class="md:w-2/4"></div>
                        <div class="">
                            <button
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="Submit">
                                Submit
                            </button>
                        </div>
                    </div>

                </form>


            </div>



        </>
    )
}

export default Prescription;
