import data from '../../data/courses.json'

const numitems = data.length;

test('number of items = 12', () => {
    expect(numitems).toBe(12)
})

test('number of items to be greater than or euqal to  12', () => {
    expect(numitems).toBeGreaterThanOrEqual(11)
})

const dataTest = data[0].title;

test("there is a 'JS' in this title", () => {
    expect(dataTest).toMatch(/JS/);
})

test("this title contains 'REACT'", () => {
    expect(dataTest).toContain("React");
})
