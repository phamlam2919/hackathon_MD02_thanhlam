import React from "react";
import "./style.css";
function ContactInfo() {
    return (
        <div>
            <div className="contact">
                <h1>Contact Info</h1>

                <div>
                    <span>Name</span>
                    <br />
                    <input type="text" />
                </div>
                <br />
                <div>
                    <span>Email</span>
                    <br />
                    <input type="text" />
                </div>
                <br />
                <div>
                    <span>Phone Number</span>
                    <br />
                    <input type="text" />
                </div>
                <br />
                <div>
                    <span>Message</span>
                    <br />
                    <input type="text" />
                </div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    );
}

export default ContactInfo;
