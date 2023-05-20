import { Box, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
export const Terminal = () => {
  const [textToConvert, setTextToConvert] = useState("");
  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h3">Retro Terminal</Typography>
      <Box>
        <TextField
          sx={{ width: 350 }}
          multiline
          minRows={3}
          maxRows={6}
          placeholder="> awaiting input ..."
          onChange={(event) => {
            let text = event.target.value;
            console.log(text);
            setTextToConvert(text);
          }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            width: 350,
            position: "relative",
            margin: 3,
            padding: 3,
            color: "green",
            backgroundColor: "black",
            backgroundImage:
              "radial-gradient(rgba(0, 150, 0, 0.33), black 120%)",
            //   "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px)",
            // backgroundRepeat: "repeat, repeat",
            fontFamily: "VT323, monospace",
            fontWeight: "bold",
            fontSize: "1.5em",
            textShadow: "0 0 6px black",
            minWidth: 450,
            minHeight: 450,
          }}
        >
          <Typography sx={{ fontFamily: "VT323, monospace" }}>
            {textToConvert}
          </Typography>
        </Box>
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            minWidth: 450,
            minHeight: 450,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px)",
          }}
        ></Box> */}
      </Box>
    </Card>
  );
};