
import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = ({ onNavigateToLogin }) => {
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value,
    });
};

const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    setLoading(true);

    try {
        const response = await fetch("http://127.0.0.1:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword, // Ensure this is included
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Signup failed.");
        }

        const data = await response.json();
        console.log("Signup Successful:", data);
        alert("Signup successful! Please login.");
        onNavigateToLogin();
    } catch (error) {
        if (error.message.includes("Failed to fetch")) {
            alert("Cannot connect to the server. Ensure the backend is running.");
        } else {
            alert(`Signup failed: ${error.message}`);
        }
        console.error("Error during signup:", error);
    } finally {
        setLoading(false);
    }
};

return (
    <div className="auth-container">
    <h2>Sign Up</h2>
    <form id="signup-form" onSubmit={handleSignUp}>
        <label htmlFor="signup-username">Username</label>
        <input
        type="text"
        id="signup-username"
        name="username"
        placeholder="Enter your username"
        required
        value={formData.username}
        onChange={handleChange}
        />

        <label htmlFor="signup-email">Email Address</label>
        <input
        type="email"
        id="signup-email"
        name="email"
        placeholder="Enter your email"
        required
        value={formData.email}
        onChange={handleChange}
        />

        <label htmlFor="signup-password">Password</label>
        <input
        type="password"
        id="signup-password"
        name="password"
        placeholder="Enter your password"
        required
        value={formData.password}
        onChange={handleChange}
        />

        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
        type="password"
        id="signup-confirm-password"
        name="confirmPassword"
        placeholder="Confirm your password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        />

        <button type="submit" id="signup-btn" disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
        </button>
    </form>
    <p>
        Already have an account?{" "}
        <button className="login-link" onClick={onNavigateToLogin}>
        Login
        </button>
    </p>
    </div>
);
};

export default SignUpForm;
