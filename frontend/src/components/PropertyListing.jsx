
import React, { useState } from "react";
import "./PropertyListing.css";

const PropertyListing = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...images]);
  };

  const handlePropertySubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      propertyName: e.target.propertyName.value,
      location: e.target.location.value,
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      images: selectedImages, // Assuming selectedImages contains image URLs
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propertyData),
      });
      const data = await response.json();
      console.log(data.message);
      alert("Property listed successfully!");
    } catch (error) {
      console.error("Error listing property:", error);
      alert("Failed to list property.");
    }
  };

  return (
    <div className="property-listing">
      <h1>List Your Property</h1>
      <p>Provide the details of your property for Buy.</p>
      <form onSubmit={handlePropertySubmit}>
        <label>
          Property Name:
          <input type="text" name="propertyName" required />
        </label>
        <label>
          Location:
          <input type="text" name="location" required />
        </label>
        <label>
          Price:
          <input type="number" name="price" required />
        </label>
        <label>
          Description:
          <textarea name="description" required></textarea>
        </label>
        <label>
          Upload Images:
          <input
            type="file"
            name="propertyImages"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </label>
        <div className="image-preview">
          {selectedImages.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyListing;
