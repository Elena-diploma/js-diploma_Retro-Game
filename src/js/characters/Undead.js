import Character from "../Character";

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.attack = 40;
    this.defence = 10;
    this.distance = 4;
    this.distanceAttack = 1;
    this.type = 'undead';
  }
}
