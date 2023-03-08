import Battle from '../src/js/battle-system';

describe('Battle system consisting of: Attacker with higher attack than defender defence, Defender with higher defense than attacker attack, Attacker misses, Defender blocks or evades the attack, Use of magic in battle', () => {

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

 test('should test the scenario of when the Attacker with higher attack than defender defense.', () => {
  const battle = new Battle(25, 50 ,20, 0);
  expect(battle.attackSucceeds()).toBe(true);
 });

//  test('should test the scenario of when the attacker succeeds and performs the attack', () => {
//   const battle = new Battle(25, 50, 20, 0);
//   expect(battle.performAttack()).toReturn();

//  });
});