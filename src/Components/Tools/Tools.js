import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import Anagram from "./Anagram";
import ColorScheme from "./ColorScheme";
import Dice from "./Dice";
import Matcher from "./Matcher";
import RandomNameGenerator from "./RandomNameGenerator";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Anagram />
      <Matcher />
      <ColorScheme />
      <Dice />
      <CharacterGenerator />
      <RandomNameGenerator />
      {/* TODO:
       */}
      <p>Moar things here...</p>
    </div>
  );
};
