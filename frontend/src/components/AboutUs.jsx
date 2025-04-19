// AboutUs.jsx
import React, { useEffect, useState } from "react";
import { FaBuilding, FaClock, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import "./AboutUs.css"; // keep your custom styles if needed

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // Simulated API response
      const fakeData = {
        previous_projects: 50,
        years_experience: 10,
        ongoing_projects: 5
      };

      setTimeout(() => {
        setData(fakeData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="aboutus-loading">Loading About Us information...</div>;
  }

  if (error) {
    return <div className="aboutus-error">{error}</div>;
  }

  return (
    <div className="aboutus-container">
      <motion.div
        className="aboutus-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p>
          Whether you're a first-time homebuyer, a seasoned investor, or simply
          looking for a change, we're here to guide you.
        </p>

        {data ? (
          <div className="aboutus-stats">
            <div className="stat-box">
              <FaBuilding className="icon" />
              <h4>{data.previous_projects}+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <FaClock className="icon" />
              <h4>{data.years_experience}+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <FaTools className="icon" />
              <h4>{data.ongoing_projects}</h4>
              <p>Ongoing Projects</p>
            </div>
          </div>
        ) : (
          <p>No data available at the moment.</p>
        )}
      </motion.div>
    </div>
  );
};

export default AboutUs;
