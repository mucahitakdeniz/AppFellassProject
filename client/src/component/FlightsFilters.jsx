import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UnstyledSelectIntroduction from "./UnstyledSelectIntroduction";
import Checkboxes2 from "./CheckBoxs2";
import Checkboxes from "./Checkboxs";

const FlightsFilters = () => {

  const [timeState, setTimeState] = useState({
    "05.00 AM -11.59 AM": false,
    "12.00 PM-5.59 PM": false,
  });
  const [stops, setStops] = useState({
    "Nonstop | $230": false,
    "1-stop | $230": false,
    "2-stop | $230": false,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography fontSize="0.8rem" variant="body2">
        Sort by:
      </Typography>
      <UnstyledSelectIntroduction />
      <Typography fontSize="0.8rem" variant="body2" marginTop={1}>
        Arrival Time
      </Typography>
      <Checkboxes data={timeState} setData={setTimeState} />
      <Typography fontSize="0.8rem" variant="body2" marginTop={1}>
        Stops
      </Typography>
      <Checkboxes2 data={stops} setData={setStops} />
    </Box>
  );
};

export default FlightsFilters;

