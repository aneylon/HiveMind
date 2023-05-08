import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const ColorScheme = () => {
  const [colors, setColors] = useState([]);
  const [numberOfColors, setNumberOfColors] = useState("");

  const generateColors = (numberToGenerate) => {
    let colors = [];
    for (let i = 0; i < numberToGenerate; i++) {
      colors.push(generateRandomRGBColor());
    }
    setColors(colors);
  };

  const showColors = (colorsToShow) => {
    if (colorsToShow.length <= 0)
      return <li>Pick a number of colors to generate</li>;
    else {
      return colorsToShow.map((color, index) => {
        return (
          <li
            style={{
              backgroundColor: color,
              height: "150px",
              width: "150px",
              display: "inline-block",
            }}
            key={index}
          >
            {color}
          </li>
        );
      });
    }
  };

  const generateRandomRGBColor = () => {
    return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
      255
    )})`;
  };

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max + 1);
  };

  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <CardContent>
        <Typography variant="h3">Generate Colors</Typography>
        <TextField
          variant="standard"
          label="Number to generate"
          type="number"
          onChange={(event) => setNumberOfColors(event.target.value)}
          value={numberOfColors}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => {
            generateColors(numberOfColors);
          }}
        >
          Generate Colors
        </Button>
      </CardActions>
      <CardContent>
        <ul>{showColors(colors)}</ul>
      </CardContent>
    </Card>
  );
};

export default ColorScheme;
