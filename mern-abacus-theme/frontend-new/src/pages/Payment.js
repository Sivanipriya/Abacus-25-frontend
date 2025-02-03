import React, { useState } from "react";
import { UserData } from "../context/userContext";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";

const Payment = () => {
  const navigate = useNavigate();
  const {
    handleVerifyWorkshopPayment,
    handleVerifyBulkWorkshopPayment,
    paymentType,
    setPaymentType,
  } = UserData(); // New bulk payment API
  const { id } = useParams();
  const { isLoading } = LoaderData();

  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const [userIds, setUserIds] = useState(""); // For bulk payments

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserIdsChange = (event) => {
    setUserIds(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);

    if (paymentType === "individual") {
      // Individual Payment API Call
      handleVerifyWorkshopPayment(
        {
          workshopId: parseInt(id),
          paymentMobile: formData.paymentMobile,
          transactionId: formData.transactionId,
          formData: formReqData,
        },
        navigate
      );
    } else {
      // Bulk Payment API Call
      handleVerifyBulkWorkshopPayment(
        {
          workshopId: parseInt(id),
          paymentMobile: formData.paymentMobile,
          transactionId: formData.transactionId,
          userIds: userIds.split(",").map((uid) => parseInt(uid.trim())), // Convert CSV to array of numbers
          formData: formReqData,
        },
        navigate
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6">
      <div className="w-full max-w-md bg-gray-900 border-2 border-[#8a1818] rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#8a1818] pb-2">
          <span className="text-[#8a1818]">&lt;</span> Payment{" "}
          <span className="text-[#8a1818]">&gt;</span>
        </h2>

        {/* Toggle Payment Type */}
        <div className="flex justify-center gap-4 mt-4">
          {paymentType === "individual" ? (
            <button
              className={`px-4 py-2 border rounded-md ${
                paymentType === "individual"
                  ? "bg-[#8a1818] text-white"
                  : "border-gray-500"
              }`}
            >
              Individual Payment
            </button>
          ) : (
            <button
              className={`px-4 py-2 border rounded-md ${
                paymentType === "bulk"
                  ? "bg-[#8a1818] text-white"
                  : "border-gray-500"
              }`}
            >
              Bulk Payment
            </button>
          )}
        </div>

        <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
          {/* QR Code Display */}
          <button
            type="button"
            className="bg-[#8a1818] text-white font-semibold py-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide QR Code!" : "Show QR Code!"} &lt;~&gt;
          </button>
          {isOpen && (
            <div className="flex justify-center">
              <img
                src="path/to/qr-code.png"
                alt="QR Code"
                className="w-28 h-28 border-2 border-[#8a1818] rounded-md"
              />
            </div>
          )}

          {/* Common Inputs */}
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />
          <input
            type="text"
            name="paymentMobile"
            placeholder="Payment Mobile No."
            value={formData.paymentMobile}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />

          {/* Bulk Payment Input */}
          {paymentType === "bulk" && (
            <input
              type="text"
              placeholder="Enter User IDs (comma-separated)"
              value={userIds}
              onChange={handleUserIdsChange}
              className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
              required
            />
          )}

          {/* Screenshot Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="screenshot"
              className="flex items-center gap-2 bg-black border border-red-600 px-4 py-2 rounded-md cursor-pointer"
            >
              <span className="bg-[#8a1818] text-white px-3 py-1 rounded">
                Upload
              </span>
              <span className="text-gray-400 text-sm">
                {fileName.length > 30
                  ? fileName.slice(0, 25) + "..."
                  : fileName}
              </span>
            </label>
            <input
              type="file"
              id="screenshot"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#8a1818] text-white font-semibold py-2 rounded"
          >
            {paymentType === "individual"
              ? "Verify Payment"
              : "Submit Bulk Payment"}{" "}
            &lt;~&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
