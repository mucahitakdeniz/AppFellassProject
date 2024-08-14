import React from "react";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <LocalAirportIcon className="icons" id="LocalAirportIcon" />{" "}
        <h3>Plane Scape</h3>
      </div>
      <div className="navbar-right">
        <LocalOfferRoundedIcon className="icons" /> <h3>Deals</h3>
        <PublicOutlinedIcon className="icons" /> <h3>Discover</h3>
        <img
          src="https://avatars.mds.yandex.net/i?id=d26250d529c1daa9331a1407deaf0ea0b348cfa8-4797777-images-thumbs&n=13"
          alt=""
        />
        <h3>Joane Smith</h3>
      </div>
    </div>
  );
};

export default Navbar;
