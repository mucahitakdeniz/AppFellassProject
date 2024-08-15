import React from "react";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <LocalAirportIcon className="icons" id="LocalAirportIcon" />{" "}
        <p>Plane Scape</p>
      </div>
      <div className="navbar-right">
        <LocalOfferRoundedIcon className="icons" /> <p>Deals</p>
        <PublicOutlinedIcon className="icons" /> <p>Discover</p>
        <div className="avatar-container">
          <img
            className="avatar"
            src="https://avatars.mds.yandex.net/i?id=d26250d529c1daa9331a1407deaf0ea0b348cfa8-4797777-images-thumbs&n=13"
            alt="My Foto"
          />
        </div>
        <p>Joane Smith</p>
      </div>
    </div>
  );
};

export default Navbar;
