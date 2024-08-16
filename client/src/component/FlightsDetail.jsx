import React,{ useState } from "react";
import SearchFlight from "./SearchFlight";
import { Box } from "@mui/material";
import Inputs from "./Inputs";

const FlightsDetail = () => {
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <Box sx={{bgcolor:"white",p:1,borderRadius:3,width: "80%",}}>
      <SearchFlight roundTrip={roundTrip} setRoundTrip={setRoundTrip} />
      <Inputs roundTrip={roundTrip} />
    </Box>
  );
};

export default FlightsDetail;
