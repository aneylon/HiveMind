import { characterClasses, selectClass } from "./CharacterGenerator";

describe("Character Generator", () => {
  it("Should select the correct class by the highest ability score", () => {
    let fighterAbilities = {
      intelligence: 12,
      wisdom: 11,
      charisma: 10,
      strength: 15,
      dexterity: 14,
      constitution: 13,
    };
    let result = selectClass(fighterAbilities, characterClasses);
    expect(result.name).toEqual("Fighter");
    let thiefAbilities = {
      intelligence: 12,
      wisdom: 11,
      charisma: 10,
      strength: 14,
      dexterity: 15,
      constitution: 13,
    };
    let thiefResult = selectClass(thiefAbilities, characterClasses);
    expect(thiefResult.name).toEqual("Thief");
    let priestAbilities = {
      intelligence: 12,
      wisdom: 15,
      charisma: 10,
      strength: 11,
      dexterity: 14,
      constitution: 13,
    };
    let priestResult = selectClass(priestAbilities, characterClasses);
    expect(priestResult.name).toEqual("Priest");
    let wizardAbilities = {
      intelligence: 15,
      wisdom: 11,
      charisma: 10,
      strength: 14,
      dexterity: 12,
      constitution: 13,
    };
    let wizardResult = selectClass(wizardAbilities, characterClasses);
    expect(wizardResult.name).toEqual("Wizard");
  });
});
