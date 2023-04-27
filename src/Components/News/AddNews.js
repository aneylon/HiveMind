import { useForm } from "react-hook-form";
import { request } from "../../Api/utils";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

export const AddNews = () => {
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
  setFocus("title");
  const addNewsItem = (data) => {
    let addTime = new Date().toUTCString();
    data.dateTime = addTime;
    request("POST", "/news", data)
      .then((response) => {
        console.log({ response });
        if (response.ok) {
          toast.success("Added New News!");
          reset();
          setFocus("title");
        } else {
          toast.error("Error adding new news.");
          console.error("Error posting : ", response);
        }
      })
      .catch((error) => console.error);
  };
  return (
    <>
      <h1>Add News Item</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(addNewsItem)}
        sx={{ width: 450 }}
      >
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          label="title"
          name="title"
          id="title"
          placeholder="title"
          {...register("title", { required: "title is required" })}
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="content"
          name="content"
          id="content"
          placeholder="content"
          {...register("content", { required: "content is required" })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.content}
          helperText={errors.content ? errors.content.message : ""}
        />
        <Button variant="contained" type="submit">
          Add News
        </Button>
      </Box>
    </>
  );
};
