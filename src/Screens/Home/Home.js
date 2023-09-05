import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import home1 from '../../Assets/home1.jpg';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from "../../Utils/Url";

const cardsToShow = 5;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardData, setCardData] = useState([]);

  useEffect(() => {

    axios
      .get(`${URL}/reviews/getreview`)
      .then((response) => {
        const fetchedCardData = response.data.data; 
        setCardData(fetchedCardData);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNext = () => {
    if (startIndex + cardsToShow < filteredCardData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setStartIndex(0);
  };

  const filteredCardData = cardData.filter((card) =>
    card.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <Header />
      <img className="header-image" src={home1} alt="" />
      <div className='explore'>
        <h2>Explore</h2>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Location"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="card-carousel">
        <button className="nav-button" onClick={goToPrevious} disabled={startIndex === 0}>
          &lt;
        </button>
        <div className="card-container">
          {filteredCardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
            <div key={index} className="card">
              {/* Display the image with the determined format */}
              <img src={card.picture1} alt={`Card ${index + startIndex}`} className="card-image" />

              <h5>
                <Link to={`/review/${card.id}`} style={{ color: '#f1b452' }}>
                  {card.title}
                </Link>
              </h5>
              <div>
                {card.location}
              </div>
            </div>
          ))}
        </div>
        <button
          className="nav-button"
          onClick={goToNext}
          disabled={startIndex + cardsToShow >= filteredCardData.length}
        >
          &gt;
        </button>
      </div>
      <Footer />
    </div>
  );
}
