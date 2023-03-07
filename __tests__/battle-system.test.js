import Battle from '../src/js/battle-system';

describe('Battle', () => {

  test('should correctly construct a battle constructor object', () => {
  const magic = 25;
  const attack = 50;
  const defense = 20;
  const miss = 0;

  const battle = new Battle(magic, attack, defense, miss);

  expect(battle.magic).toEqual(magic);
  expect(battle.attack).toEqual(attack);
  expect(battle.defense).toEqual(defense);
  expect(battle.miss).toEqual(miss);
 });
});