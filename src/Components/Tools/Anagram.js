import React, { useState } from "react";
import { stringPermutations } from "../../Shared/permutation";

const Anagram = () => {
  const [userWord, setUserWord] = useState("");
  const [anagrams, setAnagrams] = useState([]);

  const createAnagrams = (word) => {
    let results = stringPermutations(word);
    setAnagrams(results);
  };
  const showAnagrams = (thingsToShow) => {
    if (thingsToShow.length < 1) return <li>Nag a ram!</li>;
    else {
      return thingsToShow.map((anagram, index) => {
        return <div key={index}>{anagram.split("").join(" ")}</div>;
      });
    }
  };
  return (
    <div>
      <h1>Anagram-a-tron!</h1>
      <input
        onChange={(event) => {
          setUserWord(event.target.value);
        }}
        placeholder="word to mix up"
      />
      <button
        onClick={() => {
          createAnagrams(userWord);
        }}
      >
        Anagram-a-tron it!
      </button>
      <ul>{showAnagrams(anagrams)}</ul>
    </div>
  );
};

export default Anagram;
