import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { URL } from "../../Utils/Url"
import { Link } from 'react-router-dom';

const cardsToShow = 5;

const Profile = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('userName');

    // Fetch card data from the API when the component mounts
    axios
      .get(`${URL}/reviews/getreviewbyuser/${user}`)
      .then((response) => {
        const fetchedCardData = response.data.data; // Assuming your API response contains 'data' field
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

  // Assuming 'cardData' is the fetched data from the API
  const filteredCardData = cardData.filter((card) =>
    card.location.toLowerCase().includes(searchQuery.toLowerCase()) // Use 'location' property for filtering
  );

  return (
    <div className="home-container">
      <Header />

      <div>
        <p>The best travel tips come from travelers, and the world is a big place with so much to see and do.</p>

        <p>Share your travel stories and help others explore.</p>
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
};

export default Profile;
