import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const RandomNameGenerator = () => {
  const [names, setNames] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const GenerateNames = (data) => {
    let newNames = [];
    for (let i = 0; i < data.numberToGenerate; i++) {
      let newName = [];
      for (let j = 0; j < data.numberOfParts; j++) {
        let nameLength = RandomBetween(
          data.minimumLetters,
          data.maximumLetters
        );
        let name = "";
        for (let k = 0; k < nameLength; k++) {
          name += letters[RandomBetween(0, letters.length)];
        }
        newName.push(name);
      }
      newNames.push(newName.join(" "));
    }
    setNames(newNames);

    setFocus("numberOfParts", { shouldSelect: true });
    reset();
  };

  const RandomBetween = (min, max) => {
    max = Number(max);
    min = Number(min);
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber + min;
  };

  useEffect(() => {
    // generate names on load of component
    GenerateNames({
      numberOfParts: 2,
      numberToGenerate: 5,
      maximumLetters: 5,
      minimumLetters: 2,
    });
    // suppress dependency warning.
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Random Name generator</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(GenerateNames)}
        sx={{ width: 450 }}
      >
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          name="numberOfParts"
          id="numberOfParts"
          type="number"
          placeholder="Number of parts"
          label="Number of parts"
          {...register("numberOfParts", { required: "Required" })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.numberOfParts}
          helperText={errors.numberOfParts ? errors.numberOfParts.message : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          name="minimumLetters"
          id="minimumLetters"
          type="number"
          placeholder="Minimum letters"
          label="Minimum letters"
          {...register("minimumLetters", { required: "Required" })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.minimumLetters}
          helperText={
            errors.minimumLetters ? errors.minimumLetters.message : ""
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          name="maximumLetters"
          id="maximumLetters"
          type="number"
          placeholder="Maximum letters"
          label="Maximum letters"
          {...register("maximumLetters", { required: "Required" })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.maximumLetters}
          helperText={
            errors.maximumLetters ? errors.maximumLetters.message : ""
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          name="numberToGenerate"
          id="numberToGenerate"
          type="number"
          placeholder="Number to generate"
          label="Number to generate"
          {...register("numberToGenerate", { required: "Required" })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.numberToGenerate}
          helperText={
            errors.numberToGenerate ? errors.numberToGenerate.message : ""
          }
        />
        <Button type="submit" variant="contained">
          Generate
        </Button>
      </Box>
      <div>
        <p>Generate some names!</p>
        <p>Names : {names.length}</p>
        {names.length > 0 && (
          <ul>
            {names.map((name, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default RandomNameGenerator;
