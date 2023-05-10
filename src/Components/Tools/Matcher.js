import { useEffect } from "react";
import { useState } from "react";

const Matcher = () => {
  const [numberOfModels, setNumberOfModels] = useState("");
  const [numberOfPaints, setNumberOfPaints] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [matchedSet, setMatchedSet] = useState([]);

  useEffect(() => {
    const inputIsValid = () => {
      const validInput =
        numberOfModels !== 0 &&
        numberOfModels !== "" &&
        numberOfPaints !== 0 &&
        numberOfPaints !== "";
      return validInput;
    };
    setIsDisabled(!inputIsValid());
  }, [numberOfModels, numberOfPaints]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let results = [];
    for (var i = 1; i <= numberOfModels; i++) {
      let paintId = Math.floor(Math.random() * numberOfPaints + 1);
      let match = { model: i, paint: paintId };
      results.push(match);
    }
    setMatchedSet(results);
    clearNumbers();
  };

  const changeNumberOfModels = (event) => {
    setNumberOfModels(event.target.value);
  };

  const changeNumberOfPaints = (event) => {
    setNumberOfPaints(event.target.value);
  };

  const clearNumbers = () => {
    setNumberOfModels("");
    setNumberOfPaints("");
  };

  const showMatched = () => {
    if (matchedSet.length > 0) {
      return matchedSet.map((set) => {
        return (
          <span key={set.model}>
            | {set.model} : {set.paint} |
          </span>
        );
      });
    }
    return <div>pick some numbers</div>;
  };

  return (
    <div>
      <h1>Matcher!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={(event) => changeNumberOfModels(event)}
          value={numberOfModels}
          placeholder="number of models"
        />
        <input
          type="number"
          onChange={(event) => changeNumberOfPaints(event)}
          value={numberOfPaints}
          placeholder="number of paints"
        />
        <button disabled={isDisabled}>Matchem!</button>
      </form>
      <div>{showMatched()}</div>
    </div>
  );
};

export default Matcher;
