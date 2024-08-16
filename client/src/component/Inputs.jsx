import { Box, Input } from "@mui/material";
import React from "react";

const Inputs = ({ roundTrip }) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent:roundTrip ? "space-between":"flex-start",
      }}>
      <Box>
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{ border: 1, borderRadius: "16px 0 0 16px", p: 0.5 }}
        />
        {roundTrip && (
          <Input
            size="small"
            color="secondary"
            disableUnderline={true}
            sx={{ border: 1, borderRadius: "0 16px 16px 0", p: 0.5 }}
          />
        )}
      </Box>

      <Box
        
      >
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: roundTrip ? "16px 0 0 16px" : "0 16px 16px 0",
            p: 0.5,
          }}
        />
        {roundTrip && (
          <Input
            size="small"
            color="secondary"
            disableUnderline={true}
            sx={{ border: 1, borderRadius: "0 16px 16px 0", p: 0.5 }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Inputs;
