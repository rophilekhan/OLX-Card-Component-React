import React from 'react';
import './OlxCard.css';

const OlxCard = ({ image, title, description, price, location, date }) => {
  return (
    <div className="olx-card">
      <img src={image} alt={title} className="olx-card-image" />
      <div className="olx-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <span>Price: </span>
          <span>{price}</span>
        </p>
        <p>
          <span>Location: </span>
          <span>{location}</span>
        </p>
        <p>
          <span>Date: </span>
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default OlxCard;