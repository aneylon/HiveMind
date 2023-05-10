import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const Matcher = () => {
  const [numberOfModels, setNumberOfModels] = useState("");
  const [numberOfPaints, setNumberOfPaints] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [matchedSet, setMatchedSet] = useState([]);

  useEffect(() => {
    const inputIsValid = () => {
      const validInput =
        numberOfModels !== 0 &&
        numberOfModels !== "" &&
        numberOfPaints !== 0 &&
        numberOfPaints !== "";
      return validInput;
    };
    setIsDisabled(!inputIsValid());
  }, [numberOfModels, numberOfPaints]);

  const handleSubmit = (event) => {
    console.log("yo");
    event.preventDefault();
    let results = [];
    for (var i = 1; i <= numberOfModels; i++) {
      let paintId = Math.floor(Math.random() * numberOfPaints + 1);
      let match = { model: i, paint: paintId };
      results.push(match);
    }
    setMatchedSet(results);
    clearNumbers();
  };

  const changeNumberOfModels = (event) => {
    setNumberOfModels(event.target.value);
  };

  const changeNumberOfPaints = (event) => {
    setNumberOfPaints(event.target.value);
  };

  const clearNumbers = () => {
    setNumberOfModels("");
    setNumberOfPaints("");
  };

  const showMatched = () => {
    if (matchedSet.length > 0) {
      return matchedSet.map((set) => {
        return (
          <span key={set.model}>
            | {set.model} : {set.paint} |
          </span>
        );
      });
    }
    return <Typography>Pick some numbers!</Typography>;
  };

  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h3">Matcher!</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 450 }}>
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          name="numberOfModels"
          id="numberOfModels"
          type="number"
          placeholder="number of models"
          label="number of models"
          onChange={(event) => changeNumberOfModels(event)}
          value={numberOfModels}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          name="numberOfPaints"
          id="numberOfPaints"
          type="number"
          placeholder="number of paints"
          label="number of paints"
          onChange={(event) => changeNumberOfPaints(event)}
          value={numberOfPaints}
          InputLabelProps={{ shrink: true }}
        />
        <Button
          sx={{ marginTop: 3 }}
          variant="contained"
          type="submit"
          disabled={isDisabled}
        >
          Matchem!
        </Button>
      </Box>
      <Box sx={{ padding: 2 }}>{showMatched()}</Box>
    </Card>
  );
};

export default Matcher;
