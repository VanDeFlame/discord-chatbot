import { shuffleArray } from '../../../src/utils/functions/shuffleArray.function';

describe('shuffleArray', () => {
    it('should return an array with the same length', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffled = shuffleArray(array);
        expect(shuffled).toHaveLength(array.length);
    });

    it('should return an array with the same elements but in different order', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffled = shuffleArray([...array]);
        expect(shuffled).toEqual(expect.arrayContaining(array));
        expect(shuffled).not.toEqual(array); // Low probability that they are in the same order
    });

    it('should handle an empty array', () => {
        const array: number[] = [];
        const shuffled = shuffleArray(array);
        expect(shuffled).toEqual([]);
    });

    it('should handle a single element array', () => {
        const array = [1];
        const shuffled = shuffleArray(array);
        expect(shuffled).toEqual([1]);
    });
});
