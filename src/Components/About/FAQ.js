// import { useParams } from "react-router";

export const FAQ = () => {
  // get the subject to know which section to expand.
  // let { subject } = useParams();

  // todo : expand select subject section
  return (
    <>
      <h1>FAQ</h1>
      <ul>
        <li>
          <h2>Can I contribute to the project?</h2>
          <p>
            Yes! The source code can be found{" "}
            <a href="https://github.com/aneylon/HiveMind">here</a>.
          </p>
          <p>
            Features may be requested and bugs can be reported through the
            issues section.
          </p>
        </li>
      </ul>
    </>
  );
};
