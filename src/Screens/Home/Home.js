import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import home1 from '../../Assets/home1.jpg';
import card1Image from '../../Assets/home1.jpg'; 
import Footer from '../Footer/Footer';

const cardData = [
  {
    content: 'Card 1 Content',
    image: card1Image,
  },
  {
    content: 'Card 2 Content',
    image: card1Image,
  },
  {
    content: 'Card 3 Content',
    image: card1Image,
  },
  {
    content: 'Card 4 Content',
    image: card1Image,
  },
  {
    content: 'Card 5 Content',
    image: card1Image,
  },
  {
    content: 'Card 6 Content',
    image: card1Image,
  },
  {
    content: 'Card 7 Content',
    image: card1Image,
  },
  {
    content: 'Card 8 Content',
    image: card1Image,
  },
  // ... other card objects
];

const cardData1 = [
  {
    content: 'Card 1 Content',
    image: card1Image,
  },
  {
    content: 'Card 2 Content',
    image: card1Image,
  },
  {
    content: 'Card 3 Content',
    image: card1Image,
  },
  {
    content: 'Card 4 Content',
    image: card1Image,
  },
  {
    content: 'Card 5 Content',
    image: card1Image,
  },
  {
    content: 'Card 6 Content',
    image: card1Image,
  },
  {
    content: 'Card 7 Content',
    image: card1Image,
  },
  {
    content: 'Card 8 Content',
    image: card1Image,
  },
  // ... other card objects
];

const cardsToShow = 5;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [startIndex1, setStartIndex1] = useState(0);

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
  const goToPrevious1 = () => {
    if (startIndex1 > 0) {
      setStartIndex1(startIndex1 - 1);
    }
  };

  const goToNext1 = () => {
    if (startIndex1 + cardsToShow < cardData1.length) {
      setStartIndex1(startIndex1 + 1);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <img className="header-image" src={home1} alt="Header Image" />
      <div>
        <h2>Explore</h2>
      </div>
      <div className="card-carousel">
        <button className="nav-button" onClick={goToPrevious} disabled={startIndex === 0}>
          &lt;
        </button>
        <div className="card-container">
          {cardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
            <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
              <img src={card.image} alt={`Card ${index + startIndex} Image`} />
              {card.content}
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

      <div>
        <h2>Feed</h2>
      </div>
      <div className="card-carousel">
        <button className="nav-button" onClick={goToPrevious1} disabled={startIndex1 === 0}>
          &lt;
        </button>
        <div className="card-container">
          {cardData.slice(startIndex1, startIndex1 + cardsToShow).map((card, index) => (
            <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
              <img src={card.image} alt={`Card ${index + startIndex1} Image`} />
              {card.content}
            </div>
          ))}
        </div>
        <button
          className="nav-button"
          onClick={goToNext1}
          disabled={startIndex1 + cardsToShow >= cardData1.length}
        >
          &gt;
        </button>
      </div>
      <Footer/>
      </div>
  );
}
