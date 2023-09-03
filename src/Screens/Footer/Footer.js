import React from 'react';
import './Footer.css'; // Import your CSS for styling
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Travel With Me</h2>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/press-resources">Press &amp; Resources</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/trust-safety">Trust &amp; Safety</a></li>
                        <li><a href="/accessibility-statement">Accessibility Statement</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Explore</h2>
                    <ul>
                        <li><a href="/write-a-review">Write a Review</a></li>
                        <li><a href="/add-a-place">Add a Place</a></li>
                        <li><a href="/join">Join</a></li>
                        <li><a href="/travelers-choice">Traveler's Choice</a></li>
                        <li><a href="/greenleaders">GreenLeaders</a></li>
                        <li><a href="/help-center">Help Center</a></li>
                        <li><a href="/travel-article">Travel Article</a></li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us.</p>
                    <div className="contact-info">
                        <p>Tel: 123-456-7890</p>
                        <p>Email: info@mysite.com</p>
                        <p>Book a Consultation: <a href="/schedule-here">Schedule Here</a></p>
                    </div>
                    <div className="social-icons">
                        <a href="/facebook" className="icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/linkedin" className="icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/twitter" className="icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/instagram" className="icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
