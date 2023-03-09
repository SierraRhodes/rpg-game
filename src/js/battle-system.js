import Characters from './characters';
console.log(Characters);

export default class Battle extends Characters {
  constructor(magic, attack, defense, defender, attacker, miss) {
    super();
    this.magic = magic;
    this.attack = attack;
    this.defense = defense;
    this.miss = miss;
    this.attacker = attacker;
    this.defender = defender;
  }
  attackSucceeds() {
    return this.attack > this.defense; 
  }
  

  // performAttack() {
  //   if(this.attackSucceeds()) {
  //     const damage = this.attacker.attack - this.defender.defense;
  //     this.defender.receiveAttack(damage);
  //     return damage;
  //   } else {
  //     return 0;
  //   }
  // }
    

  }

 