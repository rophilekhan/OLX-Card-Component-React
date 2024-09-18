import React from 'react';
import OlxCard from './components/OlxCard';

const data = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2XCEeLV6JqXub2HjgJBYO9Wf38-CyNa-uw&s',
    title: 'Toyota Corolla 2015',
    description: 'Used car for sale in Lahore',
    price: '₨2,500,000',
    location: 'Lahore',
    date: 'Posted 2 days ago',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveUwahXhzc7S_aXpVpfdv4WISnotK9LB6lA&s',
    title: 'Samsung Galaxy S22',
    description: 'Used mobile phone for sale in Karachi',
    price: '₨80,000',
    location: 'Karachi',
    date: 'Posted 1 day ago',
  },
  // Add more objects to the array as needed
];

function App() {
  return (
    <div className="app">
      {data.map((item, index) => (
        <OlxCard key={index} {...item} />
      ))}
    </div>
  );
}

export default App;