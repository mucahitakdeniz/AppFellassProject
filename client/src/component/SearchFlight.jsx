import React, { useState } from "react";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Box, Button } from "@mui/material";
import Inputs from "./Inputs";

const SearchFlight = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <LocalAirportIcon sx={{ transform: "rotate(90deg)" }} />
          <p>BOOK YOUR FLIGHT</p>
        </Box>
        <Box>
          <Button
            sx={{
              color: roundTrip ? "secondary.main" : "primary.main",
              bgcolor: roundTrip ? "primary.main" : "secondary.main",
              borderRadius: "16px 0 0 16px",
              "&:hover": {
                bgcolor: roundTrip ? "primary.dark" : "secondary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setRoundTrip(true)}
          >
            Round trip
          </Button>
          <Button
            sx={{
              color: roundTrip ? "primary.main" : "secondary.main",
              bgcolor: roundTrip ? "secondary.main" : "primary.main",
              borderRadius: "0 16px 16px 0",
              "&:hover": {
                bgcolor: roundTrip ? "secondary.dark" : "primary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setRoundTrip(false)}
          >
            One way
          </Button>
        </Box>
      </Box>
        <Inputs roundTrip={roundTrip} />
    </div>
  );
};

export default SearchFlight;
