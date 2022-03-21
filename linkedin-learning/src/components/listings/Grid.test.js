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

// Arrays
const data2 = ['React Native', 'React'];

test('The list of courses contains React and React Native', () => {
    expect(['React', 'React Native', 'MeteorJS']).toEqual(expect.arrayContaining(data2))
})

// Objects
test("The first course to have a property 'title'", () => {
    expect(data[0]).toHaveProperty('title');
})

test("The first course to have a property 'views' and value '31,266'", () => {
    expect(data[0]).toHaveProperty('views', '31,266');
})