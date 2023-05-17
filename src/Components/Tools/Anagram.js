import React, { useState } from "react";
import { stringPermutations } from "../../Shared/permutation";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const Anagram = () => {
  const [anagrams, setAnagrams] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const createAnagrams = (data) => {
    let results = stringPermutations(data.word);
    setAnagrams(results);
    setFocus("word");
    reset();
  };
  const showAnagrams = (thingsToShow) => {
    if (thingsToShow.length < 1) return <li>Nag a ram!</li>;
    else {
      return thingsToShow.map((anagram, index) => {
        return <div key={index}>{anagram.split("").join(" ")}</div>;
      });
    }
  };
  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h3">Anagram-a-tron!</Typography>
      <Box
        sx={{ width: 450 }}
        component="form"
        onSubmit={handleSubmit(createAnagrams)}
      >
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          name="word"
          id="word"
          type="text"
          placeholder="word to mix up"
          label="word to mix up"
          InputLabelProps={{ shrink: true }}
          {...register("word", {
            required: "Required",
            minLength: {
              value: 2,
              message: "Must be two characters or more.",
            },
          })}
          error={!!errors.word}
          helperText={errors.word ? errors.word.message : ""}
        />
        <Button sx={{ marginTop: 3 }} type="submit" variant="contained">
          Anagram-a-tron it!
        </Button>
      </Box>
      <ul>{showAnagrams(anagrams)}</ul>
    </Card>
  );
};

export default Anagram;
