import Battle from '../src/js/battle-system';
import Characters from '../src/js/characters';

describe('Battle system consisting of: Attacker with higher attack than defender defence, Defender with higher defense than attacker attack, Attacker misses, Defender blocks or evades the attack, Use of magic in battle', () => {

  test('should correctly construct a battle constructor object', () => {
  const magic = 25;
  const attack = 50;
  const defense = 20;
  const miss = 0;
  const attacker = "Rouge";
  const defender = "Magi";

  const battle = new Battle(magic, attack, defense, defender, attacker, miss);

  expect(battle.magic).toEqual(magic);
  expect(battle.attack).toEqual(attack);
  expect(battle.defense).toEqual(defense);
  expect(battle.miss).toEqual(miss);
  expect(battle.defender).toEqual(defender);
  expect(battle.attacker).toEqual(attacker);
 });

 test('should test the scenario of when the Attacker with higher attack than defender defense.', () => {
  const battle = new Battle(25, 50 ,20, 0);
  expect(battle.attackSucceeds()).toBe(true);
 });
// test('should not reduce health when damage is 0', () => {
//   const characters = new Characters("Wren", 300, 500, "warrior");
//   characters.receiveAttack(0);
//   expect(characters.health).toEqual(300);
// });
//  test('should reduce the defenders health if successful', () => {
//   const attacker = new Characters('Attacker', 20, 10, 100);
//   const defender = new Characters('Defender', 40, 5, 100);
//   const battle = new Battle(null, null, null, defender, attacker, null);
//   const damage = battle.performAttack();
//     });


 });  