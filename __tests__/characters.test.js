import Characters from './../src/characters.js';

describe('Characters', () => {

  test('should correctly construct a character object with four character archtypes', () => {
    const wizard = ("Wizard");
    const warrior = ("Warrior");
    const mage = ("Mage");
    const rogue = ("Rogue");
    const characters = new Characters(wizard,warrior,mage,rogue);
    expect(characters.wizard).toEqual(wizard);
    expect(characters.warrior).toEqual(warrior);
    expect(characters.mage).toEqual(mage);
    expect(characters.rogue).toEqual(rogue);

  });
});