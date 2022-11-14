import { splitArray } from './splitArray';

describe('splitArray', () => {
  describe('normal case', () => {
    it('should split array into chunks', () => {
      expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10],
      ]);
    });
  });

  describe('edge case', () => {
    it('should return empty array if array is empty', () => {
      expect(splitArray([], 3)).toEqual([]);
    });
  });
});
