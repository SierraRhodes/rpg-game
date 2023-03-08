export default class Characters {
  constructor(name, health, attackPower, archetype) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.archetype = archetype;

    if(archetype === "mage") {
      this.health = 150;
      this.attackPower = 200; 
    }else if(archetype === "warrior"){
      this.health = 300;
      this.attackPower = 500;
    }else if(archetype === "wizard"){
      this.health = 100;
      this.attackPower = 250;
    } else if(archetype === "rogue"){
      this.health = 200;
      this.attackPower = 300; 
    }
  }
  getArchetypeCategory() {
    if(this.archetype === "mage") {
      return "Magic user";
    }else if(this.archetype === "warrior") {
      return "Melee user";
    }else if(this.archetype === "wizard") {
      return "Magic user";
    } else if(this.archetype === "rogue") {
      return "Stealth user";
    } else
     return "Unrecognized archetype";
}
receiveAttack(damage) {
  console.log(`Health before attack: ${this.health}`);
  this.health = Math.max(0, this.health - damage);
  console.log(`Health after attack: ${this.health}`);
}
}