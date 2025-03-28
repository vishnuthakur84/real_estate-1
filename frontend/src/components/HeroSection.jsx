import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const handleSearch = async () => {
    const searchQuery = {
      wantTo: document.getElementById("want-to").value,
      propertyType: document.getElementById("property-type").value,
      location: document.getElementById("location").value,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/hero-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchQuery),
      });
      const data = await response.json();
      console.log("Search Results:", data.results);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div className="HeroSection">
      <div className="hero-content">
        <h1>Find a place<br />where you can<br />be yourself.</h1>
        <p>
          If you're looking for a place where you can be yourself, don't give up.
          Keep searching until you find a place that feels like home.
        </p>

        <div className="search-bar">
          <div className="search-field">
            <div className="option">
              <label htmlFor="want-to">Want to:</label>
              <select id="want-to">
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="option">
              <label htmlFor="property-type">Property Type:</label>
              <select id="property-type">
                <option value="any">Any</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="option">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" placeholder="Street, City, Zip" />
            </div>
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

