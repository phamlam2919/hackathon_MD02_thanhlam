import React, { useState } from "react";
import "./style.css";
import ContactInfo from "./ContactInfo";
function Hackathon02() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!name) {
            validationErrors.name = "Name is required";
        }
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Please re-enter your email";
        }
        if (!phone) {
            validationErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            validationErrors.phone = "Please re-enter your phone number";
        }
        if (!message) {
            validationErrors.message = "Message is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({});
    };

    return (
        <div className="container">
            <ContactInfo />
            <form onSubmit={handleSubmit}>
                <div className="US">
                    <div className="name">
                        <h1>Contact Us</h1>

                        <div>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />
                            {errors.name && (
                                <span className="error">{errors.name}</span>
                            )}
                        </div>
                        <br />
                        <div>
                            <span>Email</span>
                            <br />
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            {errors.email && (
                                <span className="error">{errors.email}</span>
                            )}
                        </div>
                        <br />
                        <div>
                            <span>Phone Number</span>
                            <br />
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <br />
                            {errors.phone && (
                                <span className="error">{errors.phone}</span>
                            )}
                        </div>
                        <br />
                        <div>
                            <span>Message</span>
                            <br />
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {errors.message && (
                                <span className="error">{errors.message}</span>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Hackathon02;
