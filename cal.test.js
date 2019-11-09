const cal = require('./cal')

describe('plus function', () => {
    test('return 5 if a = 3 and b = 2', () => {
        const a = 3;
        const b = 2;
        const expected = 5;
        const result = cal.plus(a, b);
        expect(result).toBe(expected)
    })
});

describe('minus function', () => {
    test('return 1 if a = 2 and b = 1', () => {
        const a = 2;
        const b = 1;
        const expected = 1;
        const result = cal.minus(a, b);
        expect(result).toBe(expected)
    })

});

describe('multiplied function', () => {
    test('return 6 if a = 2 and b = 3', () => {
        const a = 2;
        const b = 3;
        const expected = 6;
        const result = cal.multiplied(a, b);
        expect(result).toBe(expected)
    })

})