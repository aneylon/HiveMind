import { Counter } from "../../Redux/Counter";
import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import Dice from "./Dice";
import RandomNameGenerator from "./RandomNameGenerator";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Counter />
      <Dice />
      <CharacterGenerator />
      <RandomNameGenerator />
      <p>Moar things here...</p>
    </div>
  );
};
