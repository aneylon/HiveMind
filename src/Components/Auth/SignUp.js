import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const { handleSubmit, register } = useForm();
  const submitSignUp = (data) => {
    console.log({ data });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(submitSignUp)}
        sx={{ width: 300 }}
      >
        <TextField
          type="email"
          name="email"
          id="signUpEmail"
          placeholder="email"
          margin="dense"
          autoComplete="on"
          autoFocus
          fullWidth
          required
          label="email"
          InputLabelProps={{ shrink: true }}
          {...register("email", { required: true })}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          autoComplete="on"
          label="password"
          InputLabelProps={{ shrink: true }}
          type="password"
          name="password"
          id="signUpPassword"
          placeholder="Abc123!*"
          {...register("password", { required: true })}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Box>
    </div>
  );
};
