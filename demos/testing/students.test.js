import { computeAverage } from "./students.js";

test('average of no grades throws an error', () => {
    //@See: https://jestjs.io/docs/expect#tothrowerror
    expect(() => computeAverage([])).toThrow(Error);
});

test('average of 10 is 10', () => {
    //@See: https://jestjs.io/docs/expect#tobevalue
    expect(computeAverage([10])).toBe(10);
});

test('average of 10 + 20 + 0 is 10', () => {
    //@See: https://jestjs.io/docs/expect#tobevalue
    expect(computeAverage([10, 20, 0])).toBe(10);
});
