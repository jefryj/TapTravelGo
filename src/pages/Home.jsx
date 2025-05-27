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
      img: "https://www.tripsavvy.com/thmb/zyqX35L3rgFRuVrbGioDKoqPezc=/2121x1414/filters:fill(auto,1)/GettyImages-930881934-5ae56fe48023b90036464e72.jpg",
      desc: "Enjoy snow-capped mountains, adventure sports, and scenic valleys."
    },
    {
      name: "Goa",
      img: "https://deih43ym53wif.cloudfront.net/cola-beach-goa-india-shutterstock_772145203_82b97bd9df.jpeg",
      desc: "Relax on golden beaches and experience vibrant nightlife and culture."
    },
    {
      name: "Jaipur, Rajasthan",
      img: "https://th.bing.com/th/id/OIP.Dgef0y0ZHUXw9tfIaVzfdAHaEb?cb=iwp2&rs=1&pid=ImgDetMain",
      desc: "Discover royal palaces, forts, and the rich heritage of the Pink City."
    },
    {
      name: "Rann of Kutch, Gujarat",
      img: "https://www.stayvista.com/blog/wp-content/uploads/2023/10/51560305941_3dec221e4f_o.jpg",
      desc: "Marvel at the vast white salt desert and enjoy the Rann Utsav festival."
    },
    {
      name: "Sundarbans, West Bengal",
      img: "https://www.adotrip.com/public/images/areas/master_images/5f0dbcaae5cb0-Sundarbans_Attractions.jpg",
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
        {filtered.map((d) => (
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
