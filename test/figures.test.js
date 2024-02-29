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

});

describe('isGrandeSuite', () => {

});


describe('isYams', () => {

});

describe('analyzeRolls', () => {

});