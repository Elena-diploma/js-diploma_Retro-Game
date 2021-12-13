import Character from "../Character";

export default class Bowman extends Character {
  constructor(level) {
    super(level);
    this.attack = 25;
    this.defence = 25;
    this.distance = 2;
    this.distanceAttack = 2;
    this.type = 'bowman';
  }
}
