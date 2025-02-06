import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SalesDashboard() {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // API Gateway URLs
  const TRIGGER_API = process.env.REACT_APP_TRIGGER_API;
  const DOWNLOAD_API = process.env.REACT_APP_DOWNLOAD_API;

  // Trigger Lambda API
  const triggerExcelJob = async () => {
    setLoading(true);
    setMessage("Generating Excel file...");
    try {
      const response = await axios.post(TRIGGER_API);
      setMessage("Excel generation started! Wait a few seconds before clicking download.");
    } catch (error) {
      setMessage("Error triggering Excel generation.");
      console.error(error);
    }
    setLoading(false);
  };

  // Get Excel Download Link
  const getDownloadLink = async () => {
    setLoading(true);
    setMessage("Fetching download link...");

    try {
        const response = await axios.get(DOWNLOAD_API);

        console.log("Full API Response:", response.data);  // Debugging output

        // If the response is a raw URL string, set it directly
        if (typeof response.data === "string" && response.data.startsWith("http")) {
            setDownloadUrl(response.data);
            setMessage("✅ Your Excel file is ready! Click the button below to download.");
        } else {
            setMessage("❌ Failed to get download link. API response was unexpected.");
        }
    } catch (error) {
        setMessage("❌ Error fetching download link. Check console for details.");
        console.error("Error fetching download link:", error);
    }

    setLoading(false);
};


  return (
    <div className="button-container">
      <h1 className="text-2xl font-bold text-gray-800">Excel Report Generator</h1>
      <p className="text-gray-700">Click the button to generate and download customer data reports.</p>

      {/* Trigger Excel Generation Button */}
      <button
        onClick={triggerExcelJob}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Generate Excel File"}
      </button>

      {/* Fetch Download Link Button */}
      <button
        onClick={getDownloadLink}
        disabled={loading}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 disabled:opacity-50"
      >
        {loading ? "Fetching Link..." : "Get Download Link"}
      </button>

      {/* Status Message */}
      {message && <p className="text-gray-700">{message}</p>}

       {/* ✅ Download Button (Only visible when downloadUrl is available) */}
       {downloadUrl && (
            <a
                href={downloadUrl}
                className="download-button"
                download
            >
                Download Excel
            </a>
      )}
    </div>
  );
}
