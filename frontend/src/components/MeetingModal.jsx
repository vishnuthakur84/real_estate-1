import React, { useState } from "react";

const MeetingModal = ({ isOpen, onClose, property, onSchedule }) => {
  const [meetingDate, setMeetingDate] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Fix a Meeting</h2>
        <p className="mb-2">Property: <strong>{property?.title}</strong></p>
        <input
          type="datetime-local"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button
            onClick={() => onSchedule(meetingDate)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingModal;
