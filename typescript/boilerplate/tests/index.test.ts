import { hello } from "../src/index";

test("hello", () => {
  expect(hello("World")).toBe("Hello World!");
});
