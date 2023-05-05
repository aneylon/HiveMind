import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { request } from "../../Api/utils";

export const Bug = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const submitBug = (data) => {
    // Todo : add user id if user is logged in.
    data.user = 0;
    request("POST", "/bug", data).then((response) => {
      console.log({ response });
      if (response.ok) {
        reset();
        toast.success("Bug report submitted.");
      } else {
        toast.error("Error submitting bug");
        console.error();
      }
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submitBug)}
      sx={{ width: 450 }}
    >
      <Typography variant="h3">Bug Report :</Typography>
      <TextField
        required
        fullWidth
        margin="normal"
        error={!!errors.description}
        helperText={errors.description ? errors.description.message : ""}
        {...register("description", { required: "Bug Description required." })}
      />
      <Button type="submit" variant="contained">
        Submit Bug
      </Button>
    </Box>
  );
};
