import Characters from './../src/characters.js';

describe('Characters', () => {

  test('should correctly construct a character object with four character archtypes', () => {
    const wizard = new Characters("Wizard", 200, 300, "Magic");
    const warrior = new Characters("Warrior", 500, 80, "Melee");
    const mage = new Characters("Mage", 100, 90, "Magic");
    const rogue = new Characters("Rogue", 320, 40, "Ranged");
    
    const characters = new Characters(wizard,warrior,mage,rogue);
    expect(characters.wizard).toEqual(wizard);
    expect(characters.warrior).toEqual(warrior);
    expect(characters.mage).toEqual(mage);
    expect(characters.rogue).toEqual(rogue);

  });
});