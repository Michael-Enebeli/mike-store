import React, { useState } from "react";
import "../styles/SubscriptionForm.css"; 

const SubscriptionForm = () => {
    const [email, setEmail] = useState("");
    const [frequency, setFrequency] = useState("Monthly"); 
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${frequency} subscription successful`);
        setEmail(""); 
        setIsInputFocused(false);
    };

    return (
        <div className="subscription-container">
          <span><i className="fas fa-paper-plane"></i> Our Newsletters</span>
            <h3>Be the first to know about our new products!</h3>
            <form onSubmit={handleSubmit} className="subscription-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    required
                />
                <button type="submit" disabled={!isInputFocused}>Subscribe</button>
            </form>

            <div className="subscription-options">
                <div className="left-option">
                    <input
                        type="checkbox"
                        name="updateFrequency"
                        value="Monthly"
                        checked={frequency === "Monthly"}
                        onChange={() => setFrequency("Monthly")}
                    />
                    <label> Monthly Updates </label>
                </div>

                <div className="right-option">
                    <input
                        type="checkbox"
                        name="updateFrequency"
                        value="Weekly"
                        checked={frequency === "Weekly"}
                        onChange={() => setFrequency("Weekly")}
                    />
                    <label> Weekly Updates </label>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionForm;
