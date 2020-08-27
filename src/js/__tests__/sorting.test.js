import orderByProps from '../sorting';

test('check sorted with empty fields list', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const except = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, [])).toEqual(except);
});

test('check sorted with some sort fields list', () => {
  const obj = {
    attack: 80, name: 'мечник', health: 10, defence: 40, some_props: 100, level: 2,
  };
  const except = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'some_props', value: 100 },
  ];
  expect(orderByProps(obj, ['name', 'health', 'attack'])).toEqual(except);
});
