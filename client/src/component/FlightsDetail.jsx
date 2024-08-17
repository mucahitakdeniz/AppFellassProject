import React, { useState } from "react";
import SearchFlight from "./SearchFlight";
import { Box } from "@mui/material";
import Inputs from "./Inputs";
import Flights from "./Flights";
import FlightsFilters from "./FlightsFilters";

const FlightsDetail = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 3,
          width: "48rem",
          height: "11rem",
          bgcolor:"white",
          marginRight:1
        }}
      >
        <SearchFlight roundTrip={roundTrip} setRoundTrip={setRoundTrip} />
        <Inputs roundTrip={roundTrip} />
      </Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 3,
          width: "95%",
          height: "20rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "78%" }}>
          <Flights />
        </Box>
        <Box sx={{ bgcolor: "rgb(248, 245, 245)", width: "22%",marginTop:"2.2rem" }}>
          <FlightsFilters />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightsDetail;
