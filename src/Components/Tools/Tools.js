import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import ColorScheme from "./ColorScheme";
import Dice from "./Dice";
import RandomNameGenerator from "./RandomNameGenerator";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <ColorScheme />
      <Dice />
      <CharacterGenerator />
      <RandomNameGenerator />
      <p>Moar things here...</p>
    </div>
  );
};
