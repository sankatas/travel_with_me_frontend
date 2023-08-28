import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
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

const cardsToShow = 5;

export default function Profile() {
    const [startIndex, setStartIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCardData = cardData.filter(card => card.content.toLowerCase().includes(searchQuery.toLowerCase()));

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

    const handleSearch = query => {
        setSearchQuery(query);
        setStartIndex(0);
    };

    return (
        <div className="home-container">
            <Header />

            <div>
                <p>The best travel tips come from travelers and The world is a big place, and there's so much to see and do.</p>

                <p>Share your travel stories and help others explore.</p>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Location"
                    value={searchQuery}
                    onChange={e => handleSearch(e.target.value)}
                />
            </div>
            <div className="card-carousel">
                <button className="nav-button" onClick={goToPrevious} disabled={startIndex === 0}>
                    &lt;
                </button>
                <div className="card-container">
                    {filteredCardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
                        <div key={index} className={`card ${index === 0 ? 'active' : ''}`}>
                            <img src={card.image} alt={`Card ${index + startIndex} `} />
                            {card.content}
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
