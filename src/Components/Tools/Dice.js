import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Dice = () => {
  const [diceToRoll, setDiceToRoll] = useState([]);
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [diceToAdd, setDiceToAdd] = useState("");
  const [diceToAddModifier, setDiceToAddModifier] = useState("");

  let addDiceToRoll = (dice, modifier) => {
    dice = parseInt(dice);
    modifier = parseInt(modifier);
    if (dice > 0) {
      setDiceToRoll(diceToRoll.concat({ dice, modifier }));
      setDiceToAdd("");
      setDiceToAddModifier("");
    }
  };

  let rollDice = () => {
    let rolledDice = getResults(diceToRoll);
    setResults(rolledDice);
    setTotal(getTotal(rolledDice));
  };

  let getResults = (dice) => {
    let results = [];
    dice.forEach((die) => {
      results.push(getRandomNumber(die.dice) + die.modifier);
    });
    return results;
  };

  let showResults = (resultsToShow) => {
    if (resultsToShow.length > 0) {
      return resultsToShow.join(", ");
    } else {
      return "";
    }
  };

  let getRandomNumber = (maxValue) => {
    return Math.floor(Math.random() * maxValue) + 1;
  };

  let getTotal = (rolledDice) => {
    return rolledDice.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  };

  let showDiceToRoll = () => {
    if (diceToRoll.length <= 0) return <span>Add some dice!</span>;
    else {
      let display = diceToRoll.reduce((prev, current, index, arr) => {
        let result = `1d${current.dice}`;
        if (current.modifier > 0) result += `+${current.modifier}`;
        if (index < arr.length - 1) result += ` + `;
        return prev + result;
      }, "");
      return <span>{display}</span>;
    }
  };

  return (
    <div>
      <Card sx={{ padding: 2, margin: 2 }}>
        <CardContent>
          <Typography variant="h3">Lets Roll!</Typography>
          <TextField
            id="add-dice-input"
            label="Dice Value"
            variant="standard"
            type="number"
            onChange={(event) => setDiceToAdd(event.target.value)}
            value={diceToAdd}
          />
          <TextField
            id="add-dice-modifier"
            label="Dice Modifier"
            variant="standard"
            type="number"
            onChange={(event) => {
              setDiceToAddModifier(event.target.value);
            }}
            value={diceToAddModifier}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => addDiceToRoll(diceToAdd, diceToAddModifier)}
          >
            Add Dice
          </Button>
        </CardActions>
        <CardContent>
          <Typography>Dice to roll : {showDiceToRoll()}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => rollDice()} variant="contained">
            Roll em
          </Button>
        </CardActions>
        <CardContent>
          <Typography>Results: {showResults(results)}</Typography>
          <Typography>Total: {total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dice;
