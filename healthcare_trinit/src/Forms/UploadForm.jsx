import React, { useState } from 'react';
import axios from 'axios';
import { createReport } from "../_contract/contract_functions";

// Hardcode Pinata API key and secret (not recommended for production)
// const PINATA_API_KEY = process.env.REACT_APP_PINATA_API_KEY;
// const PINATA_API_SECRET = process.env.REACT_APP_PINATA_API_SECRET;

const PINATA_API_KEY  = import.meta.env.VITE_PINATA_API_KEY;
const PINATA_API_SECRET= import.meta.env.VITE_PINATA_API_SECRET;


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadedCID, setUploadedCID] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        try {
            if (!file) {
                console.error('No file selected.');
                return;
            }

            const formData = new FormData();
            formData.append("file", file);

            const response = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': PINATA_API_KEY,
                    'pinata_secret_api_key': PINATA_API_SECRET,
                    "Content-Type": "multipart/form-data"
                },
            });

            const { IpfsHash } = response.data;
            await createReport("user_value",IpfsHash);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div class="container ml-5 mx-auto mt-8 ">
    <h2 class="text-2xl font-bold mb-4">Upload Report</h2>
    <input type="file" onChange={handleFileChange} class="border border-gray-300 py-2 px-4 rounded-lg mb-4" />
    <button onClick={handleFileUpload} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Upload</button>
    {uploadedCID && <p class="mt-4">PDF file uploaded successfully to CID={uploadedCID}</p>}
</div>

    );
};

export default UploadForm;
