import { useForm } from "react-hook-form";
import { request } from "../../Api/utils";

export const AddNews = () => {
  const { register, handleSubmit, reset, setFocus } = useForm();
  setFocus("title");
  const addNewsItem = (data) => {
    let addTime = new Date().toUTCString();
    data.dateTime = addTime;
    request("POST", "/news", data)
      .then((response) => {
        console.log({ response });
        if (response.ok) {
          reset();
          setFocus("title");
        }
      })
      .catch((error) => console.error);
  };
  return (
    <>
      <h1>Add News Item</h1>
      <form onSubmit={handleSubmit(addNewsItem)}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <input
          type="text"
          name="content"
          id="content"
          placeholder="content"
          {...register("content", { required: true })}
        />
        <input type="submit" value="Add News" />
      </form>
    </>
  );
};
