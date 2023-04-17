import { randomNumber } from "./Random";

describe("Random Test", () => {
  it("Should create a random number", () => {
    let result = randomNumber(4);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(5);
    expect(typeof result).toBe("number");
  });
});
