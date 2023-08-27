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
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Press &amp; Resources</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Trust &amp; Safety</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility Statement</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Explore</h2>
                    <ul>
                        <li><a href="#">Write a Review</a></li>
                        <li><a href="#">Add a Place</a></li>
                        <li><a href="#">Join</a></li>
                        <li><a href="#">Traveler's Choice</a></li>
                        <li><a href="#">GreenLeaders</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Travel Article</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us.</p>
                    <div className="contact-info">
                        <p>Tel: 123-456-7890</p>
                        <p>Email: info@mysite.com</p>
                        <p>Book a Consultation: <a href="#">Schedule Here</a></p>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
