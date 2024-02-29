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

});

describe('isFull', () => {

});

describe('isGrandeSuite', () => {

});


describe('isYams', () => {

});

describe('analyzeRolls', () => {

});