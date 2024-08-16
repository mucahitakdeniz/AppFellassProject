import { Box } from "@mui/material";
import React from "react";
import FlightsList from "./FlightsList";

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
      }}
    >
      <Box sx={{}}>
        <FlightsList />
      </Box>
      
    </Box>
  );
};

export default Flights;
