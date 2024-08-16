import { Box } from "@mui/material";
import React from "react";
import FlightsList from "./FlightsList";
import FlightsFilters from "./FlightsFilters";

const Flights = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        bgcolor: "white",
        p: 1,
        borderRadius: 3,
        width: "95%",
        height: "20rem",
        display: "flex",
        flexDirection: "row",
        width: "80%",
      }}
    >
      <Box sx={{}}>
        <FlightsList />
      </Box>
      
    </Box>
  );
};

export default Flights;
