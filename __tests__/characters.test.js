import Characters from './../src/characters.js';

describe('Character', () => {

  test('should correctly construct a character object with four character archtypes', () => {

    const name = "Wizard";
    const health = 50;
    const attackPower = 200;
    const archetype = "Magic";

    const characters = new Characters(name, health, attackPower, archetype);

    
    expect(characters.name).toEqual("Wizard");
    expect(characters.health).toEqual(50);
    expect(characters.attackPower).toEqual(200);
    expect(characters.archetype).toEqual("Magic");
  });
});