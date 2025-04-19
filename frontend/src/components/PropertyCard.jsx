import React, { useState } from "react";
import MeetingModal from "./MeetingModal";
import axios from "axios";

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSchedule = async (date) => {
    try {
      await axios.post("/api/meetings", {
        propertyId: property._id,
        sellerId: property.sellerId,
        meetingDate: date,
      });
      alert("Meeting Scheduled Successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to schedule meeting.");
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{property.title}</h3>
      <p>{property.description}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Fix a Meeting
      </button>

      <MeetingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        property={property}
        onSchedule={handleSchedule}
      />
    </div>
  );
};

export default PropertyCard;
