import { characterClasses, selectClass } from "./CharacterGenerator";

describe("Character Generator", () => {
  it("Should select the class with the highest ability score", () => {
    let abilities = {
      intelligence: 12,
      wisdom: 11,
      charisma: 10,
      strength: 15,
      dexterity: 14,
      constitution: 13,
    };
    let result = selectClass(abilities, characterClasses);
    console.log(result);
    expect(result.name).toEqual("Fighter");
  });
});
