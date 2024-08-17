import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UnstyledSelectIntroduction from "./UnstyledSelectIntroduction";
import Checkboxes from "./Checkboxs";

const FlightsFilters = () => {
  const [timeState, setTimeState] = useState({
    "05.00 AM -11.59 AM": false,
    "12.00 PM-5.59 PM": false,
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography fontSize="0.8rem" variant="body2">
        Sort by :
      </Typography>
      <UnstyledSelectIntroduction />
      <Typography fontSize="0.8rem" variant="body2" marginTop={2}>
        Arrival Time
      </Typography>
      <Checkboxes data={timeState} setData={setTimeState} />
      <Typography fontSize="0.8rem" variant="body2" marginTop={2}>
        Stops
      </Typography>
      <Checkboxes data={timeState} setData={setTimeState} />
    </Box>
  );
};

export default FlightsFilters;
