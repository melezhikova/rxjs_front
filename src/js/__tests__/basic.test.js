import { getTime } from '../others';

test('время для тикета', () => {
  const result = getTime(1638468423872);
  const expected = '23:07 02.12.2021';
  expect(result).toBe(expected);
});
