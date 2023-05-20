import { Counter } from "../../Redux/Counter";
import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import Anagram from "./Anagram";
import ColorScheme from "./ColorScheme";
import Dice from "./Dice";
import EnforcerNameGenerator from "./EnforcerNameGenerator";
import Matcher from "./Matcher";
import RandomNameGenerator from "./RandomNameGenerator";
import { Terminal } from "./Terminal";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Terminal />
      {/* TODO:
      <Counter />
      <EnforcerNameGenerator />
      <RandomNameGenerator />
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
