import { Box, Typography } from "@mui/material";
import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const FlightsFilters = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="p" fontSize="1rem">
        Sort by :
      </Typography>
      {/* <Select defaultValue="dog">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
      </Select> */}
    </Box>
  );
};

export default FlightsFilters;
