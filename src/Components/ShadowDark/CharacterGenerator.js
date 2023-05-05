import { useState } from "react";
import { randomNumber } from "../../Shared/Random";
import { Button, Card, Typography } from "@mui/material";

export const characterClasses = [
  { name: "Fighter", highStat: "strength", hitDie: 8 },
  { name: "Thief", highStat: "dexterity", hitDie: 4 },
  { name: "Wizard", highStat: "intelligence", hitDie: 4 },
  { name: "Priest", highStat: "wisdom", hitDie: 6 },
];
export function selectClass(abilities, characterClasses) {
  let sortedAbilities = [];
  for (let ability in abilities) {
    sortedAbilities.push({ name: ability, value: abilities[ability] });
  }
  sortedAbilities.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });
  let possibleClasses = sortedAbilities.reduce((acc, cur, index) => {
    characterClasses.forEach((characterClass) => {
      if (cur.name === characterClass.highStat) {
        acc.push(characterClass);
      }
    });
    return acc;
  }, []);
  return possibleClasses[0];
}
export const CharacterGenerator = () => {
  const [abilities, setAbilities] = useState({});
  const [characterClass, setCharacterClass] = useState({});
  const generateCharacter = () => {
    const abilities = {
      strength: rollAbilityScore(),
      dexterity: rollAbilityScore(),
      constitution: rollAbilityScore(),
      intelligence: rollAbilityScore(),
      wisdom: rollAbilityScore(),
      charisma: rollAbilityScore(),
    };
    setAbilities(abilities);
    setCharacterClass(selectClass(abilities, characterClasses));
  };
  const rollAbilityScore = () => {
    return randomNumber(6) + randomNumber(6) + randomNumber(6);
  };
  return (
    <Card sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h3">Character Generator</Typography>
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
      <Button variant="contained" onClick={generateCharacter}>
        Make a character
      </Button>
    </Card>
  );
};
