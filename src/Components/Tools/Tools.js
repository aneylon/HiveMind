import { Counter } from "../../Redux/Counter";
import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import Anagram from "./Anagram";
import ColorScheme from "./ColorScheme";
import Dice from "./Dice";
import EnforcerNameGenerator from "./EnforcerNameGenerator";
import Matcher from "./Matcher";
import RandomNameGenerator from "./RandomNameGenerator";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Counter />
      <EnforcerNameGenerator />
      <RandomNameGenerator />
      {/* TODO:
      <Anagram />
      <Matcher />
      <ColorScheme />
      <Dice />
      <CharacterGenerator />
       */}
      <p>Moar things here...</p>
    </div>
  );
};
