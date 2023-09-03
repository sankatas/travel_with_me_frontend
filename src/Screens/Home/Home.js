import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import home1 from '../../Assets/home1.jpg';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cardsToShow = 5;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch card data from the API
    axios
      .get('http://localhost:8200/travel_with_me/reviews/getreview')
      .then((response) => {
        const fetchedCardData = response.data.data; // Assuming your API response contains 'data' field
        setCardData(fetchedCardData);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNext = () => {
    if (startIndex + cardsToShow < cardData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <img className="header-image" src={home1} alt="" />
      <div>
        <h2>Explore</h2>
      </div>
      <div className="card-carousel">
        <button className="nav-button" onClick={goToPrevious} disabled={startIndex === 0}>
          &lt;
        </button>
        <div className="card-container">
          {cardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
            <div key={index} className="card">
              {/* Display the image with the determined format */}
              <img
                src={card.picture1}
                alt={`Card ${index + startIndex}`}
                className="card-image" // Set a class for styling
              />
              <h5>
                <Link to={`/review/${card.id}`} style={{ color: '#f1b452' }}>
                  {card.title}
                </Link>
              </h5>
              <div>{card.location}</div>
            </div>
          ))}
        </div>
        <button
          className="nav-button"
          onClick={goToNext}
          disabled={startIndex + cardsToShow >= cardData.length}
        >
          &gt;
        </button>
      </div>
      <Footer />
    </div>
  );
}
