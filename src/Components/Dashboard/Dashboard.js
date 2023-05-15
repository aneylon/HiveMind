import { AddNews } from "../News/AddNews";
import { EditNews } from "../News/EditNews";
import { News } from "../News/News";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard!</h1>
      <AddNews />
      <EditNews />
      <News />
    </>
  );
};
