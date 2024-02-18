const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Correct values', () => {
        expect(mapArrToStrings([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5'])
    })
    test('Incorrect values', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'asafsf'])).toEqual(['1', '2', '3'])
    })
    test('Empty list', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
    test('Denial', () => {
        expect(mapArrToStrings([1, 2, 3, 4])).not.toEqual(['1', '2', '3', '4', '5'])
    })
})