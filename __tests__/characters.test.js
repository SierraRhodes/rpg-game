import Characters from '../src/js/characters.js';

describe('Character', () => {

  test('should correctly construct a character object with four character archtypes', () => {
    const name = "Wiz";
    const health = 50;
    const attackPower = 50;
    const archetype = "Wizard";

    const characters = new Characters(name, health, attackPower, archetype);
    expect(characters.name).toEqual("Wiz");
    expect(characters.health).toEqual(50);
    expect(characters.attackPower).toEqual(50);
    expect(characters.archetype).toEqual("Wizard");
  });

  test('should correctly get archetypes health and attack power', () => {
    const wizard = new Characters("Wiz", 100, 250, "wizard");
    expect(wizard.health).toEqual(100);
    expect(wizard.attackPower).toEqual(250);

    const warrior = new Characters("Wren", 300, 500, "warrior");
    expect(warrior.health).toEqual(300);
    expect(warrior.attackPower).toEqual(500);

    const mage = new Characters("Magi", 150, 200, "mage");
    expect(mage.health).toEqual(150);
    expect(mage.attackPower).toEqual(200);

    const rogue = new Characters("Rouge", 200, 300, "rogue");
    expect(rogue.health).toEqual(200);
    expect(rogue.attackPower).toEqual(300);
  })

  test('should categorize archetypes', () => {
    const wizard = new Characters("Wiz", 100, 250, "wizard");
    expect(wizard.getArchetypeCategory()).toEqual("Magic user");

    const warrior = new Characters("Wren", 300, 500, "warrior");
    expect(warrior.getArchetypeCategory()).toEqual("Melee user");

    const mage = new Characters("Magi", 150, 200, "mage");
    expect(mage.getArchetypeCategory()).toEqual("Magic user");

    const rogue = new Characters("Rouge", 200, 300, "rogue");
    expect(rogue.getArchetypeCategory()).toEqual("Stealth user");
  }); 
  test('should return "Unrecognized archetype" for unknown archetype', () => {
    const characters = new Characters("Will", 400, 300, "ninja");
    expect(characters.getArchetypeCategory()).toEqual("Unrecognized archetype");
  });
  test('should update health when character takes damage', () => {
    const characters = new Characters("Wren", 300, 500, "warrior");
    characters.receiveAttack(50);
    expect(characters.health).toEqual(250); 
  });
  test('should not reduce health when damage is 0', () => {
    const characters = new Characters("Wren", 300, 500, "warrior");
    characters.receiveAttack(0);
    expect(characters.health).toEqual(300);
  });
  
});