
// import React, { useEffect, useState } from "react";

// const AboutUs = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // Added loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/about-us");

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching About Us data:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   if (error) {
//     return <div style={{ color: "red" }}>Error fetching About Us data: {error}</div>;
//   }

//   return (
//     <div className="Aboutus">
//       <div className="Aboutus-content">
//         <h2>ABOUT US</h2>
//         <h3>Award-winning real estate company in India</h3>
//         <p>
//           Whether you're a first-time homebuyer, a seasoned investor, or simply looking for a change, we're here to guide you.
//         </p>
//         {data && ( // Only display data when it's available
//           <>
//             <div className="MoreInfo">
//               <h4>Previous Projects</h4>
//               <h4>Years of Experience</h4>
//               <h4>Ongoing Projects</h4>
//             </div>
//             <div className="MoreInfoo">
//               <p>{data.previous_projects || 0}+</p>
//               <p>{data.years_experience || 0}+</p>
//               <p>{data.ongoing_projects || 0}</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useEffect, useState } from "react";

const AboutUs = () => {
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
    try {
        // Simulated API response (Frontend-only Mock Data)
        const fakeData = {
        previous_projects: 50,
        years_experience: 10,
        ongoing_projects: 5
        };

        // Simulating network delay
        setTimeout(() => {
        setData(fakeData);
        setLoading(false);
        }, 1000);

    } catch (error) {
        console.error("Error fetching About Us data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
    }
    };

    fetchData();
}, []);

if (loading) {
    return <div className="text-center">Loading About Us information...</div>;
}

if (error) {
    return <div className="text-center text-red-500">{error}</div>;
}

return (
    <div className="Aboutus">
    <div className="Aboutus-content">
        <h1>ABOUT US</h1>
        <p>
        Whether you're a first-time homebuyer, a seasoned investor, or simply looking for a change, we're here to guide you.
        </p>
        {data ? (
        <>
            <div className="MoreInfo">
            <h4>Previous Projects</h4>
            <h4>Years of Experience</h4>
            <h4>Ongoing Projects</h4>
            </div>
            <div className="MoreInfoo">
            <p>{data.previous_projects}+</p>
            <p>{data.years_experience}+</p>
            <p>{data.ongoing_projects}</p>
            </div>
        </>
        ) : (
        <p>No data available at the moment.</p>
        )}
    </div>
    </div>
);
};

export default AboutUs;
