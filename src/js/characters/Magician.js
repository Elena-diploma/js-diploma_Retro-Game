import Character from "../Character";

export default class Magicians extends Character {
  constructor(level) {
    super(level);
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
    this.distanceAttack = 4;
    this.type = 'magician';
  }
}
