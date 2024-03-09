import React, { useState } from "react";
import UseWallet from "../../wallet/wallet";
import { CreatePatientProfile } from "../_contract/contract_functions";

function ViewerPermsForm() {
  let [wallet, login, logout] = UseWallet();
  const [formData, setFormData] = useState({
    viewerWallet: "",
  });
  const [viewers, setViewers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = (index) => {
    const updatedViewers = [...viewers];
    updatedViewers.splice(index, 1);
    setViewers(updatedViewers);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newViewer = {
      walletAddress: formData.viewerWallet,
      // Add other data associated with the viewer if needed
    };
    setViewers([...viewers, newViewer]);
    // Reset the form data
    setFormData({
      viewerWallet: "",
    });
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Viewers' Wallet Addresses</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="viewerWallet" className="block mb-2">
            Viewer Wallet Address:
          </label>
          <input
            type="text"
            id="viewerWallet"
            name="viewerWallet"
            value={formData.viewerWallet}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-cream"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Viewer
        </button>
      </form>

      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Viewer Wallet Address
            </th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>

        {viewers.length > 0 && (
          <tbody>
            {viewers.map((viewer, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {viewer.walletAddress}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default ViewerPermsForm;
