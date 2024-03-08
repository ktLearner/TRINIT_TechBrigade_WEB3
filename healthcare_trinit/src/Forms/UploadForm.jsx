import React, { useState } from 'react';
import axios from 'axios';

// Hardcode Pinata API key and secret (not recommended for production)
const PINATA_API_KEY = 'api';
const PINATA_API_SECRET = 'secret';

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
            setUploadedCID(IpfsHash);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h2>Upload PDF File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
            {uploadedCID && <p>PDF file uploaded successfully to CID={uploadedCID}</p>}
        </div>
    );
};

export default UploadForm;
