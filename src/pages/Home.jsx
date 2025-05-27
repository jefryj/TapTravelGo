import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [search, setSearch] = useState('');

  const destinations = [
    {
      name: "Alappuzha, Kerala",
      img: "https://img.freepik.com/premium-photo/houseboat-alappuzha-backwaters-kerala_78361-13380.jpg?w=2000",
      desc: "Experience the serene backwaters and houseboats of Kerala's Venice."
    },
    {
      name: "Manali, Himachal Pradesh",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      desc: "Enjoy snow-capped mountains, adventure sports, and scenic valleys."
    },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      desc: "Relax on golden beaches and experience vibrant nightlife and culture."
    },
    {
      name: "Jaipur, Rajasthan",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      desc: "Discover royal palaces, forts, and the rich heritage of the Pink City."
    },
    {
      name: "Rann of Kutch, Gujarat",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      desc: "Marvel at the vast white salt desert and enjoy the Rann Utsav festival."
    },
    {
      name: "Sundarbans, West Bengal",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      desc: "Explore the world's largest mangrove forest and spot the Royal Bengal Tiger."
    }
  ];

  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Home">
      <h1 className="home-title">
        Welcome to TapTravelGo!
      </h1>
      <h2 className="subheading home-subheading">
        Your Gateway to Seamless Travel Experiences
      </h2>
      <p className="home-description">
        Discover new destinations, plan your perfect trip, and connect with fellow travelers. 
        TapTravelGo brings you curated travel guides, easy booking options, and a vibrant community to make every journey memorable. 
        Start exploring today and let your adventures begin!
      </p>
      <input
        className="search-bar"
        type="text"
        placeholder="Search destination..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="card-container">
        {filtered.map((d, idx) => (
          <div className="card" key={d.name}>
            <img src={d.img} alt={d.name} className="card-img"/>
            <h3>{d.name}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;