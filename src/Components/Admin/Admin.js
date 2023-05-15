import { AddNews } from "../News/AddNews";
import { EditNews } from "../News/EditNews";

export const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <h2>Manage resources</h2>
      <AddNews />
      <EditNews />
    </>
  );
};
