import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // This is your custom CSS file. Optional.

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
