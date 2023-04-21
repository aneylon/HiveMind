import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const NotFound = () => {
  let location = useLocation();
  return (
    <>
      <h1>Not Found</h1>
      <p>Could not match the path {location.pathname}</p>
      <Link to="/">Back to home</Link>
    </>
  );
};
