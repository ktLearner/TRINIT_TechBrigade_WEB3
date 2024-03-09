import React, { useState } from 'react';
import UploadForm from './UploadForm'; 

function doc_details() {

    const [bp, setbp] = useState('');
    const [weight, setweight] = useState('');
    const [height, setheight] = useState('');
    const [medicine, setMedicine] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform any action with the form data, such as sending it to a server
        console.log('Form submitted:', { bp, weight, height, medicine });
        // Clear the form fields after submission
        setbp('');
        setheight('');
        setMedicine('');
    };
    return (
        <div class="container mx-auto mt-8">
                <h2 class="text-2xl ml-7 font-bold mb-4">Update Details</h2>

        <div>
            <form class="w-full max-w-lg" onSubmit={handleSubmit}>
    
                <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            weight
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input
                            value={weight} onChange={(e) => setweight(e.target.value)}
                            class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4" id="inline-full-name" type="text" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            height
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input
                            value={height} onChange={(e) => setheight(e.target.value)}
                            class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4" id="inline-full-name" type="text" />
                    </div>
                </div>
    
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            bp
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input
                            id="dob"
                            name="dob"
                            type='text'
                            value={bp} onChange={(e) => setbp(e.target.value)}
                            class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4"   />
                    </div>
                </div>
               
                

                <UploadForm />

                
                
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
    </div>
    
    )
}

export default doc_details;