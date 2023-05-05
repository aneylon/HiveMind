import { Link } from "react-router-dom";
import { Bug } from "./Bug";

export const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>A project for managing skirmish and RPG resources.</p>
      <p>
        Frequently asked questions can be found <Link to="/faq">here</Link>.
      </p>
      <p>
        The source code can be found{" "}
        <a href="https://github.com/aneylon/HiveMind">here</a>.
      </p>
      <Bug />
    </>
  );
};
