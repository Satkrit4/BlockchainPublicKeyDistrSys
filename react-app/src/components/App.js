import React, { useState } from 'react';
import HomePage from './HomePage';
import KeyDistributionPage from './KeyDistributionPage';
import '../App.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') {
      return <HomePage setPage={setPage} />;
    } else if (page === 'key-distribution') {
      return <KeyDistributionPage setPage={setPage} />;
    } else {
      return <div>404 - Page Not Found</div>;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;


