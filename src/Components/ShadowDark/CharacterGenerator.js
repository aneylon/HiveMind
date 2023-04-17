import { useState } from "react";
import { randomNumber } from "../../Shared/Random";

export const CharacterGenerator = () => {
  const [abilities, setAbilities] = useState({});
  const [characterClass, setCharacterClass] = useState({});
  const characterClasses = [
    { name: "Fighter", highStat: "strength", hitDie: 8 },
    { name: "Thief", highStat: "dexterity", hitDie: 4 },
    { name: "Wizard", highStat: "intelligence", hitDie: 4 },
    { name: "Priest", highStat: "wisdom", hitDie: 6 },
  ];
  const generateCharacter = () => {
    const abilities = {
      strength: rollAbilityScore(),
      dexterity: rollAbilityScore(),
      constitution: rollAbilityScore(),
      intelligence: rollAbilityScore(),
      wisdom: rollAbilityScore(),
      charisma: rollAbilityScore(),
    };
    console.log(abilities);
    setAbilities(abilities);
    setCharacterClass(determineClass(abilities));
  };
  const determineClass = (abilities) => {
    let max = { name: "", value: 0 };
    for (let ability in abilities) {
      if (abilities[ability] > max.value) {
        max.name = ability;
        max.value = abilities[ability];
      }
    }
    let selectedClass = characterClasses.filter((characterClass) => {
      if (characterClass.highStat === max.name) return characterClass;
    });
    return selectedClass[0];
  };
  const rollAbilityScore = () => {
    return randomNumber(6) + randomNumber(6) + randomNumber(6);
  };
  return (
    <div>
      <h1>Character Generator</h1>
      <div>
        <span>Class: {characterClass.name}</span>
      </div>
      <div>
        <span>Str: {abilities.strength}</span>
        <span>Dex: {abilities.dexterity}</span>
        <span>Con: {abilities.constitution}</span>
        <span>Int: {abilities.intelligence}</span>
        <span>Wis: {abilities.wisdom}</span>
        <span>Chr: {abilities.charisma}</span>
      </div>
      <button onClick={generateCharacter}>Make a character</button>
    </div>
  );
};