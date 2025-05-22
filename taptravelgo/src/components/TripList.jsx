import React from 'react';
import TripCard from './TripCard';
import tripsData from '../data/trips';

function TripList() {
  return (
    <div className="trip-list">
      {tripsData.map(trip => (
        <TripCard 
          key={trip.id} 
          title={trip.title} 
          description={trip.description} 
          price={trip.price} 
          imageUrl={trip.imageUrl} 
        />
      ))}
    </div>
  );
}

export default TripList;