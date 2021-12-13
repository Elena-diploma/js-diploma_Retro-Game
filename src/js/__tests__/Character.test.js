import Character from '../Character';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

test('проверка создания класса через Character', () => {
  const error = () => new Character();
  expect(error).toThrow();
});

test('при вызове наследника class Character ошибка не выдается', () => {
  class Inheritor extends Character {}
  const instance = () => new Inheritor(undefined, undefined);
  expect(instance).not.toThrow();
});

test('проверка создания vampire', () => {
  const received = new Vampire(1);
  const expected = {
    type: 'vampire',
    level: 1,
    health: 50,
    attack: 25,
    defence: 25,
    distance: 2,
    distanceAttack: 2,
  };
  expect(received).toEqual(expected);
});

test('проверка создания bowman', () => {
  const received = new Bowman(1);
  const expected = {
    type: 'bowman',
    level: 1,
    health: 50,
    attack: 25,
    defence: 25,
    distance: 2,
    distanceAttack: 2,
  };
  expect(received).toEqual(expected);
});

test('проверка создания daemon', () => {
  const received = new Daemon(1);
  const expected = {
    type: 'daemon',
    level: 1,
    health: 50,
    attack: 10,
    defence: 40,
    distance: 1,
    distanceAttack: 4,
  };
  expect(received).toEqual(expected);
});

test('проверка создания magician', () => {
  const received = new Magician(1);
  const expected = {
    type: 'magician',
    level: 1,
    health: 50,
    attack: 10,
    defence: 40,
    distance: 1,
    distanceAttack: 4,
  };
  expect(received).toEqual(expected);
});

test('проверка создания swordsman', () => {
  const received = new Swordsman(1);
  const expected = {
    type: 'swordsman',
    level: 1,
    health: 50,
    attack: 40,
    defence: 10,
    distance: 4,
    distanceAttack: 1,
  };
  expect(received).toEqual(expected);
});

test('проверка создания undead', () => {
  const received = new Undead(1);
  const expected = {
    type: 'undead',
    level: 1,
    health: 50,
    attack: 40,
    defence: 10,
    distance: 4,
    distanceAttack: 1,
  };
  expect(received).toEqual(expected);
});
