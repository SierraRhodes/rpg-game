export default class Battle {
  constructor(magic, attack, defense, miss) {
    this.magic = magic;
    this.attack = attack;
    this.defense = defense;
    this.miss = miss;
  }
  attackSucceeds() {
    return this.attack > this.defense;
  }
  // performAttack() {

  // }
}