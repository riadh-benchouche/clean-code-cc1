const {analyzeRolls, isYams, isCarre, isFull, isGrandeSuite, isBrelan} = require('../figures');


describe('isBrelan', () => {
    test('returns the points and value of Brelan if present', () => {
        expect(isBrelan([4, 4, 4, 2, 6])).toEqual({points: 28, value: 4});
    });

    test('returns null if no Brelan is present', () => {
        expect(isBrelan([1, 2, 3, 4, 5])).toBeNull();
    });
});

describe('isCarre', () => {
    test('returns the points and value of Carré if present', () => {
        expect(isCarre([3, 3, 3, 3, 6])).toEqual({points: 35, value: 3});
    });

    test('returns null if no Carré is present', () => {
        expect(isCarre([1, 2, 3, 4, 5])).toBeNull();
    });
});

describe('isFull', () => {
    test('returns the points and values of brelan and pair if present', () => {
        expect(isFull([2, 2, 2, 4, 4])).toEqual({points: 30, brelan: 2, paire: 4});
    });

    test('returns null if no Full is present', () => {
        expect(isFull([1, 2, 3, 4, 5])).toBeNull();
    });
});

describe('isGrandeSuite', () => {
    test('returns true if it is a Grande Suite', () => {
        expect(isGrandeSuite([2, 3, 4, 5, 6])).toBe(true);
    });

    test('returns false if it is not a Grande Suite', () => {
        expect(isGrandeSuite([1, 2, 3, 4, 5])).toBe(true);
    });

    test('returns false if it is not a Grande Suite', () => {
        expect(isGrandeSuite([1, 2, 3, 4, 6])).toBe(false);
    });
});


describe('isYams', () => {
    test('returns true if all dice have the same value', () => {
        expect(isYams([3, 3, 3, 3, 3])).toBe(true);
    });

    test('returns false if not all dice have the same value', () => {
        expect(isYams([1, 2, 3, 4, 5])).toBe(false);
    });
});

describe('analyzeRolls', () => {

});