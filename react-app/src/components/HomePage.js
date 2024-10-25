import React from 'react';

const HomePage = ({ setPage }) => {
  return (
    <div className="container">
      <h1>Welcome to Key Management System</h1>
      <button className="button" onClick={() => setPage('key-distribution')}>Go to Key Distribution</button>
    </div>
  );
};

export default HomePage;
