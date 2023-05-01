import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const submitSignUp = (data) => {
    console.log({ data });
    toast.error("Cannot connect to server. Please try again later.");
    console.error("SignUp Error", {
      message: "Error connecting to server to sign up.",
    });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(submitSignUp)}
        sx={{ width: 450 }}
      >
        <TextField
          type="email"
          name="email"
          id="signUpEmail"
          placeholder="email"
          margin="normal"
          autoComplete="on"
          autoFocus
          fullWidth
          required
          label="email"
          InputLabelProps={{ shrink: true }}
          {...register("email", { required: "email is required" })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          autoComplete="on"
          label="password"
          InputLabelProps={{ shrink: true }}
          type="password"
          name="password"
          id="signUpPassword"
          placeholder="Abc123!*"
          {...register("password", { required: "password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Box>
    </div>
  );
};
