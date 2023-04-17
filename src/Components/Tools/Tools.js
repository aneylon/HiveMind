import { CharacterGenerator } from "../ShadowDark/CharacterGenerator";
import RandomNameGenerator from "./RandomNameGenerator";

export const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <CharacterGenerator />
      <RandomNameGenerator />
      <p>Moar things here...</p>
    </div>
  );
};
