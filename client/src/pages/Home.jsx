import React from "react";
import Navbar from "../component/Navbar";
import FlightsDetail from "../component/FlightsDetail";
import Advertisement from "../component/Advertisement";

const Home = () => {
  return (
    <div className="home">
      <div className="plane-scape">
        <Navbar />
        <div className="home-content">
          <FlightsDetail />
          <Advertisement />
        </div>

      </div>
    </div>
  );
};

export default Home; // default export
