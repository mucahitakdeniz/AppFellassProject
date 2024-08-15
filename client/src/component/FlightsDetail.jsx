import React from "react";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Box, Button, Input } from "@mui/material";

const FlightsDetail = () => {
  return (
    <div className="flights-detail">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
              bgcolor: "primary.main",
              color: "secondary.main",
              borderRadius: "16px 0 0 16px",
              "&:hover": {
                bgcolor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            Round trip
          </Button>
          <Button
            sx={{
              color: "primary.main",
              bgcolor: "secondary.main",
              borderRadius: "0 16px 16px 0",

              "&:hover": {
                bgcolor: "secondary.dark",
                cursor: "pointer",
              },
            }}
          >
            One way
          </Button>
        </Box>
      </Box>
      <Box>
        <Input
          size="small"
          color="secondary"
          sx={{ border: 1, borderRadius: "16px 0 0 16px", p: 0.5 }}
        />
        <Input
          size="small"
          color="secondary"
          sx={{ border: 1, borderRadius: "0 16px 16px 0", p: 0.5 }}
        />
      </Box>
      <Box>
        <Input
          size="small"
          color="secondary"
          sx={{ border: 1, borderRadius: "16px 0 0 16px", p: 0.5 }}
        />
        <Input
          size="small"
          color="secondary"
          sx={{ border: 1, borderRadius: "0 16px 16px 0", p: 0.5 }}
        />
      </Box>
    </div>
  );
};

export default FlightsDetail;
