import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css'; 
import netflixLogo from './Netfliximage.jpg'; // Import your Netflix logo image


const LoginPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (email === 'kavya.s@thoughtclan.com' && password === 'Kavya@123') {
            // Redirect to App.js after successful login
            navigate('/HomePage'); // Use navigate to redirect
        } else {
            // Show an alert for invalid credentials
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="loginPage">
            <div className="loginPage__background" />
            <div className="loginPage__gradient" />
            <div className="loginPage__form">
                <img src={netflixLogo} alt="Netflix Logo" className="loginPage__logo" />
                <h1>Sign In</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginPage__button" onClick={handleLogin}>
                    Sign In
                </button>
                <div className="loginPage__signup">
                    <span>New to Netflix? </span>
                    <span className="loginPage__signupLink">
                        Sign up now.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
