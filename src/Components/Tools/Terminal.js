import { Box, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
export const Terminal = () => {
  const [textToConvert, setTextToConvert] = useState("");
  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h3">Retro Terminal</Typography>
      <Box>
        <TextField
          variant="standard"
          sx={{
            width: 800,
            minHeight: 600,
            margin: 2,
            padding: 2,
            textArea: {
              color: "lightgreen",
              textShadow: "0 0 6px lightgreen",
              fontFamily: "VT323, monospace",
              fontSize: "1.2em",
              borderBottom: "",
            },
            backgroundColor: "black",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px), radial-gradient(rgba(0, 150, 0, 0.66), black 120%)",
          }}
          multiline
          minRows={10}
          placeholder="> awaiting input ..."
          onChange={(event) => {
            let text = event.target.value;
            // TODO: figure out how to convert text correctly.
            setTextToConvert(text);
          }}
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      {/* TODO: decide what to do about this... */}
      <Box sx={{ display: "none" }}>
        <Box
          sx={{
            width: 350,
            position: "relative",
            margin: 3,
            padding: 3,
            color: "lightgreen",
            backgroundColor: "black",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px), radial-gradient(rgba(0, 150, 0, 0.66), black 120%)",
            fontFamily: "VT323, monospace",
            fontWeight: "bold",
            fontSize: "1.5em",
            textShadow: "0 0 6px lightgreen",
            minWidth: 450,
            minHeight: 450,
          }}
        >
          <Typography sx={{ fontFamily: "VT323, monospace" }}>
            {textToConvert}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
