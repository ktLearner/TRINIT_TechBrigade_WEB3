import React, { useState } from 'react';

const UploadPdfReportComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadReport = () => {
    // Add logic to upload and process the PDF report
    console.log('Uploading PDF report:', selectedFile);
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-gray-600">Upload PDF Report:</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUploadReport}
        className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700"
      >
        Upload Report
      </button>
    </div>
  );
};

export default UploadPdfReportComponent;
