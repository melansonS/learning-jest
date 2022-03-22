import { slugify } from "../slugify";

// describe("Slugify", () => {
//   it("converts a string to a slug", () => {
//     expect();
//   });
// });

test("slugify to convert a string to a slug", () => {
  expect(slugify("Tab 1")).toBe("tab-1");
  expect(slugify("sam's tab")).toBe("sams-tab");
  expect(slugify("Sam's tab!")).toBe("sams-tab");
  expect(slugify("sam's-tab")).toBe("sams-tab");
});
