import React from 'react';
import Navbar from '../component/Navbar';

const Home = () => {
  return (<div className='home'>
    <Navbar/>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
    </div>
  );
};

export default Home; // default export
