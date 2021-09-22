const fizzBuzz = require("./fizzBuzz.js");

describe("fizzBuzz", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("Should return fizz", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    });

    it("Should return fizz", () => {
        expect(fizzBuzz(6)).toBe("fizz");
        expect(fizzBuzz(18)).toBe("fizz");
    });

    it("Should return buzz", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    });

    it("Should return buzz", () => {
        expect(fizzBuzz(10)).toBe("buzz");
        expect(fizzBuzz(25)).toBe("buzz");
    });

    it("Should return fizzbuzz", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });

    it("Should return fizzbuzz", () => {
        expect(fizzBuzz(30)).toBe("fizzbuzz");
        expect(fizzBuzz(150)).toBe("fizzbuzz");
    });

    it("Should return 2", () => {
        expect(fizzBuzz(2)).toBe(2);
    });

    it("Should return 8 and 52", () => {
        expect(fizzBuzz(8)).toBe(8);
        expect(fizzBuzz(52)).toBe(52);
    });
});
