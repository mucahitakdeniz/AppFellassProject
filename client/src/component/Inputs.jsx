import { Box, Button, Input, InputAdornment } from "@mui/material";
import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const Inputs = ({ roundTrip }) => {
  return (
    <Box >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "5px",
        }}
      >
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: "16px 0 0 16px",
            marginRight: "5px",
            height: "2.5rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FlightLandIcon
                className="search-icons"
                sx={{ cursor: "pointer" }}
              />
            </InputAdornment>
          }
        />
        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: "0 16px 16px 0",
            marginRight: "5px",
            height: "2.5rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FlightTakeoffIcon className="search-icons" />
            </InputAdornment>
          }
        />

        <Input
          size="small"
          color="secondary"
          disableUnderline={true}
          sx={{
            border: 1,
            borderRadius: roundTrip ? "16px 0 0 16px" : "16px 16px 16px 16px",
            p: 0.2,
            marginRight: "5px",
            height: "2.5rem",
          }}
          startAdornment={
            <InputAdornment position="start">
              <InsertInvitationIcon className="search-icons" />
            </InputAdornment>
          }
        />
        {roundTrip && (
          <Input
            size="small"
            color="secondary"
            disableUnderline={true}
            sx={{
              border: 1,
              borderRadius: "0 16px 16px 0",
              p: 0.2,
              height: "2.5rem",
            }}
            startAdornment={
              <InputAdornment position="start">
                <InsertInvitationIcon className="search-icons" />
              </InputAdornment>
            }
          />
        )}
      </Box>
      <Button
        sx={{
          color: "white ",
          bgcolor: "primary.main",
          borderRadius: "6px 6px 6px 6px",
          marginTop:3,
          "&:hover": {
            bgcolor: "primary.dark",
            cursor: "pointer",
          },
        }}
      >
        Show flights
      </Button>
    </Box>
  );
};

export default Inputs;
