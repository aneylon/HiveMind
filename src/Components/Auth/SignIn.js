import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const submitSignIn = (data) => {
    console.log({ data });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(submitSignIn)}
        sx={{ width: 450 }}
      >
        <TextField
          required
          autoFocus
          fullWidth
          margin="normal"
          label="email"
          type="email"
          name="email"
          id="signInEmail"
          placeholder="email"
          InputLabelProps={{ shrink: true }}
          {...register("email", { required: "email is required" })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="password"
          type="password"
          name="password"
          id="signInPassword"
          placeholder="Abc123!*"
          InputLabelProps={{ shrink: true }}
          {...register("password", { required: "password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Box>
    </div>
  );
};
