import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Advertisement = () => {
  return (
    <Box
      className="advertisement"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Card
        sx={{
          backgroundImage: `url("https://avatars.mds.yandex.net/i?id=f613e27919d4c1f614c63e501d75c6ebeb8c049e-9145716-images-thumbs&n=13")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "195px",
          height: "195px",
          borderRadius: "1rem",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <TimeToLeaveIcon
            sx={{ color: "white", display: "flex", justifyContent: "flex: ," }}
          />
          <Typography sx={{ color: "white" }}>CAR RENTALS</Typography>
        </Box>
      </Card>
      <Card
        sx={{
          backgroundImage: `url("https://avatars.mds.yandex.net/i?id=d278101104162a94d05f63c1a03e83ead35e3540c091167d-5232340-images-thumbs&n=13")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "195px",
          height: "195px",
          borderRadius: "1rem",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <ApartmentIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>HOTELS</Typography>
        </Box>
      </Card>
      <Card
        sx={{
          backgroundImage: `url("https://avatars.mds.yandex.net/i?id=4fa0c14acc6ed77ec5bf2702774037336f812362-8306751-images-thumbs&n=13")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "195px",
          height: "195px",
          borderRadius: "1rem",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <BeachAccessIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>TRAVEL PACKAGES</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Advertisement;
