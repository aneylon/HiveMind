import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    console.log(data);
    // if successful
    reset();
    toast.success("Bug report submitted.");
  };
  return (
    <Box component="form" onSubmit={handleSubmit(submitBug)}>
      <TextField required {...register("description", { required: true })} />
      <Button type="submit">Submit Bug</Button>
    </Box>
  );
};
