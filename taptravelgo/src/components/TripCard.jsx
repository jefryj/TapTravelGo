import React from 'react';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.title} className="trip-image" />
      <h2 className="trip-title">{trip.title}</h2>
      <p className="trip-description">{trip.description}</p>
      <p className="trip-price">${trip.price}</p>
    </div>
  );
};

export default TripCard;